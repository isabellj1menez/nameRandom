import { Component, OnInit, HostListener } from '@angular/core';
import { NamesService } from '../../services/names.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  constructor(private nameservice: NamesService) { }

  ngOnInit() {
    //ngfor solo soporta arrays, es para convertir un objeto a un array la siguiente linea
    // this.variable = Object.keys(this.nameservice.getregions()).map(i=> this.nameservice.getregions()[i])
    // console.log(this.Regions);
    this.Regions = this.nameservice.getregions()
    
  }


  @HostListener("document:keypress",["$event"])
  KeyBoarEvent(event){
    if(event.code!="Space")return
    this.Mostrardatos();
  }

  public inicio : boolean = true;
  
  public Regions:object = {};
  public region: string ='';
  public male: boolean = false;
  public female: boolean = false;
  public random: boolean = false;
  public gender = '';
  public person: object = {}
  
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

    this.nameservice.searchgenerate(this.gender, this.region).subscribe(
      (data)=>{

        this.person = data
        setTimeout(()=>{

          this.inicio = false
        },500)
        

      },err =>{
        Swal.fire({
          icon: 'error',
          title: 'esa region no esta disponible por el momento',
          showConfirmButton: false,
          timer: 1500
        })
      }      
    ) 
  }

  public async GetRegion(){
    const { value: region } = await Swal.fire({
      title: 'Select field validation',
      input: 'select',
      inputOptions: this.Regions,
      inputPlaceholder: 'Select a region',
      showCancelButton: true,
      inputValidator: (value) => {
        return new Promise((resolve) => {
          if (value !== null) {
            resolve()
          } else {
            resolve('You need to select oranges :)')
          }
        })
      }
    })
    
    if (region) {
      this.region = region
      console.log(this.region);
      
    }
  }


  
  
  
}



