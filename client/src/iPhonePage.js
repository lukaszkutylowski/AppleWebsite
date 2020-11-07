import React, {Component} from 'react';
import axios from 'axios';

class iPhonePage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      comments11 : [],
      comments12 : []
    }
  }

  // changeHandler = e => {
  //   this.setState({[e.target.comments] : e.target.value})
  // }

  componentDidMount() {
    console.log(this.state)
    axios.get('http://localhost:8080/api/comments/11', this.state)
      .then(response => {
        this.setState({ comments11 : response.data});
        console.log(response)
      })
      .catch(error => {
        console.log(error)
      })
      axios.get('http://localhost:8080/api/comments/12', this.state)
      .then(response => {
        this.setState({ comments12 : response.data});
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
    const clearBoth = {clear : 'both'};
    const moduleStyle = { width : 360, float : 'left'};

    return (
      <div>
      <span className="bigtitle">Wybierz swój model</span>
			<div style={styleHeight}></div>
			
			<div class="dottedline"></div>

      <div>
        <div style={moduleStyle}>
          <img src="..\img\iphone11.jpg"/>
          <br/>
          iPhone 11
          <div style={{backgroundColor : 'gray'}}>
            <table>
              <tbody>
                {
                this.state.comments11.map(
                  comment =>
                <tr key = {comment.commentid}>
                  <tr>Użytkownik: {comment.username}</tr>
                  <tr>Opinia: {comment.description}</tr>
                  <tr><div style={{height : 10, backgroundColor : 'white', width : 360}}></div></tr>
                </tr>
                )
                }
              </tbody>
            </table>
            <div style={{height : 10}}></div>
          </div>
        </div>
        <div style={moduleStyle}>
          <img src="..\img\iphone12.png"/>
          <br/>
          iPhone 12
          <div style={{backgroundColor : 'gray'}}>
            <table>
              <tbody>
                {
                this.state.comments12.map(
                  comment =>
                <tr key = {comment.commentid}>
                  <tr>Użytkownik: {comment.username}</tr>
                  <tr>Opinia: {comment.description}</tr>
                  <tr><div style={{height : 10, backgroundColor : 'white', width : 360}}></div></tr>
                </tr>
                )
                }
              </tbody>
            </table>
            <div style={{height : 10}}></div>
          </div>
        </div>
        <div style={clearBoth}></div>
      </div>

      </div>
    );
  }
}
export default iPhonePage;
