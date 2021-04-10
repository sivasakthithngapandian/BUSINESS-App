import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.page.html',
  styleUrls: ['./services.page.scss'],
})
export class ServicesPage implements OnInit {
  public form = [
    { val: 'HAIRCUT', isChecked: true },
    { val: 'PEDICURE', isChecked: false },
    { val: 'COLORING', isChecked: false },
    { val: 'MANICURE', isChecked: false },
    { val: 'ACRYLIC NAILS', isChecked: false },
    { val: 'BRIDAL MAKEUP', isChecked: false },
    
  ];

  constructor() { }

  ngOnInit() {
  }

}
