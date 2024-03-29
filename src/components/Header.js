import React from "react";

// remember to use camelCase for CSS within components!
const styles = {
    jumbotron: {
        backgroundColor: "#65017e",
        color: "#c4c6c7",
        textAlign: "center"
    },
    h2: {
        fontSize: "28px",
        color: "#c4c6c7"
    },
    p: {
        fontSize: "24px",
        color: "#c4c6c7"
    }

};

function Header(props) {
    return (
        <div className="container">
            <div className="jumbotron" style={styles.jumbotron}>
                <h1>Memory Game!</h1>
                <h2 style={styles.h2}>Points: {props.score}</h2>
                <p style={styles.p}>{props.message}</p>
            </div>
        </div>
    );
}

export default Header;