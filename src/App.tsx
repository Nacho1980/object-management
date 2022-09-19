import React, {useCallback, useState} from 'react';
import './App.css';
import { AppHeader } from './components/Header/AppHeader';
import { QuickSearch } from './components/ItemListing/QuickSearch';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import { ItemCRUD } from './components/ItemListing/ItemCRUD';
import { IObject, IRelation } from './components/common/Interface';
import { ItemsProvider } from './context/itemsContext';

const LOCAL_STG_OBJ_LIST_KEY = 'objectList'
const LOCAL_STG_REL_LIST_KEY = 'relationList'

function App() {

  // Initialize local storage
  initializeLocalStorage()

  // Initialize context
  const jsonOList = localStorage.getItem(LOCAL_STG_OBJ_LIST_KEY)
  const jsonRList = localStorage.getItem(LOCAL_STG_REL_LIST_KEY)
  const initObjList = jsonOList && JSON.parse(jsonOList)
  const initRelList = jsonRList && JSON.parse(jsonRList)
  const [objectList, setObjectList] = useState<IObject[]>(initObjList || []);
  const [relationList, setRelationList] = useState<IRelation[]>(initRelList || []);

  const addObject = useCallback(
    (newObject: IObject) => {
      const newObjList = [...objectList, newObject]
      setObjectList(newObjList)
      localStorage.setItem('objectList', JSON.stringify(newObjList));
    },
    [objectList]
  );
  const deleteObject = useCallback(
    (id: number) => {
      const newObjList = objectList.filter(o => o.id !== id)
      setObjectList(newObjList)
      localStorage.setItem('objectList', JSON.stringify(newObjList));
      // Remove any relations that include the object
      const newRelList = relationList.filter(r => (r.obj1Id !== id) && (r.obj2Id !== id))
      setRelationList(newRelList)
      localStorage.setItem('relationList', JSON.stringify(newRelList));
    }, 
    [objectList]
  );
  const editObject = useCallback(
    (newObject: IObject) => {
      const pos = objectList.map(e => e.id).indexOf(newObject.id)
      objectList.splice(pos, 1, newObject)
      setObjectList(objectList)
      localStorage.setItem('objectList', JSON.stringify(objectList));
    },
    [objectList]
  );

  const addRelation = useCallback(
    (newRelation: IRelation) => {
      const newRelList = [...relationList, newRelation]
      setRelationList(newRelList)
      localStorage.setItem('relationList', JSON.stringify(newRelList));
    },
    [relationList]
  );
  const deleteRelation = useCallback(
    (id: number) => {
      const newRelList = relationList.filter(o => o.id !== id)
      setRelationList(newRelList)
      localStorage.setItem('relationList', JSON.stringify(newRelList));
    }, 
    [relationList]
  );
  const editRelation = useCallback(
    (newRelation: IRelation) => {
      const pos = relationList.map(e => e.id).indexOf(newRelation.id)
      relationList.splice(pos, 1, newRelation)
      setRelationList(relationList)
      localStorage.setItem('relationList', JSON.stringify(relationList));
    },
    [relationList]
  );

  return (
    <ItemsProvider value={{
      objectList,
      addObject,
      deleteObject,
      editObject,
      relationList,
      addRelation,
      deleteRelation,
      editRelation,
    }}>
        <Router>
          <div>
            <AppHeader />

            {/* Looks through its children <Route>s and
                renders the first one that matches the current URL. */}
            <Routes>
              <Route path="/" element={<QuickSearch list={objectList}/>}>                
              </Route>
              <Route path="/objects" element={<ItemCRUD itemType='object'/>}>                
              </Route>
              <Route path="/relations" element={<ItemCRUD itemType='relation'/>}>                
              </Route>
            </Routes>
          </div>
        </Router>
    </ItemsProvider>
  );
}

// Initialize local storage
const initializeLocalStorage = () => {
  const jsonOList = localStorage.getItem(LOCAL_STG_OBJ_LIST_KEY)
  const jsonRList = localStorage.getItem(LOCAL_STG_REL_LIST_KEY)
  if (!jsonOList) {
    localStorage.setItem(LOCAL_STG_OBJ_LIST_KEY, JSON.stringify([]))
  }
  if (!jsonRList) {
    localStorage.setItem(LOCAL_STG_REL_LIST_KEY, JSON.stringify([]))
  }
}

export default App;
