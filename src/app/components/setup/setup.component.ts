import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-setup',
  templateUrl: './setup.component.html',
  styleUrls: ['./setup.component.css']
})
export class SetupComponent implements OnInit {

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
  }

  onSubmit(data:object){
    this.http.post('http://eldorado.trustbancgroup.com/v1/admin/auth/setup', data).subscribe((result) => {console.log("result", result)})
    console.log(data)
  }

}
