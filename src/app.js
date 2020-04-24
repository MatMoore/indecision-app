class IndecisionApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            options: []
        }
        this.handleAddOption=this.handleAddOption.bind(this);
        this.handleDeleteOptions=this.handleDeleteOptions.bind(this);
        this.handlePick=this.handlePick.bind(this);
    }

    handlePick() {
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNum];
        return option;
    }

    handleDeleteOptions() {
        this.setState(() => {
            return {
                options: []
            }
        })
    }

    handleAddOption(option) {
        if(!option) {
            return 'Enter valid value to add item';
        } else if (this.state.options.indexOf(option) > -1) {
            return 'This option already exists!'
        }

        this.setState((prevState) => {
            return {
                options: prevState.options.concat([option])
            }
        })
    }

    render() {
        const title = "Indecision";
        const subtitle = "Put your life in the hands of a computer";

        return (
            <div>
                <Header title={title} subtitle={subtitle}/>
                <Action
                    hasOptions={this.state.options.length > 0}
                    handlePick={this.handlePick}
                />
                <Options
                    options={this.state.options}
                    handleDeleteOptions={this.handleDeleteOptions}
                />
                <AddOption handleAddOption={this.handleAddOption}/>
            </div>
        )
    }
}

class Header extends React.Component {
    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
                <h2>{this.props.subtitle}</h2>
            </div>
        )
    }
}

class Action extends React.Component {
    constructor(props) {
        super(props)
        this.handlePick = this.handlePick.bind(this);
    }

    handlePick() {
        const option = this.props.handlePick();
        alert(option)
    }

    render() {
        return (
            <div>
                <button
                    onClick={this.handlePick}
                    disabled={!this.props.hasOptions}
                >
                    What should I do?
                </button>
            </div>
        )
    }
}

class Options extends React.Component {
    constructor(props) {
        super(props);

        this.handleRemoveAll = this.handleRemoveAll.bind(this);
    }

    handleRemoveAll() {
        this.props.handleDeleteOptions()
    }

    render () {
        return (
            <div>
                <button onClick={this.handleRemoveAll}>Remove all</button>
                {this.props.options.map(
                    optionText => {
                        return <Option key={optionText} optionText={optionText}/>
                    }
                )}
            </div>
        )
    }
}

class Option extends React.Component {
    render() {
        return (
            <p>
            {this.props.optionText}
            </p>
        )
    }
}

class AddOption extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            error: undefined
        }

        this.handleSubmit=this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault()
        const option = e.target.elements.option.value.trim()
        
        const error = this.props.handleAddOption(option);
        
        this.setState(() => {
            return { error }
        })

    }

    render () {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.handleSubmit}>
                    <input type="text" name="option"/>
                    <button>Add option</button>
                </form>
            </div>
        )
    }
}

ReactDOM.render(<IndecisionApp/>, document.getElementById('app'));