import { Injectable } from '@angular/core';
import { map, Observable, of } from 'rxjs';
import { IDropdownOptions } from '../models/common';
import { IEmployee } from '../models/employee';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  projects: Observable<IEmployee[]> = of([
    {
      id: 1,
      name: 'Employee 1',
    },
    {
      id: 2,
      name: 'Employee 2',
      description: 'Test Project 2 Description',
    },
  ]);

  employeeOptions: Observable<IDropdownOptions[]>;

  constructor() {
    this.employeeOptions = this.projects.pipe(
      map((c) => c.map((x) => ({ label: x.name, value: x.id })))
    );
  }
}
