//your JS code here. If required.
// let inputs = document.querySelectorAll(".code")

// inputs.forEach((input,index)=>{
// 	input.addEventListener("input",(e)=>{
// 		if(e.inputType !== "deleteContentBackward"){
// 			if(input.value && index<inputs.length-1){
// 				inputs[index+1].focus()
// 			}
// 		}
// 	})
// 	input.addEventListener("keydown",(e)=>{
// 		if(e.key==="Backspace" && !input.value && index>0){
// 			inputs[index-1].focus()
// 		}
// 	})
// })




let inputs = document.querySelectorAll(".code");

inputs.forEach((input, index) => {
    input.addEventListener("input", (e) => {
        let value = e.target.value;
        
        // Allow only one digit and move focus
        if (value.match(/^\d$/)) {
            input.value = value; // Ensure only one digit
            if (index < inputs.length - 1) {
                setTimeout(() => inputs[index + 1].focus(), 50); // Delay focus shift slightly
            }
        } else {
            input.value = ""; // Prevent invalid input
        }
    });

    input.addEventListener("keydown", (e) => {
        if (e.key === "Backspace") {
            if (input.value === "" && index > 0) {
                setTimeout(() => inputs[index - 1].focus(), 50);
            }
        }
    });

    // Prevent non-numeric input
    input.addEventListener("keypress", (e) => {
        if (!/\d/.test(e.key)) {
            e.preventDefault();
        }
    });

    // Focus on first input on page load
    if (index === 0) {
        input.focus();
    }
});