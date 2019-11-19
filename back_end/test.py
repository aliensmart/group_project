from users import User
import sqlite3
from providers import Provider
from user_files import User_files
from orm import ORM
import util

ORM.dbpath = 'medical.db' 

 


print(util.temp_token())

