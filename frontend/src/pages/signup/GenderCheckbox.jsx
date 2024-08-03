const GenderCheckbox = ({handleCheckBoxChange,selectedGender}) => {
  return (
    <div className="flex gap-x-3">
      
      <div className="form-control">
        <label className={`cursor-pointer label gap-2 ${selectedGender==="male"? "selected" : ""  }`}>
          <span className="label-text">Male</span>
          <input
            type="checkbox"
            className="checkbox checkbox-accent"
            checked={selectedGender=== "male"}
            onChange={()=>handleCheckBoxChange("male")}
            />
        </label>
      </div>
      <div className="form-control">
        <label className={`cursor-pointer label gap-2 ${selectedGender==="female"? "selected" : ""  }`}>
          <span className="label-text">Female</span>
          <input
            type="checkbox"
            className="checkbox checkbox-accent"
            checked={selectedGender=== "female"}
            onChange={()=>handleCheckBoxChange("female")}
          />
        </label>
      </div>
    </div>
  );
};
export default GenderCheckbox;
