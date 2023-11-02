import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeaderComponent } from './components/header/header.component';
import { CardsComponent } from './components/cards/cards.component';
import { AboutmeComponent } from './components/aboutme/aboutme.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';
import { MycvComponent } from './components/mycv/mycv.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MiportfolioComponent } from './components/miportfolio/miportfolio.component';
import { CookieService } from './Services/cookie.service';
import { CookieBannerComponent } from './components/cookie-banner/cookie-banner.component';
import { CookiesPageComponent } from './components/cookies-page/cookies-page.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { HomePageComponent } from './home-page/home-page.component';
import { ImpressumComponent } from './components/impressum/impressum.component';
import { AgbsComponent } from './components/agbs/agbs.component';  // Importa ModalModule de ngx-bootstrap


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeaderComponent,
    CardsComponent,
    AboutmeComponent,
    ProjectsComponent,
    ContactComponent,
    FooterComponent,
    MycvComponent,
    MiportfolioComponent,
    CookieBannerComponent,
    CookiesPageComponent,
    HomePageComponent,
    ImpressumComponent,
    AgbsComponent,

  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    ModalModule.forRoot(), 
    BrowserAnimationsModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [CookieService],
  bootstrap: [AppComponent],

})
export class AppModule { }


export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, '../assets/i18n/', '.json');
}