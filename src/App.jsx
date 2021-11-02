import logo from './logo.svg';
import './App.css';
import contacts from './contacts.json'
import React from "react";


const contactsArray = contacts.slice(0,5);

function randomContact() {
  const index = Math.floor((Math.random()*contactsArray.length))+4;
  return contacts[index]
}

class App extends React.Component {

  state = {
    contacts: contactsArray,
  };

  handleRandom = () => {

    this.setState(
      {
        contacts: [...this.state.contacts, randomContact()]
      },
      () => {
        console.log(this.state.contacts);
      }
    );
  };


  handleName = (evt) => {

    this.setState(
      {
        contacts: [...this.state.contacts].sort((a, b) => a.name.localeCompare(b.name))
      },
      () => {
        console.log(this.state.contacts);
      }
    );
  };

  handlePopularity = (evt) => {
    this.setState(
      {
        contacts: [...this.state.contacts].sort((a, b) => a.popularity - b.popularity)
      },
      () => {
        console.log(this.state.contacts);
      }
    );
  };

  handleDelete = (id) => {
    this.setState(
      {
        contacts: [...this.state.contacts].filter((contact) => contact.id != id)
      },
      () => {
        console.log(this.state.contacts);
      }
    );
  };


  render () {
    return (<div className="App">

      <button onClick={this.handleRandom}>Add Random Contact</button>
      <button onClick={this.handleName}>Sort by name</button>
      <button onClick={this.handlePopularity}>Sort by popularity</button>


      <table>
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {
              this.state.contacts.map((contact, index) => {
              return (<tr key={index}>
                          <td> <img src={contact.pictureUrl} alt="contacts face" width="100px"/></td>
                          <td>{contact.name}</td>
                          <td>{Math.floor(contact.popularity*100)/100}</td>
                          <td><button onClick={() => this.handleDelete(contact.id)}>Delete</button></td>
                      </tr>)
              })
          }

        </tbody>
      </table>

    </div>)
  };
}

export default App;

{/* <ul>
      {
        users.map((toto, i) => <div key={i}>{toto}</div>)
      }
    </ul> */}