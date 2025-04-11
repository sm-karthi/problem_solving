function timeConversion(s){

    let hour = s.slice(0, 2);
    let minute = s.slice(3, 5);
    let second = s.slice(6, 8);
    let period = s.slice(-2);

    if (period === "AM"){
        if(hour === "12"){
            hour = "00";
        }
    }
    else{
        if (hour != "12"){
            hour = String(Number(hour)+12);
        }
    }
    return `${hour}:${minute}:${second}`;
}
console.log(timeConversion("07:05:45PM")); 
console.log(timeConversion("12:01:00AM"));


