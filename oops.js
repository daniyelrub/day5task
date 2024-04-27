

// 1. The class Movie is stated below.



// Define the Movie class
class Movie {
    // Constructor with default rating as "PG"
    constructor(title, studio, rating = "PG") {
      this.title = title;
      this.studio = studio;
      this.rating = rating;
    }
  
    // Method to filter movies with rating "PG"
    static getPG(movies) {
      return movies.filter(movie => movie.rating === "PG");
    }
  }
  
  // Create an instance of Movie
  const casinoRoyale = new Movie("Casino Royale", "Eon Productions", "PG-13");
  
  // Test getPG method
  const movies = [
    new Movie("The Lion King", "Walt Disney Pictures", "G"),
    new Movie("Harry Potter and the Philosopher's Stone", "Warner Bros.", "PG"),
    new Movie("Finding Nemo", "Pixar", "G"),
    new Movie("The Dark Knight", "Warner Bros.", "PG-13"),
    casinoRoyale // Adding casinoRoyale instance
  ];
  
  // Get PG rated movies
  const pgMovies = Movie.getPG(movies);
  
  // Output PG rated movies
  console.log(pgMovies);

  

  









// 2. circle class



class Circle {
    // Constructor with default values for radius and color
    constructor(radius = 1.0, color = "red") {
      this._radius = radius;
      this._color = color;
    }
  
    // Getter and setter for radius
    get radius() {
      return this._radius;
    }
  
    set radius(radius) {
      this._radius = radius;
    }
  
    // Getter and setter for color
    get color() {
      return this._color;
    }
  
    set color(color) {
      this._color = color;
    }
  
    // Method to return string representation of Circle
    toString() {
      return `circle[radius=${this._radius},color=${this._color}]`;
    }
  
    // Method to calculate area
    getArea() {
      return Math.PI * Math.pow(this._radius, 2);
    }
  
    // Method to calculate circumference
    getCircumference() {
      return 2 * Math.PI * this._radius;
    }
  }
  
  // Example usage:
  const myCircle = new Circle(3.5, "blue");
  console.log(myCircle.toString()); // Output: circle[radius=3.5,color=blue]
  console.log("Area:", myCircle.getArea()); // Output: Area: 38.48451000647496
  console.log("Circumference:", myCircle.getCircumference()); // Output: Circumference: 21.991148575128552

 










  // 3. write a class person detail.


  class Person {
    // Constructor to initialize the person's details
    constructor(firstName, lastName, age, gender, occupation, location, skills, languages) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.age = age;
      this.gender = gender;
      this.occupation = occupation;
      this.location = location;
      this.skills = skills;
      this.languages = languages;
    }
  
    // Method to get the full name of the person
    getFullName() {
      return `${this.firstName} ${this.lastName}`;
    }
  
    // Method to get the details of the person
    getDetails() {
      return {
        firstName: this.firstName,
        lastName: this.lastName,
        age: this.age,
        gender: this.gender,
        occupation: this.occupation,
        location: this.location,
        skills: this.skills,
        languages: this.languages
      };
    }
  
    // Method to update the occupation of the person
    updateOccupation(newOccupation) {
      this.occupation = newOccupation;
    }
  }
  
  // Example usage:
  const danielRuban = new Person(
    "Daniel",
    "Ruban",
    24, // Updated age to 24
    "Male",
    "Software Developer", // Updated occupation
    "Rameswaram", // Added location
    ["HTML", "CSS", "JavaScript", "C++"], // Added skills
    ["Tamil", "English", "Malayalam", "Hindi"] // Added languages
  );
  
  console.log(danielRuban.getFullName()); // Output: Daniel Ruban
  
  console.log(danielRuban.getDetails());
  



  







 //4. write a class to calculate the Uber price.


  
class UberPriceCalculator {
  constructor(baseFare, costPerMile, costPerMinute) {
    this.baseFare = baseFare;
    this.costPerMile = costPerMile;
    this.costPerMinute = costPerMinute;
  }

  calculatePrice(distance, duration) {
    const fare = this.baseFare + (distance * this.costPerMile) + (duration * this.costPerMinute);
    return fare;
  }
}

// Example usage:
const calculator = new UberPriceCalculator(2.5, 1.5, 0.25);
const distance = 10; // in miles
const duration = 20; // in minutes

const price = calculator.calculatePrice(distance, duration);
console.log("The estimated Uber price is $" + price.toFixed(2));

