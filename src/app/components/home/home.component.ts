import { Component, OnInit } from '@angular/core';
import { NamesService } from '../../services/names.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  constructor(private nameservice: NamesService, private http: HttpClient ) { }

  ngOnInit() {
  }

  public male: boolean = false;
  public female: boolean = false;
  public random: boolean = false;
  public gender = '';
  


   public Getgender(value){

    if(value === 'male'){
      this.male= true;
      this.female = false;
      this.random = false;
   
    }else if(value==='female'){
      this.male= false;
      this.female = true;
      this.random = false;
    }else{
      this.male= false;
      this.female = false;
      this.random = true;   
     }
     this.gender=value

   }

  public Mostrardatos(){
    console.log('c');
    
    this.nameservice.searchgenerate(this.gender).subscribe(
      (data)=>{

        console.log(data)

      }
    )
    
  }
  
}



