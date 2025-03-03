from flask import Flask, jsonify, request
from flask_cors import CORS
from users import User
from providers import Provider
from user_files import User_files
import util
import rsa

app = Flask(__name__)
CORS(app)

@app.route("/api/user/create", methods=['POST'])
def create_user_account():
    api_key = util.random_api_key()
    unic_id = util.random_unic_id()
    data = request.get_json()
    user = User()
    user.username = data['username']
    password = data['password']
    hashed_pass = util.hash_password(password)
    user.password_hash = hashed_pass
    user.first_name = data['first_name']
    user.last_name = data['last_name']
    user.email = data['email']
    user.api_key = api_key
    user.unic_id = unic_id
    user.save()
    return jsonify({"api_key": user.api_key})

@app.route("/api/provider/create", methods=['POST'])
def create_provider_account():
    api_key = util.random_api_key()
    unic_id = util.random_unic_id()
    data = request.get_json()
    provider = Provider()
    provider.username = data['username']
    password = data['password']
    hashed_pass = util.hash_password(password)
    provider.password_hash = hashed_pass
    provider.api_key = api_key
    provider.hospital = data['hospital']
    provider.department = data['department']
    provider.doctor_name = data['doctor_name']
    provider.email = data['email']
    provider.unic_id = unic_id
    pub, pri = rsa.newkeys(512)
    provider.pub_key = pub.save_pkcs1(format="PEM")
    provider.pri_key = pri.save_pkcs1(format="PEM")
    provider.save()
    return jsonify({"api_key": provider.api_key})



@app.route('/user/login', methods=['POST'])
def user_login():
    data = request.get_json()
    print(data)
    user = User.login(username=data['username'], password=data['password'])
    return jsonify({"api_key": user.api_key})

@app.route('/provider/login', methods=['POST'])
def provider_login():
    data = request.get_json()
    provider = Provider.login(username=data['username'], password=data['password'])
    return jsonify({"api_key": provider.api_key})

# might need to adjust to reflect file titles. Then render info when they click on a file to open it
@app.route("/<api_key>/userfiles", methods=['GET'])
def get_files(api_key):
    user = User.api_authenticate(api_key)
    files = user.get_all_user_files()
    file_list = []
    for user_file in files:
        data = {}
        data["Blood"] = user_file.blood_type
        data["Allergies"] = user_file.allergies
        data["Medications"] = user_file.medications
        file_list.append(data)
    return jsonify(file_list)

@app.route("/<api_key>/user/id", methods=['GET'])
def get_user_id(api_key):
    user = User.api_authenticate(api_key)
    id = user.get_id()
    return jsonify({"user_id": id})

@app.route("/<api_key>/provider/id", methods=['GET'])
def get_provider_id(api_key):
    provider = Provider.api_authenticate(api_key)
    id = provider.get_id()
    return jsonify({"user_id": id})

@app.route("/<api_key>/add_file", methods=['POST'])
def add_file(api_key):
    user = User.api_authenticate(api_key)
    data = request.get_json()
    user.add_file(blood_type=data["blood_type"], allergies=data["allergies"],
                medications=data['medications'], user_pk=user.pk)

# fix. how to get user_file_pk
@app.route("/<api_key>/user_file/remove_file", methods=['POST'])
def remove_file(api_key):
    user = User.api_authenticate(api_key)
    user_file = user.get_one_user_file()

@app.route("/<api_key>/provider/user_names", methods=['POST'])
def get_user_name(api_key):
    data = request.get_json()
    unic_id = data["user_id"]
    provider_id = data["provider_id"]
    provider = Provider.api_authenticate(api_key)
    patient_names = provider.get_patient_names(unic_id)
    name = patient_names[0][0] + " " + patient_names[0][1]
    return jsonify({"name":name})

@app.route("/<api_key>/provider/user_files", methods=['POST'])
def get_user_files(api_key):
    data = request.get_json()
    temp_token = data["temp_token"]
    provider = Provider.api_authenticate(api_key)
    patient_info = provider.get_patient_info_from_token(temp_token)
    if patient_info:
        name = patient_info[0][2] + " " + patient_info[0][3]
        Blood = patient_info[0][13]
        allergy = patient_info[0][14]
        medication = patient_info[0][15]
        patient_info = {
            "name": name,
            "blood":Blood,
            "allergy":allergy,
            "medication": medication
        }
        return jsonify(patient_info)
    else:
        return jsonify({"info": "none"})

@app.route('/<api_key>/send_token', methods=['POST'])
def token_to_chain(api_key):
    data = request.get_json()
    provider_id = data['provider_id']
    user_id = data['user_id']
    provider = Provider.api_authenticate(api_key)
    encrypted = provider.write_token_to_chain(user_id, provider_id)
    # next line will write to chian using a flask route
    # data = requests.get(IPADDRESS/ROUTE/SOMETHING THAT RETURNS TXID)
    return jsonify({"encrypted" :encrypted})

@app.route('/<api_key>/get_token', methods=['GET'])
def provider_recieves_token(api_key):
    data = requests.get_json()
    tx_id= = data['txid']
    provider = Provider.api_authenticate(api_key)
    token = provider.get_user_token(tx_id)
    

    return jsonify({"Patient_Token" : token})
 

if __name__ == "__main__":
    app.run(debug=True)