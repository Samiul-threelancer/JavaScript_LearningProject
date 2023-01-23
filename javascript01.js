let myDate = new Date()
let day = myDate.getDate()
let month = myDate.getMonth()
let year = myDate.getFullYear()

let myfullDate = day+'-'+(month+1)+'-'+year


console.log("Todays Date",myfullDate)

console.log(day, month+1, year)

console.log(myDate)

const myd = new Date().toLocaleDateString({ weekday:"long", year:"numeric", month:"short", day:"numeric"}) 
console.log("oneline date",myd.getDigitBanglaFromEnglish())



















// let greeting = "say Hi";
// let times = 4;

// if (times > 3) {
//      //let hello = "say Hello instead";
//      console.log(hello);// "say Hello instead"
//  }
// console.log(hello) // hello is not defined















// const ages = [32, 33, 16, 40];

// const habit = ['army', 'navy', 'air', 'army']
// let i = 0
// const value = habit.filter(checkAdult)
// console.log(value)


// function checkAdult(age) {
//   if (age == 'army'){

//     return i = i+1;
//   }
// }

// console.log('iiiiiiiiiii=',i)






















//  hello = () => {
//     let x=5;
//     console.log(x)
//   }
 
//   const logged_in = false
//   if (!logged_in){
//     console.log("IF block")
//   }
//   else(){
//     console.log("else block")
//   } 


  
//   console.log(hello())