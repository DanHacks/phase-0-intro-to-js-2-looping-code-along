// Code your solutions in this file
// Example of a for loop
for (let age = 30; age < 40; age++) {
    console.log(`I'm ${age} years old. Happy birthday to me!`);
  }
  
  // Using a for loop to wrap gifts
  const gifts = ["teddy bear", "drone", "doll"];
  
  function wrapGifts(gifts) {
    for (let i = 0; i < gifts.length; i++) {
      console.log(`Wrapped ${gifts[i]} and added a bow!`);
    }
    return gifts;
  }
  
  wrapGifts(gifts);
  
  // Assignment 1: Thank you card creator
  function writeCards(names, event) {
    const messages = [];
    for (let i = 0; i < names.length; i++) {
      messages.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
    }
    return messages;
  }
  
  console.log(writeCards(["Charlie", "Samip", "Ali"], "birthday"));
  
  // Assignment 2: Countdown using while loop
  function countDown(number) {
    while (number >= 0) {
      console.log(number);
      number--;
    }
  }
  
  countDown(10);
  