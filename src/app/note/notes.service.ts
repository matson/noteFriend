import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Note} from './notes';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  apiURL = 'http://localhost:3000/notes'
  constructor(private http: HttpClient) { }

  //get all 
  getAll(){
    return this.http.get<Note[]>(this.apiURL);
  }

  //create a note
  create(data: Note){
    return this.http.post(this.apiURL,data);
  }
  //edit a note
  edit(id:number){
    return this.http.get<Note>(`http://localhost:3000/notes/${id}`);
  }

  //Update
  update(data: Note){
    return this.http.put<Note>(`http://localhost:3000/notes/${data.id}`, data);
  }

  delete(id:number){
    return this.http.delete<Note>(`http://localhost:3000/notes/${id}`);
  }


}
