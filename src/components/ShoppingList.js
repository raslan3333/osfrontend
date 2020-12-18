import React, {Component} from "react";

class ShoppingList extends Component {

    render() {

        return (
            <div className="shopping-list">
                <h1>Shopping List for {this.props.name}</h1>
                <ul>
                    <li>facebook</li>
                    <li>WhatsApp</li>
                    <li>Oculus</li>
                </ul>
            </div>
        );
    }
}
export default ShoppingList;
