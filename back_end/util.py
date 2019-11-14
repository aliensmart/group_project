from hashlib import sha256, sha512
import random

def hash_password(password):
    """ converts a pleain-text password to a sha256 hashed output,
    for database storage and comparison """
    hasher = sha256()
    hasher.update(password.encode())
    return hasher.hexdigest()

def random_api_key(length=15):
    seed = (str(random.random()) + str(random.random())).encode()
    hasher = sha512()
    hasher.update(seed)
    output = hasher.hexdigest()
    return output[:length]

def random_unic_id(length=8):
    seed = (str(random.random()) + str(random.random())).encode()
    hasher = sha512()
    hasher.update(seed)
    output = hasher.hexdigest()
    return output[:length]