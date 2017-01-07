var Search = (prop) => (
  <div className="search-bar form-inline">
    <input className="form-control" type="text" onChange={prop.prop}/>
    <button className="btn hidden-sm-down">
      <span className="glyphicon glyphicon-search"></span>
    </button>
  </div> 
);
window.onVideoChange = function(event) {
  console.log($(event.target).val());
}; 
// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.Search = Search;
