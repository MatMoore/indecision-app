console.log("App.js is running");

const app = {
    title: "Indecision App",
    subtitle: "This will solve all your problems",
    options: [
    ]
}

const onFormSubmit = (e) => {
    e.preventDefault()
    const option = e.target.elements.option.value
    
    if(option) {
        app.options.push(option)
    }

    renderApp()
}

const removeAll = () => {
    app.options = []

    renderApp()
}

const onMakeDecision = () => {
    const randomNum = Math.floor(Math.random() * app.options.length);
    const option = app.options[randomNum];
    alert(option);
}

const renderApp = () => {
    const numbers = [1,2,3]
    var template = (
        <div>
            <h1>{app.title}</h1>
            <p>{app.subtitle}</p>
            <p>{app.options.length}</p>
            <button disabled={app.options.length === 0} onClick={onMakeDecision}>What should I do?</button>
            <button onClick={removeAll}>Remove all</button>
            <ol>
            {
                app.options.map((option) => {
                    return <li key={option}>{option}</li>
                })
            }
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option"/>
                <button>Add option</button>
            </form>
        </div>
    )


    var appRoot = document.getElementById('app')

    ReactDOM.render(template, appRoot)
}

renderApp()