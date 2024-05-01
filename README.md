# GitHub Emoji

[![Deploy to Pages](https://img.shields.io/github/actions/workflow/status/marcomontalbano/github-emoji/gh-pages.yaml?style=for-the-badge&logo=github&label=deploy%20to%20pages)](https://github.com/marcomontalbano/github-emoji/actions/workflows/gh-pages.yaml)

This is a complete list of all GitHub Markdown emojis.

As detailed in the [official documentation](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax#using-emojis), incorporating emojis into your Markdown is straightforward. Simply type `:EMOJICODE:`—a colon followed by the emoji name. Typing `:` will prompt a list of suggested emojis and this **list is dynamically filtered as you type**.

Finding the ideal emoji can be challenging as it requires precise name input.

For instance, if you're feeling hungry but can't decide what to eat, locating a suitable dish becomes hard due to the need for specific keyword matching.

With _GitHub Emoji_, you can simply search for _"**food**"_ …

![Searching for "food"](https://github.com/marcomontalbano/github-emoji/assets/1681269/786ad9d2-877b-4bdf-b5df-1551ae02fc8c)

## How it works

The emoji compilation is automatically generated from the [GitHub Emoji API](https://api.github.com/emojis) and integrated with keywords from the [Unicode Emoji List](https://www.unicode.org/emoji/charts/emoji-list.html).

This approach enables you to find emojis effortlessly. If you want to write the emojicode for a cute :parrot:, instead of typing `:parrot:`, you can search for `bird`, `pirate`, or `talk`.

After building the dictionary, I leverage [GitHub Actions](https://github.com/marcomontalbano/github-emoji/actions) to build the website and deploy it on GitHub Pages.