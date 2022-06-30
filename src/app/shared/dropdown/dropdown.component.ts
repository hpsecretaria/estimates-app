import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { IDropdownOptions } from 'src/app/models/common';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css'],
})
export class DropdownComponent implements OnInit {
  @Input() options: Observable<IDropdownOptions[]> = new Observable();
  @Input() control: FormControl = new FormControl();
  constructor() {}

  ngOnInit(): void {}
}
