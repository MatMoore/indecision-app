import React from 'react'

export default class AddOption extends React.Component {
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