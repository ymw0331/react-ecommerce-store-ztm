const FormInput = ({label,changeHandler, value}) =>{
    
    return(
        <div></div>
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

