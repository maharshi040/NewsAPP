import { Component,Input,Output,EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-passage',
  templateUrl: './passage.component.html',
  styleUrls: ['./passage.component.css']
})
export class PassageComponent implements OnInit {
  message="from Passage Component";
@Input() receivedMessage: string;
@Output() messageToEmit = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
    console.log(this.receivedMessage);
    
  }
sendMessageToNews(message)
    {
      this.messageToEmit.emit(message)
    }
}
