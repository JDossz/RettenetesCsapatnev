/* A játékosok összértéke */
function SumErtek()
{
    var sumErtek = 0;
    for (var i = 0; i < data.length; i++)
    {
        sumErtek += data[i].ertek;
    }
    document.getElementById("sumErtek").innerHTML = sumErtek;
}

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
    document.getElementById("legertekesebb").innerHTML = legertekesebbJatekos;
}

/* A játékosok életkorának kiszámítása */
function CalculateAge(szulido)
{
    var age = -1;
    var dtToday = new Date();
    var dtBirthdate = new Date(szulido);
    age = dtToday.getFullYear() - dtBirthdate.getFullYear();
    return age; 
}

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
}
*/

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

