// Code EyesOnMe Component Here
function EyesOnMe() {

    function handelFocus() {
        console.log("Good!")
    }

    function handelBlur(){
        console.log("Hey! Eyes on me!")
    }
    return(
        <button onFocus={handelFocus} onBlur={handelBlur}>Eyes on me</button>
    )
}


export default EyesOnMe;