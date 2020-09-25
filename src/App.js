import React from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search'

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
]

export default () => {
  return (
    <div>
    {/* <Accordion items={items} /> */}
    <Search />
  </div>)
};