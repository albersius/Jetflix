function validateForm(form) {
    let  = form.username.value
    
        if(form.username.value == "") {
            alert("Please provide your username")
            return false
        }
        if (form.password.value == "") {
            alert("Please provide your password")
            return false
        }
    alert("Your request success, thank you for you effort!")
    window.location.href = "../movies/movies.html"
    return false
}