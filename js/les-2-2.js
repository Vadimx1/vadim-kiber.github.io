var animals = ['Cat' , 'Dog' , 'Cow' , 'Fish']

//.indexOf - определяет индекс элемента в массиве
alert(animals.indexOf('Cow'))

alert('Исходный список: ' + animals)

// .splice - удаляет элементы с опред. индекса в опр. количестве
newAnimals = animals.splice2(2, 1)
alert('Измененный список список: ' + animals)
alert('Вырезанные эл списка:' + newAnimals)
