if(document.head){
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://www.googletagmanager.com/gtag/js?id=G-2M5YR0EYPS';
    script.async = true;
    document.head.appendChild(script);
    script = document.createElement('script');
    script.type = 'text/javascript';
    script.innerHTML = `
    window.dataLayer = window.dataLayer || [];
            function gtag() {
                dataLayer.push(arguments);
            }
            gtag("js", new Date());

            gtag("config", "G-2M5YR0EYPS");
    `
        document.head.appendChild(script);
}