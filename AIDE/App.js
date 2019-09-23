import React from 'react';
import {Provider} from 'react-redux';
import {dataStore} from './src/store/dataStore';
import {createRootNavigator} from './src/navigation/containers/Navigator';
import {createAppContainer} from 'react-navigation';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      signedIn: false,
      checkedSignIn: false
    };
  }

  render() {
    const { checkedSignIn, signedIn } = this.state;
    const Layout = createAppContainer(createRootNavigator(signedIn));

    return (
      <Provider store={dataStore}>
        <Layout/>
      </Provider>
    );
  }
};
