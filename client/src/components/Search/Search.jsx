import "./Search.css"

function Search(props) {
  return (
    <form className="search-form" onSubmit={(e) => props.onSubmit(e)}>
      <input
        className="search-input"
        value={props.value}
        onChange={(e) => props.handleSearch(e)}
        name="Search"
        placeholder="Search by Title or Artist"
        type="text"
        autoFocus
      />
    </form>

  )
}

export default Search