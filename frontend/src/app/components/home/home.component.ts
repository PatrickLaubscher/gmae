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

  partners:Partner[]= [];
  partnersService = inject(PartnersService);
  searchTerm='';
  results!:Partner[]

  ngOnInit(): void {
    this.getPartners();
      
  }

  getPartners() {
    this.partnersService.getAll().subscribe({
      next: (partners) => {
        this.partners = partners;
      },
      error: (error) => {
        console.error('ERROR', error);
      }
    });
  }

  // search(){
  //   this.partnersService.getFilteredPartners(this.searchTerm).subscribe(result=>{
  //     this.partners = result ;
  //   })
  // }
}