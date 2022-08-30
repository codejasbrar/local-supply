const ls_search_input = document.querySelector('input.tt-search-input');
ls_search_input.addEventListener('focusin', (e) => {
    console.log('focus');
    let element = document.querySelector('#manual-predictive-search');
    if(document.querySelectorAll('.predictive-search_item-suggestion').length == 0){
        element.innerHTML += onSuggestWord();
    }
    
});
// ls_search_input.addEventListener('blur', (e) => {
//     console.log('blur');
//     document.querySelector('.predictive-search_item-suggestion').remove();
// });
function onSuggestWord() {
    if (!window.searchSuggestion) return;
    let svg =
        '<svg width="22" height="23" viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.32544 18.3288H9.32558C11.4477 18.3272 13.4911 17.5616 15.0961 16.1834L20.5641 21.7103L20.6992 21.8469L20.8344 21.7103L21.59 20.9465L21.7223 20.8128L21.59 20.6791L16.1192 15.1493C17.4825 13.5273 18.2393 11.4628 18.2409 9.31948V9.31933C18.2409 7.53789 17.7183 5.79628 16.7389 4.31475C15.7595 2.83319 14.3672 1.67814 12.7379 0.995986C11.1086 0.313824 9.31557 0.135306 7.58574 0.483097C5.85592 0.830885 4.26727 1.68929 3.02056 2.94943C1.77387 4.20955 0.925086 5.81479 0.581236 7.56206C0.237389 9.30932 0.413846 11.1204 1.08838 12.7664C1.76292 14.4125 2.90535 15.8197 4.37151 16.8099C5.83769 17.8001 7.56168 18.3288 9.32544 18.3288ZM5.17802 3.04201C6.40584 2.21277 7.84915 1.77029 9.32544 1.77029C11.3045 1.77203 13.2024 2.56744 14.6025 3.98256C16.0026 5.39779 16.7903 7.31719 16.792 9.31949C16.792 10.8129 16.3538 12.2727 15.5331 13.5141C14.7125 14.7556 13.5462 15.7229 12.1821 16.294C10.818 16.8651 9.31714 17.0145 7.86917 16.7234C6.42119 16.4323 5.09085 15.7136 4.0465 14.658C3.00213 13.6024 2.29067 12.2572 2.00242 10.7925C1.71416 9.32769 1.86212 7.80944 2.42751 6.42978C2.99288 5.05014 3.95018 3.87126 5.17802 3.04201Z" fill="#191919" stroke="#191919" stroke-width="0.380195"></path></svg>';
    let html = "";
    html += '<div class="predictive-search_item-suggestion"><ul>';
    window.searchSuggestion.forEach((text) => {
        text = JSON.parse(text);
        html += `<li><a href="${text.url}">${svg}<span>${text.text}</span></a></li>`;
    });
    html += "</ul></div>";
    return html;
}