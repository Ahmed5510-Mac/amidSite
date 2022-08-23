import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SlideComponent } from './components/slide/slide.component';
import { HomeComponent } from './pages/home/home.component';
import { StepsComponent } from './components/steps/steps.component';
import { FilterResultComponent } from './components/filter-result/filter-result.component';
import { ListMaidComponent } from './components/list-maid/list-maid.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContactComponent } from './components/contact/contact.component';
import { DetailsComponent } from './components/details/details.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SlideComponent,
    HomeComponent,
    StepsComponent,
    FilterResultComponent,
    ListMaidComponent,
    FooterComponent,
    ContactComponent,
    DetailsComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
