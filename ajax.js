function getStudents()
{
    let studentId = document.getElementById("students").value;
    var xmlhttp = new XMLHttpRequest();

    xmlhttp.onreadystatechange=function(){
        if (xmlhttp.readyState==4 && xmlhttp.status==200)
        {
        studentInfo = JSON.parse(xmlhttp.responseText);

        let studentDisplay = "<p class='name'>" + studentInfo.student_first_name + " " + studentInfo.student_last_name + "</p>"+
                                "<p><strong> Major:</strong> " + studentInfo.student_major + "</p>" +
                                "<p> <strong>Credits:</strong> " + studentInfo.student_credits + " <strong>GPA:</strong> " + studentInfo.student_gpa + "</p>" +
                                "<p><strong> Registration Date:</strong> " + studentInfo.student_registration_date + "</p>" 

        document.querySelector(".student").innerHTML = studentDisplay;
        document.querySelector(".student").classList.remove("invisible");

        }
    }
    
    xmlhttp.open("GET",studentId,true);
    
    xmlhttp.send();
}