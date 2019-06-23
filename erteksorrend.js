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
console.log(erteksorrend());

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
console.log(erteksorrendKapus());

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
console.log(erteksorrendKozepcsatar());

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
console.log(erteksorrendHcsatar());

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
console.log(erteksorrendBszelso());

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
console.log(erteksorrendJszelso());

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
console.log(erteksorrendTKpalyas());

//BELSŐ KÖZÉPPÁLYÁS
function erteksorrendBKpalyas() {
    var es = erteksorrend();
    var poszt = [];
    for (var i = 0; i < es.length; i++) {
        if (es[i].poszt == "belső középpályás") {
            poszt.push(es[i]);
        }
    }
    return poszt;
}
console.log(erteksorrendBKpalyas());


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
console.log(erteksorrendVKpalyas());

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
console.log(erteksorrendJKpalyas());

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
console.log(erteksorrendBKpalyas());

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
console.log(erteksorrendKVedo());

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
console.log(erteksorrendJVedo());

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
console.log(erteksorrendBVedo());