import random

random_number = random.randint(1, 100)
guess = 0

while guess != random_number:
    if (guess < random_number):
        print('é maior')
    else:
        print('é menor')

    guess = int(input('Coloque seu plapite: '))

print('O numero é: ', guess)
