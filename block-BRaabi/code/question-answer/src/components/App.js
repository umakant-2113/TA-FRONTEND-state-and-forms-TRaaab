import React from 'react';
let questions = [
  {
    Q: 'Who is it for?',
    A: 'Recent college graduates, students taking gap year, dropouts, professionals looking to switch careers, anyone learning web development but needs right environment and guidance. No prior programming knowledge required.',
  },
  {
    Q: 'Does AltCampus help me get a job?',
    A: 'Yes. All we can. We help you at every stage, help you build strong portfolio, prepare for interviews, put you in touch with companies for interview.',
  },
  {
    Q: 'How does the entire process work?',
    A: 'You can read about it here - How it works.',
  },
  {
    Q: 'Is this course self-paced or batched?',
    A: 'This program follows a blended approach. Students can move at their own pace, however they will be matched with peers learning same concepts.',
  },
];

//   class App extends React.Component{
// constructor(props){
//     super(props)
//     this.state={
//         ques:""
//     }
// }

//     handle=(ques)=>{
//     this.setState({
//         ques:this.state.ques===ques?"":ques
//     })
//     }
// render(){
//     return(
//         <main>
//           <h1>ALTCAMPUS FAQ</h1>
//         {questions.map((question)=>
//            <div className={this.state.ques===question.Q?"active":""} onClick={()=>this.handle(question.Q)} key={question.Q}>
//             <h2 >{question.Q}{this.state.ques===question.Q?"👆":"👇"}</h2>
//             <p>{question.A}</p>

//             </div>
//         )}
//         </main>
//     )
// }
//   }

//   export default App

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
