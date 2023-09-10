from pymongo.mongo_client import MongoClient
from pymongo.server_api import ServerApi

from populate import *

db = setup()

# reqs = ["CIS 1100", "CIS 1200", "CIS 1210", "CIS 2400", "CIS 2620", "CIS 3200", "CIS 3800", "CIS 4710", "CIS 4000", "CIS 4010", "MATH 1400", "MATH 1410", "CIS 1600", "CIS 2610", "MATH 2400", "MEAM 1100", "PHYS 0151", "EAS 2030"]
# electives = {"CIS Elective": 4, "Math/Natural Science Elective" : 1, "CIS Technical Elective":6, "Social Science/Humanities ELective":4, "Technology in Business & Society Elective":2, "Free Elective":1}
# CIS = Field("Computer Science", reqs, electives)

# addMajor(CIS, db)

class node:
    def __init__(self, course):
        self.course = course
        self.prereqs = []
        self.postreqs = []
        self.visited = False
    def addPrereq(self, prereq):
        self.prereqs.append(prereq)
        prereq.postreqs.append(self)
    def visit(self):
        self.visited = True

def queryCourses(major):
    courses = db.Majors.find_one({"name": major})["reqs"]
    ret = []
    for course in courses:
        response = db.Courses.find_one({"title": course})
        ret.append(Course.jsontoCourse(response))
    return ret
        
def generateGraph(courses: list[Course]):
    graph = {}
    for course in courses:
        graph[course.name] = node(course)
    for course in courses:
        for prereq in course.prereqs:
            if prereq in graph:
                graph[course.name].addPrereq(prereq)
            else:
                graph[course.name].addPrereq(prereq)
                graph[prereq] = node(prereq)
    return graph

def toposort(graph):
    ret = []
    for course in graph:
        if course.preqs == []:
            ret.append(course)
    while len(ret) != len(graph):
        for course in ret:
            if course.visited == False:
                course.visit()
                for prereq in course.postreqs:
                    prereq.prereqs.remove(course)
                    if prereq.preqs == []:
                        ret.append(prereq)
    return ret
courses = queryCourses("Computer Science")
graph = generateGraph(courses)
print(toposort(graph))
