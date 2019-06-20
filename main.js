


function AllGoals()
{
    var result = 0;
    for (var i = 0; i < players.length; i++)
    {
        result += parseInt(players[i].goals);
    }
    return result;
}
//---------------------------------------------------------
function DateFormatter(furcsaForma)
{
    var result = '';
    var arr = furcsaForma.split('/')
    result = arr[2] + '-' + arr[1] + '-' + arr[0];
    return result;
}

/*
function CalculateAge(birthdate)
{
    var age = -99;
    var dtToday = new Date();
    var dtBirthdate = new Date(birthdate);
    age = dtToday.getFullYear() - dtBirthdate.getFullYear();
    return age; 
}
*/

function CalculateAge(birthdate)
{
    var age = -99;
    var dtToday = new Date();
    var dtBirthdate = new Date(DateFormatter(birthdate));
    age = dtToday.getFullYear() - dtBirthdate.getFullYear();
    return age; 
}

function MinimumAge()
{
    var min = CalculateAge(players[0].birthdate);
    for (var i = 0; i < players.length; i++)
    {
        if (min > CalculateAge(players[i].birthdate))
        {
            min = CalculateAge(players[i].birthdate);
        }
    }
    return min;
}
//---------------------------------------------------------
function MaximumAge()
{
    var max = CalculateAge(players[0].birthdate);
    for (var i = 0; i < players.length; i++)
    {
        if (max < CalculateAge(players[i].birthdate))
        {
            max = CalculateAge(players[i].birthdate);
        }
    }
    return max;
}
//---------------------------------------------------------
function AverageAge()
{
    var sumAge = 0;
    var numberOfPlayers = 0;
    for (var i = 0; i < players.length; i++)
    {
        sumAge += CalculateAge(players[i].birthdate);
        numberOfPlayers++;
    }
    var averge = sumAge / numberOfPlayers;
    return averge;
}

function OldestPlayer()
{
    var oldest = players[0];
    for (var i = 0; i < players.length; i++)
    {
        if (CalculateAge(oldest.birthdate) < CalculateAge(players[i].birthdate))
        {
            oldest = players[i];
        }
    }
    return oldest;
}

function Goalkeepers()
{
    var result = [];
    for (var i = 0; i < players.length; i++)
    {
        if (players[i].position == 'Goalkeeper')
        {
            result.push(players[i].name);
        }
    }
    return result;
}

function HasPlayerFromClub(pClubName)
{
    var result = false;
    for (var i = 0; i < players.length; i++)
    {
        if (players[i].club.indexOf(pClubName) != -1) // az .indexOf() visszaadja a megfelelő értékek indexét (ha nincs benne keresett kifejezés, akkor -1)
        {
            result = true;
            break;
        }
    }
    return result;
}

function HasPlayerWithName(pPlayerName)
{
    var result = false;
    for (var i = 0; i < players.length; i++)
    {
        if (players[i].name.indexOf(pPlayerName) != -1)
        {
            result = true;
            break;
        }
    }
    return result;
}

function FirstPlayerWithName(pPlayerName)
{
    var result = players[0];
    for (var i = 0; i < players.length; i++)
    {
        if (players[i].name.indexOf(pPlayerName) != -1)
        {
            result = players[i];
            break;
        }
    }
    return result;
}

function PlayersWithName(pPlayerName)
{
    var result = [];
    for (var i = 0; i < players.length; i++)
    {
        if (players[i].name.indexOf(pPlayerName) != -1)
        {
            result.push(players[i]);
        }
    }
    return result;
}

function ClubsRepresented()
{
    var result = [];
    for (var i = 0; i < players.length; i++)
    {
        if (result.indexOf(players[i].club) == -1)
        {
            result.push(players[i].club);
        }
    }
    return result;
}

function PlayersByClub()
{
    var result = [];
    var clubs = ClubsRepresented(); // itt a függvény visszatérési értéke lesz a változóba betárolva
    var player;
    for (var i = 0; i < players.length; i++)
    {
        result.push(
            {
                name: clubs[i],
                players: []
            }
        );
    }
    for (var i = 0; i < players.length; i++) 
    {
        player = players[i];
        for (var j = 0; j < players.length; j++)
        {
            if (result[j].name === player.club)
            {
                result[j].players.push(player);
                break;
            }
        }
    }
    return result;
}

