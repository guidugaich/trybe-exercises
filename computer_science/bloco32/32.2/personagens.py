characters = open('my_file.txt', mode='w')

characters.write('fulano\n')
characters.write('beltrano\n')
characters.write('ciclano\n')

more_characters = ['joao\n', 'maria\n', 'lucio\n']

characters.writelines(more_characters)

characters.close()