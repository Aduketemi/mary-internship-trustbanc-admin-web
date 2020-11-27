import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
  }

  onSubmit(data:object){
    this.http.post('http://eldorado.trustbancgroup.com/v1/admin/auth/login', data).subscribe((result) => {console.log("result", result)})
    console.log(data)
  }

}
