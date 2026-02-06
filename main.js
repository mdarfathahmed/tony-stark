import React from "react";
import ReactDom from "react-dom/client"
// const elem = React.createElement("div", { id: "container" }, [
//     React.createElement("h1", { id: "heading", key: "1" }, "Hello react users"),
//     React.createElement("p", { id: "para", key: "2" }, "Hello para users"),
//     React.createElement("p", { id: "para", key: "3" }, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum quasi tempora ipsum explicabo excepturi animi illo laudantium corrupti nobis. Voluptatum doloremque molestias itaque quo maiores rem eaque fugiat aut omnis!")
// ])

// const heading = <h1 className="js" id="heading" key={2}>I am JSX</h1>
import "./App.css"
let num = 22;
const Navbar = () => {
    return (
        <>
            <div>
                <button >Increment</button>
                <h1>
                    num:{num} This is Navbar component
                </h1>
            </div>
        </>
    )
}

const Section = () => {
    return (
        <>
            <div>
                <h1>
                    This is section component <Navbar />
                </h1>
            </div>
        </>
    )
}

const Heading = () => {
    return (
        <>
            <div>
                <h1>
                    This is demo component
                </h1>
            </div>
        </>
    )
}

const Footer = () => {
    return (
        <>
            <h1>
                This is Footer component
            </h1>
        </>
    )
}

const App = () => {
    return (
        <>
            <Navbar />
            <Heading />
            <Section />
            <Footer />
        </>
    )
}

const root = ReactDom.createRoot(document.getElementById("root"))
root.render(<App />);