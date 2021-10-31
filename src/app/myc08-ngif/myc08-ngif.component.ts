import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-myc08-ngif',
  templateUrl: './myc08-ngif.component.html',
  styleUrls: ['./myc08-ngif.component.css']
})
export class Myc08NgifComponent implements OnInit {
  // Paying 付款
  isPayingUser =true; // 当前用户是否为 付费用户
  age = 30;

  hasMore = true; // 是否还有更多数据
  loadMore(){
    // 假装此处加载了很多数据
  this.hasMore = false; // 没有数据了
  }

  constructor() { }

  ngOnInit(): void {
  }

}
