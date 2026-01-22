abstract class CoffeeMachine{
    abstract makeCoffee():void;

    turnOn():void{
        console.log(`Powering up... Warming water...`)
    }
}


class EspressoMachine extends CoffeeMachine{
    makeCoffee(): void {
        console.log(`"Pressurizing water and extracting a dark shot of espresso."`)
    }
}

class DripCoffeeMachine extends CoffeeMachine{
    makeCoffee(): void {
        console.log("Slowly dripping water through the filter for a smooth brew.")
    }
}

const myMachine = new EspressoMachine();
myMachine.turnOn()