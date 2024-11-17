function getAge() {
    var date = document.getElementById('batas').value;
    var today = new Date();
    var birthday = new Date(date);
    var year = 0;
    if (today.getMonth() < birthday.getMonth()) {
        year = 1;
    } else if ((today.getMonth() == birthday.getMonth()) && today.getDate() < birthday.getDate()) {
        year = 1;
    }
    var age = today.getFullYear() - birthday.getFullYear() - year;

    if(age < 0){
        alert("Masih di dalam?")
        return true
    }else if(age < 12){
        alert("You are under age please provide your parent help!")
        return true
    }
}

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
    
    if (form.confirmpassword.value == "") {
        alert("Please confirm your password")
        return false
    } else if (form.confirmpassword.value != form.password.value) {
        alert("Your confirmation password does'nt match with your password!")
        return false
    }

    if (form.bod.value == "") {
        alert("Please provide your birth of date!")
        return false    
    }else if(getAge()){
        return false
    }

    if (form.gender.value == "") {
        alert("Please select your gender")
        return false
    }

    if (!form.tos.checked) {
        alert("You must agree our ToS!")
        return false
    }

    alert("Your request success, thank you for you effort!")
    window.location.href = "../movies/movies.html"
    return false
}

