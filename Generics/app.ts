// const names: Array<string> = ["Max", "Manuel"];

// const promise: Promise<string> = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("this is done");
//   }, 2000);
// });

// promise.then((data) => {
//   //data.split(' ');
// });

function merge<T extends object, U extends object>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}

const mergeObj = merge({ name: "max" }, { age: 30 });
console.log(mergeObj.age);

interface Lengthy {
  length: number;
}

function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
  let descriptionText = "Got no value";
  if (element.length === 1) {
    descriptionText = "Got 1 element.";
  } else if (element.length > 1) {
    descriptionText = "Got " + element.length + " elements.";
  }
  return [element, descriptionText];
}
console.log(countAndDescribe("hi  there"));

function extractAndcovert<T extends object, U extends keyof T>(obj: T, key: U) {
  return "Value:" + obj[key];
}
console.log(extractAndcovert({ name: "Max", sports: "football" }, "name"));

class DataStorgae<T extends string | number | boolean> {
  private data: T[] = [];

  addItem(item: T) {
    this.data.push(item);
  }

  removeItem(item: T) {
    if (this.data.indexOf(item) === -1) {
      return;
    }
    this.data.splice(this.data.indexOf(item), 1);
  }
  getItems() {
    return [...this.data];
  }
}

const textStorage = new DataStorgae<string>();
textStorage.addItem("max");
textStorage.addItem("MAnu");
textStorage.removeItem("max");
console.log(textStorage.getItems());

const numberStorage = new DataStorgae<number>();

// const objStorage = new DataStorgae<object>();
// objStorage.addItem({ name: "max" });
// objStorage.addItem({ name: "Manu" });
// objStorage.removeItem({ name: "max" });
// console.log(objStorage.getItems());

interface CourseGoal {
  title: string;
  desciprtion: string;
  completeUnit: Date;
}

function createCourseGoal(
  title: string,
  desciprtion: string,
  date: Date
): CourseGoal {
  let courseGoal: Partial<CourseGoal> = {};
  courseGoal.title = title;
  courseGoal.desciprtion = desciprtion;
  courseGoal.completeUnit = date;
  return courseGoal as CourseGoal;
}

const names: Readonly<string[]> = ["Max", "Anna"];
names.push("manu");
names.pop("manu");
