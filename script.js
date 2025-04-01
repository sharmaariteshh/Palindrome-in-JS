let intru = document.getElementById("input");



function revStr() {
        let value = intru.value;
        let har = value.split("").reverse().join("");

        if(har === value) {
                alert("this is palindrome");
        } else{
                alert("this is not")
        }
}
