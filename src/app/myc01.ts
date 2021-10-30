import { Component } from "@angular/core";

// 装饰器（Decorator）--> 用于指定class的用途
 @Component({
     selector:'myc01',//选择器 属性的话-->[mytitle] , 元素的话-->mytitle, class的话--> .mytitle
     template:'<h2>我的组件C01</h2><hr>' // 模板
 }) //-->本质是函数，所有需要添加 括号
// 组件的本质是一个函数
export class MyC01Component{

}

