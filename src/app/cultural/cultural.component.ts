import { Component, OnInit, signal } from '@angular/core';
import { CommonModule} from '@angular/common';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatButtonModule } from '@angular/material/button';

import { fadeInStagger,fadeSlide } from '../animations';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';


@Component({
  selector: 'app-cultural',
  standalone: true,
  imports: [
    CommonModule,
    MatExpansionModule,
    MatButtonModule,
 FooterComponent,
    HeaderComponent 
  ],
  templateUrl: './cultural.component.html',
  styleUrls: ['./cultural.component.css'],
  animations: [fadeSlide, fadeInStagger]
})
export class CulturalComponent {
  isDarkMode = false;
isPlaying = false;

 
isMuted = false;

togglePlay(video: HTMLVideoElement) {
  if (video.paused) {
    video.play();
    this.isPlaying = true;
  } else {
    video.pause();
    this.isPlaying = false;
  }
}

toggleMute(video: HTMLVideoElement) {
  video.muted = !video.muted;
  this.isMuted = video.muted;
}



greetings = [
  { language: 'Mokpwe', text: 'Elela gbwamu', translation: 'Good morning' },
  { language: 'Bafaw', text: 'Mbɔndɛ', translation: 'Hello' },
  { language: 'Bakossi', text: 'Nyambɛ', translation: 'Peace be with you' },
  { language: 'Balong', text: 'Fɔkɛ', translation: 'Welcome' }
];

toggleTheme() {
  this.isDarkMode = !this.isDarkMode;
}

toggleAudio() {
  const audio: HTMLAudioElement = document.querySelector('audio')!;
  this.isPlaying = !this.isPlaying;
  this.isPlaying ? audio.play() : audio.pause();
}

   bgImages = [
    'assets/bg1.jpg',
    'assets/bg2.jpg',
    'assets/bg3.jpg'
  ];

  bakweriTopics = [
  {
    title: 'Mokpwe Language',
    image: 'assets/mbando pictures fix/200A5045.jpg',
    description: 'The native tongue of the Bakweri people is Mokpwe.',
    expanded: false,
    details: [
      'Includes greetings like "Elela gbwamu" (Good morning)',
      'Passed down orally from elders',
      'Still spoken during traditional gatherings'
    ]
  },
  {
    title: 'Traditional Attire',
    image: 'assets/Mbando/3D4A9609.JPG',
    description: 'Colorful regalia reflect pride and heritage.',
    expanded: false,
    details: [
      'Men wear Sanja,shirt and woven hats',
      'Women wear "Kaba ngondo" with beads',
      'Often worn during festivals and weddings'
    ]
  },

  {
    title: 'Cuisine & Dishes',
    image: 'assets/kwa.PNG',
    description: 'Known for flavorful dishes rooted in tradition.',
    expanded: false,
    details: [
      'Ndole with plantains',
      'Ekpwakoko and Mosaka(palmnut sauce)',
      'Roasted fish with herbs and pepper',
      'Ekpwang',
       'Ngonya Kwalala (black soup made with cocoyam leaves)'

    ]
  },
  {
    title: 'Marriage Customs',
    image: 'assets/mbando small size pix/DSC04345.jpg',
    description: 'Marriages involve deep-rooted traditional rites.',
    expanded: false,
    details: [
      'Bride price negotiation is sacred',
      'Blessings from elders are crucial',
      'Ceremony blends modern and ancestral customs'
    ]
  },

   {
    title: 'Naming Traditions',
    image: 'assets/child.jpeg',
    description: 'Names often reflect events, ancestors, or spirits.',
    expanded: false,
    details: [
      'Child naming is spiritual and celebratory',
      'Names like Ewili, Esuka, Wasa are common',
      'Ceremony involves entire community'
    ]
  },
   {
    title: 'Spiritual Practices',
    image: 'assets/mbando small size pix/DSC04446.jpg',
    description: 'Belief in ancestral spirits and nature guardians.',
    expanded: false,
    details: [
      'Shrines are common in sacred lands',
      'Libation rituals done to ancestors',
      'Spiritual cleansing during crises'
    ]
  },
  {
    title: 'Cultural Dances',
    image: 'assets/mbando small size pix/DSC04353.jpg',
    description: 'Dance expresses spirit, joy, and strength.',
    expanded: false,
    details: [
      'Famous dances include "Chacha" and "Malley Dance"',
      'Performed during Mbando and installations',
      'Accompanied by drums and traditional songs'
    ]
  },
{
    title: 'Malley dance',
    image: 'assets/mbando pictures fix/DSC04421.jpg',
    description: 'A sacred traditional dance ritual practiced by the Bakweri people.',
    expanded: false,
    details: [
      
    ]
  },
  {
    title: 'Fontele dance',
    image: 'assets/mbando pictures fix/200A5108.jpg',
    description: 'A sacred traditional dance  by the Mongo people.',
    expanded: false,
    details: [
     
    ]
  },
  
   {
    title: 'Ndonge dance',
    image: 'assets/mbando pictures fix/200A5108.jpg',
    description: 'Female Cult Dan of Bebunde',
    expanded: false,
    details: [
    
    ]
  },
 
  {
    title: 'Elephant Dance',
    image: 'assets/elephant.PNG',
    description: 'Performed by members of the secret malley society',
    expanded: false,
    details: [
      'Dancers wear skirts of palm frond',
      'raffia-covered headpieces with wooden "tusks,"',
      'Ankle rattles made of nut shells.'
    ]
  },
   {
    title: 'Ngosso Dance',
    image: 'assets/ngosso.jpeg',
    description: 'Performed by the ESEWE cult group of the ISUBU clan.',
    expanded: false,
    details: [
      'Dancers wear skirts of palm frond',
      'raffia-covered headpieces with wooden "tusks,"',
      'Ankle rattles made of nut shells.'
    ]
  },
  {
    title: 'Nganya ',
    image: 'assets/nga.jpeg',
    description: 'Cleansing Ritual ',
    expanded: false,
    details: [
      'It’s performed to appease the gods,',
      'Accompanied by libations and late-night rituals',
      'cleanse the land (“tanirze”), and restore fertility and productivity.'
    ]
  },
  
  {
    title: 'Bakweri Proverbs',
    image: 'assets/mbando pictures fix/DSC04377.jpg',
    description: 'Wisdom passed through generations in sayings.',
    expanded: false,
    details: [
      '"A tree never forgets its roots"',
      '"Even the smallest drum has a rhythm"',
      '"Where elders sit, the future listens"'
    ]
  },
  {
    title: 'Mbando Ya Hvako Festival',
    image: 'assets/mabado cultural.PNG',
    description: 'A majestic cultural festival for unity and pride.',
    expanded: false,
    details: [
      'Features all Bakweri clans',
      'Includes dancing, wrestling, exhibitions',
      'Held annually in Buea and Limbe'
    ]
  }
];

fakoLegends = [
   {
    name: 'Chief Robert Esuka Enderly',
    role: 'Paramount Chief of Buea',
    image: 'assets/chiefEsuka.jpeg',
    bio: 'A revered custodian of Bakweri heritage, HRH Robert Esuka Endeley has dedicated his reign to preserving tradition while guiding his people toward modern progress. Known for his unifying spirit and visionary leadership, he has become a symbol of cultural pride and resilience for the Buea community and beyond.'
  },
  {
    name: ' Chief John Elufa Manga Williams',
    role: 'Paramount Chief of Limbe',
    image: 'assets/chiefLimbe.jpeg',
    bio: 'John Elufa Manga Williams stands as a guardian of coastal heritage, upholding the ancestral customs of the Limbe clans with dignity and wisdom. Through his leadership, he fosters harmony, cultural growth, and a deep-rooted connection to the traditions that define the soul of Fako.'
  },

  {
    name: 'Chief Ewili Moka',
    role: 'Warlord & Diplomat',
    image: 'assets/legends/ewili.jpg',
    bio: 'Chief Ewili was a fearless leader who defended the Bakweri territory and negotiated peacefully with colonial forces. His wisdom and strength inspired generations.'
  },
  {
    name: 'Queen Anna Manga',
    role: 'Matriarch & Herbalist',
    image: 'assets/legends/anna.jpg',
    bio: 'Known for her deep knowledge of herbs and spiritual guidance, Queen Anna was a pillar of the Fako community, preserving medicinal knowledge and healing traditions.'
  },
  {
    name: 'Pa Solomon Ndumbe',
    role: 'Historian & Educator',
    image: 'assets/legends/solomon.jpg',
    bio: 'A respected elder who documented the oral histories of Fako. His works have kept Bakweri stories alive and taught youths the values of their ancestry.'
  },

];


  chiefs = [
    {
      name: 'HRH Robert Esuka Endeley',
      image: 'assets/paramountBuea.PNG',
      title: 'Custodian of the Bakweri legacy'
    },
    {
      name: 'HRH Epupa Ekum Victor',
      image: 'assets/paramountLimbe.PNG',
      title: 'Protector of coastland traditions'
    }
  ];

 
 Legends = [
    {
       image: 'assets/paramountLimbe.PNG',
      name: 'HRH Robert Esuka Endeley',
      Bio: 'very good man',
     
    },
    {
      image: 'assets/paramountLimbe.PNG',
      name: 'King Ndumbe Lobe Bell',
      Bio: 'very good man',
    }
  ];

  mbandoImages = [
    'assets/esuka.PNG',
    'assets/festival1.jpg',
    'assets/festival2.jpg'
  ];

  

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
     name: 'HRM Etina Monono ',
     role: 'Chief of Soppo',
     img:'assets/chief4.jpeg',
    
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
     name: 'HRM NGALE B NGOMBA ',
     role: 'Chief lower Boando',
     img:'assets/nga2.jpeg',
    
   },
 
     {
     name: 'HRM ESUKA MATHIAS ETONGE ',
     role: 'Chief of Molyko',
     img:'',
   },
     {
     name: 'HRM Mbanda Njie II ',
     role: 'Chief of Lysoka Moliwe',
     img:'assets/chief1.jpeg',
    
   },
    {
     name: 'HRM Limonge France Kinge ',
     role: 'Chief Bwiteva Vilage',
     img:'assets/chief2.jpeg',
    
   },
    {
     name: 'HRM Nango Beckly ',
     role: 'Chief of Monde Village',
     img:'assets/chief3.jpeg',
    
   },
   {
     name: 'HRM Sam Mafany Luma ',
     role: 'Chief of Limbola',
     img:'assets/chief6.jpeg',
    
   },
    {
     name: 'HRM Eward Molinge ',
     role: 'Chief of Upper Muea',
     img:'assets/chief5.jpeg',
    
   },
    {
     name: 'HRM Donald Likine ',
     role: 'Chief of Bojoke Village',
     img:'assets/chief8.jpeg',
    
   },
   
    {
     name: 'HRM Rudolf Esoke Sone II ',
     role: 'Chief of Malende Village',
     img:'assets/chief7.jpeg',
    
   },
      {
     name: 'HRM Johnson Njombe Njoke ',
     role: 'Chief of Wokaka',
     img:'assets/chief11.jpeg',
    
   },
   
    {
     name: 'HRM Etoni Moka ',
     role: 'Chief of Wosenge Village',
     img:'assets/chief9.jpeg',
    
   },
    {
     name: 'HRM Effeme Nganje Francis ',
     role: 'Chief of Ikata Village',
     img:'assets/chief10.jpeg',
    
   },
 
    {
     name: 'HRM Elias Mbake ',
     role: 'Chief of Boana Village',
     img:'assets/chief12.jpeg',
    
   },
    {
     name: 'HRM Kale David ',
     role: 'Chief Masone Village',
     img:'assets/chief13.jpeg',
    
   },
    {
     name: 'HRM Likowo Denis Melombe ',
     role: 'Chief of Munyenge Village',
     img:'assets/chief14.jpeg',
    
    
   },
    {
     name: 'HRM Ekoka Molindo ',
     role: 'Chief of Mondoli',
     img:'assets/chief15.jpeg',
    
   },
    {
     name: 'HRM George Malumbe Dikanjo ',
     role: 'Chief of Wovia',
     img:'assets/chief16.jpeg',
    
   },
    {
     name: 'HRM Mbua Peter Mokte ',
     role: 'Chief of Bafia Village',
     img:'assets/chief17.jpeg',
    
   },
    {
     name: 'HRM Teke Oscar Etute',
     role: 'Chief of Wonya Nango Village ',
     img:'assets/chief18.jpeg',
    
   },
   
    {
     name: 'HRM Janea Ndoke Ngonja Philip',
     role: 'Chief of Mpundy Balong',
     img:'assets/chief19.jpeg',
    
   },
    {
     name: 'HRM Peter Ekema',
     role: 'Chief of Soppo Likoko',
     img:'assets/chief20.jpeg',
    
   },
    {
     name: 'HRM Thomas Elinge Ndotoh',
     role: 'Chief of Ewili Village',
     img:'assets/chief21.jpeg',
    
   },
    {
     name: 'HRM Mbua Mokofe Emerson ',
     role: 'Chief of Wokoko Village',
     img:'assets/chief22.jpeg',
    
   },
    {
     name: 'HRM Br. Elive Esimboe',
     role: 'Chief Ewomgo Village ',
     img:'assets/chief23.jpeg',
    
   },
    {
     name: 'HRM David Ewome Mokosa ',
     role: 'Chief of Bwitingi Village',
     img:'assets/chief24.jpeg',
    
   }
 
  
 
  
  
    
 ];

}
  

