function sayHello(){
    console.log('hello you!')
}

function addVat(price){
    return new Promise((resolve, reject) => {
        let total = price*1.2

            if (total>145){
                reject('error message bruh!')
            } else {
                console.log(total)
                resolve(total)
            }

    })

}

//more advanced function
//function addVat(price){
//    let total = price*1.2
//    if (total>145){
//        throw new Error('error tossed!!!')
//    } else {
//        console.log(total)
//        return total
//    }
//
//}

//simple function
module.exports = {
    name: 'anthony',
    email: 'email@email.com',
    sayHello,
    addVat,
    doStuff: async (price) => {
        let value1 = await addVat(price)
        let value2 = await addVat(value1)
        let value3 = await addVat(value2)
        let value4 = await addVat(value3)
        return value4;

    }
}


