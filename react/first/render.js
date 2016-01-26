var HelloMessage = React.createClass({
  render: function() {
    return <h2> Hello {this.props.name} ! </h2>;
  }
});

ReactDOM.render(<HelloMessage name="Leiver"/>, document.getElementById('react-test1'));
ReactDOM.render(<HelloMessage name="Other user"/>, document.getElementById('react-test2'));
