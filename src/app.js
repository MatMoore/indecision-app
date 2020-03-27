console.log("App.js is running");

const app = {
    title: "Hello App!",
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

const user = {
    name: "Mat",
    age: 32,
    location: "London"
}

const templateTwo = (
    <div>
        <h1>{user.name}</h1>
        <p>Age: {user.age}</p>
        <p>Location: {user.location}</p>
    </div>
)
var appRoot = document.getElementById('app')

ReactDOM.render(template, appRoot)
