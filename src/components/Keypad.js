// Code Keypad Component Here

function Keypad (){

    function handleChange() {
        console.log('Entering password...')
    }
    return (
        <div>
            <input
        type="password"
        name="search"
        onChange={handleChange}
      />
        </div>
    )
}

export default Keypad;