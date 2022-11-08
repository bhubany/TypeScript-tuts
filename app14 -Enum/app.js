var Days;
(function (Days) {
    Days[Days["sun"] = 0] = "sun";
    Days[Days["mon"] = 1] = "mon";
    Days[Days["tue"] = 2] = "tue";
    Days[Days["wed"] = 3] = "wed";
    Days[Days["thu"] = 4] = "thu";
    Days[Days["fri"] = 5] = "fri";
    Days[Days["sat"] = 6] = "sat";
})(Days || (Days = {}));
var whichDay;
// whichDay = "Tomorrow" //will give error
whichDay = Days.mon;
console.log(whichDay); // log index value of that value, index start form 0
console.log(Days); // can see index with value
// initializing index values, now index of first values becomes 10 and continuesly others 11,12,....
var Days1;
(function (Days1) {
    Days1[Days1["mon"] = 10] = "mon";
    Days1[Days1["tue"] = 11] = "tue";
    Days1[Days1["wed"] = 12] = "wed";
    Days1[Days1["thu"] = 13] = "thu";
    Days1[Days1["fri"] = 14] = "fri";
    Days1[Days1["sat"] = 15] = "sat";
})(Days1 || (Days1 = {}));
function whichDay1(day) {
    return "Today is " + day;
}
console.log(whichDay1(Days1.tue));
// Assigning String to the values
var Days3;
(function (Days3) {
    Days3["mon"] = "mon";
    Days3["tue"] = "tue";
    Days3["wed"] = " wed";
    Days3["thu"] = "thu";
    Days3["fri"] = "fri";
    Days3["sat"] = "sat";
})(Days3 || (Days3 = {}));
function whichDay3(day) {
    return "Today is " + day;
}
console.log(whichDay3(Days3.tue));
console.log(Days3);
