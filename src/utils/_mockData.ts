export type FieldDataType = {
  fieldName: string;
  fieldType: string;
  isRequired: boolean;
  fieldId: string;
  fieldChildren: FieldDataType[];
};

export const fieldData: FieldDataType[] = [
  {
    fieldName: "person",
    fieldType: "Object",
    isRequired: false,
    fieldId: "xa",
    fieldChildren: [
      {
        fieldName: "Last Name",
        fieldType: "String",
        isRequired: true,
        fieldId: "xa3",
        fieldChildren: [],

      },
      {
        fieldName: "First Name",
        fieldType: "Object",
        isRequired: true,
        fieldId: "xa1",

        fieldChildren: [

        ],
      },
    ],
  },
  {
    fieldName: "order",
    fieldType: "Number",
    isRequired: true,
    fieldId: "xb",
    fieldChildren: [],
  },


  {
    fieldName: "class",
    fieldType: "Boolean",
    isRequired: true,
    fieldId: "xc",
    fieldChildren: [],
  },


];



