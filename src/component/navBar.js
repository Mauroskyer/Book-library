import { Link } from "react-router-dom"

export default function NavBar() {
    const linkStyle = {
        padding: "10px",
        display: "block",
        fontSize: "18px",
        color: "white",
        textDecoration: "none",
    };

    const navContainerStyle = {
        backgroundColor: "#181D27",
        paddin: "10px",
        display: "flex",
        gap: "5px",
        justifyContent: "center",
    };

    return(
        <div style={navContainerStyle}>
            <Link style={linkStyle} to="/">Home</Link>
            <Link style={linkStyle} to="/create">Create</Link>
        </div>
    )

}