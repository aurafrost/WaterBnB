import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Listing } from '../model/Listing';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

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

  private url="http://localhost:8081/WaterBnB/waterbnb"

  public getListings(){
    return this.http.get<Listing[]>(this.url);
  }

  getListingById(id){
    console.log("Rest Service: "+id);
    return this.http.get<Listing>(this.url + "/find/" + id);
  }

  addListing(Listing) {
    return this.http.post<Listing>(this.url + '/add',Listing);
  }

  updateListing(Listing){
    return this.http.put<Listing>(this.url + '/update', Listing);
  }

  /* GET heroes whose name contains search term */
  searchListings(string){
    return this.http.get<Listing[]>(this.url+"/?name="+string);
  }
}
