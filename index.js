document.addEventListener('DOMContentLoaded', () => {

    const link = document.getElementById('link');
    const qr = document.getElementById('qr');

    link.addEventListener('click', () => {
        if (navigator.userAgent.includes("iPhone")) {
            window.location.href = "sbolonline://payments/p2p-by-phone-number?phoneNumber=+79889368516";
            setTimeout(() => window.location.href = "sberbankonline://payments/p2p-by-phone-number?phoneNumber=+79889368516", 100);
        } else {
            window.location.href = "intent://ru.sberbankmobile/payments/p2p?type=phone_number&phoneNumber=+79889368516"
        }
    });
    const isMobile = navigator.userAgentData.mobile;

    alert(isMobile);

    if(!!isMobile) {
        qr.remove();
    } else {
        link.remove();
    }
});