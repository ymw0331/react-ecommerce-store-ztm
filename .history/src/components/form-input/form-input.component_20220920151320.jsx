const FormInput = ({label,}) =>{
    
    return(
        <label>{label}}:</label>
        <input
        required
        type="text"
        onChange={handleChange}
        name="displayName"
        value={displayName}
    />
    )

}

