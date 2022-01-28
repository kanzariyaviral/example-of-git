const as = require('os');
//info about current user
const user =as.userInfo()
console.log (user);
//metho returns the systems uptime in seconds
console.log('the system uptime is ' + as.uptime ); 
const currentos={
     name:as.type(),
     release:as.release(),
     totalmem:as.totalmem(),
     freemem:as.freemem(),

}
console.log(currentos)
