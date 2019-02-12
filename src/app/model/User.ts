export class User{
    userId:any;
    fName:any;
    lName:any;
    email:any;
    password:any;
    type:any;
    constructor(fName?,lName?,email?,password?,type?){
        this.fName=fName;
        this.lName=lName;
        this.email=email;
        this.password=password;
        this.type=type;
    }
}