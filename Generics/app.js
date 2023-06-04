"use strict";
// const names: Array<string> = ["Max", "Manuel"];
// const promise: Promise<string> = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("this is done");
//   }, 2000);
// });
// promise.then((data) => {
//   //data.split(' ');
// });
function merge(objA, objB) {
    return Object.assign(objA, objB);
}
const mergeObj = merge({ name: "max" }, { age: 30 });
console.log(mergeObj.age);
function countAndDescribe(element) {
    let descriptionText = "Got no value";
    if (element.length === 1) {
        descriptionText = "Got 1 element.";
    }
    else if (element.length > 1) {
        descriptionText = "Got " + element.length + " elements.";
    }
    return [element, descriptionText];
}
console.log(countAndDescribe("hi  there"));
function extractAndcovert(obj, key) {
    return "Value:" + obj[key];
}
console.log(extractAndcovert({ name: "Max", sports: "football" }, "name"));
class DataStorgae {
    constructor() {
        this.data = [];
    }
    addItem(item) {
        this.data.push(item);
    }
    removeItem(item) {
        if (this.data.indexOf(item) === -1) {
            return;
        }
        this.data.splice(this.data.indexOf(item), 1);
    }
    getItems() {
        return [...this.data];
    }
}
const textStorage = new DataStorgae();
textStorage.addItem("max");
textStorage.addItem("MAnu");
textStorage.removeItem("max");
console.log(textStorage.getItems());
const numberStorage = new DataStorgae();
function createCourseGoal(title, desciprtion, date) {
    let courseGoal = {};
    courseGoal.title = title;
    courseGoal.desciprtion = desciprtion;
    courseGoal.completeUnit = date;
    return courseGoal;
}
const names = ["Max", "Anna"];
names.push("manu");
names.pop("manu");
