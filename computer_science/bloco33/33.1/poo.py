class User:
    def __init__(self, name, email, password):
        self.name = name
        self.email = email
        self.password = password


my_user = User("Joao", "joao@email.com", "123456")

print(my_user)
print(my_user.name)
print(my_user.email)
print(my_user.password)
