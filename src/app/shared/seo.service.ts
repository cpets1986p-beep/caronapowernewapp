import { Injectable } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Injectable({ providedIn: 'root' })
export class SeoService {
  constructor(private title: Title, private meta: Meta) {}

  setMeta(options: { title: string; description: string; keywords?: string; image?: string; url?: string }) {
    this.title.setTitle(options.title);
    this.meta.updateTag({ name: 'description', content: options.description });
    if (options.keywords) {
      this.meta.updateTag({ name: 'keywords', content: options.keywords });
    }
    if (options.image) {
      this.meta.updateTag({ property: 'og:image', content: options.image });
      this.meta.updateTag({ name: 'twitter:image', content: options.image });
    }
    if (options.url) {
      this.meta.updateTag({ property: 'og:url', content: options.url });
    }
  }
}
