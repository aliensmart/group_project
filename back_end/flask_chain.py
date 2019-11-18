from flask import Flask, jsonify, request
from flask_cors import CORS
from users import User
from providers import Provider

app = Flask(__name__)
CORS(app)

# route that has user write token to chain.db
@app.route('/<api_key>/user_sends_token', methods='POST')
def user_sends_token(api_key):
    data = request.get_json()
    provider_id = data['provider_id']
    user = User.api_authenticate(api_key_)
    user.send_token('provider_id')
    return jsonify({"Request fulfilled" : user.token})

# route that provider queries chain.db for token
@app.route('/<api_key>/receive', methods='GET')
def provider_recieves_token(api_key):
    provider = Provider.api_authenticate(api_key)
    token = provider.get_user_token(provider.unic_id)
    return jsonify({"Patient Token" : token})

if __name__ == '__main__':
      app.run(host='0.0.0.0', port=5001, debug=True)