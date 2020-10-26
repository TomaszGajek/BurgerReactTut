import React, { Component } from 'react';
import Burger from '../../components/Burger/Burger';
import Aux from '../../hoc/Hoc';
import { Ingredients } from '../../shared/models/Ingredients';

class BurgerBuilder extends Component {
    
    
state = {

    ingredients: [
        {
            type: Ingredients.Salad,
            amount: 1
        },
        {
            type: Ingredients.Bacon,
            amount: 1,
        },
        {
            type: Ingredients.Cheese,
            amount: 2,
        },
        {
            type: Ingredients.Meat,
            amount: 2
        }
    ]
}

    render() {
        return (
            <Aux>
                <Burger ingredients={ this.state.ingredients } />
                <div>Build Controls</div>
            </Aux>
        )
    }
}

export default BurgerBuilder;