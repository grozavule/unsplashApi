import { useState } from 'react';

const SearchBar = ({ onSubmit }) => {
  const [term, setTerm] = useState('');

  const handleInputChange = (e) => {
    let term = e.target.value;
    setTerm(term);
  };
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    onSubmit(term);
  }

  return (
    <form onSubmit={handleSearchSubmit}>
      <div className="form-floating mt-3 mb-3">
        <input type="text" id="term" name="term" maxLength="50" className="form-control" onChange={handleInputChange} value={term} />
        <label htmlFor="term">Term</label>
      </div>
    </form>
  );
}
export default SearchBar;
