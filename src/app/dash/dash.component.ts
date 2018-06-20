import { Component, OnInit } from '@angular/core';
import {FirebaseserviceService} from '../firebaseservice.service'
declare const google: any;

@Component({
  selector: 'dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.css']
})
export class DashComponent implements OnInit {

	public allsessionslength : any;
	private sessions : any;

  constructor(private firebase:FirebaseserviceService) 
  { 
  
   }



  ngOnInit() 
  {
  	this.firebase.getchatsessions().subscribe(sessions => {
  		this.allsessionslength = sessions.length
  		this.sessions = sessions
  		console.log(sessions)
  	})


  	let mapProp = {
            center: {lat: -34.397, lng: 150.644},
            zoom: 8,
          
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };

        let map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
        let market = new google.maps.Marker({
          center: {lat: -34.397, lng: 150.644},
          position: {lat: -34.397, lng: 150.644},
          map: map,
          title: 'Hello World!'
        });
  }

}
