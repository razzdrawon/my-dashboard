import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { KpiCardComponent } from './components/kpi-card/kpi-card.component';
import { LineChartComponent } from './components/line-chart/line-chart.component';
import { DonutChartComponent } from './components/donut-chart/donut-chart.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    DashboardComponent,
    KpiCardComponent,
    LineChartComponent,
    DonutChartComponent
  ],
  exports: [DashboardComponent]
})
export class DashboardModule { }

