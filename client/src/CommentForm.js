import React, {Component} from 'react';
import axios from 'axios';

class CommentForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      model : '',
      username : '',
      description : ''
    }
  }

  changeHandler = e => {
    this.setState({[e.target.name] : e.target.value})
  }

  submitHandler = e => {
    e.preventDefault()
    console.log(this.state)
    axios.post('http://localhost:8080/api/comments/save', this.state)
      .then(response => {
        console.log(response)
      })
      .catch(error => {
        console.log(error)
      })

  }

  render() {
    const { model, username, description } = this.state;
    const styleHeight = {height : 15};
    const styleHeightEnd = {height : 30};
    
    return (
    
      <div>
      <span className="bigtitle">Napisz opinię</span>
			<div style={styleHeight}></div>
			
			<div class="dottedline"></div>

      <div>
        <form onSubmit={this.submitHandler}>
        <div>
            Model:<br/>
            <input
              type="text"
              name="model"
              value={model}
              onChange={this.changeHandler}
            />
          </div>
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
            Opis modelu:<br/>
            <input
              type="text"
              name="description"
              value={description}
              onChange={this.changeHandler}
            />
          </div>
          <button type="submit">Zapisz</button>
        </form>
        <div style={styleHeightEnd}></div>
      </div>
    </div>
    );
  }
}
export default CommentForm;
