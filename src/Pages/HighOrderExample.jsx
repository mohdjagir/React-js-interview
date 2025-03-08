import React from 'react';
import { HighOrderBackGround,HighOrderComponent,Authenticated } from '../components/HighOrderComponet';



const HighOrderExample = ({message}) => {
  return (
    <div>HighOrderExample: {message}</div>
  )
}

const WrapComponent= HighOrderBackGround(Authenticated(HighOrderExample));
export default WrapComponent;
