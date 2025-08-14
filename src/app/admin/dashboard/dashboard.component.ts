import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

// Angular Material
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';

interface Donation {
  donor: string;
  amount: number;
  date: string;
}

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatTableModule
  ],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  totals = { donations: 0, users: 0, events: 0, volunteers: 0 };
  animatedTotals = { donations: 0, users: 0, events: 0, volunteers: 0 };

  latestDonations: Donation[] = [];
  displayedColumns: string[] = ['donor', 'amount', 'date'];

  ngOnInit(): void {
    this.loadTotals();
    this.loadLatestDonations();
  }

  private loadTotals() {
    this.totals = { donations: 50000000, users: 5, events: 3, volunteers: 4 };
    (Object.keys(this.totals) as (keyof typeof this.totals)[])
      .forEach(k => this.animateValue(k, 0, this.totals[k], 1200));
  }

  private loadLatestDonations() {
    this.latestDonations = [
     
    ];
  }

  private animateValue(field: keyof typeof this.animatedTotals, start: number, end: number, duration: number) {
    let startTs: number | null = null;
    const step = (ts: number) => {
      if (startTs === null) startTs = ts;
      const p = Math.min((ts - startTs) / duration, 1);
      this.animatedTotals[field] = Math.floor(start + (end - start) * p);
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }
}
