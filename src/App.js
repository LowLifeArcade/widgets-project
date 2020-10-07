import React, { useState, useEffect } from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';
import Translate from './components/Translate';
import Route from './components/Route';
import Header from './components/Header';

const items = [
  {
    title: 'What is React?',
    content: 'front end.'
  },

  {
    title: 'What use React?',
    content: "It's a fav."
  },

  {
    title: 'How do you use React?',
    content: 'with your brain.'
  }
];

const options = [
  {
    label: 'The Color Red',
    value: 'red'
  },
  {
    label: 'The Color Green',
    value: 'green'
  },
  {
    label: 'The Color Blue',
    value: 'blue'
  }
];

export default () => {
  const [selected, setSelected] = useState(options[0]);
  // const [selected, setSelected] = useState(options[0]);
  // const [showDropdown, setShowDropdown] = useState(true);

  return (
    <div>
      <Header />
      <Route path="/">
        <Accordion items={items} />
      </Route>
      <Route path="/list">
        <Search items={items} />
      </Route>
      <Route path="/dropdown">
        <Dropdown 
          label="Select a color"
          options={options}
          selected={selected}
          onSelectedChange={setSelected}
        />
      </Route>
      <Route path="/translate">
        <Translate items={items} />
      </Route>
      {/* <Translate /> */}

      {/* <button onClick={() => setShowDropdown(!showDropdown)}>Toggle Dropdown</button>
      {showDropdown ?
        <Dropdown
          selected={selected}
          onSelectedChange={setSelected}
          options={options}
        /> : null
      } */}

      {/* <Accordion items={items} /> */}
      {/* <Search /> */}
    </div>)
};