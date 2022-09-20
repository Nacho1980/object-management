export interface IBaseItem {
  id: number;
  dataTestId?: string;
  name: string;
}
export interface IObject extends IBaseItem {
  description: string;
  type: 'desk' | 'computer' | 'keyboard' | 'server' | 'human'; 
}
export interface IEditableObject extends IObject {
  onAccept: () => void;
  onCancel: () => void;
}
export interface IRelation extends IBaseItem {
  obj1Id: number;
  obj2Id: number;
}
export interface IEditableRelation extends IRelation {
  onAccept: () => void;
  onCancel: () => void;
}