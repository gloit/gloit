define(
  ["./components/gc-datetime-picker","./components/gc-login-form","./templates/gc-login-form","./components/gc-main-toolbar","./templates/gc-main-toolbar","./components/gc-pagination/gc-pagination","./components/gc-sidebar/gc-sidebar","./templates/gc-sidebar","./components/gc-table/gc-column-model","./components/gc-table/gc-table","./templates/gc-table","./components/gc-sidelist/gc-sidelist","./components/gc-select2","./components/gc-tagging-select2","./initializers/gc-initializer","exports"],
  function(__dependency1__, __dependency2__, __dependency3__, __dependency4__, __dependency5__, __dependency6__, __dependency7__, __dependency8__, __dependency9__, __dependency10__, __dependency11__, __dependency12__, __dependency13__, __dependency14__, __dependency15__, __exports__) {
    "use strict";
    var DatetimePickerComponent = __dependency1__["default"] || __dependency1__;

    var LoginFormComponent = __dependency2__["default"] || __dependency2__;
    var LoginFormTemplate = __dependency3__["default"] || __dependency3__;

    var MainToolbarComponent = __dependency4__["default"] || __dependency4__;
    var MainToolbarTemplate = __dependency5__["default"] || __dependency5__;

    var PaginationComponent = __dependency6__["default"] || __dependency6__;

    var SidebarComponent = __dependency7__["default"] || __dependency7__;
    var SidebarTemplate = __dependency8__["default"] || __dependency8__;

    var TableColumnModel = __dependency9__["default"] || __dependency9__;
    var TableComponent = __dependency10__["default"] || __dependency10__;
    var TableTemplate = __dependency11__["default"] || __dependency11__;

    var SidelistComponent = __dependency12__["default"] || __dependency12__;

    var Select2Component = __dependency13__["default"] || __dependency13__;
    var TaggingSelect2Component = __dependency14__["default"] || __dependency14__;

    var Initializer = __dependency15__["default"] || __dependency15__;

    Ember.Application.initializer(Initializer);

    Ember.libraries.register('GloitComponent', '0.1.0');

    Ember.View.reopen({
      init: function() {
        this._super();

        // bind attributes beginning with 'data-'
        Ember.keys(this).forEach(function(key) {
          if(key.substr(0, 5) == 'data-') {
            this.get('attributeBindings').pushObject(key);
          }
        });
      }
    });

    __exports__.Initializer = Initializer;
    __exports__.DatetimePickerComponent = DatetimePickerComponent;
    __exports__.LoginFormComponent = LoginFormComponent;
    __exports__.LoginFormTemplate = LoginFormTemplate;
    __exports__.MainToolbarComponent = MainToolbarComponent;
    __exports__.PaginationComponent = PaginationComponent;
    __exports__.SidebarTemplate = SidebarTemplate;
    __exports__.SidebarComponent = SidebarComponent;
    __exports__.TableColumnModel = TableColumnModel;
    __exports__.TableTemplate = TableTemplate;
    __exports__.TableComponent = TableComponent;
    __exports__.SidelistComponent = SidelistComponent;
    __exports__.Select2Component = Select2Component;
    __exports__.TaggingSelect2Component = TaggingSelect2Component;
  });