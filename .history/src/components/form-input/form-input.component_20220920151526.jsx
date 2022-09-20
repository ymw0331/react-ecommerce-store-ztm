const FormInput = ({label,changeHandler, value}) =>{
    
    return(
        <div>
        <label>{label}}:</label>
        <input
        required
        type="text"
        onChange={changeHandler}
        name="displayName"
        value={value}
        </div>
    />
    )
}

