import React from 'react'

const Basket = (props) => {
    const {cartItems , onAdd , onRemove} = props;
    const subtotal = cartItems.reduce((a,c)=> a + c.price * c.qty , 0);
    const savings = subtotal * 0.15;
    const TotalAmount = subtotal - savings;
    
    return (
       
      <aside className="block col-2">
         <h2>Cart Items</h2>
         <div>{cartItems.length === 0 && <div>Cart is Empty</div>}</div>
         {
               cartItems.map((item) => (
                <>
                   <div key={item.id}  ></div>

                       <div classname="content">{item.name}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{item.price}

                         <button onClick={()=>onAdd(item)} className="add">+</button> {item.qty}
                         <button onClick={()=>onRemove(item)} className="remove">-</button><br /><br /><span>Item price</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                         {item.qty} x ${item.price.toFixed(2)}
                       


                        </div><hr />
                        

                 
                   </>
               )
              
                  
               )}
               {cartItems.length !== 0 && (
                   <>
                        <hr /><hr />
                        <div className="row">
                            <div className="col-2">Sub Total</div>
                            <div className="col-1 text-right">${subtotal.toFixed(2)}</div>
                        </div>
                        <div className="row">
                            <div className="col-2">Savings</div>
                            <div className="col-1 text-right">${savings.toFixed(2)}</div>
                        </div>
                        <div className="row">
                            <div className="col-2"><strong>Total Amount</strong></div>
                            <div className="col-1 text-right">${TotalAmount.toFixed(2)}</div>
                        </div>

                   </>
               )}
      </aside>
    )
}

export default Basket
