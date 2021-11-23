console.log('App.js is running')

const renderJSX = () => {
    const template = (
      <div>
        <h1>Hello world</h1>
      </div>
    );
    
    const appRoot = document.getElementById('app');
    
    ReactDOM.render(template, appRoot)
  }
  
  renderJSX()