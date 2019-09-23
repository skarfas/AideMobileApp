import React, {Fragment, Component} from 'react';
import LoginContainer from '../containers/LoginContainer'
import { Image, StyleSheet, View, Button } from "react-native";

export class LoginScreen extends Component {

    render() {
      return (
          <LoginContainer navigation={this.props.navigation}/>
      );
    }
}
