//import { useState } from "react";

export function getFinalState(baseState, queue) {
  let finalState = baseState;
  //const [stateNumber, setStateNumber] = useState(baseState);
  // for(var i =0;i<queue.length;i++){
  //   setStateNumber(queue[i]);
  // }
  // finalState = stateNumber;
  //이건 왜 안되나요...?
  for(var i = 0;i<queue.length; i++){
      if(typeof(queue[i]) == 'function'){
        finalState = queue[i](finalState);
      }else{
        finalState = queue[i];
      }
  }
  return finalState;
}
