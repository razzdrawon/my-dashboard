import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KpiCardComponent } from './components/kpi-card/kpi-card.component';
import { LineChartComponent } from './components/line-chart/line-chart.component';
import { DonutChartComponent } from './components/donut-chart/donut-chart.component';
import { DashboardDataService } from './services/dashboard-data.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, KpiCardComponent, LineChartComponent, DonutChartComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  selectedOrganization = '';
  selectedDateRange = '';
  organizations: any[] = [];
  dateRanges: any[] = [];
  kpis: any[] = [];

  constructor(private dataService: DashboardDataService) {
    this.organizations = this.dataService.getOrganizations();
    this.dateRanges = this.dataService.getDateRanges();
    this.loadKpis();
  }

  onOrganizationChange(): void {
    this.loadKpis();
  }

  onDateRangeChange(): void {
    this.loadKpis();
  }

  private loadKpis(): void {
    this.kpis = this.dataService.getKpis(
      this.selectedOrganization || undefined,
      this.selectedDateRange || undefined
    );
  }
}

