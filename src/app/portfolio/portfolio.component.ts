import { Component } from '@angular/core';
import { ICarouselConfig, AnimationConfig } from 'angular4-carousel';
import { Router, Routes, RouterModule, NavigationEnd, Event } from '@angular/router';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';

declare var Instafeed:any;

   var feed = new Instafeed({
        get: 'user',
        userId: 'xxxxx',
        clientId: 'xxxxxx',
        accessToken: 'xxxx',
        resolution: 'standard_resolution',
        limit: 10
    });
 
    feed.run();

  declare var instgrm:any; 

@Component({
  selector: 'app-root',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent {
  title = 'Portfolio';
  portfolio = 'Portfolio';

  public imageSources: string[] = [
     './assets/img/beach_waves.png',
  './assets/img/dirty_blond.png',
     '/assets/img/brown_curls.png',
     '/assets/img/blonde_curls.png',
     '/assets/img/black_curls.png'
  ];
  
  public config: ICarouselConfig = {
    verifyBeforeLoad: true,
    log: false,
    animation: true,
    animationType: AnimationConfig.SLIDE,
    autoplay: true,
    autoplayDelay: 3000,
    stopAutoplayMinWidth: 768
  };
                
 constructor (private router: Router) {}
 
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