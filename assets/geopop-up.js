var url_string = location.href;
var url = new URL(url_string);
var fdr_au = url.searchParams.get("fdr_au");
var fdr_us = url.searchParams.get("fdr_us");
var georedirected = url.searchParams.get("georedirected");
if(fdr_au == 'true'){
    localStorage.setItem('force_redirect_au', 'true');
}
if(fdr_us == 'true'){
    localStorage.setItem('force_redirect_us', 'true');
}
if(georedirected == 'y'){
    localStorage.setItem('georedirected', 'true');
}
var geopopup_html_au = `<div class="geopopup-wrapper">
    <div class="geo-popup-container">
        <div class="geo-popup-content">
            <img src="//cdn.shopify.com/s/files/1/0264/3073/files/LS_Black_1_170x.png?v=1602574029" srcset="//cdn.shopify.com/s/files/1/0264/3073/files/LS_Black_1_170x.png?v=1602574029 1x, //cdn.shopify.com/s/files/1/0264/3073/files/LS_Black_1_340x.png?v=1602574029 2x" alt="Local Supply">
            <p>Are you in the right place?</p>
            <p>Please confirm your region.</p>
            <a href="https://www.localsupply.com/?georedirected=y&fdr_au=true"><span class="action-btn">Australia / New Zealand</span></a>
            <a href="https://us.localsupply.com/?georedirected=y"><span class="action-btn">USA / International</span></a>
        </div>
    </div>
</div>`;

var welcomepopup_html_au = `<div class="geopopup-wrapper" id="welcomePopup">
    <div class="geo-popup-container">
        <div class="geo-popup-content">
            <img src="//cdn.shopify.com/s/files/1/0264/3073/files/LS_Black_1_170x.png?v=1602574029" srcset="//cdn.shopify.com/s/files/1/0264/3073/files/LS_Black_1_170x.png?v=1602574029 1x, //cdn.shopify.com/s/files/1/0264/3073/files/LS_Black_1_340x.png?v=1602574029 2x" alt="Local Supply">
            <p>Welcome to our <strong>AUSTRALIA/NEW ZEALAND store</strong>,</p>
            <p>Enjoy Free Shipping for all orders over <strong>$75 AUD</strong>.</p>
            <small>In the wrong place? <a href="https://us.localsupply.com/?georedirected=y">click here</a> to be taken to our <a href="https://us.localsupply.com/?georedirected=y">Global</a> store</small>
        </div>
    </div>
</div>`;
var welcomepopup_html_au_kr = `<div class="geopopup-wrapper" id="welcomePopup">
    <div class="geo-popup-container">
        <div class="geo-popup-content">
            <img src="//cdn.shopify.com/s/files/1/0264/3073/files/LS_Black_1_170x.png?v=1602574029" srcset="//cdn.shopify.com/s/files/1/0264/3073/files/LS_Black_1_170x.png?v=1602574029 1x, //cdn.shopify.com/s/files/1/0264/3073/files/LS_Black_1_340x.png?v=1602574029 2x" alt="Local Supply">
            <p>Welcome to our <strong>AUSTRALIA/NEW ZEALAND store</strong>,</p>
            <p>Enjoy Free Shipping for all orders over <strong>$75 AUD</strong>.</p>
            <small>In the wrong place? Click <a href="https://www.localsupply.kr/">Korea</a> or <a href="https://us.localsupply.com/?georedirected=y">Global</a> to be taken to the corresponding store</small>
        </div>
    </div>
</div>`;
var welcomepopup_html_us = `<div class="geopopup-wrapper" id="welcomePopup">
    <div class="geo-popup-container">
        <div class="geo-popup-content">
            <img src="//cdn.shopify.com/s/files/1/0264/3073/files/LS_Black_1_170x.png?v=1602574029" srcset="//cdn.shopify.com/s/files/1/0264/3073/files/LS_Black_1_170x.png?v=1602574029 1x, //cdn.shopify.com/s/files/1/0264/3073/files/LS_Black_1_340x.png?v=1602574029 2x" alt="Local Supply">
            <p>Welcome to our <strong>Global store</strong>,</p>
            <p>Enjoy Free Shipping for all orders over <strong>$75 USD</strong>.</p>
            <small>In the wrong place? <a href="https://www.localsupply.com/?georedirected=y">click here</a> to be taken to our <a href="https://www.localsupply.com/?georedirected=y">Australia / New Zealand</a> store</small>
        </div>
    </div>
</div>`;
var welcomepopup_html_us_kr = `<div class="geopopup-wrapper" id="welcomePopup">
    <div class="geo-popup-container">
        <div class="geo-popup-content">
            <img src="//cdn.shopify.com/s/files/1/0264/3073/files/LS_Black_1_170x.png?v=1602574029" srcset="//cdn.shopify.com/s/files/1/0264/3073/files/LS_Black_1_170x.png?v=1602574029 1x, //cdn.shopify.com/s/files/1/0264/3073/files/LS_Black_1_340x.png?v=1602574029 2x" alt="Local Supply">
            <p>Welcome to our <strong>Global store</strong>,</p>
            <p>Enjoy Free Shipping for all orders over <strong>$75 USD</strong>.</p>
            <small>In the wrong place? Click <a href="https://www.localsupply.kr/">Korea</a> or <a href="https://www.localsupply.com/?georedirected=y">Australia / New Zealand</a> to be taken to the corresponding store</small>
        </div>
    </div>
</div>`;
var geopopup_html_kr = `<div class="geopopup-wrapper">
    <div class="geo-popup-container">
        <div class="geo-popup-content">
            <img src="//cdn.shopify.com/s/files/1/0264/3073/files/LS_Black_1_170x.png?v=1602574029" srcset="//cdn.shopify.com/s/files/1/0264/3073/files/LS_Black_1_170x.png?v=1602574029 1x, //cdn.shopify.com/s/files/1/0264/3073/files/LS_Black_1_340x.png?v=1602574029 2x" alt="Local Supply">
            <p>Are you in the right place?</p>
            <p>Please confirm your region.</p>
            <a href="https://www.localsupply.kr/"><span class="action-btn">South Korea</span></a>
            <a href="https://www.localsupply.com/?georedirected=y&fdr_au=true"><span class="action-btn">Australia / New Zealand</span></a>
            <a href="https://us.localsupply.com/?georedirected=y"><span class="action-btn">USA / International</span></a>
        </div>
    </div>
</div>`;

fetch("https://ipwhois.app/json/?lang=en").then((response) => response.text()).then((responseText) => {
    let ip_object = JSON.parse(responseText);
    let country_code = ip_object.country_code;
    console.log(country_code);
    if(country_code){
        geopopup(country_code)
    }else{
        $.get("https://ipinfo.io", function(response) {
            geopopup(response.country);
        }, "jsonp");
    }
});


function geopopup(country_code){
    if(country_code == 'KR'){
        window.location.href = 'https://www.localsupply.kr/';
    }
    if(localStorage.force_redirect_au != 'true' && localStorage.georedirected != 'true'){
        if(location.hostname == 'www.localsupply.com'){
            if(country_code != 'AU' && country_code != 'NZ'){
                $("body").append(geopopup_html_au);
            }
        }
        if(location.hostname == 'us.localsupply.com' ){
            if(country_code == 'AU' || country_code == 'NZ'){
                console.log('treupa')
                $("body").append(geopopup_html_au);
            }
        }
    }
    var checkout_links = document.querySelectorAll('.checkout-link');
    var checkout_forms = document.querySelectorAll('[action="/cart"]');
    if(checkout_links.length > 0 || checkout_forms.length > 0){
        var items_json = "https://"+location.hostname+"/cart?view=item-json";
        fetch(items_json, {
            credentials: 'same-origin',
            method: 'GET'
            }).then(function (content) {
                content.text().then(function (html) {
                    if(country_code == 'AU' || country_code == 'NZ'){
                        if(location.hostname == 'us.localsupply.com'){
                            console.log('hostname us.localsupply.com');
                            for(i = 0; i < checkout_links.length; ++i){
                                checkout_links[i].href = 'https://www.localsupply.com/cart/' + html.replace(/\s/g, '');
                            }
                            for(i = 0; i < checkout_forms.length; ++i){
                                checkout_forms[i].action = 'https://www.localsupply.com/cart/' + html.replace(/\s/g, '');
                            }
                        }
                    }else{
                        if(location.hostname == 'www.localsupply.com'){
                            for(i = 0; i < checkout_links.length; ++i){
                                checkout_links[i].href = 'https://us.localsupply.com/cart/' + html.replace(/\s/g, '');
                            }
                            for(i = 0; i < checkout_forms.length; ++i){
                                checkout_forms[i].action = 'https://us.localsupply.com/cart/' + html.replace(/\s/g, '');
                            }
                        }
                    }
                });
        });
    }
    if(location.hostname == 'us.localsupply.com' && localStorage.georedirected == 'true'){
        if(localStorage.welcomepopup_close != 'true'){
            $("body").append(welcomepopup_html_us);
            document.getElementById('welcomePopup').addEventListener("click", function(event){
                if(event.target.tagName != "A"){
                    localStorage.setItem("welcomepopup_close", "true");
                    this.remove();
                }
            });
        }
    }

    if(location.hostname == 'www.localsupply.com' && localStorage.georedirected == 'true'){
        if(localStorage.welcomepopup_close != 'true'){
            $("body").append(welcomepopup_html_au);

            document.getElementById('welcomePopup').addEventListener("click", function(event){
                if(event.target.tagName != "A"){
                    localStorage.setItem("welcomepopup_close", "true");
                    this.remove();
                }
            });
        }
    }
}