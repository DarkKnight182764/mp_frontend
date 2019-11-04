import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {LoginComponent} from "../login/login.component"
import {LoginService} from "../login.service"
import {CookieService} from "ngx-cookie-service"

export interface DialogData {
  type:string
}


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

    login_type=""
  constructor(
    private dialog:MatDialog,
    public loginServ:LoginService
  ) { }

  ngOnInit() {
  }
  login(){
    this.login_type="login";      
    const dialogRef = this.dialog.open(LoginComponent, {
        width: '500px',
        data: {type:"login"}
    });

    dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
        this.loginServ.login(result.type, result.usr, result.pwd).subscribe(data=>{
          console.log(JSON.stringify(data))
          this.loginServ.user_data = data

        })
    });      
    
  }
  signup(){
    this.login_type="signup"    
    const dialogRef = this.dialog.open(LoginComponent, {
        width: '500px',
        data: {type:"signup"}
    });

    dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
        // this.animal = result;
    });  
  }

}
