import { Component, OnInit } from '@angular/core';
import { Router, RouterEvent } from '@angular/router';

@Component({
  selector: 'app-menus',
  templateUrl: './menus.page.html',
  styleUrls: ['./menus.page.scss'],
})
export class MenusPage implements OnInit {
  pages=[
    {
      title:'appointment',
      url:'/home/appointment'
    },
    {
      title:'business',
      url:'/home/business'
    }
  ];
selectedPath='';
  constructor(private router: Router) {
    this.router.events.subscribe((event:RouterEvent) =>{
      this.selectedPath= event.url;
    });
   }

  ngOnInit() {
  }

}
