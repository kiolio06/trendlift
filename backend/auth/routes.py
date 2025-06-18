#endpoints
from fastapi import APIRouter
from .schemas import UserRegister, UserLogin
from .controllers import create_user, authenticate_user

router = APIRouter(prefix="/auth", tags=["Auth"])

@router.post("/register")
def register(user: UserRegister):
    return create_user(user.dict())

@router.post("/login")
def login(user: UserLogin):
    return authenticate_user(user.email, user.password)
