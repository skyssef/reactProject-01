import React from 'react';

import './Stats.css';
import Bar from './Bar';
import New from './New';
import FilterBar from './FilterBar';


const AddBar=(props)=>{
    return( 
        <form action="#">
            <h1>Add New Item</h1>
            <input className='inputs' onChange={props.formInfo} name='desc' type="text" placeholder='Enter the description...' /><br />
            <input className='inputs' onChange={props.formInfo} name='amount' type="text" placeholder='Enter the amount...'/><br />
            <select name="choice" id="choice" onChange={props.formInfo}>
                <option value="">Cathegory</option>
                {
                    props.catList.map((item)=><option key={item} value={item}>{item}</option>)
                }
            </select>
            <button type='button' className='btnAdd' onClick={props.AddBar}>Add</button>
        </form>
    )
}
const AddCat=(props)=>{
    return( 
        <form action="#">
            <h1>Add New Cathegory</h1>
            <input className='inputs' name='cat' onChange={props.inputCat}  type="text" placeholder='Enter the Cathegory...' /><br />
            <button type='button' className='btnAdd' onClick={props.AddCat}>Add</button>
        </form>
    )
}
export default function Stats(props){
    return(
        <div className="menu">
            <New 
                NewItem={props.NewItem}
                NewCat={props.NewCat}
                ListItem={props.ListItem}
            /> 
            {
                props.page==="listItem"?
                <div className="storage">
                    <FilterBar 
                        cats={props.catList}
                        filterByCat={props.filterByCat  }
                    />
                    <div className='ListBar'>
                        {   
                            props.ListBar.length>0?
                            props.ListBar.map(item=> <Bar 
                                key={item.desc}
                                item={item} 
                                delBar={props.delBar}
                                />):
                            <div>no items for now !</div>
                        }
                    </div>  
                </div>
                :props.page==="addItem"?
                <div className="storage">
                    <AddBar 
                        formInfo={props.formInfo}
                        AddBar={props.AddBar}
                        catList={props.catList}
                    />
                </div>
                :
                <div className="storage">
                    <AddCat 
                        inputCat={props.inputCat}
                        AddCat={props.AddCat}
                    />
                </div>
            }
 
            
        </div>
        
    )
}