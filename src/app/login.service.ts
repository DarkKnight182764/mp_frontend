import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

let url="http://127.0.0.1:5000/login"

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  
  user_data;
  constructor(
    private http: HttpClient    
  ) { }
  login(type, usr, pwd){
    if (type=="student"){
      return this.http.post(url+"/"+type, {"uid":usr, "pwd":pwd})
    }    
    else if (type=="teacher"){
      return this.http.post(url+"/"+type, {"tid":usr, "pwd":pwd})
    }
  }
  signup(){

  }
}
