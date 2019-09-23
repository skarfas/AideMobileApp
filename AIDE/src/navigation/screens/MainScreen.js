import React, {Fragment, Component} from 'react';
import MainContainer from '../containers/MainContainer'

export class MainScreen extends Component {

    render() {
      return (
          <MainContainer navigation={this.props.navigation} />
      );
    }
}
