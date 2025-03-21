import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Hello from BridgeLabz..';
  imgUrl="../assets/BL_Logo.jpg";
  url="https://www.bridgelabz.com";

onClick($event: Event) {
  console.log("open breidgelabz site from logo",$event);
  window.open(this.url,"_blank");
}
}
