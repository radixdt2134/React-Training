import React from "react";
import queryString from "query-string";

const Posts = ({ match, location }) => {
  const result = queryString.parse(location.search);
  console.log(result);
  return (
    <React.Fragment>
      <div>
        <div>Posts</div>
        Year :<h5> {match.params.year}</h5>
        Month :<h5> {match.params.month}</h5>
      </div>
    </React.Fragment>
  );
};

export default Posts;
