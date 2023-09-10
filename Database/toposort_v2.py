from pymongo.mongo_client import MongoClient
from pymongo.server_api import ServerApi

from populate import *
import collections


def queryCourses(major):
    required_courses = db.Majors.find_one({"name": major})["reqs"]
    print("Required courses:", required_courses)

    required_course_objects = []
    for course in required_courses:
        response = db.Courses.find_one({"title": course})
        required_course_objects.append(Course.jsontoCourse(response))
    return required_course_objects

def build_graph(required_courses):
    adj_list = collections.defaultdict(list)

    # Build adjacency list
    for course in required_courses:
        for prereq in course.prereqs:
            adj_list[prereq].append(course.title)

    # Build the indegrees list
    in_degrees = collections.defaultdict(int)
    
    for course in required_courses:
        in_degrees[course.title] = 0

    for course in required_courses:
        for prereq in course.prereqs:
            in_degrees[course.title] += 1


    # Topological sort
    queue = []
    for course_name, indegree in in_degrees.items():
        if indegree == 0:
            queue.append(course_name)

    topo_order = []

    while queue:
        course_name = queue.pop(0)
        topo_order.append(course_name)

        for post_reqs_names in adj_list[course_name]:
            in_degrees[post_reqs_names] -= 1
            if in_degrees[post_reqs_names] == 0:
                queue.append(post_reqs_names)

    return topo_order

db = setup()
required_course_objects = queryCourses("Computer Science, BSE")
topo_order = build_graph(required_course_objects)