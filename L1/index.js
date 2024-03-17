// <----FROM JS ----->
// const root = document.getElementById('root');

// const heading = document.createElement('h1');
// heading.innerHTML='Hello';
// root.appendChild(heading)

// <-----FROM REACT ---->
const root = ReactDOM.createRoot(document.getElementById('root'));
// console.log(root)

// React.createElement() @params tag name , tag attribtes/props, tag's value / children
const h1 = React.createElement('div',{id:'parent'},[
              React.createElement('div',{id:'child1'}, 
                    [React.createElement('h1',{},'hello in child1'),
                    React.createElement('h2',{},'hello in div1')]),
             React.createElement('div',{id:'child2'}, 
                    [React.createElement('h1',{},'hello in child2'),
                    React.createElement('h2',{},'hello in div2')]),
             ])
    ;
    // console.log(h1)
root.render(h1);