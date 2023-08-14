import { Component, OnInit } from '@angular/core';
import { Note } from '../note/notes';
import { NoteService } from '../note/notes.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit{
  
  filteredNote: Note[] = [];
  dateField: any;
  completeData: any[] =[];
 
  constructor(private service: NoteService){}

  ngOnInit(){
    this.service.getAll().subscribe((data) => {
      this.completeData=data;
    })
  }

  filterDate(changedDate: any){
    this.filteredNote = this.completeData.filter(_ => _.date == changedDate);
  }

}
