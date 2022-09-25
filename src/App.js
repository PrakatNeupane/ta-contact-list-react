import { useEffect, useState } from 'react';
import './App.css';
import { ContactList } from './components/ContactList';
import { SearchFilter } from './components/SearchFilter';
import { Spinner } from './components/Spinner';
import Title from './components/Title';
import { fetchContacts } from './helper/axiosHelper';

const App = () => {
  const [contacts, setContacts] = useState([])
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    fetchContacts().then(data => {
      setContacts(data)
      setUsers(data)
      setLoading(false)
    })
  }, [])

  const handleOnSearch = e => {
    const { value } = e.target
    const filterArgs = users.filter(user => {
      const userName = (user.name).toLowerCase()
      if (userName.includes(value.toLowerCase())) {
        return true
      }
    }
    )
    setContacts(filterArgs)
  }

  return (
    <div className="wrapper">
      <div className="container">
        <Title />
        <SearchFilter handleOnSearch={handleOnSearch} />

        <hr />
        <div className="row">
          <div className="fw-bold col text-center pb-2">{contacts.length} user{contacts.length > 1 && 's'} found</div>
        </div>
        {loading && <Spinner />}
        <ContactList contact={contacts}></ContactList>
      </div>
    </div>
  );
}

export default App;
