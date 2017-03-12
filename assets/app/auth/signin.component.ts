import {Component} from "@angular/core";
import {FormGroup, FormControl, Validators} from "@angular/forms";
@Component({
    selector: 'app-signin',
    templateUrl: './signin.component.html'
})
export class SigninComponent{

    myForm: FormGroup; // this is creation of form programmaticaly--- type is FormGroup

    onSubmit() {
        console.log(this.myForm);
        this.myForm.reset();
    }
    ngOnInit(){
        this.myForm = new FormGroup({

            email: new FormControl(null,[Validators.required]),
            password: new FormControl(null,Validators.required)
        });

    }

}