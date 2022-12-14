import { useState} from 'react';
import './App.css';
import './index.css';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPlus,faCheckCircle,faChevronLeft,faCircle,faChevronRight } from '@fortawesome/free-soild-svg-icons';




const App =() => {
  const [items,setItems] =useState([
    {itemName:'item 1',quantity:1,isSelected:false },
    {itemName:'item 2',quantity:5,isSelected:false }, 
    {itemName:'item 3',quantity:4,isSelected:false },
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

  const HandleQuantityIncrease = (index) =>{
    const newItems=[...items];
    newItems[index].quantity++;
    setItems(newItems);
     calculatetotal();
  };

  const toggleComplete =(index) => {
    const newItems =[...items];
    newItems[index].isSelected = !newItems[index].isSelected;
    setItems(newItems);  
  };

  const HandleQuantityDecrease= (index) =>{
    const newItems=[...items];
    newItems[index].quantity--;
    setItems(newItems);
    calculatetotal();
  };

  const calculatetotal = () => {
    const totalItemCount = items.reduce((total,item) => {
      return total+item.quantity;

    },0);
   setTotalItemCount(totalItemCount);
  };

  return (
    <div className="App-background">
      <div className='main-container'>
        <div className='add-item-box' >
          <input value={inputValue} onChange={(event) => setInputValue(event.target.value)}
           className='add-item-input' placeholder='Add an Item...'/>
            <FontAwesomeIcon icon={faPlus} onClick={() =>HandleAddButtonClick()}/>
          </div>
          <div className='item-list'>
            {items.map((item,index)=>(
            <div className='item-container'>
            <div className='item-name' onClick={() => toggleComplete(index)}>
              {item.isSelected ? (
                <>
                  <FontAwesomeIcon icon={faCheckCircle}/>
                  <span classname="completed">{items.itemName}</span>
                </>
              ) : (
                <>
                  <FontAwesomeIcon icon={faCircle}/>
                  <span> Item 1</span>
                </>
              )
              }
            </div>
            <div className='quantity'> 
              <button>
                <fontAwesomeIcon icon={faChevronLeft} onClick={() => HandleQuantityDecrease(index)}/>
              </button>
              <span>{item.quantity}</span>
              <button>
                <fontAwesomeIcon icon={faChevronRight} onClick={() => HandleQuantityIncrease(index)}/>
              </button>
              </div>
          </div> 
          ))}
            
          </div>
          <div className='total'> Total: {totalItemCount}</div>
      </div>
   </div>
  );
}

export default App;
