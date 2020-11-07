import React, {Component} from 'react';
import axios from 'axios';

class AboutPage extends Component {

  render() {
    const styleHeight = {height : 15};
    const styleHeightEnd = {height : 30};

    return (
    <div>
      <span className="bigtitle">O stronie</span>
			<div style={styleHeight}></div>	
			<div class="dottedline"></div>
      <div>
        <p>Developerem aplikacji jest Łukasz Kutyłowski.</p><br/>
        <p>Strona została stworzona w ramach nauki technologii webowych.</p><br/>
      </div>
    </div>
    );
  }
}
export default AboutPage;
