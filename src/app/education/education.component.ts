import { Component, OnInit } from '@angular/core';
import { Router, Routes, RouterModule, NavigationEnd, Event } from '@angular/router';


@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit {

  lat: number = 40.034788 ;
 
  lng: number = -74.142337;
 
  constructor(private router: Router) { }

  ngOnInit() {
  (function()
{
  if( window.localStorage )
  {
    if( !localStorage.getItem('firstLoad') )
    {
      localStorage['firstLoad'] = true;
      window.location.reload();
    }  
    else
      localStorage.removeItem('firstLoad');
  }
})();
  }

}
