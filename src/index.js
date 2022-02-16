import React from 'react';
import ReactDOM from 'react-dom';
import FolderTree from './Component/Tree/FolderTree';
import { buildTree } from "./treeMock"
import FOLDERS from "./mock_data/folders.json";

function App() {
  /* Toggle to use mock data */
  const USE_MOCK_DATA = true;

  // tree structure is reproduced as below
  // [ (folder id), (parent folder), (link array), (children), (children) .... ]
  const tree = USE_MOCK_DATA && buildTree(FOLDERS, 0, []);    
  console.log(tree);

  return <FolderTree subTree={tree}/>
}

ReactDOM.render(<App />, document.getElementById('root'));
