class Car {
    constructor(options) {
      this.speed = 0;
      this.price = options.price;
      this.maxSpeed = options.maxSpeed;
      this.isOn = false;
      this.distance = 0;
    }
  
    getSpecs() {
      console.log(`maxSpeed: ${this.maxSpeed}, speed: ${this.speed}, isOn: ${this.isOn}, distance: ${this.distance}, price: ${this.price}`);
    }
  
    turnOn() {
      this.isOn = true;
    }
  
    turnOff() {
      this.isOn = false;
      this.speed = 0;
    }
  
    accelerate(value) {
      if (this.speed + value <= this.maxSpeed) {
        this.speed += value;
      } else {
        this.speed = this.maxSpeed;
      }
    }
  
    decelerate(value) {
      if (this.speed - value >= 0) {
        this.speed -= value;
      } else {
        this.speed = 0;
      }
    }
  
    drive(hours) {
      if (this.isOn) {
        this.distance += hours * this.speed;
      }
    }
  
    getPrice() {
      return this.price;
    }
  
    setPrice(newPrice) {
      this.price = newPrice;
    }
  }
  
  const mustang = new Car({ maxSpeed: 200, price: 2000 });
  
  mustang.turnOn();
  mustang.accelerate(50);
  mustang.drive(2);
  
  mustang.getSpecs();
  // maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000
  
  mustang.decelerate(20);
  mustang.drive(1);
  mustang.turnOff();
  
  mustang.getSpecs();
  // maxSpeed: 200, speed: 0, isOn: false, distance: 130, price: 2000
  
  console.log(mustang.getPrice()); // 2000
  mustang.setPrice(4000);
  console.log(mustang.getPrice()); // 4000
  