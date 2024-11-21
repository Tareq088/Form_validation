const usernameEl = document.querySelector('#username');
const emailEl = document.querySelector('#email');
const passwordEl = document.querySelector('#password');
const confirmPasswordEl = document.querySelector('#confirm-password');
const form = document.querySelector('#signup');
const togglepasswordEl = document.querySelector("#togglepassword");


//  এখন প্রতিটা ফাংশন declare করব,  (checkusername and অন্যান্য সকল ফাংশনে ৩ টি আলাদা কাজ অর্থাৎ ৩ টি করে ফাংশন লাগবে) 
const checkUsername = () =>{
    const username = usernameEl.value.trim();
    let min = 2;
    let max = 25;
    if(!isRequired(username)){
            showError(usernameEl,"User Name is Empty");
        }
    else if(!isBetween(username.length, min, max)){
        showError(usernameEl,`Username must be between ${min} and ${max} characters.`)
     }
    else{
        showSuccess(usernameEl);
    }
};

                // Email চেক করব 
const checkEmail = () =>{
    const email = emailEl.value.trim();
    if (!isRequired(email)){
            showError(emailEl,"Email is Empty");
        }
    else if (!isEmailValid(email)){
        showError(emailEl, " Email is not valid.");
         }
    else{
        showSuccess(emailEl);
    }
    };


                  //Password(); চেক করব 
const checkPassword = () =>{
    const password = passwordEl.value.trim();
    if (!isRequired(password)){
            showError(passwordEl,"Password is Empty");
        }
     else if (!isPasswordSecure(password)){
             showError(passwordEl,"Password must has at least 8 characters that include at least 1 lowercase character, 1 uppercase characters, 1 number, and 1 special character in (!@#$%^&*)");
        }
    else{
        showSuccess(passwordEl);
    }
    };

        

       //Confirm Password চেক করব 
const checkConfirmPassword = () =>{
    const confirmPassword = confirmPasswordEl.value.trim();
    const password = passwordEl.value.trim();
    if (!isRequired(confirmPassword)){
            showError(confirmPasswordEl,"Enter the password again");
        }
    else if (password !== confirmPassword){
        showError(confirmPasswordEl, "Password does not match");
    }
    else{
        showSuccess(confirmPasswordEl);
    }
};
            // isRequired টা declare করলাম
const isRequired = value => value === ""? false:true;

            // isBetween টা declare করলাম         
const isBetween = (length,min,max) => length<min||length>max ? false:true ;

                     // isEmailValid টা declare করলাম 
const isEmailValid = (email) =>{
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                    // this will return either true(if ok) or false (if not)
    return re.test(email); 
};


                // isPasswordSecure টা declare করলাম 
const isPasswordSecure = passwordTest =>{
    const re = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&?*])(?=.{8,})");
                    // this will return either true(if ok) or false (if not)
    return re.test(passwordTest); 
};

            // showError টা declare করলাম
const showError = (input,message) =>{
    // get the form-field Element
    const formField = input.parentElement;
   // adding error class
    formField.classList.remove("success");
    formField.classList.add("error");
   // show error message
    const error = formField.querySelector("small");
    error.innerHTML = message;
};
           
            // showSuccess টা declare করলাম
const showSuccess = (input) =>{
            // get the form-field Element
    const formField = input.parentElement;
            // adding success class
    formField.classList.remove("error");
    formField.classList.add("success");
                // show error message
    const error = formField.querySelector("small");
    error.innerHTML = "";
};
   

    // event ঘটলে কোন কোন ঘটনা ঘটবে সেটা 
form.addEventListener("submit", (e)=>{
    e.preventDefault();
    checkUsername();
    checkEmail();
    checkPassword();
    checkConfirmPassword();
})
form.addEventListener('input',(e) =>{
    switch (e.target.id) {
        case 'username':
            checkUsername();
            break;
        case 'email':
            checkEmail();
            break;
        case 'password':
            checkPassword();
            break;
        case 'confirm-password':
            checkConfirmPassword();
            break;
    }
});

       // to visulaize password
togglepasswordEl.addEventListener("click", () =>{
  const password_type = passwordEl.getAttribute("type") === "password"? "text" : "password";
  passwordEl.setAttribute("type",password_type);
  togglepasswordEl.classList.toggle("bi-eye");

})


