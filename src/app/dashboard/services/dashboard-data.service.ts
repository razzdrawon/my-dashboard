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

  getLineChartData(dateRangeId?: string): ChartConfiguration<'line'>['data'] {
    // Definir labels según el rango de fechas
    const getLabels = (dateRangeId?: string): string[] => {
      if (dateRangeId === '3months') {
        return ['Sep', 'Oct', 'Nov'];
      } else if (dateRangeId === '1year') {
        return ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
      } else {
        // Default: 6 meses
        return ['May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov'];
      }
    };

    // Datos base para 6 meses
    const baseData6Months = {
      'North America & Canada': [12, 15, 18, 22, 25, 28, 30],
      'Japan': [8, 10, 12, 14, 16, 18, 20],
      'UK & Ireland': [6, 8, 10, 12, 14, 16, 18],
      'South Asia': [5, 7, 9, 11, 13, 15, 17],
      'South East Asia': [4, 6, 8, 10, 12, 14, 16],
      'Australia & New Zealand': [3, 5, 7, 9, 11, 13, 15],
      'MENA': [2, 4, 6, 8, 10, 12, 14]
    };

    // Datos para 3 meses (últimos 3 meses)
    const data3Months = {
      'North America & Canada': [25, 28, 30],
      'Japan': [16, 18, 20],
      'UK & Ireland': [14, 16, 18],
      'South Asia': [13, 15, 17],
      'South East Asia': [12, 14, 16],
      'Australia & New Zealand': [11, 13, 15],
      'MENA': [10, 12, 14]
    };

    // Datos para 1 año (12 meses)
    const data1Year = {
      'North America & Canada': [8, 10, 12, 14, 16, 18, 20, 22, 25, 28, 30, 32],
      'Japan': [5, 6, 8, 9, 10, 12, 13, 14, 16, 18, 20, 22],
      'UK & Ireland': [4, 5, 6, 7, 8, 10, 11, 12, 14, 16, 18, 20],
      'South Asia': [3, 4, 5, 6, 7, 9, 10, 11, 13, 15, 17, 19],
      'South East Asia': [2, 3, 4, 5, 6, 8, 9, 10, 12, 14, 16, 18],
      'Australia & New Zealand': [2, 2, 3, 4, 5, 7, 8, 9, 11, 13, 15, 17],
      'MENA': [1, 2, 2, 3, 4, 6, 7, 8, 10, 12, 14, 16]
    };

    const getDataForRange = (dateRangeId?: string) => {
      if (dateRangeId === '3months') return data3Months;
      if (dateRangeId === '1year') return data1Year;
      return baseData6Months;
    };

    const data = getDataForRange(dateRangeId);
    const labels = getLabels(dateRangeId);

    const colors = [
      { border: 'rgba(30, 64, 175, 1)', bg: 'rgba(30, 64, 175, 0.1)' },
      { border: 'rgba(59, 130, 246, 1)', bg: 'rgba(59, 130, 246, 0.1)' },
      { border: 'rgba(147, 51, 234, 1)', bg: 'rgba(147, 51, 234, 0.1)' },
      { border: 'rgba(34, 197, 94, 1)', bg: 'rgba(34, 197, 94, 0.1)' },
      { border: 'rgba(37, 99, 235, 1)', bg: 'rgba(37, 99, 235, 0.1)' },
      { border: 'rgba(107, 114, 128, 1)', bg: 'rgba(107, 114, 128, 0.1)' },
      { border: 'rgba(126, 34, 206, 1)', bg: 'rgba(126, 34, 206, 0.1)' }
    ];

    return {
      labels,
      datasets: Object.keys(data).map((label, index) => ({
        data: data[label as keyof typeof data],
        label,
        borderColor: colors[index].border,
        backgroundColor: colors[index].bg,
        tension: 0.4
      }))
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

