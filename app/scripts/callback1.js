function getData() {
    var prUrl = 'https://api.github.com/repos/pandas-dev/pandas/pulls?per_page=3';
    ajax(prUrl, function success(data) {
        outputJson('Pull Request', data[0]);

        ajax(data[0]['commits_url'], function success(data) {
            outputJson('Commit', data[0]);

            ajax(data[0]['author']['url'], function success(data) {
                outputJson('Author', data);
            });

        });

    });
}