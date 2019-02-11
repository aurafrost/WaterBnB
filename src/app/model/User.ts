export class User{
    userId:any;
    fName:any;
    lName:any;
    email:any;
    password:any;
    constructor(fName?,lName?,email?,password?){
        this.fName=fName;
        this.lName=lName;
        this.email=email;
        this.password=password;
    }
}