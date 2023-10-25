// Bước 2: Tạo phương thức sử dụng mẫu
function isAccountValid(account) {
    const accountPattern = /^[_a-z0-9]{6,}$/;

    return accountPattern.test(account);
}

// Bước 3: Xây dựng mẫu tài khoản hợp lệ và không hợp lệ
const validAccounts = [
    "123abc_",
    "_abc123",
    "______",
    "123456",
    "abcdefg"
];

const invalidAccounts = [
    ".@",
    "12345",
    "1234_",
    "abcde"
];

// Bước 4: Tạo chương trình kiểm thử
console.log("Tài khoản hợp lệ:");
validAccounts.forEach(account => {
    console.log(account, isAccountValid(account) ? "Hợp lệ" : "Không hợp lệ");
});

console.log("\nTài khoản không hợp lệ:");
invalidAccounts.forEach(account => {
    console.log(account, isAccountValid(account) ? "Hợp lệ" : "Không hợp lệ");
});
