import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-myc06-buy-count',
  templateUrl: './myc06.component.html',
  styleUrls: ['./myc06.component.css']
})
export class Myc06Component{
  // class内部的成员属性    count：{{是对象直接量才用 ： }}
  count = 3;
  // 第一种写法
  // imgUrl ='../assets/1.jpg';
  // 第二种
  imgUrl ='1.jpg';

  // class内部的成员方法 不写function
  zengjia(){
    this.count++;
  }
  jianshao(){
    this.count--;
  }


}
