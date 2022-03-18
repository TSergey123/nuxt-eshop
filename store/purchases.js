export const state = () => ({
  cart: [],
  products: [],
})

export const getters = {
  PRODUCTS(state) {
    return state.products;
  },
  CART(state) {
    return state.cart
  }
}

export const mutations = {
  SET_PRODUCTS_TO_STATE(state, products) {
    state.products = products
  },

  SET_CART(state, product) {
    state.cart.push(product)
    state.cart = [...new Set(state.cart)]
  },

  REMOVE_FROM_CART(state, index) {
    state.cart.splice(index, 1);
  },
}

export const actions = {
  increment(context) {
    context.commit('increment')
  },
  ADD_TO_CART({
    commit
  }, product) {
    commit('SET_CART', product);
  },
  DELETE_FROM_CART({
    commit
  }, index) {
    commit('REMOVE_FROM_CART', index)
  },
}
