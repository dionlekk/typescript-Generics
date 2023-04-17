// // Import stylesheets
// import './style.css';

// const names: Array<string> = ['Max', 'Manuel'];


// const promise: Promise<string> = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve('This is done!');
//   },2000);
// });

// promise.then(data => {
//   data.split(' ');
// })


function merge<T extends object, U extends object>(objA: T, objB: U): T & U {
  return Object.assign(objA, objB);
}

const mergedObj = merge<{name: string, hobbies: string[]}, {age: number}>({name: 'Max', hobbies: ['Sports', 'Music']}, {age: 32});

const mergedObj2 = merge({name: 'Max'}, {age: 32});

// ******************************

interface Lengthy {
  length: number;
}

function countAndDescribe<T extends Lengthy>(element: T): [T, string]{
  let descriptionText = 'Got no value.';
  if (element.length === 1) {
    descriptionText = 'Got one element.';
  } else if (element.length > 1) {
    descriptionText = 'Got ' + element.length + ' elements.';
  }
  return [element, descriptionText];
}
console.log(countAndDescribe('Hi there.'));



// **********************************************



function extractAndConvert<T extends object, U extends keyof T>(obj: T, key: U) {
  return 'Value: ' + obj[key];
}

extractAndConvert({name: 'Dion'}, 'name');


// ***********************************************


class DataStorage<T> {
  private data: T[] = [];

  addItem(item: T) {
    this.data.push(item);
  }

  removeItem(item: T) {
    this.data.splice(this.data.indexOf(item), 1);
  }

  getItems() {
    return [...this.data];
  }

  printData() {
    console.log(this.data);
  }
}


const textStorage = new DataStorage<string>();

textStorage.addItem('Dion');
textStorage.addItem('Dimitris');
console.log(textStorage.getItems());
textStorage.removeItem('Dimitris');
console.log(textStorage.getItems());

const numberStorage = new DataStorage<number>();