// Primative as references

let instructor = 'Ian';

const updateInstructor = function(instructor){
  instructor = 'Taiwo';
  console.log('instructor during function:', instructor)
}

console.log(instructor) // > Ian
console.log(updateInstructor(instructor)) // > Taiwo
console.log(instructor) // > Ian


// Objects as Values

// const instructor = {
//     name: 'Ian B',
//     location: 'Montral, QC'
//   };
  
//   const updateInstructor = function(instructor){
//     instructor.name = 'Taiwo O';
//     console.log('instructor name during function:', instructor.name);
//   }
  
//   console.log("instructor name before function:", instructor.name) // > Ian
//   console.log(updateInstructor(instructor)) // > Taiwo
//   console.log("instructor name after function:", instructor.name) // > Taiwo
  
  