class IndecisionApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            options: props.options
        }
        this.handleAddOption=this.handleAddOption.bind(this);
        this.handleDeleteOptions=this.handleDeleteOptions.bind(this);
        this.handlePick=this.handlePick.bind(this);
        this.handleDeleteOption=this.handleDeleteOption.bind(this);
    }

    loadOptions() {
        const json = localStorage.getItem('options')
        const options = JSON.parse(json);

        if(options) {
            this.setState(() => ({ options }));
        }
    }

    componentDidMount() {
        try {
            this.loadOptions();
        } catch(e) {
            // do nothing
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevState.options.length !== this.state.options.length) {
            console.log('Saving to local storage...')
            const json = JSON.stringify(this.state.options)
            localStorage.setItem('options', json)
        }
    }
    componentWillUnmount() {
        console.log('unmount')
    }

    handlePick() {
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNum];
        alert(option);
    }

    handleDeleteOptions() {
        this.setState(() => ({ options: [] }));
    }

    handleDeleteOption(deleteOption) {
        this.setState((prevState) => ({
            options: prevState.options.filter(
                (option) => (option != deleteOption)
            )
        }));
    }

    handleAddOption(option) {
        if(!option) {
            return 'Enter valid value to add item';
        } else if (this.state.options.indexOf(option) > -1) {
            return 'This option already exists!'
        }

        this.setState((prevState) => (
            {
                options: prevState.options.concat([option])
            }
        ));
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
                    handleDeleteOption={this.handleDeleteOption}
                />
                <AddOption handleAddOption={this.handleAddOption}/>
            </div>
        )
    }
}

IndecisionApp.defaultProps = {
    options: []
}

const Header = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            <h2>{props.subtitle}</h2>
        </div>
    )
}

Header.defaultProps = {
    title: 'Some default'
}

const Action = (props) => {
    return (
        <div>
            <button
                onClick={props.handlePick}
                disabled={!props.hasOptions}
            >
                What should I do?
            </button>
        </div>
    )
}

const Options = (props) => {
    return (
        <div>
            <button onClick={props.handleDeleteOptions}>Remove all</button>
            {props.options.length === 0 && <p>Please add an option to get started.</p>}
            {props.options.map(
                optionText => (
                    <Option
                        key={optionText}
                        optionText={optionText}
                        handleDeleteOption={props.handleDeleteOption}
                    />
                )
            )}
        </div>
    )
}

const Option = (props) => {
    return (
        <p>
            {props.optionText}
            <button
                onClick={
                    () => {
                        props.handleDeleteOption(props.optionText)
                    }
                }
            >Remove</button>
        </p>
        
    )
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

        if(!error) {
            e.target.elements.option.value = '';
        }
        
        this.setState(() => ({error}));
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

ReactDOM.render(<IndecisionApp options={['Option 1', 'Option 2']}/>, document.getElementById('app'));