import { Component, OnInit,Input,Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input() receivedParentMessage: string;
  @Output() messageToEmit = new EventEmitter<string>();
  
  constructor() { }

  ngOnInit() {
  }

  onKey(event:any) { // without type info
    this.messageToEmit.emit(event.target.value);
    console.log(event.target.value); 
  }

}
