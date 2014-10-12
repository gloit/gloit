define(
  ["exports"],
  function(__exports__) {
    "use strict";
    var LoginForm;

    LoginForm = Ember.Component.extend({
      classNames: ['gc-login-form'],
      title: '用户登录',
      copyright: '&copy; 2011-2014',
      version: 'v1.0.0',
      registerable: false,
      action: 'authenticate',
      titleHtmlSafe: (function() {
        return this.get('title').htmlSafe();
      }).property('title'),
      copyrightHtmlSafe: (function() {
        return this.get('copyright').htmlSafe();
      }).property('copyright'),
      didInsertElement: function() {
        return Ember.$('input#identification').focus();
      },
      actions: {
        login: function() {
          return this.sendAction('action');
        }
      }
    });

    __exports__["default"] = LoginForm;
  });