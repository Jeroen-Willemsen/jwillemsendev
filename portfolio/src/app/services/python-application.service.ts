import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {PythonApplication} from '../models/python-application';

@Injectable({
  providedIn: 'root',
})
export class PythonApplicationService {
  private applications: PythonApplication[] = [
    {
      title: "Simple calculator",
      description: "",
      repoUrl: "",
      exeUrl: "",
      code: ""
    },
    {
      title: "Simple Dutch weather app",
      description: "",
      repoUrl: "",
      exeUrl: "",
      code: ""
    },
    {
      title: "IPA symbol picker and LaTeX converter",
      description: "",
      repoUrl: "",
      exeUrl: "",
      code: ""
    }
  ];

  constructor() {
  }

  getOverview(): Observable<PythonApplication[]> {
    return of(this.applications);
  }
}
