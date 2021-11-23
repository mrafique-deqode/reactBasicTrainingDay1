console.log('App.js is running')

const onFormSubmit = (e) => {
    e.preventDefault()

    const option = e.target.elements.option.value

    if (option) {
        app.options.push(option)
        e.target.elements.option.value = ''
        renderJSX()
    }
}

const resetData = () => {
    app.options = []
    renderJSX()
}

const app = {
    title: "Hello world!",
    options: []
}


const renderJSX = () => {
    const template = (
      <div>
        <h1>{app.title}</h1>
        <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
        <ol>
            {
                app.options.map((option) => {
                    return <li key={option}>{option}</li>
                })
            }
        </ol>
        <form onSubmit={onFormSubmit}>
            <input type="text" name="option" placeholder="Enter Data"/>
            <button>Submit</button>
        </form>
        <br />
        <button onClick={resetData}>Reset</button>
      </div>
    );
    
    const appRoot = document.getElementById('app');
    
    ReactDOM.render(template, appRoot)
  }
  
  renderJSX()