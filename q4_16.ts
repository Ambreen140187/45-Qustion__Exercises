// qno 4 ,5 Famous Quote: Find a quote from a famous person you admire. Print the quote and the name of its author. Your output should look something like the following, including the quotation marks:

import { Console } from "console";
import { gunzip, gunzipSync } from "zlib";

// Albert Einstein once said, “A person who never made a mistake never tried anything new.”




let famous_perosn="Albert Einstein";
 let message="once said, “A person who never made a mistake never tried anything new.";
 console.log(famous_perosn,message);


 console.log("Albert Einstein once said, \“A person who never made a mistake never tried anything new.\"");

// qno:6 Make sure you use each character combination, "\t" and "\n", at least once.
 let a: string = "\t\n Asharib \t\n"; // This saves the name with whitespace

 console.log(a); // Shows the name with whitespace
 console.log(a.trim()); // Shows the name without whitespace

// qno 7, Number Eight: Write addition, subtraction, multiplication, and division operations that each result in the number 8. Be sure to enclose your operations in print statements to see the results.





// qno :8 You should create four lines that look like this:console.log(5+3);

console.log(5+3);
console.log(4+4);
console.log(6+2);
console.log(7+1);

//  qno: 9 Favorite Number: Store your favorite number in a variable. Then, using that variable, create a message that reveals your favorite number. Print that message.

let message_q: number=7;
console.log(`my favorite number is ${message_q}.`);

     let favorite_number = 7
         let mess:string= "My favorite number is  !" ;

 console.log(mess,favorite_number);

// qno :10 Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each. If you don’t have anything specific to write because your programs are too simple at this point, just add your name and the current date at the top of each program file. Then write one sentence describing what the program does.
// program:1

 let favoriteNumber: number = 7; // Store favorite number in a variable
 let message_w: string = `My favorite number is ${favoriteNumber}!`; // Create a message revealing the favorite number
 console.log(message_w); // Display the message
 //   Program 2:


 let radius: number = 5; // Define the radius of a circle
const pi: number = 3.14; // Define the value of pi
 let area: number = pi * radius * radius; // Calculate the area of the circle
 console.log(`The area of the circle is ${area}`); // Display the calculated area

// qno: 11, Names: Store the names of a few of your friends in a array called names. Print each person’s name by accessing each element in the list, one at a time.
// Print each person's name by accessing each element in the list, one at a time

 let names: string[] = ["Ali", "Bob", "Chachu", "Dadi", "Erum"];


 for (let i = 0; i < names.length; i++) {
     console.log(names[i]);
 }

//  qno :12 Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.



// Store the names of friends in an array
let friend: string[] = ["Aliya", "Bano", "Chrlie", "Dado", "Erum"];

// Print a personalized message for each person
for (let i = 0; i < friend.length; i++) {

     console.log(`Hello,\n ${friend[i]}! Have a great day!\n`);
}
    // qno :13 Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”

 let transportation:string[]=["motorcycie, car,raksha,city honda,sarf"];
     for(let i=0; i<transportation.length; i++){
         console.log(`i would like own ${transportation[i]}.`)
     }

    //qno :14, Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.

     let Guest:string[]=['ali,zoya asif,afshan,kashif,rani,ambreen, fiza,zanab'];
           for(let i=0; i<Guest.length;i++){
             console.log(`i invite dinner and ifftar with myself ${Guest[i]}.` )
           }
    //  qno:15Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.

// • Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.

// • Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.

// • Print a second set of invitation messages, one for each person who is still in your list.

let Gues:string[]=['ali','zoya',' asif','afshan',];

    for(let  i=0;  i<Gues.length;i++){
    console.log('Resptce sir/madam', + Guest[i] + ",\nwe are invite dinner tomorrow.\nThan you.\n");
    }

let present:string="zoya";
   let guest:string="babar";
 Gues[1]=guest;
 for(let  i=0;  i<Gues.length;i++){
   console.log('Resptce sir/madam', + Gues[i] + ",\nwe are invite dinner tomorrow.\nThan you.\n");
   }

 console.log(`miss,${present} is not come party.`)


// qno 16: More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
let Guest_fav:string[]=['ali','zoya',' asif','afshan',];
let not_present:string="zoya";
let new_guest:string="babar";
Guest_fav[1]=new_guest;
for(let  i=0;  i<Guest_fav.length;i++){
  console.log('Resptce sir/madam', + Guest_fav[i] + ",\nwe are invite dinner tomorrow.\nThan you.\n");
 }

Guest_fav.unshift('rah','bis', 'sol')
for(let  i=0;  i<Guest_fav.length;i++){
    console.log('Resptce sir/madam', + Guest_fav[i] + ",\nwe are invite dinner tomorrow.\nThan you.\n");
   }




     

     

     
         
     
     





    