import React, {Component} from 'react';
import axios from 'axios';

class LoginForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email : '',
      password : '',
      username : ''
    }
  }

  changeHandler = e => {
    this.setState({[e.target.name] : e.target.value})
  }

  submitHandler = e => {
    e.preventDefault()
    console.log(this.state)
    // axios.post('http://localhost:8080/api/clients/' + this.state.username, this.state)
    // axios.post('http://localhost:8080/api/clients/' + this.state.username, this.state)
    // axios.get('http://localhost:8080/api/clients/user/damian', this.state)
    axios.get('http://localhost:8080/api/clients/user/' + this.state.username, this.state)
      .then(response => {
        console.log(response)
      })
      .catch(error => {
        console.log(error)
      })

  }

  render() {
    const { password, username } = this.state;
    const styleHeight = {height : 15};
    const styleHeightEnd = {height : 30};

    return (
      <div>
      <span className="bigtitle">Logowanie</span>
			<div style={styleHeight}></div>
			
			<div class="dottedline"></div>

      <div>
        <form onSubmit={this.submitHandler}>
          <div>
            Nazwa użytkownika:<br/>
            <input
              type="text"
              name="username"
              value={username}
              onChange={this.changeHandler}
            />
          </div>
          <div>
            Hasło:<br/>
            <input
              type="text"
              name="password"
              value={password}
              onChange={this.changeHandler}
            />
          </div>
          <button type="submit">Zarejestruj</button>
        </form>
        <div style={styleHeightEnd}></div>
      </div>
    </div>
    );
  }
}
export default LoginForm;
