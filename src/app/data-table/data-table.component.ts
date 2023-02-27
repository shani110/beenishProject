import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Data } from '@angular/router';



@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent implements OnInit {
 

  constructor(private http: HttpClient) { }
  

 ngOnInit() {
  this.http.get('assets/data.json').subscribe((data: any[]) => {
    console.log(data); // Log the response data to the console
  });
}
}
