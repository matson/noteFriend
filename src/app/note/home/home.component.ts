import { Component } from '@angular/core';
import {Note} from '../notes';
import { NoteService } from '../notes.service';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  allNotes: Note[] = [];
  //make a Note Array 
  
  constructor(private service: NoteService){}

  ngOnInit(){
    this.service.getAll().subscribe((data)=>{
      this.allNotes = data;
    })

    
  }
  //need the id to delete specific item from the db
  deleteItem(id:number){
    this.service.delete(id).subscribe({
      next: (data) => {
        this.allNotes = this.allNotes.filter(_ => _.id != id);
      },
    })
  }

}
