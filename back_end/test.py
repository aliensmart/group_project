from users import User
from providers import Provider
from user_files import User_files
from orm import ORM
import util

ORM.dbpath = 'medical.db'


def get_files(api_key):
    user = User.api_authenticate(api_key)
    files = user.get_files()
    for file in files:
        return (file.blood_type)

print(get_files('12345'))