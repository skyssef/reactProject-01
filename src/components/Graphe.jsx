import React from 'react';
import { Component } from 'react';
import './Graphe.css';
import Infos from './Infos';
import Stats from './Stats';
//import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';
import Charts from './Charts';
import swal from 'sweetalert';


export default class Graphe extends Component{

    state= localStorage.length>0? JSON.parse(localStorage.getItem("data")):this.props.data
    setData=()=>{
        var data={...this.state};
        localStorage.clear();
        localStorage.setItem("data",JSON.stringify(data))
    }
    componentDidUpdate(prevProps,prevState) {
        
        if (JSON.parse(localStorage.getItem("data"))!== this.state) {
          this.setData()
        }
      }
    updateHistory=(balence,losses,earnning,date)=>{
        var earnData=[...this.state.earnning.data];
        earnData.push({x:date,y:earnning});
        var balenceData=[...this.state.balence.data];
        balenceData.push({x:date,y:balence});
        var losData=[...this.state.losses.data];
        losData.push({x:date,y:losses});
        this.setState({
            earnning:{...this.state.earninng,data:earnData},
            losses:{...this.state.losses,data:losData},
            balence:{...this.state.balence,data:balenceData}
        });
        
    }
    
    AddCat=()=>{
        var cat=this.state.cathegory;
        var list=this.state.catList.filter(item=>item===cat);
        if (list.length>0) swal("this Cathegory is already exists !","worning","error") 
        else if(cat.trim()===""){
            swal("not valide","worning","error") 
        }
        else {
            list=[...this.state.catList,cat];
            var vals=[...this.state.valueList,0]
            swal("done","Cathegory Added","success") ;
            this.setState(
                {catList:list,valueList:vals}
            );
            
        }
    }
    deleteItem=(obj)=>{
        var listItem=[...this.state.barList];
        var filtredList=listItem.filter(item=>item.desc!==obj.desc);
        var valList=[...this.state.valueList];
        var catList=[...this.state.catList];
        var date = new Date();
        var current_date = date.getFullYear()+"-"+(date.getMonth()+1)+"-"+ date.getDate();
        var current_time = date.getHours()+":"+date.getMinutes()+":"+ date.getSeconds();
        var date_time =new Date(current_date+" "+current_time) ;	
        valList.splice(catList.indexOf(obj.cat),1,valList[catList.indexOf(obj.cat)]-obj.amount)
        this.setState({
            barList:filtredList,
            info:{
                ...this.state.info,
                balence:this.state.info.balence+obj.amount,
                lose:this.state.info.lose-obj.amount
            },
            valueList:valList
        });
        this.updateHistory(this.state.info.balence+obj.amount,this.state.info.lose-obj.amount,this.state.info.earning,date_time.getTime())
        swal('item deleted !',"","success");
    }
    AddBar=()=>{
        var test=false;
        var privius=[...this.state.barList];
        var element=this.state.barInfo.desc
        function formtest(){
            var variable=false;
            if (privius.length>0){
                privius.forEach((item)=>{
                    if (item.desc!==element) variable=true;
                    else variable=false;
                });
            }
            else variable=true;
            
            return variable
        }
        if(this.state.barInfo.desc.trim()===""|| this.state.barInfo.amount.trim()===""|| this.state.barInfo.choice.trim()===""|| formtest()===false) test=false;
        
        else test =true;
        if(test){
            var valList=[...this.state.valueList];
            var catList=[...this.state.catList];
            var tab=[...this.state.barList];
            var date = new Date();
            var current_date = date.getFullYear()+"-"+(date.getMonth()+1)+"-"+ date.getDate();
            var current_time = date.getHours()+":"+date.getMinutes()+":"+ date.getSeconds();
            var date_time =new Date(current_date+" "+current_time) ;	
            tab.push({
                desc:this.state.barInfo.desc,
                cat:this.state.barInfo.choice,
                amount:this.state.barInfo.amount,
                date:date_time.getTime()
            });
            var choice=this.state.barInfo.choice;
            swal("Item Added !","done","success");
            valList.splice(catList.indexOf(choice),1,valList[catList.indexOf(choice)]+this.state.barInfo.amount)
            //valList[catList.indexOf(this.state.barInfo.choice)]=this.state.barInfo.amount
            //console.log(valList)
            
            this.setState({
                barList:tab,
                page:"listItem",
                info:{
                    ...this.state.info,
                    balence:this.state.info.balence-this.state.barInfo.amount,
                    lose:this.state.info.lose+this.state.barInfo.amount
                },
                valueList:valList
            });

            this.updateHistory(this.state.info.balence-this.state.barInfo.amount,this.state.info.lose+this.state.barInfo.amount,this.state.info.earning,date_time.getTime())
            
        }
        else swal("insertion error, plaise check the inputs fields !","worning","error");
        
    }
    NewItem=()=>{
        this.setState({page:"addItem"})
    }
    NewCat=()=>{
        this.setState({page:"addCat"})
    }
    ListItem=()=>{
        this.setState({page:"listItem"})
    }
    
    formChange=(e)=>{
        let input =e.target;
        let name=input.name;
        let value= name==="amount"?Number(input.value): input.value;
        this.setState({barInfo:{...this.state.barInfo,[name]:value}});
        
    }
    
    change=(e)=>{
        
        let input =e.target;
        let name=input.name;
        let value=parseFloat(input.value) ;
        this.setState({info:{...this.state.info,[name]:value}});
        
    }
    divClick=(e)=>{
        //console.log(e.target.lastChild)
        //e.target.lastChild.classList.remove("hidden");
        e.target.lastChild.style.display="block";
        console.log(e.target)
    }
    inputClick=(e)=>{
        var date = new Date();
        var current_date = date.getFullYear()+"-"+(date.getMonth()+1)+"-"+ date.getDate();
        var current_time = date.getHours()+":"+date.getMinutes()+":"+ date.getSeconds();
        var date_time =new Date(current_date+" "+current_time) ;
        //e.target.classList.add("hidden");
        e.target.style.display="none";
        this.updateHistory(this.state.info.balence,this.state.info.lose,this.state.info.earning,date_time.getTime());
        
    }
    render(){
        return(
            <main>
                <Infos 
                    inputClick={this.inputClick}
                    divClick={this.divClick}
                    change={this.change}
                    balence={this.state.info.balence}
                    earning={this.state.info.earning}
                    lose={this.state.info.lose}
                />
                {
                    //this.state.catList.length>0 &&
                    <Charts 
                        earnning={this.state.earnning}
                        balence={this.state.balence}
                        losses={this.state.losses}
                        catList={this.state.catList}
                        valueList={this.state.valueList}
                    />
                }
                <div className="content">

                    <Stats 
                        NewItem={this.NewItem}
                        NewCat={this.NewCat}
                        ListItem={this.ListItem}
                        catList={this.state.catList}
                        page={this.state.page}
                        ListBar={this.state.filterCat==="All"?this.state.barList:this.state.barList.filter(item=>item.cat===this.state.filterCat)}
                        formInfo={this.formChange}
                        inputCat={(e)=>this.setState({cathegory:e.target.value})}
                        AddBar={this.AddBar}
                        AddCat={this.AddCat}
                        delBar={(obj)=>this.deleteItem(obj)}
                        filterByCat={(e)=> this.setState({filterCat:e.target.value})}
                    />
                </div>
            </main>
        )
    }
}