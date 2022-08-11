import { useState,useEffect } from 'react';
import './App.css';
import './index.css';
import {fontawesomeIcon} from '@fontawesome/react-fontawesomeIcon';

function App() {
  const [items,setItems] =useState([
    {itemNmae:'item 1',quantity:1,isSelected:false },
  ]);


  return (
    <div className="App-background">
      <div className='main-container'>
        <div className='add-item-box' >
          <input className='add-item-input' placeholder='Add an Item...'>

          </input>

        </div>
      </div>

    
    </div>
  );
}

export default App;
