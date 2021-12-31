import React,{Component} from "react";
class Contoller extends Component{

    constructor(props){
        super(props)
        this.state={
            start:true,
            pause:false,
            lap:false,
            reset:false
        }

        
    }

    startController(){

        this.setState({
            ...this.state,
            start:false,
            pause:true,
            lap:true

        })

        this.props.start()
    }

    pauseController(){

        this.setState({

            ...this.state,
            start:true,
            pause:false,
            lap:false,
            reset:true
        })

        this.props.pause()
       
    }


    
    lapController(){

      
    }

    resetController(){

        this.setState({
                ...this.state,
                start:true,
                pause:false,
                lap:false,
                reset:false


        })

        this.props.reset()
    }


    




    getController(){

        let output=null
        if(this.state.start && !this.state.reset){
            output=(
                <div>

                    <button className="btn btn-success btn-lg px-5 ml-5"
                    onClick={event=> this.startController()}
                    > Start</button>
                </div>
            )
        }  else if (this.state.pause && this.state.lap){

            output=(

            <div>

                

                    <button className="btn btn-primary btn-lg px-5 ml-5"
                    onClick={event=> this.pauseController()}
                    > Pause</button>

                    <button className="btn btn-warning btn-lg px-5 ml-5"
                    onClick={event=> this.lapController()}
                    > Lap</button>


            </div>)
        } else if(this.state.start && this.state.reset){

            output=(

                <div>
    
                    
    
                        <button className="btn btn-primary btn-lg px-5 ml-5"
                        onClick={event=> this.startController()}
                        > start</button>
    
                        <button className="btn btn-warning btn-lg px-5 ml-5"
                        onClick={event=> this.resetController()}
                        > Reset</button>
    
    
                </div>)


        }
        return output;
    }

    render(){
        return this.getController();
          
        
    }
}

export default Contoller;