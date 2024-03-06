//no editting my code buster!!! :3
let risk=2;
let optionvalue=parseFloat(document.getElementById('optionvalue').value);
let accountsize=parseFloat(document.getElementById('accountsize').value);
let stoploss=parseFloat(document.getElementById('stoploss').value);
let entry=parseFloat(document.getElementById('entry').value);
let shares;
let options;
function computeShares(){
    shares=Math.round((accountsize/(100/risk))/(entry-stoploss));
    return document.getElementById('shares').innerText = shares;
}
function computeOptions(){
    options=Math.round((accountsize/10000)*(400/(optionvalue*(200/risk))))
    return document.getElementById('options').innerText = options;
}
function initUI(){
    document.querySelector('#accountsize').onchange = (e) => {
        if(document.getElementById('accountsize').value<=0){
            document.getElementById('accountsize').value=0;
        }
            
        accountsize=parseFloat(document.getElementById('accountsize').value);
        computeShares();
        computeOptions();
    }
    document.querySelector('#stoploss').onchange = (e) => {
        if(document.getElementById('stoploss').value>=entry||document.getElementById('stoploss').value<0)
            document.getElementById('stoploss').value=entry-0.01;
        stoploss=parseFloat(document.getElementById('stoploss').value);
        computeShares();
        computeOptions();
    }
    document.querySelector('#entry').onchange = (e) => {
        if(document.getElementById('entry').value<=stoploss||document.getElementById('entry').value<0)
            document.getElementById('entry').value=stoploss+0.01;
        entry=parseFloat(document.getElementById('entry').value);
        computeShares();
        computeOptions();
    }
    document.querySelector('#optionvalue').onchange = (e) => {
        if(document.getElementById('optionvalue').value<0)
             document.getElementById('optionvalue').value=0;
        optionvalue=parseFloat(document.getElementById('optionvalue').value);
        computeShares();
        computeOptions();
    }
    document.querySelector('#risk').onchange = (e) => {
        risk=e.target.value;
        document.getElementById('riskdis2').innerText=risk;
        document.getElementById('riskdis1').innerText=risk;
        computeShares();
        computeOptions();
    }
}
window.onload = () => {
    initUI()
    computeShares()
    computeOptions();
}