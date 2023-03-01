const Searchbar = ({keyword, onChange}) => {
    const BarStyle = {width:"10rem",height:"1.8rem", border:"none", padding:"0.3rem"};
    return (
        <form action="/" method="get">
      <input 
      id="header-search"
       style={BarStyle}
       key="search-bar"
       value={keyword}
       placeholder={"🔍 search"}
       
       onChange={(e) => onChange(e.target.value)}
      />
      <button className="searchbt" type="submit">Search</button>
      </form>
    );
  }
  
  export default Searchbar;