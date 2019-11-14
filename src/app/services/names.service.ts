import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NamesService {

  constructor(private http: HttpClient) { }



  public searchgenerate(gender) {
    let URL: string = 'https://uinames.com/api/?ext&amount=1';

    switch (gender) {
      case 'male':
        URL += `&gender=male`;
        break;
      case 'female':
        URL += `&gender=female`;
        break;
    }




    return this.http.get(URL)






    // console.log(typeof gender);


    // if(gender === null){

    //   return this.http.get(this.URL)

    // }else if(gender=='male'){
    //   return this.http.get(urlparahombres)
    // }
    // }else{

    //   let URLSend: string = `${this.URL}?gender=${gender}`;
    //   console.log(URLSend);

    // }









  }


}
