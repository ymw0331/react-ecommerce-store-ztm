const FormInput = ({label,changeHandler, }) =>{
    
    return(
        <label>{label}}:</label>
        <input
        required
        type="text"
        onChange={changeHandler}
        name="displayName"
        value={value}
    />
    )

}

