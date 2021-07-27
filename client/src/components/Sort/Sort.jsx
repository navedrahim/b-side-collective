import "./Sort.css"

const Sort = (props) => {

  const handleSort = (e) => {
    props.handleSort(e.target.value)
  }

  return (
    <form className="sort-container" onSubmit={props.handleSubmit}>
      <select className="sort" onChange={handleSort}>
        <option value="">&nbsp; Select Sort Type &nbsp;</option>
        <option className="option" value="album-ascending">&nbsp; Albums, A-Z &nbsp;</option>
        <option className="option" value="album-descending">&nbsp; Albums, Z-A &nbsp;</option>
        <option className="option" value="artist-ascending">&nbsp; Artists, A-Z &nbsp;</option>
        <option className="option" value="artist-descending">&nbsp; Artists, Z-A &nbsp;</option>
      </select>
    </form>
  )
}

export default Sort