from orm import ORM
from users import User
import util
import sqlite3
import rsa



class Provider(ORM):
    tablename = 'providers'
    fields = ['hospital', 'doctor_name', 'department', 'username',
                'email', 'password_hash', 'token', 'api_key', 'unic_id', 'temp_token'
                'pub_key', 'pri_key']

    def __init__(self, **kwargs):
        self.pk = kwargs.get('pk')
        self.hospital = kwargs.get('hospital')
        self.doctor_name = kwargs.get('doctor_name')
        self.department = kwargs.get('department')
        self.username = kwargs.get('username')
        self.email = kwargs.get('email')
        self.password_hash = kwargs.get('password_hash')
        self.token = kwargs.get('token')
        self.api_key = kwargs.get('api_key')
        self.temp_token = kwargs.get('temp_token')
        self.unic_id = kwargs.get('unic_id')
        self.pub_key= kwargs.get('pub_key')
        self.pri_key= kwargs.get('pri_key')
    
    @classmethod
    def api_authenticate(cls, api_key):
        account = Provider.one_from_where_clause("WHERE api_key=?", 
                                                    (api_key,))
        if account is None:
            return None
        return account

    @classmethod
    def login(cls, username, password):
        return Provider.one_from_where_clause("WHERE username=? AND password_hash=?", 
                                                (username, util.hash_password(password)))
    
    def get_id(self):
        return self.unic_id

    def set_password(self, password):
        self.password_hash = util.hash_password(password)

    def write_token_to_chain(self, user_id, provider_id):
        user = User.one_from_where_clause('WHERE unic_id=?', (user_id,))
        provider = Provider.one_from_where_clause('WHERE unic_id=?', (provider_id,))
        if user and provider:
            # generates single-use token here 
            user.temp_token = util.temp_token()
            user.save()
            temp_token = user.temp_token
            # encrypt token w/ providers public key
            encrypted = rsa.encrypt(temp_token.encode("utf8"), rsa.key.PublicKey.load_pkcs1(self.pub_key))
            return encrypted
        else:
            return None
            

    def get_user_token(self, encrytped):
        # get transaction id, make request with id, gettin key back, decrypt with private key
        # token = 
        # decrypting token
        decrypted = rsa.decrypt(encrypted, rsa.key.PrivatecKey.load_pkcs1(self.pri_key))

        with sqlite3.connect('flaskchain.db') as conn:
            cur = conn.cursor()
            SQL = "SELECT user_token FROM chain WHERE provider_id=?"
            cur.execute(SQL, (unic_id,))
            token = cur.fetchone()
            # TODO: decrypt token

            return token[0]

     # TODO
    def get_patient_info(self, unic_id):
        with sqlite3.connect('medical.db') as conn:
                cur = conn.cursor()
                SQL = "SELECT * FROM users JOIN user_files ON users.pk = user_files.pk WHERE unic_id=?"
                cur.execute(SQL, (unic_id,))
                user_info = cur.fetchall()
                return user_info

    # TODO
    def get_patient_names(self, unic_id):
        with sqlite3.connect('medical.db') as conn:
                cur = conn.cursor()
                SQL = "SELECT first_name, last_name FROM users WHERE unic_id=?"
                cur.execute(SQL, (unic_id,))
                user_info = cur.fetchall()
                return user_info

    def get_patient_info_from_token(self, token):
        with sqlite3.connect('medical.db') as conn:
            cur = conn.cursor()
            SQL =  "SELECT * FROM users JOIN user_files ON users.pk=user_files.pk WHERE temp_token=?"
            cur.execute(SQL, (token,))
            data = cur.fetchall()
            return data