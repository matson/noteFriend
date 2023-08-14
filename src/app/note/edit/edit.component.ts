import { Component, OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Note } from '../notes';
import { NoteService } from '../notes.service';


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  constructor(
    private service: NoteService, 
    private route: Router, 
    private router: ActivatedRoute) {}

    formData : Note = {
      id: 0,
      title: '',
      body: '',
      date: '',
      favorite: false
    }



    ngOnInit(): void {
      //getting the id
      this.router.paramMap.subscribe((s) => {
        let id = Number(s.get('id'))
        this.getById(id)
      })
    }

    
    getById(id:number){
      this.service.edit(id).subscribe((data) => {
        this.formData = data;
      })

    }

    update(){
      this.service.update(this.formData).subscribe({
        next:(data)=> {
          this.route.navigate(["/note/home"]);
        }, 
        error: (er) => {
          console.log(er);
        }
      })
    }

}
