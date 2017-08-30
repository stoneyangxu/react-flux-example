import React from 'react';
import styles from './CounterPanel.css';
import CounterBar from "./CounterBar";

class CounterPanel extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      initValues: [0, 10, 100]
    };

    this.resetAll = this.resetAll.bind(this);
  }

  resetAll() {
    this.setState({
      initValues: [0, 10, 100]
    });
  }

  render() {
    return (
      <div className={styles.normal}>
        <CounterBar title="First" initValue={this.state.initValues[0]}/>
        <CounterBar title="Second" initValue={this.state.initValues[1]}/>
        <CounterBar title="Third" initValue={this.state.initValues[2]}/>

        <button onClick={this.resetAll}>Reset all</button>
      </div>
    );
  }

}

export default CounterPanel;
