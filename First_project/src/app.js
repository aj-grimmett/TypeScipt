"use strict";
var _a;
const e1 = {
    name: "Max",
    privileges: ["create-server"],
    startDate: new Date(),
};
function add(a, b) {
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
console.log((_a = fecthedUserData === null || fecthedUserData === void 0 ? void 0 : fecthedUserData.job) === null || _a === void 0 ? void 0 : _a.title);
const userInput = "";
const storedData = userInput !== null && userInput !== void 0 ? userInput : "DEFAULT";
function printEmployeeInfomation(emp) {
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
    loadCargo(amount) {
        console.log("Loading cargo " + amount);
    }
}
const v1 = new Car();
const v2 = new Truck();
function useVehicle(vehicle) {
    vehicle.drive();
    if ("loadCargo" in vehicle)
        vehicle.loadCargo(1000);
}
useVehicle(v1);
useVehicle(v2);
function moveAnimal(animal) {
    let speed;
    switch (animal.type) {
        case "bird":
            speed = animal.flyingSpeed;
    }
    console.log("moving with speed:" + speed);
}
moveAnimal({ type: "bird", flyingSpeed: 10 });
const userInputElement = (document.getElementById("user-input"));
const errorBag = {
    email: "Not a valid email",
    username: "Must start with a capital character",
};
userInputElement.value = "hi, there";
