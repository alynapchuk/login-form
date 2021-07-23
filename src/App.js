import React, { Component } from 'react';
import LoginForm from './components/LoginForm';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      credentials: {
        huxley: {
          password: 'blah'
        }
      }
    }
  }

  render() {
    return (
      <div className="App">
        <LoginForm handleSubmit={this._checkCredentials} />
      </div>
    );
  }

  _checkCredentials = (username, password) => {
    console.log('checking credentials');
    const userObj = this.state.credentials[username];
    if (userObj && (userObj.password === password)) {
      return {
        isValid: true,
        message: 'Login Successful!'
      };
    } else {
      return {
        isValid: false,
        message: 'Login Failed'
      };
    }
  }

}

export default App;
