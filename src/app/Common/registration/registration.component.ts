import { Router} from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, Validator } from '@angular/forms';


type NewType = FormGroup;

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
})
export class RegistrationComponent implements OnInit {
myform: NewType;
submitted = false;


  constructor(
    public router: Router,
  ) {
    this.myform = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required, Validators.minLength(6)]),
    });
   }

  ngOnInit() : void {

    }

  submit() {
    if ( this.myform.invalid){
      return;
    }

    this.submitted = true;

    const user = {
      email: this.myform.value.email,
      password: this.myform.value.password,
    }

    

  }
  gonext = () => {
    this.router.navigate(['/admin', 'dashboard']);
  }
}
