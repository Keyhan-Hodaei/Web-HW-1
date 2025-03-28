document.addEventListener("DOMContentLoaded", function() {
    const feeInput = document.getElementById("fee");
    const countInput = document.getElementById("count");
    const discountInput = document.getElementById("discount");

    function isValid(input) {
        return /^\d+(\.\d*)?$/.test(input.trim());
    }

    function updateTable() {
        const fee = parseFloat(feeInput.value.trim());
        const count = parseFloat(countInput.value.trim());
        const discount = parseFloat(discountInput.value.trim());

        const rows = document.querySelectorAll("table tbody tr");

        const result1 = fee*count - discount;
        const result2 = (fee - discount) * count;
        const result3 = fee * (count - discount);

        if (!isValid(feeInput.value) || !isValid(countInput.value) || !isValid(discountInput.value)) {
            document.querySelectorAll("tbody tr").forEach(row => {
                row.children[1].textContent = "Invalid Formula";
            });
            return;
        }

        rows[0].children[1].textContent = result1;
        rows[1].children[1].textContent = result2;
        rows[2].children[1].textContent = result3;


    }

    feeInput.addEventListener("input", updateTable);
    countInput.addEventListener("input", updateTable);
    discountInput.addEventListener("input", updateTable);
});