import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'weather-details',
  templateUrl: './weatherDetails.component.html',
  styleUrls: ['./weatherDetails.component.scss']
})

export class WeatherDetails implements OnInit {
  @Input() weatherData: data[];
  @Input() customers: String[]=[];
  city:any='';
  isCityFound=false;
  cityDetails:data;
  isNoResult=false;
  name = '';


  nam='';
  index=0;
  addCustomer() {
  if(this.nam!=''){
    this.customers.push(this.nam);}
  }
  
  ngOnInit() {

  }
  searchCity(){
    this.isCityFound=false;
    let index=this.weatherData.map(item=>item.name.toLowerCase()).indexOf(this.city.toLowerCase());
    if(index!=-1){
      this.isCityFound=true;
      this.cityDetails=this.weatherData[index];
      this.isNoResult=false;
    } else{
      this.isCityFound=false;
      this.isNoResult=true;
    }
  }
}

interface data {
  name: string;
  temperature: string;
  wind: string;
  humidity: string;
}