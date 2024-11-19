function displaySum(){

    const val1 = Number(document.getElementById("val1").value);
   const val2 = Number(document.getElementById("val2").value);
    const result=val1+val2;
    document.getElementById("output").textContent = "Total: " + result;
    console.log("Total :"+result)
}