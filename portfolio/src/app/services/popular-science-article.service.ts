import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {Publication} from '../models/publication.model';
import {PopularScienceArticle} from '../models/popular-science.article';

@Injectable({
  providedIn: 'root',
})
export class PopularScienceArticleService {
  private articles: PopularScienceArticle[] = [
    {
      id: 0,
      title: '',
      description: 'description',
      url: 'https://www.lingoblog.dk/en/can-sounds-have-meaning-the-peculiar-case-of-west-flemish-tj-and-dj/',
      authors: 'Jeroen Willemsen',
      year: 2021
    },
    {
      id: 1,
      title: '',
      description: 'description',
      url: 'https://www.lingoblog.dk/en/microphone-in-the-mud-by-laura-robinson/',
      authors: 'Jeroen Willemsen',
      year: 2021
    },
    {
      id: 2,
      title: '',
      description: 'description',
      url: 'https://www.lingoblog.dk/en/2019-international-year-of-indigenous-languages/',
      authors: 'Jeroen Willemsen',
      year: 2021
    },
    {
      id: 3,
      title: '',
      description: 'description',
      url: 'https://www.lingoblog.dk/en/fieldwork-in-the-amazon-rainforest-an-interview-with-ana-paulla-braga-mattos/',
      authors: 'Jeroen Willemsen',
      year: 2021
    },
    {
      id: 4,
      title: '',
      description: 'description',
      url: 'https://www.lingoblog.dk/en/fieldwork-in-saint-croix-an-interview-with-kristoffer-friis-boeegh/',
      authors: 'Jeroen Willemsen',
      year: 2021
    },
    {
      id: 5,
      title: '',
      description: 'description',
      url: 'https://www.lingoblog.dk/en/why-are-there-so-many-different-types-of-r/',
      authors: 'Jeroen Willemsen',
      year: 2021
    },
    {
      id: 6,
      title: '',
      description: 'description',
      url: 'https://www.lingoblog.dk/en/interview-with-william-mcgregor/',
      authors: 'Jeroen Willemsen',
      year: 2021
    },
    {
      id: 7,
      title: '',
      description: 'description',
      url: 'https://www.lingoblog.dk/lingvistisk-feltarbejde-i-nusa-tenggara-timu-et-interview-med-jeroen-willemsen/',
      authors: 'Jeroen Willemsen',
      year: 2021
    },
    {
      id: 8,
      title: '',
      description: 'description',
      url: 'https://www.lingoblog.dk/kan-lyde-have-betydning-det-ejendommelige-tilfaelde-af-vestflamsk-tj-og-dj/',
      authors: 'Jeroen Willemsen',
      year: 2021
    },
    {
      id: 9,
      title: '',
      description: 'description',
      url: 'https://www.lingoblog.dk/nl/kunnen-klanken-betekenis-hebben-het-bizarre-geval-van-de-west-vlaamse-tj-en-dj/',
      authors: 'Jeroen Willemsen',
      year: 2021
    },
    {
      id: 10,
      title: '',
      description: 'description',
      url: 'https://www.lingoblog.dk/nl/2019-internationaal-jaar-van-de-inheemse-talen/',
      authors: 'Jeroen Willemsen',
      year: 2021
    },
    {
      id: 11,
      title: '',
      description: 'description',
      url: 'https://www.lingoblog.dk/en/fieldwork-in-nusa-tenggara-timur-an-interview-with-jeroen-willemsen/',
      authors: 'Jeroen Willemsen',
      year: 2021
    },
    {
      id: 12,
      title: '',
      description: 'description',
      url: 'https://www.sciencenordic.com/denmark-forskerzonen-language/2019-is-the-uns-international-year-of-indigenous-languages-and-we-need-it-to-be/1461854',
      authors: 'Jeroen Willemsen',
      year: 2021
    },
    {
      id: 13,
      title: '',
      description: 'description',
      url: 'https://videnskab.dk/kultur-samfund/sprogforskere-advarer-halvdelen-af-verdens-sprog-risikerer-at-uddoe-inden-udgangen-af-dette-aarhundrede/',
      authors: 'Jeroen Willemsen',
      year: 2021
    },
    {
      id: 14,
      title: '',
      description: 'description',
      url: 'https://www.sciencenordic.com/denmark-forskerzonen-linguistics/linguists-need-preservation-of-languages-to-study-human-language/1553443',
      authors: 'Jeroen Willemsen',
      year: 2021
    },
    {
      id: 15,
      title: '',
      description: 'description',
      url: 'https://videnskab.dk/kultur-samfund/lingvister-har-brug-for-sprogbevaring-for-at-studere-sprog-som-menneskeligt-faenomen/',
      authors: 'Jeroen Willemsen',
      year: 2021
    },

  ];
  constructor() {
  }

  getDocuments(): Observable<PopularScienceArticle[]> {
    return of(this.articles);
  }
}
