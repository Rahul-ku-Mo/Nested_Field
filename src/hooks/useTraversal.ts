import { FieldDataType } from "../utils/_mockData";

const useTraversal = () => {
    function insertField(field: FieldDataType, fieldId: string, fieldData: FieldDataType[]): FieldDataType[] {
        return fieldData.map(element => {
            if (element.fieldId === fieldId) {
                return {
                    ...element,
                    fieldChildren: [...element.fieldChildren, field],
                };
            } else if (element.fieldChildren.length > 0) {
                return {
                    ...element,
                    fieldChildren: insertField(field, fieldId, element.fieldChildren),
                };
            } else {
                return element;
            }
        });
    }

    function updateField(fieldId: string, updatedField: FieldDataType, fieldData: FieldDataType[]): FieldDataType[] {
        return fieldData.map((element) => {
          if (element.fieldId === fieldId) {
            return { ...updatedField, fieldId };
          } else if (element.fieldChildren.length > 0) {
            element.fieldChildren = updateField(fieldId, updatedField, element.fieldChildren);
            return element;
          } else {
            return element;
          }
        });
      }
    function deleteField(fieldId: string, fieldData: FieldDataType[]): FieldDataType[] {
        return fieldData.filter((element) => {
            if (element.fieldId === fieldId) {
                return false;
            } else if (element.fieldChildren.length > 0) {
                element.fieldChildren = deleteField(fieldId, element.fieldChildren);
                return true;
            } else {
                return true;
            }
        });
    }

    return { insertField, deleteField , updateField };
}

export default useTraversal;