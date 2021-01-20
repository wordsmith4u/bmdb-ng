export class User {
  id: number;
  userName: string;
  password: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  email: String;
  collectionValue: number

  constructor(id: number = 0, userName: string = '',
              password: string = '', firstName: string = '',
              lastName: string = '', phoneNumber: string = '',
              email: string = '', collectionValue: number = 0) {
    this.id = id;
    this.userName = userName;
    this.password = password;
    this.firstName = firstName;
    this.lastName = lastName;
    this.phoneNumber = phoneNumber;
    this.email = email;
    this.collectionValue = collectionValue;
  }

}