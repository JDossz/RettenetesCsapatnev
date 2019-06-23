//KAPUS
function kapusok() {
    var poszt = [];
    for (var i = 0; i < data.length; i++) {
        if (data[i].poszt == "kapus") {
            obj = {};
            obj.nev = data[i].vezeteknev + ' ' + data[i].utonev;
            obj.poszt = data[i].poszt
            poszt.push(obj);
        }
    }
    return poszt;
}
console.log(kapusok());

//KÖZÉPCSATÁR
function kpcsatar() {
    var poszt = [];
    for (var i = 0; i < data.length; i++) {
        if (data[i].poszt == "középcsatár") {
            obj = {};
            obj.nev = data[i].vezeteknev + ' ' + data[i].utonev;
            obj.poszt = data[i].poszt
            poszt.push(obj);
        }
    }
    return poszt;
}
console.log(kpcsatar());

//HÁTRAVONT CSATÁR
function hcsatar() {
    var poszt = [];
    for (var i = 0; i < data.length; i++) {
        if (data[i].poszt == "hátravont csatár") {
            obj = {};
            obj.nev = data[i].vezeteknev + ' ' + data[i].utonev;
            obj.poszt = data[i].poszt
            poszt.push(obj);
        }
    }
    return poszt;
}
console.log(hcsatar());

//BAL SZÉLSŐ
function bszelso() {
    var poszt = [];
    for (var i = 0; i < data.length; i++) {
        if (data[i].poszt == "bal szélső") {
            obj = {};
            obj.nev = data[i].vezeteknev + ' ' + data[i].utonev;
            obj.poszt = data[i].poszt
            poszt.push(obj);
        }
    }
    return poszt;
}
console.log(bszelso());

//JOBB SZÉLSŐ
function jszelso() {
    var poszt = [];
    for (var i = 0; i < data.length; i++) {
        if (data[i].poszt == "jobb szélső") {
            obj = {};
            obj.nev = data[i].vezeteknev + ' ' + data[i].utonev;
            obj.poszt = data[i].poszt
            poszt.push(obj);
        }
    }
    return poszt;
}
console.log(jszelso());

//TÁMADÓ KÖZÉPPÁLYÁS
function tkppalyas() {
    var poszt = [];
    for (var i = 0; i < data.length; i++) {
        if (data[i].poszt == "támadó középpályás") {
            obj = {};
            obj.nev = data[i].vezeteknev + ' ' + data[i].utonev;
            obj.poszt = data[i].poszt
            poszt.push(obj);
        }
    }
    return poszt;
}
console.log(tkppalyas());

//BELSŐ KÖZÉPPÁLYÁS
function bpalyas() {
    var poszt = [];
    for (var i = 0; i < data.length; i++) {
        if (data[i].poszt == "belső középpályás") {
            obj = {};
            obj.nev = data[i].vezeteknev + ' ' + data[i].utonev;
            obj.poszt = data[i].poszt
            poszt.push(obj);
        }
    }
    return poszt;
}
console.log(bpalyas());

//VÉDEKEZŐ KÖZÉPPÁLYÁS
function vkpalyas() {
    var poszt = [];
    for (var i = 0; i < data.length; i++) {
        if (data[i].poszt == "védekező középpályás") {
            obj = {};
            obj.nev = data[i].vezeteknev + ' ' + data[i].utonev;
            obj.poszt = data[i].poszt
            poszt.push(obj);
        }
    }
    return poszt;
}
console.log(vkpalyas());

//JOBB OLDALI KÖZÉPPÁLYÁS
function jkpalyas() {
    var poszt = [];
    for (var i = 0; i < data.length; i++) {
        if (data[i].poszt == "jobb oldali középpályás") {
            obj = {};
            obj.nev = data[i].vezeteknev + ' ' + data[i].utonev;
            obj.poszt = data[i].poszt
            poszt.push(obj);
        }
    }
    return poszt;
}
console.log(jkpalyas());

//BAL OLDALI KÖZÉPPÁLYÁS
function bkpalyas() {
    var poszt = [];
    for (var i = 0; i < data.length; i++) {
        if (data[i].poszt == "bal oldali középpályás") {
            obj = {};
            obj.nev = data[i].vezeteknev + ' ' + data[i].utonev;
            obj.poszt = data[i].poszt
            poszt.push(obj);
        }
    }
    return poszt;
}
console.log(bkpalyas());

//KÖZÉPSŐ VÉDŐ
function kpvedo() {
    var poszt = [];
    for (var i = 0; i < data.length; i++) {
        if (data[i].poszt == "középső védő") {
            obj = {};
            obj.nev = data[i].vezeteknev + ' ' + data[i].utonev;
            obj.poszt = data[i].poszt
            poszt.push(obj);
        }
    }
    return poszt;
}
console.log(kpvedo());

//JOBB OLDALI VÉDŐ
function jvedo() {
    var poszt = [];
    for (var i = 0; i < data.length; i++) {
        if (data[i].poszt == "jobb oldali védő") {
            obj = {};
            obj.nev = data[i].vezeteknev + ' ' + data[i].utonev;
            obj.poszt = data[i].poszt
            poszt.push(obj);
        }
    }
    return poszt;
}
console.log(jvedo());

//BAL OLDALI VÉDŐ
function bvedo() {
    var poszt = [];
    for (var i = 0; i < data.length; i++) {
        if (data[i].poszt == "bal oldali védő") {
            obj = {};
            obj.nev = data[i].vezeteknev + ' ' + data[i].utonev;
            obj.poszt = data[i].poszt
            poszt.push(obj);
        }
    }
    return poszt;
}
console.log(bvedo());