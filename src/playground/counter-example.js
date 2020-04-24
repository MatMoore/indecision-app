class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddOne=this.handleAddOne.bind(this);
        this.handleMinusOne=this.handleMinusOne.bind(this);
        this.handleReset=this.handleReset.bind(this);
        this.state = {
            count: props.count
        }
    }
    componentDidMount() {
        this.loadCount();
    }
    componentDidUpdate() {
        localStorage.setItem("count", this.state.count);
    }
    loadCount() {
        const countStr = localStorage.getItem("count");
        const count = parseInt(countStr)
        console.log(count)
        if(!isNaN(count)) {
            this.setState(() => ({ count }));
        }
    }
    handleAddOne() {
        this.setState((prevState) => {
            return {
                count: prevState.count + 1
            }
        })
    }
    handleMinusOne() {
        this.setState((prevState) => {
            return {
                count: prevState.count - 1
            }
        })
    }
    handleReset() {
        this.setState({count: this.props.count})
    }
    render() {
        return (
            <div>
                <h1>Count: {this.state.count}</h1>
                <button onClick={this.handleAddOne}>+1</button>
                <button onClick={this.handleMinusOne}>-1</button>
                <button onClick={this.handleReset}>Reset</button>
            </div>
        );
    }
}

Counter.defaultProps = {
    count: 0
}

ReactDOM.render(<Counter count={10}/>, document.getElementById('app'));
// let count = 0
// const addOne = () => {
//     count += 1
//     renderCounterApp()
// }
// const minusOne = () => {
//     count -= 1
//     renderCounterApp()
// }
// const reset = () => {
//     count = 0
//     renderCounterApp()
// }

// const renderCounterApp = () => {
//     const templateTwo = (
//         <div>
//             <h1>Count: {count}</h1>
//             <button onClick={addOne}>+1</button>
//             <button onClick={minusOne}>-1</button>
//             <button onClick={reset}>Reset</button>
//         </div>
//     )

//     var appRoot = document.getElementById('app')

//     ReactDOM.render(templateTwo, appRoot)
// }

// renderCounterApp()

