import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { PartnersService } from '../../services/partners.service';
import { Partner } from '../../services/entities';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone:true,
  imports: [CommonModule,FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{

  partners:Partner[]= [];
  apiResponse:any;
  partnersService = inject(PartnersService);
  searchTerm:string = ''
 copyPartners: Partner[] = [];
  

  ngOnInit(): void {
    this.getPartners();
      
  }

  getPartners(){
    this.partnersService.getAll().subscribe(data=>{
      this.apiResponse = data;
      this.partners = this.apiResponse.member;
    })
  }

  searchPartners(){
    if(this.searchTerm){

      this.partnersService.getFilteredPartners({name: this.searchTerm.toLowerCase()}).subscribe((partners)=> {
        this.apiResponse = partners;
        this.partners = this.apiResponse.member;
        this.copyPartners = [...this.apiResponse.member];
          });
        }

    if(!this.searchTerm){
        this.searchTerm = ''
          this.partners = [...this.copyPartners]
        }
    }

    
    



}