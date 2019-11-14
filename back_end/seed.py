import sqlite3

with sqlite3.connect("medical.db") as connection:
    cur = connection.cursor()

    SQL = """ INSERT INTO users(
            username, first_name, last_name, password_hash, email,
            security_question, token, api_key, provider_pk)
            VALUES(?,?,?,?,?,?,?,?,?); """

    values = [
        ['justin', 'justin', 'sarraga', 'pwd', 'jsarraga@gmail.com', 'byte', 'token', '12345', '1'],
        ['abdoul', 'abdoul', 'kanazoe', 'pwd', 'akanazoe@gmail.com', 'byte', 'token', '678910', '1']
    ]

    for value in values:
        cur.execute(SQL, value)

    
    SQL = """ INSERT INTO user_files(
            blood_type, allergies, medications, user_pk)
            VALUES(?,?,?,?); """

    values = [
        ['A', 'None', 'Aspirin', '1'],
        ['B', 'peanut', 'None', '2']
    ]

    for value in values:
        cur.execute(SQL, value)

    SQL = """ INSERT INTO providers(
            hospital, doctor_name, department, username, email,
            password_hash, token, api_key)
            VALUES(?,?,?,?,?,?,?,?); """

    values = ['Byte Hospital', 'Dr. Smith', 'surgery', 'drsmith', 'drsmith@hospital.com', 'pwd', 'token', '12345']    

    cur.execute(SQL, values)
