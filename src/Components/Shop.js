import React from "react";
import {useDispatch} from 'react-redux'
import {actionCreators} from '../state/index'
// import { bindActionCreators } from "redux";

function Shop() {

  const dispatch = useDispatch();
  // const actions = bindActionCreators(actionCreators, dispatch)

  return (
    <>
      <div>
        <button className="btn btn-primary" onClick={()=>dispatch(actionCreators.withdrawMoney(100))}>-</button>
        Add this item
        <button className="btn btn-primary" onClick={()=>dispatch(actionCreators.depositMoney(100))}>+</button>
      </div>
      {/* <div>
        <button className="btn btn-primary" onClick={()=>{actions.withdrawMoney(100)}}>-</button>
        Add this item
        <button className="btn btn-primary" onClick={()=>(actions.depositMoney(100))}>+</button>
      </div> */}
    </>
  );
}

export default Shop;
