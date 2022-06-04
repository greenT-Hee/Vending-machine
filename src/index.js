
const colaInfo = [
    {
        srcImg: "src/images/Original_Cola.png",
        colaName:  "Original_Cola",
        price: 1000,
        count: 5,
    },
    {
        srcImg: "src/images/Violet_Cola.png",
        colaName:  "Violet_Cola",
        price: 1000,
        count: 5,
    },
    {
        srcImg: "src/images/Yellow_Cola.png",
        colaName:  "Yellow_Cola",
        price: 1000,
        count: 5,
    },
    {
        srcImg: "src/images/Cool_Cola.png",
        colaName:  "Cool_Cola",
        price: 1000,
        count: 5,
    },
    {
        srcImg: "src/images/Green_Cola.png",
        colaName:  "Green_Cola",
        price: 1000,
        count: 5,
    },
    {
        srcImg: "src/images/Orange_Cola.png",
        colaName:  "Orange_Cola",
        price: 1000,
        count: 5,
    },
]

const listCola = document.querySelector(".list-cola");

// debugger;

colaInfo.forEach((item,index) => {
    const li = document.createElement("li");
    const btn = document.createElement("button");
    const img = document.createElement("img")
    const strong = document.createElement("strong");
    const span = document.createElement("span");

    // 요소 붙이기
    li.appendChild(btn);
    btn.append(img,strong, span); 
    
    // 속성 넣기
    img.setAttribute('src', `${item.srcImg}`);
    img.setAttribute('alt', `${item.colaName}`);
    btn.setAttribute('data-index', `${index}`);
    btn.setAttribute('type','button');
    btn.setAttribute('data-count',item.count);
    
    
    // innerText
    strong.innerText = `${item.colaName}`;
    span.innerText = `${item.price}`;

    // class 넣기
    img.classList.add('img-cola');
    btn.classList.add('btn-cola');
    strong.classList.add('tit-cola');
    span.classList.add('txt-price');
    
    listCola.appendChild(li);
    
    // console.log(img)
});
//sold-out 가상요소로 이미지 넣기
listCola.firstElementChild.nextElementSibling.classList.add('sold-out');



// 입금하기
// 잔액 계산하기 
const btnDeposit = document.querySelector('.btn-deposit');
const numMyMoney = document.querySelector('.num-myMoney');
const numBalance = document.querySelector('.num-balance');
numMyMoney.innerText = 50000;

btnDeposit.addEventListener('click',()=>{
const depositMoney = document.querySelector('.deposit-money');

    if(Number(depositMoney.value) > Number(numMyMoney.innerText)){
        alert('소지금이 부족합니다');
        depositMoney.value = '';
    }else if(depositMoney.value < 0){
        alert("양수를 입력하세요");
        depositMoney.value = '';
    }else if(depositMoney.value === ''){
        alert('금액을 입력하세요!')
    }else if(depositMoney.value < 1000){
        alert('1000원 이상 입력해주세요!')
        depositMoney.value = '';
    }else{
        numMyMoney.innerText = Number(numMyMoney.innerText) - Number(depositMoney.value);
        alert(`${Number(depositMoney.value).toLocaleString()}원을 입금하시겠습니까?`);
    
        numBalance.innerText = Number(numBalance.innerText) + Number(depositMoney.value)}; //나중에 총액까지 빼주기
        depositMoney.value = '';
    } 
);

const btnReturn = document.querySelector('.btn-return');
btnReturn.addEventListener('click',()=>{
    numMyMoney.innerText =  Number(numMyMoney.innerText) + Number(numBalance.innerText);  
    numBalance.innerText = '';
});
// 장바구니 담기 
function selectButton(event){
    const shoppingListCola = document.querySelector(".shoppingList-cola");
    if(event.target.nodeName == "BUTTON"){
        const li = document.createElement("li");
        const img = document.createElement("img")
        const strong = document.createElement("strong");
        const p = document.createElement("p");
        li.append(img, strong, p);

        //속성 넣기
        const dataIndex = parseInt(event.target.dataset.index);
        img.setAttribute('src',colaInfo[dataIndex].srcImg)
        strong.innerText = `${colaInfo[dataIndex].colaName}`;
        li.setAttribute('data-name',colaInfo[dataIndex].colaName);
        

        
        //갯수 count
        let count = 5;
        count --;
        p.innerText = parseInt(event.target.dataset.count) - count;

        // class 넣기
        img.classList.add('img-shoppingList');
        strong.classList.add('tit-shoppingList');
        p.classList.add('shoppingList-count');
        
        shoppingListCola.appendChild(li);
    }
    }

listCola.addEventListener('click',selectButton);

