// Bước 2: Tạo phương thức sử dụng mẫu
function isEmailValid(email) {
    const emailPattern = /^[A-Za-z0-9]+[A-Za-z0-9]*@[A-Za-z0-9]+(\.[A-Za-z0-9]+)$/;

    return emailPattern.test(email);
}

// Bước 3: Xây dựng mẫu email hợp lệ và không hợp lệ
const validEmails = [
    "a@gmail.com",
    "ab@yahoo.com",
    "abc@hotmail.com"
];

const invalidEmails = [
    "@gmail.com",
    "ab@gmail.",
    "@#abc@gmail.com"
];

// Bước 4: Tạo chương trình kiểm thử
console.log("Emails hợp lệ:");
validEmails.forEach(email => {
    console.log(email, isEmailValid(email) ? "Hợp lệ" : "Không hợp lệ");
});

console.log("\nEmails không hợp lệ:");
invalidEmails.forEach(email => {
    console.log(email, isEmailValid(email) ? "Hợp lệ" : "Không hợp lệ");
});
