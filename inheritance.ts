class Vehicle {
  protected brand: string;
  protected speed: number = 0;

  constructor(brand: string) {
    this.brand = brand;
  }

  public accelerate(): void {
    this.speed += 10;
    console.log(`${this.brand} is going at ${this.speed} km/h`);
  }

  public stop(): void {
    this.speed = 0;
    console.log(`${this.brand} has stopped.`);
  }
}

class Car extends Vehicle {
  private doors: number;

  constructor(brand: string, doors: number) {
    super(brand);
    this.doors = doors;
  }

  honk() {
    console.log("Beep beep! This car has " + this.doors + " doors.");
  }
}

class Bike extends Vehicle{
    private wheels : number ;

    constructor(brand:string,wheels:number){
       super(brand)
       this.wheels =  wheels
    }
 
    info(){
        console.log(`${this.brand} have ${this.wheels} Wheels`)
    }

}

const myCar =  new Car("BMW",4)
const myBike =  new Bike("RX-135",2)
myCar.accelerate()
myCar.honk()
console.log(`----------------`)
myBike.info()
myBike.accelerate()

