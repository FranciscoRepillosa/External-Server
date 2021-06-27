const changeStatusButtons = document.querySelectorAll(".changeStatus");
const addUserButton = document.getElementById("addUser");

addUserButton.addEventListener("click", () => {
    window.location.replace("http://localhost:3000/user/register");
} )

const changeStatus = (disabled) => {
    if (disabled === "true") {
        return "false"
    } else {
        return "true"
    }
}

setInterval(() => {
    location.reload()
}, 3000);

changeStatusButtons.forEach(button => {
    button.addEventListener("click", () => {
        let email = button.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling;
        let disabled = email.nextElementSibling;
        
        console.log(disabled.nextElementSibling.textContent);

        
        fetch(`../../user/${email.textContent}`, {
            method: 'PATCH',
            headers: {
                 'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify({
                disabled: changeStatus(disabled.textContent)
            })
        })
        .then(data => data.json())
        .then( data => {
            if (data.updatedUser.nModified === 1 ) { 
                console.log(disabled.textContent);
                disabled.textContent = changeStatus(disabled.textContent);
                if (disabled.textContent === "true") {
                    disabled.nextElementSibling.textContent = "disabled";
                    disabled.nextElementSibling.style.backgroundColor  = "rgb(255 0 0 / 10%)"

                } else {
                    disabled.nextElementSibling.textContent = "enabled";
                    disabled.nextElementSibling.style.backgroundColor  = "rgb(9 255 0 / 10%)"
                }
            }
        })
    })
});