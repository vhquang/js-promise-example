function getData() {
    var prUrl = 'https://api.github.com/repos/pandas-dev/pandas/pulls?per_page=3';
    // var prUrl = 'https://api.github.com/repos/pandas-dev/pandas/';
    $.get(prUrl)
        .then(function(data) {
            outputJson('Pull Request', { done: '' });
            return $.get(data[0]['commits_url']);
        })
        .then(function(data) {
            outputJson('Commits', { done: '' });
            return $.get(data[0]['author']['url']);
        })
        .then(function(data) {
            outputJson('Author', { done: '' });
        })
        .catch(function errorHandler(err) {
            alert('error happen');
        });
}