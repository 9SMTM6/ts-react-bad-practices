import React, { Component } from 'react';
import './App.scss';

interface IStateApp {
  value1: string;
  value2: string;
  value3: string;
  value4: string;
}

class App extends Component<{}, IStateApp> {
  constructor(props: {}) {
    super(props);

    this.state = {
      value1: 'unset',
      value2: 'unset',
      value3: 'unset',
      value4: 'unset',
    };

    this.boundMethod = this.boundMethod.bind(this);
  }
  public render() {
    return (
      <div className="App">
        <button onClick={this.unboundMethod}>call UnboundMethod</button>
        <button onClick={this.boundMethod}>call BoundMethod</button>
        <button onClick={this.manuallyTypedArrowMethod}>call ManuallyTypedArrowMethod</button>
        <button onClick={this.automaticallyTypedArrowMethod}>call AutomaticallyTypedArrowMethod</button>
      </div>
    );
  }

  private unboundMethod() {
    try {
      this.setState({ value1: 'set' });
      console.log(this.state);
    } catch (error) {
      console.error('couldnt show or set state, got error ', error);
    }
  }

  private boundMethod() {
    this.setState({ value2: 'set'});
    console.log(this.state);
  }

  private manuallyTypedArrowMethod = () => {
    this.setState({ value3: 'set'});
    console.log(this.state);
  }

  private automaticallyTypedArrowMethod: App['boundMethod'] = () => {
    this.setState({ value4: 'set' });
    console.log(this.state);
  }
}

export default App;
