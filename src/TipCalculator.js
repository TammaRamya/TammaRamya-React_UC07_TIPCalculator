import React from 'react';
export default class TipCalculator extends React.Component{
    constructor(props){
        super(props)
        this.state={
            data:{'':0,'30%-outstanding':30,'20%-Good':20,'15%-ok':15,'10%-Bad':10,'5%-Terrible':5},
            totalBill:'',
            rating:'',
            people:'',
            totalTip:'',
            totalBillperPerson:'',
        }
       
    }
    onChangeBill=(event)=>{
        this.setState({
            totalBill:event.target.value.replace(/\D/g, '')
        })
    }
    onChangeRating=(event)=>{
        this.setState({
            rating:event.target.value
        })
    }
    onChangePeople=(event)=>{
        this.setState({
            people:event.target.value.replace(/\D/g, '')
        })
    }
    onChangeR=(event)=>{
        this.setState({
            r:event.target.value
        })
    }
    all=(event)=>{
    
    this.setState({
                  totalTip:(this.state.rating*this.state.totalBill)/100,

                  totalBillperPerson:Number(this.state.totalBill)+(this.state.rating*this.state.totalBill/100)/(this.state.people)
    })
    }

   
    render(){
        const {totalTip,totalBillperPerson }= this.state;
        return(
           
                <div>
                    <h1>TipCalculator</h1>
                    <label>How much is your bill?</label>
                    <div>
                        <label>${" "}</label>
                    <input value={this.state.totalBill} onChange={this.onChangeBill} placeholder="Bill Amount"/></div>
                          &nbsp;
                          <div><label>How much your service?</label> </div>
                          
                          <div>
                              <select value={this.state.rating} onChange={this.onChangeRating}>
                                  {Object.entries(this.state.data).map(([key,value])=>(
                                      <option value={value}>{key}</option>
                                  ))}
                              </select>
                          </div>
                          &nbsp;
                          <div><label>How many people sharing the bill?</label></div>
                          <div>
                          <input value={this.state.people} onChange={this.onChangePeople} placeholder="No of people"/><label>People</label></div>
                          &nbsp;
                          <div><button  onClick={this.all}>Calculate</button></div>
                          &nbsp;
                            <div>
                          <h4>Totaltip:${totalTip} </h4>
                          <div>
                          <h4>Totalbillperperson:${totalBillperPerson} </h4></div>
                           </div>
                </div>
        )
    }
}
