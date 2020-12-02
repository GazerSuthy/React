import React, { useState, useEffect } from 'react'
import List from './List'
import Alert from './Alert'

function App() {
  // states
  const [listItems,setListItems] = useState([]);
  const [emptyList, setEmptyList] = useState(true);
  const [item,setItem] = useState("");
  // edit mode states
  const [isEditing, setIsEditing] = useState(false);
  const [editIndex, setEditIndex] = useState(null);
  const [alert, setAlert] = useState({showAlert:false, text:"", color:""})

  //user submit
  const handleSubmit = (e)=>{
    e.preventDefault();
    if(!item){
      // handle alert "Please enter a value"
      setAlert({showAlert:true, text:"Please enter a value", color:"red"})
    }else if(item && isEditing){
      // handle edit submit
      let editedObject = {id: new Date().getTime().toString(), title:item}
      // update the item (spread operator expands object into an array because useState return's a "stateobject" not an array)
      listItems[editIndex] = editedObject;
      console.log(listItems)
      setListItems([...listItems])  
      setItem("")
      setIsEditing(false)
      setAlert({showAlert:true, text:"Value Changed", color:"goldenrod"})
    }else{
      // handle item submit 
      let listObject = {id: new Date().getTime().toString(), title:item}
      setListItems([...listItems,listObject])
      setItem("")
      setEmptyList(false);
      setAlert({showAlert:true, text:"Item added to list", color:"lime"})
    }
  }

  const ClearButton = ()=>{
    return(
      <div className="clear-items">
        <button className="clear" onClick={()=>{
          setListItems([]);
          setEmptyList(true);
        }}>Clear items</button>
      </div>
    );
  }

  //list functions
  const Edit = (id)=>{
    setIsEditing(true);

    // find the array index which contain's the id passed through param
    for(let i = 0; i < listItems.length; i++){
      if(listItems[i].id === id){
        setEditIndex(i);
      }
    }
  }
  const Delete = (id)=>{
    let newList = listItems.filter((item)=>{
      // filter condition
      if(item.id !== id){
        return item;
      }
    })
    setListItems([...newList])
    if(listItems.length === 1){
      setEmptyList(true);
    }
    setAlert({showAlert:true, text:"Item removed", color:"red"})
  }

  // add delay to alert (got it first try baby!!!) - this useEffect is specific for the alert
  useEffect(()=>{
    const delay = setTimeout(()=>{
      // after a time interval hide alert
      setAlert({showAlert:false,text:"",color:""})
    },2000)
    // clean up function fixes issue where the timing would sometimes get messed up! [reset's the timer]
    return ()=> clearTimeout(delay)
  },[!alert.showAlert])

  return(
    <main>
      <div className="grocery-bud">
        {alert.showAlert && <Alert message={alert.text} alert_color={alert.color}/>}
        <h1>Grocery Bud</h1>
        <form>
          <input type="text"
          className="groceryBar"
          name="grocery"
          placeholder={isEditing ? listItems[editIndex].title :"eg. Blueberries"}
          value={item}
          onChange={(e)=>{setItem(e.target.value)}}
          />
          <button type="submit" className="submit-btn" onClick={handleSubmit}>{isEditing ? 'Edit' : 'Submit'}</button>
        </form>
        <div>
          {!emptyList && <List items={listItems} Edit={Edit} Delete={Delete}/>}
        </div>
        {/*conditional rendering on clear button*/}
        {!emptyList && <ClearButton/>} 
      </div>
    </main>
  )
}

export default App
