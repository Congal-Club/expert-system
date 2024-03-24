import { Switch, Route } from 'wouter'

import Question from '../pages/question'
import Home from '../pages/home'
import Error404 from '../pages/error-404'
import Fruit from '../pages/fruit'

export default function Router() {
  return (
    <>
      <Switch>
        <Route path='/expert-system/' component={Home} />
        <Route path='/expert-system/question/:question' component={Question} />
        <Route path='/expert-system/fruit' component={Fruit} />
        <Route component={Error404} />
      </Switch>
    </>
  )
}
