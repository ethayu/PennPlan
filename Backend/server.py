from flask import Flask
from toposort_v2 import *


app = Flask(__name__)

@app.route("/")
def hello_world():
    return "Hello, World!"

@app.route('/topo')
def toposort():
    required_course_objects = queryCourses("Computer Science, BSE")
    topo_order = build_graph(required_course_objects)

    num_parts = 8
    avg = len(topo_order) // num_parts
    remainder = len(topo_order) % num_parts
    result = []

    start = 0
    for i in range(num_parts):
        if i < remainder:
            end = start + avg + 1
        else:
            end = start + avg
        result.append(topo_order[start:end])
        start = end

    return result


@app.route('/description/<string:number>')
def get_description(number):
    with open('course_description_map.json', 'r') as f:
        number_description = json.load(f)

    return number_description.get(number, "Description not found")

if __name__ == "__main__":
    app.run(debug=True)