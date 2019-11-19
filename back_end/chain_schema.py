import sqlite3
import os

DIR = os.path.dirname(__file__)
DBFILENAME = "flaskchain.db"
DBPATH = os.path.join(DIR, DBFILENAME)

def schema(dbpath=DBPATH):
    with sqlite3.connect(dbpath) as conn:
        cur = conn.cursor()
        DROPSQL = "DROP TABLE IF EXISTS chain;"

        cur.execute(DROPSQL.format(tablename="chain"))

        SQL = """CREATE TABLE chain(
                pk INTEGER PRIMARY KEY AUTOINCREMENT,
                user_token VARCHAR,
                provider_id VARCHAR); """

        cur.execute(SQL)

schema()