document.addEventListener("DOMContentLoaded", function() {
    const feeInput = document.getElementById("fee");
    const countInput = document.getElementById("count");
    const discountInput = document.getElementById("discount");

    function updateTable() {
        const fee = parseFloat(feeInput.value.trim());
        const count = parseFloat(countInput.value.trim());
        const discount = parseFloat(discountInput.value.trim());

        const rows = document.querySelectorAll("table tbody tr");

        const result1 = fee*count - discount;
        const result2 = (fee - discount) * count;
        const result3 = fee * (count - discount);

        rows[0].children[1].textContent = fee;
        rows[0].children[2].textContent = count;
        rows[0].children[3].textContent = discount;

        rows[1].children[1].textContent = fee;
        rows[1].children[2].textContent = count;
        rows[1].children[3].textContent = discount;

        rows[2].children[1].textContent = fee;
        rows[2].children[2].textContent = count;
        rows[2].children[3].textContent = discount;

        if (fee === "" || isNaN(fee)
            || count === "" || isNaN(count)
            || discount === "" || isNaN(discount)) {
                rows.forEach(row => {
                    row.children[4].textContent = "Invalid Formula";
                });
                return;
        }

        rows[0].children[4].textContent = result1;
        rows[1].children[4].textContent = result2;
        rows[2].children[4].textContent = result3;


    }

    feeInput.addEventListener("input", updateTable);
    countInput.addEventListener("input", updateTable);
    discountInput.addEventListener("input", updateTable);
    
});