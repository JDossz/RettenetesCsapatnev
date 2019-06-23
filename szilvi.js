//JÁTÉKOSOK ÉRTÉKSORRENDBEN
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