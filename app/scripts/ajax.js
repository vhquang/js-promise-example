/**
 * A bare XMLHttpRequest AJAX, for more info:
 * https://developer.mozilla.org/en-US/docs/AJAX/Getting_Started
 */
function ajax(url, success) {
    var httpRequest = new XMLHttpRequest();
    httpRequest.onreadystatechange = function() {
        if (httpRequest.readyState === XMLHttpRequest.DONE) {
            if (httpRequest.status === 200) {
                var json = JSON.parse(httpRequest.responseText);
                success(json);
            }
        }
    };
    httpRequest.open('GET', url, true);
    httpRequest.send();
}