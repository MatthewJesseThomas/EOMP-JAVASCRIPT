const chosen =null;

// Alerts //
function displayAlert(message, className) {
    const div = document.createElement("div");
    div.className = `displayAlert displayAlert-${className}`;

    div.appendChild(document.createTextNode(message));
    const containment = document.querySelector(".containment");
    const main = document.querySelector(".main");
    containment.insertBefore(div, main);

    setTimeout(() => document.querySelector(".displayAlert").remove(),3000)
}
//Data-logging removal //
function clearData (){
    document.querySelector("#Itemno").value = "";
    document.querySelector("#Item").value = "";
    document.querySelector("#RefNo").value = "";
    document.querySelector("#Price").value = "";
    document.querySelector("#QTY").value = "";
}
// Adding Customer-Data //
document.querySelector(".checkout-list").addEventListener("#Submit", (e) => {
    e.preventDefault();
    
// Retrieving Info //
    const ItemNo = document.querySelector("#Itemno").value;
    const Item = document.querySelector("#Item").value;
    const RefNo = document.querySelector("#RefNo").value;
    const Price = document.querySelector("#Price").value;
    const Qty = document.querySelector("#QTY").value;
// OK-It //
if (ItemNo == "" || Item == "" || RefNo == "" || Price == "" || Qty == ""){
    displayAlert("Please Enter Product Information", "Promptly")
}else{
    if(chosen == null){
        const list = document.querySelector("#checkout-list");
        const row = document.createElement("tr");

        row.innerHTML = `
        <td>${ItemNo}</td>
        <td>${Item}</td>
        <td>${RefNo}</td>
        <td>${Price}</td>
        <td>${Qty}</td>
        <td>
        <a href="#" class="btn btn-warning btn-sm edit">Edit</a>
        <a href="#" class="btn btn-danger btn-sm delete">Delete</a>
        `;
        list.appendChild(row);
        chosen = null;
        displayAlert("Product Successfully Checkout", "Congratulation");
    }else{
        chosen.children[0].textContent = ItemNo;
        chosen.children[1].textContent = Item;
        chosen.children[2].textContent = RefNo;
        chosen.children[3].textContent = Price;
        chosen.children[4].textContent = Qty;
        displayAlert("Info Edited","information");
    }
    clearData();
}
});
// Editing Information //
document.querySelector(".checkout-list").addEventListener("click", (e) =>{
    target = e.target;
    if(target.classList.contains("edit")){
        chosen = target.parentElement.parentElement;
        document.querySelector("#Itemnoo").value = chosen.children[0].textContent;
        document.querySelector("#Item").value = chosen.children[1].textContent;
        document.querySelector("#RefNo").value = chosen.children[2].textContent;
        document.querySelector("#Price").value = chosen.children[3].textContent;
        document.querySelector("#QTY").value = chosen.children[4].textContent;
    }
});

// Deletion Of Data //
document.querySelector(".checkout-list").addEventListener("click", (e) =>{
    target = e.target;
    if(target.classList.contains("delete")){
        target.parentElement.parentElement.remove();
        displayAlert("Customer Checkout Deleted", "danger");
    }
});
//  Update Price Total //

