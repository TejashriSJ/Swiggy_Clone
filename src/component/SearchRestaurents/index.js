function SearchRestaurants() {
  return (
    <div className="d-flex flex-column align-items-center">
      <div className="">
        <input
          className="form-control p-2 "
          type="text"
          placeholder="Search for restaurents and food"
        />
      </div>
      <div className="h-100"></div>
    </div>
  );
}

export default SearchRestaurants;
