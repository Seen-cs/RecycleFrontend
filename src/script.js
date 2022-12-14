let eth = new WebSocket('wss://stream.binance.com:9443/ws/ethusdt@trade');
let ethStockPriceElement = document.getElementById('ETH');
let ethLastPrice = null;

eth.onmessage = (event) => 
{
    let ethStockObject = JSON.parse(event.data);
    let ethPrice = parseFloat(ethStockObject.p).toFixed(2);

    ethStockPriceElement.innerText = ethPrice;
    ethStockPriceElement.style.color = !ethLastPrice || ethLastPrice == ethPrice ? 'black' : ethPrice > ethLastPrice ? 'green' : 'red';           

    ethLastPrice = ethPrice;
}


let btc = new WebSocket('wss://stream.binance.com:9443/ws/btcusdt@trade');
let btcStockPriceElement = document.getElementById('BTC');
let btcLastPrice = null;

btc.onmessage = (event) => 
{
    let btcStockObject = JSON.parse(event.data);
    let btcPrice = parseFloat(btcStockObject.p).toFixed(2);

    btcStockPriceElement.innerText = btcPrice;
    btcStockPriceElement.style.color = !btcLastPrice || btcLastPrice == btcPrice ? 'black' : btcPrice > btcLastPrice ? 'green' : 'red';           

    btcLastPrice = btcPrice;
}


let xrp = new WebSocket('wss://stream.binance.com:9443/ws/xrpusdt@trade');
let xrpStockPriceElement = document.getElementById('XRP');
let xrpLastPrice = null;

xrp.onmessage = (event) =>
{
    let xrpStockObject = JSON.parse(event.data);
    let xrpPrice = parseFloat(xrpStockObject.p).toFixed(4);

    xrpStockPriceElement.innerText = xrpPrice;
    xrpStockPriceElement.style.color = !xrpLastPrice || xrpLastPrice == xrpPrice ? 'black' : xrpPrice > xrpLastPrice ? 'green' : 'red';

    xrpLastPrice = xrpPrice;

}


let ltc = new WebSocket('wss://stream.binance.com:9443/ws/ltcusdt@trade');
let ltcStockPriceElement = document.getElementById('LTC');
let ltcLastPrice = null;

ltc.onmessage = (event) =>
{
    let ltcStockObject = JSON.parse(event.data);
    let ltcPrice = parseFloat(ltcStockObject.p).toFixed(2);

    ltcStockPriceElement.innerText = ltcPrice;
    ltcStockPriceElement.style.color = !ltcLastPrice || ltcLastPrice == ltcPrice ? 'black' : ltcPrice > ltcLastPrice ? 'green' : 'red';

    ltcLastPrice = ltcPrice;

}


let neo = new WebSocket('wss://stream.binance.com:9443/ws/neousdt@trade');
let neoStockPriceElement = document.getElementById('NEO');
let neoLastPrice = null;

neo.onmessage = (event) =>
{
    let neoStockObject = JSON.parse(event.data);
    let neoPrice = parseFloat(neoStockObject.p).toFixed(2);

    neoStockPriceElement.innerText = neoPrice;
    neoStockPriceElement.style.color = !neoLastPrice || neoLastPrice == neoPrice ? 'black' : neoPrice > neoLastPrice ? 'green' : 'red';

    neoLastPrice = neoPrice;

}
