import React from "react";

class ErrorBoundry extends React.Component{
    state={
        hasError: false,
    }
    componentDidCatch=(error, info){
        this.setState({hasError: true})
    }
    render(){
        return(

        )
    }
}