from orm import ORM


class User_files(ORM):

    tablename = "user_files"
    fileds = ['blood_type', 'allergies', 'medications', 'user_pk']

    def __init__(self, **kwargs):
        self.pk = kwargs.get('pk')
        self.blood_type = kwargs.get('blood_type')
        self.allergies = kwargs.get('allergies')
        self.medications = kwargs.get('medications')
        self.user_pk = kwargs.get('user_pk')


        