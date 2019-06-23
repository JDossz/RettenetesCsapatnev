//klubok
var tablecsapat = '<table border=1><tr><th>Csapatnév</th></tr>';
var klubok = csapatok()
for (var i = 0; i < klubok.length; i++) {
    tablecsapat += '<tr><td>' + klubok[i] + '</td></tr>'
}
tablecsapat += '</table>'

//document.querySelector(".klubok").innerHTML = tablecsapat;

//klubok játékosai

var tablecsapatjatekos = '<table border=1><tr><th>Klubok</th><th>Játékosok</th></tr>';
var klubjatekosok = jatekosokACsapatokban();
for (var i = 0; i < klubjatekosok.length; i++) {
    var jt = '<table>';
    for (var j = 0; j < klubjatekosok[i].jatekosok.length; j++) {
        var x = klubjatekosok[i].jatekosok[j]
        jt += '<tr><td>' + x.vezeteknev + ' ' + x.utonev + '</td></tr>'
    }
    jt += '</table>'
    tablecsapatjatekos += '<tr><td>' + klubjatekosok[i].name + '</td><td>' + jt + '</td></tr>'
}
tablecsapatjatekos += '</table>'

//document.querySelector(".klubjatekosok").innerHTML = tablecsapatjatekos;

//teljes név és kor

var tablefnk = '<table border=1><tr><th>Név</th><th>Kor</th></tr>';
var fullnevkor = nevKor();
for (var i = 0; i < fullnevkor.length; i++) {
    tablefnk += '<tr><td>' + fullnevkor[i].nev + '</td><td>' + fullnevkor[i].kor + '</td></tr>'
}
tablefnk += '</table>'

document.querySelector(".fullnevkor").innerHTML = tablefnk;

//születésnap

var tableszn = '<table border=1><tr><th>Név</th><th>Kor</th></tr>';
var fullNevSzulinap = szuletesnap();
for (var i = 0; i < fullNevSzulinap.length; i++) {
    tableszn += '<tr><td>' + fullNevSzulinap[i].nev + '</td><td>' + fullNevSzulinap[i].szulinap + '</td></tr>'
}
tableszn += '</table>'

document.querySelector(".fullNevSzulinap").innerHTML = tablefnk;

//átlagos érték
var tableatlag = '<table border=1><tr><th>Átlagos érték</th></tr>';
var atlag = atlag()
for (var i = 0; i < atlag.length; i++) {
    tableatlag += '<tr><td>' + atlag[i] + '</td></tr>'
}
tableatlag += '</table>'