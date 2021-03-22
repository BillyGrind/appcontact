import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './Composants/Interface/Header'
import Liste from './Composants/Contact/Liste.js'
import Contenu from './Composants/Contenu.js'
import { Provider } from './Context.js'
import AddContact from './Composants/Contact/AddContact'
import { HashRouter as HashRouter, Route, Switch } from 'react-router-dom'
import Apropos from './Composants/Pages/Apropos.js'
import Erreur from './Composants/Pages/Erreur.js'

export default function App() {
  return (
    <Provider>
      <HashRouter>
        <div className="App">
          <Header />
          <div className="container">
            {/* <AddContact /> */}
            <Switch>
              <Route exact path="/" component={Liste} />
              <Route exact path="/Liste" component={Liste} />
              <Route exact path="/ajoute" component={AddContact} />
              <Route exact path="/apropos" component={Apropos} />
              <Route component={Erreur} />
            </Switch>
          </div>
        </div>
      </HashRouter>
    </Provider>
  )
}
