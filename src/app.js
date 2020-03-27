console.log("App.js is running");

const app = {
    title: "Indecision App",
    subtitle: "This will solve all your problems",
}

var template = (
    <div>
        <h1>{app.title}</h1>
        <p>{app.subtitle}</p>
        <ol>
            <li>Item one</li>
            <li>Item two</li>
            <li>Item three</li>
        </ol>
    </div>
)

let count = 0
const addOne = () => {
    count += 1
    renderCounterApp()
}
const minusOne = () => {
    count -= 1
    renderCounterApp()
}
const reset = () => {
    count = 0
    renderCounterApp()
}

const renderCounterApp = () => {
    const templateTwo = (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={addOne}>+1</button>
            <button onClick={minusOne}>-1</button>
            <button onClick={reset}>Reset</button>
        </div>
    )

    var appRoot = document.getElementById('app')

    ReactDOM.render(templateTwo, appRoot)
}

renderCounterApp()
