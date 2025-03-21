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
  userName :string="";
  nameError:string="";

onClick($event: Event) {
  console.log("open breidgelabz site from logo",$event);
  window.open(this.url,"_blank");
}
onInput($event:Event){
  console.log("Change Event Occured!",$event);
  const nameRegex=RegExp('^[A-Z]{1}[a-zA-Z\\s]{2,}$');
  if(nameRegex.test(this.userName)){
    this.nameError ="";
    return ;
  }
  this.nameError ="Name is Incorrect";
}

}
