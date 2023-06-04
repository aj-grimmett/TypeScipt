type Admin = {
  name: string;
  privileges: string[];
};
//can use interface instead of type
type Employee = {
  name: string;
  startDate: Date;
};

type ElevatedEmployee = Admin & Employee;

const e1: ElevatedEmployee = {
  name: "Max",
  privileges: ["create-server"],
  startDate: new Date(),
};

type Combinable = string | number;
type Numeric = number | boolean;

type Universal = Combinable & Numeric;
function add(a: number, b: number): number;
function add(a: string, b: string): string;
function add(a: number, b: string): string;
function add(a: string, b: number): string;
function add(a: Combinable, b: Combinable) {
  if (typeof a === "string" || typeof b === "string") {
    return a.toString() + b.toString();
  }
  return a + b;
}

const result = add("max", "schwarz");
result.split(" ");

const fecthedUserData = {
  id: "ul",
  name: "Max",
  job: { title: "CEO", descriptiom: "My own company" },
};

console.log(fecthedUserData?.job?.title);

const userInput = "";

const storedData = userInput ?? "DEFAULT";

type UnknownEmployee = Employee | Admin;

function printEmployeeInfomation(emp: UnknownEmployee) {
  console.log("Name:" + emp.name);
  if ("privileges" in emp) {
    console.log("Privileges:" + emp.privileges);
  }
  if ("startDate" in emp) {
    console.log("Privileges:" + emp.startDate);
  }
}

printEmployeeInfomation(e1);

class Car {
  drive() {
    console.log("driving");
  }
}

class Truck {
  drive() {
    console.log("Driving a truck");
  }
  loadCargo(amount: number) {
    console.log("Loading cargo " + amount);
  }
}

type Vehicle = Car | Truck;

const v1 = new Car();

const v2 = new Truck();

function useVehicle(vehicle: Vehicle) {
  vehicle.drive();
  if ("loadCargo" in vehicle) vehicle.loadCargo(1000);
}

useVehicle(v1);
useVehicle(v2);

interface Bird {
  type: "bird";
  flyingSpeed: number;
}

interface Horse {
  type: "horse";
  runningSpeed: number;
}

type Animal = Bird | Horse;

function moveAnimal(animal: Animal) {
  let speed;
  switch (animal.type) {
    case "bird":
      speed = animal.flyingSpeed;
  }
  console.log("moving with speed:" + speed);
}

moveAnimal({ type: "bird", flyingSpeed: 10 });

const userInputElement = <HTMLInputElement>(
  document.getElementById("user-input")!
);

interface ErrorContainer {
  [prop: string]: string;
}

const errorBag: ErrorContainer = {
  email: "Not a valid email",
  username: "Must start with a capital character",
};

userInputElement.value = "hi, there";
