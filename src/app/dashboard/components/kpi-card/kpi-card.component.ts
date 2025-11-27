import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface KpiCardData {
  label: string;
  value: string;
  description?: string;
  trend?: string;
}

@Component({
  selector: 'app-kpi-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './kpi-card.component.html',
  styleUrl: './kpi-card.component.scss'
})
export class KpiCardComponent {
  @Input() data!: KpiCardData;
}

