import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { PostListComponent } from './posts/post-list/post-list.component';
import { hairRoutingModule } from './app-routing.module';
import { PostSingleComponent } from './posts/post-single/post-single.component';
import { HomeComponent } from './home/home.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { PageNotFoundComponent } from './not_found.component';
import { CarouselModule } from 'angular4-carousel';
import { EducationComponent } from './education/education.component';
import { AgmCoreModule } from '@agm/core';
import { FooterComponent } from './footer/footer.component';
import { RouterLinkActive } from '@angular/router';
import { ReachComponent } from './reach/reach.component';
import { AngularSlideoutModule } from 'angular-slideout';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
      
      
const appRoutes: Routes = [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      { path: 'portfolio', component: PortfolioComponent },
      { path: 'education', component: EducationComponent },
      { path: '**', component: PageNotFoundComponent },
      { path: 'reach', component: ReachComponent}
];


@NgModule({

  declarations: [
    AppComponent,
    PostListComponent,
    PostSingleComponent,
    HomeComponent,
    PortfolioComponent,
    PageNotFoundComponent,
    EducationComponent,
    FooterComponent,
    ReachComponent
  ],
  imports: [
    BrowserModule,
    CarouselModule,
    FormsModule,
    HttpClientModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    hairRoutingModule,
    AgmCoreModule.forRoot({
 
      apiKey: 'AIzaSyAnq42WedP6oSEXRUUohkcuHpjxfKtJGRA'
 
    })
  ],
    
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }



