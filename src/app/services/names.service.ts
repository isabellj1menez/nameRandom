import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NamesService {

  constructor(private http: HttpClient) { }

  private URL:string = 'https://uinames.com/api/';


  public searchgenerate(gender){

    console.log(gender);
    

    if(gender === null){
      return this.http.get(this.URL)
    }
    // }else{

    //   let URLSend: string = `${this.URL}?gender=${gender}`;
    //   console.log(URLSend);
      
    //   return this.http.get(URLSend)
    // }

  }


}
