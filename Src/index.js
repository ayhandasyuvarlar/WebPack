// import {Person} from './appOne';
// import {Employee} from './appTwo';

// Person.Try();
// Employee.Try();



/** CommonJs Modules */

//const app = require("./Module")
// app.testOne()
// app.testTwo()

//* Es6 Modules GetModules*/

///import {Person,Username,Employee} from "./Module.js"

import * as moduleOne from "./Module.js"

console.log(moduleOne)
console.log(moduleOne.Employee.name)

// import Try from "./Module.js"

// Try.toTry()


import testValue from "./Module.js"
console.log(testValue)