var formData;
function formobjects(){
    return;
}

function handleSubmit(event){
    event.preventDefault();
    let formElement = document.getElementById("newentry");
    let stockistId = formElement["Stockist_ID"].value;
    let name = formElement["Stockist_Name"].value;
    let address = formElement["Address"].value;
    let companyname = formElement["Company_Name"].value;
    let phoneno = formElement["Phone_No"].value;

    formData = {
                id: stockistId,
                name: name,
                address: address,
                companyname: companyname,
                phoneno: phoneno
            }

    console.log(formData);
    saveUser();

}
function saveUser(){
    console.log("Saved user to backend", formData);

//    try{
//     fetch("https://jsonplaceholder.typicode.com/todos/1").then(data => {return data.json();})
//     console.log(data);
// }catch(error){
//         console.log("Error Occurred durirng the Fetching of data", error);
//     }

try{
    fetch("https://jsonplaceholder.typicode.com/todos/1", {method: "POST", body: JSON.stringify({ Stockist_ID: "formData.id", Stockinst_name: "name", address: "address", phoneno: "phoneno"}), headers: { "Content-type": "application/json; charset=UTF-8"}})
 
    .then(formData => formData.json())
    .then(json => console.log(json));
}catch(error){
    console.log("There is error in Posting", error);
}
}