import React from "react";

const SearchComponent = ({ data, setInputBox }) => {
  console.log(data?.suggestionGroup?.suggestionList.suggestion);
  return (
    <div>
      {data?.suggestionGroup?.suggestionList.suggestion?.map(
        (element, index) => (
          <div
            key={index}
            onClick={() => {
              setInputBox(element);
            }}
          >
            {element}
          </div>
        )
      )}
    </div>
  );
};

export default SearchComponent;
