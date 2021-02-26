class App extends React.Component {
  render() {
    return (
      <div>
        <Hello 
          to="Pam" 
          from="Jim" 
          bangs={4}
          img="https://media.npr.org/assets/img/2014/05/08/simp2006_homerarmscrossed_f_custom-ec94cc7a10463aa8260b2c5a9a3ebea29c7ecbfe-s800-c85.jpg"
        />

        <Hello to="Michael" from="Dwight" />
        <Hello to="Miguel" from="Google" />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))