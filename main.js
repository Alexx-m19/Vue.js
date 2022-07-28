const car = (name, model, owner, year, phone, image) => ({name, model, owner, year, phone, image})
const log = (text, type, date = new Date()) => ({text, type, date})

const cars = [
    car('Volkswagen', 'Golf+', 'Yarik',  2011, '+3 8063 759 25 58', 'img/golf.jpg'),
    car('Volkswagen', 'Jetta', 'Alex',  2013, '+3 8063 777 19 00', 'img/jetta.jpg'),
    car('BMW', 'M5', 'German',  2020, '+3 8063 72 99 97', 'img/bmw.png')
]

new Vue ({
   el: '#main',
   data: {
    cars: cars,
    car: cars[0],
    logs: [],
    showCarIndex: 0,
    phoneVisibility: false,
    search: '',
    modalVisibility: false
   },
   methods: {
    showCar (index) {
        this.car = cars[index]
        this.showCarIndex = index
    },
    newOrder() {
        this.modalVisibility = false
        this.logs.push(
            log(`Success order: ${this.car.name} - ${this.car.model}`,'ok')
    )
    },
    cancelOrder() {
        this.modalVisibility = false
        this.logs.push(
            log(`Cancelled order: ${this.car.name} - ${this.car.model}`,'cnl')
    )
    }
   },
   computed: {
    phoneBtnText(){
        return this.phoneVisibility ? 'Hide phone' : ' Show phone'
    },
    filteredCars() {
        return this.cars.filter(car => {
            return car.name.indexOf(this.search) > -1 ||  car.model.indexOf(this.search) > -1  
           
        })   
    }
   },
   filters: {
    date(value) {
        return value.toLocaleString()
    }
   }
})