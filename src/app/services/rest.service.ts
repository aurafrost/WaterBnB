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
  private url="http://localhost:8090"

  constructor(private http: HttpClient) { }

  getCurrentUser(){
    return this.signedin;
  }

  setCurrentUser(user){
    this.signedin=user;
  }

  //listing methods
  public getListings(){
    return this.http.get<Listing[]>(this.url+"/listing");
  }

  // Failing for some reason. Need to fix.
  getListingById(id){
    console.log("Rest Service: "+id);
    return this.http.get<Listing>(this.url +"/listing/"+ id);
  }

  addListing(listing) {
    return this.http.post(this.url+"/listing/",listing);
  }

  updateListing(listing){
    return this.http.put(this.url+"/listing", listing);
  }

  // failing at the moment
  searchListings(string){
    return this.http.get<Listing[]>(this.url+"/listing/?name="+string);
  }


  //user methods
  registerUser(user){
    return this.http.post(this.url+"/user/",user);
  }

  getUserById(id){
    return this.http.get<User>(this.url+"/user/"+id);
  }

  getUserByEmail(email){
    console.log("REST sending email: "+email)
    return this.http.get<User>(this.url+"/user/email/"+email);
  }

  //review methods
  public getReviews(){
    return this.http.get<Review[]>(this.url+"/review");
  }
}
