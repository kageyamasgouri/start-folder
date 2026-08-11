const val1Input = document.getElementById('value1');
const val2Input = document.getElementById('value2');
const operatorSelect = document.getElementById('choice');
const formulaArea = document.getElementById('formula');
const resultArea = document.getElementById('result');

val1Input.addEventListener('input', calculate);
val2Input.addEventListener('input', calculate);
operatorSelect.addEventListener('change', calculate);
document.getElementById('calcBtn').addEventListener('click', calculate);

function calculate() {
    const val1 = parseFloat(val1Input.value);
    const val2 = parseFloat(val2Input.value);
    const operator = operatorSelect.value;

    if (isNaN(val1) || isNaN(val2)) {
        formulaArea.textContent = '計算式';
        resultArea.textContent = '両方の数値を入力してください。';
        return;
    }

    let result;
    let symbol; // 演算子の記号（＋、－、×、÷）を格納する変数

    if (operator === 'addition') {
        result = val1 + val2;
        symbol = '+';
    } else if (operator === 'subtraction') {
        result = val1 - val2;
        symbol = '-';
    } else if (operator === 'multiplication') {
        result = val1 * val2;
        symbol = '×';
    } else if (operator === 'division') {
        if (val2 === 0) {
            formulaArea.textContent = '計算式';
            resultArea.textContent = '0で割ることはできません。';
            return;
        }
        result = val1 / val2;
        symbol = '÷';
    }
    
    formulaArea.textContent = `${val1} ${symbol} ${val2}`;
    resultArea.textContent = `計算結果: ${result}`;
    resultArea.textContent = '演算式が正しくありません。';
    return;

}
