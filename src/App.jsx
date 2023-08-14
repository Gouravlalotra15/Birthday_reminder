import React,{ useState } from 'react'
import List from './assets/List'
import Sdata from './Sdata'

function App() {
  const [people, setPeople] = useState(Sdata)

  return (
    <main>
      <section className="container">
      <h3>{people.length} Birthdays today</h3>
      <List people={people}/>
      <button type="button" className='btn btn-block' onClick={()=>setPeople([])}>clear all</button>
      </section>
    </main>
  )
}

export default App
