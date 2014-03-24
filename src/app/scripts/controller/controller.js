/*global define*/

define([
    'underscore',
    'backbone',
    '../views/gitRepositories',
    '../collections/gitRepositories'
], function (_, Backbone, RepoView, RepoCollection) {
    'use strict';

    var Controller = Backbone.View.extend({
        initialize: function(options) {
            console.log(options.mainElement);
            var repoCollection = new RepoCollection();
            var repoView = new RepoView({
                collection: repoCollection
            });

            options.mainElement.html(repoView.el);

            repoCollection.fetch();
        },
    });

    return Controller;
});
