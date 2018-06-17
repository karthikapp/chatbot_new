import { Component, OnInit } from '@angular/core';
import {FirebaseserviceService} from '../firebaseservice.service'


@Component({
  selector: 'dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.css']
})
export class DashComponent implements OnInit {

  constructor(private firebase:FirebaseserviceService) { }

  ngOnInit() 
  {
  	this.firebase.getchatsessions().subscribe(sessions => {
  		console.log(sessions)
  	})
  }

}
