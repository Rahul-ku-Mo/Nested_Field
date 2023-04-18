import { FieldDataType } from "../utils/_mockData";
import Field from "./Field";

interface FieldListProps {
  fieldData: FieldDataType[];
}
const FieldList: React.FC<FieldListProps> = ({ fieldData }) => {

  return (
    <div className="flex gap-2 flex-col">
      {fieldData.map((field) => {
        return (
          <div key={field.fieldId}>
            <Field field={field} />
            {field.fieldChildren.length > 0 && (
              <div className="pl-5">
                <FieldList fieldData={field.fieldChildren} />
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};
export default FieldList;
