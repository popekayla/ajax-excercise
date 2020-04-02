function getStudents()
{
    let studentId = document.getElementById("students").value;
    var xmlhttp = new XMLHttpRequest();

    xmlhttp.onreadystatechange=function(){
        if (xmlhttp.readyState==4 && xmlhttp.status==200)
        {
        studentInfo = JSON.parse(xmlhttp.responseText);

        let studentDisplay = "<p>" + studentInfo.student_first_name + " " + studentInfo.student_last_name + "</p>"+
                                "<p> Major: " + studentInfo.student_major + "</p>" +
                                "<p> Credits: " + studentInfo.student_credits + " GPA: " + studentInfo.student_gpa + "</p>" +
                                "<p> Registration Date: " + studentInfo.student_registration_date + "</p>" 

        document.querySelector(".student").innerHTML = studentDisplay;

        }
    }
    
    xmlhttp.open("GET",studentId,true);
    
    xmlhttp.send();
}