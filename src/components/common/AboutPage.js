import React from 'react'

class About extends React.Component {

  constructor(props) {
    super(props);
    console.log("aboutje");
  }

  render() {
    console.log("booksnica");
    return (
      <div>
        <h1>About Page</h1>


        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dzoni Vokeri Dzeci Civasi A aliquam architecto at exercitationem ipsa iste molestiae nobis odit! Error quo reprehenderit velit! Aperiam eius non odio optio, perspiciatis suscipit vel?</p>
      </div>
    );
  }

}

export default About;
