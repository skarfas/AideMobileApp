import {loginAcc} from '../../features/Login/LoginActions';
import {connect} from 'react-redux';
import Login from '../../components/Login/Login';

const mapStateToProps = (state, props) => {
  console.log('LoginContainer', state)
    return{
      navigation: props.navigation
    };
  };

  const mapDispatchToProps = (dispatch) => {
    return {
      loginButtonClick: (email,password) => {
        dispatch(loginAcc(email,password))
      }
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(Login);