import React from "react";

export default class AddOption extends React.Component {
  state = {
    error: undefined,
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const option = e.target.elements.option.value.trim();

    const error = this.props.handleAddOption(option);

    if (!error) {
      e.target.elements.option.value = "";
    }

    this.setState(() => ({ error }));
  };

  render() {
    return (
      <div>
        {this.state.error && (
          <p className="add-option-error">{this.state.error}</p>
        )}
        <form className="add-option" onSubmit={this.handleSubmit}>
          <input type="text" className="add-option__input" name="option" />
          <button class="button">Add option</button>
        </form>
      </div>
    );
  }
}
