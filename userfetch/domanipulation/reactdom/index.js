const container=document.getElementById('root');
// console.log(container);
const root = ReactDOM.createRoot(container);
const h2 = React.createElement('h2',{style:{color:'black', backgroundColor:'lightgray'}},'Welcome to React');
const h1 = React.createElement('h1',{style:{color:'red', backgroundColor:'lightgray'}},'Hello, React!');
const img=React.createElement('img',{src:'https://civiconcepts.com/wp-content/uploads/2022/08/Engineering-Drawing-Instruments.jpg', width:'500px', height:'500px'});
const div=React.createElement('div',{style:{border:'2px solid black'}},img,h2,h1);
//JSX
const div1=<div><h2>Welcome to React</h2><h1>Hello, React!</h1></div>;
root.render(div1);