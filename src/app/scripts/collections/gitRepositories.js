/*global define*/

define([
    'underscore',
    'backbone',
    'models/gitRepository'
], function (_, Backbone, GitRepositoryModel) {
    'use strict';

    var GitRepositoriesCollection = Backbone.Collection.extend({
        model: GitRepositoryModel,
        url: 'https://api.github.com/users/bossa-nova/repos?page=1&per_page=100'
    });

    return GitRepositoriesCollection;
});
