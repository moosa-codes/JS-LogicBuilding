/*
  This function returns values of paramter in the
  form of object , inshort takes parameters and returns
  an object.
*/


// Basic Example
function createUser(name, age) {
    const user = {
        name: name,
        age: age
    }
    console.log(user);
}
createUser('Moosa', 19); // output => { name:"Moosa" , age:19 }
createUser('Ali', 19); // output => { name:"Ali" , age:19 }



// Example with validation
function userValidation(name, age) {

    if (typeof name !== 'string' || typeof age !== 'number') {
        console.error("Use Valid Data");
    } else return { name: name, age: age }

}

const user1 = userValidation("Moosa", 10); // returns an object
console.error(user1);

const user2 = userValidation("Moosa", '10'); // throw an error
console.error(user2)

const user3 = userValidation(null, 10); // throw an error
console.error(user3)




// Example with Default parameters
function defaultObject(name = "User", age = 25) {
    if (typeof name !== 'string' || typeof age !== 'number') {
        console.error("Use Valid Data");
    }

    const user = { name: name, age: age };
    console.log(user);
}

defaultObject();  // { name: 'User', age: 25 }
defaultObject("John", 20); // { name: 'John', age: 20 }