import { User } from './User';

export class Listing{
    listingId:any;
    email:any;
    name:any;
    address:any;
    poolSize:any;
    cost:any;
    user:any;
    description:any;
    review:any;
    constructor(listingId?,email?,name?,address?,poolSize?,cost?,user?,description?,review?){
        this.listingId=listingId;
        this.email=email;
        this.name=name;
        this.address=address;
        this.poolSize=poolSize;
        this.cost=cost;
        this.user=user;
        this.description=description;
        this.review=review;
    }
}