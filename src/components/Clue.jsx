import React, { Component } from 'react';

class Clue extends Component {
  constructor() {
    super();
    this.state = { reveal: false };
  }

  render() {
    const { answer, question, value } = this.props.clue;

    return (
      <div
        className="card clue"
        onClick={() => this.setState({reveal: true})}
        >
        <div className="card-header">
          <h4>{value || 'unknown'}</h4>
        </div>
        <div className="card-block">
          <h5 className="card-text">{question || 'unknown'}</h5>
          <hr/>
          <h5 className="card-text">
            <span className={this.state.reveal ? 'text-revealed' : 'text-hidden' }>
              {answer || 'unknown'}
            </span>
          </h5>
        </div>
      </div>
    )
  }
}

export default Clue;
