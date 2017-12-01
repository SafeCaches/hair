import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { PostSingleComponent } from './posts/post-single/post-single.component';
import { EducationComponent } from './education/education.component';
import { ReachComponent } from './reach/reach.component';

const appRoutes: Routes = [


  {
    path: 'portfolio',
    component: PortfolioComponent,
    pathMatch: 'full'
  },
  

  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full'
  },
  
    {
    path: 'education',
    component: EducationComponent,
    pathMatch: 'full'
  },
  
    {
    path: 'reach',
    component: ReachComponent,
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
  providers: []
})
export class hairRoutingModule { }


