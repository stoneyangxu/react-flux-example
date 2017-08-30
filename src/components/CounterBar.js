import React, {PropTypes} from 'react';

import styles from './CounterBar.css';
import {Button, Col, Row} from "antd";

class CounterBar extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            count: props.initValue || 0
        };

        this.increase = this.increase.bind(this);
        this.decrease = this.decrease.bind(this);
    }

    increase() {
        this.setState({
            count: this.state.count + 1
        });
    }

    decrease() {
        this.setState({
            count: this.state.count - 1
        });
    }

    render() {
        return (
            <Row>
                <Col span={4}>
                    <Button onClick={this.increase}>+</Button>
                    <Button onClick={this.decrease}>-</Button>
                </Col>
                <Col span={4}>
                    <span>{this.props.title}:{this.state.count}</span>
                </Col>
            </Row>
        )
    }
}

CounterBar.propTypes = {
    title: PropTypes.string.isRequired,
    initValue: PropTypes.number
};

export default CounterBar;
