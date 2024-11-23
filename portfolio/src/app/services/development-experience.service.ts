import {DevelopmentExperienceCategory} from '../models/development-experience.model';
import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DevelopmentExperienceService {
  developmentExperienceCategories: DevelopmentExperienceCategory[] = [
    {
      name: 'Front-end development',
      info: 'Creating CRUD apps in Angular using Angular Material',
      experiences: [
        {
          name: 'Angular',
          info: 'My primary front-end development experience is with the Angular framework. ' +
            'I am well-versed in Angular as a whole, and I am very familiar with the Material component library. ' +
            'I have built many CRUD-functionalities using components such as mat-table, mat-tree, and many others.'
        },
        {
          name: 'D3.js',
          info: 'I have implemented D3.js for the creation of charts and graphs as well as the visualisation of ' +
            'geographical areas and their properties, using live data from either relational or time series databases.'
        },
        {
          name: 'DevExtreme',
          info: 'I have implemented DevExtreme components, primarily data grids, to build CRUD-functionalities that ' +
            'needed more complex and elaborate filter functions than any native Angular alternatives.'
        },
        {
          name: 'Other',
          info: 'Other front-end development experiences include maintaining legacy AngularJS, and creating static ' +
            'web pages using bare HTML and CSS.'
        },
      ]
    },
    {
      name: 'Back-end development',
      info: '',
      experiences: [
        {
          name: 'REST APIs',
          info: 'I have worked on many REST APIs or parts thereof, ' +
            'usually as part of some Angular application, where the majority of my work would be centered ' +
            'writing get-by-filter methods to accommodate the visualisation of database entities on the front-end, ' +
            'as well as furnishing other CRUD-methods.'
        },
        {
          name: 'Web services',
          info: 'I have written a few web services as part of a larger application, such as to check for the presence ' +
            'of a certain file in a folder structure in order for the front-end to generate a download button or not.'
        },
        {
          name: 'Windows services',
          info: 'I have written and contributed to various Windows services, such as ' +
            'developing a periodic PI-value updater to update PI values every 5 minutes, ' +
            'and aggregating millions of PLC messages into usable database entries.'
        },
        {
          name: 'Other',
          info: 'I have on occasion maintained APIs written in either Java or Pascal.'
        },
      ]
    },
    {
      name: 'Databases',
      info: '',
      experiences: [
        {
          name: 'SQL',
          info: 'I have managed, maintained and expanded SQL databases extensively. ' +
            'Maintenance experience includes writing scripts to detect faulty data, reorganising/rebuilding indexes, ' +
            'and using schema compares to ensure different environments are aligned in terms of their data model. ' +
            'I have also written many Stored Procedures, either to facilitate the generation of SSRS reports, or to ' +
            'fetch large data sets for a web application more effectively than an ORM would. ' +
            'I am very familiar with the SQL Server Management Studio environment as as a whole.'
        },
        {
          name: 'Oracle',
          info: 'I have managed and maintained various legacy Oracle databases using Toad for Oracle.'
        },
        {
          name: 'PI',
          info: 'I have built and maintained various parts of PI database systems using tools such as ' +
            'PI ProcessBook, PI System Explorer, PI AF and PI Builder. '
        },
        {
          name: 'Other',
          info: 'I have built and maintained numerous SSRS reports. Much of my experience comes from a large project ' +
            'where a set of legacy reports tied to Oracle databases had to be rewritten using SQL data.'
        },
      ]
    },
    {
      name: 'Projects I\'ve been involved in',
      info: '',
      experiences: [
        {
          name: 'Reverse engineering an old Pascal app',
          info: ''
        },
        {
          name: 'Reverse engineering an outdated database',
          info: ''
        },
        {
          name: 'Building an entire CRUD application',
          info: ''
        },
        {
          name: 'Writing services to communicate data',
          info: ''
        },
      ]
    },
    {
      name: 'Tooling I\'ve worked with',
      info: '',
      experiences: [
        {
          name: 'hoezo',
          info: ''
        },
        {
          name: 'hoezo',
          info: ''
        },
        {
          name: 'hoezo',
          info: ''
        },
        {
          name: 'hoezo',
          info: ''
        },
      ]
    },
  ];

  getExperienceCategories(): Observable<DevelopmentExperienceCategory[]> {
    return of(this.developmentExperienceCategories);
  }
}
