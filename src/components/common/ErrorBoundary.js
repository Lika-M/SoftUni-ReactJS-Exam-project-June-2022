import { Component } from 'react';

class ErrorBoundary extends Component {

    constructor(props) {
        super(props);
        this.state = {
            error: null
        }
    }

    static getDerivedStateFromError(error) {
        console.log('Error!')
    }

    componentDidCatch(error, errorInfo) {
        console.log('Error!')
    }

    render() {
        if(this.state.error){
            return <h1>Error: {this.errorInfo}</h1>
        }
        return this.props.children;
    }
}

export default ErrorBoundary;