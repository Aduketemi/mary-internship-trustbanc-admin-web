import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-setpassword',
  templateUrl: './setpassword.component.html',
  styleUrls: ['./setpassword.component.css']
})
export class SetpasswordComponent implements OnInit {

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
  }

  onSubmit(data:object){
    this.http.post('http://eldorado.trustbancgroup.com/v1/admin/auth/password/reset', data).subscribe((result) => {console.log("result", result)})
    console.log(data)
  }

}
