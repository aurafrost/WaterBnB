import { Listing } from './Listing';

export class Review{
    reviewId:any;
    name:any;
    rating:any;
    review:any;
    listing:Listing;
    constructor(reviewId?,name?,rating?,review?,listing?){
        this.reviewId=reviewId;
        this.name=name;
        this.rating=rating;
        this.review=review;
        this.listing=listing;
    }
}