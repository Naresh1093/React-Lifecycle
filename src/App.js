import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Counter from './components/Counter';

class App extends Component {
  constructor(props) {
    super(props);
  }

  mount() {
    ReactDOM.render(
      <React.StrictMode>
        <Counter num={0} />
      </React.StrictMode>
      , document.getElementById('renderHere')
    )
  }

  unMount() {
    ReactDOM.unmountComponentAtNode(document.getElementById('renderHere'))
  }

  render() {
    return (
      <div className='container'>
        <div className='row'>
          <div className='col-md-12 text-center'>
            <h3 className='display-3 text-success'>React Lifecycle</h3>
          </div>
        </div>

        <div className='row'>
          <div className='col-md-12'>
            <button onClick={this.mount.bind(this)} className='btn btn-success'>Mount</button>
            <button onClick={this.unMount.bind(this)} className='btn btn-danger float-end'>UnMount</button>
          </div>
        </div>

        <section id='renderHere'></section>
      </div>
    )
  }
}

export default App;
