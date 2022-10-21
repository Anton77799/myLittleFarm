let cvs = document.getElementById("canvas")
let ctx = cvs.getContext("2d")
let table = document.createElement("table")
let tableForB = document.createElement("table")
let tableForReady = document.createElement("table")
let sellEgg = document.createElement("div")
let sellMilk = document.createElement("div")
let sellDiv = document.createElement("div")
let sumDiv = document.createElement("div")
let RuleDiv = document.createElement("div")

let ind = 1;
let millet = 0;
let milk = 0;
let egg = 0;
let sum = 0;

table.id = "pole";
tableForB.id = "choose";
tableForReady.id = "ready";
sumDiv.id = "sum";
RuleDiv.id = "rule";

sellDiv.className = "sell";

sellEgg.innerHTML = '<button id="egg" onclick="sellAllEgg()">Продать</button>';
sellMilk.innerHTML = '<button id="milk" onclick="sellAllMilk()">Продать</button>';
RuleDiv.innerHTML = `<h2>Правила:</h2><p>1. Чтобы выбрать, что поставить на клетку, нажмите на соответсвующую иконку слева. По умолчанию выбрано семена пшеницы.</p>
<p>2. Как только вы садите пшеницу, начинается отсчёт времени, по истечению которого можно будет собрать урожай</p>
<p>3. Чтобы покормить одно животное, нужно минимум одна единица собранной пшеницы. Всё, что собрали, отображается справа от поля</p>
<p>4. После того, как поставили животное, нужно ещё раз нажать на него, чтобы покормить. Как только вы его покормили, начинается отсчёт времени, по истечению которого можно будет
собрать продукт.</p>
<p>5. Корова на одну единицу еды даёт одну единицу молока за 20 секунд. Курица за одну единицу еды даёт одно яйцо за 10 секунд в течении 30 секунд (чтобы она продолжила 
приносить яйца, нужно собрать уже то, что она вынесла).</p>
<p>6. Вы можете продать молоко и яйца. Кнопка напротив продаёт всю соответсвующую продукцию, что имеется на данный момент: 1$ за одно яйцо и 3$ за одну единицу молока</p>
<p>Приятной игры :)</p>`

sumDiv.innerText = `Банк - ${sum}$`;

let bg = new Image();
let block = new Image();

bg.src = "img/BG.jpg"
block.src = "img/block.jpg"

function sellAllMilk() {
    sum+= milk*3;
    milk = 0;
    let newId = document.getElementById("sum")
    newId.innerText = `Банк - ${sum}$`
    newId = document.getElementById("222");
    newId.innerText = 0;
}

function sellAllEgg() {
    sum+= egg;
    egg = 0;
    let newId = document.getElementById("sum");
    newId.innerText = `Банк - ${sum}$`;
    newId = document.getElementById("333");
    newId.innerText = 0;
}

function readyProdMillet(id, index) {
    millet++;
    let newId = document.getElementById("111")
    newId.innerText = millet;
    thisOptions(id, index)
}

function readyProdMilk(id, index) {
    milk++;
    let newId = document.getElementById("222")
    newId.innerText = milk;
    thisOptions(id, index)
}

function readyProdEgg(id, index) {
    egg++;
    let newId = document.getElementById("333")
    newId.innerText = egg;
    thisOptions(id, index)
}

function wannaEatCow(id, index) {
    if (millet > 0) {
        millet--;
        let newId = document.getElementById("111")
        newId.innerText = millet;
        let thisId = document.getElementById(id)
        thisId.parentElement.innerHTML = `<div><img src="img/choose/${index}.jpg"/><div class="Thistime" id="${id}${id}" /></div>`;
        thisId = document.getElementById(`${id}${id}`)
        for (let i = 0; i <= 20; i++) {
            setTimeout(() => thisId.innerText = 20 - i, i * 1000);
        }
        setTimeout(() => thisId.parentElement.parentElement.innerHTML = `<button id=${id} class=${index} onclick="readyProdMilk(id, className)"><div><img src="img/ready/${index}.jpg"/></div></button>`, 21000);
    }
}

function wannaEatChick1(id, index) {
    if (millet > 0) {
        millet--;
        let newId = document.getElementById("111")
        newId.innerText = millet;
        let thisId = document.getElementById(id)
        thisId.parentElement.innerHTML = `<div><img src="img/choose/${index}.jpg"/><div class="Thistime" id="${id}${id}" /></div>`;
        thisId = document.getElementById(`${id}${id}`)
        for (let i = 0; i <= 10; i++) {
            setTimeout(() => thisId.innerText = 10 - i, i * 1000);
        }
        setTimeout(() => thisId.parentElement.parentElement.innerHTML = `<button id=${id} class=${index} onclick="wannaEatChick2(id, className)"><div><img src="img/ready/${index}.jpg"/></div></button>`, 11000);
    }
}

function wannaEatChick2(id, index) {
    egg++;
    let newId = document.getElementById("333")
    newId.innerText = egg;
    let thisId = document.getElementById(id)
    thisId.parentElement.innerHTML = `<div><img src="img/choose/${index}.jpg"/><div class="Thistime" id="${id}${id}" /></div>`;
    thisId = document.getElementById(`${id}${id}`)
    for (let i = 0; i <= 10; i++) {
        setTimeout(() => thisId.innerText = 10 - i, i * 1000);
    }
    setTimeout(() => thisId.parentElement.parentElement.innerHTML = `<button id=${id} class=${index} onclick="wannaEatChick3(id, className)"><div><img src="img/ready/${index}.jpg"/></div></button>`, 11000);
}

function wannaEatChick3(id, index) {
    egg++;
    let newId = document.getElementById("333")
    newId.innerText = egg;
    let thisId = document.getElementById(id)
    thisId.parentElement.innerHTML = `<div><img src="img/choose/${index}.jpg"/><div class="Thistime" id="${id}${id}" /></div>`;
    thisId = document.getElementById(`${id}${id}`)
    for (let i = 0; i <= 10; i++) {
        setTimeout(() => thisId.innerText = 10 - i, i * 1000);
    }
    setTimeout(() => thisId.parentElement.parentElement.innerHTML = `<button id=${id} class=${index} onclick="readyProdEgg(id, className)"><div><img src="img/ready/${index}.jpg"/></div></button>`, 11000);
}

function thisOptions(id, index) {
    let thisId = document.getElementById(id)
    if (index == 1) {
        thisId.parentElement.innerHTML = `<div><img src="img/choose/${index}.jpg"/><div class="Thistime" id=${id} /></div>`
        thisId = document.getElementById(id)
        for (let i = 0; i <= 10; i++) {
            setTimeout(() => thisId.innerText = 10 - i, i * 1000);
        }
        setTimeout(() => thisId.parentElement.parentElement.innerHTML = `<button id=${id} class=${index} onclick="readyProdMillet(id, className)"><div><img src="img/ready/${index}.jpg"/></div></button>`, 11000);
    }
    if (index == 2) {
        thisId.parentElement.innerHTML = `<button id=${id} class=${index} onclick="wannaEatCow(id, className)"><div><img src="img/choose/${index}.jpg"/><div class="Thistime" id="${id}${id}" /></div></button>`;
    }
    if (index == 3) {
        thisId.parentElement.innerHTML = `<button id=${id} class=${index} onclick="wannaEatChick1(id, className)"><div><img src="img/choose/${index}.jpg"/><div class="Thistime" id="${id}${id}" /></div></button>`;
    }
}

function changeChoose(i) {
    ind = i;
}

document.body.append(table)
document.body.append(tableForB)
document.body.append(tableForReady)
sellDiv.append(sellMilk)
sellDiv.append(sellEgg)
document.body.append(sellDiv)
document.body.append(sumDiv)
document.body.append(RuleDiv)

function draw() {
    ctx.drawImage(bg, 0, 0)

    for (let i = 1; i <= 3; i++) {
        let trB = document.createElement("tr")
        trB.innerHTML = `<button onclick="changeChoose(${i})"><div><img src="img/choose/${i}.jpg"/></div></button>`
        tableForB.append(trB);
    }

    for (let i = 1; i <= 3; i++) {
        let trR = document.createElement("tr")
        if (i == 1) trR.innerHTML = `<div><img src="img/ready/${i}.jpg"/><div id="${i}${i}${i}" class="Score">${millet}</div></div>`
        if (i == 2) trR.innerHTML = `<div><img src="img/ready/${i}.jpg"/><div id="${i}${i}${i}" class="Score">${milk}</div></div>`
        if (i == 3) trR.innerHTML = `<div><img src="img/ready/${i}.jpg"/><div id="${i}${i}${i}" class="Score">${egg}</div></div>`
        tableForReady.append(trR);
    }

    for (let i = 1; i <= 8; i++) {
        let tr = document.createElement("tr")
        table.append(tr);
        for (let j = 1; j <= 8; j++) {
            let td = document.createElement("td")
            td.innerHTML = `<button id="${i}:${j}" onclick="thisOptions(id, ind)"></button>`
            tr.append(td);
            ctx.drawImage(block, 400 + i * 100, j * 100 - 50)
        }
    }

}

block.onload = draw;