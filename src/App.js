import React, { useEffect, useState } from "react";
import "./App.css";
import { blogData, filterData } from "./utils/commonData";
import moment from "moment";

const App = () => {
  const [filters, setFilters] = useState([]);
  const [blogs, setBlogs] = useState([]);
  const [originalBlogs, setOriginalBlogs] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    setFilters(filterData);
    setBlogs(blogData);
    setOriginalBlogs(blogData);
  }, []);

  const onSearch = () => {
    const updatedValue = originalBlogs.filter((item) =>
      item.authorname.toLowerCase().includes(searchValue.toLowerCase())
    );
    setBlogs(updatedValue);
  };

  const onReset = () => {
    setBlogs(originalBlogs);
  };

  return (
    <div>
      <Header />

      <div className="search-div">
        <input onChange={(e) => setSearchValue(e.target.value)} />
        <button onClick={onSearch}>Search</button>
        <button onClick={onReset}>Reset</button>
      </div>

      <div className="capsule-wrapper">
        {filters.length &&
          filters.map(({ id, title }) => (
            <div className="capsule" key={id}>
              {title}
            </div>
          ))}
      </div>

      <div className="blog-wrapper">
        {blogs.length &&
          blogs.map(
            ({
              authorname,
              id,
              small_image,
              posted_on,
              description,
              title,
            }) => (
              <div className="blog" key={id}>
                <img src={small_image} alt="img" />
                <div className="blog-data">
                  <h4>{title}</h4>
                  <p className="publish-details">
                    {authorname}
                    <span> | {moment(posted_on).format("DD MMM YYYY")}</span>
                  </p>
                  <p className="blog-desc">{description}</p>
                </div>
              </div>
            )
          )}
      </div>
    </div>
  );
};

export default App;

const Header = () => {
  return (
    <div className="header">
      <div className="left-navbar">
        <a href="https://www.edyoda.com">
          <h3>EDYODA</h3>
          <p>Stories</p>
        </a>
        <a className="categories-href" href="https://www.edyoda.com">
          Explore Categories
        </a>
      </div>
      <div className="right-navbar">
        <p>
          EdYoda is free learning and knowledge <br />
          sharing platform for techies
        </p>
        <a href="https://www.edyoda.com">Go To Main Website</a>
      </div>
    </div>
  );
};
