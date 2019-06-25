let iteration = 1

do {
    console.log(iteration)
    iteration += 5
} while (iteration < 100)

let odds = 1

do {
    console.log(odds)
    odds += 2
} while (odds <= 20)

for (let index = 0; index <= 100; index += 10) {
    console.log(index)
}

for (let even = 0; even <= 20; even += 2) {
    console.log(even)
}

const numbers = [2, 3, 5, 7, 11, 13, 17, 19, 23]

for (let index = 0; index < numbers.length; index++) {
    const element = numbers[index]
    console.log(element)
}

const name = ['Asep', 'Budi', 'Cecep', 'Dono', 'Eboy']

for (let index = 0; index < name.length; index++) {
    const chosen = name[4]
    console.log(chosen)
}