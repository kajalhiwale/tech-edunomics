import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ServiceComponent } from './service/service.component';
import { BlogComponent } from './blog/blog.component';
import { CasestudiesComponent } from './casestudies/casestudies.component';
import { CareerComponent } from './career/career.component';
import { ContactComponent } from './contact/contact.component';
import { PartnersComponent } from './partners/partners.component';
import { HowWeWorkComponent } from './how-we-work/how-we-work.component';
import { AffiliateProgrammeComponent } from './affiliate-programme/affiliate-programme.component';
import { WhitepaperComponent } from './whitepaper/whitepaper.component';
import { SolutionComponent } from './solution/solution.component';
import { TeamComponent } from './team/team.component';
import { DiscoverComponent } from './discover/discover.component';
import { EstateComponent } from './estate/estate.component';
import { ComeComponent } from './come/come.component';
import { PhotographyComponent } from './photography/photography.component';


const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'about',
    component:AboutComponent
  },
  {
    path:'service',
    component:ServiceComponent
  },
  {
    path:'solution',
    component:SolutionComponent
  },
  {
    path:'team',
    component:TeamComponent
  },
  {
    path:'blog',
    component:BlogComponent
  },
  {
    path:'casestudies',
    component:CasestudiesComponent
  },
  {
    path:'whitepaper',
    component:WhitepaperComponent
  },
  {
    path:'career',
    component:CareerComponent
  },
  {
    path:'how-we-work',
    component:HowWeWorkComponent
  },
  {
    path:'Affiliate-Programme',
    component:AffiliateProgrammeComponent
  },
  {
    path:'contact',
    component:ContactComponent
  },
  {
    path:'partners',
    component:PartnersComponent
  },
  {
  path:'discover',
  component:DiscoverComponent
  },
  {
    path:'estate',
    component:EstateComponent
  },
  {
    path:'come',
    component:ComeComponent
  },
  {
    path:'photography',
    component:PhotographyComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
