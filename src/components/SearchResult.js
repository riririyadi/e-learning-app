import React, { useEffect } from "react";

export default function SearchResult() {

	useEffect(()=>{
		document.title = "E-learning | Search"
	},[])

  return (
    <div>
      <h5 className="mt-4 mb-4">Search Result</h5>
      <div>No result found. 😓😓😓</div>
    </div>
  );
}
