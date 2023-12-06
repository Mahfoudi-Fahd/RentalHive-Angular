import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, inject } from '@angular/core';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [CommonModule,HttpClientModule],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss'
})
export class TableComponent {
httpClient = inject(HttpClient);
response: any[] = [];

ngOnInit(): void{
  this.fetchData();
}

fetchData(){
  this.httpClient.get('http://localhost:8081/api/v1/equipments')
  .subscribe((response : any) =>{
    console.log(response.data);
    this.response = response.data;
  }
  )
}

getImagePath(id: number): string {
  return `assets/images/image${id}.png`;
}
}
