const accountID = 144553
let accountEmail = "vishal@gmail.com"
var accountPassword = "12345"
accountCity = "jaipur"
let accountState;

// accountID = 2
accountEmail = "vishal"
accountPassword = "2344"
accountCity = "bengluru"

console.log(accountID);

console.table([accountID, accountPassword, accountEmail, accountCity, accountState])
/*
prefer not to use var 
because of issue in block scope and functional scope
*/