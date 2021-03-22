import React, { Component } from 'react'
import Contact from './Contact.js'
import { Consumer } from '../../Context.js'

export default class Liste extends Component {

    render() {
        return (
            <Consumer>
                {value => {
                    console.log(value);
                    return (
                        <React.Fragment>
                            <h1 className="display-3 my-4"> Nos contacts :</h1>
                            {value.contacts.map(contact => (
                                <Contact
                                    key={contact.id}
                                    id ={contact.id}
                                    nom={contact.nom}
                                    email={contact.email}
                                    tel={contact.tel}
                                />
                            )
                            )}
                        </React.Fragment>
                    )
                }}
            </Consumer>
        )
    }
}
