import { makeAutoObservable } from "mobx"

class ItemStore {
  id = Math.random()
  title = ''
  count = 0
  constructor(title, count) {
    this.title = title
    this.count = count
    makeAutoObservable(this)
  }
}

export default ItemStore