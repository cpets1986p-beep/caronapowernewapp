import { RenderMode, ServerRoute } from '@angular/ssr';
import { Header } from './header/header';
import { Home } from './home-hv-engineering/home-hv-engineering';

export const serverRoutes: ServerRoute[] = [
  {
    path: '**',
    renderMode: RenderMode.Prerender
  }
];