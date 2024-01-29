
//1) დაწერეთ ფუნქცია processNumbers, რომელიც პარამეტრად იღებს ორ რიცხვს და callBack ფუნქციას.
// და ამ ფუნქციის გამოძახებით უნდა შესრულდეს არითმეტიკული
//ოპერაციები ციფრებზეც მაგალითად მიმატება ან გამოკლება რომელიც უნდა გვეწეროს callBack ფუნქციაში.


function processNumbers(num1, num2, callBack) {
    const result = callBack(num1, num2);
    return result;
}

function addition(a, b) {
    return a + b;
}

function subtraction(a, b) {
    return a - b;
}

console.log(processNumbers(5, 3, addition)); 
console.log(processNumbers(5, 3, subtraction)); 


//2)შექმენით ფუნქცია isValidUser, რომელიც იღებს მომხმარებლის სახელს და პაროლს პარამეტრად
//და აბრუნებს true, თუ ორივე ცარიელი სტრიქონებია; წინააღმდეგ შემთხვევაში,
//დააბრუნეთ ყალბი. გამოიყენეთ ლოგიკური ოპერატორები.დაგჭირდებათ გაიგოთ მონაცემთა ტიპი
//და ისე შეამოწმოთ თუ სტრინგი აქვს ტიპად!!

function isValidUser(username, password) {
    if (!username || !password) {
        return false;
    } else {
        return true;
    }
}

console.log(isValidUser("user123", "password123")); // true
console.log(isValidUser("", "password123")); // false
console.log(isValidUser("user123", "")); // false
console.log(isValidUser("", "")); // false


//3)შექმენით რეკურსიული ფუნქცია, რომელიც დააბრუნებს n რიცხვს ფიბონაჩის მიმდევრობაში.


function recurse(n) {
    if (n <= 1) {
        return n;
    } else {
        return recurse(n - 1) + recurse(n - 2);
    }
}

console.log(recurse(10)); // 55

//4)შექმენით უკუმთვლელი ტაიმერი, რომელიც ითვლის 10-დან 0 წამამდე, შემდეგ დაბეჭდავს "დრო ამოიწურა!".
//გამოიყენეთ setInterval მეთოდი და დროის დასრულების შემდეგ უნდა დავამთავროთ ტაიმერი!!

//??

//5)შექმენით ფუნქცია, რომელიც ითვლის და აბრუნებს ასაკს მოცემული დაბადების თარიღის მიხედვით თარიღის ობიექტების გამოყენებით.


function calculateAge(birthDate) {
    const currentDate = new Date();
    const dob = new Date(birthDate);

    let age = currentDate.getFullYear() - dob.getFullYear();

    if (currentDate.getMonth() < dob.getMonth() || (currentDate.getMonth() === dob.getMonth() && currentDate.getDate() < dob.getDate())) {
        age--;
    }

    return age;
}

const age = calculateAge("1990-05-15"); 
console.log(age); 



//6) დაწერეთ ფუნქცია, რომელიც ბეჭდავს კვირის მიმდინარე დღის
// სახელს თარიღის გამოყენებით.დაგჭირდებათ array-ში შეინახოთ
//კვირის დღეები და ისე შეამოწმოთ new Date() დახმარებით!!

function printCurrentDay() {
    const daysOfWeek = ["კვირა", "ორშაბათი", "სამშაბათი", "ოთხშაბათი", "ხუთშაბათი", "პარასკევი", "შაბათი"];
    
    const currentDate = new Date();
    
    const dayOfWeek = daysOfWeek[currentDate.getDay()];
    
    console.log("მიმდინარე კვირის დღე: " + dayOfWeek);
}

printCurrentDay();

