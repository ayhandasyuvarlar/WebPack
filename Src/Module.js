// module.exports.testOne = function test(){
//     console.log("testOne")
// }

// module.exports.testTwo= function testTwo(){
//     console.log("testTwo")
// }

// module.exports = {
//     name :"Ayhan",
//     testOne : function(){
//         console.log("TestOne")
//     },
//     person:{
//         name : "Ayhan Daşyuvarlar",
//         mail :"ayhandasyuvarlar3@gmail.com"
//     }
// }


/* Es6 Modules*/

export const User = "Ayhan"
export function Username(){
    console.log("Ayhan Daşyuvarlar")
}
export class Person{
    static Test(){
        console.log("Person Test")
    }
}
export const Employee ={
    name:"Ayhan",
    salary:5000
}

export /*default*/ class Try{
    static toTry(){
        console.log("Defaul-try")
    }
}

const testValue = "This is a testValue"

export default testValue;