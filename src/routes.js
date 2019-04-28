import HomePageContainer from './containers/HomePageContainer/HomePageContainer';
import RegionalContainer from './containers/RegionalContainer/RegionalContainer';
import EventDitailPageContainer from './containers/EventDetailPageContainer/EventDetailPageContainer';

export const Routes = [
  {
    isExact: true,
    path: '/',
    name: 'Home',
    component: HomePageContainer,
  },
  {
    isExact: false,
    path: '/region/:name',
    name: 'Region',
    component: RegionalContainer,
  },
  {
    isExact: false,
    path: '/event-details/:id',
    name: 'Details',
    component: EventDitailPageContainer,
  }
];
