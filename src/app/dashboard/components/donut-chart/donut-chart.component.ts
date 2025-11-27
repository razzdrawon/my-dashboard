import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseChartDirective } from 'ng2-charts';
import { ChartOptions } from 'chart.js';
import { DashboardDataService } from '../../services/dashboard-data.service';

export interface DonutChartConfig {
  title: string;
  chartType: 'value' | 'risk';
}

@Component({
  selector: 'app-donut-chart',
  standalone: true,
  imports: [CommonModule, BaseChartDirective],
  templateUrl: './donut-chart.component.html',
  styleUrl: './donut-chart.component.scss'
})
export class DonutChartComponent {
  @Input() config!: DonutChartConfig;

  get donutChartData() {
    return this.dataService.getDonutChartData(this.config.chartType);
  }

  donutChartOptions: ChartOptions<'doughnut'> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        position: 'bottom',
        labels: {
          color: '#b0b0b0',
          padding: 15,
          font: {
            size: 12
          }
        }
      }
    }
  };

  constructor(private dataService: DashboardDataService) {}
}

