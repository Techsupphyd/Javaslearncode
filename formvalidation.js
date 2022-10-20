function formvalidation() {

    let a;
    a=0;

    let x = document.forms["newentry"]["Stockist_ID"].value;
    if (x == "") {
      alert("Stocklist Id must be filled out");
      return false;
      a=a+1;
    }

    x = document.forms["newentry"]["Stockist_Name"].value;
    if (x == "") {
      alert("Stockist Name must be filled out");
      return false;
      a=a+1;
    }

    x = document.forms["newentry"]["Address"].value;
    if (x == "") {
      alert("Address must be filled out");
      return false;
      a=a+1;
    }

    x = document.forms["newentry"]["Company_Name"].value;
    if (x == "") {
      alert("Company Name must be filled out");
      return false;
      a=a+1;
    }

    x = document.forms["newentry"]["Email"].value;
    if (x == "") {
      alert("Email Id must be filled out");
      return false;
      a=a+1;
    }

    x = document.forms["newentry"]["Phone_No"].value;
    if (x == "") {
      alert("Please Fill your Phone No.");
      return false;
      a=a+1;
    }

    if (a == 0){
        alert("Form Submitted Successfully");
    }
  }