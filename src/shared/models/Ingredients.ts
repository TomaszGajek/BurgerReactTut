export enum Ingredients {
    BreadBottom = 'bread-bottom',
    BreadTop = 'bread-top',
    Meat = 'meat',
    Cheese = 'cheese',
    Salad = 'salad',
    Bacon = 'bacon'
}

export type Ingredient = {
    type: Ingredients,
    amount: number
}