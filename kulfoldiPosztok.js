//KÜLFÖLDI KAPUSOK
function kKapus() {
    var poszt = [];
    for (var i = 0; i < data.length; i++) {
        if (data[i].poszt == "kapus" && data[i].kulfoldi == true) {


            obj = {}
            obj.nev = data[i].vezeteknev + ' ' + data[i].utonev;
            obj.poszt = data[i].poszt
            obj.kulföldi = true;
            poszt.push(obj);
        }
    }
    return poszt;
}



//KÜLFÖLDI KÖZÉPCSATÁR
function kKozepcsatar() {
    var poszt = [];
    for (var i = 0; i < data.length; i++) {
        if (data[i].poszt == "középcsatár" && data[i].kulfoldi == true) {


            obj = {}
            obj.nev = data[i].vezeteknev + ' ' + data[i].utonev;
            obj.poszt = data[i].poszt
            obj.kulföldi = true;
            poszt.push(obj);
        }
    }
    return poszt;
}

//KÜLFÖLDI HÁTRAVONT CSATÁR
function khcsatar() {
    var poszt = [];
    for (var i = 0; i < data.length; i++) {
        if (data[i].poszt == "hátravont csatár" && data[i].kulfoldi == true) {


            obj = {}
            obj.nev = data[i].vezeteknev + ' ' + data[i].utonev;
            obj.poszt = data[i].poszt
            obj.kulföldi = true;
            poszt.push(obj);
        }
    }
    return poszt;
}

//BAL SZÉLSŐ
function kbszelso() {
    var poszt = [];
    for (var i = 0; i < data.length; i++) {
        if (data[i].poszt == "bal szélső" && data[i].kulfoldi == true) {


            obj = {}
            obj.nev = data[i].vezeteknev + ' ' + data[i].utonev;
            obj.poszt = data[i].poszt
            obj.kulföldi = true;
            poszt.push(obj);
        }
    }
    return poszt;
}

//JOBB SZÉLSŐ
function kjszelso() {
    var poszt = [];
    for (var i = 0; i < data.length; i++) {
        if (data[i].poszt == "jobb szélső" && data[i].kulfoldi == true) {


            obj = {}
            obj.nev = data[i].vezeteknev + ' ' + data[i].utonev;
            obj.poszt = data[i].poszt
            obj.kulföldi = true;
            poszt.push(obj);
        }
    }
    return poszt;
}

//TÁMADÓ KÖZÉPPÁLYÁS
function ktkppalyas() {
    var poszt = [];
    for (var i = 0; i < data.length; i++) {
        if (data[i].poszt == "támadó középpályás" && data[i].kulfoldi == true) {


            obj = {}
            obj.nev = data[i].vezeteknev + ' ' + data[i].utonev;
            obj.poszt = data[i].poszt
            obj.kulföldi = true;
            poszt.push(obj);
        }
    }
    return poszt;
}

//BELSŐ KÖZÉPPÁLYÁS
function kbpalyas() {
    var poszt = [];
    for (var i = 0; i < data.length; i++) {
        if (data[i].poszt == "belső középpályás" && data[i].kulfoldi == true) {


            obj = {}
            obj.nev = data[i].vezeteknev + ' ' + data[i].utonev;
            obj.poszt = data[i].poszt
            obj.kulföldi = true;
            poszt.push(obj);
        }
    }
    return poszt;
}

//VÉDEKEZŐ KÖZÉPPÁLYÁS
function kvkpalyas() {
    var poszt = [];
    for (var i = 0; i < data.length; i++) {
        if (data[i].poszt == "védekező középpályás" && data[i].kulfoldi == true) {


            obj = {}
            obj.nev = data[i].vezeteknev + ' ' + data[i].utonev;
            obj.poszt = data[i].poszt
            obj.kulföldi = true;
            poszt.push(obj);
        }
    }
    return poszt;
}

//JOBB OLDALI KÖZÉPPÁLYÁS
function kjkpalyas() {
    var poszt = [];
    for (var i = 0; i < data.length; i++) {
        if (data[i].poszt == "jobb oldali középpályás" && data[i].kulfoldi == true) {


            obj = {}
            obj.nev = data[i].vezeteknev + ' ' + data[i].utonev;
            obj.poszt = data[i].poszt
            obj.kulföldi = true;
            poszt.push(obj);
        }
    }
    return poszt;
}

//BAL OLDALI KÖZÉPPÁLYÁS
function kbkpalyas() {
    var poszt = [];
    for (var i = 0; i < data.length; i++) {
        if (data[i].poszt == "bal oldali középpályás" && data[i].kulfoldi == true) {


            obj = {}
            obj.nev = data[i].vezeteknev + ' ' + data[i].utonev;
            obj.poszt = data[i].poszt
            obj.kulföldi = true;
            poszt.push(obj);
        }
    }
    return poszt;
}

//KÖZÉPSŐ VÉDŐ
function kkpvedo() {
    var poszt = [];
    for (var i = 0; i < data.length; i++) {
        if (data[i].poszt == "középső védő" && data[i].kulfoldi == true) {


            obj = {}
            obj.nev = data[i].vezeteknev + ' ' + data[i].utonev;
            obj.poszt = data[i].poszt
            obj.kulföldi = true;
            poszt.push(obj);
        }
    }
    return poszt;
}

//JOBB OLDALI VÉDŐ
function kjvedo() {
    var poszt = [];
    for (var i = 0; i < data.length; i++) {
        if (data[i].poszt == "jobb oldali védő" && data[i].kulfoldi == true) {


            obj = {}
            obj.nev = data[i].vezeteknev + ' ' + data[i].utonev;
            obj.poszt = data[i].poszt
            obj.kulföldi = true;
            poszt.push(obj);
        }
    }
    return poszt;
}

//BAL OLDALI VÉDŐ
function kbvedo() {
    var poszt = [];
    for (var i = 0; i < data.length; i++) {
        if (data[i].poszt == "bal oldali védő" && data[i].kulfoldi == true) {


            obj = {}
            obj.nev = data[i].vezeteknev + ' ' + data[i].utonev;
            obj.poszt = data[i].poszt
            obj.kulföldi = true;
            poszt.push(obj);
        }
    }
    return poszt;
}

console.log('Külföldi kapus ', kKapus());
console.log('Külföldi középcsatár ', kKozepcsatar());
console.log('Külföldi hátravont csatár ', khcsatar());
console.log('Külföldi bal szélső ', kbszelso());
console.log('Külföldi jobb szélső ', kjszelso());
console.log('Külföldi támadó középpályás ', ktkppalyas());
console.log('Külföldi belső középpályás ', kbpalyas());
console.log('Külföldi védekező középpályás ', kvkpalyas());
console.log('Külföldi jobb oldali középpályás ', kjkpalyas());
console.log('Külföldi bal oldali középpályás ', kbkpalyas());
console.log('Külföldi középső védő ', kkpvedo());
console.log('Külföldi jobb oldali védő ', kjvedo());
console.log('Külföldi bal oldali védő ', kbvedo());