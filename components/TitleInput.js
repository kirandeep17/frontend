const TitleInput = ({ value, onChange }) => {
    return (
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Enter title"
      />
    );
  };
  
  export default TitleInput;
  