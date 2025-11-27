import { Injectable } from '@angular/core';
import { ChartConfiguration } from 'chart.js';
import { KpiCardData } from '../components/kpi-card/kpi-card.component';

@Injectable({
  providedIn: 'root'
})
export class DashboardDataService {
  getKpis(): KpiCardData[] {
    return [
      { 
        label: 'TOTAL USECASES', 
        value: '223',
        description: 'in development & production'
      },
      { 
        label: 'USECASES IN PRODUCTION', 
        value: '215',
        trend: '+62 in last 6 Months'
      },
      { 
        label: 'USECASE DEPLOYMENT TIMES', 
        value: '61',
        description: 'days on average'
      },
      { 
        label: 'CRITICAL OVERDUE RISKS', 
        value: '15',
        description: 'across 46 usecases'
      }
    ];
  }

  getLineChartData(): ChartConfiguration<'line'>['data'] {
    return {
      labels: ['May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov'],
      datasets: [
        {
          data: [12, 15, 18, 22, 25, 28, 30],
          label: 'North America & Canada',
          borderColor: 'rgba(30, 64, 175, 1)',
          backgroundColor: 'rgba(30, 64, 175, 0.1)',
          tension: 0.4
        },
        {
          data: [8, 10, 12, 14, 16, 18, 20],
          label: 'Japan',
          borderColor: 'rgba(59, 130, 246, 1)',
          backgroundColor: 'rgba(59, 130, 246, 0.1)',
          tension: 0.4
        },
        {
          data: [6, 8, 10, 12, 14, 16, 18],
          label: 'UK & Ireland',
          borderColor: 'rgba(147, 51, 234, 1)',
          backgroundColor: 'rgba(147, 51, 234, 0.1)',
          tension: 0.4
        },
        {
          data: [5, 7, 9, 11, 13, 15, 17],
          label: 'South Asia',
          borderColor: 'rgba(34, 197, 94, 1)',
          backgroundColor: 'rgba(34, 197, 94, 0.1)',
          tension: 0.4
        },
        {
          data: [4, 6, 8, 10, 12, 14, 16],
          label: 'South East Asia',
          borderColor: 'rgba(37, 99, 235, 1)',
          backgroundColor: 'rgba(37, 99, 235, 0.1)',
          tension: 0.4
        },
        {
          data: [3, 5, 7, 9, 11, 13, 15],
          label: 'Australia & New Zealand',
          borderColor: 'rgba(107, 114, 128, 1)',
          backgroundColor: 'rgba(107, 114, 128, 0.1)',
          tension: 0.4
        },
        {
          data: [2, 4, 6, 8, 10, 12, 14],
          label: 'MENA',
          borderColor: 'rgba(126, 34, 206, 1)',
          backgroundColor: 'rgba(126, 34, 206, 0.1)',
          tension: 0.4
        }
      ]
    };
  }

  getDonutChartData(chartType: 'value' | 'risk'): ChartConfiguration<'doughnut'>['data'] {
    if (chartType === 'value') {
      return {
        labels: ['Cost Savings', 'Cost Avoidance', 'Innovation', 'Revenue'],
        datasets: [
          {
            data: [52, 38, 28, 12],
            backgroundColor: [
              'rgba(59, 130, 246, 0.8)',
              'rgba(147, 51, 234, 0.8)',
              'rgba(107, 114, 128, 0.8)',
              'rgba(34, 197, 94, 0.8)'
            ],
            borderColor: [
              'rgba(59, 130, 246, 1)',
              'rgba(147, 51, 234, 1)',
              'rgba(107, 114, 128, 1)',
              'rgba(34, 197, 94, 1)'
            ],
            borderWidth: 2
          }
        ]
      };
    } else {
      return {
        labels: ['Critical', 'High', 'Medium', 'Low'],
        datasets: [
          {
            data: [15, 23, 48, 92],
            backgroundColor: [
              'rgba(239, 68, 68, 0.8)',
              'rgba(249, 115, 22, 0.8)',
              'rgba(234, 179, 8, 0.8)',
              'rgba(34, 197, 94, 0.8)'
            ],
            borderColor: [
              'rgba(239, 68, 68, 1)',
              'rgba(249, 115, 22, 1)',
              'rgba(234, 179, 8, 1)',
              'rgba(34, 197, 94, 1)'
            ],
            borderWidth: 2
          }
        ]
      };
    }
  }

  getOrganizations() {
    return [
      { id: '1', name: 'Acme Corporation' },
      { id: '2', name: 'Tech Solutions Inc' },
      { id: '3', name: 'Global Industries' }
    ];
  }

  getDateRanges() {
    return [
      { id: '6months', label: 'Last 6 months' },
      { id: '3months', label: 'Last 3 months' },
      { id: '1year', label: 'Last year' }
    ];
  }
}

