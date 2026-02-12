import { Routes } from '@angular/router';
import { DataBinding } from './components/data-binding/data-binding';
import { Variables } from './components/variables/variables';
import { Signal } from './components/signal/signal';

export const routes: Routes = [
    {
        path: 'data-binding',
        component: DataBinding
    },
    {
        path: 'signal',
        component: Signal
    },
    {
        path: 'variables',
        component: Variables
    }
];
