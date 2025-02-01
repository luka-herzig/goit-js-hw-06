class User {
    constructor({ name, age, followers }) {
      this.name = name;
      this.age = age;
      this.followers = followers;
    }
  
    getInfo() {
      console.log(`User ${this.name} is ${this.age} years old and has ${this.followers} followers`);
    }
  }
  
  
// Перевірка
const mango = new User({
    name: prompt("Enter name:"),
    age: prompt("Enter age:"),
    followers: prompt("Enter followers:"),
  });
  
  mango.getInfo(); // User Mango is 2 years old and has 20 followers
  
