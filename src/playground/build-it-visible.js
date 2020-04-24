const app = {
    hidden: true
};

const toggleVisibility = () => {
    app.hidden = !app.hidden;

    renderApp();
}

const renderApp = () => {
    let details;
    if (!app.hidden) {
        details = <p>Hey. These are some details you can now see!</p>;
    }
    const template = <div>
        <h1>Visibility toggle</h1>
        <button onClick={toggleVisibility}>{app.hidden ? "Show details" : "Hide details"}</button>
        {details}
    </div>

    var appRoot = document.getElementById('app')

    ReactDOM.render(template, appRoot)
}

renderApp();