import React from "react";
import ReactDOM from "react-dom";

const span= (<h1>Span Eelement</h1>);

const Title= () =>(<h1 id="title">Namaste React in Jsx</h1>);

const body= (<h1 > {span} Body React Eelement in Jsx</h1>);


const HeadingComponent = () => (
<div> 
{Title()} {/*can be called as a function too */}
<Title></Title>
<Title />  //This is ComponentCompo sition
{body}
<h1 id="heading">Namaste React in React Component</h1>
</div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent/>);