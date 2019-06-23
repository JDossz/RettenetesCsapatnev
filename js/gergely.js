//Innen kezdődik Gergely JS kódja:
function GJatekosKoraSzamold(pszulido) {
  var szuletesiIdo = new Date(pszulido);
  var aktualisDatum = new Date();
  var jatekosKora = aktualisDatum.getFullYear() - szuletesiIdo.getFullYear();
  return jatekosKora;
};

function GLegIdosebbJatekosKora() {
  var result = '';
  var legIdosebbJatekosKora = GJatekosKoraSzamold(data[0].szulido);
  for (var i = 0; i < data.length; i++) {
    if (GJatekosKoraSzamold(data[i].szulido) > legIdosebbJatekosKora) {
      legIdosebbJatekosKora = GJatekosKoraSzamold(data[i].szulido);
      result = legIdosebbJatekosKora + " éves és a születési éve: " + data[i].szulido;
    }
  }

  return result;
};

function GLegFiatalabbJatekosKora() {
  var result = '';
  var legFiatalabbJatekosKora = GJatekosKoraSzamold(data[0].szulido);
  for (var i = 0; i < data.length; i++) {
    if (GJatekosKoraSzamold(data[i].szulido) < legFiatalabbJatekosKora) {
      legFiatalabbJatekosKora = GJatekosKoraSzamold(data[i].szulido);
      result = legFiatalabbJatekosKora + " éves és a születési éve: " + data[i].szulido;
    }
  }
  return result;
};

function GLegDragabbJatekosErteke() {
  var legDragabbJatekosAra = data[0].ertek;
  for (var i = 0; i < data.length; i++) {
    if (data[i].ertek > legDragabbJatekosAra) {
      legDragabbJatekosAra = data[i].ertek;
    }
  }
  return legDragabbJatekosAra;
};

function GLegOlcsobbJatekosErteke() {
  var legOlcsobbJatekosAra = data[0].ertek;
  for (var i = 0; i < data.length; i++) {
    if (data[i].ertek < legOlcsobbJatekosAra) {
      legOlcsobbJatekosAra = data[i].ertek;
    }
  }
  return legOlcsobbJatekosAra;
};

function GLegFiatalabbJatekosNeve() {
  var result = "";
  var legFiatalabbJatekosSzulIdeje = new Date(data[0].szulido);
  for (var i = 0; i < data.length; i++) {
    if (new Date(data[i].szulido) > legFiatalabbJatekosSzulIdeje) {
      legFiatalabbJatekosSzulIdeje = new Date(data[i].szulido);
      result = data[i].vezeteknev + ' ' + data[i].utonev;
    }
  }
  return result + ' ' + GJatekosKoraSzamold(legFiatalabbJatekosSzulIdeje) + ' éves';
};

function GLegIdosebbJatekosNeve() {
  var result = "";
  var legIdosebbJatekosSzulIdeje = new Date(data[0].szulido);
  for (var i = 0; i < data.length; i++) {
    if (legIdosebbJatekosSzulIdeje > new Date(data[i].szulido)) {
      legIdosebbJatekosSzulIdeje = new Date(data[i].szulido);
      result = data[i].vezeteknev + ' ' + data[i].utonev;
    }
  }
  return result + ' ' + GJatekosKoraSzamold(legIdosebbJatekosSzulIdeje) + ' éves';
};

function GIlyenKlubokVannak() {
  var klubok = [];
  for (var i = 0; i < data.length; i++) {
    if (klubok.indexOf(data[i].klub) === -1) {
      klubok.push(data[i].klub);
    }
  }
  return klubok;
};

function GOsszesJatekosErteke() {
  var jatekosokErteke = 0;
  for (var i = 0; i < data.length; i++) {
    jatekosokErteke += data[i].ertek;
  }
  return jatekosokErteke;
};

function GJatekosokErtekAtlaga() {

  var atlag = 0;
  var jatekosDarabSzam = 0;
  var jatekosOsszeg = 0;
  for (var i = 0; i < data.length; i++) {
    jatekosOsszeg += data[i].ertek;
    jatekosDarabSzam++;
  }
  atlag = jatekosOsszeg / jatekosDarabSzam;
  return atlag;
};

function GJatekosokKoranakAtlaga() {
  var jatekosDarab = 0;
  var jatekosEletkor = 0;
  var atlag = 0;
  for (var i = 0; i < data.length; i++) {
    jatekosEletkor += GJatekosKoraSzamold(data[i].szulido)
    jatekosDarab++;
  }
  atlag = jatekosEletkor / jatekosDarab;
  atlag += ' év'
  return atlag;
};

function GCsapataJatekosai(pCsapatnev) {
  var jatekosok = [];
  var csapatNev = pCsapatnev;
  for (var i = 0; i < data.length; i++) {
    if (data[i].klub.indexOf(csapatNev) !== -1) {
      jatekosok.push(data[i].vezeteknev + ' ' + data[i].utonev + '\n')
    }
  }
  return jatekosok;
};

function GPosztJatekosai(pPoszt) {
  var mindenJatekosAKerdesesPoszton = [];
  var jatekosPosztja = pPoszt;
  for (var i = 0; i < data.length; i++) {
    if (data[i].poszt.indexOf(jatekosPosztja) !== -1) {
      mindenJatekosAKerdesesPoszton += data[i].vezeteknev + ' ' + data[i].utonev;
      mindenJatekosAKerdesesPoszton += '\n';
    }
  }
  return mindenJatekosAKerdesesPoszton;
};

function GLegHosszabbVezeteknev() {
  var leghosszabbVezetekNevVar = data[0].vezeteknev;
  for (var i = 0; i < data.length; i++) {
    if (leghosszabbVezetekNevVar.length < data[i].vezeteknev.length) {
      leghosszabbVezetekNevVar = data[i].vezeteknev;
    }
  }
  return leghosszabbVezetekNevVar;
}

function GLegRovidebbVezeteknev() {
  var legRovidebbVezetekNev = data[0].vezeteknev;
  for (var i = 0; i < data.length; i++) {
    if (legRovidebbVezetekNev.length > data[i].vezeteknev.length) {
      legRovidebbVezetekNev = data[i].vezeteknev;
    }
  }
  return legRovidebbVezetekNev;
};

function GMennyiBelaVan(pMibenKeres, pMitKeres) {
  var belakMennyisege = 0;
  var mitKeres = pMitKeres;
  var mibenKeres = pMibenKeres;
  for (var i = 0; i < mibenKeres.length; i++) {
    if (mibenKeres[i].utonev == mitKeres) {
      belakMennyisege = belakMennyisege + 1;
    }
  }
  belakMennyisege += ' -> sajnos nincs Béla az MB1-ben'
  return belakMennyisege;
};

function GMennyiGergelyVan(pMibenKeres, pMitKeres) {
  var gergelyekSzama = 0;
  var gergelyekNeve = [];
  for (var i = 0; i < pMibenKeres.length; i++) {
    if (pMibenKeres[i].utonev === pMitKeres) {
      gergelyekSzama = gergelyekSzama + 1;
      gergelyekNeve.push(pMibenKeres[i].vezeteknev + ' ' + pMibenKeres[i].utonev);
    }
  }
  gergelyekSzama += ' db ilyen nevű játékos van: '
  return gergelyekSzama + gergelyekNeve;
}

function GHolJatszikGergely(pMibenKeres, pGergely) {
  var melyikCsapatban = [];
  for (var i = 0; i < pMibenKeres.length; i++) {
    if (pMibenKeres[i].utonev === pGergely) {
      melyikCsapatban.push(pMibenKeres[i].klub);
    }
  }
  return melyikCsapatban;
};

function GGyujtsdKiAzErtekeket(pData) {
  var jatekosokErteke = [];
  for (var i = 0; i < data.length; i++) {
    jatekosokErteke.push(pData[i].ertek)
  }
  return jatekosokErteke;
}

console.log('Legidősebb játékos ennyi éves: ' + GLegIdosebbJatekosKora());
console.log('Legfiatalabb játékos ennyi éves: ' + GLegFiatalabbJatekosKora());
console.log('Legdrágább jatékos ára: ' + GLegDragabbJatekosErteke());
console.log('Legolcsóbb játékos ára: ' + GLegOlcsobbJatekosErteke());
console.log('Legfiatalabb játékos: ' + GLegFiatalabbJatekosNeve());
console.log('Legidősebb játékos: ' + GLegIdosebbJatekosNeve());
console.log('Ilyen klubok vannak a bajnokságban: ' + GIlyenKlubokVannak());
console.log('Összes játékos értéke a bajnokságban: ' + GOsszesJatekosErteke());
console.log('Játékosok értékének átlaga: ' + GJatekosokErtekAtlaga());
console.log('Játékosok korának átlaga: ' + GJatekosokKoranakAtlaga());
console.log('Ezek a játékosok vannak a Vasasban: ' + GCsapataJatekosai('Vasas'));
console.log('Kapus poszton ezek az emberek vannak: ' + GPosztJatekosai('kapus'));
console.log('Leghosszabb vezetéknevű játékos: ' + GLegHosszabbVezeteknev());
console.log('Legrövidebb vezetéknevű játékos: ' + GLegRovidebbVezeteknev());
console.log('Van-e Béla és mennyi? ' + GMennyiBelaVan(data, 'Béla'));
console.log('Van-e Gergely és mennyi? ' + GMennyiGergelyVan(data, 'Gergely'));
console.log('Melyik csapatban van Gergely? ' + GHolJatszikGergely(data, 'Gergely'));
console.log(GGyujtsdKiAzErtekeket(data));
//Eddig tart Gergely JS kódja.