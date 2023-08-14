import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  constructor(private http: HttpClient) { }
    
  //for json server:
    apiurl='http://localhost:3000/users';

    getUser(){
      return this.http.get<any>(this.apiurl);
      //this.http.get<any>("http://localhost:3000/user"
    }
  
    //register
    registerProceed(inputdata: any){
      return this.http.post(this.apiurl, inputdata);
    }
  
    // updateUser(code:any, inputdata: any){
    //   return this.http.put(this.apiurl+'/'+code, inputdata);
  
    // }
    
    isLoggedIn(){
      return sessionStorage.getItem('username')!=null;
    }
  


}
