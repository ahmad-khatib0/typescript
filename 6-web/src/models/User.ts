import { AxiosResponse } from 'axios'

import { Eventing } from './Eventing'
import { Sync } from './Sync'
import { Attributes } from './Attributes'

export interface UserProps {
  id?: number
  name?: string
  age?: number
}

const rootUrl = 'http://localhost:3000/users'
export class User {
  public events: Eventing = new Eventing()
  public sync: Sync<UserProps> = new Sync<UserProps>(rootUrl)
  public attributes: Attributes<UserProps>

  constructor(attrs: UserProps) {
    this.attributes = new Attributes(attrs)
  }

  get on() {
    return this.events.on
  }

  get trigger() {
    return this.events.trigger
  }

  get get() {
    return this.attributes.get
  }

  set(update: UserProps): void {
    this.attributes.set(update)
    this.events.trigger('change')
  }

  fetch(): void {
    const id = this.get('id') // its referncing this get , not that inside Attributes class,
    // does it matter, it depends, e,g here it does not, but for example with this.set(response.data) inside the
    // then block , invocking this set will trigget the event emitter, while invocking the set inside the
    // attributes class will not,

    if (typeof id != 'number') {
      throw new Error('can not fetch without an ID!')
    }
    this.sync.fetch(id).then((response: AxiosResponse): void => this.set(response.data))
  }

  save(): void {
    this.sync
      .save(this.attributes.getAll())
      .then((res: AxiosResponse): void => this.trigger('save'))
      .catch(() => this.trigger('error'))
  }
}
