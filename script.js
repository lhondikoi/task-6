// Question 1
class Movie {
    constructor(title, studio, rating='PG') {
        this.title = title;
        this.studio = studio;
        this.rating = rating
    }
    static getPG(movies) {
        return movies.filter(movie=>movie.rating==='PG')
    }
}

const movie1 = new Movie(title='Casino Royale', studio='Eon Productions', rating='PG13')

// Question 2
class Circle {
    constructor(radius=1.0, color='red') {
        this.radius = radius;
        this.color = color;
    }
    get getRadius() {
        return this.radius
    }
    set setRadius(r) {
        this.radius = r
    }
    get getColor() {
        return this.color
    }
    set setColor(c) {
        this.color = c
    }
    toString() {
        return `Circle[radius=${this.radius},color=${this.color}]`
    }
    get getArea() {
        return 22/7 * this.radius * this.radius
    }
    get getCircumference() {
        return 2 * 22/7 * this.radius
    }
}

// Question 3
class Person {
    constructor(name, age, occupation='Unemployed') {
        this.name = name;
        this.age = age;
        this.occupation = occupation;
    }
}

// Question 4
// Reference: https://www.quora.com/How-does-Uber-set-its-prices-Do-prices-change-a-lot
class Uber {
    constructor(service_type, city, base_fare, pp_min, pp_mile, min_fare, cancellation_fee) {
        // service_type : UberX, Uber Black etc.
        // city : city
        // pp_min : Price per minute in a given city
        // pp_mile : Price per mile in a given city
        // min_fare : Minimum fare
        // cancellation_fee : Cancellation Fee
        this.service_type = service_type;
        this.city = city;
        this.base_fare = base_fare;
        this.pp_min = pp_min;
        this.pp_mile = pp_mile;
        this.min_fare = min_fare;
        this.cancellation_fee = cancellation_fee;
    }
    getFare(cancelled, trip_distance, trip_duration) {
        let fare = this.base_fare + this.pp_mile * trip_distance + this.pp_min * trip_duration
        if (cancelled) {
            if (fare < min_fare) {
                return this.min_fare + this.cancellation_fee
            } else {
                return this.fare + this.cancellation_fee
            }
        } else {
            if (fare < min_fare) {
                return this.min_fare
            } else {
                return this.fare
            }
        }
    }
}