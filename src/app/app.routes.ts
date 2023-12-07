import { Routes } from '@angular/router';
import { TableComponent } from './components/table/table.component';
import { HomeComponent } from './components/home/home.component';
import { DemandCreateComponent } from './components/demand-create/demand-create.component';

export const routes: Routes = [
    {path: '', component:HomeComponent},
    {path: 'equipments', component:TableComponent},
    {path: 'demands', component: DemandCreateComponent}
];
