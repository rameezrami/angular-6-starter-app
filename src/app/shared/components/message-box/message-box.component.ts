import { Component } from "@angular/core";
import { AppService } from './../../../app.service';

@Component({
  selector: "message-box",
  templateUrl: "./message-box.component.html"
})
export class MessageBoxComponent {
  msgStatus:any = {}

  constructor(private appService: AppService){
    this.appService.getMsgBoxData().subscribe(data=>{
      if(data){
        this.msgStatus = data
      }else{
        this.msgStatus = {}
      }
    })
  }
  clearMessage(){
    this.appService.setMsgBoxData({})
  }
}
