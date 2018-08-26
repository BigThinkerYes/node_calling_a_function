console.log('Starting notes.js');

//console.log(module);
//module.exports.age = 25;
module.exports.addNote = () => {
  console.log('addNote');
  return 'New note';
};

//create a new function called add
// add two numbers and call it from app.js
module.exports.add = (a,b) => {
  return a + b;
}; 