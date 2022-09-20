import { Alert, Snackbar } from "@mui/material";
import { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import ItemsContext from "../../context/itemsContext";
import {
  objectTypes,
  createNewId,
  objectExists,
  relationExists,
} from "../../utils";
import { Dropdown, ObjectDropdown } from "../common/Dropdown/Dropdown";
import { TextInput } from "../common/TextInput/TextInput";
import {
  AddButton,
  FormField,
  AddObjWrapper,
  AddRelWrapper,
  AddRelSpan,
  AddButtonWrapper,
  EmptyListWarning,
  SeparatedText,
} from "./styles";

type AddItemProps = {
  itemType: string;
};

/**
 * A form to add a new item (object or relation)
 * @author Ignacio
 * @version 1.0.0
 * @param itemType Type of object to be added
 * @param editing Boolean that indicates if it's being edited
 * @param setEditing Function to enable editing
 * @returns
 */
export const AddItemForm = ({ itemType }: AddItemProps) => {
  // Common context and state for objects and relations
  const { objectList, relationList, addObject, addRelation } =
    useContext(ItemsContext);
  const isObject = itemType === "object";
  const isRelation = itemType === "relation";
  const [showAlert, setShowAlert] = useState<boolean>(false);
  const [showObjErrors, setShowObjErrors] = useState<boolean>(false);
  const [showRelErrors, setShowRelErrors] = useState<boolean>(false);

  // Fields to create object
  const [objectName, setObjectName] = useState<string>("");
  const [objectDescription, setObjectDescription] = useState<string>("");
  const [objectType, setObjectType] = useState<
    "desk" | "computer" | "keyboard" | "server" | "human"
  >("desk");
  const objectTypeOptions = objectTypes.map((type) => {
    return {
      label: type,
      value: type,
    };
  });
  const resetObjFields = () => {
    setObjectName("");
    setObjectDescription("");
    setObjectType("desk");
    setShowObjErrors(false);
  };

  // Create an object and pass it to the onAdd function
  const addObj = () => {
    const existsAlready = objectExists(
      objectList,
      objectName,
      objectDescription,
      objectType
    );
    const allFieldsFilled = objectName && objectDescription && objectType;
    if (!allFieldsFilled) {
      setShowObjErrors(true);
    } else if (existsAlready) {
      // Already exists in the list
      setShowAlert(true);
    } else {
      const newId = createNewId();
      const obj = {
        id: newId,
        name: objectName,
        description: objectDescription,
        type: objectType,
      };
      addObject(obj);
      resetObjFields();
    }

  };

  // Fields to create relation
  const [relationName, setRelationName] = useState<string>("");
  const firstItemId =
    objectList && objectList.length > 0 ? objectList[0].id : 0;
  const [selectedObject1, setSelectedObject1] = useState<number>(firstItemId);
  const [selectedObject2, setSelectedObject2] = useState<number>(firstItemId);
  const resetRelFields = () => {
    setRelationName("");
    setSelectedObject1(objectList && objectList.length > 0 ? objectList[0].id : 0);
    setSelectedObject2(objectList && objectList.length > 0 ? objectList[0].id : 0);
    setShowRelErrors(false);
  };

  // Create a relation and pass it to the onAdd function
  const addRel = () => {
    const existsAlready = relationExists(
      relationList,
      relationName,
      selectedObject1,
      selectedObject2
    );
    const allFieldsFilled = relationName && (selectedObject1 > 0) && (selectedObject2 > 0);
    if (!allFieldsFilled) {
      setShowRelErrors(true);
    } else if (existsAlready) {
      // Already exists in the list
      setShowAlert(true);
    } else {
      const existsSelObj1 = objectList.some(obj => obj.id === selectedObject1)
      const existsSelObj2 = objectList.some(obj => obj.id === selectedObject2)
      if (!existsSelObj1) {
        setSelectedObject1(objectList[0].id)
      }
      if (!existsSelObj2) {
        setSelectedObject2(objectList[0].id)
      }
      const newId = createNewId();
      const rel = {
        id: newId,
        name: relationName,
        obj1Id: existsSelObj1 ? selectedObject1 : objectList[0].id,
        obj2Id: existsSelObj2 ? selectedObject2 : objectList[0].id,
      };
      addRelation(rel);
      resetRelFields();
    }
  };

  return (
    <>
      {/* Add Object */}
      {isObject && (
        <AddObjWrapper>
          <FormField>
            <Dropdown
              id={"addObjectType"}
              value={objectType}
              onChange={setObjectType}
              options={objectTypeOptions}
            />
          </FormField>
          <FormField>
            <TextInput
              id={"addObjectName"}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setObjectName(e.target.value)
              }
              value={objectName}
              placeholder={"Object name"}
              error={showObjErrors && !objectName}
            />
          </FormField>
          <FormField>
            <TextInput
              id={"addObjectDescription"}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setObjectDescription(e.target.value)
              }
              value={objectDescription}
              placeholder={"Object description"}
              error={showObjErrors && !objectDescription}
            />
          </FormField>
          <FormField>
            <AddButton
              id="addObjectButton"
              //disabled={addObjectDisabled}
              onClick={() => addObj()}
            >
              Add
            </AddButton>
          </FormField>
        </AddObjWrapper>
      )}
      
      {/* Add Relation */}
      {isRelation && objectList && objectList.length > 0 && (
        <AddRelWrapper>
          <FormField>
            <TextInput
              id={"addRelationName"}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setRelationName(e.target.value)
              }
              value={relationName}
              placeholder={"Relation name"}
              error={showRelErrors && !relationName}
            />
          </FormField>
          <FormField>
            <AddRelSpan>
              <ObjectDropdown
                id={"addRelationObj1"}
                value={selectedObject1}
                onChange={setSelectedObject1}
                objectArray={objectList}
              />
            </AddRelSpan>
            <AddRelSpan>
              <ObjectDropdown
                id={"addRelationObj2"}
                value={selectedObject2}
                onChange={setSelectedObject2}
                objectArray={objectList}
              />
            </AddRelSpan>
          </FormField>
          <FormField>
            <AddButtonWrapper>
              <AddButton
                id="addRelationButton"
                //disabled={addRelationDisabled}
                onClick={() => addRel()}
              >
                Add
              </AddButton>
            </AddButtonWrapper>
          </FormField>
        </AddRelWrapper>
      )}

      {/* Warning to be shown if no object created before attempting to create relation */}
      {isRelation && (!objectList || objectList.length === 0) && (
        <EmptyListWarning>
          To create a relation objects must be created previously in the
          <SeparatedText>
            <Link to="/objects" style={{ textDecoration: "none" }}>
              {" "}
              Objects page{" "}
            </Link>
          </SeparatedText>
        </EmptyListWarning>
      )}

      {/* Snackbar to show warnings */}
      <Snackbar
        autoHideDuration={3000}
        open={showAlert}
        ContentProps={{
          "aria-describedby": "message-id",
        }}
        anchorOrigin={{ vertical:'top', horizontal:'center' }}
        onClose={() => setShowAlert(false)}>
          <Alert severity="error">
            {isObject ? "Object already exists!" : "Relation already exists!"}
          </Alert>
        </Snackbar>
    </>
  );
};
