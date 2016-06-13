var teste = function () {
    console.log('Chamada de função fora do arquivo');
};

// Conceito de OO
var speak = function () {
    console.log(this.sound + '! My name is ' + this.name + '!');
};

var dog = {
    name: 'Pancake',
    sound: 'Au au',
    speak: speak
};

var cat = {
    name: 'Miaow',
    sound: 'Mittens',
    speak: speak
};

var pig = {
    name: 'Charlie',
    sound: 'Oink',
    speak: speak
};
