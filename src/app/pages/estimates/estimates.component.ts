import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { EmployeeService } from 'src/app/services/employee.service';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-estimates',
  templateUrl: './estimates.component.html',
  styleUrls: ['./estimates.component.css'],
})
export class EstimatesComponent implements OnInit {
  constructor(
    public projectService: ProjectService,
    public employeeService: EmployeeService
  ) {}

  employeeEstimateFg = new FormGroup({
    employee: new FormControl('', [Validators.required]),
    estimate: new FormControl<number>(0, [Validators.min(1)]),
    actual: new FormControl<number>(0, [Validators.min(1)]),
  });

  estimates = new FormArray([this.employeeEstimateFg]);

  projectEstimate = {
    project: new FormControl('', [Validators.required]),
    estimates: this.estimates,
  };

  fg = new FormGroup(this.projectEstimate);

  ngOnInit(): void {}

  get total() {
    return this.estimates.controls
      .map((c) => Number(c.value.actual))
      .reduce(function (previousValue: number, currentValue: number) {
        return previousValue + currentValue;
      }, 0);
  }

  addRowEstimate(): void {
    this.estimates.push(this.employeeEstimateFg);
  }

  removeRowEstimate(index: number): void {
    this.estimates.removeAt(index);
  }

  clear(): void {
    this.fg.reset();
  }

  submit($event: Event): void {
    $event.preventDefault();

    const selectedProjectId = this.projectEstimate.project.value;
    if (!selectedProjectId) {
      return;
    }

    const estimates = this.estimates.controls.map((c, index) => ({
      id: index,
      employeeId: Number(c.value.employee),
      actual: Number(c.value.actual),
      estimate: Number(c.value.estimate),
    }));

    this.projectService.addProjectEstimate(
      Number(selectedProjectId),
      estimates
    );

    this.clear();
  }

  get errors () {
    return JSON.stringify(this.fg.errors);
  }
}
