// מאזין זה מוודא שברגע שילחצו על submit הפונקציה OnSubmitClick תתבצע 
document.getElementById("contactForm").addEventListener("submit", onSubmitClick); //  כאשר משתמש לוחץ על כפתור השליחה של הטופס הזה (שיש לו מזהה 'contactForm'), תפעיל את הפונקציה onSubmitClick
//כל הפעולות האלו קורות בטווח של המזהה  contactForm

// משתנים לטיפול בשדות הקלט של המשתמש
var firstNameInput = document.getElementById('firstName'); // שדה קלט עבור שם פרטי
var phoneInput = document.getElementById('phone'); // שדה קלט עבור מספר טלפון
var emailInput = document.getElementById('email'); // שדה קלט עבור כתובת אימייל
var birthdateInput = document.getElementById('birthdate'); // שדה קלט עבור תאריך לידה

// משתנים עבור כפתורי רדיו של מגדר
var maleRadio = document.getElementById('male'); // כפתור רדיו עבור מגדר זכר 
var femaleRadio = document.getElementById('female'); // כפתור רדיו עבור מגדר נקבה 
var submitButton = document.getElementById('submit'); // כפתור אישור הטופס

// משתנים עבור התמונות המוצגות בהתאם לבחירה מגדרית
var maleImage = document.getElementById('maleImage'); // תמונה עבור מגדר זכר
var femaleImage = document.getElementById('femaleImage'); // תמונה עבור מגדל נקבה

// משתנים עבור הצ'קבוקסים והאייקונים הנלווים
var serviceCheckbox = document.getElementById('service'); // צ'קבוקס לעדכונים שוטפים
var service2Checkbox = document.getElementById('service2'); //צ'קבוקס להצעות מכירה 
var updateImage = document.getElementById('updateImage'); // אייקון עבור צ'קבוקס של עדכונים
var offerImage = document.getElementById('offerImage'); // אייקון עבור צ'קבוקס של הצעות מכירה

// פונקציה לבדיקת מילוי הטופס
function checkFromValidity() {
    // בדיקה אם כל השדות הנדרשים מלאים
    var isNameFilled = firstNameInput.value.trim() !== ''; //שמסירה רווחים מיותרים מההתחלה והסוף של המחרוזת, כך שאם המשתמש הזין רווחים בלבד, השדה ייחשב כריק trim()  בודק אם שם פרטי מלא, מסיר רווחים מיותרים על ידי הפונקציה
    var isPhoneFilled = phoneInput.value.trim() !== ''; // בודק אם טלפון מלא
    var isEmailFilled = emailInput.value.trim() !== ''; // בודק אם אימייל מלא
    var isBirthdateFilled = birthdateInput.value !== ''; // בודק אם תאריך לידה מלא
    var isGenderSelected = maleRadio.checked || femaleRadio.checked; // בודק אם מגדר נבחר

    // אם כל השדות מלאים, כפתור האישור יהפוך לפעיל, אחרת יישאר כבוי
    if (isNameFilled && isPhoneFilled && isEmailFilled && isBirthdateFilled && isGenderSelected) {
        submitButton.removeAttribute('disabled'); // מסיר את ההגבלה מהכפתור, כך שהוא יהיה פעיל 
    } else {
        submitButton.setAttribute('disabled', 'disabled'); // מגדיר את הכפתור כלא פעיל
    }
}

// פונקציה לטיפול בכפתורי הרדיו של מגדר
function onMaleRadioChangeAndFemale() {
    checkFromValidity(); // בדיקה אם כל השדות מלאים
    if (maleRadio.checked) { // אם נבחרה האופציה "זכר"
        maleImage.style.display = 'block'; // מציג את תמונת הזכר
        femaleImage.style.display = 'none'; // מסתיר את תמונת הנקבה
    } else if (femaleRadio.checked) { //  אחרת אם נבחרה האופציה "נקבה"
        femaleImage.style.display = 'block'; // מציג את תמונת הנקבה
        maleImage.style.display = 'none'; // מסתיר את תמונת הזכר
    }
}

// פונקציה לטיפול בשינויים בצ'קבוקס של עדכונים שוטפים
function onServiceCheckboxChange() {
    // משנה את השקיפות של האייקון בהתאם למצב הצ'קבוקס
    updateImage.style.opacity = serviceCheckbox.checked ? '1' : '0.5'; // אם הצ'קבוקס מסומן, שקיפות 1; אחרת 0.5
}

// פונקציה לטיפול בשינויים בצ'קבוקס של הצעות פרומוציה
function onService2CheckboxChange() {
    // משנה את השקיפות של האייקון בהתאם למצב הצ'קבוקס
    offerImage.style.opacity = service2Checkbox.checked ? '1' : '0.5'; // אם הצ'קבוקס מסומן אז השקיפות היא 1; אחרת 0.5 
}
// פונקציה לטיפול בלחיצה על כפתור האישור של הטופס
function onSubmitClick(event) {
    event.preventDefault(); //מונע מהטופס להישלח בפועל, כך שהמשתמש לא יועבר לדף חדש
// event הוא אובייקט שמכיל פרטים על האירוע שמופעל הוא לחיצה על הכפתור
// preventDefault() -  מבטלת את הפעולה המובנית של האירוע ומאפשרת שליטה בהתנהגות הטופס אחרי הלחיצה

    // הגדרת הודעת תודה עם המידע שהוזן
    var message = "Thank you " + firstNameInput.value + " !\n"; // יוצרת הודעת תודה עם שם המשתמש ,"!\n" =התו הזה מפצל את ההודעה לשורות נפרדות כדי להציג טקסט רב שורות בצורה מסודרת ונוחה לקריאה

    // הוספת פרטי המשתמש להודעה
    message += "Phone Number: " + phoneInput.value + "\n"; // מוסיפה את מספר הטלפון
    message += "Email: " + emailInput.value + "\n"; // מוסיפה את האימייל
    message += "Birth Date: " + birthdateInput.value + "\n"; // מוסיפה את תאריך הלידה

    // הוספת מגדר להודעה לפי הבחירה
    var gender = maleRadio.checked ? 'Male' : 'Female'; // קובעת את המגדר בהתאם לבחירה
    message += "Gender: " + gender + "\n"; // מוסיפה את המגדר להודעה

    // בדיקת אפשרויות שנבחרו בצ'קבוקסים והוספתם להודעה
    var selectedOptions = ""; // משתנה לאחסון אפשרויות נבחרות
    if (serviceCheckbox.checked) {
        selectedOptions += "Receive updates"; // הוספת עדכונים
    }
    if (service2Checkbox.checked) {
        if (selectedOptions !== "") {
            selectedOptions += ", "; // מוסיפה פסיק אם יש כבר אפשרויות נבחרות
        }
        selectedOptions += "Receive promotional offers"; // הוספת הצעות פרומוציה
    }
    if (selectedOptions !== "") {
        message += "You checked: " + selectedOptions; // הצגת אפשרויות נבחרות
    }

    alert(message); // הצגת ההודעה
}
