import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { PartnersService } from '../../services/partners.service';
import { Partner } from '../../services/entities';

@Component({
  selector: 'app-home',
  standalone:true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{

  partners:any[]= [];
  apiResponse:any;
  partnersService = inject(PartnersService);
  

  ngOnInit(): void {
    this.getPartners();
      
  }

  getPartners(){
    this.partnersService.getAll().subscribe(data=>{
      console.log(data);
      this.apiResponse = data;
      this.partners = this.apiResponse.member;
    })
  }

  // search(){
  //   this.partnersService.getFilteredPartners().subscribe(result=>{
  //     this.partners = result ;
  //   })
  // }
}