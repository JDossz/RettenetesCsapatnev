//13. JÁTÉKOSOK ÉRTÉKSORRENDBEN
function erteksorrend() {
    var erteksor = data.slice();

    for (var i = 0; i < erteksor.length - 1; i++) {
        for (var j = i + 1; j < erteksor.length; j++) {
            if (erteksor[i].ertek > erteksor[j].ertek) {

                var tmp = erteksor[i];
                erteksor[i] = erteksor[j];
                erteksor[j] = tmp;


            }
        }
    }
    return erteksor;
}

//ÉRTÉKSORREND KAPUS
function erteksorrendKapus() {

    var es = erteksorrend();
    var poszt = [];
    for (var i = 0; i < es.length; i++) {
        if (es[i].poszt == "kapus") {
            poszt.push(es[i])
        }
    }
    return poszt;
}

//ÉRTÉKSORREND KÖZÉPCSATÁR
function erteksorrendKozepcsatar() {
    var es = erteksorrend();
    var poszt = [];
    for (var i = 0; i < es.length; i++) {
        if (es[i].poszt == "középcsatár") {
            poszt.push(es[i]);
        }
    }
    return poszt;
}

//HÁTRAVONT CSATÁR
function erteksorrendHcsatar() {
    var es = erteksorrend();
    var poszt = [];
    for (var i = 0; i < es.length; i++) {
        if (es[i].poszt == "hátravont csatár") {
            poszt.push(es[i]);
        }
    }
    return poszt;
}

//BAL SZÉLSŐ
function erteksorrendBszelso() {
    var es = erteksorrend();
    var poszt = [];
    for (var i = 0; i < es.length; i++) {
        if (es[i].poszt == "bal szélső") {
            poszt.push(es[i]);
        }
    }
    return poszt;
}

//JOBB SZÉLSŐ
function erteksorrendJszelso() {
    var es = erteksorrend();
    var poszt = [];
    for (var i = 0; i < es.length; i++) {
        if (es[i].poszt == "jobb szélső") {
            poszt.push(es[i]);
        }
    }
    return poszt;
}

//TÁMADÓ KÖZÉPPÁLYÁS
function erteksorrendTKpalyas() {
    var es = erteksorrend();
    var poszt = [];
    for (var i = 0; i < es.length; i++) {
        if (es[i].poszt == "támadó középpályás") {
            poszt.push(es[i]);
        }
    }
    return poszt;
}

//BELSŐ KÖZÉPPÁLYÁS
function erteksorrendbKpalyas() {
    var es = erteksorrend();
    var poszt = [];
    for (var i = 0; i < es.length; i++) {
        if (es[i].poszt == "belső középpályás") {
            poszt.push(es[i]);
        }
    }
    return poszt;
}


//VÉDEKEZŐ KÖZÉPPÁLYÁS
function erteksorrendVKpalyas() {
    var es = erteksorrend();
    var poszt = [];
    for (var i = 0; i < es.length; i++) {
        if (es[i].poszt == "védekező középpályás") {
            poszt.push(es[i]);
        }
    }
    return poszt;
}

//JOBB OLDALI KÖZÉPPÁLYÁS
function erteksorrendJKpalyas() {
    var es = erteksorrend();
    var poszt = [];
    for (var i = 0; i < es.length; i++) {
        if (es[i].poszt == "jobb oldali középpályás") {
            poszt.push(es[i]);
        }
    }
    return poszt;
}

//BAL OLDALI KÖZÉPPÁLYÁS
function erteksorrendBKpalyas() {
    var es = erteksorrend();
    var poszt = [];
    for (var i = 0; i < es.length; i++) {
        if (es[i].poszt == "bal oldali középpályás") {
            poszt.push(es[i]);
        }
    }
    return poszt;
}

//KÖZÉPSŐ VÉDŐ
function erteksorrendKVedo() {
    var es = erteksorrend();
    var poszt = [];
    for (var i = 0; i < es.length; i++) {
        if (es[i].poszt == "középső védő") {
            poszt.push(es[i]);
        }
    }
    return poszt;
}

//JOBB OLDALI VÉDŐ
function erteksorrendJVedo() {
    var es = erteksorrend();
    var poszt = [];
    for (var i = 0; i < es.length; i++) {
        if (es[i].poszt == "jobb oldali védő") {
            poszt.push(es[i]);
        }
    }
    return poszt;
}

//BAL OLDALI VÉDŐ
function erteksorrendBVedo() {
    var es = erteksorrend();
    var poszt = [];
    for (var i = 0; i < es.length; i++) {
        if (es[i].poszt == "bal oldali védő") {
            poszt.push(es[i]);
        }
    }
    return poszt;
}

console.log('Játékosok értéksorrendje', erteksorrend());
console.log('Kapus értéksorrend', erteksorrendKapus());
console.log('Középcsatár értéksorrend', erteksorrendKozepcsatar());
console.log('Hátravont csatár értéksorrend ', erteksorrendHcsatar());
console.log('Bal szélső értéksorrend ', erteksorrendBszelso());
console.log('Jobb szélső értéksorrend ', erteksorrendJszelso());
console.log('Támadó középpályás értéksorrend ', erteksorrendTKpalyas());
console.log('Belső középpályás értéksorrend ', erteksorrendbKpalyas());
console.log('Védekező középpályás értéksorrend ', erteksorrendVKpalyas());
console.log('Jobb oldali középpályás értéksorrend ', erteksorrendJKpalyas());
console.log('Bal oldali középpályás értéksorrend ', erteksorrendBKpalyas());
console.log('Középső védő értéksorrend ', erteksorrendKVedo());
console.log('Jobb oldali védő értéksorrend ', erteksorrendJVedo());
console.log('Bal oldali védő értéksorrend ', erteksorrendBVedo());