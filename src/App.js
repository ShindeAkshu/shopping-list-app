import { useState,useEffect } from 'react';
import './App.css';
import './index.css';
import {fontawesomeIcon} from '@fontawesome/react-fontawesomeIcon';

function App() {
  const [items,setItems] =useState([
    {itemName:'item 1',quantity:1,isSelected:false },
    {itemName:'item 1',quantity:1,isSelected:false }, 
    {itemName:'item 1',quantity:1,isSelected:false },
  ]);


  return (
    <div className="App-background">
      <div className='main-container'>
        <div className='add-item-box' >
          <input className='add-item-input' placeholder='Add an Item...'/>
            <fontawesomeIcon icon={FaPlus}/>
          </div>
          <div className='item-list'>
            {items.map(()=>(
            <div className='item-container'>
              {false ? (
                <>
                  <fontawesomeIcon icon={faCheckCircle}/>
                  <span classname="completed">Item 1</span>
                </>
              ) : (
                <>
                  <fontawesomeIcon icpn={faCircle}/>
                  <span> Item 1</span>
                </>
              )
              )}
            <div className='item-name'>-</div>
            <div className='quantity'>-</div>
          </div> 
          ))}
            
          </div>
          <div className='total'> Total: 6</div>
      </div>
   </div>
  );
}

export default App;
