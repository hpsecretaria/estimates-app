import { Injectable } from '@angular/core';
import { map, Observable, of } from 'rxjs';
import { IDropdownOptions } from '../models/common';
import { IEstimate } from '../models/estimate';
import { IProject } from '../models/project';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  projects: Observable<IProject[]> = of([
    {
      id: 1,
      name: 'Test Project 1',
      description: 'Test Project 1 Description',
    },
    {
      id: 2,
      name: 'Test Project 2',
      description: 'Test Project 2 Description',
    },
  ]);

  projectOptions: Observable<IDropdownOptions[]>;

  constructor() {
    this.projectOptions = this.projects.pipe(
      map((c) => c.map((x) => ({ label: x.name, value: x.id })))
    );
  }

  addProjectEstimate(projectId: number, estimates: IEstimate[]) {
    console.log(projectId, estimates);
  }
}
