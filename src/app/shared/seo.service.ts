import { Injectable } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Injectable({ providedIn: 'root' })
export class SeoService {
  constructor(private title: Title, private meta: Meta) {}

  private getBaseUrl(): string {
    if (typeof window !== 'undefined') {
      return window.location.origin;
    }
    return '';
  }

  setMeta(options: { title: string; description: string; keywords?: string; image?: string; url?: string; canonical?: string; ogTitle?: string; ogDescription?: string }) {
    this.title.setTitle(options.title);
    this.meta.updateTag({ name: 'description', content: options.description });
    this.meta.updateTag({ property: 'og:title', content: options.ogTitle || options.title });
    this.meta.updateTag({ property: 'og:description', content: options.ogDescription || options.description });
    this.meta.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
    this.meta.updateTag({ name: 'twitter:title', content: options.ogTitle || options.title });
    this.meta.updateTag({ name: 'twitter:description', content: options.ogDescription || options.description });
    if (options.keywords) {
      this.meta.updateTag({ name: 'keywords', content: options.keywords });
    }
    if (options.image) {
      this.meta.updateTag({ property: 'og:image', content: options.image });
      this.meta.updateTag({ name: 'twitter:image', content: options.image });
    }
    if (options.url) {
      const baseUrl = this.getBaseUrl();
      const ogUrl = options.url.startsWith('http') ? options.url : `${baseUrl}${options.url}`;
      this.meta.updateTag({ property: 'og:url', content: ogUrl });
      this.meta.updateTag({ name: 'twitter:url', content: ogUrl });
    }
    if (options.canonical) {
      const baseUrl = this.getBaseUrl();
      const canonicalUrl = options.canonical.startsWith('http') ? options.canonical : `${baseUrl}${options.canonical}`;
      this.meta.updateTag({ rel: 'canonical', href: canonicalUrl });
    }
  }
}
