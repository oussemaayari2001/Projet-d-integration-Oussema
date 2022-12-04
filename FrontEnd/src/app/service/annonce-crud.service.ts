import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {environment} from '../../environments/environment'
const URL="http://localhost:3000/annonce"
@Injectable({
  providedIn: 'root'
})

export class DataService {
  

  constructor(private http:HttpClient) { }


  registerAnnonce(data){
    return this.http.post(URL+'/save', data);
  }

  login(data){
    return this.http.post(URL+'/api/login/', data);
  }

  insertData(data){
    return this.http.post(environment.apiUrl+'/api/addCondidat/', data);
  }

  getAnnonces(){
    return this.http.get(URL+'s');
  }

  deleteAnnonce(id){
    return this.http.delete(URL+'/'+id);
  }
}
