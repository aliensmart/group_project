from users import User
import sqlite3
from providers import Provider
from user_files import User_files
from orm import ORM
import util

ORM.dbpath = 'medical.db' 

def get_patient_info_from_token(self, token):
        with sqlite3.connect('medical.db') as conn:
            cur = conn.cursor()
            SQL =  "SELECT * FROM users JOIN user_files ON users.pk = user_files.pk WHERE temp_token=?"
            cur.execute(SQL, (token,))
            data = cur.fetchall()
            return data


print(get_patient_info_from_token("ThisIsATempToken"))