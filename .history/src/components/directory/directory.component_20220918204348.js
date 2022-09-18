const Directory = () => {

    return(
        <div className="categories-container">
        {categories.map((category) => (
          <CategoryItem key={category.id} category={category} />
        ))}
      </div>;
    )

};
