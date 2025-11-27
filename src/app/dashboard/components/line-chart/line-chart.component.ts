import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseChartDirective } from 'ng2-charts';
import { ChartOptions } from 'chart.js';
import { DashboardDataService } from '../../services/dashboard-data.service';

@Component({
  selector: 'app-line-chart',
  standalone: true,
  imports: [CommonModule, BaseChartDirective],
  templateUrl: './line-chart.component.html',
  styleUrl: './line-chart.component.scss'
})
export class LineChartComponent implements OnChanges {
  @Input() dateRangeId?: string;

  lineChartData: any;

  lineChartOptions: ChartOptions<'line'> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        position: 'bottom'
      }
    },
    scales: {
      y: {
        beginAtZero: true
      }
    }
  };

  constructor(private dataService: DashboardDataService) {
    this.loadChartData();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['dateRangeId']) {
      this.loadChartData();
    }
  }

  private loadChartData(): void {
    this.lineChartData = this.dataService.getLineChartData(this.dateRangeId);
  }
}

