import React, { useState, useEffect } from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';
import Translate from './components/Translate';
import Route from './components/Route';
import Header from './components/Header';

const items = [
  {
    title: 'Where are you?',
    content: 'No where.'
  },

  {
    title: 'What is your purpose?',
    content: "To walk the path."
  },

  {
    title: 'How do you do that?',
    content: 'With my heart.'
  }
];

const options = [
  {
    label: 'Fine tuned',
    value: 'red'
  },
  {
    label: 'Aggressively fast',
    value: 'green'
  },
  {
    label: 'Painfully slow',
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
          label="Selection"
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