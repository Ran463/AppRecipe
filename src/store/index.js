import { createStore } from 'vuex';

export default createStore({
  state: {
    recipes: [
      {
        slug: 'mac-n-cheese',
        title: 'Mac N Cheese',
        description:
          'Mac N Cheese is a dish of cooked macaroni pasta and a cheese sauce, most commonly cheddar. It can also incorporate other ingredients, such as breadcrumbs or meat.',
        ingredients: [
          '1 (8 ounce) box elbow macaroni',
          '¼ cup butter',
          '¼ cup all-purpose flour',
          '½ teaspoon salt',
          'ground black pepper to taste',
          '2 cups milk',
          '2 cups shredded Cheddar cheese',
        ],
        method: [
          'Bring a large pot of lightly salted water to a boil. Cook elbow macaroni in the boiling water, stirring occasionally until cooked through but firm to the bite, 8 minutes.',
          'At the same time, melt butter in a saucepan over medium heat. Add flour, salt, and pepper and stir until smooth, about 5 minutes. Pour in milk slowly, while stirring continuously. Continue to cook and stir until mixture is smooth and bubbling, about 5 minutes, making sure the milk doesnt burn.',
          'Add Cheddar cheese and stir until melted, 2 to 4 minutes.',
          'Drain macaroni and fold into cheese sauce until coated.'
        ]
      },

      {
        slug: 'mi-gorang-noodles',
        title: 'Mi-Gorang Noodles',
        description:
          'Mac N Cheese is a dish of cooked macaroni pasta and a cheese sauce, most commonly cheddar. It can also incorporate other ingredients, such as breadcrumbs or meat.',
        ingredients: [
          '1 (8 ounce) box elbow macaroni',
          '¼ cup butter',
          '¼ cup all-purpose flour',
          '½ teaspoon salt',
          'ground black pepper to taste',
          '2 cups milk',
          '2 cups shredded Cheddar cheese',
        ],
        method: [
          'Bring a large pot of lightly salted water to a boil. Cook elbow macaroni in the boiling water, stirring occasionally until cooked through but firm to the bite, 8 minutes.',
          'At the same time, melt butter in a saucepan over medium heat. Add flour, salt, and pepper and stir until smooth, about 5 minutes. Pour in milk slowly, while stirring continuously. Continue to cook and stir until mixture is smooth and bubbling, about 5 minutes, making sure the milk doesnt burn.',
          'Add Cheddar cheese and stir until melted, 2 to 4 minutes.',
          'Drain macaroni and fold into cheese sauce until coated.'
        ]
      }
    ]
  },
  // getters: {},
  mutations: {
    ADD_RECIPE (state, recipe) {
      state.recipes.push(recipe);
    }
  }
});
