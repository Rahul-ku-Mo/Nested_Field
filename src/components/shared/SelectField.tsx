interface SelectProps {
  inputValue: string;
  setInputValue: (value: string) => void;
}

const SelectField: React.FC<SelectProps> = ({ inputValue, setInputValue }) => {

  const onSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setInputValue(e.target.value);
  }

  return <>
    <select value={inputValue} onChange={onSelectChange} className='p-1 rounded-md bg-slate-800/10 text-slate-800 shadow-lg'>
      <option value="String">String</option>
      <option value="Boolean">Boolean</option>
      <option value="Number">Number</option>
      <option value="Object">Object</option>
    </select>
  </>

}

export default SelectField;