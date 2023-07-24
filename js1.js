function clearerrors(){
    errors=document.getElementsByClassName('formerror');
    for (let item of errors){
        item.innerHTML="";
    }

}
function seterror(id, error) {
    //sets error inside tag of id
    element = document.getElementById(id);
    element.getElementsByClassName("formerror")[0].innerHTML = error;
}

function validateform() {
    var returnval = true;

    //perform validation, if validation fails return false and forms doesn't submit
    var name = document.forms['facultysubmitted']["fname"].value;
    if (name.length < 3) {
        seterror("name", "*length of name is too short");
        returnval = false;
    }

    var id = document.forms['facultysubmitted']["fid"].value;
    if (isNaN(id)) {
        seterror("id", "*only numerical value allowed");
        returnval = false;
    }

    var cname = document.forms['facultysubmitted']["cname"].value;
    if (isNaN(cname)) {
        seterror("cname", "*only numerical value allowed");
        returnval = false;
    }


    return returnval;

}

