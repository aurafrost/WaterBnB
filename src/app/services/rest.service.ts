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
  private signedin;
  // private url="http://localhost:8090";
  //url for heroku
  private url="https://waterbnbserver.herokuapp.com";

  constructor(private http: HttpClient) { }

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

  // Failing for some reason. Need to fix.
  public getListingById(id){
    console.log("Rest Service: "+id);
    return this.http.get<Listing>(this.url +"/listing/"+ id);
  }

  public getListingsByUser(user){
    return this.http.get<Listing[]>(this.url +"/listing", user);
  }

  public addListing(listing) {
    return this.http.post(this.url+"/listing/",listing);
  }

  public updateListing(listing){
    return this.http.put(this.url+"/listing/", listing);
  }

  // failing at the moment. maybe make it frontend only?
  public searchListings(string){
    return this.http.get<Listing[]>(this.url+"/listing/?name="+string);
  }


  //user methods
  public registerUser(user){
    return this.http.post(this.url+"/user/",user);
  }

  public getUserById(id){
    return this.http.get<User>(this.url+"/user/"+id);
  }

  public getUserByEmail(email){
    console.log("REST sending email: "+email)
    return this.http.get<User>(this.url+"/user/email/"+email);
  }

  //review methods
  public getReviews(){
    return this.http.get<Review[]>(this.url+"/review");
  }
}
