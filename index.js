// Code your solutions in this file
const names =["Guadalupe", "Ollie", "Aki"];

function writeCards(names){
    const newNames = [];
    for(let i = 0; i<names.length; i++){
        


        newNames.push( `Thank you, ${names[i]}, for the wonderful surprise gift!`)
    }
        return newNames;
    
}

writeCards(names)

function countDown( startingNumber ) {
    while ( startingNumber > 0 ) {
      console.log( startingNumber );
      startingNumber -= 1;
    }
    console.log( startingNumber );
  }




