const FormInput = ({label,changeHandler, value}) =>{
    
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

