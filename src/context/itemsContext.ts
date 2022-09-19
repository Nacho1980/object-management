import React from 'react'
import { IObject, IRelation } from '../components/common/Interface';

/**
 * Context to store the lists of objects and relations.
 * Alternative: use Redux
 * @author Ignacio
 * @version 1.0.0
 */
interface IItemsContext {
  objectList: IObject[];
  addObject: (newObject: IObject) => void;
  deleteObject: (id: number) => void;
  editObject: (object: IObject) => void;
  relationList: IRelation[];
  addRelation: (newRelation: IRelation) => void;
  deleteRelation: (id: number) => void;
  editRelation: (relation: IRelation) => void;
}
export const ItemsContext = React.createContext<IItemsContext>({
  objectList: [],
  addObject: () => {},
  deleteObject: () => {},
  editObject: () => {},
  relationList: [],
  addRelation: () => {},
  deleteRelation: () => {},
  editRelation: () => {}
});
export const ItemsProvider = ItemsContext.Provider
export default ItemsContext