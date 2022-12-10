import { User } from './models/User'

const user = new User({ name: 'ali', age: 44 })

user.on('change', () => {
  console.log('change #1')
})

user.on('change', () => {
  console.log('change #2')
})

user.on('save', () => {
  console.log('save was triggerd')
})

user.trigger('change')
