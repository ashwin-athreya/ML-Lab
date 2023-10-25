import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usersArr = [
    {userName: 'ram', password: 'ram' ,role:'admin'},
    {userName: 'raju', password: 'raju' ,role:'student'},
];

userName: any ;
password:  any;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  login() {
      this.usersArr.forEach((user) => {
          if(user.userName  == this.userName && user.password == this.password) {
            if(user.role == 'admin')
            {
              this.router.navigate(['/admin']); 
            }
            else {
              this.router.navigate(['/student',this.userName]); 

            }
          } 
      })
  }

}
