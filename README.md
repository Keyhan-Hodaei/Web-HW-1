# تمرین اول درس برنامه‌سازی وب

کیهان هدائی - ۴۰۱۱۰۶۶۹۶<br>
در این تمرین یک صفحه HTML ایجاد کرده‌ایم که سه ورودی با نام‌های قیمت واحد (fee)، تعداد (count) و تخفیف (discount) را دریافت می‌کند و سه فرمول زیر را برروی آن‌ها اجرا می‌کند و مقادیر به‌دست آمده را نشان دهد (لازم به ذکر است که با هر بار تغییر این مقادیر، نتایج هم به صورت هم‌زمان تغییر می‌کنند و در صفحه نشان داده می‌شوند).
<br>
* $fee \times count - discount$
* $(fee - discount) \times count$
* $fee \times (count - discount)$
<br>
## مراحل و جزئیات پیاده‌سازی
مشابه آن‌چه که در فایل تمرین مشخص شده است ورودی‌ها را در صفحه تعریف می‌کنیم:




<br>


```html
<input type="text" id="fee" placeholder="قیمت واحد"/>
<input type="text" id="count" placeholder="تعداد"/>
<input type="text" id="discount" placeholder="تخفیف"/>
```



<br>
برای تمیز بودن صفحه، خروجی‌ها را در یک جدول نمایش می‌دهیم. 
<br>
جدول شامل دو ستون که نشان‌دهنده فرمول و نتیجه محاسبات طبق آن فرمول هستند، می‌باشد. در هر سطر جدول یک فرمول با تگ formula تعریف شده است که محاسبات آن با استفاده از فایل javascriptای که نوشتیم انجام می‌شود و نمایش داده می‌شود. نمونه این تگ‌ها به صورت زیر است:
<br>



```html
<formula id="formula-1" evaluator="Fee * Count - Discount"></formula>
```



<br>

```javascript
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
```
<br>
با استفاده از اسکریپتی که نوشته شده، ابتدا مقادیر ورودی‌ها را با استفاده از idای که به آن‌ها داده‌شده است، پیدا می‌کنیم. با استفاده از تابع isValidای که تعریف کرده‌ایم، معتبر بودن ورودی را مشخص می‌کنیم (اینکه ورودی صرفا یک عدد مثبت باشد). سپس با استفاده از مقادیری که به دست آوردیم، مقادیر فرمول‌های مختلف را محاسبه می‌کنیم و در صورت معتبر بودن ورودی‌ها در جدول قرار می‌دهیم.
در نهایت هم با استفاده از EventListener در صورت تغییر این ورودی‌ها جدول را هم تغییر می‌دهیم.