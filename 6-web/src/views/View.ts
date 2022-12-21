import { HasId, Model } from '../models/Model'

export abstract class View<T extends Model<K>, K extends HasId> {
  // Mode<K> this K is comming from the second generic
  constructor(public parent: Element, public model: T) {
    this.bindModel()
  }

  abstract eventsMap(): { [key: string]: () => void }
  abstract template(): string

  bindModel(): void {
    this.model.on('change', () => this.render())
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
