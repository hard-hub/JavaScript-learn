const accoundId = 1234
let accEmail = "h@gmail.com"
var accPassword = "101010"
accCity = "Ahmedabad"
let accState;
//accCountry;
// We can't just create a variable like this, if we don't want to use any keyword like 'let' or 'var',
// we need to initialize it 

console.table([accoundId, accEmail, accPassword, accCity, accState]);

// accoundId = 2345 -- this can't be performed as constant
accEmail = "a@gmail.com"
accPassword = "202020"
accCity = "Delhi"

console.table([accoundId, accEmail, accPassword, accCity, accState]);