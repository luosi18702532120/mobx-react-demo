import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'
import List from './components/Apple/List'
import { RootStore, RootStoreProvider } from './stores/RootStore';

const rootStore = new RootStore()

ReactDOM.render(
  <RootStoreProvider store={rootStore}>
    <List />
  </RootStoreProvider>,
  document.getElementById('root')
);

