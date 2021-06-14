import React from 'react';
const data={'':0,'30%-outstanding':30,'20%-Good':20,'15%-ok':15,'10%-Bad':10,'5%-Terrible':5};
export default class TipCalculator extends React.Component{
    constructor(props){
        super(props)
        this.state={
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
    all=(event)=>{
        const {totalBill,rating,people }= this.state;
    
    this.setState({
                  totalTip:(rating*totalBill)/100,

                  totalBillperPerson:Number(totalBill)+(rating*totalBill/100)/(people)
    })
    }

   
    render(){
        const {totalBill,rating,people,totalTip,totalBillperPerson }= this.state;
        return(
           
                <div>
                    <h1>TipCalculator</h1>
                    <label>How much is your bill?</label>
                    <div>
                        <label>${" "}</label>
                    <input value={totalBill} onChange={this.onChangeBill} placeholder="Bill Amount"/></div>
                          &nbsp;
                          <div><label>How much your service?</label> </div>
                          
                          <div>
                              <select value={rating} onChange={this.onChangeRating}>
                                  {Object.entries(data).map(([key,value])=>(
                                      <option value={value}>{key}</option>
                                  ))}
                              </select>
                          </div>
                          &nbsp;
                          <div><label>How many people sharing the bill?</label></div>
                          <div>
                          <input value={people} onChange={this.onChangePeople} placeholder="No of people"/><label>People</label></div>
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
