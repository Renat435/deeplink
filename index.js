document.addEventListener('DOMContentLoaded', () => {

    const link = document.getElementById('link');
    const qr = document.getElementById('qr');

    if (/Android|iPhone/i.test(navigator.userAgent)) {
        qr.remove();
    } else {
        link.remove();
    }

    link.addEventListener('click', () => {
        if (navigator.userAgent.includes("iPhone")) {
            window.location.href = "sbolonline://messenger/dialog-for-phone?phone=+79889368516&tab=payments";
            setTimeout(() => window.location.href = "sberbankonline://messenger/dialog-for-phone?phone=+79889368516&tab=payments", 100);
        } else {
            window.location.href = "sberbankonline://messenger/dialog-for-phone?phone=+79889368516&tab=payments";
            setTimeout(() => window.location.href = "intent://ru.sberbankmobile/messenger/dialog-for-phone?phone=+79889368516&tab=payments", 100);
        }
    });
});