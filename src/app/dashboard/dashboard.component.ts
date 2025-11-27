import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KpiCardComponent } from './components/kpi-card/kpi-card.component';
import { LineChartComponent } from './components/line-chart/line-chart.component';
import { DonutChartComponent } from './components/donut-chart/donut-chart.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, KpiCardComponent, LineChartComponent, DonutChartComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  kpis = [
    { id: 1, label: 'KPI 1', value: '0' },
    { id: 2, label: 'KPI 2', value: '0' },
    { id: 3, label: 'KPI 3', value: '0' },
    { id: 4, label: 'KPI 4', value: '0' }
  ];
}

