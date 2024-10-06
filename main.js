const helper = require('./helper.js')
/* 
variables
simple functions
slightly more advanced functions
async await
*/

//variables
//let userDetails = helper.name + ' ' + helper.email;
//console.log(userDetails)


//simple functions
//helper.sayHello();

//slightly more advanced functions
//let total = helper.addVat(100);
//console.log(total)


//async await
helper.doStuff(100).then((result) => {
    console.log(result)
}).catch((err) => {
    console.log(err)
})
