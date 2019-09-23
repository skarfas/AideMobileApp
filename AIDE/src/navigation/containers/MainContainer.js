import Main from '../../components/Main/Main';
import {connect} from 'react-redux';
import { tsConstructorType } from '@babel/types';


const mapStateToProps = (state, props) => {
  console.log('MainContainer', state)
    return{
      email: state.login.email,
      password: state.login.password,
      navigation: props.navigation,
    };
  };

export default connect(mapStateToProps)(Main);