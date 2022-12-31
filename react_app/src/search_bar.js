import "./search_bar.css";

function SearchBar(props) {
  const searchHandler = (event) => {
    //console.log(event);
    props.searchEvent(event.target.value);
  };

  return (
    <div className="search">
      <label> Search Product</label>
      <input type="text" onChange={searchHandler}></input>
    </div>
  );
}

export default SearchBar;
