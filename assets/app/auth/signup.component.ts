import {Component, OnInit} from "@angular/core";
import {FormGroup, FormControl, Validators} from "@angular/forms";
@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html'
})
export class SignupComponent implements OnInit{
    myForm: FormGroup;

    ngOnInit(){
        this.myForm = new FormGroup({
           firstName: new FormControl(null,Validators.required),//initial value,
            lastName: new FormControl(null,Validators.required),
            email: new FormControl(null,[Validators.required]),
            password: new FormControl(null,Validators.required)
        });

    }

}