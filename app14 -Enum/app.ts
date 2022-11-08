enum Days {
  sun,
  mon,
  tue,
  wed,
  thu,
  fri,
  sat,
}

let whichDay: Days;
// whichDay = "Tomorrow" //will give error

whichDay = Days.mon;
console.log(whichDay); // log index value of that value, index start form 0

console.log(Days); // can see index with value

// initializing index values, now index of first values becomes 10 and continuesly others 11,12,....
enum Days1 {
  mon = 10,
  tue,
  wed,
  thu,
  fri,
  sat,
}

function whichDay1(day: Days1) {
  return "Today is " + day;
}

console.log(whichDay1(Days1.tue));

// Assigning String to the values

enum Days3 {
  mon = "mon",
  tue = "tue",
  wed = " wed",
  thu = "thu",
  fri = "fri",
  sat = "sat",
}

function whichDay3(day: Days3) {
  return "Today is " + day;
}

console.log(whichDay3(Days3.tue));
console.log(Days3);
