import { Component, OnInit } from '@angular/core';
import { RestService } from '../services/rest.service';
import { User } from '../model/User';

@Component({
  selector: 'host',
  templateUrl: './host.component.html',
  styleUrls: ['./host.component.scss']
})
export class HostComponent implements OnInit {
  user:User;
  constructor(private service:RestService) { }

  ngOnInit() {
    this.user=this.service.getCurrentUser();
  }


}
