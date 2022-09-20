import DeskIcon from '@mui/icons-material/Desk';
import ComputerIcon from '@mui/icons-material/Computer';
import KeyboardIcon from '@mui/icons-material/Keyboard';
import CloudQueueIcon from '@mui/icons-material/CloudQueue';
import PersonIcon from '@mui/icons-material/Person';
import { S_ICON_SIZE, ICON_BG_COLOR } from './theme';
import { IObject, IRelation } from './components/common/Interface';

export const objectTypes = ['desk','computer','keyboard','server','human']

// The object type will be represented by a MUI icon
export const getIconForObjectType = (type: string): JSX.Element => {
  switch(type) {
    case 'desk':
      return <DeskIcon sx={{ fontSize: S_ICON_SIZE, color: ICON_BG_COLOR }} />
    case 'computer':
      return <ComputerIcon sx={{ fontSize: S_ICON_SIZE, color: ICON_BG_COLOR }} />
    case 'keyboard':
      return <KeyboardIcon sx={{ fontSize: S_ICON_SIZE, color: ICON_BG_COLOR }} />
    case 'server':
      return <CloudQueueIcon sx={{ fontSize: S_ICON_SIZE, color: ICON_BG_COLOR }} />
    case 'human':
      return <PersonIcon sx={{ fontSize: S_ICON_SIZE, color: ICON_BG_COLOR }} />
    default:
      return <span>N/A</span>
  }
}

// Create a new id for any object, a number that increases with time
export const createNewId = (): number => {
  return Date.now()
}

export const elypsis = (st:string, limit:number): string => {
  return (st.length > limit) ? st.substring(0, limit - 3) + '...' : st
}

export const objectExists = (objectList: IObject[], objName: string, objDescription: string, objType: string): boolean => {
  return objectList.some(
    (obj) =>
      obj.name === objName &&
      obj.description === objDescription &&
      obj.type === objType
  )
}

export const relationExists = (relationList: IRelation[], relName: string, relObj1Id: number, relObj2Id: number): boolean => {
  return relationList.some(
    (rel) =>
      rel.name === relName &&
      rel.obj1Id === relObj1Id &&
      rel.obj2Id === relObj2Id
  )
}