import React from 'react';
import Books from '@components/books';

interface IBooksContainer {}

export default function BooksContainer({}: IBooksContainer) {
  const handleSubmitSearch = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
    } catch (error) {}
  };

  const handleChangeKeyword = () => {};

  return <Books handleSubmitSearch={handleSubmitSearch} handleChangeKeyword={handleChangeKeyword} />;
}
