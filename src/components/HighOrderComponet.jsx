import React, { useState } from "react";

export const HighOrderComponent=(Component)=>{
    return (props)=>{
        return <Component {...props} message="hello world"/>
    }
}

export const HighOrderBackGround=(Component)=>{
    return (props)=>{
        return (
            <div style={{display:'flex',backgroundColor:'green',height:"80vh"}}>
                <Component {...props} />
            </div>
        )
    }
}

export const Authenticated=(Component)=>{
    return function WrappComponent(props){
        const [validate,setValidate]=useState(true);
        return(
            <>{validate?<Component {...props} message="validated"/>:<><p>Not validated</p></>}</>
        )
    }
}
  
// export const Authenticated = (Component) => {
//     return function WrappedComponent(props) {  // ✅ Make sure it's a valid React component
//         const [validate, setValidate] = useState(true);

//         return (
//             <>
//                 {validate ? (
//                     <Component {...props} message="validated" />
//                 ) : (
//                     <p>Not validated</p>
//                 )}
//             </>
//         );
//     };
// };