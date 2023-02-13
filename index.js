cel = document.getElementById('cel')
fah = document.getElementById('fah')
let output;
cel.oninput = () => {
    output = (parseFloat(cel.value) * 9 / 5) + 32;
    fah.value = output;
}
fah.oninput = () => {
    output = (parseFloat(fah.value) - 32) * 5 / 9;
    cel.value = output.toFixed(2);
}