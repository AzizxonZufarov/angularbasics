import { Component } from '@angular/core';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent {
  name:string; 
  speed:number;
  model:string; 
  colors:Colors; 
  options:string[];
  isEdit:boolean = false;

  constructor() { }
    ngOnInit() {
    this.name = 'Audi'; 
    this.speed = 235; 
    this.model = 'RS8';
    this.colors= {
      car: 'White',
      salon: 'Black',
      wheels: 'Silver'
    }
    this.options = ["АБС", "Автопилот", "Тормоз" ];

  }

  addOpt(option:string) {
    this.options.unshift(option);
    return false;
    }
    
    deleteOpt (option:string) {
      for(let i = 0; i < this.options.length; i++) { 
        if(this.options[i] == option) {
          this.options.splice(i, 1);
          break;
        }
      }
    }
      
showEdit() {
  this.isEdit = !this.isEdit;
}      

carSelect(carName:string) {
  if(carName == 'bmw') {
    this.name = 'bmw'; 
    this.speed = 150; 
    this.model = 'RS7';
    this.colors= {
      car: 'White1',
      salon: 'Black1',
      wheels: 'Silver1'
    }
    this.options = ["АБС1", "Автопилот1", "Тормоз1" ];
  }else if(carName == 'audi') {
    this.name = 'Audi'; 
    this.speed = 200; 
    this.model = 'RS8';
    this.colors= {
      car: 'White2',
      salon: 'Black2',
      wheels: 'Silver2'
    }
    this.options = ["АБС2", "Автопилот2", "Тормоз2" ];
  }else {
    this.name = 'Mercedes'; 
    this.speed = 250; 
    this.model = 'RS9';
    this.colors= {
      car: 'White3',
      salon: 'Black3',
      wheels: 'Silver3'
    }
    this.options = ["АБС3", "Автопилот3", "Тормоз3" ];
  }
}

}
interface Colors {
  car:string,
  salon:string,
  wheels: string
}