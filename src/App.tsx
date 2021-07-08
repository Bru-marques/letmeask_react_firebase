import {BrowserRouter, Route, Switch} from 'react-router-dom'

import {Home} from './pages/Home'
import {NewRoom} from './pages/NewRoom'
import {Room} from './pages/Room'
import { AdminRoom } from './pages/AdminRoom'

import {AuthContextProvider} from './contexts/AuthContext'

function App() {
  
  return (
    <BrowserRouter>
     <AuthContextProvider>
       <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/rooms/new' component={NewRoom} />
          <Route path='/rooms/:id' component={Room} />
          <Route path='/admin/rooms/:id' component={AdminRoom} />
        </Switch>
      </AuthContextProvider>
    </BrowserRouter>
  );
}
//https://app.rocketseat.com.br/node/mission-react-js/group/nlw-together-react-js/lesson/aula-02-maximum-speed-1

export default App;
