const CategorySelect = ({ value, onChange }) => {
    return (
      <select value={value} onChange={(e) => onChange(e.target.value)}>
        <option value="category1">Category 1</option>
        <option value="category2">Category 2</option>
        {/* Add more category options as needed */}
      </select>
    );
  };
  
  export default CategorySelect;
  