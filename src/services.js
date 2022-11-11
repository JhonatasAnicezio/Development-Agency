import banner1 from './img/banner1.png';
import banner2 from './img/banner2.png';
import banner3 from './img/banner3.png';

import profile1 from './img/profile1.jpg';
import profile2 from './img/profile2.jpg';
import profile3 from './img/profile3.jpg';
import profile4 from './img/profile4.jpg';

import {
  faMobileAlt, faShoppingCart, faPaintBrush,
  faGlobe, faHandsHelping, faServer,
} from '@fortawesome/free-solid-svg-icons';

export const listBanner = [
  {
    title: 'Quer criar um e-commerce?',
    description: 'Conte conosco, temos mais de 30 lojas no portifólio.',
    img: banner1,
    alt: 'Projetos de e-commerce',
    link: 'Ver portifólio',
  },
  {
    title: 'Esta querendo tirar o projeto do papel?',
    description: 'Nossa equipe de engenharia de software está pronta para lhe atender.',
    img: banner2,
    alt: 'Engenharia de Software',
    link: 'Entre em contato',
  },
  {
    title: 'Está buscando manuntenção no seu Software?',
    description: 'A hDC conta com engenheiros altamente qualificados para resolver seu problema.',
    img: banner3,
    alt: 'Manuntenção em Software',
    link: 'Etre em contato',
  },
];

export const linksHeader = [
  {
    href: '',
    id: 'home-menu',
    name: 'Home',
  },
  {
    href: '',
    id: 'about-menu',
    name: 'A agência',
  },
  {
    href: '',
    id: 'services-menu',
    name: 'Serviços',
  },
  {
    href: '',
    id: 'team-menu',
    name: 'Time',
  },
  {
    href: '',
    id: 'portifolio-menu',
    name: 'Projetos',
  },
  {
    href: '',
    id: 'contact-menu',
    name: 'Contato',
  },
];

export const diferenciais = [
  'Utilização de Machine Learning',
  'Layout responsivo para todos os dispositivos',
  'Integração com diversos sistemas no mercado',
  'Sistema de pagamento próprio',
  'Desenvolvimento com metodologia ágil',
];

export const especialidades = [
  {
    icon: faMobileAlt,
    title: 'Aplicativos Nativos',
    description: 'Utilizamos o real poder dos dispositivos móveis construindo aplicativos nativos.',
  },
  {
    icon: faShoppingCart,
    title: 'E-commerces',
    description: 'Temos uma plataforma própria de e-commerce que se adapta a qualquer regra de negócio(B2C e B2B).',
  },
  {
    icon: faPaintBrush,
    title: 'Design Criativo',
    description: 'Nossos designs são especializados em UI/UX e tambem possuem vasta experiência no mercado de software.',
  },
  {
    icon: faGlobe,
    title: 'Experts em SEO',
    description: 'Com nosso serviço de marketing seu site será melhor posicionado no Google e venderá mais.',
  },
  {
    icon: faHandsHelping,
    title: 'Suporte 24/7',
    description: 'Você sempre tera alguem da equipe disponivel para suporte, em diferentes plataformas. (chat, email, skype).',
  },
  {
    icon: faServer,
    title: 'Experiência em servidores',
    description: 'Garantimos uptime e também rápido tempo de resposta do seu site para o seu cliente.',
  },
];

export const arrData = [
  {
    circle: 'A',
    description: 'Projetos entregues',
    value: 60,
  },
  {
    circle: 'B',
    description: 'Clientes felizes',
    value: 254,
  },
  {
    circle: 'C',
    description: 'Colaboradores',
    value: 32,
  },
  {
    circle: 'D',
    description: 'Cafézinhos',
    value: 5423,
  }
];

export const time = [
  {
    img: profile1,
    name: 'Jhon Doe',
    office: 'Software Developer',
  },
  {
    img: profile2,
    name: 'Maria Mariana',
    office: 'SEO Consultant',
  },
  {
    img: profile3,
    name: 'Paul Baker',
    office: 'Project Manager',
  },
  {
    img: profile4,
    name: 'Karina Katarina',
    office: 'UX/UI Designer',
  },
];

export const filterBtn = [
  {
    id: 'all-btn',
    name: 'Todos',
    class: 'main-btn filter-btn active'
  },
  {
    id: 'dev-btn',
    name: 'Desenvolvimento',
    class: 'main-btn filter-btn'
  },
  {
    id: 'dsg-btn',
    name: 'Design',
    class: 'main-btn filter-btn'
  },
  {
    id: 'seo-btn',
    name: 'Seo',
    class: 'main-btn filter-btn'
  },
];