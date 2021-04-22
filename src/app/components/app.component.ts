import {Component, OnInit} from '@angular/core';
import {OfficeService} from '../services';
import {IOffice} from '../interfaces';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  offices: IOffice[];

  constructor(private officeService: OfficeService) { }

  ngOnInit(): void {
    this.officeService.getAll().subscribe(value => this.offices = value);
  }
}
