function getData() {
    var prUrl = 'https://api.github.com/repos/pandas-dev/pandas/pulls?per_page=3';
    $.get(prUrl, function(data) {
        var count = 0;
        var commits = [];
        var authors = [];
        outputJson('Pull Request', { done: '' });

        $.each(data, function(idx, pullrequest) {
            var commitsUrl = pullrequest['commits_url'];
            outputJson('Commits for PR ' + idx, { done: commitsUrl });
            commits.push(commitsUrl);

            count += 1;
            if (count == 3) {
                // alert('done collecting commits');

                $.each(commits, function(idx, commitsUrl) {
                    outputJson('Commits for PR ' + idx, { done: commitsUrl });
                    $.get(commitsUrl, function(data) {
                        $.each(data, function(idx, commit) {
                            var authorUrl = commit['author']['url'];
                            $.get(authorUrl, function(data) {
                                outputJson('Author', data);
                                authors.push(data);
                            });
                        });

                    });
                });
            }
        });

    });
}