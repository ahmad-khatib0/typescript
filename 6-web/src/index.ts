import { User } from './models/User'

// const user = new User({ id: 1 })
// user.set({ name: 'new name' })
// user.set({ age: 44 })
const user = new User({ name: 'new record ', age: 444 })
user.save()
