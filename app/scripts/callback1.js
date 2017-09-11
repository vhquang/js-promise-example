function getData() {
    var prUrl = 'https://api.github.com/repos/pandas-dev/pandas/pulls?per_page=3';
    $.get(prUrl, function(data) {
        var pullrequest = data[0];
        // outputJson('Pull Request', pullrequest);
        var commitsUrl = pullrequest['commits_url'];
        $.get(commitsUrl, function(data) {
            // outputJson('Commits', data[0]);
            var authorUrl = data[0]['author']['url'];
            $.get(authorUrl, function(data) {
                outputJson('Author', data);
            });
        });
    });
}