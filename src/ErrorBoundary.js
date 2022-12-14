import React from "react";
import { Navigate } from "react-router-dom";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { error: null, errorInfo: null };
    
  }

  componentDidCatch(error, errorInfo) {
    // Catch errors in any components below and re-render with error message
    this.setState({
      error: error,
      errorInfo: errorInfo
    })
    // You can also log error messages to an error reporting service here
  }

 
  
  render() {
    if (this.state.errorInfo) {
      // Error path
      return (
        <div className="error-ui">
          <h1>Something went wrong.</h1>
          <details style={{ whiteSpace: 'pre-wrap' }}>
            {this.state.error && this.state.error.toString()}
            <br />
            {this.state.errorInfo.componentStack}
            
            
          </details>
          {/* <button style={{width:'200px', height:'50px', margin:'100px auto'}} onClick={()=>{window.location.reload()}}> Back Home</button> */}
          
        </div>
      );
    }
    // Normally, just render children
    return this.props.children;
  }  
}export default ErrorBoundary