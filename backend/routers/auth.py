from fastapi import APIRouter
router = APIRouter()

@router.get("/validate-key")
def validate_key(key: str):
    if key == "demo1234":
        return {"valid": True, "client_name": "Auto Wrap Pro"}
    return {"valid": False}
