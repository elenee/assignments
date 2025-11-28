import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getWishlist(lang) {
    const whishlist = {
      en: [{ id: 1, name: 'Headphones', price: 150 }],
      ka: [{ id: 1, name: 'ყურსასნენი', price: 150 }],
      ger: [{ id: 1, name: 'Kopfhörer', price: 150 }],
      fr: [{ id: 1, name: 'Écouteuses', price: 150 }],
      it: [{ id: 1, name: 'Cuffie', price: 150 }],
    };

    return whishlist[lang];
  }
}
