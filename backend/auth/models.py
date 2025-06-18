#conexion a la base de datos
import os
from pymongo import MongoClient
from dotenv import load_dotenv

load_dotenv()  # Carga las variables de entorno desde un archivo .env

client = MongoClient(os.getenv("MONGO_URI"))  # Define esta variable en un archivo `.env`
db = client["trendlift"]  # Nombre de la base de datos
users_collection = db["users"]

