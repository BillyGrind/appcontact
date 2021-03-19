import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './Composants/Interface/Header'
import Liste from './Composants/Contact/Liste.js'
import Contenu from './Composants/Contenu.js'
import { Provider } from './Context.js'
import AddContact from './Composants/Contact/AddContact'

export default function App() {
  return (
    <Provider>
      <div className="App">
        <Header />
        <div>
          Bili
        </div>
        <div className="container">
          <AddContact/>
          <Liste />
        </div>
      </div>
    </Provider>
  )
}
