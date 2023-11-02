import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { CookiesPageComponent } from './components/cookies-page/cookies-page.component';
import { ImpressumComponent } from './components/impressum/impressum.component';
import { AgbsComponent } from './components/agbs/agbs.component';



const routes: Routes = [
  { path: '', component: HomePageComponent }, 
    { path: 'cookies', component: CookiesPageComponent },
    { path: 'impressum', component: ImpressumComponent },
    { path: 'agbs', component: AgbsComponent },
    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
