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
  royalFaces = [
  { 
    name: 'HRM Robert Esuka Endeley', 
    role: 'Paramount Chief & Naliomo of Buea', 
    img: 'assets/chiefEsuka.jpeg' 
  },
  { 
    name: 'HRM John Elufa Manga Williams', 
    role: 'Paramount Chief & Ikanea of Limbe', 
    img: 'assets/limbe.jpeg' 
  },
   { 
    name: 'HRM Ekum Victor Epupa', 
    role: 'Chief of Dikolo', 
    img: 'assets/ekum.jpeg' 
  },
   { 
    name: 'HRM Chief Kalla', 
    role: 'Chief of Tiko-Mongo', 
    img: 'assets/kalla.jpeg' 
  },
  { 
    name: 'HRM Otto Molive Molungu', 
    role: 'President of the Fako Chiefs', 
    img: 'assets/otto.PNG' 
  },
  { 
    name: 'HRM DIKE RICHARD', 
    role: 'President- Tiko chiefs conference', 
    img: 'assets/d.jpeg' 
  },
  { 
    name: ' HRM KALE DAVID ELOVE', 
    role: 'President- Muyuka chiefs conference', 
    img: 'assets/d1.jpeg' 
  },
  { 
    name: '  HRM EKO NGANJE', 
    role: '  President-Buea Chief conference', 
    img: 'assets/d3.jpeg' 
  },
    { 
    name: 'HRM DIPOKO DANIEL ', 
    role: 'Chief of Mussaka village', 
    img: 'assets/d2.jpeg' 
  },
   { 
    name: '      HRM EMMANUEL NDONGO MOLONGE ', 
    role: 'Chief of Wonankanda', 
    img: 'assets/crik.jpeg' 
  },
 
  { 
    name: 'HRM Abel Mokuke Ndive', 
    role: 'Chief of Sasse, Donor of FMCC Annex', 
    img: 'assets/crik1.jpeg' 
  },
  { 
    name: ' HRM AARON NGEKA', 
    role: 'Chief of Mutengene', 
    img: 'assets/crik2.jpeg' 
  },
   { 
    name: ' HRM HUMPHREY TANDE MOSENGE', 
    role: 'Chief Small Soppo Wonganga', 
    img: 'assets/crik3.jpeg' 
  },

   {
    name: 'HRM Albert Njie Mbonde ',
    role: 'Chief of Wokwaongo',
    img:'assets/bert.jpeg',
   
  },
  {
    name: 'HRM OSWARD NJOMBO EKOMBONI ',
    role: 'Chief of Ndame Island',
    img:'assets/os.jpeg',
   
  },
  {
    name: 'HRM STEPHEN VEKIMA EFESOA ',
    role: 'Chief of Wojongo',
    img:'assets/efe.jpeg',
   
  },
  {
    name: 'HRM Neando Peter Bolanjo Mosukwaka III ',
    role: 'Chief of Idenau',
    img:'assets/eff.jpeg',
   
  },
    {
    name: 'HRM ESUKA MATHIAS ETONGE ',
    role: 'Chief of Molyko',
    img:'',
   
  },
  

 

 
 
   
];


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
     { year: 2022, text: 'Coronation of Paramount chief HRM Dr Robert Esuka Endeley, Naliomo of Buea  and HRM John Elufa Manga Williams, Ikanea of Limbe  .' },
    { year: 2022, text: 'Creation of the Hvako Mbando Cultural Development Organization.' },
       { year: 2023, text: 'Appointment of the Mbando Cultural Festival Steering Commitee chaired by Sango Dr Amos Namanga Ngongi' },
        { year: 2023, text: 'Donation of Land in Lysoka by Sango Dr Amos Namanga Ngongi' },
    { year: 2023, text: 'Holding of the first Hvako Mbando Cultural Festival in Buea, Limbe, Muyuka, Idenau, Tiko' },
    { year: 2024, text: 'Holding of the Second Hvako Mbando Cultural Festival in Buea, Limbe, Tiko-Mongo' },
     { year: 2024, text: 'Identificaion, survey and approval by the SDO of the location of the Fako Multipurpose Cultural Center at the foot of the Fako Mountain in Buea' },
      { year: 2024, text: 'Donation of FMCC annex by HRM Abel Mokuke Ndive , Chief of Sasse' },
  
    { year: 2025, text: 'Fencing of the FMCC Annex in Wotutu donated by HRM Abel Mokuke Ndive' }
  ];

  /* ---------- Team ---------- */
  team = [
    { name: 'HRM Robert Esuka Endeley', role: 'Paramount chief & Naliomo of Buea', img: 'assets/chiefEsuka.jpeg' },
    { name: 'John Elufa Manga Williams', role: 'Paramount chief & Ikanea of Limbe', img: 'assets/limbe.jpeg' },
    { name: ' Sango Dr Amos Namanga Ngongi ', role: 'Chairman of the Mbando steering committee, former United Nations Under Secretary-General, Special Representative of the UN Secretary General to the Democratic Republic of Congo, DRC.', img: 'assets/dr namanga.jpeg' },
    { name: 'Nyango Etonde Mbua', role: 'Vice chairperson of Mbando steering committee, president of Fako Women for Peace Association, FAWONE', img: 'assets/etonde.jpeg' },
    { name: 'Sango  Samuel Njie Kale ', role: 'Chairman of Mbando Trust Fund committee', img: 'assets/samuelNjie.PNG' },
    { name: 'Nyango Lois Ebenye Ikome', role: 'Vice chairperson MTFC', img: 'assets/ikome.PNG' },
    { name: 'Her Excellency Nyango Elsie Ngowo Effange-Mbella', role: ' Treasurer MBANDO Trust Fund Committee(MTFC),Former Director of Civil Affairs Division,MINUSMA; Senior Gender Adviser MONUSCO, United Nations for Mali  ', img: 'assets/Elsie.jpeg' },
    { name: 'Sango Barrister Cosmos Lifange', role: 'Legal Advicer', img: 'assets/Baris.jpeg' },
    { name: 'Sango Victor Elame', role: 'Architect', img: 'assets/architect.jpeg' },
     { name: 'Prof Kingsley Lyonga Ngange', role: 'Chairman Communication Committee Deputy Vice-Chancellor and Director to contribute to the efforts to protect and consolidate the achievements of the University of Buea', img: 'assets/kf.jpeg' },
      { name: 'Dr. Noella Molisa Efange ', role: 'Vice- Chair communication committee Senior Lecturer University of Buea', img: 'assets/cor3.jpeg' },
   { name: 'Mr. Isuma Otto Endeley  ', role: 'Head of Cultural Committee', img: 'assets/mm.jpeg' },
   { name: 'Dr Martin Mokake   ', role: 'Head of Health Committee Director of Buea General Hospital', img: 'assets/martin.jpeg' },
    { name: 'Mr Isaac Ekombe Mbua   ', role: 'Head of Protocol  Regional Delegate of Youth & Civic Education for Southwest', img: 'assets/merde.jpeg' },
   { name: 'Dr. Catherine Ilimbi Enjema  ', role: 'Head of exhibitions', img: 'assets/merde2.jpeg' },
   { name: 'Princess Grayce Endeley ', role: 'Head of Fako Fabric', img: 'assets/merde1.jpeg' },
      { name: ' Mola Paul Njoh Ekumbetale ', role: 'Head of Cultural Committe', img: 'assets/merde3.jpeg' },
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
    name: 'Chief Dr Dion Ngute',
    role: 'Prime minister Head of Government  ',
    image: 'assets/PM.jpeg',
    bio: '',},
  
   {
    name: 'H.E Peter Mafany Musonge',
    role: 'President of the Bilingualism comission (2017-present) Former Prime Minister of Cameroon 1996 - 2004 Grand Chancellor of National Order 2007 Member of Senate 2013 - 2017 Current Chairman of the Bilingualism Committee',
    image: 'assets/mafany.jpeg',
    bio: '',},
    {
    name: 'Professor Nalova Lyonga',
    role: 'Miinister of Secondary Education',
    image: 'assets/nalova.PNG',
    bio: ''
  },
   {
    name: ' Prof. Dorothy Limunga Njeuma',
    role: 'Member of Cameroon Electoral Board  2009-Present Rector of University of Yaoundé I 2005-2008 Vice-Chancellor of the University of Buea 1993-2005 Director General of the Buea University 1988-1993 Vice Minister of National Education 1975 - 1985',
    image: 'assets/Dorothy.jpeg',
    bio: ''
  },
 
{
    name: ' Dr Kate Kanyi-Tometi Fotso',
    role: 'Founder and CEO of Telcar CoCoa Ltd',
    image: 'assets/kate.jpeg',
    bio: ''
  },
  
  
  {
    name: 'Sango Dr. Amos Namanga Ngongi',
    role: 'Chairman',
    image: 'assets/amo.jpeg',
    bio: ''
  },
    {
    name: 'H.E. Elsie Ngowo Effange Mbella ',
    role: 'FMR Director Civil Affairs Division,MINUSMA;FMR Senior Gender Adviser MONUSCO, UN Mission for Mali',
    image: 'assets/mama.jpeg',
    bio: ''
  },
  
  {
    name: 'Sango Barrister Mafany Namange',
    role: 'Mayor of Buea',
    image: 'assets/m.jpeg',
    bio: ''
  },
      {
    name: 'Mr Franklin Ngoni Njie',
    role: 'General Manager of CDC',
    image: 'assets/gen.jpeg',
    bio: ''
  },
   {
    name: 'Prof Henry Nammeh Luma',
    role: 'DIRECTOR OF THE REFRENCE  HOSPITAL DOUALA.',
    image: 'assets/nx.jpeg',
    bio: ''
  },
     {
    name: 'Prof William Nganje and Group',
    role: 'Professor University of South Dakatho, USA',
    image: 'assets/William.jpeg',
    bio: ''
  },
  
   {
    name: 'Dr Kingue Monono',
    role: 'FMR . FINANCIAL ATTACHE, DELECAM NEW YORK ',
    image: 'assets/monono.jpeg',
    bio: ''
  },
 
  

  {
    name: 'Nyango Estherine Embelle Lisinge Fotabong ',
    role: 'Director of Programs NEPAD',
    image: 'assets/Nya.jpeg',
    bio: ''
  },
   {
    name: ' Sango Dr. Robert Tama Lisinge ',
    role: 'Chief, Energy, Infrastructure and Services Section, UN-ECA',
    image: 'assets/L.jpeg',
    bio: ''
  },
 
   {
    name: 'Mr JULIUS JUNGUO',
    role: 'Civil Affairs Officer MONUSCO',
    image: 'assets/new.jpeg',
    bio: ''
  },
     {
    name: 'Sango  Dr. Nelson Makia ',
    role: 'MD, Pediatrician',
    image: 'assets/dev4.jpeg',
    bio: ''
  },
   {
    name: 'Nyango Susan Enjeama Elinge Epse Ewusi ',
    role: ' Office of the Secretary General PRESICAM Yaounde',
    image: 'assets/susan.jpeg',
    bio: ''
  },
  {
    name: 'Nyango Shirley Malafa Nzalie',
    role: ' Customs Douala Cameroon',
    image: 'assets/Mark.jpeg',
    bio: ''
  },
 
  {
    name: 'Sango Ewongowe & Mrs Jacob Waah',
    role: 'Entrepreneur, Real Estate',
    image: 'assets/Mr.jpeg',
    bio: ''
  },
  
  

  {
    name: ' Sango Max-Sako Lyonga',
    role: 'Global Artist',
    image: 'assets/max.jpeg',
    bio: ''
  },
 
 
  



  {
    name: 'Fako Women Nendinge(FAWONE)',
    role: '',
    image: 'assets/faw.jpeg',
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
    name: 'Telcar cocoa ',
    role: '',
    image:'assets/telca.PNG',
    bio: ''
  },
  
   {
    name: 'CAMTEL',
    role: '',
    image: 'assets/camtel.PNG',
    bio: ''
  },
  
 {
    name: 'FAKOSHIP',
    role: '',
    image:'assets/fak.jpeg',
    bio: ''
  },
 
    
   




];


  


}
