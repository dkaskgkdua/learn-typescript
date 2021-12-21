class Dog {
    constructor(readonly name: string) {};

    sayHello(): string {
        return 'Dog says hello';
    }
}

class Fish {
    constructor(readonly name: string) {
    }

    dive(howDeep: number): string {
        return `Diving ${howDeep} feet`;
    }
}

type Pet = Dog | Fish;

function talkToPet(pet: Pet): string {
    if(pet instanceof Dog) {
        return pet.sayHello();
    } else if(pet instanceof Fish) {
        return 'Fish cannot talk, sorry';
    }
}

function DiveToPet(pet: Pet): string {
    if(pet instanceof Dog) {
        return 'Dog Cannot Dive';
    } else if(pet instanceof Fish) {
        return pet.dive(5);
    }
}

const myDog = new Dog("Sammy");
const myFish = new Fish("marry");

console.log(talkToPet(myDog));
console.log(talkToPet(myFish));
console.log(DiveToPet(myFish));