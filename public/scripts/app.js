'use strict';

console.log('App.js is running');

var onFormSubmit = function onFormSubmit(e) {
    e.preventDefault();

    var option = e.target.elements.option.value;

    if (option) {
        app.options.push(option);
        e.target.elements.option.value = '';
        renderJSX();
    }
};

var resetData = function resetData() {
    app.options = [];
    renderJSX();
};

var app = {
    title: "Hello world!",
    options: []
};

var renderJSX = function renderJSX() {
    var template = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            app.title
        ),
        React.createElement(
            'p',
            null,
            app.options.length > 0 ? 'Here are your options' : 'No options'
        ),
        React.createElement(
            'ol',
            null,
            app.options.map(function (option) {
                return React.createElement(
                    'li',
                    { key: option },
                    option
                );
            })
        ),
        React.createElement(
            'form',
            { onSubmit: onFormSubmit },
            React.createElement('input', { type: 'text', name: 'option', placeholder: 'Enter Data' }),
            React.createElement(
                'button',
                null,
                'Submit'
            )
        ),
        React.createElement('br', null),
        React.createElement(
            'button',
            { onClick: resetData },
            'Reset'
        )
    );

    var appRoot = document.getElementById('app');

    ReactDOM.render(template, appRoot);
};

renderJSX();
