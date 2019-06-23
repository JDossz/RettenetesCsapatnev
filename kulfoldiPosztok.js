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
console.log(kKapus());



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
console.log(kKozepcsatar());

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
console.log(khcsatar());

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
console.log(kbszelso());

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
console.log(kjszelso());

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
console.log(ktkppalyas());

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
console.log(kbpalyas());

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
console.log(kvkpalyas());

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
console.log(kjkpalyas());

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
console.log(kbkpalyas());

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
console.log(kkpvedo());

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
console.log(kjvedo());

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
console.log(kbvedo());