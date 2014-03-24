/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'templates'
], function ($, _, Backbone, JST) {
    'use strict';

    var GitRepositoriesView = Backbone.View.extend({
        template: JST['app/scripts/templates/gitRepositories.ejs'],

        tagName: 'div',

        id: '',

        className: '',

        events: {},

        initialize: function () {
            this.listenTo(this.collection, 'sync', this.render);
            // this.listenTo(this.collection, 'all', function() {
            //     console.log(arguments);
            // });
        },

        render: function () {
            console.log('view.render ->', this.collection.toJSON())
            this.$el.html(this.template(this.collection.toJSON()));
        }
    });

    return GitRepositoriesView;
});
