// qus:24, More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:

import { Console } from "console";

// // equlity and inequlity test
// console.log("equlity test with string:  ", "apple"==="apple")
// // equlity and inequlity test
// console.log("inequlity test with string:  ", ("apple" as string) !="mongo")
// // tes lower case function
// console.log("lower case function :" ,"HELLO" .toLowerCase()==="hello")
// // numarical test
// console.log("equlity test with number :",26===26);
// // equlity and in equlity test with number
// console.log("inequlity number test ;",(25 as number) !=35);
// // greater than
// console.log("Greather than test :",10 >5);
// // less tnan test
// console.log("less than test :",5<10);
// // test "and"operating
// console.log("AND operating test :", 5===5 && 5<10 );
// // test "or" operating 
// console.log("or operating :", 5===5 || false);
// // test arry 
// const furit:string[]=['apple','mongo','graps']
// console.log("test apple in arry",furit.includes("apple"))
// // test item not arry
// console.log("test banana in not arry",!furit.includes("banana"))
//qus no:25, Alien Colors #1: Imagine an alien was just shot down in a game. Create a variable called alien_color and assign it a value of 'green', 'yellow', or 'red'.
// let alien_color:string="green";
// if(alien_color==="green"){
//     console.log("player just earnd 5 point !")

// }
// alien_color="yellow";
// if(alien_color==="green"){
//     console.log("player just earnd 5 point !")

// }
// alien_color="red";
// if(alien_color==="green"){
//     console.log("player just earnd 5 point !")

// }
//qusno:26 Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain.
// let alien_color:string="green";
// if(alien_color==="green"){
//     console.log ( "that the player just earned 10 points."

//     )
// }else{
//     console.log( "  the player just earned  5 points.")

        
// }
// alien_color="yellow";
// if(alien_color==="green"){
//     console.log("  green,  the player just earned 10 points."

//         )
// }else{
//     console.log( "  the player just earned  5 points.")

// }
// qus no:27 Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
// • If the alien is green, print a message that the player earned 5 points

// version 1
// let alienColor:string="green";
// if(alienColor==="green"){
//     console.log("you earnd 5 points");
// }
// else if(alienColor==="yellow"){
//     console.log("you earnd 10 points");

// }   else if(alienColor==="red"){
//     console.log("you earnd 15 points");
// } else{
//     console.log("please seclet right color");
// } 
// // version=2
// alienColor="yellow" ;
// if(alienColor==="green"){
//     console.log("you earnd 5 points");
// }
// else if(alienColor==="yellow"){
//     console.log("you earnd 10 points");

// }   else if(alienColor==="red"){
//     console.log("you earnd 15 points");
// } else{
//     console.log("please seclet right color");
// } 
// // version 3
// alienColor="red";
// if(alienColor==="green"){
//     console.log("you earnd 5 points");
// }
// else if(alienColor==="yellow"){
//     console.log("you earnd 10 points");

// }   else if(alienColor==="red"){
//     console.log("you earnd 15 points");
// } else{
//     console.log("please seclet right color");
// } 
//qus: 28, Stages of Life: Write an if-else chain that determines a person’s stage of life. Set a value for the variable age, and then:
// • If the person is less than 2 years old, print a message that the person is a baby 
// let age=25;
// if(age <2){
//     console.log("person is a baby");
// }
// else if(age >=2 && age <4){
//     console.log("person is a toddiar");
// }
// else if(age >=4 && age <13){
//     console.log("person is a kid");
// }
// else if(age >= 13 && age <20){
//     console.log("person is a teenager");
// }
// else if(age >=20 && age <65){
//     console.log("person is a adult");
// }else{
//     console.log("person is elder")
// }
// qus :29, Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
// • Make a array of your three favorite fruits and call it favorite_fruits.
let favorite_fruits=["apple","banana","orange"]
if(favorite_fruits.includes("apple")){
    console.log("i like really apple")
}
if(favorite_fruits.includes("banana")){
    console.log("i like really banana")
}
if(favorite_fruits.includes("orange")){
    console.log("i like really orange")
}
if(favorite_fruits.includes("graps")){
    console.log("i like really apple")
}
if(favorite_fruits.includes("mango")){
    console.log("i like really mango")
}
