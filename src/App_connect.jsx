import React, { memo } from "react";
import { connect } from "react-redux";
import { addCounterAction } from "./feature/counter";

const App = memo(props => {
  const { counter, addCounter } = props;
  return (
    <div>
      <h2>
        当前计数: {counter}
      </h2>
      <button onClick={() => addCounter(1)}>+1</button>
    </div>
  );
});

const mapStateToProps = state => ({
  counter: state.counter.featureCounter
});

const mapDispatchToProps = dispatch => ({
  addCounter: featureCounter => dispatch(addCounterAction(featureCounter))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
