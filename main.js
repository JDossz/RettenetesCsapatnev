/* A játékosok összértéke */
function SumErtek()
{
    var sumErtek = 0;
    for (var i = 0; i < data.length; i++)
    {
        sumErtek += data[i].ertek;
    }
    document.getElementById("sumErtek").innerHTML = sumErtek;
    console.log(SumErtek());
};

// A legértékesebb játékos
function MostValuablePlayer()
{
    var legertekesebbJatekos = data[0];
    for (var i = 0; i < data.length; i++)
    {
        if (legertekesebbJatekos.ertek < data[i].ertek)
        {
            legertekesebbJatekos = data[i];
        }
    }
    document.getElementById("legertekesebb").innerHTML = (legertekesebbJatekos.vezeteknev + ' ' + legertekesebbJatekos.utonev);
    return (legertekesebbJatekos.vezeteknev + ' ' + legertekesebbJatekos.utonev);
};
console.log('Legértékesebb játékos: ' + MostValuablePlayer());

// A legkevésbé értékes játékos
function LeastValuablePlayer()
{
    var legkevesbeErtekesJatekos = data[0];
    for (var i = 0; i < data.length; i++)
    {
        if (legkevesbeErtekesJatekos.ertek > data[i].ertek)
        {
            legkevesbeErtekesJatekos = data[i];
        }
    }
    document.getElementById("legertektelenebb").innerHTML = (legkevesbeErtekesJatekos.vezeteknev + ' ' +legkevesbeErtekesJatekos.utonev);
    return (legkevesbeErtekesJatekos.vezeteknev + ' ' + legkevesbeErtekesJatekos.utonev);
};
console.log('Legértéktelenebb játékos: ' + LeastValuablePlayer());

/* A játékosok életkorának kiszámítása */
function CalculateAge(pszulido)
{
    var age = -1; //hogy tudja, ha valami nem jó
    var dtToday = new Date();
    var dtBirthdate = new Date(pszulido);
    age = dtToday.getFullYear() - dtBirthdate.getFullYear();
    return age; 
};

/* A user által választott játékos életorának kiválasztása */
/*
function CalculateAgeOf(teljesNev)
{
    var teljesNev = document.getElementById('teljesNev');
    var nameOf = [];
    var result;
    for (var i = 0; i < data.length; i++)
    {
        nameOf.push(data[i].vezeteknev + ' ' + data[i].utonev);
    }
    if (nameOf[i].indexOf(teljesNev) != -1)
    {
        result = 
        {
            
            
        }
    }
};
*/

// A legidősebb játékos:
function Legidosebb()
{
    var legidosebb = '';
    var legIdosebbJatekosAge = CalculateAge(data[0].szulido);
    for (var i = 0; i < data.length; i++)
    {
        if (CalculateAge(data[i].szulido) > legIdosebbJatekosAge)
        {
            legIdosebbJatekosAge = CalculateAge(data[i].szulido);
            legidosebb = 'A legidősebb játékos ' + data[i].vezeteknev + ' ' + data[i].utonev + ', Ő ' + legIdosebbJatekosAge + ' éves, a születési éve pedig ' + data[i].szulido
        }
    }
    document.getElementById("legidosebb").innerHTML = legidosebb;
    return legidosebb; //??? hol fut, hol nem, és nem értem, miért
}
console.log('Legidősebb játékos: ' + Legidosebb());

// A legfiatalabb játékos:
function Legfiatalabb()
{
    var legfiatalabb = '';
    var legFiatalabbJatekosAge = CalculateAge(data[0].szulido);
    for (var i = 0; i < data.length; i++)
    {
        if (CalculateAge(data[i].szulido) < legFiatalabbJatekosAge)
        {
            legFiatalabbJatekosAge = CalculateAge(data[i].szulido);
            legfiatalabb = 'A legfiatalabb játékos ' + data[i].vezeteknev + ' ' + data[i].utonev + ', Ő ' + legFiatalabbJatekosAge + ' éves, a születési éve pedig ' + data[i].szulido
        }
    }
    document.getElementById("legfiatalabb").innerHTML = legfiatalabb;
    return legfiatalabb; //??? hol fut, hol nem, és nem értem, miért
}
console.log('Legfiatalabb játékos: ' + Legfiatalabb());
    
//Magyar játékosok listája:
function Magyarok()
{
    var magyarok = [];
    for (var i = 0; i < data.length; i++)
    {
        if (data[i].magyar == true)
        {
            magyarok += (data[i].vezeteknev + ' ' + data[i].utonev + ', ');
        }
    }
    document.getElementById("magyarok").innerHTML = magyarok;
}
// console.log('Magyarok: ' + Magyarok());
//--> ezt atért kell kivenni, hogy ne jelenjen meg azonnal az érték
    
//Külföldi játékosok listája:
function Kulfoldiek()
{
    var kulfoldiek = [];
    for (var i = 0; i < data.length; i++)
    {
        if (data[i].kulfoldi == true)
        {
            kulfoldiek += (data[i].vezeteknev + ' ' + data[i].utonev + ', ');
        }
    }
    document.getElementById("kulfoldiek").innerHTML = kulfoldiek;
}
// console.log('Külföldiek: ' + Kulfoldiek());
//--> ezt atért kell kivenni, hogy ne jelenjen meg azonnal az érték
