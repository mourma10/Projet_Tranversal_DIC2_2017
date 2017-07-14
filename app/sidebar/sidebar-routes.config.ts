import {RouteInfo} from './sidebar.metadata';

export const ROUTES: RouteInfo[] = [
    {path: 'dashboard', title: 'Dashboard', icon: 'dashboard', class: ''},
    {path: 'trading', title: 'Trading', icon: 'compare_arrows', class: ''},
    //{path: 'dashboardrepresentant', title: 'Dashboard Representant', icon: 'dashboard', class: ''},
    //{path: 'dashboardclient', title: 'Dashboard Client', icon: 'dashboard', class: ''},
    //{ path: 'user', title: 'User Profile',  icon:'person', class: '' },
    //{ path: 'table', title: 'Table List',  icon:'content_paste', class: '' },
    //{ path: 'typography', title: 'Typography',  icon:'library_books', class: '' },
    //{ path: 'icons', title: 'Icons',  icon:'bubble_chart', class: '' },
    //{ path: 'maps', title: 'Maps',  icon:'location_on', class: '' },
    //{ path: 'notifications', title: 'Notifications',  icon:'notifications', class: '' },
    {path: 'representants', title: 'Mes representants', icon: 'supervisor_account', class: ''},
    {path: 'transporteurs', title: 'Mes transporteurs', icon: 'directions_boat', class: ''},
    //{ path: 'upgrade', title: 'Upgrade to PRO',  icon:'unarchive', class: 'active-pro' },
];
