function getData() {
    var prUrl = 'https://api.github.com/repos/pandas-dev/pandas/pulls?per_page=3';
    $.get(prUrl)
        .then(function(data) {
            outputJson('Pull Request', data[0]);
            return $.get(data[0]['commits_url']);
        })
        .then(function(data) {
            outputJson('Commits', data[0]);
            return $.get(data[0]['author']['url']);
        })
        .then(function(data) {
            outputJson('Author', data);
        });
}