from users import User
import sqlite3
from providers import Provider
from user_files import User_files
from orm import ORM
import util

ORM.dbpath = 'medical.db'


def get_patient_names():
        with sqlite3.connect('medical.db') as conn:
                cur = conn.cursor()
                SQL = "SELECT first_name, last_name FROM users where unic_id='1c228a7d'"
                cur.execute(SQL)
                user_info = cur.fetchall()
                print(user_info[0][0], user_info[0][1])

get_patient_names()