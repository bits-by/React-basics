const heading = React.createElement('div', {id: "parent"} , 
    [   React.createElement('div', {id: "child1"}, [
            React.createElement('h1',{}, "this is H1 heading..."),
            React.createElement('h2',{}, "this is H2 heading..."),
        ]),
        React.createElement('div', {id: "child2"}, [
            React.createElement('h1',{}, "this is H1 heading..."),
            React.createElement('h2',{}, "this is H2 heading..."),
        ])
    ])   
console.log(heading) // JS object
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(heading);  //take JS object and put it on DOM
