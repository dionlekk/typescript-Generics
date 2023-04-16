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


function merge<T, U>(objA: T, objB: U): T & U {
  return Object.assign(objA, objB);
}

const mergedObj = merge<{name: string, hobbies: string[]}, {age: number}>({name: 'Max', hobbies: ['Sports', 'Music']}, {age: 32});
const mergedObj2 = merge({name: 'Max'}, {age: 32});
