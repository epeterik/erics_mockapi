export function convertSecondsDateToLocalDate(secondsInHere) {
    
    //console.log("In convertSecondsDateToLocalDate - " + millisecondsInHere); //debug
    let millisecondsHere = (secondsInHere * 1000); //must convert seconds to milliseconds

    //to convert milliseconds to a date create a new Date object
    var localDateTime = new Date(millisecondsHere);

    //return the calculated DateTime as a string
    return localDateTime.toLocaleDateString();

} //end of convertSecondsDateToLocalDate()