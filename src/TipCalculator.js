import React from 'react';
export default class TipCalculator extends React.Component{
    constructor(props){
        super(props)
        this.state={
            Bill:'',
            convertype:'',
            people:'',
            Totaltip:'',
            Total:'',
            Totalbillperperson:''
        }
    }
    Temp=(event)=>{
        this.setState({
            Bill:Number(event.target.value)
        })
    }
    Type=(event)=>{
        this.setState({
            convertype:event.target.value
        })
    }
    People=(event)=>{
        this.setState({
            people:event.target.value
        })
    }
    all=(event)=>{
        if(isNaN(this.state.Bill))
{
alert("please enter valid no");
}
else
{
    this.setState({
                 Totaltip:(this.state.convertype*this.state.Bill)/100,

                  Totalbillperperson:(this.state.Bill+(this.state.convertype*this.state.Bill)/100)/(this.state.people)
    })
}
    }
    render(){
        return(
                <div>
                    <h1>TipCalculator</h1>
                    <label>How much is your bill?</label>
                    <div><label>${" "}</label><input value={this.state.temprature} onChange={this.Temp} placeholder="Bill Amount"/></div>
                          &nbsp;
                          <div><label>How much your service?</label> </div>
                          <div>
                              <select value={this.state.convertype} onChange={this.Type} id='select box'>
                              <option value="30">30%-outstanding</option>
                              <option value="20">20%-Good</option>
                               <option value="15">15%-Ok</option>
                               <option value="10">10%-Bad</option>
                                <option value="5">5%-Terrible</option>
                                  </select>  
                          </div>
                          &nbsp;
                          <div><label>How many people sharing the bill?</label></div>
                          <div>
                          <input value={this.state.people} onChange={this.People} placeholder="No of people"/><label>People</label></div>
                          &nbsp;
                          <div><button  onClick={this.all}>Calculate</button></div>
                          &nbsp;
                            <div>
                          <h4>Totaltip:{'$'+this.state.Totaltip} </h4>
                          <div>
                          <h4>Totalbillperperson:{'$'+this.state.Totalbillperperson} </h4></div>
                           </div>
                </div>
        )
    }
}