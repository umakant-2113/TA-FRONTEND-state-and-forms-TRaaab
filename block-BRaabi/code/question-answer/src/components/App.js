import React from 'react';
import questions from "../data/data"



// open state

class OpenState extends React.Component {
  constructor() {
    super();
    this.state = {
      activeState: '',
    };
  }
  handle = (ques) => {
    console.log(ques)
    this.setState({
      activeState: this.state.activeState === ques ? '' : ques,
    });
  };

  render() {
    return (
      <main>
        <h1>Question And Answer </h1>
        {questions.map((question) => {
          return (
            <div
              className={this.state.activeState == question.Q ? 'active' : ' '}
              onClick={() => this.handle(question.Q)}
              key={question.Q}
            >
              <h2> {question.Q} </h2>

              
              <p>{question.A}</p>

            </div>
          );
        })}
      </main>
    );
  }
}

export default OpenState;
