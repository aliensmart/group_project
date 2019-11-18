from flask import Flask, jsonify, request
from flask_cors import CORS
from users import User
from providers import Provider


app = Flask(__name__)
CORS(app)

# route that writes token to chain.db
@app.route('/<api_key>/send_token', methods=['POST'])
def token_to_chain(api_key):
    data = request.get_json()
    provider_id = data['provider_id']
    user_id = data['user_id']
    provider = Provider.api_authenticate(api_key)
    provider.write_token_to_chain(user_id, provider_id)
    return jsonify({"Request_Status" : "successful"})

# route that provider queries chain.db for token
@app.route('/<api_key>/get_token', methods=['GET'])
def provider_recieves_token(api_key):
    provider = Provider.api_authenticate(api_key)
    token = provider.get_user_token(provider.unic_id)
    return jsonify({"Patient_Token" : token})

if __name__ == '__main__':
      app.run(host='0.0.0.0', port=5001, debug=True)