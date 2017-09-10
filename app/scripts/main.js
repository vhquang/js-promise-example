function outputJson(title, data) {
    var h4 = '<h4>' + title + '</h4>';
    var code = '<code>' + JSON.stringify(data, null, '  ') + '</code>';
    var pre = '<pre>' + h4 + code + '</pre>';
    $('#output').append(pre);
}