Package.describe({
    name: 'frenchbread:swagger',
    version: '0.0.11',
    // Brief, one-line summary of the package.
    summary: 'Javascript library to connect to swagger-enabled APIs via browser.',
    // URL to the Git repository containing the source code for this package.
    git: 'https://github.com/frenchbread/meteor-swagger.git',
    // By default, Meteor will default to using README.md for documentation.
    // To avoid submitting documentation, set this field to null.
    documentation: 'README.md'
});

Package.onUse(function(api) {
    api.versionsFrom('1.2.1');
    api.addFiles('client/lib/swagger/swagger-ui.js', 'client');
});