import { AboutMeComponent } from './about-me/about-me.component';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { ContactMeComponent } from './contact-me/contact-me.component';
import { NgModule } from '@angular/core';
import { SideProjectsComponent } from './side-projects/side-projects.component';
import { WorksComponent } from './works/works.component';

@NgModule({
  declarations: [
    AboutMeComponent,
    ContactMeComponent,
    SideProjectsComponent,
    WorksComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
