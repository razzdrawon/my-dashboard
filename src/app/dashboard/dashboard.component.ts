import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { KpiCardComponent } from './components/kpi-card/kpi-card.component';
import { LineChartComponent } from './components/line-chart/line-chart.component';
import { DonutChartComponent } from './components/donut-chart/donut-chart.component';
import { DashboardDataService } from './services/dashboard-data.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    MatSelectModule,
    MatFormFieldModule,
    KpiCardComponent,
    LineChartComponent,
    DonutChartComponent
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  selectedOrganization = '';
  selectedDateRange = '6months'; // Default to 6 months
  organizations: any[] = [];
  dateRanges: any[] = [];
  kpis: any[] = [];

  constructor(private dataService: DashboardDataService) {
    this.organizations = this.dataService.getOrganizations();
    this.dateRanges = this.dataService.getDateRanges();
    this.loadKpis();
  }

  onOrganizationChange(event: any): void {
    this.selectedOrganization = event.value;
    this.loadKpis();
  }

  onDateRangeChange(event: any): void {
    this.selectedDateRange = event.value;
    this.loadKpis();
  }

  private loadKpis(): void {
    this.kpis = this.dataService.getKpis(
      this.selectedOrganization || undefined,
      this.selectedDateRange || undefined
    );
  }
}

