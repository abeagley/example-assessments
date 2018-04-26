import { LocationOptions, routerForHash } from 'redux-little-router'

const routes = {
  '/': {
    title: 'Assessment 1'
  },
  '/rooms': {
    title: 'Assessment 2'
  }
}

const { reducer, middleware, enhancer } = routerForHash({
  routes
})

export default {
  reducer,
  middleware,
  enhancer
}

export interface Router {
  key: string
  hash: string
  route: string
  search: string
  pathname: string
  state: { [key: string]: string | number }
  query: { [key: string]: string | number }
  params: { [key: string]: string | number }
  options: LocationOptions
}
