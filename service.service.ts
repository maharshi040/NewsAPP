import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:HttpClient) { }

 public getNews(){

   let header= new HttpHeaders({'Content-Type':'application/json','responseType':'text'})
   let options={headers:header};
    return this.http.get("http://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=96de8b098ac64dec86d9ff930d938b54 ",options);
  }
 
}