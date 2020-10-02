import React from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';

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
  return (
    <div>
    {/* <Accordion items={items} /> */}
    {/* <Search /> */}
    <Dropdown options={options} />
  </div>)
};