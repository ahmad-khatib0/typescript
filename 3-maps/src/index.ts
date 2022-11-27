/// <reference types="@types/google.maps" />
import { User } from './User';
import { Company } from './Company';

const el = document.getElementById('map') as HTMLElement;
new google.maps.Map(el, {
  zoom: 1,
  center: { lat: 0, lng: 0 },
});
