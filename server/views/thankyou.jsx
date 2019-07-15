const React = require("react");

class ThankYou extends React.Component {
  render() {
    return (
      <div>
        <h1>Thanks for contacting us!</h1>
        <div>
          <h4>In the following 5 work days you will be contacted by Juan Manuel or Mauricio</h4>
          <p>We'll try to reach you as follows:</p>
          <ol>
              <li>Email</li>
              <li>WhatsApp</li>
              <li>Call</li>
          </ol>
          <p>We try the next contact method after 2 days without hearing back from you.</p>
          <p>We do not share your contact information without your consent.</p>
        </div>
        <div>
            <h5>The North Code</h5>
            <p>WhatsApp: +52 1 818 464 2850</p>
            <p>Email: hola@thenorthcode.com</p>
        </div>
      </div>
    );
  }
}

module.exports = ThankYou;
