import { Component} from '@angular/core';

@Component({
  selector: 'app-myc05',
  templateUrl: './myc05.component.html',
  styleUrls: ['./myc05.component.css']
})
export class Myc05Component{
  //MVVM: Model --> 模型数据绑定-->
  uname = 'xiao hua'
  age = 20
  printUname(){
    console.log(this.age)
  }
}
