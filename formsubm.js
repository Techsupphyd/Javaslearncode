var formData;
function formobjects()
{
    // var sav = document.getElementById("newentry").elements;
    // var obj;

    // for(let i=1; sav; sav = sav[i++]){

    //     obj = sav[i];

    // }
    var id = document.getElementById("Stockist_ID").value;
    var name = document.getElementById("Stockist_Name").value;
    var address = document.getElementById("Address").value;
    var companyname = document.getElementById("Company_Name").value;
    var phoneno = document.getElementById("Phone_No").value;

    formData = {
        id: id,
        name: name,
        address: address,
        companyname: companyname,
        phoneno: phoneno
    }
    
}

// function saveUser(){
//         console.log("Saved user to backend", formData);
//     }