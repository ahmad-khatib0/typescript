import { faker } from '@faker-js/faker';

// export default 'red';
// this default export is recommended to avoid it in typescript, even though it works absolutely fine

export class User {
  name: string;
  location: {
    lat: number;
    lng: number;
  };

  constructor() {
    this.name = faker.name.firstName();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude()),
    };
  }
}
