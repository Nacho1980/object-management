import { useState, useContext } from "react";
import ItemsContext from "../../context/itemsContext";
import { ItemActions } from "../common/ItemActions/ItemActions";
import { EditableObject } from "../common/Object/EditableObj";
import { Object } from "../common/Object/Obj";
import { EditableRelation } from "../common/Relation/EditableRelation";
import { Relation } from "../common/Relation/Relation";
import { EmptyListWarning, ListWrapper, ObjectFieldsWrapper, RelationFieldsWrapper, Row } from "./styles";

type CRUDProps = {
  itemType: string;
};

/**
 * List objects and relations
 * @author Ignacio
 * @version 1.0.0
 * @param itemType the type of item (object or relation)
 */
export const ItemsList = ({ itemType }: CRUDProps) => {
  const {
    objectList,
    relationList
  } = useContext(ItemsContext);
  const [editId, setEditId] = useState(-1)
  const isObject = itemType === 'object'
  const isRelation = itemType === 'relation'
  const listId = isObject ? 'objectList' : 'relationList'
  return (
    <div id={listId}>
      {isObject && objectList.length === 0 && (
        <EmptyListWarning>
          No objects, click on add to create a new one
        </EmptyListWarning>
      )}
      {isRelation && objectList && objectList.length > 0 && relationList.length === 0 && (
        <EmptyListWarning>
          No relations, click on add to create a new one
        </EmptyListWarning>
      )}
      <ListWrapper>
        {isObject &&
          objectList.map((obj, index) => {
            const even = (index % 2) === 0
            const editing = (obj.id === editId)
            const rowId = 'row' + index
            if (editing) {
              return (
                <Row even={even} key={obj.id} id={rowId} data-testid='row'>
                  <EditableObject
                    id={obj.id}
                    name={obj.name}
                    description={obj.description}
                    type={obj.type}
                    onCancel={() => setEditId(-1)}
                    onAccept={() => setEditId(-1)}
                  />
                </Row>
              )
            } else {
              return (
                <Row even={even} key={obj.id} id={rowId} data-testid='row'>
                  <ObjectFieldsWrapper>
                    <Object
                      id={obj.id}
                      name={obj.name}
                      description={obj.description}
                      type={obj.type}
                    />
                    <ItemActions 
                      itemType={itemType}
                      itemId={obj.id}
                      onEdit={() => setEditId(obj.id)}
                    />
                  </ObjectFieldsWrapper>
                </Row>
              )
            }
            })}
        {isRelation &&
          relationList.map((rel, idx) => {
            const even = (idx % 2) === 0
            const editing = (rel.id === editId)
            const rowId = 'row' + idx
            if (editing) {
              return (
                <Row even={even} key={rel.id} id={rowId} data-testid='row'>
                  <EditableRelation
                    id={rel.id}
                    name={rel.name}
                    obj1Id={rel.obj1Id}
                    obj2Id={rel.obj2Id}
                    onAccept={() => setEditId(-1)}
                    onCancel={() => setEditId(-1)}
                  />
                </Row>
              )
            } else {
              return (
                <Row even={even} key={rel.id} id={rowId} data-testid='row'>
                  <RelationFieldsWrapper>
                    <Relation
                      id={rel.id}
                      name={rel.name}
                      obj1Id={rel.obj1Id}
                      obj2Id={rel.obj2Id}
                    />
                    <ItemActions 
                      itemType={itemType}
                      itemId={rel.id}
                      onEdit={() => setEditId(rel.id)}
                    />
                  </RelationFieldsWrapper>
                </Row>
              )
            }
          })}
      </ListWrapper>
    </div>
  );
};
