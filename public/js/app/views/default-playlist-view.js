define([
  'jquery',
  'underscore',
  'backbone'
], function($, _, Backbone) {
  'use strict';

  var DefaultPlaylistView = Backbone.View.extend({
		initialize: function(){
			this.hide();
			this.$el.tooltip();	
		},
		render: function(){
			this.$el.html(this.el);
			return this;
		},
		hide: function(){
			this.$el.hide();
		},
		show: function(){
			this.$el.show();
		}
	});

  return DefaultPlaylistView;
});



