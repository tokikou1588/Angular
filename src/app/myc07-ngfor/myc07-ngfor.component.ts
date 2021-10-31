import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-myc07-ngfor',
  templateUrl: './myc07-ngfor.component.html',
  styleUrls: ['./myc07-ngfor.component.css']
})
export class Myc07NgforComponent
implements OnInit {
  empList = ['凉凉1','凉凉2','凉凉3','凉凉4','凉凉5','凉凉6']

  constructor() { }

  ngOnInit(): void {
  }

}
