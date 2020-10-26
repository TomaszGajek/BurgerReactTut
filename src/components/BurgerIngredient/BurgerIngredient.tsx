import React from 'react';
import { Ingredients } from '../../shared/models/Ingredients';
import { BreadBottom, BreadTop, Seeds1, Seeds2, Meat, Cheese, Bacon, Salad } from './BurgerIngredient.styles';

type ComponentProps = {
  type: Ingredients
}

const BurgerIngredient = (props: ComponentProps) => {
  let ingredient = null;

  switch(props.type) {
    case(Ingredients.BreadBottom):
      ingredient = <BreadBottom></BreadBottom>;
      break;
    case(Ingredients.BreadTop):
      ingredient = (
        <BreadTop>
          <Seeds1></Seeds1>
          <Seeds2></Seeds2>
        </BreadTop>
      )
      break;
    case(Ingredients.Meat):
      ingredient = <Meat></Meat>;
      break;
    case(Ingredients.Cheese):
      ingredient = <Cheese></Cheese>;
      break;
    case(Ingredients.Salad):
      ingredient = <Salad></Salad>;
      break;
    case(Ingredients.Bacon):
      ingredient = <Bacon></Bacon>;
       
  }

  return ingredient;

}
export default BurgerIngredient;
