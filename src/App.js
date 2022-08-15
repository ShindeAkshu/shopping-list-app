import { useState,useEffect } from 'react';
import './App.css';
import './index.css';
import {FontawesomeIcon} from '@fontawesome/react-fontawesomeIcon';

function App() {
  const [items,setItems] =useState([
    {itemName:'item 1',quantity:1,isSelected:false },
    {itemName:'item 1',quantity:1,isSelected:false }, 
    {itemName:'item 1',quantity:1,isSelected:false },
  ]);

  const[inputValue,setInputValue] =useState('');
  const[totalItemCount,setTotalItemCount]=('6');

  const HandleAddButtonClick =() => {
    const newItem ={
      itemName:inputValue,
      quantiy:1,
      isSelected:false,
    };

    const newItems =[...items,newItem];
    
    setItems(newItems);
    setInputValue('');
    calculatetotal();
  };


  return (
    <div className="App-background">
      <div className='main-container'>
        <div className='add-item-box' >
          <input className='add-item-input' placeholder='Add an Item...'/>
            <FontawesomeIcon icon={FaPlus}/>
          </div>
          <div className='item-list'>
            {items.map(()=>(
            <div className='item-container'>
            <div className='item-name'>
              {false ? (
                <>
                  <FontawesomeIcon icon={faCheckCircle}/>
                  <span classname="completed">Item 1</span>
                </>
              ) : (
                <>
                  <FontawesomeIcon icpn={faCircle}/>
                  <span> Item 1</span>
                </>
              )
              }
            </div>
            <div className='quantity'> 
              <button>
                <fontawesomeIcon icon={faChevronLeft}/>
              </button>
              <span>1</span>
              <button>
                <fontawesomeIcon icon={faChevronRight}/>
              </button>
              </div>
          </div> 
          ))}
            
          </div>
          <div className='total'> Total: 6</div>
      </div>
   </div>
  );
}

export default App;
