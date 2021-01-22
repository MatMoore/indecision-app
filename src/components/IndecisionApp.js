import React from 'react'
import Action from './Action'
import AddOption from './AddOption'
import Header from './Header'
import Options from './Options'

class IndecisionApp extends React.Component {
    state = {
        options: []
    }

    handleAddOption = (option) => {
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
    };

    handleDeleteOptions = () => {
        this.setState(() => ({ options: [] }));
    };

    handlePick = () => {
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNum];
        alert(option);
    };

    handleDeleteOption = (deleteOption) => {
        this.setState((prevState) => ({
            options: prevState.options.filter(
                (option) => (option != deleteOption)
            )
        }));
    };

    constructor(props) {
        super(props);
        this.state.options = props.options;
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

export default IndecisionApp