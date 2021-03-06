import CoreLayout from 'layouts/CoreLayout/CoreLayout'
import Home from './Home'

export const createRoutes = (store) => ({
  path: '/',
  component: CoreLayout,
  indexRoute: Home,
  childRoutes: []
})

export default createRoutes
