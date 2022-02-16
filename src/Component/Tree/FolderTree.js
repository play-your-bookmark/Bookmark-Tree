import React from "react";
import styled from "styled-component"

export default function FolderTree({ subTree }) {
  let levelDot = "";
  
  for (let i = 0; i < subTree[3]; i++) {
    levelDot += "-";
  }

  return (
  <TreeWrapper>
    <div key={subTree[0]}>
      <span>{levelDot}</span>
      <span>{subTree[1]}</span>
    </div>
    {subTree.length >= 3 &&
      subTree.map((child, index) => {
        if (index < 3) {
          return;
        }

        return <FolderTree subTree={child} />;
      })}
  </TreeWrapper>
  )
}
