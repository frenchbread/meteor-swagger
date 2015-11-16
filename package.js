Package.describe({
    name: 'frenchbread:swagger',
    version: '0.0.17',
    // Brief, one-line summary of the package.
    summary: 'Javascript library to connect to swagger-enabled APIs via browser.',
    // URL to the Git repository containing the source code for this package.
    git: 'https://github.com/frenchbread/meteor-swagger.git',
    // By default, Meteor will default to using README.md for documentation.
    // To avoid submitting documentation, set this field to null.
    documentation: 'README.md'
});

Package.onUse(function(api) {
    api.versionsFrom('1.1.0.2');
    api.addFiles([
        'client/lib/swagger/lib/jquery-1.8.0.min.js',
        'client/lib/swagger/lib/jquery.wiggle.min.js',
        'client/lib/swagger/lib/jquery.slideto.min.js',
        'client/lib/swagger/lib/jquery.ba-bbq.min.js',
        'client/lib/swagger/lib/underscore-min.js',
        'client/lib/swagger/lib/marked.js',
        'client/lib/swagger/lib/backbone-min.js',
        'client/lib/swagger/lib/handlebars-2.0.0.js',
        'client/lib/swagger/lib/highlight.7.3.pack.js',
        'client/lib/swagger/swagger-ui.js',
        'client/lib/swagger/lib/swagger-oauth.js'
    ], 'client');
});