const nairaInput = document.getElementById("naira");
const convertButton = document.getElementById("convert");
const result = document.getElementById("result");

const nairaPerDollar = 1500;

convertButton.addEventListener("click", () => {
    const naira = Number(nairaInput.value);

    if (nairaInput.value.trim() === "" ||
        !Number.isFinite(naira) || naira < 0) {
    result.textContent = "Please enter a valid amount.";
    return;
    }

    const dollars = naira / nairaPerDollar;

    result.textContent =
    `₦${naira.toLocaleString()} = $${dollars.toFixed(2)}`;

});