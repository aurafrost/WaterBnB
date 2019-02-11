import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Listing } from '../model/Listing';
import { RestService } from '../services/rest.service';
import { HttpClient, HttpHeaders } from "@angular/common/http";

const httpOptions={headers: new HttpHeaders(
  {
    'Content-Type':'application/json'
  }
)};

@Component({
  selector: 'search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  pools: Observable<Listing[]>;

  constructor(private service: RestService) { }

  ngOnInit() {
    this.pools=this.service.getListings();
  }

  search(string){
    this.pools=this.service.searchListings(string);
  }
}
