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

  constructor(private http: HttpClient) { }

  private url="http://localhost:8090"

  //listing methods
  public getListings(){
    return this.http.get<Listing[]>(this.url+"/listing");
  }

  // Failing for some reason. Need to fix.
  getListingById(id){
    console.log("Rest Service: "+id);
    return this.http.get<Listing>(this.url +"/listing/"+ id);
  }

  addListing(Listing) {
    return this.http.post<Listing>(this.url+"/listing",Listing);
  }

  updateListing(Listing){
    return this.http.put<Listing>(this.url+"/listing", Listing);
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

  getUser(email){
    return this.http.get<User>(this.url+"/user/email/"+email);
  }

  //review methods
  public getReviews(){
    return this.http.get<Review[]>(this.url+"/review");
  }
}
