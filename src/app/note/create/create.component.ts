import { Component } from '@angular/core';
import { NoteService } from '../notes.service';
import { Router } from '@angular/router';
import { Note } from '../notes';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent {
  constructor(private service: NoteService, private router: Router){}

  //need to make this object
  formData : Note = {
    id: 0,
    title: '',
    body: '',
    date: '',
    favorite: false
  }
  rawDate;

  create(){
    //add current date to date property:

    this.rawDate = new Date().toDateString();
    this.formData.date = this.formatDate(this.rawDate); //format desired
    this.service.create(this.formData).subscribe({
      next:(data)=> {
        this.router.navigate(["/note/home"]);
      }, 
      error: (er) => {
        console.log(er);
      }
    })
  }
  
  //date helper function
  formatDate(date) {
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) 
        month = '0' + month;
    if (day.length < 2) 
        day = '0' + day;

    return [year, month, day].join('-');
  }
}

//Date will be stored as string, then a function 
//will take value convert to Date, then order by most recent. 

