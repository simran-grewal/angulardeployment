import {Component, Input, Output, EventEmitter} from "@angular/core";
import {Message} from "./message.model";
@Component({
    selector: 'app-message',
    templateUrl: './message.component.html',
    styles: ['.author { display: inline-block; font-style:italic;font-size:12px;width:80% }   .config{display: inline-block; font-align:right;font-size:12px;width:19%}']
})
export class  MessageComponent{
// @Input is to input from outside

//@Input('InputMessage') message: Message

    @Input() message: Message
    @Output() editClicked = new EventEmitter<string>();  //EventEmitter is basically generic
    color = 'red';
    onEdit()
    {
        this.editClicked.emit('A new value');
    }
}