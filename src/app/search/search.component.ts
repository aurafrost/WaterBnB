import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Listing } from '../model/Listing';
import { RestService } from '../services/rest.service';

@Component({
  selector: 'search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  pools: Observable<Listing[]>;
  msg:any;
  results:any;
  constructor(private service: RestService) { }

  ngOnInit() {
    this.pools=this.service.getListings();
  }

  search(string){
    this.results="";
    this.msg="Displaying results for '"+string+"'";
    this.pools=this.service.searchListings(string);
    //not displaying. Check later.
    if(this.pools==null){
      this.results="No results found for search.";
    }
  }
}
