import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Listing } from '../model/Listing';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { User } from '../model/User';
import { Review } from '../model/Review';

const httpOptions={headers: new HttpHeaders(
  {
    'Content-Type':'application/json'
  }
)};

@Injectable({
  providedIn: 'root'
})
export class RestService {
  signedin:any;
  private url="http://localhost:8090";
  //url for heroku
  // private url="https://waterbnbserver.herokuapp.com";

  constructor(private http: HttpClient) { }

  //used for maintaining user state unless page reloads
  public getCurrentUser(){
    return this.signedin;
  }
  public setCurrentUser(user){
    this.signedin=user;
  }

  //listing methods
  public getListings(){
    return this.http.get<Listing[]>(this.url+"/listing");
  }
  //get listing by id
  public getListingById(id){
    // console.log("Rest Service: "+id);
    return this.http.get<Listing>(this.url +"/listing/"+ id);
  }
  //get listings of current user (hosts)
  public getListingsByUser(userId){
    return this.http.get<Listing[]>(this.url +"/listing/user/"+ userId);
  }
  //create listing
  public addListing(userId,listing) {
    return this.http.post(this.url+"/listing/create/"+userId,listing);
  }
  //update listing
  public updateListing(listingId,listing){
    return this.http.put(this.url+"/listing/update/"+listingId, listing);
  }
  // failing at the moment. maybe make it frontend only? Worked earlier though.
  public searchListings(string){
    return this.http.get<Listing[]>(this.url+"/listing/search/"+string);
  }


  //user methods
  public registerUser(user){
    return this.http.post(this.url+"/user/",user);
  }
  public getUserById(id){
    return this.http.get<User>(this.url+"/user/"+id);
  }
  public getUserByEmail(email){
    // console.log("REST sending email: "+email)
    return this.http.get<User>(this.url+"/user/email/"+email);
  }

  //review methods
  public getReviews(){
    return this.http.get<Review[]>(this.url+"/review");
  }
  public getReviewsByListing(listingId){
    console.log("Getting reviews with listingID: "+listingId)
    return this.http.get<Review[]>(this.url+"/review/"+listingId);
  }
  public addReview(listingId,review){
    return this.http.post(this.url+"/review/create/"+listingId,review);
  }
}
