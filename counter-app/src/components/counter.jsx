import React, {Component} from 'react';

class Counter extends Component {
    state = {
        count: 0,
        address: {}
    };
    render() {
        return (
            <div>
                <span>{this.formatCount()}</span>
                <button>click here</button>
            </div>
        );
    }

    formatCount() {
        const {count} = this.state;
        return count === 0 ? <h1>ZERO</h1> : count;
    }
}

export default Counter;