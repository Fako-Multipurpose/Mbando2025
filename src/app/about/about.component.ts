import { Component, OnInit, OnDestroy, HostListener, signal } from '@angular/core';
import { trigger, style, animate, transition, query, stagger } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';

interface Woman {
  name: string;
  image: string;
  description: string;
}

interface Activity {
  title: string;
  description: string;
}

@Component({
  selector: 'app-about',
  imports: [HeaderComponent, CommonModule, FooterComponent],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  animations: [
    trigger('fadeSlide', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(30px)' }),
        animate('800ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ]),
    trigger('timelineAnim', [
      transition(':enter', [
        query('.timeline-item', [
          style({ opacity: 0, transform: 'translateY(20px)' }),
          stagger(120, animate('600ms ease-out', style({ opacity: 1, transform: 'translateY(0)' })))
        ])
      ])
    ]),
   trigger('listStagger', [
  transition('* => *', [
    query(
      '.activity-card',
      [
        style({ opacity: 0, transform: 'translateY(14px)' }),
        stagger(120, animate('520ms cubic-bezier(.2,.8,.2,1)', style({ opacity: 1, transform: 'translateY(0)' })))
      ],
      { optional: true }
    )
  ])
])


  ]
})
export class AboutComponent implements  OnDestroy {

  /* ---------- Tabs ---------- */
  currentTab = signal<'mission' | 'vision' | 'values'>('mission');
  setTab(tab: 'mission' | 'vision' | 'values') {
    this.currentTab.set(tab);
  }

  /* ---------- Stats Counter ---------- */
  statsVisible = false;
  visitors = signal(0);
  trainees = signal(0);
  events = signal(0);

  private counterTimer: any;

  private animateCounters() {
    const target = { visitors: 15000, trainees: 3200, events: 260 };
    const step = 20;
    const inc = { v: 75, t: 16, e: 2 };

    this.counterTimer = setInterval(() => {
      if (this.visitors() < target.visitors) this.visitors.update(v => Math.min(v + inc.v, target.visitors));
      if (this.trainees() < target.trainees) this.trainees.update(v => Math.min(v + inc.t, target.trainees));
      if (this.events() < target.events) this.events.update(v => Math.min(v + inc.e, target.events));

      if (
        this.visitors() === target.visitors &&
        this.trainees() === target.trainees &&
        this.events() === target.events
      ) {
        clearInterval(this.counterTimer);
      }
    }, step);
  }

  @HostListener('window:scroll')
  onScroll(): void {
    if (this.statsVisible) return;
    const statsEl = document.getElementById('stats');
    if (statsEl) {
      const rect = statsEl.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.8) {
        this.statsVisible = true;
        this.animateCounters();
      }
    }
  }

  ngOnDestroy() {
    clearInterval(this.counterTimer);
  }

  /* ---------- Timeline data ---------- */
  milestones = [
    { year: 2010, text: 'Community elders propose a multipurpose cultural hub.' },
    { year: 2013, text: 'Ground-breaking ceremony on donated municipal land.' },
    { year: 2016, text: 'FMCC officially opens with art gallery & 120-seat hall.' },
    { year: 2020, text: 'Launch of youth entrepreneurship & digital skills lab.' },
    { year: 2024, text: 'Hosted the first Mbando Ya Hvako pre-festival expo.' }
  ];

  /* ---------- Team ---------- */
  team = [
    { name: 'HRM Robert Esuka Enderly', role: 'Paramount chief & Naliomo of Buea', img: 'assets/chiefEsuka.jpeg' },
    { name: 'HRH Epupa Ekum Victor', role: 'Paramount chief & Naliomo of Limbe', img: 'assets/limbe.jpeg' },
    { name: 'Dr Amos Namanga Ngongi', role: 'Chairman of the Mbando steering committee', img: 'assets/dr namanga.jpeg' },
    { name: 'Dr Etonde Mbua', role: 'Vice chairperson of Mbando steering committee', img: 'assets/etonde.jpeg' },
    { name: 'Mr Samuel Njie Kale', role: 'Chairman of Mbando Trust Fund committee', img: 'assets/samuelNjie.PNG' },
    { name: 'Nyango Lois Ebenye Ikome', role: 'Vice chairperson MTFC', img: 'assets/ikome.PNG' },
    { name: 'Her Excellency Nyango Elsie Ngowo Effange-Mbella', role: 'Treasurer MTFC', img: 'assets/Elsie.jpeg' },
    { name: 'Sango Barrister Cosmos Lifange', role: 'Legal Advicer', img: '' },
    { name: 'Sango Victor Elame', role: 'Architech', img: '' },
  ];

  /* ---------- Women and Education ---------- */
  women: Woman[] = [
    {
      name: 'Proffesor Limunga Njume',
      image: 'assets/etonde.jpeg',
      description: 'Jane Doe has led initiatives to promote literacy among young girls in Fako, creating new educational programs that empower them.'
    },
    {
      name: 'Nalova Lyonga',
      image: 'assets/etonde.jpeg',
      description: 'Mary Smith established mentorship schemes connecting women students with successful professionals, boosting career opportunities.'
    },
  ];

activities: Activity[] = [
  {
    title: 'Language, Art & Culinary Classes',
    description: 'Hands-on classes that preserve indigenous knowledge, nurture creativity, and pass traditions to a new generation.'
  },
  {
    title: 'Club Meetings, Presentations & Conferences',
    description: 'Forums for collaboration, thought leadership, and mentorship—where ideas grow into community projects.'
  },
  {
    title: 'Cultural Festivals',
    description: 'Immersive showcases of Fako’s music, dance, folklore, and craftsmanship that strengthen identity and attract visitors.'
  },
  {
    title: 'Exchange Programs',
    description: 'Cross-cultural partnerships that broaden perspectives, build networks, and open gateways for learning and trade.'
  },
  {
    title: 'Tourism Promotion Activities',
    description: 'Curated experiences, community tours, and storytelling that spotlight Fako as a vibrant, must-visit destination.'
  },
  {
    title: 'Youth Empowerment Initiatives',
    description: 'Skills-building, leadership, and entrepreneurship programs that help young people create opportunity at home.'
  }
];

  


}
