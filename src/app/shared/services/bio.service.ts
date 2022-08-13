import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Bio } from '../models/Bio.model';

const bioEN: Bio = {
  picture: 'https://github.com/AndreZigiotti.png',
  name: 'André Luiz Gagliardi Zigiotti',
  occupation: 'Front-end Developer',
  description: "With 4 years of experience, I have already developed several websites and web applications for several clients and startups, using the main frameworks on the market such as Angular and React. I'm looking for a new professional challenge, where I can continue learning and improving my knowledge, work as a team and generate positive results for the company.",
  email: 'algazigiotti@gmail.com',
  address: 'Rio Peixe de Couro, 25 - São Paulo - SP - 05574-425',
  phone: '(11) 9 4272-2303',
  birthday: '19 Jul. 1995',
  nationality: 'Brazilian',
  links: [
    'linkedin.com/in/andrezigiotti/',
    'github.com/AndreZigiotti'
  ],
  experiences: [
    {
      startDate: 'Mar 2018',
      location: 'São Paulo, Brazil',
      description: 'I worked in the development of websites and web systems, building layouts and interfaces with technologies such as React and Angular and in the development of new features with WordPress and GraphQL. - I worked in the maintenance and development of features in startup applications.',
      enterprise: 'SitesWP',
      occupation: 'Full Stack Developer'
    }
  ],
  education: [
    {
      location: 'São Paulo, Brazil',
      startDate: 'Jan 2014',
      endDate: '2017',
      grade: 'Bachelor in Information Systems',
      institution: 'FMU - Faculdades Metropolitanas Unidas'
    }
  ],
  skills: ['JavaScript', 'TypeScript', 'Angular', 'React', 'NextJS', 'NodeJS', 'WordPress', 'Git'],
  languages: [
    {
      language: 'Portuguese',
      experience: 'Native'
    },
    {
      language: 'English',
      experience: 'Basic'
    }
  ],
  projects: [
    'andrezigiotti.dev.br - My personal website, where I carried out the development in all areas of the project. On this project I created the visual identity and layout, also the code development using React and the headless wordpress approach. I also performed all the installation and preparation of the server and deployment system with github and webhooks.',
    'Institutional website of SitesWP company. In this project I was responsible for the layout and front-end development using the headless wordpress concept. I also worked occasionally on the back-end, developing some features.',
    'Institutional CBLJ website - In this project, together with the client, I developed the layout and built the entire front-end application using Angular and the headless Wordpress approach.'
  ],
}

const bioPT: Bio = {
  picture: 'https://github.com/AndreZigiotti.png',
  name: 'André Luiz Gagliardi Zigiotti',
  occupation: 'Desenvolvedor Front-end',
  description: "Com uma experiência de 4 anos já desenvolvi diversos sites e aplicações web para diversos clientes e startups, utilizando os principais frameworks do mercado como Angular e React. Estou buscando um novo desafio profissional, onde eu possa continuar aprendendo e aprimorando meu conhecimento, trabalhar em equipe e gerar resultados positivos para a empresa.",
  email: 'algazigiotti@gmail.com',
  address: 'Rua Rio Peixe de Couro, 25 - São Paulo - SP - 05574-425',
  phone: '(11) 9 4272-2303',
  birthday: '19 Jul. 1995',
  nationality: 'Brasileiro',
  // salary: 'R$ 5.000,00 - R$ 6.000,00',
  links: [
    'linkedin.com/in/andrezigiotti/',
    'github.com/AndreZigiotti'
  ],
  experiences: [
    {
      startDate: 'Mar 2018',
      location: 'São Paulo, Brasil',
      description: 'Atuei no desenvolvimento de sites e sistemas web, construindo layouts e interfaces com tecnologias como React e Angular e no desenvolvimento de novas funcionalidades com WordPress e GraphQL. - Atuei na manutenção e desenvolvimento de funcionalidades para terceiros.',
      enterprise: 'SitesWP',
      occupation: 'Desenvolvedor Full Stack'
    }
  ],
  education: [
    {
      location: 'São Paulo, Brasil',
      startDate: 'Jan 2014',
      endDate: '2017',
      grade: 'Bacharel em Sistemas de Informação',
      institution: 'FMU - Faculdades Metropolitanas Unidas'
    }
  ],
  skills: ['JavaScript', 'TypeScript', 'Angular', 'React', 'NextJS', 'NodeJS', 'WordPress', 'Git'],
  languages: [
    {
      language: 'Inglês',
      experience: 'Básico'
    }
  ],
  projects: [
    'andrezigiotti.dev.br - Meu site pessoal, onde realizei o desenvolvimento em todas as áreas do projeto. Neste site realizei desde a criação da identidade visual e layout até o desenvolvimento do código utilizando React e a abordagem Headless WordPress. Também realizei toda a instalação e preparação do servidor e sistema de deploy com Github e webhooks.',
    'Site institucional da empresa SitesWP. Neste projeto fui responsável pela parte de layout e pelo desenvolvimento front-end utilizando React e o conceito de Headless WordPress. Também atuei pontualmente no back-end desenvolvendo algumas funcionalidades.',
    'Site institucional CBLJ - Neste projeto realizei, junto ao cliente, o desenvolvimento do layout e a construção de toda a aplicação front-end utilizando Angular e Headless WordPress.'
  ],
}

@Injectable({
  providedIn: 'root'
})
export class BioService {

  private readonly _bio = new BehaviorSubject<Bio>(bioPT)

  readonly bio$ = this._bio.asObservable()

  constructor() { }

  get bio(): Bio {
    return this._bio.getValue()
  }

  private set bio(bio: Bio) {
    this._bio.next(bio)
  }

  update(bio: Partial<Bio>) {
    this.bio = {...this.bio, ...bio}
  }
}
