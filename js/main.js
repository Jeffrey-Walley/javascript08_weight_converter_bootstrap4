// make the oz, kg, grams hidden at start
document.getElementById('output').style.visibility = 'hidden';

// grab input of lbsInput 

document.getElementById('lbsInput').addEventListener('input', function(e) {
    // get the value of the input field
    let pounds = e.target.value;
    document.getElementById('output').style.visibility = 'visible';

    // grab the outputs (ounce, gram, kg)
    document.getElementById('ouncesOutput').innerHTML = pounds * 16;
    document.getElementById('gramsOutput').innerHTML = pounds / 0.0022046;
    document.getElementById('kgOutput').innerHTML = pounds / 2.2046;


});