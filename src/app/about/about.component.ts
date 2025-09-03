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
  currentTab = signal<'mission' | 'vision' | 'values'| 'initiatives'>('mission');
  setTab(tab: 'mission' | 'vision' | 'values' | 'initiatives') {
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
     { year: 2022, text: 'Coronation of Paramount chief HRM Naliomo of Buea Robert Esuka Endeley, and HRM John Elufa Manga Williams, Ikanea of Limbe  .' },
    { year: 2022, text: 'Creation of the Hvako Mbando Cultural and development Organization.' },
    { year: 2023, text: 'Holding of the first Hvako Mbando Cultural Festival in Buea, Limbe, Muyuka, Idenea, Tiko' },
   { year: 2023, text: 'Appointment of the Mbando Cultural Festival Steering commitee chaired by Sango Namanga Ngongi' },
    { year: 2024, text: 'Holding of the first Hvako Mbando Cultural Festival in Buea, Limbe, Tiko-Mongo' },
     { year: 2024, text: 'Identificaion, survey and approval of the Fako Multipurpose cultural center grounds at the foot of the fako mountain in Buea' },
      { year: 2024, text: 'Donation of FMCC annex by HRH Abel Mokuke Ndive' },
  
    { year: 2025, text: 'Fencing of the fmcc annex grounds donated by HRH Abel Mokuke Ndive' }
  ];

  /* ---------- Team ---------- */
  team = [
    { name: 'HRM Robert Esuka Endeley', role: 'Paramount chief & Naliomo of Buea', img: 'assets/chiefEsuka.jpeg' },
    { name: 'John Elufa Manga Williams', role: 'Paramount chief & Ikanea of Limbe', img: 'assets/limbe.jpeg' },
    { name: ' Sango Dr Amos Namanga Ngongi ', role: 'Chairman of the Mbando steering committee, former United Nations Under Secretary-General, Special Representative to the Democratic Republic of Congo, DRC.', img: 'assets/dr namanga.jpeg' },
    { name: 'Nyango Etonde Mbua', role: 'Vice chairperson of Mbando steering committee, president of Fako Women for Peace Association, FAWONE', img: 'assets/etonde.jpeg' },
    { name: 'Sango  Samuel Njie Kale ', role: 'Chairman of Mbando Trust Fund committee', img: 'assets/samuelNjie.PNG' },
    { name: 'Nyango Lois Ebenye Ikome', role: 'Vice chairperson MTFC', img: 'assets/ikome.PNG' },
    { name: 'Her Excellency Nyango Elsie Ngowo Effange-Mbella', role: 'Former Director, Civil affairs Division, United Nations for Mali,  Treasurer MTFC,  ', img: 'assets/Elsie.jpeg' },
    { name: 'Sango Barrister Cosmos Lifange', role: 'Legal Advicer', img: 'assets/Baris.jpeg' },
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
    title: 'Meetings, Presentations & Conferences',
    description: 'Forums for collaboration, thought leadership, and mentorship—where ideas grow into community projects.'
  },
  {
    title: 'Cultural Festivals',
    description: 'Immersive showcasing of Fako’s music, dance, folklore, and craftsmanship that strengthen identity and promote tourism.'
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
    description: 'Skills-building, leadership, and entrepreneurship programs that empower young people create opportunity at home.'
  }
];


fakoLegends = [
   {
    name: 'H.E Peter Mafany Musonge',
    role: 'President of the Bilingualism comission (2017-present) ',
    image: 'assets/mafany.jpeg',
    bio: '',},
  {
    name: ' Dr Kate Kanyi-Tometi Fotso',
    role: 'CEO,Telcar Cocoa',
    image: 'assets/kate.jpeg',
    bio: ''
  },

  {
    name: 'Max-Sako Lyonga',
    role: 'Global Artist',
    image: 'assets/max.jpeg',
    bio: ''
  },
  {
    name: 'HRH Chief Kalla of Tiko-Mongo',
    role: '',
    image: 'assets/kalla.jpeg',
    bio: ''
  },
  {
    name: 'Chief Otto Molive Molungu',
    role: 'President of the Fako Chiefs',
    image: 'assets/otto.PNG',
    bio: ''
  },
   {
    name: 'Professor Nalova Lyonga',
    role: '',
    image: 'assets/nalova.PNG',
    bio: 'Miinister of Secondary Education'
  },
   {
    name: 'Fako Women Nendinge(FAWONE)',
    role: '',
    image: 'assets/faw.jpeg',
    bio: ''
  },
 
   {
    name: 'Dr Kingue Monono',
    role: '',
    image: 'assets/monono.jpeg',
    bio: ''
  },
   {
    name: 'Mr Julius Jongo',
    role: '',
    image: 'assets/julius.jpeg',
    bio: ''
  },
   {
    name: 'Fako UK',
    role: '',
    image: 'assets/fako.PNG',
    bio: ''
  },
   {
    name: 'MTN CAMEROON',
    role: '',
    image: 'assets/mtn.PNG',
    bio: ''
  },
   {
    name: 'SONARA',
    role: '',
    image: 'assets/sonara.PNG',
    bio: ''
  },
   {
    name: 'CAMTEL',
    role: '',
    image: 'assets/camtel.PNG',
    bio: ''
  },
  {
    name: 'HRH OSWARD NJOMBO EKOMBONI',
    role: '',
    image:'assets/osward.jpeg',
    bio: ''
  },
  {
    name: 'HRH CHIEF Humphrey Mosenge',
    role: '',
    image:'assets/hump.jpeg',
    bio: ''
  },
  {
    name: 'Prof. Wiiliams Ngange',
    role: '',
    image:'assets/will.jpeg',
    bio: ''
  },
    {
    name: 'HRM Albert Njie Mbonde ',
    role: '',
    image:'assets/albert.jpeg',
    bio: ''
  },
   {
    name: 'Telcar cocoa ',
    role: '',
    image:'assets/telca.PNG',
    bio: ''
  },
   




];


  


}
