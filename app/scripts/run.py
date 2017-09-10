import json
import requests
from pprint import pprint
from pygments import highlight
from pygments.lexers import JsonLexer
from pygments.formatters import TerminalFormatter


def print_json(obj):
    json_str = json.dumps(obj, indent=4)
    print(highlight(json_str, JsonLexer(), TerminalFormatter()))


def main():
    pr_url = 'https://api.github.com/repos/pandas-dev/pandas/pulls?per_page=5'
    pr_list = requests.get(pr_url).json()
    pull_request = pr_list[0]
    print('---PULL_REQUEST---')
    print_json(pull_request)
    
    commits_url = pull_request['commits_url']
    commits = requests.get(commits_url).json()
    commit = commits[0]
    print('---COMMIT---')
    print_json(commit)

    author_url = commit['author']['url']
    author = requests.get(author_url).json()
    print('---AUTHOR---')
    print_json(author)

if __name__ == '__main__':
    main()
