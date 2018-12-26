// TODO: Add in color picker
// TODO: Display color profile based on rgb or hex values
// TODO: Allow color picker to modify hex and rgb values
// TODO: Allow rgb or hex input to modify color picker

function processRGB(e) {
    const initial = Math.floor(this.value / 16);
    const rem = this.value % 16;
    const rgb = `${initial.toString(16)}${rem.toString(16)}`;
    console.log(rgb);
}

function processHex(e) {
    const [ initial, rem ] = this.value.split('');
    const hexInitial = parseInt(initial, 16) * 16;
    const hexRem = rem ? parseInt(rem, 16) : 0;
    const hex = hexInitial + hexRem;
    console.log(hex);
}

const rgbInput = document.querySelector('#rgb');
const hexInput = document.querySelector('#hex');

rgbInput.addEventListener('keyup', processRGB);
hexInput.addEventListener('keyup', processHex);