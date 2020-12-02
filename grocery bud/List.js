import React from 'react'

const List = ({items,Edit,Delete}) => {
  return(
      <div>
          {/* display each item, each item will be mapped to a jsx element (html)*/}
          {items.map((item)=>{
            let {id, title} = item
            return(
                <section className="item-container" key={id}>
                    {title}
                    <div className="user-buttons">
                        <button className="edit" onClick={()=>{Edit(id)}}>Edit</button>
                        <button className="delete" onClick={()=>{Delete(id)}}>Delete</button>
                    </div>
                </section>
            );
          })}
      </div>
  );
}

export default List
