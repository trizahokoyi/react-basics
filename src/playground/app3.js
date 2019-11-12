// jsx-javascript xml
var app = {
    title: 'Todo App',
    subtitle: 'business goals',
    options:[]
}
const onFormSubmit = (event) => {
    event.preventDefault()
    const option = event.target.elements.option.value;

    if(option) {
        app.options.push(option);
        event.target.elements.option.value = '';
        render();
    }
};
const onRemoveAll = () => {
    app.options = [];
    render();
};

const onMakeDecision = () => {
    const randomNum = Math.floor(Math.random() * app.options.length);
    const option = app.options[randomNum];
    alert(option);
};

const appRoot = document.getElementById('app');
const render = () => {
    var template = (
        <div>
            <h1>{app.title}</h1>
            {app.title && <p>{app.subtitle}</p>}
            <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
            <button disabled={app.options.length === 0} onClick={onMakeDecision}>what should I do ?</button>
            <button onClick={onRemoveAll}>Remove All</button>
            <ol>
                {
                    app.options.map((option, index) => {
                        return(
                            <li key={index}>{option}</li>
                        );
                    })
                }
                
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option"/>
                <button>Add Option</button>
                </form>
        </div>
    );

    ReactDOM.render(template, appRoot);
};

render();