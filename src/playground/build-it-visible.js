class VisibilityToggle extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            hidden: true
        }
        
        this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
    }

    handleToggleVisibility() {
        this.setState((prevState) => {
            return {
                hidden: !prevState.hidden
            }
        })
    }
    render() {
        let details;
        if (!this.state.hidden) {
            details = <p>Hey. These are some details you can now see!</p>;
        }
        return (
            <div>
                <h1>Visibility toggle</h1>
                <button onClick={this.handleToggleVisibility}>{this.state.hidden ? "Show details" : "Hide details"}</button>
                {details}
            </div>
        );
    }
}

ReactDOM.render(<VisibilityToggle/>, document.getElementById('app'))