"use strict";
// //    qus:30; Hello Admin: Make a array of five or more usernames, including the name 'admin'. Imagine you are writing code that will print a greeting to each user after they log in to a website. Loop through the array, and print a greeting to each user:
// let userName = ["admin", "ali", "hut", "bro", "wed"];
// for(let i =0;i <userName.length; i++){
//     if(userName[i] ==="admin"){
//         console.log("would you like to see ststu report?");
//     }
// } 
// else {
//     console.log(`hello ${userName[i]}, thank you logging agin`)
// }
// userName.forEach(Test => {
// if (Test === "admin") {
// console.log("hello");
// }
// else {
// console.log(`hello ${Test} logging  my website thank you`);
// }
// });
// qus 31 No Users: Add an if test to Exercise 30 to make sure the list of users is not empty.
// • If the list is empty, print the message We need to find some users!
// • Remove all of the usernames from your array, and make sure the correct message is printed.
// let userName = ["admin", "ali", "hut", "bro", "wed"];
// if(userName .length===0){
//     console.log("We need to find some users!")
// }else{
//     userName=[];
// }console.log("Remove all of the usernames  " +userName.length)
// qus :32, Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
// let code:string []=["taha","saleem","jon","bilal"]
// let node:string[]=["taha","bilal","dawood","bob","sono"]
// node.forEach(testname=>{
//     let LowerCase=testname.toLowerCase();
//     if(code.map(test2 =>test2.toLowerCase()).includes(LowerCase)){
//         console.log(`node =username ,${testname}is not aviable `)
//     }
//     else{
//         console.log(`node =username${testname} is avaiable`)
//     }
//} )
// //qus :33, Ordinal Numbers: Ordinal numbers indicate their position in a array, such as 1st or 2nd. Most ordinal numbers end in th, except 1, 2, and 3.
// • Store the numbers 1 through 9 in a array.
// • Loop through the array.
// • Use an if-else chain inside the loop to print the proper ordinal ending for each number. Your output should read "1st 2nd 3rd 4th 5th 6th 7th 8th 9th", and each result should be on a separate
// let numbers:number[]=[1,2,3,4,5, 6,7,8,9];
// // for loop
// for(let i=0; i<numbers.length;i++){
//     // use condition
//     if(numbers [i]==1){
//         console.log(`${numbers[i]}st`)
//     }else if(numbers[i]==2){
//         console.log(`${numbers[i]}nd`)
//     }else if(numbers[i]==3){
//         console.log(`${numbers[i]}rd`)
//     }else if(numbers[i]> 4  && numbers[i] <=9){
//         console.log(`${numbers[i]}nth`)
//   }
// }
//  qus no :34,Pizzas: Think of at least three kinds of your favorite pizza. Store these pizza names in a array, and then use a for loop to print the name of each pizza.
// • Modify your for loop to print a sentence using the name of the pizza instead of printing just the name of the pizza. For each pizza you should have one line of output containing a simple statement like I like pepperoni pizza.
// let myPizza=["cheez pizza","vegi pizza","barbi pizza"];
// for(let i=0; i<myPizza.length;i++){
//     console.log(myPizza[i])
// }for(let i=0; i<myPizza.length;i++){
//     console.log(`i like pizza to eat${myPizza[i]}`)
// } console.log(" i like realy pizza and topping with lodding cheez ")
// Animals: Think of at least three different animals that have a common characteristic. Store the names of these animals in a list, and then use a for loop to print out the name of each animal. •
//  qus :35, Modify your program to print a statement about each animal, such as A dog would make a great pet. • Add a line at the end of your program stating what these animals have in common. You could print a sentence such as Any of these animals would make a great pet!
let animals = ["cow", "cat", "chmal", "duck",];
for (let i of animals) {
    console.log(i);
}
for (let j of animals) {
    console.log(`${j} is a domastic animals.`);
}
console.log(`all these animals  ${animals[0]},${animals[1]},${animals[2]}  and${animals[3]}, meet is halal in islam.`);
