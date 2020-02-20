import { Component, OnInit } from '@angular/core';
import {ServiceService} from '../Service/service.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
articles;
title;
messageToSend: string = 'Message from News ';
MessageFromPassage:string;
clicked:boolean=false;;

  constructor(private apiservice:ServiceService,private router: Router) { }

  ngOnInit() {
    this.apiservice.getNews().subscribe((data)=>{
      console.log(data);
      this.articles = data['articles'];
    });

    
  }
  getMessage(message: string) {
    this.MessageFromPassage = message;
  }
    buttonClick(title)
    {
      this.clicked=!this.clicked;
      this.title=title


    }    

}
