import { User } from './models/User'

// const user = new User({ id: 1 })
// user.set({ name: 'new name' })
// user.set({ age: 44 })
const user = new User({ id: 1, name: 'newer name', age: 3342 })

// console.log(user.get('name')) // this will fail, because (if we didn't make get method inside Attributes an anonymous function)
//'this' refers to the use in the context of this:
// return this.data[key] in the get method inside the Attributes class, so it becomes user.data[key],
// which will definitely throw an error becuase there is no such a thing named user in Attributes class

user.on('save', () => console.log(user))
// user.set({ name: 'new name' })
user.save()
