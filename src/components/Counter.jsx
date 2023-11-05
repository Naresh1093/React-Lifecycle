import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isView : false
        }
    }

    increment() {
        ReactDOM.render(<React.StrictMode>
            <Counter num = { this.props.num + 1} />
        </React.StrictMode>, document.getElementById('renderHere'))
    }

    // mount methods
    componentWillMount() {
        console.log("component will mount called");
    }

    // update methods
    componentWillReceiveProps(nP,nC) {
        console.log("component will receive props(deprecated)")
        console.log("newProps =", nP)
        if(nP.num >= 5) {
            this.setState({
                isView : true
            })
        }
    }

    shouldComponentUpdate(nP,nS) {
        console.log("should component update or not")
        console.log("newProps =", nP)
        console.log("newState =", nS)
        return true;
    }

    componentWillUpdate(nP,nS) {
        console.log("component will update (deprecated)")
        console.log("newProps =", nP)
        console.log("newState =", nS)
    } 


    render() {
        console.log("component rendered");
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-12 text-center">
                        <h3 className="display-3 text-info">Counter</h3>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-12">
                        <h1 className="text-success">Count = { this.props.num } </h1>
                        <h1 className={this.state.isView ? "display-2 text-center text-success" : "display-2 text-center text-warning"}>
                            {
                                this.state.isView ? "Task Completed Successfully" : "Need some more counts"
                            }
                        </h1>

                        <div>
                            {
                                this.state.isView ? null : <button className="btn btn-outline-success" onClick={ this.increment.bind(this) }>Increment+1</button>
                            }
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    componentDidMount() {
        console.log("component Did Mount Called")
    }

    componentDidUpdate(oP,oS) {
        console.log("component Did update")
        console.log("oldProps =", oP)
        console.log("oldState =",oS)
    }

    componentWillUnmount() {
        console.log("component unMounted successfully");
    }
}

export default Counter;