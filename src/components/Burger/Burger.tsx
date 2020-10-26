import React from 'react';
import { Ingredient, Ingredients } from '../../shared/models/Ingredients';
import BurgerIngredient from '../BurgerIngredient/BurgerIngredient';
import { BurgerWrapper } from './Burger.styles';

type ComponentProps = {
  ingredients: Ingredient[]
}

const Burger = ({ ingredients }: ComponentProps) => {
  const transformedIngredients: Ingredient[] = [];

  ingredients.map( ingredient => {
    console.log(ingredient);
    for( let i = 0; i < ingredient.amount; i++ ){
       transformedIngredients.push(ingredient); 
    }

  });

  return (
    <BurgerWrapper>
      <BurgerIngredient type={Ingredients.BreadTop}/>
      { transformedIngredients.map((ingredient, index) => <BurgerIngredient key={index} type={ingredient.type} /> ) }
      <BurgerIngredient type={Ingredients.BreadBottom}/>
    </BurgerWrapper>
  )
};

export default Burger;
