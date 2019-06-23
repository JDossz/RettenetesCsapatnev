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
console.log('Kapusok ', kapusok());
console.log('Középcsatárok ', kpcsatar());
console.log('Hátravont csatárok ', hcsatar());
console.log('Bal szélsők ', bszelso());
console.log('Jobb szélsők ', jszelso());
console.log('Támadó középpályások ', tkppalyas());
console.log('Belső középpályások ', bpalyas());
console.log('Védekező középpályások ', vkpalyas());
console.log('Jobb oldali középpályások ', jkpalyas());
console.log('Bal oldali középpályások ', bkpalyas());
console.log('Középső védő ', kpvedo());
console.log('Jobb oldali védők ', jvedo());
console.log('Bal oldali védők ', bvedo());
