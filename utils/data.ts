import {EventCardProps} from '../components/EventCard';
import {FreeProfileItemProps} from '../components/FreeProfileItem';
import {InvitationCardProps} from '../components/InvitationCard';
const image1 = require('../assets/images/girl1.png');
const image2 = require('../assets/images/girl2.png');
const image3 = require('../assets/images/boy.png');
const profileImage = require('../assets/images/profileImage.png');

export const invitationsData: InvitationCardProps[] = [
  {
    category: 'Poolparty, Sexpo, Philosophie, Hédoniste',
    date: '09 Juil. 2020',
    image: image1,
    isVIP: true,
    location: '30 km autour de Paris, FRANCE',
    organization: 'Bleux',
    participantNumber: '125',
    prevente: 'AVEC PRÉVENTE',
    status: 'EN COURS',
    time: '16H50',
    title: 'RENCONTRES DES OU EN INCONNUUUUUUUUU...',
    type: 'PRIVÉ',
  },
  {
    category: 'Poolparty, Sexpo, Philosophie, Hédoniste',
    date: '09 Juil. 2020',
    image: image2,

    lineUp:
      'David guetta, Marc sinclar, Bob lenon, Celine Dion,Moris bertelo, Action Man, Tigressse, Dj wbx, Sussdf',
    location: 'Paris, FRANCE',
    organization: 'Bleux',
    participantNumber: '125',
    prevente: 'AVEC PRÉVENTE',
    status: 'PLANIFIÉ',
    time: '16H50',
    title: 'RENCONTRES INCONNUU...',
    type: 'PRO',
  },
  {
    category: 'Poolparty, Sexpo, Philosophie, Hédoniste',
    date: '09 Juil. 2020',
    image: image3,

    location: '30 km autour de Paris, FRANCE',
    organization: 'Bleux',
    participantNumber: '05',
    prevente: 'SANS PRÉVENTE',
    status: 'EN COURS',
    time: '16H50',
    title: 'RENCONTRES DES OU EN INCONNUUUUUUUUUUUU...',
    type: 'PRIVÉ',
  },
];

export const freeProfilesData: FreeProfileItemProps[] = [
  {
    age: '26 ans',
    avatar: profileImage,
    mindSet: 'Philosophe',
    name: 'Passionita',
    personality: 'Fureur de vivre',
  },
  {
    age: '19 ans',
    avatar: profileImage,
    mindSet: 'Philosophe',
    name: 'AiDan',
    personality: 'Fureur de vivre',
  },
  {
    age: '32 ans',
    avatar: profileImage,
    mindSet: 'Philosophe',
    name: 'Aiforlove',
    personality: 'Fureur de vivre',
  },
  {
    age: '26 ans',
    avatar: profileImage,
    mindSet: 'Philosophe',
    name: 'Passionita',
    personality: 'Fureur de vivre',
  },
  {
    age: '19 ans',
    avatar: profileImage,
    mindSet: 'Philosophe',
    name: 'AiDan',
    personality: 'Fureur de vivre',
  },
  {
    age: '32 ans',
    avatar: profileImage,
    mindSet: 'Philosophe',
    name: 'Aiforlove',
    personality: 'Fureur de vivre',
  },
];

export const personalityData = [
  {
    content: 'Buner',
    isSelected: true,
  },
  {
    content: 'Alter-Systémiste',
    isSelected: false,
  },
  {
    content: 'Estèle',
    isSelected: false,
  },
  {
    content: 'Digital Détox',
    isSelected: false,
  },
  {
    content: 'Festif(ve)',
    isSelected: false,
  },
  {
    content: 'Geek',
    isSelected: false,
  },
  {
    content: 'Kinky',
    isSelected: false,
  },

  {
    content: 'Sapiosexuel(le)',
    isSelected: false,
  },
  {
    content: 'Sans Etiquette',
    isSelected: false,
  },
];

export const mindSetData = [
  {
    content: 'Lunatique',
    isSelected: true,
  },
  {
    content: 'Honete',
    isSelected: false,
  },
  {
    content: 'Imaginatif(ve)',
    isSelected: false,
  },
  {
    content: 'Protecteur(trice)',
    isSelected: false,
  },
  {
    content: 'Patien.e',
    isSelected: false,
  },
];

export const EventData: EventCardProps[] = [
  {
    date: '01/03/2022',
    image: image1,
    isVIP: false,
    prevente: 'AVEC PRÉVENTE',
    status: 'SIGNALE',
    title: 'PETITES RENCONTRES ENTRE INCONNU',
    type: 'PRIVÉ',
    cashflow: '1000€',
  },
  {
    date: '01/03/2022',
    image: image2,
    prevente: 'SANS PRÉVENTE',
    status: 'EN COURS',
    title:
      'PETITES RENCONTRES ENTRE INCONNU ENTRE INCONNU ENTRE INCONNUUPPPPPPPPP',
    type: 'PRO',
    cashflow: '1000€',
  },
  {
    date: '01/03/2022',
    image: image3,
    prevente: 'SANS PRÉVENTE',
    status: 'SIGNALE - PLANIFIE',
    title: 'RENCONTRES DES OU EN INCONNUUUUUUUUUUUU...',
    type: 'PRIVÉ',
    cashflow: '1000€',
  },
  {
    date: '01/03/2022',
    image: image1,
    isVIP: true,
    prevente: 'AVEC PRÉVENTE',
    status: 'SIGNALE - MODIFIE',
    title: 'PETITES RENCONTRES ENTRE INCONNU',
    type: 'PRIVÉ',
    cashflow: '1000€',
  },
  {
    date: '01/03/2022',
    image: image2,
    prevente: 'AVEC PRÉVENTE',
    status: 'SIGNALE - MODIFIE',
    title:
      'PETITES RENCONTRES ENTRE INCONNU ENTRE INCONNU ENTRE INCONNUUPPPPPPPPP',
    type: 'PRO',
    cashflow: '1000€',
  },
  {
    date: '01/03/2022',
    image: image3,
    prevente: 'SANS PRÉVENTE',
    status: 'NON PUBLIE',
    title: 'RENCONTRES DES OU EN INCONNUUUUUUUUUUUU...',
    type: 'PRIVÉ',
    cashflow: '1000€',
  },
];
