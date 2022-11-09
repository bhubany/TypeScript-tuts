// detect automatically as string
var role = ["admin", "manager", "users"];
console.log(role);
// here defining data types using tuple for array
var role1 = ["admin", "manager", 1];
console.log(role1);
// it will work because we haven't defined 4th ,..and soon data types
role1.push("newUser");
role1.push(9999);
console.log(role1);
// if we try to push number at 1st/2nd position of array then it will give error as it is initialize with string
// role1[1] = 33;
// defining 4th data types as an boolean
var role2 = ["admin", "manager", 1];
role2.push("string");
console.log(role2);
// this is one drawback, we have define data types as bollean but can push string
// role2[2]="string" //will give err, it must be of type number
