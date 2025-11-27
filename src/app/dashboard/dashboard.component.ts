import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { KpiCardComponent } from './components/kpi-card/kpi-card.component';
import { LineChartComponent } from './components/line-chart/line-chart.component';
import { DonutChartComponent } from './components/donut-chart/donut-chart.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, FormsModule, KpiCardComponent, LineChartComponent, DonutChartComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  selectedOrganization = '';
  selectedDateRange = '';

  organizations = [
    { id: '1', name: 'Acme Corporation' },
    { id: '2', name: 'Tech Solutions Inc' },
    { id: '3', name: 'Global Industries' }
  ];

  dateRanges = [
    { id: '6months', label: 'Last 6 months' },
    { id: '3months', label: 'Last 3 months' },
    { id: '1year', label: 'Last year' }
  ];

  kpis = [
    { id: 1, label: 'KPI 1', value: '0' },
    { id: 2, label: 'KPI 2', value: '0' },
    { id: 3, label: 'KPI 3', value: '0' },
    { id: 4, label: 'KPI 4', value: '0' }
  ];
}

