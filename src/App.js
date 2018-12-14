import React, { Component } from 'react';
import { Provider } from 'react-redux';

import './App.css';
import Search from './containers/Search';
import Form from './containers/Form';
import List from './containers/List';

import storeCreator from './store';

const store = storeCreator();
// const store = storeCreator({videos: [{id:'1', title: 'Indila', url:'https://youtu.be/DF3XjEhJ40Y', tags:'indila'}], search: {title: 'la'} });

class App extends Component {
  render () {
    return (
      <Provider store={store}>
        <div className='App'>
          search by title: <Search searchField="title" />
          <Form />
          <List />
        </div>
      </Provider>
    )
  }
}

export default App;
