import { User } from '../models/User'

export class UserForm {
  constructor(public parent: Element, public model: User) {
    this.bindModel()
  }

  bindModel(): void {
    this.model.on('change', () => this.render())
  }
  eventsMap(): { [key: string]: () => void } {
    return {
      'click:.set-age': this.onSetAgeClick,
      'click:.set-name': this.onSetNameClick,
    }
  }

  onSetAgeClick = (): void => {
    this.model.setRandomAge()
  }

  onSetNameClick = (): void => {
    const input = this.parent.querySelector('input')!
    const name = input.value
    this.model.set({ name })
  }

  template(): string {
    return `
    <div>
      <h1> User Form </h1>      
      <div> User name: ${this.model.get('name')}</div>
      <div> User age: ${this.model.get('age')}</div>
      <input /> 
       <button class='set-name'>change name</button>
       <button class='set-age'> set random age </button>
    </div>`
  }

  bindEvents(fragment: DocumentFragment): void {
    // a document fragment in general. Its purpose is to kind of hold some HTML inside of memory
    // before it actually gets attached to the DOM.
    const eventsMap = this.eventsMap()
    for (let key in eventsMap) {
      const [eventName, selector] = key.split(':')
      fragment.querySelectorAll(selector).forEach((el) => {
        el.addEventListener(eventName, eventsMap[key])
      })
    }
  }
  render(): void {
    this.parent.innerHTML = ''
    const templateElement = document.createElement('template')
    templateElement.innerHTML = this.template()

    this.bindEvents(templateElement.content)
    this.parent.append(templateElement.content)
  }
}
