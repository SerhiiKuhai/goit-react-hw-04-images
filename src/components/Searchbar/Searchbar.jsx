import React, { useState } from 'react';
import { Header, Form } from 'components/Searchbar/Searchbar.styled';

export function Searchbar({ onSubmit }) {
  const [querySearchbar, setQuerySearchbar] = useState('');

  const handleChange = e => {
    setQuerySearchbar(e.target.value);
  };

  const formSubmit = e => {
    e.preventDefault();
    onSubmit(querySearchbar);
    setQuerySearchbar('');
  };
  return (
    <Header>
      <Form onSubmit={formSubmit}>
        <button type="submit">
          <span>Search</span>
        </button>

        <input
          onChange={handleChange}
          value={querySearchbar}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </Form>
    </Header>
  );
}
