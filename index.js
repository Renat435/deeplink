document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('.link').addEventListener('click', () => {
        if (navigator.userAgent.includes("iPhone")) {
            window.location.href = "sbolonline://payments/p2p-by-phone-number?phoneNumber=+79652259554";
            setTimeout(() => window.location.href = "sberbankonline://payments/p2p-by-phone-number?phoneNumber=+79652259554", 100);
            setTimeout(() => window.location.href = "intent://ru.sberbankmobile/payments/p2p?type=phone_number&phoneNumber=+79652259554", 200);
        } else {
            window.location.href = "intent://ru.sberbankmobile/payments/p2p?type=phone_number&phoneNumber=+79652259554"
        }
    });
});