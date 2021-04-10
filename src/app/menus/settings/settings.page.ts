import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {SettingsPageModule} from '../settings/settings.module';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {
  navigate: any;

  constructor(private router:Router) { }

  ngOnInit() {
  
}
}