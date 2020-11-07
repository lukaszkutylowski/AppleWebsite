import React, {Component} from 'react';
import axios from 'axios';

class HomePage extends Component {

  render() {
    const styleHeight = {height : 15};
    const styleHeightEnd = {height : 30};

    return (
    <div>
      <span className="bigtitle">Witaj na stronie głównej</span>
			<div style={styleHeight}></div>	
			<div class="dottedline"></div>
    </div>
    );
  }
}
export default HomePage;
