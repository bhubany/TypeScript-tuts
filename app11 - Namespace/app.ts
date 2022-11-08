// namespace UsersUtils {
//   export class Users {
//     getName() {
//       return "bhuban";
//     }
//   }
// }

// let u1 = new UsersUtils.Users();
// console.log(u1.getName());

// using from another file
/// <reference path ="./utils.ts" />
namespace UsersUtils {
  export class Users extends Parent implements UserType {
    getName() {
      return this.name;
    }
  }
}

let u1 = new UsersUtils.Users();
u1.setName("Bhuban");
console.log(u1.getName());
