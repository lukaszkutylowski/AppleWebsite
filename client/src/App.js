import React from 'react';

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect
} from 'react-router-dom';

// Pages
import CommentForm from './CommentForm';
import LoginForm from './LoginForm';
import HomePage from './HomePage';
import AboutPage from './AboutPage';
import iPhonePage from './iPhonePage';

class App extends React.Component {
  
  state = {
    comments : []
  }
  
  render() {
    const comments = this.state;
    
    return (
      <div>
        <Router>
          <Route path="/home" component={HomePage} />
          <Route path="/login" component={LoginForm} />
          {this.state.comments.map(comments => <LoginForm info={comments}/>)}
          <Route path="/register" component={CommentForm} />
          {this.state.comments.map(comments => <CommentForm info={comments}/>)}
          <Route path="/iphone" component={iPhonePage} />
          {this.state.comments.map(comments => <iPhonePage info={comments}/>)}
          <Route path="/about" component={AboutPage} />
        </Router>
      </div>
    )
  }
}

export default App;
