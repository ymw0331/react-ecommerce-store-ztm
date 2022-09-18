const App = () => {

  const categories = [
    {
      title:"Hats",
      subtitle: ""
    }
  ]

  return (
    <div className="categories-container">
      <div className="category-container">
        {/* <img/> */}
        <div className="category-body-container">
          <h2>Hats</h2>
          <p>Shop Now</p>
        </div>
      </div>
    </div>
  );
};

export default App;
