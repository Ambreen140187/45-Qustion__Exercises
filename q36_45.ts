// qus :36, T -Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt. The function should print a sentence summarizing the size of the shirt and the message printed on it. Call the function.
// function make_shirt(size :number,lable :string){
//     return size+lable;
// }let eid=make_shirt(36,"  this  t- shirt  wear eid day");
// console.log(eid)

//  qus: no 37, Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message
// MAKE A LARGE  SHIRT
// function make_shirt(size :string,lable :string ="large"){
//         return size+lable;
//      }let eid=make_shirt("  this  t- shirt  wear eid day  ");
//     console.log(eid)
// function make_shirt(size :string,lable :string ="medium"){
//     return lable+size;
//  }let eid=make_shirt("  this  t- shirt  wear eid day , ");
// console.log(eid)
// function make_shirt(size :string,lable :string =""){
//     return lable+size;
//  }let eid=make_shirt("  make a size any one: this  t- shirt  wear eid day , ");
// console.log(eid)

//qus :38 Cities: Write a function called describe_city() that accepts the name of a city and its country. The function should print a simple sentence, such as Karachi is in Pakistan. Give the parameter for the country a default value. Call your function for three different cities, at least one of which is not in the default country.
// function describe_city(namecity:string,country:string="paksitan"){
//     return `${namecity} is  in ${country}`
// }let city1=describe_city("karachi")
// let city2=describe_city("lahor")
// let city3=describe_city("larkana")
// let city4=describe_city("dubai" ,"UAE")
// console.log(city1)
// console.log(city2)
// console.log(city3)
// console.log(city4)

// qus:39,City Names: Write a function called city_country() that takes in the name of a city and its country. The function should return a string formatted like this:

// "Lahore, Pakistan"

// Call your function with at least three city-country pairs, and print the value that’s returned.
// function city_country(city:string ="",country:string=""){


//         return `${city}  ${country}`
// }
// console.log(city_country("karachi,pakiatan"));
// console.log(city_country("dubai,uae"));
// console.log(city_country("makkah,sudia"));
// console.log(city_country("sadni,astraliya"));

// qus :40,Album: Write a function called make_album() that builds a Object describing a music album. The function should take in an artist name and an album title, and it should return a Object containing these two pieces of information 
// function mYalbum(artistname:string,albumtitle:string){
//     return{artistname,albumtitle}
// }
// let album1=mYalbum("ali","rage_e_mohabat");
// let album2=mYalbum("madad","roshan");
// let album3=mYalbum("ayaz","mosem _dil");
// console.log(album1)
// console.log(album2)
// console.log(album3)

// number of track
// function mYalbum2(artistname:string,albumtitle:string,numberOfTrack ?:number  ,
//      ){
//     return{artistname,albumtitle,numberOfTrack}
// }
// let album4=mYalbum2("ali","rage_e_mohabat",30 );
// let album5=mYalbum2("madad","roshan" ,55);
// let album6=mYalbum2("ayaz","mosem _dil");
// console.log(album4)
// console.log(album5)
// console.log(album6)

//



// qus no :41, Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.
// let magiciansNames = ["ali", "usman", "tuba", "rahan", "badil"];
// function show_magicians() {
//     for (let item of magiciansNames) {
//         console.log(item);
//     }
// }
// ;
// show_magicians();





// qus:42Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.

// let magicians = ["ali", "usman", "tuba", "rahan", "badil"];
// function show_magicians(great :string) {
//     for (let item of magicians) {
//         console.log( great ,item);
//     }
// }
// ;
// show_magicians("hellow, how are you  mr/mrs,  ");


// qus:43 Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.
let magicians = ["ali", "usman", "tuba", "rahan", "badil"];
// copy of the arry
//  let magiciancopy=[...magicians]
//  function show_magicians(great:string){
//    let coding="";
//  for(let item of magiciancopy){
//     coding+=`${item} ${great} \n`
//  }
//  return coding;
//  }
//   let kun=show_magicians("hello")
//   let arry=kun.split('\n')
//   console.log(arry) ;     
   

//qus :44, Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.

// function Sandwiches(...item:string []){
//     return `i want to sandwiches of ${item}`
// };
// let collects1=Sandwiches("hum","chezzs","lectus");
// let collects2=Sandwiches( "turrky,swiss");
// let collects3=Sandwiches();
// console.log(collects1)
// console.log(collects2)
// console.log(collects3)

// qus:45; Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.
function carDetails(manufacturer:string, modelName:string,...additionalInfo){
    const car  ={manufacturer,modelName,...Object. fromEntries(additionalInfo)};
 return car;
}
const mycarDetails  = carDetails("toyota","corolla",['color',"blue"],["year",2024]);

console.log(mycarDetails)