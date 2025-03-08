import React from 'react';
import LifeCycle from './LifeCycle';
import WrapComponent from './HighOrderExample';
import ErrorBoundry from '../components/ErrorBoundry';


const Home = () => {

  const handleChange = (e) => {
    console.log(e.target.value);
  }

  //debounce
  const debounce = (fun, delay) => {
    let timer;
    return function (...args) {
      clearTimeout(timer)
      timer = setTimeout(() => fun(...args), delay)
    }
  }

  const apiCallFun = () => {
    console.log("call")
  }

  //throttling
  const throttling = (fun, delay) => {
    let call = true
    return function (...args) {
      if (!call) return;
      fun(...args);
      call = false;
      setTimeout(() => {
        call = true
      }, delay)
    }
  }

  const search = debounce((item) => handleChange(item), 500)
  const click = throttling((event) => apiCallFun(event), 20000)
  return (
    <div>
      {/* <p>Home Page</p> */}
      {/* <input name='search' onChange={search} />
      <button onClick={click}>Click Me</button> */}
      {/* <LifeCycle /> */}
      <ErrorBoundry>
        <WrapComponent />
      </ErrorBoundry>

    </div>

  )
}

export default Home