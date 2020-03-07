import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-userinput',
  templateUrl: './userinput.component.html',
  styleUrls: ['./userinput.component.scss']
})
export class UserinputComponent implements OnInit {

  
  constructor() { }

  teach;
  sport;
  manage;
  type;
  user:Array<Teacher | Management | Sports | User>
  name;
  dob;
  contact;
  gender;
  qualification;subject;experience;
  department;head;
  khel;
  age;
  substitute;

  takeValue:User = {
    name: "",
    contact: "",
    dob: "",
    gender: ""
  }
  ngOnInit(): void {
  }


  checkClick() {
    if(this.type=="Teaching"){
      let show:Teacher = new Teacher();
      show.name = this.name;
      show.contact = this.contact;
      show.dob = this.dob;
      show.gender = this.gender;
      show.experience=this.experience;
      show.qualification=this.qualification;
      show.subject=this.subject
      console.log(show)
    }
    
    if(this.type=="Maneging"){
      let show:Management = new Management();
      show.name = this.name;
      show.contact = this.contact;
      show.dob = this.dob;
      show.gender = this.gender;
      show.department=this.department;
      show.head=this.head;
      console.log(show)
    }
    if(this.type=="Sport"){
      let show:Sports = new Sports();
      show.name = this.name;
      show.contact = this.contact;
      show.dob = this.dob;
      show.gender = this.gender;
      show.khel=this.khel;
      show.age=this.age;
      show.substitute=this.substitute
      console.log(show)
    }
    
  }
}

class User{
  constructor(){
  }
    name: "";
    contact: "";
    dob: "";
    gender: ""

}

class Teacher extends User{
  constructor(){
    super();
  }
  qualification:"";
  experience:"";
  subject:"";

}

class Management extends User{
  constructor(){
    super();
  }
  department:"";
  head:""
}

class Sports extends User{
  constructor(){
    super();
  }
  khel:"";
  age:"";
  substitute:""
}
