import {Component, OnInit} from "@angular/core";
import {Message} from "./message.model";
import {MessageService} from  "./message.service";
import {NgForm} from "@angular/forms";
@Component({
    selector: 'app-message-input',
    templateUrl: './message-input.component.html'
})
export class MessageInputComponent implements OnInit{
    message: Message;
    constructor(private messageService:MessageService){}

    onSubmit(form: NgForm)
    {
        const message = new Message(form.value.content, 'Grewal');
       this.messageService.addMessage(message)
           .subscribe(
           data => console.log(data),
           error => console.log(error)
       );
        form.resetForm();
    }

    onClear(form: NgForm){

        form.resetForm();
    }
    ngOnInit(){
        this.messageService.messageIsEdit.subscribe(

            (message: Message) => this.message = message
        )
    }
}
