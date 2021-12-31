import React from 'react'


class Title extends React.Component{
        constructor(props){
            super(props)
            
            this.state={

               title:'Stop Watch',
               isInput:false
            }
            
        }

        editH(){

            this.setState({

                ...this.state,
                isInput:true
            })
        }


        inputChange(event){
            this.setState({

                ...this.state,
                title:event.target.value
            })

        }

        keyH(event){
            if(event.key==='Enter'){
                this.setState({
                    ...this.state,
                    isInput:false
                })
            }
            
        }





        

    render(){

         let output=null;
        if(this.state.isInput){

            output=(
                <div>
                    <input type="text"
                    onChange={(event)=>this.inputChange(event)}
                    onKeyPress={event=>this.keyH(event)}
                    value={this.state.title}
                    className='form-control'/>
                    

                </div>
            )

        }
        else{

            output=(

                <div className='d-flex'>
                    <h1 className='display-4'>{this.state.title}</h1>
                    <span >
                            <button onClick={() => this.editH()}>edit</button>
                    </span>
                </div>
            )
               
            
        }
        return(
            <div>
               
               {output}
            </div>

            
        )


    }


}

export default Title
