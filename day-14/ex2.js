// ### Problem 2: Duplicate Inventory Checker (SerialNumbert)

// **Description:**  
// A retail store keeps an inventory of product serialnumberrial numbers. To avoid errors in stock counting, each serialnumberrial number must be unique.

// **Instructions:**  
// - Describe how you would model the inventory using a SerialNumbert.
// - Detail the process for adding a new product to the inventory.
// - Explain how you would check for and handle duplicates when a new serialnumberrial number is added.

// **Hint:**  
// Using a SerialNumbert for inventory ensures that duplicate serialnumberrial numbers are not stored. Think of how a stamp collector would only keep one of each unique stamp.

const serialnumber = new Set();

let redundentCheck = (id) =>{
    if(serialnumber.has(id)){
        console.log("Item already enrolled");
    }
    else{
        serialnumber.add(id);
        console.log("Item added");
    }
}




redundentCheck(23);
redundentCheck(12);
redundentCheck(23);
redundentCheck(23);
redundentCheck(54);
redundentCheck(43);
redundentCheck(32);
redundentCheck(12);




console.log(serialnumber.has(4));
console.log(serialnumber.has(2));
console.log(serialnumber.has(5));
console.log(serialnumber.has(7));