import React, { Component } from "react";
import { Provider } from "react-redux";

import "./App.css";
import Search from "./containers/Search";
import Form from "./containers/Form";
import List from "./containers/List";

import { loadState, saveState } from "./localStorage";
import throttle from "lodash/throttle";
import storeCreator from "./store";

const persistedState = loadState();
const store = storeCreator(persistedState);

store.subscribe(
  throttle(() => {
    saveState( { videos: store.getState().videos } );
    // saveState(store.getState());
  }, 1000)
);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Search />
          <Form />
          <List />
        </div>
      </Provider>
    );
  }
}

export default App;
