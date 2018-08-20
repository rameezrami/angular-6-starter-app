import { Injectable, Output, EventEmitter } from "@angular/core";
import { Observable } from "rxjs";
import { Subject } from "rxjs";

@Injectable()
export class AppService {
  private loaderVisibility = new Subject<any>();

  setLoaderVisibility(status: boolean) {
    this.loaderVisibility.next(status);
  }
  isLoaderVisible(): Observable<any> {
    return this.loaderVisibility.asObservable();
  }

  private msgBoxData = new Subject<any>();
  setMsgBoxData(data: any) {
    this.msgBoxData.next(data);
  }
  getMsgBoxData(): Observable<any> {
    return this.msgBoxData.asObservable();
  }
}
