function add(numA , numB){
    return numA + numB;
}

function multiply(numA , numB){
    return numA * numB;
}

let result , expected;

function test(message , callback){
    try {
      callback();
      console.log(`✅` , message);                                                                                               console.log(`✅` , message);
    } catch (error){
      console.error(error); 
      console.log(`❌ ` , message);                                                                                    console.log(`❌ ` , message);
    }
  }

  function expect (actual){
    return {
        toEqual : function (expected){
            if ( actual !==  expected){
                throw new Error (`${result} is  ot equal to ${expected}`);
            }
        },
    };
}

function testAdd(){
    result = add(12 , 10);
    expected = 20;
    expect(result).toEqual(expected);
}

test("adding 12 and 10" , testAdd);
test("adding 10 and 10" , () => {
   expect(add(10,10)).toEqual(20);
    });
test("adding 20 and 10" , () => {
    expect(add(20,10)).toEqual(21);
});
test("adding 32 and 10" , () => {
    expect(add(32,10)).toEqual(42);
});
test("adding 2 and 10" , () => {
    expect(add(2,10)).toEqual(22);
});


function testmultiply(){
    result = multiply(2 , 10);
    expected = 20;
    expect(result).toEqual(expected);
}

test("multiplying 2 and 10" , testAdd);
test("multiplying 10 and 10" , () => {
   expect(multiply(10,10)).toEqual(100);
    });
test("multiplying 20 and 10" , () => {
    expect(multiply(20,10)).toEqual(21);
});
test("multiplying 32 and 10" , () => {
    expect(multiply(32,10)).toEqual(42);
});
test("multiplying 12 and 10" , () => {
    expect(multiply(12,10)).toEqual(120);
});