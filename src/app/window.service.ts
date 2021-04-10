import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WindowService {

     get WindowRef(){
       return window;
 }
  constructor() {}

}