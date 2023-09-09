from pymongo.mongo_client import MongoClient
from pymongo.server_api import ServerApi
import uuid


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

#create course class
class Course:
    def __init__(self, id, title, name, description, prereqs, pcr_data, embedding):
        self.id = id
        self.title = title
        self.name = name
        self.description = description
        self.prereqs = prereqs
        self.pcr_data = pcr_data
        self.embedding = embedding
    
    def json(self):
        return {
            "id": self.id,
            "title": self.title,
            "name": self.name,
            "description": self.description,
            "prereqs": self.prereqs,
            "pcr_data": self.pcr_data,
            "embedding": self.embedding
        }
    
def addCourse(course: Course, db):
    courses = db.courses
    courses.insert_one(course)

db = setup()

