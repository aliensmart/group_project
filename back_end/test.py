from users import User
import sqlite3
from providers import Provider
from user_files import User_files
from orm import ORM
import util
import rsa


pub, priv = rsa.newkeys(512)
pub_saved = pub.save_pkcs1(format="PEM")
pviv_saved = priv.save_pkcs1(format="PEM")

print(pub_saved)


def write_token_to_chain():
    user = User.one_from_where_clause('WHERE unic_id="1c228a7d"')
    provider = Provider.one_from_where_clause('WHERE unic_id="29181163"')
    if user and provider:
        # generates single-use token here 
        user.temp_token = util.temp_token()
        user.save()
        temp_token = user.temp_token
        # encrypt token w/ providers public key
        encrypted = rsa.encrypt(temp_token.encode("utf8"), rsa.key.PublicKey.load_pkcs1(pub_saved))
        return encrypted
    else:
        return None

print(write_token_to_chain())