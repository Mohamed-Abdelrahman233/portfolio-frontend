import { Routes } from '@angular/router';
import { Layout } from './layout/layout';
import { Home } from './layout/home/home';
import { About } from './layout/about/about';
import { Contact } from './layout/contact/contact';
import { Service } from './layout/services/service';
import { Project } from './layout/project/project';
import { Dashboard } from './dashboard/dashboard';
import { Hame as HomeDashboard } from './dashboard/home/hame';
import { About as AboutDashboard } from './dashboard/about/about';
import { Contact as ContactDashboard } from './dashboard/contact/contact';
import { Service as ServiceDashboard } from './dashboard/service/service';
import { Project as ProjectDashboard } from './dashboard/project/project';
import { Skill as SkillDashboard } from './dashboard/skill/skill';
import { Notfound } from './shared/notfound/notfound';

export const routes: Routes = [
  {
    path: '',
    component: Layout,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: Home },
      { path: 'about', component: About },
      { path: 'contact', component: Contact },
      { path: 'services', component: Service },
      { path: 'project', component: Project },
    ],
  },
  {
    path: 'dashboard',
    component: Dashboard,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeDashboard },
      { path: 'about', component: AboutDashboard },
      { path: 'contact', component: ContactDashboard },
      { path: 'service', component: ServiceDashboard },
      { path: 'project', component: ProjectDashboard },
      { path: 'skill', component: SkillDashboard },
    ],
  },
  { path: '**', component: Notfound },
];
