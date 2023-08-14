import { Component, OnInit } from '@angular/core';
import { NoteService } from '../note/notes.service';
import { Note } from '../note/notes';


@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {

  constructor(private service: NoteService){}

  //favorite notes:
  favoriteNotes: Note[] = [];

  //three most recent:
  recentNotes: Note[] = [];


  ngOnInit(){
    this.service.getAll().subscribe((data)=>{
        this.favoriteNotes = this.getFavorties(data)
        this.recentNotes = this.getRecent(data)
    })
  }
  
  //logic to filter out favorites
  getFavorties(data){
    return data.filter(_ => _.favorite == true);
  }

  //logic to retrieve most recent 
  getRecent(data){
    let count = 0;
    let recent: Note[] =[];
    //sort data
    let sorted = data.sort((a, b) => b.date - a.date)
    for(var i = sorted.length - 1; i >= 0; i--){
      while(count<3){
        recent.push(sorted[i])
        count++;
        i = i-1
      }
    }

    return recent
    

  }

}
