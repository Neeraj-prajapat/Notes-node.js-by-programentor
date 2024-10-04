//? Different ways to export a function

                    //? CASE:1
// function Add(a,b) {
//     return a +b;
// }

// function Subtract(a,b){
//     return a-b;
// }

// const num =30;
// module.exports = { Add, Subtract, num };

            //? CASE:2
// module.exports = {
//     Add: function (a,b) {
//         return a+b;
//     },
//     Subtract: function (a,b) {
//         return a-b;
//     },
//     num:40
// };

                    //? CASE:3
module.exports.Add = function (a,b) {
        return a+b;
    }

module.exports.Subtract = function (a,b) {
        return a-b;
}

module.exports.num = 40


