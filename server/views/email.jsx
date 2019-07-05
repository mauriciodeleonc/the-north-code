const React = require("react");

class Email extends React.Component {
  render() {
    return (
      <div>
        <h1>New Landing from The North Code Website</h1>
        <div>
          <b>Name: </b>
          {this.props.name}
        </div>
        <div>
          <b>Email: </b>
          {this.props.email}
        </div>
        <div>
          <b>Phone: </b>
          {this.props.phone}
        </div>
        <div>
          <b>Message: </b>
          {this.props.message}
        </div>
      </div>
    );
  }
}

module.exports = Email;
