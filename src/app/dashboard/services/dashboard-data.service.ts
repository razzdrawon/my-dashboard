import { Injectable } from '@angular/core';
import { ChartConfiguration } from 'chart.js';
import { KpiCardData } from '../components/kpi-card/kpi-card.component';

@Injectable({
  providedIn: 'root'
})
export class DashboardDataService {
  getKpis(organizationId?: string, dateRangeId?: string): KpiCardData[] {
    // Helper para obtener el texto del trend según el rango de fechas
    const getTrendText = (months: number, dateRangeId?: string) => {
      if (!dateRangeId) return `+${months} in last 6 Months`;
      const rangeMap: { [key: string]: string } = {
        '3months': `+${Math.floor(months * 0.5)} in last 3 Months`,
        '6months': `+${months} in last 6 Months`,
        '1year': `+${Math.floor(months * 1.8)} in last year`
      };
      return rangeMap[dateRangeId] || `+${months} in last 6 Months`;
    };

    // Datos base por organización y rango de fechas
    const kpiDataByOrgAndDate: { [key: string]: { [key: string]: KpiCardData[] } } = {
      '1': {
        '3months': [
          { label: 'TOTAL USECASES', value: '175', description: 'in development & production' },
          { label: 'USECASES IN PRODUCTION', value: '168', trend: getTrendText(22, '3months') },
          { label: 'USECASE DEPLOYMENT TIMES', value: '56', description: 'days on average' },
          { label: 'CRITICAL OVERDUE RISKS', value: '10', description: 'across 35 usecases' }
        ],
        '6months': [
          { label: 'TOTAL USECASES', value: '180', description: 'in development & production' },
          { label: 'USECASES IN PRODUCTION', value: '172', trend: getTrendText(45, '6months') },
          { label: 'USECASE DEPLOYMENT TIMES', value: '58', description: 'days on average' },
          { label: 'CRITICAL OVERDUE RISKS', value: '12', description: 'across 38 usecases' }
        ],
        '1year': [
          { label: 'TOTAL USECASES', value: '195', description: 'in development & production' },
          { label: 'USECASES IN PRODUCTION', value: '185', trend: getTrendText(81, '1year') },
          { label: 'USECASE DEPLOYMENT TIMES', value: '60', description: 'days on average' },
          { label: 'CRITICAL OVERDUE RISKS', value: '14', description: 'across 42 usecases' }
        ]
      },
      '2': {
        '3months': [
          { label: 'TOTAL USECASES', value: '92', description: 'in development & production' },
          { label: 'USECASES IN PRODUCTION', value: '85', trend: getTrendText(14, '3months') },
          { label: 'USECASE DEPLOYMENT TIMES', value: '63', description: 'days on average' },
          { label: 'CRITICAL OVERDUE RISKS', value: '6', description: 'across 20 usecases' }
        ],
        '6months': [
          { label: 'TOTAL USECASES', value: '95', description: 'in development & production' },
          { label: 'USECASES IN PRODUCTION', value: '88', trend: getTrendText(28, '6months') },
          { label: 'USECASE DEPLOYMENT TIMES', value: '65', description: 'days on average' },
          { label: 'CRITICAL OVERDUE RISKS', value: '8', description: 'across 22 usecases' }
        ],
        '1year': [
          { label: 'TOTAL USECASES', value: '102', description: 'in development & production' },
          { label: 'USECASES IN PRODUCTION', value: '95', trend: getTrendText(50, '1year') },
          { label: 'USECASE DEPLOYMENT TIMES', value: '67', description: 'days on average' },
          { label: 'CRITICAL OVERDUE RISKS', value: '9', description: 'across 25 usecases' }
        ]
      },
      '3': {
        '3months': [
          { label: 'TOTAL USECASES', value: '138', description: 'in development & production' },
          { label: 'USECASES IN PRODUCTION', value: '132', trend: getTrendText(17, '3months') },
          { label: 'USECASE DEPLOYMENT TIMES', value: '61', description: 'days on average' },
          { label: 'CRITICAL OVERDUE RISKS', value: '8', description: 'across 28 usecases' }
        ],
        '6months': [
          { label: 'TOTAL USECASES', value: '142', description: 'in development & production' },
          { label: 'USECASES IN PRODUCTION', value: '135', trend: getTrendText(35, '6months') },
          { label: 'USECASE DEPLOYMENT TIMES', value: '63', description: 'days on average' },
          { label: 'CRITICAL OVERDUE RISKS', value: '10', description: 'across 31 usecases' }
        ],
        '1year': [
          { label: 'TOTAL USECASES', value: '155', description: 'in development & production' },
          { label: 'USECASES IN PRODUCTION', value: '148', trend: getTrendText(63, '1year') },
          { label: 'USECASE DEPLOYMENT TIMES', value: '65', description: 'days on average' },
          { label: 'CRITICAL OVERDUE RISKS', value: '12', description: 'across 36 usecases' }
        ]
      }
    };

    // Si hay una organización seleccionada, buscar datos específicos
    if (organizationId && kpiDataByOrgAndDate[organizationId]) {
      const orgData = kpiDataByOrgAndDate[organizationId];
      // Si hay un rango de fechas seleccionado, usar esos datos
      if (dateRangeId && orgData[dateRangeId]) {
        return orgData[dateRangeId];
      }
      // Si no hay rango de fechas, usar el default de 6 meses
      return orgData['6months'] || orgData[Object.keys(orgData)[0]];
    }

    // Si no hay filtro de organización, devolver datos agregados según el rango de fechas
    const aggregatedData: { [key: string]: KpiCardData[] } = {
      '3months': [
        { label: 'TOTAL USECASES', value: '210', description: 'in development & production' },
        { label: 'USECASES IN PRODUCTION', value: '200', trend: getTrendText(26, '3months') },
        { label: 'USECASE DEPLOYMENT TIMES', value: '59', description: 'days on average' },
        { label: 'CRITICAL OVERDUE RISKS', value: '12', description: 'across 41 usecases' }
      ],
      '6months': [
        { label: 'TOTAL USECASES', value: '223', description: 'in development & production' },
        { label: 'USECASES IN PRODUCTION', value: '215', trend: getTrendText(62, '6months') },
        { label: 'USECASE DEPLOYMENT TIMES', value: '61', description: 'days on average' },
        { label: 'CRITICAL OVERDUE RISKS', value: '15', description: 'across 46 usecases' }
      ],
      '1year': [
        { label: 'TOTAL USECASES', value: '245', description: 'in development & production' },
        { label: 'USECASES IN PRODUCTION', value: '235', trend: getTrendText(112, '1year') },
        { label: 'USECASE DEPLOYMENT TIMES', value: '63', description: 'days on average' },
        { label: 'CRITICAL OVERDUE RISKS', value: '18', description: 'across 52 usecases' }
      ]
    };

    if (dateRangeId && aggregatedData[dateRangeId]) {
      return aggregatedData[dateRangeId];
    }

    // Default: datos agregados de 6 meses
    return aggregatedData['6months'];
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

