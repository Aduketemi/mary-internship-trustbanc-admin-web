import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-cantlogin',
  templateUrl: './cantlogin.component.html',
  styleUrls: ['./cantlogin.component.css']
})
export class CantloginComponent implements OnInit {

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
  }

  onSubmit(data:object){
    this.http.post('http://eldorado.trustbancgroup.com/v1/admin/auth/password', data).subscribe((result) => {console.log("result", result)})
    console.log(data)
  }

}
