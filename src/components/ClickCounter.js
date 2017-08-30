import React from 'react';
import CounterPanel from "./CounterPanel";

class ClickCounter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };

        this.count = this.count.bind(this);
    }

    count() {
        this.setState({
            count: this.state.count + 1
        })
    }

    render() {
        return (
            <div>
                <h1>{this.state.count}</h1>
                <button onClick={this.count}>Click Me</button>

                <hr />

                <CounterPanel />
            </div>
        )
    }
}

export default ClickCounter;
