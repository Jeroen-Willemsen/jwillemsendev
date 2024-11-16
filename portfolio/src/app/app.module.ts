import {AboutMeComponent} from './components/about-me/about-me.component';
import {AppComponent} from './app.component';
import {BrowserModule} from '@angular/platform-browser';
import {ContactMeComponent} from './components/contact-me/contact-me.component';
import {DocumentListComponent} from './document-list/document-list.component';
import {NgModule} from '@angular/core';
import {SideProjectsComponent} from './components/side-projects/side-projects.component';
import {WorksComponent} from './components/works/works.component';

@NgModule({
  declarations: [
    AboutMeComponent,
    ContactMeComponent,
    SideProjectsComponent,
  ],
  imports: [
    BrowserModule,
    DocumentListComponent,
    WorksComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
