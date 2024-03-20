import React from "react";

type instructorListType = {
  instList: {
    firstname: string;
    lastName: string;
  }[];
};
export const List = (props: instructorListType) => {
  return (
    <div>
      {props.instList.map((data) => {
        return (
          <>
            <p>{data.firstname}</p>
            <p>{data.lastName}</p>
          </>
        );
      })}
    </div>
  );
};
