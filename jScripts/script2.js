//  מגדירים משתנים למטבעות הקריפטו לדוגמא bitcoin  = btc
var btc = document.getElementById("bitcoin");
var eth = document.getElementById("ethereum");
var doge = document.getElementById("dogecoin");
// fetch =  פונקציה שמשמשת כדי לשלוח בקשות רשת לשרתים ולהביא נתונים 
fetch("https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,dogecoin&vs_currencies=usd")  //כדי לקבל מחירים של המטבעות  fetch שולחים בקשות בעזרת 
    .then(response => response.json())     //   שהוא בעצם פורמט טקסט פשוט להעברת נתונים מובניםJSON המרת התגובה לפורמט 
    .then(data => { //   עדכון תוכן האלמנט למחיר הנוכחי והעדכני לכל שלושת המטבעות  , .then = כשהפעולה תסתיים ותהיה תוצאה הTHEN מבצע את הקוד הבא 
        btc.innerHTML = data.bitcoin.usd; 
        eth.innerHTML = data.ethereum.usd;
        doge.innerHTML = data.dogecoin.usd;
    })
    .catch(error => console.error('Error:', error)); // מטפל בשגיאות ומציג את השגיאות בקונסול
