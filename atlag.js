//ÁTLAGÉRTÉK 
function atlag() {
    var atlag;
    var fo = 0;
    var osszeg = 0;
    for (var i = 0; i < data.length; i++) {
        if (data[i].ertek > 0) {
            fo++;
            osszeg += data[i].ertek;
            atlag = osszeg / fo;
        }
    }
    return (atlag);
}


//ÁTLAG FELETTI ÉRTÉK
function atlagFelettiErtek() {
    var atlagFelettDragak = [];
    var at = atlag();
    for (var i = 0; i < data.length; i++) {
        if (data[i].ertek > at) {
            obj = {};
            obj.nev = data[i].vezeteknev + ' ' + data[i].utonev;
            obj.ertek = data[i].ertek;

            atlagFelettDragak.push(obj);
        }
    }
    for (var i = 0; i < atlagFelettDragak.length - 1; i++) {
        for (var j = i + 1; j < atlagFelettDragak.length; j++) {
            if (atlagFelettDragak[i].ertek > atlagFelettDragak[j].ertek) {
                var tmp = [atlagFelettDragak[i], atlagFelettDragak[j]];
                tmp[0] = atlagFelettDragak[i];
                tmp[1] = atlagFelettDragak[j];

            }
        }
    }


    return atlagFelettDragak;
}


//ÁTLAGÉRTÉK KAPUS

function atlagertekKapus() {
    var kapusatlag;
    var kapusfo = 0;
    var osszeg = 0;
    var kapusok = [];

    for (var i = 0; i < data.length; i++) {
        if (data[i].poszt == "kapus") {
            obj = {};
            obj.nev = data[i].vezeteknev + ' ' + data[i].utonev;
            obj.poszt = data[i].poszt;
            obj.ertek = data[i].ertek;
            kapusok.push(obj);
        }
        for (var j = 0; j < kapusok.length; j++) {
            if (kapusok[j].ertek > 0) {
                kapusfo++;
                osszeg += kapusok[j].ertek;
                kapusatlag = osszeg / kapusfo;
            }
        }
    }

    return kapusatlag;
}


//ÁTLAGÉRTÉK KÖZÉPCSATÁR

function atlagertekKozepcsatar() {
    var atlag;
    var fo = 0;
    var osszeg = 0;
    var kozepcsatarok = [];

    for (var i = 0; i < data.length; i++) {
        if (data[i].poszt == "középcsatár") {
            obj = {};
            obj.nev = data[i].vezeteknev + ' ' + data[i].utonev;
            obj.poszt = data[i].poszt;
            obj.ertek = data[i].ertek;
            kozepcsatarok.push(obj);
        }
        for (var j = 0; j < kozepcsatarok.length; j++) {
            if (kozepcsatarok[j].ertek > 0) {
                fo++;
                osszeg += kozepcsatarok[j].ertek;
                atlag = osszeg / fo;
            }
        }
    }

    return atlag;
}


//ÁTLAGÉRTÉK HÁTRAVONT CSATÁR

function atlagertekHCsatar() {
    var atlag;
    var fo = 0;
    var osszeg = 0;
    var hcs = [];

    for (var i = 0; i < data.length; i++) {
        if (data[i].poszt == "hátravont csatár") {
            obj = {};
            obj.nev = data[i].vezeteknev + ' ' + data[i].utonev;
            obj.poszt = data[i].poszt;
            obj.ertek = data[i].ertek;
            hcs.push(obj);
        }
        for (var j = 0; j < hcs.length; j++) {
            if (hcs[j].ertek > 0) {
                fo++;
                osszeg += hcs[j].ertek;
                atlag = osszeg / fo;
            }
        }
    }

    return atlag;
}


//ÁTLAGÉRTÉK BAL SZÉLSŐ

function atlagertekBalszelso() {
    var atlag;
    var fo = 0;
    var osszeg = 0;
    var bsz = [];

    for (var i = 0; i < data.length; i++) {
        if (data[i].poszt == "bal szélső") {
            obj = {};
            obj.nev = data[i].vezeteknev + ' ' + data[i].utonev;
            obj.poszt = data[i].poszt;
            obj.ertek = data[i].ertek;
            bsz.push(obj);
        }
        for (var j = 0; j < bsz.length; j++) {
            if (bsz[j].ertek > 0) {
                fo++;
                osszeg += bsz[j].ertek;
                atlag = osszeg / fo;
            }
        }
    }

    return atlag;
}


//ÁTLAGÉRTÉK JOBB SZÉLSŐ

function atlagertekJobbszelso() {
    var atlag;
    var fo = 0;
    var osszeg = 0;
    var jsz = [];

    for (var i = 0; i < data.length; i++) {
        if (data[i].poszt == "jobb szélső") {
            obj = {};
            obj.nev = data[i].vezeteknev + ' ' + data[i].utonev;
            obj.poszt = data[i].poszt;
            obj.ertek = data[i].ertek;
            jsz.push(obj);
        }
        for (var j = 0; j < jsz.length; j++) {
            if (jsz[j].ertek > 0) {
                fo++;
                osszeg += jsz[j].ertek;
                atlag = osszeg / fo;
            }
        }
    }

    return atlag;
}


//ÁTLAGÉRTÉK TÁMADÓ KÖZÉPPÁLYÁS

function atlagertekTamadokpalyas() {
    var atlag;
    var fo = 0;
    var osszeg = 0;
    var tkp = [];

    for (var i = 0; i < data.length; i++) {
        if (data[i].poszt == "támadó középpályás") {
            obj = {};
            obj.nev = data[i].vezeteknev + ' ' + data[i].utonev;
            obj.poszt = data[i].poszt;
            obj.ertek = data[i].ertek;
            tkp.push(obj);
        }
        for (var j = 0; j < tkp.length; j++) {
            if (tkp[j].ertek > 0) {
                fo++;
                osszeg += tkp[j].ertek;
                atlag = osszeg / fo;
            }
        }
    }

    return atlag;
}


//ÁTLAGÉRTÉK BELSŐ KÖZÉPPÁLYÁS

function atlagertekBelsokpalyas() {
    var atlag;
    var fo = 0;
    var osszeg = 0;
    var bkp = [];

    for (var i = 0; i < data.length; i++) {
        if (data[i].poszt == "belső középpályás") {
            obj = {};
            obj.nev = data[i].vezeteknev + ' ' + data[i].utonev;
            obj.poszt = data[i].poszt;
            obj.ertek = data[i].ertek;
            bkp.push(obj);
        }
        for (var j = 0; j < bkp.length; j++) {
            if (bkp[j].ertek > 0) {
                fo++;
                osszeg += bkp[j].ertek;
                atlag = osszeg / fo;
            }
        }
    }

    return atlag;
}


//ÁTLAGÉRTÉK VÉDEKEZŐ KÖZÉPPÁLYÁS

function atlagertekVedekezokpalyas() {
    var atlag;
    var fo = 0;
    var osszeg = 0;
    var vkp = [];

    for (var i = 0; i < data.length; i++) {
        if (data[i].poszt == "védekező középpályás") {
            obj = {};
            obj.nev = data[i].vezeteknev + ' ' + data[i].utonev;
            obj.poszt = data[i].poszt;
            obj.ertek = data[i].ertek;
            vkp.push(obj);
        }
        for (var j = 0; j < vkp.length; j++) {
            if (vkp[j].ertek > 0) {
                fo++;
                osszeg += vkp[j].ertek;
                atlag = osszeg / fo;
            }
        }
    }

    return atlag;
}


//ÁTLAGÉRTÉK JOBB OLDALI KÖZÉPPÁLYÁS

function atlagertekJobbOldalikpalyas() {
    var atlag;
    var fo = 0;
    var osszeg = 0;
    var jkp = [];

    for (var i = 0; i < data.length; i++) {
        if (data[i].poszt == "jobb oldali középpályás") {
            obj = {};
            obj.nev = data[i].vezeteknev + ' ' + data[i].utonev;
            obj.poszt = data[i].poszt;
            obj.ertek = data[i].ertek;
            jkp.push(obj);
        }
        for (var j = 0; j < jkp.length; j++) {
            if (jkp[j].ertek > 0) {
                fo++;
                osszeg += jkp[j].ertek;
                atlag = osszeg / fo;
            }
        }
    }

    return atlag;
}


//ÁTLAGÉRTÉK BAL OLDALI KÖZÉPPÁLYÁS

function atlagertekBalOldalikpalyas() {
    var atlag;
    var fo = 0;
    var osszeg = 0;
    var bkp = [];

    for (var i = 0; i < data.length; i++) {
        if (data[i].poszt == "bal oldali középpályás") {
            obj = {};
            obj.nev = data[i].vezeteknev + ' ' + data[i].utonev;
            obj.poszt = data[i].poszt;
            obj.ertek = data[i].ertek;
            bkp.push(obj);
        }
        for (var j = 0; j < bkp.length; j++) {
            if (bkp[j].ertek > 0) {
                fo++;
                osszeg += bkp[j].ertek;
                atlag = osszeg / fo;
            }
        }
    }

    return atlag;
}


//ÁTLAGÉRTÉK KÖZÉPSŐ VÉDŐ

function atlagertekKozepsoVedo() {
    var atlag;
    var fo = 0;
    var osszeg = 0;
    var kv = [];

    for (var i = 0; i < data.length; i++) {
        if (data[i].poszt == "középső védő") {
            obj = {};
            obj.nev = data[i].vezeteknev + ' ' + data[i].utonev;
            obj.poszt = data[i].poszt;
            obj.ertek = data[i].ertek;
            kv.push(obj);
        }
        for (var j = 0; j < kv.length; j++) {
            if (kv[j].ertek > 0) {
                fo++;
                osszeg += kv[j].ertek;
                atlag = osszeg / fo;
            }
        }
    }

    return atlag;
}


//ÁTLAGÉRTÉK BAL OLDALI VÉDŐ

function atlagertekBalOldaliVedo() {
    var atlag;
    var fo = 0;
    var osszeg = 0;
    var bv = [];

    for (var i = 0; i < data.length; i++) {
        if (data[i].poszt == "bal oldali védő") {
            obj = {};
            obj.nev = data[i].vezeteknev + ' ' + data[i].utonev;
            obj.poszt = data[i].poszt;
            obj.ertek = data[i].ertek;
            bv.push(obj);
        }
        for (var j = 0; j < bv.length; j++) {
            if (bv[j].ertek > 0) {
                fo++;
                osszeg += bv[j].ertek;
                atlag = osszeg / fo;
            }
        }
    }

    return atlag;
}


//ÁTLAGÉRTÉK JOBB OLDALI VÉDŐ

function atlagertekJobbOldaliVedo() {
    var atlag;
    var fo = 0;
    var osszeg = 0;
    var jv = [];

    for (var i = 0; i < data.length; i++) {
        if (data[i].poszt == "jobb oldali védő") {
            obj = {};
            obj.nev = data[i].vezeteknev + ' ' + data[i].utonev;
            obj.poszt = data[i].poszt;
            obj.ertek = data[i].ertek;
            jv.push(obj);
        }
        for (var j = 0; j < jv.length; j++) {
            if (jv[j].ertek > 0) {
                fo++;
                osszeg += jv[j].ertek;
                atlag = osszeg / fo;
            }
        }
    }

    return atlag;
}


//ÁTLAG FELETTI ÉRTÉK KAPUS
function atlagFelettiErtekKapus() {
    var atlagFelettDragak = [];
    var at = atlagertekKapus();
    for (var i = 0; i < data.length; i++) {
        if (data[i].ertek > at && data[i].poszt == "kapus") {
            obj = {};
            obj.nev = data[i].vezeteknev + ' ' + data[i].utonev;
            obj.ertek = data[i].ertek;
            obj.poszt;

            atlagFelettDragak.push(obj);
        }
    }
    for (var i = 0; i < atlagFelettDragak.length - 1; i++) {
        for (var j = i + 1; j < atlagFelettDragak.length; j++) {
            if (atlagFelettDragak[i].ertek > atlagFelettDragak[j].ertek) {
                var tmp = [atlagFelettDragak[i], atlagFelettDragak[j]];
                tmp[0] = atlagFelettDragak[i];
                tmp[1] = atlagFelettDragak[j];

            }
        }
    }


    return atlagFelettDragak;
}


//ÁTLAG FELETTI ÉRTÉK KÖZÉPCSATÁR
function atlagFelettiErtekKozepcsatar() {
    var atlagFelettDragak = [];
    var at = atlagertekKozepcsatar();
    for (var i = 0; i < data.length; i++) {
        if (data[i].ertek > at && data[i].poszt == "középcsatár") {
            obj = {};
            obj.nev = data[i].vezeteknev + ' ' + data[i].utonev;
            obj.ertek = data[i].ertek;
            obj.poszt;

            atlagFelettDragak.push(obj);
        }
    }
    for (var i = 0; i < atlagFelettDragak.length - 1; i++) {
        for (var j = i + 1; j < atlagFelettDragak.length; j++) {
            if (atlagFelettDragak[i].ertek > atlagFelettDragak[j].ertek) {
                var tmp = [atlagFelettDragak[i], atlagFelettDragak[j]];
                tmp[0] = atlagFelettDragak[i];
                tmp[1] = atlagFelettDragak[j];

            }
        }
    }


    return atlagFelettDragak;
}


//ÁTLAG FELETTI ÉRTÉK HÁTRAVONT CSATÁR
function atlagFelettiErtekHcsatar() {
    var atlagFelettDragak = [];
    var at = atlagertekHCsatar();
    for (var i = 0; i < data.length; i++) {
        if (data[i].ertek > at && data[i].poszt == "hátravont csatár") {
            obj = {};
            obj.nev = data[i].vezeteknev + ' ' + data[i].utonev;
            obj.ertek = data[i].ertek;
            obj.poszt;

            atlagFelettDragak.push(obj);
        }
    }
    for (var i = 0; i < atlagFelettDragak.length - 1; i++) {
        for (var j = i + 1; j < atlagFelettDragak.length; j++) {
            if (atlagFelettDragak[i].ertek > atlagFelettDragak[j].ertek) {
                var tmp = [atlagFelettDragak[i], atlagFelettDragak[j]];
                tmp[0] = atlagFelettDragak[i];
                tmp[1] = atlagFelettDragak[j];

            }
        }
    }


    return atlagFelettDragak;
}


//ÁTLAG FELETTI ÉRTÉK BAL SZÉLSŐ
function atlagFelettiErtekBalszelso() {
    var atlagFelettDragak = [];
    var at = atlagertekBalszelso();
    for (var i = 0; i < data.length; i++) {
        if (data[i].ertek > at && data[i].poszt == "bal szélső") {
            obj = {};
            obj.nev = data[i].vezeteknev + ' ' + data[i].utonev;
            obj.ertek = data[i].ertek;
            obj.poszt;

            atlagFelettDragak.push(obj);
        }
    }
    for (var i = 0; i < atlagFelettDragak.length - 1; i++) {
        for (var j = i + 1; j < atlagFelettDragak.length; j++) {
            if (atlagFelettDragak[i].ertek > atlagFelettDragak[j].ertek) {
                var tmp = [atlagFelettDragak[i], atlagFelettDragak[j]];
                tmp[0] = atlagFelettDragak[i];
                tmp[1] = atlagFelettDragak[j];

            }
        }
    }


    return atlagFelettDragak;
}


//ÁTLAG FELETTI ÉRTÉK JOBB SZÉLSŐ
function atlagFelettiErtekJobbszelso() {
    var atlagFelettDragak = [];
    var at = atlagertekJobbszelso();
    for (var i = 0; i < data.length; i++) {
        if (data[i].ertek > at && data[i].poszt == "jobb szélső") {
            obj = {};
            obj.nev = data[i].vezeteknev + ' ' + data[i].utonev;
            obj.ertek = data[i].ertek;
            obj.poszt;

            atlagFelettDragak.push(obj);
        }
    }
    for (var i = 0; i < atlagFelettDragak.length - 1; i++) {
        for (var j = i + 1; j < atlagFelettDragak.length; j++) {
            if (atlagFelettDragak[i].ertek > atlagFelettDragak[j].ertek) {
                var tmp = [atlagFelettDragak[i], atlagFelettDragak[j]];
                tmp[0] = atlagFelettDragak[i];
                tmp[1] = atlagFelettDragak[j];

            }
        }
    }


    return atlagFelettDragak;
}

//ÁTLAG FELETTI ÉRTÉK TÁMADÓ KÖZÉPPÁLYÁS
function atlagFelettiErtekTKpalyas() {
    var atlagFelettDragak = [];
    var at = atlagertekTamadokpalyas();
    for (var i = 0; i < data.length; i++) {
        if (data[i].ertek > at && data[i].poszt == "támadó középpályás") {
            obj = {};
            obj.nev = data[i].vezeteknev + ' ' + data[i].utonev;
            obj.ertek = data[i].ertek;
            obj.poszt;

            atlagFelettDragak.push(obj);
        }
    }
    for (var i = 0; i < atlagFelettDragak.length - 1; i++) {
        for (var j = i + 1; j < atlagFelettDragak.length; j++) {
            if (atlagFelettDragak[i].ertek > atlagFelettDragak[j].ertek) {
                var tmp = [atlagFelettDragak[i], atlagFelettDragak[j]];
                tmp[0] = atlagFelettDragak[i];
                tmp[1] = atlagFelettDragak[j];

            }
        }
    }


    return atlagFelettDragak;
}


//ÁTLAG FELETTI ÉRTÉK BELSŐ KÖZÉPPÁLYÁS
function atlagFelettiErtekBKpalyas() {
    var atlagFelettDragak = [];
    var at = atlagertekBelsokpalyas();
    for (var i = 0; i < data.length; i++) {
        if (data[i].ertek > at && data[i].poszt == "belső középpályás") {
            obj = {};
            obj.nev = data[i].vezeteknev + ' ' + data[i].utonev;
            obj.ertek = data[i].ertek;
            obj.poszt;

            atlagFelettDragak.push(obj);
        }
    }
    for (var i = 0; i < atlagFelettDragak.length - 1; i++) {
        for (var j = i + 1; j < atlagFelettDragak.length; j++) {
            if (atlagFelettDragak[i].ertek > atlagFelettDragak[j].ertek) {
                var tmp = [atlagFelettDragak[i], atlagFelettDragak[j]];
                tmp[0] = atlagFelettDragak[i];
                tmp[1] = atlagFelettDragak[j];

            }
        }
    }


    return atlagFelettDragak;
}



//ÁTLAG FELETTI ÉRTÉK VÉDEKEZŐ KÖZÉPPÁLYÁS
function atlagFelettiErtekVpalyas() {
    var atlagFelettDragak = [];
    var at = atlagertekVedekezokpalyas();
    for (var i = 0; i < data.length; i++) {
        if (data[i].ertek > at && data[i].poszt == "védekező középpályás") {
            obj = {};
            obj.nev = data[i].vezeteknev + ' ' + data[i].utonev;
            obj.ertek = data[i].ertek;
            obj.poszt;

            atlagFelettDragak.push(obj);
        }
    }
    for (var i = 0; i < atlagFelettDragak.length - 1; i++) {
        for (var j = i + 1; j < atlagFelettDragak.length; j++) {
            if (atlagFelettDragak[i].ertek > atlagFelettDragak[j].ertek) {
                var tmp = [atlagFelettDragak[i], atlagFelettDragak[j]];
                tmp[0] = atlagFelettDragak[i];
                tmp[1] = atlagFelettDragak[j];

            }
        }
    }


    return atlagFelettDragak;
}

//ÁTLAG FELETTI ÉRTÉK JOBB OLDALI KÖZÉPPÁLYÁS
function atlagFelettiErtekJobbKpalyas() {
    var atlagFelettDragak = [];
    var at = atlagertekJobbOldalikpalyas();
    for (var i = 0; i < data.length; i++) {
        if (data[i].ertek > at && data[i].poszt == "jobb oldali középpályás") {
            obj = {};
            obj.nev = data[i].vezeteknev + ' ' + data[i].utonev;
            obj.ertek = data[i].ertek;
            obj.poszt;

            atlagFelettDragak.push(obj);
        }
    }
    for (var i = 0; i < atlagFelettDragak.length - 1; i++) {
        for (var j = i + 1; j < atlagFelettDragak.length; j++) {
            if (atlagFelettDragak[i].ertek > atlagFelettDragak[j].ertek) {
                var tmp = [atlagFelettDragak[i], atlagFelettDragak[j]];
                tmp[0] = atlagFelettDragak[i];
                tmp[1] = atlagFelettDragak[j];

            }
        }
    }


    return atlagFelettDragak;
}

//ÁTLAG FELETTI ÉRTÉK BAL OLDALI KÖZÉPPÁLYÁS
function atlagFelettiErtekBalKpalyas() {
    var atlagFelettDragak = [];
    var at = atlagertekBalOldalikpalyas();
    for (var i = 0; i < data.length; i++) {
        if (data[i].ertek > at && data[i].poszt == "bal oldali középpályás") {
            obj = {};
            obj.nev = data[i].vezeteknev + ' ' + data[i].utonev;
            obj.ertek = data[i].ertek;
            obj.poszt;

            atlagFelettDragak.push(obj);
        }
    }
    for (var i = 0; i < atlagFelettDragak.length - 1; i++) {
        for (var j = i + 1; j < atlagFelettDragak.length; j++) {
            if (atlagFelettDragak[i].ertek > atlagFelettDragak[j].ertek) {
                var tmp = [atlagFelettDragak[i], atlagFelettDragak[j]];
                tmp[0] = atlagFelettDragak[i];
                tmp[1] = atlagFelettDragak[j];

            }
        }
    }


    return atlagFelettDragak;
}

//ÁTLAG FELETTI ÉRTÉK KÖZÉPSŐ VÉDŐ
function atlagFelettiErtekKpVedo() {
    var atlagFelettDragak = [];
    var at = atlagertekKozepsoVedo();
    for (var i = 0; i < data.length; i++) {
        if (data[i].ertek > at && data[i].poszt == "középső védő") {
            obj = {};
            obj.nev = data[i].vezeteknev + ' ' + data[i].utonev;
            obj.ertek = data[i].ertek;
            obj.poszt;

            atlagFelettDragak.push(obj);
        }
    }
    for (var i = 0; i < atlagFelettDragak.length - 1; i++) {
        for (var j = i + 1; j < atlagFelettDragak.length; j++) {
            if (atlagFelettDragak[i].ertek > atlagFelettDragak[j].ertek) {
                var tmp = [atlagFelettDragak[i], atlagFelettDragak[j]];
                tmp[0] = atlagFelettDragak[i];
                tmp[1] = atlagFelettDragak[j];

            }
        }
    }


    return atlagFelettDragak;
}

//ÁTLAG FELETTI ÉRTÉK BAL OLDALI VÉDŐ
function atlagFelettiErtekBVedo() {
    var atlagFelettDragak = [];
    var at = atlagertekBalOldaliVedo();
    for (var i = 0; i < data.length; i++) {
        if (data[i].ertek > at && data[i].poszt == "bal oldali védő") {
            obj = {};
            obj.nev = data[i].vezeteknev + ' ' + data[i].utonev;
            obj.ertek = data[i].ertek;
            obj.poszt;

            atlagFelettDragak.push(obj);
        }
    }
    for (var i = 0; i < atlagFelettDragak.length - 1; i++) {
        for (var j = i + 1; j < atlagFelettDragak.length; j++) {
            if (atlagFelettDragak[i].ertek > atlagFelettDragak[j].ertek) {
                var tmp = [atlagFelettDragak[i], atlagFelettDragak[j]];
                tmp[0] = atlagFelettDragak[i];
                tmp[1] = atlagFelettDragak[j];

            }
        }
    }


    return atlagFelettDragak;
}

//ÁTLAG FELETTI ÉRTÉK JOBB OLDALI VÉDŐ
function atlagFelettiErtekJVedo() {
    var atlagFelettDragak = [];
    var at = atlagertekJobbOldaliVedo();
    for (var i = 0; i < data.length; i++) {
        if (data[i].ertek > at && data[i].poszt == "jobb oldali védő") {
            obj = {};
            obj.nev = data[i].vezeteknev + ' ' + data[i].utonev;
            obj.ertek = data[i].ertek;
            obj.poszt;

            atlagFelettDragak.push(obj);
        }
    }
    for (var i = 0; i < atlagFelettDragak.length - 1; i++) {
        for (var j = i + 1; j < atlagFelettDragak.length; j++) {
            if (atlagFelettDragak[i].ertek > atlagFelettDragak[j].ertek) {
                var tmp = [atlagFelettDragak[i], atlagFelettDragak[j]];
                tmp[0] = atlagFelettDragak[i];
                tmp[1] = atlagFelettDragak[j];

            }
        }
    }


    return atlagFelettDragak;
}

console.log('Játékosok átlagos értéke ', atlag());
console.log('Átlag feletti értékű játékosok ', atlagFelettiErtek());
console.log('Átlagérték kapusok ', atlagertekKapus());
console.log('Átlagérték középcsatárok ', atlagertekKozepcsatar());
console.log('Átlagérték hátravont csatárok ', atlagertekHCsatar());
console.log('Átlagérték bal szélsők ', atlagertekBalszelso());
console.log('Átlagérték jobb szélsők ', atlagertekJobbszelso());
console.log('Átlagérték támadó középpályások ', atlagertekTamadokpalyas());
console.log('Átlagérték belső középpályás ', atlagertekBelsokpalyas());
console.log('Átlagérték védekező középpályás ', atlagertekVedekezokpalyas());
console.log('Átlagérték jobb oldali középpályás ', atlagertekJobbOldalikpalyas());
console.log('Átlagérték bal oldali középpályás ', atlagertekBalOldalikpalyas());
console.log('Átlagérték középső védő ', atlagertekKozepsoVedo());
console.log('Átlagérték bal oldali védő ', atlagertekBalOldaliVedo());
console.log('Átlagérték jobb oldali védő ', atlagertekJobbOldaliVedo());
console.log('Átlag feletti érték kapus ', atlagFelettiErtekKapus());
console.log('Átlag feletti érték középcsatár ', atlagFelettiErtekKozepcsatar());
console.log('Átlag feletti érték hátravont csatár ', atlagFelettiErtekHcsatar());
console.log('Átlag feletti érték bal szélső ', atlagFelettiErtekBalszelso());
console.log('Átlag feletti érték jobb szélső ', atlagFelettiErtekJobbszelso());
console.log('Átlag feletti érték támadó középpályás ', atlagFelettiErtekTKpalyas());
console.log('Átlag feletti érték bal oldali középpályás ', atlagFelettiErtekBKpalyas());
console.log('Átlag feletti érték védekező középpályás ', atlagFelettiErtekVpalyas());
console.log('Átlag feletti érték jobb oldali középpályás ', atlagFelettiErtekJobbKpalyas());
console.log('Átlag feletti érték bal oldali középpályás ', atlagFelettiErtekBalKpalyas());
console.log('Átlag feletti érték középső védő ', atlagFelettiErtekKpVedo());
console.log('Átlag feletti érték bal oldali védő ', atlagFelettiErtekBVedo());
console.log('Átlag feletti érték jobb oldali védő ', atlagFelettiErtekJVedo());