/**
 * Demo of XMLHttpRequest AJAX, for more info:
 * https://developer.mozilla.org/en-US/docs/AJAX/Getting_Started
 */
function ajaxDemo() {
    var url = 'https://api.github.com/repos/pandas-dev/pandas/pulls?per_page=1';
    var httpRequest = new XMLHttpRequest();
    httpRequest.onreadystatechange = function() {
        if (httpRequest.readyState === XMLHttpRequest.DONE) {
            var json = JSON.parse(httpRequest.responseText);
            outputJson('Ajax output', json);
        }
    };
    httpRequest.open('GET', url, true);
    httpRequest.send();
    return httpRequest;
}