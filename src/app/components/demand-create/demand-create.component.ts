import { Component } from '@angular/core';
import { CDemand, Demand } from '../../models/demand';
import { DemandCreateService } from '../../services/demand-create.service';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CEquipmentDemand } from '../../models/equipmentDemand';

@Component({
  selector: 'app-demand',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './demand-create.component.html',
  styleUrl: './demand-create.component.scss'
})
export class DemandCreateComponent {
  demands: Demand[] = [];
  toSave: Demand = new CDemand();

  equipments: CEquipmentDemand[] = []

  constructor(private demandCreateService: DemandCreateService){}

  ngOnInit(): void {
    this.demandCreateService.getDemands().subscribe((data: Demand[]) => {
      this.demands = data;
    })
  }

  onSubmit(){
    this.demandCreateService.addDemand(this.toSave).subscribe({
      next: data => {
        this.onSuccessSave(data);
      },
      error: (err) =>{console.log(err)}
    })
  }

  onSuccessSave(demand?: Demand){
    if(demand){
      this.demands.push(demand);
    }
  }

  addEquipmentDemand(equipment: CEquipmentDemand){
    this.equipments.push(equipment)
  }
  
  removeEquipmentDemand(equipment: CEquipmentDemand){
    this.equipments = this.equipments.filter(
      (e)=> e.equipmentId!=equipment.equipmentId
    )
  }
}