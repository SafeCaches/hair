import { Component } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';



@Component({
  selector: 'app-root',
  template: `<div class="nav_container container navbar-collapse" id="navbar" ng-class="{'collapse':!isCollapsed}">
  <div class="container-fluid">
  <span class="hair_logo">
  <a class="navbar-brand"><img src="https://s3-us-west-2.amazonaws.com/jennieseleganthair/img/bridelogo.png" /></a>
</span>
<nav class="navbar navbar_custom navbar-dark" id="navbar" ng-init="isCollapsed = false">
            <div class="container">
            
                <ul class="nav navbar-nav" routerLinkActive="active">
                    <li class="nav-item"><a class="nav-link" routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{ exact : true }">Home</a></li>
                    <li class="nav-item"><a class="nav-link" routerLink="/portfolio" routerLinkActive="active">Portfolio</a></li>
                    <li class="nav-item"><a class="nav-link" routerLink="education" routerLinkActive="active">Education</a></li>
                    <li class="nav-item"><a class="nav-link" routerLink="reach" routerLinkActive="active">Reach</a></li>
                </ul>
                 
         
            </div>
        </nav>
        <div class="contact_div col-sm-2 col-lg-2">
           <ul class="contact"> 
             <li class="nav-item"><a href="tel:732-299-6622" class="has-tooltip"><img src="https://s3-us-west-2.amazonaws.com/jennieseleganthair/img/phone.png" alt="phone icon" /><span class="tooltip tooltip-with-border" role="tooltip">Call Me</span></a></li>
                    <li class="nav-item"><a href="mailto:jenco1231@aol.com" class="has-tooltip" ><img src="https://s3-us-west-2.amazonaws.com/jennieseleganthair/img/email.png" alt="Email" /><span class="tooltip tooltip-with-border" role="tooltip">Email Me</span></a></li>
                    </ul>
                    </div>
         <div ngbDropdown class="mobile_menu">
      <button class="btn btn-outline-primary" id="dropdownBasic1" ngbDropdownToggle>Menu</button>
      <div ngbDropdownMenu aria-labelledby="dropdownBasic1">
         <ul class="nav navbar-nav" routerLinkActive="active">
                    <li class="nav-item"><a class="nav-link" routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{ exact : true }">Home</a></li>
                    <li class="nav-item"><a class="nav-link" routerLink="/portfolio" routerLinkActive="active">Portfolio</a></li>
                    <li class="nav-item"><a class="nav-link" routerLink="education" routerLinkActive="active">Education</a></li>
                    <li class="nav-item"><a class="nav-link" routerLink="reach" routerLinkActive="active">Reach</a></li>
                    <li class="nav-item"><a class="" routerLink="" routerLinkActive="active">Phone:732-299-6622</a></li>
                    <li class="nav-item"><a class="nav-link" routerLink="" routerLinkActive="active">jenco1231@aol.com</a></li>
                </ul>
                
      </div>
    </div>   
</div>
        </div>
        
        
        <router-outlet></router-outlet>
        <app-footer></app-footer>
`,
  styleUrls: ['./stylesheets/app.component.css']
})
export class AppComponent {
}


