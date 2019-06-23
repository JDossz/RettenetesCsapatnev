function EredmenyGol() {
    var stieber = document.querySelector('#stieber');
    var isStieber = stieber.checked;
    var feedback = "";

    if (isStieber == true) {
        feedback = 'Helyes válasz!';
    } else {
        feedback = 'Sajnos nem talált.';
    }
    alert(feedback);
}

function EredmenyLegdragabb() {
    var mbappe = document.querySelector('#mbappe');
    var isMbappe = mbappe.checked;
    var feedback = "";

    if (isMbappe == true) {
        feedback = 'Helyes válasz!';
    } else {
        feedback = 'Sajnos nem talált.';
    }
    alert(feedback);
}

function EredmenyLegdragabbMagyar() {
    var orban = document.querySelector('#orban');
    var isOrban = orban.checked;
    var feedback = "";

    if (isOrban == true) {
        feedback = 'Helyes válasz!';
    } else {
        feedback = 'Sajnos nem talált.';
    }
    alert(feedback);
}

