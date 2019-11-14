import sqlite3
import os

DIR = os.path.dirname(__file__)
DBFILENAME = "medical.db"
DBPATH = os.path.join(DIR, DBFILENAME)

def schema(dbpath=DBPATH):
    with sqlite3.connect(dbpath) as conn:
        cur = conn.cursor()
        DROPSQL = "DROP TABLE IF EXISTS {tablename};"

        cur.execute(DROPSQL.format(tablename="users"))

        SQL = """CREATE TABLE users(
                pk INTEGER PRIMARY KEY AUTOINCREMENT,
                username VARCHAR (16),
                first_name VARCHAR,
                last_name VARCHAR,
                password_hash VARCHAR (128),
                email VARCHAR,
                security_question BLOB,
                token VARCHAR,
                api_key VARCHAR,
                unic_id VARCHAR,
                provider_pk INTEGER,
                FOREIGN KEY(provider_pk) REFERENCES providers(pk)
            );"""

        cur.execute(SQL)

        cur.execute(DROPSQL.format(tablename="user_files"))

        SQL = """ CREATE TABLE user_files(
            pk INTEGER PRIMARY KEY AUTOINCREMENT,
            blood_type VARCHAR,
            allergies VARCHAR,
            medications VARCHAR,
            unic_id VARCHAR,
            user_pk INTEGER,
            FOREIGN KEY(user_pk) REFERENCES users(pk)
            ); """

        cur.execute(SQL)

        cur.execute(DROPSQL.format(tablename="providers"))

        SQL = """ CREATE TABLE providers(
            pk INTEGER PRIMARY KEY AUTOINCREMENT,
            hospital VARCHAR,
            doctor_name VARCHAR,
            department VARCHAR,
            username VARCHAR (16),
            email VARCHAR,
            password_hash VARCHAR(128),
            token VARCHAR,
            api_key VARCHAR
            ); """

        cur.execute(SQL)

schema()