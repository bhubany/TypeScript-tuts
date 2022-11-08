export {};
namespace UsersUtils {
  export class Parent {
    name = "";
    setName(name) {
      this.name = name;
    }
  }
  export interface UserType {
    getName();
  }
}
