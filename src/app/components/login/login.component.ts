import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { User } from '../../models/user';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user:User = new User();
  onLogin():void{
    console.log('user logged in success fully :: '+this.user.email+':: with password::'+this.user.password)
    this.auth.login(this.user)
      .subscribe(
        (data)=>{
          console.log('priniting :'+data.id);
          if(data.id=='1'){
            this.router.navigate(['/userPage']);
          }
          if(data.id=='2'){
            this.router.navigate(['/hrPage']);
          }
          if(data.id=='3'){
            this.router.navigate(['/managerPage']);
          }

          
        },
        error=>{
          this.router.navigate([this.returnUrlOnLoginSubmitFailuer])
        });
  }




  constructor(private auth:AuthService,private router :Router) { }

  ngOnInit() {
    console.log(this.auth.test());
    
  }
  loginHeader:string ='Login Here';
  returnUrlOnLoginSubmit : string ;
  returnUrlOnLoginSubmitFailuer : string ='http://www.facebook.com';
}
