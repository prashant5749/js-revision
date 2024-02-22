// Immediate Invoked Functions Expressions (IIFE)

//Why we use iife ?
//because sometimes our code can have problem with the pollution (like variables or declaration) of the global scope that is why we use (IIFE) function expression


//immediate example is of Named IIFE
(function database(){
    console.log(`DB CONNECTED`);
})(); //to use two iife together we should remember to use semi-colon; after first iffe


((name) => {
    console.log(`DB CONNECTED, ${name}`);
})("prashant")