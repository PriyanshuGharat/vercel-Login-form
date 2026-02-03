from fastapi import FastAPI
import json

app = FastAPI()

@app.get("/")
def hello():
    return {
        "message": "Welcome to Student SQI"       
    }

def load_data():
    with open('Studentdata.json','r') as f:
        data = json.load(f)
    return data

@app.get("/Student_Data")
def Student_Data():
    data = load_data()
    return data