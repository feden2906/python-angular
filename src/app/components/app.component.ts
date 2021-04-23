import {Component, OnInit} from '@angular/core';
import {OfficeService} from '../services';
import {IOffice} from '../interfaces';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  offices: IOffice[];
  form: FormGroup;

  constructor(private officeService: OfficeService) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormControl(''),
      city: new FormControl('')
    });

    this.officeService.getAll().subscribe(value => this.offices = value);
  }


}
