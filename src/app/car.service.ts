import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  constructor() { }
  purpose:any
cars:any=[
  { 
    carId:1,
    carBrand:'Aston Martin',
    carPrice:'3.29 Cr',
    carImages:['ProjectCars/Aston Martin/1-main.jpg','ProjectCars/Aston Martin/2.jpg','ProjectCars/Aston Martin/5.jpg','ProjectCars/Aston Martin/6-interior.jpg'],
    carFeatures:[
        {
          transmissonType:'Automatic'
        },
        {
          engineType:'Vantage V8'
        },
        {
          airBags:4
        },
        {
          fuelTankCapacity:73
        }
    ],
    carPurpose:'Buy'
  },





  {
    carId:2,
    carBrand:'Audi-Q7',
    carPrice:'88.75 lakhs',
    carImages:['ProjectCars/Audi-Q7/1.jpg','ProjectCars/Audi-Q7/2.jpg','ProjectCars/Audi-Q7/3.jpg','ProjectCars/Audi-Q7/5-interior.jpeg'],
    carFeatures:[
        {
          transmissonType:'Automatic'
        },
        {
          engineType:'V engine'
        },
        {
          airBags:8
        },
        {
          fuelTankCapacity:85
        }
    ],
    carPurpose:'Buy'
  },




 {
  carId:3,
    carBrand:'BMW-5-series',
    carPrice:'72.90 lakhs',
    carImages:['ProjectCars/BMW-5-series/1.jpg','ProjectCars/BMW-5-series/2.jpg','ProjectCars/BMW-5-series/3.jpg','ProjectCars/BMW-5-series/4.jpeg'],
    carFeatures:[
        {
          transmissonType:'Automatic'
        },
        {
          engineType:'2.0L - 4 Cylinder'
        },
        {
          airBags:7
        },
        {
          fuelTankCapacity:70
        }
    ],
    carPurpose:'Rent'
  },
  



 {
  carId:4,
  carBrand:'Jaguar XF',
  carPrice:'49.8 lakhs',
  carImages:['ProjectCars/Jaguar XF/4.jpg','ProjectCars/Jaguar XF/2.jpg','ProjectCars/Jaguar XF/3.jpg','ProjectCars/Jaguar XF/5-interior.jpg'],
  carFeatures:[
      {
        transmissonType:'Automatic'
      },
      {
        engineType:'2.0L - 4 Cylinder diesel'
      },
      {
        airBags:6
      },
      {
        fuelTankCapacity:68
      }
  ],
  carPurpose:'Rent'
},




{
  carId:5,
  carBrand:'Kia EV6',
  carPrice:'60.97 lakhs',
  carImages:['ProjectCars/Kia EV6/3.jpeg','ProjectCars/Kia EV6/4.jpg','ProjectCars/Kia EV6/5.jpeg','ProjectCars/Kia EV6/6-interior.jpg'],
  carFeatures:[
      {
        transmissonType:'Automatic'
      },
      {
        engineType:'No engine'
      },
      {
        airBags:8
      },
      {
        fuelTankCapacity:'No fule tank'
      }
  ],
  carPurpose:'Rent'
},




{
  carId:6,
  carBrand:'Lexus ES 300h',
  carPrice:'64 lakhs',
  carImages:['ProjectCars/Lexus ES 300h/4.jpg','ProjectCars/Lexus ES 300h/3.jpg','ProjectCars/Lexus ES 300h/5.jpg','ProjectCars/Lexus ES 300h/6-interior.jpg'],
  carFeatures:[
      {
        transmissonType:'Automatic'
      },
      {
        engineType:'2.5L A25A-FXS I4'
      },
      {
        airBags:10
      },
      {
        fuelTankCapacity:'65'
      }
  ],
  carPurpose:'Buy'
},



{
  carId:7,
  carBrand:'Mercedes-Benz C-Class',
  carPrice:'66.25 lakhs',
  carImages:['ProjectCars/Mercedes-Benz C-Class/5.avif','ProjectCars/Mercedes-Benz C-Class/1.jpg','ProjectCars/Mercedes-Benz C-Class/2.jpg','ProjectCars/Mercedes-Benz C-Class/3-interior.jpg'],
  carFeatures:[
      {
        transmissonType:'Automatic'
      },
      {
        engineType:'1.5L 4-Cylinder'
      },
      {
        airBags:7
      },
      {
        fuelTankCapacity:'66'
      }
  ],
  carPurpose:'Rent'
},
 


{
  carId:8,
  carBrand:'Porsche Macan',
  carPrice:'97.05 lakhs',
  carImages:['ProjectCars/porsche macan/4.jpg','ProjectCars/porsche macan/1.jpg','ProjectCars/porsche macan/2-main.jpg','ProjectCars/porsche macan/4.jpg'],
  carFeatures:[
      {
        transmissonType:'Automatic'
      },
      {
        engineType:'1.5L 4-Cylinder'
      },
      {
        airBags:8
      },
      {
        fuelTankCapacity:'65'
      }
  ],
  carPurpose:'Rent'
},



{
  carId:9,
  carBrand:'Skoda Sedan',
  carPrice:'14.23 lakhs',
  carImages:['ProjectCars/Skoda Sedan/3.jpg','ProjectCars/Skoda Sedan/2.jpg','ProjectCars/Skoda Sedan/5.jpg','ProjectCars/Skoda Sedan/6-interiot.jpg'],
  carFeatures:[
      {
        transmissonType:'Manual'
      },
      {
        engineType:'2.0 TSI Engine'
      },
      {
        airBags:6
      },
      {
        fuelTankCapacity:'50'
      }
  ],
  carPurpose:'Buy'
},
 


{
  carId:10,
  carBrand:'Volvo XC60',
  carPrice:'80.02 lakhs',
  carImages:['ProjectCars/volvo xc60/3-main.jpg','ProjectCars/volvo xc60/1.jpg','ProjectCars/volvo xc60/5.jpg','ProjectCars/volvo xc60/6-interiot.jpeg'],
  carFeatures:[
      {
        transmissonType:'Manual'
      },
      {
        engineType:'2.0L 4-Cylinder'
      },
      {
        airBags:6
      },
      {
        fuelTankCapacity :'71'
      }
  ],
  carPurpose:'Buy'
}, 

]

getCars(){
 return this.cars
}
getCaFeatures(){
    return this.cars.carFeatures
 }
 getCarsByPurpose(rentPurpose:string) {
  return this.cars.filter((resCar:any) => resCar.carPurpose === rentPurpose)
}


getById(id:number):any{
  return this.cars.find((resCar:any) => resCar.carId === id)
}

 






}
