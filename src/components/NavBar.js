import React, {Component} from "react";


class NavBar extends Component {

    render() {
        const ul = {
            alignItems:"center",

            display: "flex",
            justifyContent: "space-between",
            listStyle: "none",
            a: {
                textDecoration: "none"
            }
        };
        const a = {
            textDecoration: "none"
        }
        const li = {
            paddingRight: 20,
            PaddingLeft:20,
            inlineBlock: "none"
        }
        const menu = {
            paddingLeft:20
        }
        return (
            <div className="nav-bar" >
                <header style={ul}>
                    <p style={menu}>menu</p>
                    <h1>Wake up sheeple!</h1>
                    <nav>
                        <ul style={ul}>

                            <li style={li}><a href="#" style={a}>Search</a></li>
                            <li style={li}><a href="today.html">Login</a></li>
                            <li style={li}><a href="successes.html">wishlist</a></li>
                            <li style={li}><a href="successes.html">Cart</a></li>
                        </ul>
                    </nav>
                </header>
            </div>
        );
    }
}
export default NavBar;




