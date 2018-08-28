const ghpages = require('gh-pages');
const config = require('../package.json');
const domain = process.env.GH_TOKEN ? `${process.env.GH_TOKEN}@github.com` : 'github.com';

const branch = process.argv[2] || 'gh-pages';

ghpages.publish('build', {
    dotfiles: true,
    branch: branch,
    repo: config.repository.url.replace('github.com', domain),
    message: 'Publish website',
}, function (err) {
    if (err) {
        console.error(err.message);
        throw new Error(err.message);
    } else {
        console.log('Published');
    }
});

