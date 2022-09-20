const FormInput = ({label}) =>{
    
    return(
        <label>Display Name:</label>
        <input
        required
        type="text"
        onChange={handleChange}
        name="displayName"
        value={displayName}
    />
    )

}

