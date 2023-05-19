class Human {
    constructor(name, gender) {
        this.name = name
        this.gender = gender
    }
}
const human1 = new Human('Dmytro', 'male')
const human2 = new Human('Anna', 'female')
const human3 = new Human('Nik', 'female')


class Apartment {
    amounts = []
    addResident(human) {
        this.amounts.push(human)
    }
}
const apartment = new Apartment()
apartment.addResident(human1)
apartment.addResident(human2)
apartment.addResident(human3)


class Home {
    constructor(maxApartments) {
        this.apartments = []
        this.maxApartments = maxApartments
    }
    addApartment(apartment) {
        if (this.apartments.length < this.maxApartments) {
            this.apartments.push(apartment)
        } else {
            console.log('Достигнут максимум квартир')
        }
    }
}
const home = new Home(4)
home.addApartment(apartment)
home.addApartment(apartment)
home.addApartment(apartment)
home.addApartment(apartment)

console.log(home.apartments)




