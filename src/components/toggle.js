import React from "react";
import { connect } from "react-redux";

const Toggle = ({ messageVisibility, dispatch }) => {
  return (
    <div>
      <h1>{messageVisibility.toString()}</h1>
      <button onClick={()=>dispatch({type:'TOGGLE_MESSAGE'})}>Toggle me</button>
    </div>
  );
};

const mapStateToProps = (state) => ({
  messageVisibility: state.message.messageVisibility,
});

export default connect(mapStateToProps)(Toggle);
