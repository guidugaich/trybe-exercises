with open('grades.txt', 'r') as file:
    for line in file:
        student = line.split(' ')[0]
        grade = int(line.split(' ')[1])
        if grade < 6:
            print(student)
