from users import User
import sqlite3
from providers import Provider
from user_files import User_files
from orm import ORM
import util

ORM.dbpath = 'medical.db'


def write_token_to_chain(self, user_id, provider_id):
        user = User.one_from_where_clause('WHERE unic_id=?', (user_id,))
        provider = Provider.one_from_where_clause('WHERE unic_id=?', (provider_id))
        print(provider)
        if user and provider:
            # TODO: generate single-use token here
            token = user.temp_token
            print(token)
            # TODO: encrypt token w/ providers public key
            with sqlite3.connect('flaskchain.db') as conn:
                cur = conn.cursor()
                SQL = "INSERT INTO chain (user_token, provider_id) VALUES(?,?)"
                cur.execute(SQL, (token, provider_id))
        else:
            "Patient and/or Provider don't exist"


print(write_token_to_chain("1c228a7d", "29181163"))