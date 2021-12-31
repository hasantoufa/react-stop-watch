import React,{Component} from 'react';
import './App.css';
import Title from './Components/Title';
import CountDown from './Components/CountDown/CountDown';
import Contoller from './Components/Contollor/contoller';




class  App extends Component {

  constructor(props){
    super(props)
    this.state={
      time:{
        min:0,
        sec:0,
        mili:0

      }
    }
  }
  getStart(){

    this.intervalID= setInterval(()=>{
      let min= this.state.time.min
      let sec= this.state.time.sec
      let mili= this.state.time.mili

      if(mili>=10){
        sec=sec+1
        mili=0
      }
      if(sec>=60){

        min=min+1
        sec=0
      }

      this.setState({
        ...this.state,
        time:{
          min,
          sec,
          mili:mili +1


        }

      })


    },100)
  }

  getPause(){

    clearInterval(this.intervalID)
  }

  getReset(){

    this.setState({

      time:{
        min:0,
        sec:0,
        mili:0

      }
    })
  }

    render(){
    return (
      <div className="App">

        <div className='container'>

        

          <Title></Title>
          

          <CountDown time={this.state.time}></CountDown>
          <Contoller start={this.getStart.bind(this)}
          pause={this.getPause.bind(this)}
          reset={this.getReset.bind(this)}
          ></Contoller>

        </div>
        
      </div>
    );
  }
}














// import './App.css';
// import Title from './Components/Title';
// import CountDown from './Components/CountDown/CountDown';



// function App() {

  
//   return (
//     <div className="App">

//       <div className='container'>

      

//         <Title name='iubat '></Title>
        

//         <CountDown/>

//       </div>
      
//     </div>
//   );
// }



export default App;
