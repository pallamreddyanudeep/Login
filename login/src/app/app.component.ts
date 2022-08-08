import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Login';
  loginpage: boolean = true;
  registrationpage: boolean = false
  registerform: FormGroup;
  loginform: FormGroup;
  username: any;
  password: any;
  firstname: any;
  lastname: any;
  loggedin: boolean = false;
  success: boolean = false;
  error: string;
  username1: any;
  password2: any;

  constructor(
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit() {

  }
  fromInit() {
    this.registerform = new FormGroup({
      'username': new FormControl('', [Validators.required]),
      'password': new FormControl('', [Validators.required]),
      'firstname': new FormControl('', [Validators.required]),
      'lastname': new FormControl('', [Validators.required])
    });
  }
  loginformInit() {
    this.loginform = new FormGroup({
      'username': new FormControl('', [Validators.required]),
      'password': new FormControl('', [Validators.required]),
    });
  }

  register() {
    this.loginpage = false;
    this.registrationpage = true;
  }

  userlogin() {
    if (this.username && this.username == this.username1 && this.password == this.password2) {
      this.loginpage = false;
      this.loggedin = true
      this.error = ''
    } else {
      this.error = 'Enter Incorrect username or Password'
    }
  }

  registration() {
    this.loginpage = true;
    this.registrationpage = false;
    this.success = true
    // console.log(this.registerform);

    // this.username = this.registerform.get('username').value;
    // this.password = this.registerform.get('password').value;
    // this.firstname = this.registerform.get('firstname').value;
    // this.lastname = this.registerform.get('lastname').value;
  }

  loginusername(value) {
    this.username1 = value
  }
  loginuserpassword(value) {
    this.password2 = value
  }
  userusername(value) {
    this.username = value
  }
  userpassword(value) {
    this.password = value
  }
}
