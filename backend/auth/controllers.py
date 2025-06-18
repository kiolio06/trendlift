#logica del negocio de autenticacion de usuarios con name, email y password
"""registro name, email, password
login email, password"""

from .models import users_collection
from passlib.hash import bcrypt
from jose import jwt
from datetime import datetime, timedelta
from fastapi import HTTPException
import os

SECRET_KEY = os.getenv("SECRET_KEY", "mysecret")
ALGORITHM = "HS256"
ACCESS_TOKEN_EXPIRE_MINUTES = 30

def get_user_by_email(email: str):
    return users_collection.find_one({"email": email})

def create_user(data):
    if get_user_by_email(data["email"]):
        raise HTTPException(status_code=400, detail="Email already registered.")
    data["password"] = bcrypt.hash(data["password"])
    users_collection.insert_one(data)
    return {"msg": "User created successfully."}

def authenticate_user(email: str, password: str):
    user = get_user_by_email(email)
    if not user or not bcrypt.verify(password, user["password"]):
        raise HTTPException(status_code=401, detail="Invalid credentials.")
    token_data = {
        "sub": user["email"],
        "exp": datetime.utcnow() + timedelta(minutes=ACCESS_TOKEN_EXPIRE_MINUTES)
    }
    token = jwt.encode(token_data, SECRET_KEY, algorithm=ALGORITHM)
    return {
    "access_token": token,
    "token_type": "bearer",
    "username": user["username"]
}
