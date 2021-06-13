import { makeAutoObservable } from "mobx"
import ItemStore from './ItemStore'

class ListStore {
  list = []
  currentApple = 0
  currentCount = 0
  eatenApple = 0
  eatenCount = 0
  constructor(list) {
    if (list) {
      this.list = list
    }
    makeAutoObservable(this)
  }
  addApple = () => {
    const count = Math.floor(Math.random() * 90 + 10) 
    this.currentApple++
    this.currentCount += count
    this.list.push(new ItemStore('红苹果-' + count, count))
  }
  removeApple = (id) => {
    this.list = []
    this.list.forEach(item => {
      if (item.id === id) {
        this.currentApple--
        this.currentCount -= item.count
        this.eatenApple++
        this.eatenCount += item.count
      }else{
        this.list.push(item)
      }
    })
  }
}

export default ListStore