import { createContext, useContext } from "react";
import ListStore from "./Apple/ListStore";

class RootStore {
  constructor() {
    this.listStore = new ListStore()
  }
}

const RootStoreContext = createContext()

const RootStoreProvider = ({ store, children }) => {
  return (
    <RootStoreContext.Provider value={store}>
      {children}
    </RootStoreContext.Provider>
  )
}

const useRootStore = () => {
  return useContext(RootStoreContext)
}

export {
  RootStore,
  RootStoreProvider,
  useRootStore
}