import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http'
@Component({
  selector: 'app-dashboard',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class Details implements OnInit {

    signurl='http://localhost:9000/signup';
    name='';
    email='';
    age='';
    phoneNumber='';
    language='';
    url='';
    constructor(private router: Router,private httpClient: HttpClient) {

    }
    public userDetails: any;
  ngOnInit(): void {
    const storage = localStorage.getItem('google_auth');
    if (storage) {
      this.userDetails = JSON.parse(storage);
      this.name=this.userDetails[0].firstName;
      this.email=this.userDetails[0].email;
      this.url=this.userDetails[0].photoUrl;
    }
   
  }
  postdata():void
  {
      this.email=(<HTMLInputElement>document.getElementById("email")).value;
      this.name=(<HTMLInputElement>document.getElementById("firstName")).value;
      this.age=(<HTMLInputElement>document.getElementById("age")).value;
      this.phoneNumber=(<HTMLInputElement>document.getElementById("phoneNumber")).value;
      this.language=(<HTMLInputElement>document.getElementById("language")).value;
      var body={url:this.url,firstName:this.name,email:this.email,age:this.age,phonenumber:this.phoneNumber,language:this.language};
      localStorage.setItem("QAuth",JSON.stringify(body));
      localStorage.removeItem("google_auth");
        // const headers={'content-type':'application/json'};
        // this.httpClient.post(this.signurl,body,{'headers':headers})
        // .subscribe(res=>{
        //     console.log(res);
        //     this.router.navigateByUrl('/login').then();
        // },
        //     err=>{
        //         console.log(err);
        //         this.router.navigateByUrl('/login').then();
        //     }
        // )
        // this.router.navigateByUrl('/login').then();
  }
  }