/*Creating a function which validate that an animal is of a kind.
Make sure to use interface and classes extends while create the animal kinds.
use type narrowing of 'is' keyword*/
//solutions:
interface AnimalInterface {
  breath: true;
  eat: true;
}
interface CatInterface extends AnimalInterface {
  meow: () => void;
}
interface DogInterface extends AnimalInterface {
  bark: () => void;
}

function isCatSmart(animal: any): animal is CatInterface {
  return typeof animal.meow == "function";
}
//Testing our functions.
function handleAnimal(animal: unknown) {
  if (isCatSmart(animal)) {
    return `${animal} is a Cat!`;
  }
  return `${animal} is not a Cat!`;
}

class Cat implements CatInterface {
  readonly breath = true;
  readonly eat = true;
  meow() {
    console.log("Meow");
  }
}
class Dog implements DogInterface {
  readonly breath = true;
  readonly eat = true;
  bark() {
    console.log(`Woof Woof`);
  }
}

const Kite = new Cat();
console.log(Kite);

const pupy = new Dog();
console.log(handleAnimal(pupy));
console.log(handleAnimal(Kite));
