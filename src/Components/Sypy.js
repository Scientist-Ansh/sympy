import React,{Component} from 'react';
import axios from 'axios';
import parse from 'html-react-parser';

import Card from './card';

class Sypy extends Component{
    constructor(props){
        super(props);
        this.state={
            data:null,
            loading:true
        }
    };

   async componentDidMount(){
       let ans  = await axios.get("https://ravigitte.pythonanywhere.com/solve/?exp=integrate(2*x%20+%20y,x)");
        ans =  JSON.parse(JSON.stringify(ans));
       this.setState(st=>
        {return{
            data:ans.data,loading:false
        }});
    //    console.log(this.state.data);
       
    }
    componentDidUpdate(){
    
    }
    

    render(){
        
        return( 
            <div>
                <center><h1>Sympy api</h1></center> 
                {!this.state.loading && this.state.data.map((ob,i)=>{
                    return <Card title={ob.title} output={ob.output} key={i} input={ob.input} 

                    />
                })}
               
             

            </div>

        );
    }
}

export default Sypy;

