import { Routes } from '@angular/router';
import { CookbookListComponent } from './modules/cookbook/components/cookbook-list/cookbook-list.component';
import { LoginComponent } from './modules/users/components/login/login.component';
import { RecipeListComponent } from './modules/recipes/components/recipe-list/recipe-list.component';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: RecipeListComponent,
  },
  {
    path: 'cookbooks',
    pathMatch: 'full',
    component: CookbookListComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
];
