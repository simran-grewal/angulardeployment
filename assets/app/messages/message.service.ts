import {Message} from "./message.model";
import {Injectable, EventEmitter} from "@angular/core";
import {Http, Response, Headers} from "@angular/http";
import {Observable} from "rxjs";
import 'rxjs/Rx'; //  this is for map() function
@Injectable() // that we able to inject HTTP in this message classs
export class MessageService
{
   private messages: Message[] = [];
    messageIsEdit = new EventEmitter<Message>()

    // this is constucture allowto use HTTP
    constructor(private http : Http) {}

    addMessage(message: Message){
        this.messages.push(message)
        const body = JSON.stringify(message);
        const headers = new Headers({'Content-Type': 'application/json'});
        return this.http.post('http://localhost:3000/message', body, {headers: headers})
            .map((response:Response) => response.json())
            .catch((error: Response) => Observable.throw(error.json()));

        //console.log(this.messages);
    }

    getMessage()
    {
        return  this.http.get('http://localhost:3000/message')
            .map((response: Response) => {
                const messages = response.json().obj;
                let transformMessages: Message[] = [];
                for(let message of messages){
                    transformMessages.push(new Message(message.content, 'Dummy',message.id, null));
                }

                this.messages = transformMessages;
                return transformMessages;
            })
            .catch((error: Response) => Observable.throw(error.json()));
    }


    editMessage(message: Message){
        this.messageIsEdit.emit(message);
    }
    deleteMessage(message: Message)
    {
        this.messages.splice(this.messages.indexOf(message), 1);
    }

    // This is to sore my messages in fontend application
}