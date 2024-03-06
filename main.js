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
    if(shares!=Infinity&&!isNaN(shares)&&shares>=0){
    return document.getElementById('shares').innerText = shares;} else{return document.getElementById('shares').innerText =0}
}
function computeOptions(){
    options=Math.round((accountsize/10000)*(400/(optionvalue*(200/risk))))
    if(options!=Infinity&&!isNaN(options)&&options>=0){
    return document.getElementById('options').innerText = options;} else{return document.getElementById('options').innerText =0}
}
function initUI(){
    document.querySelector('#risk').onchange = (e) => {
        try{
        risk=e.target.value;
        document.getElementById('riskdis2').innerText=risk;
        document.getElementById('riskdis1').innerText=risk;
        computeShares();
        computeOptions();
        } catch(e){}
    }
}
function tick(){
    try{
    if(document.getElementById('optionvalue').value<0)
             document.getElementById('optionvalue').value=0.00;
        optionvalue=parseFloat(document.getElementById('optionvalue').value);
    if(document.getElementById('entry').value<0)
            document.getElementById('entry').value=0.00;
        entry=parseFloat(document.getElementById('entry').value);
    if(document.getElementById('stoploss').value<0)
            document.getElementById('stoploss').value=0.00;
        stoploss=parseFloat(document.getElementById('stoploss').value);
    if(document.getElementById('accountsize').value<0){
            document.getElementById('accountsize').value=0.00;}
        accountsize=parseFloat(document.getElementById('accountsize').value);
    computeShares()
    computeOptions()
    setTimeout(tick,1);
    } catch(e){}
}
window.onload = () => {
    initUI()
    tick()
    computeShares()
    computeOptions()
}
//made by pvppoverty