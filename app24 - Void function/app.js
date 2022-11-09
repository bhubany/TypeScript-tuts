// void function
function print_value() {
    console.log("value");
}
print_value();
/// in such types of function we defined as void
function today_date() {
    var today = new Date();
    console.log(today);
}
today_date();
// function fun2(): void {
//   let today = new Date();
//   return today; // will give error, void type can't return value
// }
// fun2();
// if we don't assign type of function then it will assign automatically,
// here fun type is void as it is returning nothing
function fun3() {
    var today = new Date();
    console.log(today);
}
fun3();
// but on some case it might be wrong
// here if condition matched then return type is boolean, if not matched then return type is void: as it is returning nothing
var day = "sunday";
function fun4() {
    if (day === "sunday") {
        return true;
    }
}
console.log(fun4());
// so we can define as
function fun5() {
    if (day === "sunday") {
        return "sunday";
    }
}
console.log(fun5());
