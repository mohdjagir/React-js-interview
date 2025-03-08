import React from "react";

class ErrorBoundry extends React.Component{
    constructor(props){
        super(props);
        this.state={hasError:false}
    }

    static getDerivedStateFromErr(error){
        return {hasError:true}
    }
    componentDidCatch(error,errorinfo){
        console.error("Error caught by Error Boundary:", error, errorinfo);
    }

    render(){
        if(this.state.hasError){
            return <h1>Something went wrong</h1>
        }
        return this.props.children;
    }
}

export default ErrorBoundry;