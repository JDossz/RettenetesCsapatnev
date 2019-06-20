/* A játékosok összértéke */
function SumErtek()
{
    var sumErtek = 0;
    for (var i = 0; i < data.length; i++)
    {
        sumErtek += data[i].ertek;
    }
    return sumErtek;
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

