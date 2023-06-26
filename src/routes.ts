import { Routes } from '@angular/router'
import { HomeComponent } from './app/components/home/home.component'
import { DetailsComponent } from './app/components/details/details.component'

const routeConfig: Routes = [
    {
        path: '',
        component: HomeComponent,
        title: 'Home page'
    },
    {
        path: 'details/:id',
        component: DetailsComponent,
        title: 'Home details'
    }
]

export default routeConfig