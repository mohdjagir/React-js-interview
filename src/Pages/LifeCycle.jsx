import React,{Component} from 'react';

class LifeCycle extends Component{
    constructor(props){
        super(props)
        this.props=props;
        this.state={
            count:0
        }
    }

    componentDidMount(){
        console.log("component did mont")
    }

    componentDidUpdate(prevProps,prevStae){
        console.log("17",prevProps,prevStae)
    }

    shouldComponentUpdate(nextProps,nextState){
        console.log("shouldComponentUpdate",nextProps,nextState)
        return true
    }

    componentWillUnmount() {
        console.log("Component Will Unmount");
    }


    stateUpdateFunc=()=>{
        this.setState({count:this.state.count+1})
    }

    static getDerivedStateFromError(error) {
        return { hasError: true };
    }

    componentDidCatch(error, info) {
        console.log("Error:", error);
    }
    render(){
        return(
            <>
             <div>Life Cycle</div>
             <button onClick={this.stateUpdateFunc}>Click</button>
            </>
           
        )
    }
}

export default LifeCycle;