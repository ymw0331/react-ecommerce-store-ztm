const FormInput = ({label,}) =>{
    
    return(
        <label>{label}}:</label>
        <input
        required
        type="text"
        onChange={changeHandler}
        name="displayName"
        value={displayName}
    />
    )

}

