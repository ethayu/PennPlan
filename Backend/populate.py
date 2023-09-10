from pymongo.mongo_client import MongoClient
from pymongo.server_api import ServerApi


def setup():
    uri = "mongodb+srv://ethayu1:dMyZtC65r7tEA8Ge@cluster0.sb78cwt.mongodb.net/?retryWrites=true&w=majority"

    # Create a new client and connect to the server
    client = MongoClient(uri, server_api=ServerApi('1'))

    # Send a ping to confirm a successful connection
    try:
        client.admin.command('ping')
        print("Pinged your deployment. You successfully connected to MongoDB!")
    except Exception as e:
        print(e)
    return client.Database

class PCR_Data:
    def __init__(self, num_reviewers, name, amount_learned, course_quality, difficulty, work_required):
        self.num_reviewers = num_reviewers
        self.name = name
        self.amount_learned = amount_learned
        self.course_quality = course_quality
        self.difficulty = difficulty
        self.work_required = work_required

#create course class
class Course:
    def __init__(self, title, name, description, prereqs, pcr_data: PCR_Data, embedding):
        self.title = title
        self.name = name
        self.description = description
        self.prereqs = prereqs
        self.pcr_data = pcr_data
        self.embedding = embedding
    def jsontoCourse(json):
        return Course(json["title"], json["name"], json["description"], json["prereqs"], PCR_Data(json["pcr_data"]["num_reviewers"], json["pcr_data"]["name"], json["pcr_data"]["amount_learned"], json["pcr_data"]["course_quality"], json["pcr_data"]["difficulty"], json["pcr_data"]["work_required"]), json["embedding"])
    

class Field:
    def __init__(self, name, reqs, electives): #to complete field, need to take courses in reqs, and $electives.value courses from $electives.key
        self.name = name
        self.reqs = reqs
        self.electives = electives

class Concentration:
    def __init__(self, name, reqs, course_bank, number): #to complete concentration, need to take courses in reqs, and $number courses from $course_bank
        self.name = name
        self.reqs = reqs
        self.course_bank = course_bank
        self.number = number

def addCourse(course: Course, db):
    courses = db.Courses
    json = vars(course)
    json['pcr_data'] = vars(course.pcr_data)
    courses.insert_one(json)

def addMajor(major: Field, db):
    majors = db.Majors
    majors.insert_one(vars(major))

def addMinor(minor: Field, db):
    minors = db.Minors
    minors.insert_one(vars(minor))