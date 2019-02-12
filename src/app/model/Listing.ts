import { User } from './User';

export class Listing{
    listingId:any;
    email:any;
    name:any;
    address:any;
    poolSize:any;
    cost:any;
    details:any;
    userId:any;
    constructor(listingId?,email?,name?,address?,poolSize?,cost?,details?,userId?){
        this.listingId=listingId;
        this.email=email;
        this.name=name;
        this.address=address;
        this.poolSize=poolSize;
        this.cost=cost;
        this.details=details;
        this.userId=userId;
    }
}