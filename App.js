/*const heading = React.createElement("h1",{id:"heading",xyz : "abc"},"Hello world in react");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
*/
const parent = React.createElement(
    "div",{id:"parent"},React.createElement("div",{id:"child"},React.createElement("div",{id:"h1"},"this is h1") )
);
const root  = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
