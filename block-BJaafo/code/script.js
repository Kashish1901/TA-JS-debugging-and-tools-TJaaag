//  Write two tests for the following functions


///   Get full name

function fullName(firstName , lastName){
    return firstName + " " + lastName;
}

let result = fullName("Arya" , "stark");
let expected = "Aryastark";

if( result !== expected){
    throw new Error(`${result} is not equal to ${expected}`);
}

result = fullName("John" , "smith");
 expected = "John smith";

if( result !== expected){
    throw new Error(`${result} is not equal to ${expected}`);
}

  //Calculate total amount

  function totalAmount(amount , taxRate){
    return amount + (amount * taxRate);
  }

   result = totalAmount(100 , 10);
   expected = 120;

   
if( result !== expected){
    throw new Error(`${result} is not equal to ${expected}`);
}

result = totalAmount(200 , 10);
expected = 220;