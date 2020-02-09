function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/_shared/header/header.component.html":
  /*!********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/_shared/header/header.component.html ***!
    \********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcApp_sharedHeaderHeaderComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<mat-toolbar color=\"primary\">\n    <mat-toolbar-row>\n        <button mat-button routerLink=\"/login\" routerLinkActive=\"active\">Login</button>\n        <button mat-button routerLink=\"/signup\" routerLinkActive=\"active\">Sign up</button>\n    </mat-toolbar-row>\n</mat-toolbar>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/_shared/page-not-found/page-not-found.component.html":
  /*!************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/_shared/page-not-found/page-not-found.component.html ***!
    \************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcApp_sharedPageNotFoundPageNotFoundComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<h2>Page not found</h2>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin.component.html":
  /*!**********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin.component.html ***!
    \**********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAdminAdminComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<header>\n  <ul class=\"nav nav-tabs\">\n      <li class=\"nav-item\">\n          <a class=\"nav-link\" routerLink=\"home\" routerLinkActive=\"active\">Home</a>\n      </li>\n      <li class=\"nav-item\">\n          <a class=\"nav-link\" routerLink=\"list\" routerLinkActive=\"active\">Librarians</a>\n      </li>\n  </ul>\n</header>\n\n<main>\n  <router-outlet></router-outlet>\n</main>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/home/home.component.html":
  /*!**************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/home/home.component.html ***!
    \**************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAdminHomeHomeComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>home works!</p>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/librarian-add-edit/librarian-add-edit.component.html":
  /*!******************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/librarian-add-edit/librarian-add-edit.component.html ***!
    \******************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAdminLibrarianAddEditLibrarianAddEditComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div>works</div>\n<div class=\"side-form\">\n    <h1>{{ title }}</h1>\n    <div class=\"form-container\">\n        <form (ngSubmit)=\"saveLibrarian()\">\n            <div class=\"form-group\">\n                <label for=\"name\">Name</label>\n                <input type=\"text\" name=\"name\" [(ngModel)]=\"librarian.name\" class=\"form-control\" required />\n            </div>\n            <div class=\"form-group\">\n                <label for=\"name\">Email</label>\n                <input type=\"text\" name=\"email\" [(ngModel)]=\"librarian.email\" class=\"form-control\" required />\n            </div>\n            <div class=\"form-group\">\n                <label for=\"name\">Price</label>\n                <input type=\"text\" name=\"password\" [(ngModel)]=\"librarian.password\" class=\"form-control\" required />\n            </div>\n            <div class=\"form-group\">\n                <a class=\"btn btn-default\" routerLink=\"/list\">Cancel</a>\n                <button [disabled]=\"saving\" class=\"btn btn-primary\">\n                    <span *ngIf=\"saving\" class=\"spinner-border spinner-border-sm mr-1\"></span>\n                    Save\n                </button>\n            </div>\n        </form>\n    </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/librarian-list/librarian-list-item/librarian-list-item.component.html":
  /*!***********************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/librarian-list/librarian-list-item/librarian-list-item.component.html ***!
    \***********************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAdminLibrarianListLibrarianListItemLibrarianListItemComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<mat-card class=\"example-card\">\n    <mat-card-header>\n        <mat-card-title>{{ librarian.id }}</mat-card-title>\n    </mat-card-header>\n    <img mat-card-image src=\"{{ librarian.photo }}\" alt=\"Photo of a {{ librarian.name }}\">\n    <mat-card-content>\n        <p>{{ librarian.email }}</p>\n        <p>{{ librarian.name }}</p>\n    </mat-card-content>\n    <mat-card-actions align=\"end\">\n        <button mat-raised-button color=\"primary\" [routerLink]=\"['edit', librarian.id]\">Edit</button>\n        <div fxFlex></div>\n        <button mat-raised-button color=\"warn\" (click)=\"deleteLibrarian(librarian.id)\">Remove</button>\n      </mat-card-actions>\n</mat-card>\n<br/>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/librarian-list/librarian-list.component.html":
  /*!**********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/librarian-list/librarian-list.component.html ***!
    \**********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAdminLibrarianListLibrarianListComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-refresh></app-refresh>\n<div class=\"wrapper\">\n    <div class=\"row\">\n        <div class=\"col-xs-6\" [hidden]=\"something\" *ngFor=\"let librarian of librarians\">\n            <app-librarian-list-item [librarian]=\"librarian\"></app-librarian-list-item>\n        </div>\n        <div class=\"col-xs-6\">\n            <router-outlet></router-outlet>\n        </div>\n    </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/refresh/refresh.component.html":
  /*!********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/refresh/refresh.component.html ***!
    \********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAdminRefreshRefreshComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<button (click)=\"refresh()\">Refresh</button>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- <nav class=\"navbar navbar-expand navbar-dark bg-dark\" *ngIf=\"currentUser\">\n    <div class=\"navbar-nav\">\n        <a class=\"nav-item nav-link\" routerLink=\"/\">Home</a>\n        <a class=\"nav-item nav-link\" routerLink=\"/admin\" *ngIf=\"isAdmin\">Admin</a>\n        <a class=\"nav-item nav-link\" (click)=\"logout()\">Logout</a>\n    </div>\n</nav>> -->\n\n<div class=\"jumbotron\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-md-6 offset-md-3\">\n                <router-outlet></router-outlet>\n            </div>\n        </div>\n    </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/auth.component.html":
  /*!********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/auth/auth.component.html ***!
    \********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAuthAuthComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<mat-toolbar color=\"primary\">\n    <mat-toolbar-row>\n        <button mat-button routerLink=\"/login\" routerLinkActive=\"active\">Login</button>\n        <button mat-button routerLink=\"/signup\" routerLinkActive=\"active\">Sign up</button>\n    </mat-toolbar-row>\n</mat-toolbar>\n<router-outlet></router-outlet>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/login/login.component.html":
  /*!***************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/auth/login/login.component.html ***!
    \***************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAuthLoginLoginComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"alert alert-info\">\n        <strong>Normal User</strong> - U: user P: user<br />\n        <strong>Administrator</strong> - U: admin P: admin\n        <strong>Librarian</strong> - U: librarian P: librarian\n    </div>\n\n\n<mat-card>\n    <mat-card-title>Login</mat-card-title>\n    <mat-card-content>\n        <form [formGroup]=\"loginForm\" (ngSubmit)=\"submit()\">\n            <p>\n                <mat-form-field>\n                    <input type=\"text\" matInput placeholder=\"Username\" formControlName=\"username\">\n                </mat-form-field>\n            </p>\n\n            <p>\n                <mat-form-field>\n                    <input type=\"password\" matInput placeholder=\"Password\" formControlName=\"password\">\n                </mat-form-field>\n            </p>\n\n            <p *ngIf=\"error\" class=\"error\">\n                {{ error }}\n            </p>\n\n            <div class=\"button\">\n                <button type=\"submit\" mat-button>Login</button>\n            </div>\n\n        </form>\n    </mat-card-content>\n</mat-card>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/signup/signup.component.html":
  /*!*****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/auth/signup/signup.component.html ***!
    \*****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAuthSignupSignupComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"signup-container\">\n    <form class=\"signup-container\" [formGroup]=\"signupForm\" (ngSubmit)=\"signup()\">\n        <mat-form-field>\n            <input matInput placeholder=\"Email\" formControlName=\"email\" name=\"email\" />\n            <mat-error *ngIf=\"form.email.hasError('required')\">\n                Email is required\n            </mat-error>\n            <mat-error *ngIf=\"form.email.hasError('email')\">Email is invalid</mat-error>\n        </mat-form-field>\n\n        <mat-form-field>\n            <input matInput placeholder=\"Name\" type=\"text\" formControlName=\"name\" name=\"name\" />\n            <mat-error *ngIf=\"form.name.errors && form.name.errors.required\">Name is required</mat-error>\n            <mat-error *ngIf=\"form.name.invalid\">Name is invalid</mat-error>\n        </mat-form-field>\n\n        <mat-form-field>\n            <!--mat-label>Options</mat-label-->\n            <mat-select matInput placeholder=\"Options\" formControlName=\"options\" name=\"options\" required>\n                <mat-option *ngFor=\"let o of options\" [value]=\"o\">{{ o }}\n                </mat-option>\n            </mat-select>\n            <mat-error *ngIf=\"form.options.errors && form.options.errors.required\">Options is required\n            </mat-error>\n        </mat-form-field>\n\n        <mat-form-field>\n            <input matInput placeholder=\"Password\" type=\"password\" formControlName=\"password\" name=\"password\" />\n            <mat-error *ngIf=\"form.password.errors && form.password.errors.required\">Password is required\n            </mat-error>\n            <mat-error *ngIf=\"form.password.hasError('minlength')\">Password must be at least 6 characters\n            </mat-error>\n        </mat-form-field>\n\n        <mat-form-field>\n            <input matInput placeholder=\"ConfirmPassword\" type=\"password\" formControlName=\"confirmPassword\"\n                name=\"confirmPassword\" />\n            <mat-error *ngIf=\"form.confirmPassword.errors && form.confirmPassword.errors.required\">Confirm\n                password is required</mat-error>\n            <mat-error *ngIf=\"form.confirmPassword.errors && form.confirmPassword.errors.mustMatch\">Passwords must match\n            </mat-error>\n        </mat-form-field>\n\n        <div class=\"signup-form-buttons\">\n            <button mat-button type=\"submit\" class=\"button\" [disabled]=\"signupForm.invalid\">\n                Sign up\n            </button>\n        </div>\n    </form>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/dashboard.component.html":
  /*!******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/dashboard.component.html ***!
    \******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppDashboardDashboardComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<h1>Dashboard</h1>\n<p>You're logged in with Angular 7 & JWT!!</p>\n<p>Your role is: <strong>{{currentUser.authority}}</strong>.</p>\n<p>This page can be accessed by all authenticated users.</p>\n<div>\n    Current user from secure api end point:\n    <ul>\n        <li *ngIf=\"userFromApi\">{{userFromApi.name}}</li>\n    </ul>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/library/library.component.html":
  /*!**************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/library/library.component.html ***!
    \**************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLibraryLibraryComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<h1>Library</h1>\n<p>You're logged in with Angular 7 & JWT!!</p>\n<p>Your role is: <strong>{{currentUser.authority}}</strong>.</p>\n<p>This page can be accessed by all authenticated users.</p>\n<div>\n    Current user from secure api end point:\n    <ul>\n        <li *ngIf=\"userFromApi\">{{userFromApi.name}}</li>\n    </ul>\n</div>";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0
    
    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.
    
    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : new P(function (resolve) {
            resolve(result.value);
          }).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var m = typeof Symbol === "function" && o[Symbol.iterator],
          i = 0;
      if (m) return m.call(o);
      return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result.default = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        default: mod
      };
    }
    /***/

  },

  /***/
  "./node_modules/zone.js/dist/zone-evergreen.js":
  /*!*****************************************************!*\
    !*** ./node_modules/zone.js/dist/zone-evergreen.js ***!
    \*****************************************************/

  /*! no static exports found */

  /***/
  function node_modulesZoneJsDistZoneEvergreenJs(module, exports) {
    /**
    * @license
    * Copyright Google Inc. All Rights Reserved.
    *
    * Use of this source code is governed by an MIT-style license that can be
    * found in the LICENSE file at https://angular.io/license
    */

    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    var Zone$1 = function (global) {
      var performance = global['performance'];

      function mark(name) {
        performance && performance['mark'] && performance['mark'](name);
      }

      function performanceMeasure(name, label) {
        performance && performance['measure'] && performance['measure'](name, label);
      }

      mark('Zone');
      var checkDuplicate = global['__zone_symbol__forceDuplicateZoneCheck'] === true;

      if (global['Zone']) {
        // if global['Zone'] already exists (maybe zone.js was already loaded or
        // some other lib also registered a global object named Zone), we may need
        // to throw an error, but sometimes user may not want this error.
        // For example,
        // we have two web pages, page1 includes zone.js, page2 doesn't.
        // and the 1st time user load page1 and page2, everything work fine,
        // but when user load page2 again, error occurs because global['Zone'] already exists.
        // so we add a flag to let user choose whether to throw this error or not.
        // By default, if existing Zone is from zone.js, we will not throw the error.
        if (checkDuplicate || typeof global['Zone'].__symbol__ !== 'function') {
          throw new Error('Zone already loaded.');
        } else {
          return global['Zone'];
        }
      }

      var Zone =
      /*#__PURE__*/
      function () {
        function Zone(parent, zoneSpec) {
          _classCallCheck(this, Zone);

          this._parent = parent;
          this._name = zoneSpec ? zoneSpec.name || 'unnamed' : '<root>';
          this._properties = zoneSpec && zoneSpec.properties || {};
          this._zoneDelegate = new ZoneDelegate(this, this._parent && this._parent._zoneDelegate, zoneSpec);
        }

        _createClass(Zone, [{
          key: "get",
          value: function get(key) {
            var zone = this.getZoneWith(key);
            if (zone) return zone._properties[key];
          }
        }, {
          key: "getZoneWith",
          value: function getZoneWith(key) {
            var current = this;

            while (current) {
              if (current._properties.hasOwnProperty(key)) {
                return current;
              }

              current = current._parent;
            }

            return null;
          }
        }, {
          key: "fork",
          value: function fork(zoneSpec) {
            if (!zoneSpec) throw new Error('ZoneSpec required!');
            return this._zoneDelegate.fork(this, zoneSpec);
          }
        }, {
          key: "wrap",
          value: function wrap(callback, source) {
            if (typeof callback !== 'function') {
              throw new Error('Expecting function got: ' + callback);
            }

            var _callback = this._zoneDelegate.intercept(this, callback, source);

            var zone = this;
            return function () {
              return zone.runGuarded(_callback, this, arguments, source);
            };
          }
        }, {
          key: "run",
          value: function run(callback, applyThis, applyArgs, source) {
            _currentZoneFrame = {
              parent: _currentZoneFrame,
              zone: this
            };

            try {
              return this._zoneDelegate.invoke(this, callback, applyThis, applyArgs, source);
            } finally {
              _currentZoneFrame = _currentZoneFrame.parent;
            }
          }
        }, {
          key: "runGuarded",
          value: function runGuarded(callback) {
            var applyThis = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
            var applyArgs = arguments.length > 2 ? arguments[2] : undefined;
            var source = arguments.length > 3 ? arguments[3] : undefined;
            _currentZoneFrame = {
              parent: _currentZoneFrame,
              zone: this
            };

            try {
              try {
                return this._zoneDelegate.invoke(this, callback, applyThis, applyArgs, source);
              } catch (error) {
                if (this._zoneDelegate.handleError(this, error)) {
                  throw error;
                }
              }
            } finally {
              _currentZoneFrame = _currentZoneFrame.parent;
            }
          }
        }, {
          key: "runTask",
          value: function runTask(task, applyThis, applyArgs) {
            if (task.zone != this) {
              throw new Error('A task can only be run in the zone of creation! (Creation: ' + (task.zone || NO_ZONE).name + '; Execution: ' + this.name + ')');
            } // https://github.com/angular/zone.js/issues/778, sometimes eventTask
            // will run in notScheduled(canceled) state, we should not try to
            // run such kind of task but just return


            if (task.state === notScheduled && (task.type === eventTask || task.type === macroTask)) {
              return;
            }

            var reEntryGuard = task.state != running;
            reEntryGuard && task._transitionTo(running, scheduled);
            task.runCount++;
            var previousTask = _currentTask;
            _currentTask = task;
            _currentZoneFrame = {
              parent: _currentZoneFrame,
              zone: this
            };

            try {
              if (task.type == macroTask && task.data && !task.data.isPeriodic) {
                task.cancelFn = undefined;
              }

              try {
                return this._zoneDelegate.invokeTask(this, task, applyThis, applyArgs);
              } catch (error) {
                if (this._zoneDelegate.handleError(this, error)) {
                  throw error;
                }
              }
            } finally {
              // if the task's state is notScheduled or unknown, then it has already been cancelled
              // we should not reset the state to scheduled
              if (task.state !== notScheduled && task.state !== unknown) {
                if (task.type == eventTask || task.data && task.data.isPeriodic) {
                  reEntryGuard && task._transitionTo(scheduled, running);
                } else {
                  task.runCount = 0;

                  this._updateTaskCount(task, -1);

                  reEntryGuard && task._transitionTo(notScheduled, running, notScheduled);
                }
              }

              _currentZoneFrame = _currentZoneFrame.parent;
              _currentTask = previousTask;
            }
          }
        }, {
          key: "scheduleTask",
          value: function scheduleTask(task) {
            if (task.zone && task.zone !== this) {
              // check if the task was rescheduled, the newZone
              // should not be the children of the original zone
              var newZone = this;

              while (newZone) {
                if (newZone === task.zone) {
                  throw Error("can not reschedule task to ".concat(this.name, " which is descendants of the original zone ").concat(task.zone.name));
                }

                newZone = newZone.parent;
              }
            }

            task._transitionTo(scheduling, notScheduled);

            var zoneDelegates = [];
            task._zoneDelegates = zoneDelegates;
            task._zone = this;

            try {
              task = this._zoneDelegate.scheduleTask(this, task);
            } catch (err) {
              // should set task's state to unknown when scheduleTask throw error
              // because the err may from reschedule, so the fromState maybe notScheduled
              task._transitionTo(unknown, scheduling, notScheduled); // TODO: @JiaLiPassion, should we check the result from handleError?


              this._zoneDelegate.handleError(this, err);

              throw err;
            }

            if (task._zoneDelegates === zoneDelegates) {
              // we have to check because internally the delegate can reschedule the task.
              this._updateTaskCount(task, 1);
            }

            if (task.state == scheduling) {
              task._transitionTo(scheduled, scheduling);
            }

            return task;
          }
        }, {
          key: "scheduleMicroTask",
          value: function scheduleMicroTask(source, callback, data, customSchedule) {
            return this.scheduleTask(new ZoneTask(microTask, source, callback, data, customSchedule, undefined));
          }
        }, {
          key: "scheduleMacroTask",
          value: function scheduleMacroTask(source, callback, data, customSchedule, customCancel) {
            return this.scheduleTask(new ZoneTask(macroTask, source, callback, data, customSchedule, customCancel));
          }
        }, {
          key: "scheduleEventTask",
          value: function scheduleEventTask(source, callback, data, customSchedule, customCancel) {
            return this.scheduleTask(new ZoneTask(eventTask, source, callback, data, customSchedule, customCancel));
          }
        }, {
          key: "cancelTask",
          value: function cancelTask(task) {
            if (task.zone != this) throw new Error('A task can only be cancelled in the zone of creation! (Creation: ' + (task.zone || NO_ZONE).name + '; Execution: ' + this.name + ')');

            task._transitionTo(canceling, scheduled, running);

            try {
              this._zoneDelegate.cancelTask(this, task);
            } catch (err) {
              // if error occurs when cancelTask, transit the state to unknown
              task._transitionTo(unknown, canceling);

              this._zoneDelegate.handleError(this, err);

              throw err;
            }

            this._updateTaskCount(task, -1);

            task._transitionTo(notScheduled, canceling);

            task.runCount = 0;
            return task;
          }
        }, {
          key: "_updateTaskCount",
          value: function _updateTaskCount(task, count) {
            var zoneDelegates = task._zoneDelegates;

            if (count == -1) {
              task._zoneDelegates = null;
            }

            for (var i = 0; i < zoneDelegates.length; i++) {
              zoneDelegates[i]._updateTaskCount(task.type, count);
            }
          }
        }, {
          key: "parent",
          get: function get() {
            return this._parent;
          }
        }, {
          key: "name",
          get: function get() {
            return this._name;
          }
        }], [{
          key: "assertZonePatched",
          value: function assertZonePatched() {
            if (global['Promise'] !== patches['ZoneAwarePromise']) {
              throw new Error('Zone.js has detected that ZoneAwarePromise `(window|global).Promise` ' + 'has been overwritten.\n' + 'Most likely cause is that a Promise polyfill has been loaded ' + 'after Zone.js (Polyfilling Promise api is not necessary when zone.js is loaded. ' + 'If you must load one, do so before loading zone.js.)');
            }
          }
        }, {
          key: "__load_patch",
          value: function __load_patch(name, fn) {
            if (patches.hasOwnProperty(name)) {
              if (checkDuplicate) {
                throw Error('Already loaded patch: ' + name);
              }
            } else if (!global['__Zone_disable_' + name]) {
              var perfName = 'Zone:' + name;
              mark(perfName);
              patches[name] = fn(global, Zone, _api);
              performanceMeasure(perfName, perfName);
            }
          }
        }, {
          key: "root",
          get: function get() {
            var zone = Zone.current;

            while (zone.parent) {
              zone = zone.parent;
            }

            return zone;
          }
        }, {
          key: "current",
          get: function get() {
            return _currentZoneFrame.zone;
          }
        }, {
          key: "currentTask",
          get: function get() {
            return _currentTask;
          }
        }]);

        return Zone;
      }();

      Zone.__symbol__ = __symbol__;
      var DELEGATE_ZS = {
        name: '',
        onHasTask: function onHasTask(delegate, _, target, hasTaskState) {
          return delegate.hasTask(target, hasTaskState);
        },
        onScheduleTask: function onScheduleTask(delegate, _, target, task) {
          return delegate.scheduleTask(target, task);
        },
        onInvokeTask: function onInvokeTask(delegate, _, target, task, applyThis, applyArgs) {
          return delegate.invokeTask(target, task, applyThis, applyArgs);
        },
        onCancelTask: function onCancelTask(delegate, _, target, task) {
          return delegate.cancelTask(target, task);
        }
      };

      var ZoneDelegate =
      /*#__PURE__*/
      function () {
        function ZoneDelegate(zone, parentDelegate, zoneSpec) {
          _classCallCheck(this, ZoneDelegate);

          this._taskCounts = {
            'microTask': 0,
            'macroTask': 0,
            'eventTask': 0
          };
          this.zone = zone;
          this._parentDelegate = parentDelegate;
          this._forkZS = zoneSpec && (zoneSpec && zoneSpec.onFork ? zoneSpec : parentDelegate._forkZS);
          this._forkDlgt = zoneSpec && (zoneSpec.onFork ? parentDelegate : parentDelegate._forkDlgt);
          this._forkCurrZone = zoneSpec && (zoneSpec.onFork ? this.zone : parentDelegate.zone);
          this._interceptZS = zoneSpec && (zoneSpec.onIntercept ? zoneSpec : parentDelegate._interceptZS);
          this._interceptDlgt = zoneSpec && (zoneSpec.onIntercept ? parentDelegate : parentDelegate._interceptDlgt);
          this._interceptCurrZone = zoneSpec && (zoneSpec.onIntercept ? this.zone : parentDelegate.zone);
          this._invokeZS = zoneSpec && (zoneSpec.onInvoke ? zoneSpec : parentDelegate._invokeZS);
          this._invokeDlgt = zoneSpec && (zoneSpec.onInvoke ? parentDelegate : parentDelegate._invokeDlgt);
          this._invokeCurrZone = zoneSpec && (zoneSpec.onInvoke ? this.zone : parentDelegate.zone);
          this._handleErrorZS = zoneSpec && (zoneSpec.onHandleError ? zoneSpec : parentDelegate._handleErrorZS);
          this._handleErrorDlgt = zoneSpec && (zoneSpec.onHandleError ? parentDelegate : parentDelegate._handleErrorDlgt);
          this._handleErrorCurrZone = zoneSpec && (zoneSpec.onHandleError ? this.zone : parentDelegate.zone);
          this._scheduleTaskZS = zoneSpec && (zoneSpec.onScheduleTask ? zoneSpec : parentDelegate._scheduleTaskZS);
          this._scheduleTaskDlgt = zoneSpec && (zoneSpec.onScheduleTask ? parentDelegate : parentDelegate._scheduleTaskDlgt);
          this._scheduleTaskCurrZone = zoneSpec && (zoneSpec.onScheduleTask ? this.zone : parentDelegate.zone);
          this._invokeTaskZS = zoneSpec && (zoneSpec.onInvokeTask ? zoneSpec : parentDelegate._invokeTaskZS);
          this._invokeTaskDlgt = zoneSpec && (zoneSpec.onInvokeTask ? parentDelegate : parentDelegate._invokeTaskDlgt);
          this._invokeTaskCurrZone = zoneSpec && (zoneSpec.onInvokeTask ? this.zone : parentDelegate.zone);
          this._cancelTaskZS = zoneSpec && (zoneSpec.onCancelTask ? zoneSpec : parentDelegate._cancelTaskZS);
          this._cancelTaskDlgt = zoneSpec && (zoneSpec.onCancelTask ? parentDelegate : parentDelegate._cancelTaskDlgt);
          this._cancelTaskCurrZone = zoneSpec && (zoneSpec.onCancelTask ? this.zone : parentDelegate.zone);
          this._hasTaskZS = null;
          this._hasTaskDlgt = null;
          this._hasTaskDlgtOwner = null;
          this._hasTaskCurrZone = null;
          var zoneSpecHasTask = zoneSpec && zoneSpec.onHasTask;
          var parentHasTask = parentDelegate && parentDelegate._hasTaskZS;

          if (zoneSpecHasTask || parentHasTask) {
            // If we need to report hasTask, than this ZS needs to do ref counting on tasks. In such
            // a case all task related interceptors must go through this ZD. We can't short circuit it.
            this._hasTaskZS = zoneSpecHasTask ? zoneSpec : DELEGATE_ZS;
            this._hasTaskDlgt = parentDelegate;
            this._hasTaskDlgtOwner = this;
            this._hasTaskCurrZone = zone;

            if (!zoneSpec.onScheduleTask) {
              this._scheduleTaskZS = DELEGATE_ZS;
              this._scheduleTaskDlgt = parentDelegate;
              this._scheduleTaskCurrZone = this.zone;
            }

            if (!zoneSpec.onInvokeTask) {
              this._invokeTaskZS = DELEGATE_ZS;
              this._invokeTaskDlgt = parentDelegate;
              this._invokeTaskCurrZone = this.zone;
            }

            if (!zoneSpec.onCancelTask) {
              this._cancelTaskZS = DELEGATE_ZS;
              this._cancelTaskDlgt = parentDelegate;
              this._cancelTaskCurrZone = this.zone;
            }
          }
        }

        _createClass(ZoneDelegate, [{
          key: "fork",
          value: function fork(targetZone, zoneSpec) {
            return this._forkZS ? this._forkZS.onFork(this._forkDlgt, this.zone, targetZone, zoneSpec) : new Zone(targetZone, zoneSpec);
          }
        }, {
          key: "intercept",
          value: function intercept(targetZone, callback, source) {
            return this._interceptZS ? this._interceptZS.onIntercept(this._interceptDlgt, this._interceptCurrZone, targetZone, callback, source) : callback;
          }
        }, {
          key: "invoke",
          value: function invoke(targetZone, callback, applyThis, applyArgs, source) {
            return this._invokeZS ? this._invokeZS.onInvoke(this._invokeDlgt, this._invokeCurrZone, targetZone, callback, applyThis, applyArgs, source) : callback.apply(applyThis, applyArgs);
          }
        }, {
          key: "handleError",
          value: function handleError(targetZone, error) {
            return this._handleErrorZS ? this._handleErrorZS.onHandleError(this._handleErrorDlgt, this._handleErrorCurrZone, targetZone, error) : true;
          }
        }, {
          key: "scheduleTask",
          value: function scheduleTask(targetZone, task) {
            var returnTask = task;

            if (this._scheduleTaskZS) {
              if (this._hasTaskZS) {
                returnTask._zoneDelegates.push(this._hasTaskDlgtOwner);
              }

              returnTask = this._scheduleTaskZS.onScheduleTask(this._scheduleTaskDlgt, this._scheduleTaskCurrZone, targetZone, task);
              if (!returnTask) returnTask = task;
            } else {
              if (task.scheduleFn) {
                task.scheduleFn(task);
              } else if (task.type == microTask) {
                scheduleMicroTask(task);
              } else {
                throw new Error('Task is missing scheduleFn.');
              }
            }

            return returnTask;
          }
        }, {
          key: "invokeTask",
          value: function invokeTask(targetZone, task, applyThis, applyArgs) {
            return this._invokeTaskZS ? this._invokeTaskZS.onInvokeTask(this._invokeTaskDlgt, this._invokeTaskCurrZone, targetZone, task, applyThis, applyArgs) : task.callback.apply(applyThis, applyArgs);
          }
        }, {
          key: "cancelTask",
          value: function cancelTask(targetZone, task) {
            var value;

            if (this._cancelTaskZS) {
              value = this._cancelTaskZS.onCancelTask(this._cancelTaskDlgt, this._cancelTaskCurrZone, targetZone, task);
            } else {
              if (!task.cancelFn) {
                throw Error('Task is not cancelable');
              }

              value = task.cancelFn(task);
            }

            return value;
          }
        }, {
          key: "hasTask",
          value: function hasTask(targetZone, isEmpty) {
            // hasTask should not throw error so other ZoneDelegate
            // can still trigger hasTask callback
            try {
              this._hasTaskZS && this._hasTaskZS.onHasTask(this._hasTaskDlgt, this._hasTaskCurrZone, targetZone, isEmpty);
            } catch (err) {
              this.handleError(targetZone, err);
            }
          }
        }, {
          key: "_updateTaskCount",
          value: function _updateTaskCount(type, count) {
            var counts = this._taskCounts;
            var prev = counts[type];
            var next = counts[type] = prev + count;

            if (next < 0) {
              throw new Error('More tasks executed then were scheduled.');
            }

            if (prev == 0 || next == 0) {
              var isEmpty = {
                microTask: counts['microTask'] > 0,
                macroTask: counts['macroTask'] > 0,
                eventTask: counts['eventTask'] > 0,
                change: type
              };
              this.hasTask(this.zone, isEmpty);
            }
          }
        }]);

        return ZoneDelegate;
      }();

      var ZoneTask =
      /*#__PURE__*/
      function () {
        function ZoneTask(type, source, callback, options, scheduleFn, cancelFn) {
          _classCallCheck(this, ZoneTask);

          this._zone = null;
          this.runCount = 0;
          this._zoneDelegates = null;
          this._state = 'notScheduled';
          this.type = type;
          this.source = source;
          this.data = options;
          this.scheduleFn = scheduleFn;
          this.cancelFn = cancelFn;
          this.callback = callback;
          var self = this; // TODO: @JiaLiPassion options should have interface

          if (type === eventTask && options && options.useG) {
            this.invoke = ZoneTask.invokeTask;
          } else {
            this.invoke = function () {
              return ZoneTask.invokeTask.call(global, self, this, arguments);
            };
          }
        }

        _createClass(ZoneTask, [{
          key: "cancelScheduleRequest",
          value: function cancelScheduleRequest() {
            this._transitionTo(notScheduled, scheduling);
          }
        }, {
          key: "_transitionTo",
          value: function _transitionTo(toState, fromState1, fromState2) {
            if (this._state === fromState1 || this._state === fromState2) {
              this._state = toState;

              if (toState == notScheduled) {
                this._zoneDelegates = null;
              }
            } else {
              throw new Error("".concat(this.type, " '").concat(this.source, "': can not transition to '").concat(toState, "', expecting state '").concat(fromState1, "'").concat(fromState2 ? ' or \'' + fromState2 + '\'' : '', ", was '").concat(this._state, "'."));
            }
          }
        }, {
          key: "toString",
          value: function toString() {
            if (this.data && typeof this.data.handleId !== 'undefined') {
              return this.data.handleId.toString();
            } else {
              return Object.prototype.toString.call(this);
            }
          } // add toJSON method to prevent cyclic error when
          // call JSON.stringify(zoneTask)

        }, {
          key: "toJSON",
          value: function toJSON() {
            return {
              type: this.type,
              state: this.state,
              source: this.source,
              zone: this.zone.name,
              runCount: this.runCount
            };
          }
        }, {
          key: "zone",
          get: function get() {
            return this._zone;
          }
        }, {
          key: "state",
          get: function get() {
            return this._state;
          }
        }], [{
          key: "invokeTask",
          value: function invokeTask(task, target, args) {
            if (!task) {
              task = this;
            }

            _numberOfNestedTaskFrames++;

            try {
              task.runCount++;
              return task.zone.runTask(task, target, args);
            } finally {
              if (_numberOfNestedTaskFrames == 1) {
                drainMicroTaskQueue();
              }

              _numberOfNestedTaskFrames--;
            }
          }
        }]);

        return ZoneTask;
      }(); //////////////////////////////////////////////////////
      //////////////////////////////////////////////////////
      ///  MICROTASK QUEUE
      //////////////////////////////////////////////////////
      //////////////////////////////////////////////////////


      var symbolSetTimeout = __symbol__('setTimeout');

      var symbolPromise = __symbol__('Promise');

      var symbolThen = __symbol__('then');

      var _microTaskQueue = [];
      var _isDrainingMicrotaskQueue = false;
      var nativeMicroTaskQueuePromise;

      function scheduleMicroTask(task) {
        // if we are not running in any task, and there has not been anything scheduled
        // we must bootstrap the initial task creation by manually scheduling the drain
        if (_numberOfNestedTaskFrames === 0 && _microTaskQueue.length === 0) {
          // We are not running in Task, so we need to kickstart the microtask queue.
          if (!nativeMicroTaskQueuePromise) {
            if (global[symbolPromise]) {
              nativeMicroTaskQueuePromise = global[symbolPromise].resolve(0);
            }
          }

          if (nativeMicroTaskQueuePromise) {
            var nativeThen = nativeMicroTaskQueuePromise[symbolThen];

            if (!nativeThen) {
              // native Promise is not patchable, we need to use `then` directly
              // issue 1078
              nativeThen = nativeMicroTaskQueuePromise['then'];
            }

            nativeThen.call(nativeMicroTaskQueuePromise, drainMicroTaskQueue);
          } else {
            global[symbolSetTimeout](drainMicroTaskQueue, 0);
          }
        }

        task && _microTaskQueue.push(task);
      }

      function drainMicroTaskQueue() {
        if (!_isDrainingMicrotaskQueue) {
          _isDrainingMicrotaskQueue = true;

          while (_microTaskQueue.length) {
            var queue = _microTaskQueue;
            _microTaskQueue = [];

            for (var i = 0; i < queue.length; i++) {
              var task = queue[i];

              try {
                task.zone.runTask(task, null, null);
              } catch (error) {
                _api.onUnhandledError(error);
              }
            }
          }

          _api.microtaskDrainDone();

          _isDrainingMicrotaskQueue = false;
        }
      } //////////////////////////////////////////////////////
      //////////////////////////////////////////////////////
      ///  BOOTSTRAP
      //////////////////////////////////////////////////////
      //////////////////////////////////////////////////////


      var NO_ZONE = {
        name: 'NO ZONE'
      };
      var notScheduled = 'notScheduled',
          scheduling = 'scheduling',
          scheduled = 'scheduled',
          running = 'running',
          canceling = 'canceling',
          unknown = 'unknown';
      var microTask = 'microTask',
          macroTask = 'macroTask',
          eventTask = 'eventTask';
      var patches = {};
      var _api = {
        symbol: __symbol__,
        currentZoneFrame: function currentZoneFrame() {
          return _currentZoneFrame;
        },
        onUnhandledError: noop,
        microtaskDrainDone: noop,
        scheduleMicroTask: scheduleMicroTask,
        showUncaughtError: function showUncaughtError() {
          return !Zone[__symbol__('ignoreConsoleErrorUncaughtError')];
        },
        patchEventTarget: function patchEventTarget() {
          return [];
        },
        patchOnProperties: noop,
        patchMethod: function patchMethod() {
          return noop;
        },
        bindArguments: function bindArguments() {
          return [];
        },
        patchThen: function patchThen() {
          return noop;
        },
        patchMacroTask: function patchMacroTask() {
          return noop;
        },
        setNativePromise: function setNativePromise(NativePromise) {
          // sometimes NativePromise.resolve static function
          // is not ready yet, (such as core-js/es6.promise)
          // so we need to check here.
          if (NativePromise && typeof NativePromise.resolve === 'function') {
            nativeMicroTaskQueuePromise = NativePromise.resolve(0);
          }
        },
        patchEventPrototype: function patchEventPrototype() {
          return noop;
        },
        isIEOrEdge: function isIEOrEdge() {
          return false;
        },
        getGlobalObjects: function getGlobalObjects() {
          return undefined;
        },
        ObjectDefineProperty: function ObjectDefineProperty() {
          return noop;
        },
        ObjectGetOwnPropertyDescriptor: function ObjectGetOwnPropertyDescriptor() {
          return undefined;
        },
        ObjectCreate: function ObjectCreate() {
          return undefined;
        },
        ArraySlice: function ArraySlice() {
          return [];
        },
        patchClass: function patchClass() {
          return noop;
        },
        wrapWithCurrentZone: function wrapWithCurrentZone() {
          return noop;
        },
        filterProperties: function filterProperties() {
          return [];
        },
        attachOriginToPatched: function attachOriginToPatched() {
          return noop;
        },
        _redefineProperty: function _redefineProperty() {
          return noop;
        },
        patchCallbacks: function patchCallbacks() {
          return noop;
        }
      };
      var _currentZoneFrame = {
        parent: null,
        zone: new Zone(null, null)
      };
      var _currentTask = null;
      var _numberOfNestedTaskFrames = 0;

      function noop() {}

      function __symbol__(name) {
        return '__zone_symbol__' + name;
      }

      performanceMeasure('Zone', 'Zone');
      return global['Zone'] = Zone;
    }(typeof window !== 'undefined' && window || typeof self !== 'undefined' && self || global);
    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */


    Zone.__load_patch('ZoneAwarePromise', function (global, Zone, api) {
      var ObjectGetOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
      var ObjectDefineProperty = Object.defineProperty;

      function readableObjectToString(obj) {
        if (obj && obj.toString === Object.prototype.toString) {
          var className = obj.constructor && obj.constructor.name;
          return (className ? className : '') + ': ' + JSON.stringify(obj);
        }

        return obj ? obj.toString() : Object.prototype.toString.call(obj);
      }

      var __symbol__ = api.symbol;
      var _uncaughtPromiseErrors = [];

      var symbolPromise = __symbol__('Promise');

      var symbolThen = __symbol__('then');

      var creationTrace = '__creationTrace__';

      api.onUnhandledError = function (e) {
        if (api.showUncaughtError()) {
          var rejection = e && e.rejection;

          if (rejection) {
            console.error('Unhandled Promise rejection:', rejection instanceof Error ? rejection.message : rejection, '; Zone:', e.zone.name, '; Task:', e.task && e.task.source, '; Value:', rejection, rejection instanceof Error ? rejection.stack : undefined);
          } else {
            console.error(e);
          }
        }
      };

      api.microtaskDrainDone = function () {
        while (_uncaughtPromiseErrors.length) {
          var _loop = function _loop() {
            var uncaughtPromiseError = _uncaughtPromiseErrors.shift();

            try {
              uncaughtPromiseError.zone.runGuarded(function () {
                throw uncaughtPromiseError;
              });
            } catch (error) {
              handleUnhandledRejection(error);
            }
          };

          while (_uncaughtPromiseErrors.length) {
            _loop();
          }
        }
      };

      var UNHANDLED_PROMISE_REJECTION_HANDLER_SYMBOL = __symbol__('unhandledPromiseRejectionHandler');

      function handleUnhandledRejection(e) {
        api.onUnhandledError(e);

        try {
          var handler = Zone[UNHANDLED_PROMISE_REJECTION_HANDLER_SYMBOL];

          if (handler && typeof handler === 'function') {
            handler.call(this, e);
          }
        } catch (err) {}
      }

      function isThenable(value) {
        return value && value.then;
      }

      function forwardResolution(value) {
        return value;
      }

      function forwardRejection(rejection) {
        return ZoneAwarePromise.reject(rejection);
      }

      var symbolState = __symbol__('state');

      var symbolValue = __symbol__('value');

      var symbolFinally = __symbol__('finally');

      var symbolParentPromiseValue = __symbol__('parentPromiseValue');

      var symbolParentPromiseState = __symbol__('parentPromiseState');

      var source = 'Promise.then';
      var UNRESOLVED = null;
      var RESOLVED = true;
      var REJECTED = false;
      var REJECTED_NO_CATCH = 0;

      function makeResolver(promise, state) {
        return function (v) {
          try {
            resolvePromise(promise, state, v);
          } catch (err) {
            resolvePromise(promise, false, err);
          } // Do not return value or you will break the Promise spec.

        };
      }

      var once = function once() {
        var wasCalled = false;
        return function wrapper(wrappedFunction) {
          return function () {
            if (wasCalled) {
              return;
            }

            wasCalled = true;
            wrappedFunction.apply(null, arguments);
          };
        };
      };

      var TYPE_ERROR = 'Promise resolved with itself';

      var CURRENT_TASK_TRACE_SYMBOL = __symbol__('currentTaskTrace'); // Promise Resolution


      function resolvePromise(promise, state, value) {
        var onceWrapper = once();

        if (promise === value) {
          throw new TypeError(TYPE_ERROR);
        }

        if (promise[symbolState] === UNRESOLVED) {
          // should only get value.then once based on promise spec.
          var then = null;

          try {
            if (typeof value === 'object' || typeof value === 'function') {
              then = value && value.then;
            }
          } catch (err) {
            onceWrapper(function () {
              resolvePromise(promise, false, err);
            })();
            return promise;
          } // if (value instanceof ZoneAwarePromise) {


          if (state !== REJECTED && value instanceof ZoneAwarePromise && value.hasOwnProperty(symbolState) && value.hasOwnProperty(symbolValue) && value[symbolState] !== UNRESOLVED) {
            clearRejectedNoCatch(value);
            resolvePromise(promise, value[symbolState], value[symbolValue]);
          } else if (state !== REJECTED && typeof then === 'function') {
            try {
              then.call(value, onceWrapper(makeResolver(promise, state)), onceWrapper(makeResolver(promise, false)));
            } catch (err) {
              onceWrapper(function () {
                resolvePromise(promise, false, err);
              })();
            }
          } else {
            promise[symbolState] = state;
            var queue = promise[symbolValue];
            promise[symbolValue] = value;

            if (promise[symbolFinally] === symbolFinally) {
              // the promise is generated by Promise.prototype.finally
              if (state === RESOLVED) {
                // the state is resolved, should ignore the value
                // and use parent promise value
                promise[symbolState] = promise[symbolParentPromiseState];
                promise[symbolValue] = promise[symbolParentPromiseValue];
              }
            } // record task information in value when error occurs, so we can
            // do some additional work such as render longStackTrace


            if (state === REJECTED && value instanceof Error) {
              // check if longStackTraceZone is here
              var trace = Zone.currentTask && Zone.currentTask.data && Zone.currentTask.data[creationTrace];

              if (trace) {
                // only keep the long stack trace into error when in longStackTraceZone
                ObjectDefineProperty(value, CURRENT_TASK_TRACE_SYMBOL, {
                  configurable: true,
                  enumerable: false,
                  writable: true,
                  value: trace
                });
              }
            }

            for (var i = 0; i < queue.length;) {
              scheduleResolveOrReject(promise, queue[i++], queue[i++], queue[i++], queue[i++]);
            }

            if (queue.length == 0 && state == REJECTED) {
              promise[symbolState] = REJECTED_NO_CATCH;

              try {
                // try to print more readable error log
                throw new Error('Uncaught (in promise): ' + readableObjectToString(value) + (value && value.stack ? '\n' + value.stack : ''));
              } catch (err) {
                var error = err;
                error.rejection = value;
                error.promise = promise;
                error.zone = Zone.current;
                error.task = Zone.currentTask;

                _uncaughtPromiseErrors.push(error);

                api.scheduleMicroTask(); // to make sure that it is running
              }
            }
          }
        } // Resolving an already resolved promise is a noop.


        return promise;
      }

      var REJECTION_HANDLED_HANDLER = __symbol__('rejectionHandledHandler');

      function clearRejectedNoCatch(promise) {
        if (promise[symbolState] === REJECTED_NO_CATCH) {
          // if the promise is rejected no catch status
          // and queue.length > 0, means there is a error handler
          // here to handle the rejected promise, we should trigger
          // windows.rejectionhandled eventHandler or nodejs rejectionHandled
          // eventHandler
          try {
            var handler = Zone[REJECTION_HANDLED_HANDLER];

            if (handler && typeof handler === 'function') {
              handler.call(this, {
                rejection: promise[symbolValue],
                promise: promise
              });
            }
          } catch (err) {}

          promise[symbolState] = REJECTED;

          for (var i = 0; i < _uncaughtPromiseErrors.length; i++) {
            if (promise === _uncaughtPromiseErrors[i].promise) {
              _uncaughtPromiseErrors.splice(i, 1);
            }
          }
        }
      }

      function scheduleResolveOrReject(promise, zone, chainPromise, onFulfilled, onRejected) {
        clearRejectedNoCatch(promise);
        var promiseState = promise[symbolState];
        var delegate = promiseState ? typeof onFulfilled === 'function' ? onFulfilled : forwardResolution : typeof onRejected === 'function' ? onRejected : forwardRejection;
        zone.scheduleMicroTask(source, function () {
          try {
            var parentPromiseValue = promise[symbolValue];
            var isFinallyPromise = chainPromise && symbolFinally === chainPromise[symbolFinally];

            if (isFinallyPromise) {
              // if the promise is generated from finally call, keep parent promise's state and value
              chainPromise[symbolParentPromiseValue] = parentPromiseValue;
              chainPromise[symbolParentPromiseState] = promiseState;
            } // should not pass value to finally callback


            var value = zone.run(delegate, undefined, isFinallyPromise && delegate !== forwardRejection && delegate !== forwardResolution ? [] : [parentPromiseValue]);
            resolvePromise(chainPromise, true, value);
          } catch (error) {
            // if error occurs, should always return this error
            resolvePromise(chainPromise, false, error);
          }
        }, chainPromise);
      }

      var ZONE_AWARE_PROMISE_TO_STRING = 'function ZoneAwarePromise() { [native code] }';

      var ZoneAwarePromise =
      /*#__PURE__*/
      function () {
        function ZoneAwarePromise(executor) {
          _classCallCheck(this, ZoneAwarePromise);

          var promise = this;

          if (!(promise instanceof ZoneAwarePromise)) {
            throw new Error('Must be an instanceof Promise.');
          }

          promise[symbolState] = UNRESOLVED;
          promise[symbolValue] = []; // queue;

          try {
            executor && executor(makeResolver(promise, RESOLVED), makeResolver(promise, REJECTED));
          } catch (error) {
            resolvePromise(promise, false, error);
          }
        }

        _createClass(ZoneAwarePromise, [{
          key: "then",
          value: function then(onFulfilled, onRejected) {
            var chainPromise = new this.constructor(null);
            var zone = Zone.current;

            if (this[symbolState] == UNRESOLVED) {
              this[symbolValue].push(zone, chainPromise, onFulfilled, onRejected);
            } else {
              scheduleResolveOrReject(this, zone, chainPromise, onFulfilled, onRejected);
            }

            return chainPromise;
          }
        }, {
          key: "catch",
          value: function _catch(onRejected) {
            return this.then(null, onRejected);
          }
        }, {
          key: "finally",
          value: function _finally(onFinally) {
            var chainPromise = new this.constructor(null);
            chainPromise[symbolFinally] = symbolFinally;
            var zone = Zone.current;

            if (this[symbolState] == UNRESOLVED) {
              this[symbolValue].push(zone, chainPromise, onFinally, onFinally);
            } else {
              scheduleResolveOrReject(this, zone, chainPromise, onFinally, onFinally);
            }

            return chainPromise;
          }
        }, {
          key: Symbol.toStringTag,
          get: function get() {
            return 'Promise';
          }
        }], [{
          key: "toString",
          value: function toString() {
            return ZONE_AWARE_PROMISE_TO_STRING;
          }
        }, {
          key: "resolve",
          value: function resolve(value) {
            return resolvePromise(new this(null), RESOLVED, value);
          }
        }, {
          key: "reject",
          value: function reject(error) {
            return resolvePromise(new this(null), REJECTED, error);
          }
        }, {
          key: "race",
          value: function race(values) {
            var resolve;
            var reject;
            var promise = new this(function (res, rej) {
              resolve = res;
              reject = rej;
            });

            function onResolve(value) {
              resolve(value);
            }

            function onReject(error) {
              reject(error);
            }

            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
              for (var _iterator = values[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                var value = _step.value;

                if (!isThenable(value)) {
                  value = this.resolve(value);
                }

                value.then(onResolve, onReject);
              }
            } catch (err) {
              _didIteratorError = true;
              _iteratorError = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion && _iterator.return != null) {
                  _iterator.return();
                }
              } finally {
                if (_didIteratorError) {
                  throw _iteratorError;
                }
              }
            }

            return promise;
          }
        }, {
          key: "all",
          value: function all(values) {
            var _this = this;

            var resolve;
            var reject;
            var promise = new this(function (res, rej) {
              resolve = res;
              reject = rej;
            }); // Start at 2 to prevent prematurely resolving if .then is called immediately.

            var unresolvedCount = 2;
            var valueIndex = 0;
            var resolvedValues = [];
            var _iteratorNormalCompletion2 = true;
            var _didIteratorError2 = false;
            var _iteratorError2 = undefined;

            try {
              var _loop2 = function _loop2() {
                var value = _step2.value;

                if (!isThenable(value)) {
                  value = _this.resolve(value);
                }

                var curValueIndex = valueIndex;
                value.then(function (value) {
                  resolvedValues[curValueIndex] = value;
                  unresolvedCount--;

                  if (unresolvedCount === 0) {
                    resolve(resolvedValues);
                  }
                }, reject);
                unresolvedCount++;
                valueIndex++;
              };

              for (var _iterator2 = values[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                _loop2();
              } // Make the unresolvedCount zero-based again.

            } catch (err) {
              _didIteratorError2 = true;
              _iteratorError2 = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
                  _iterator2.return();
                }
              } finally {
                if (_didIteratorError2) {
                  throw _iteratorError2;
                }
              }
            }

            unresolvedCount -= 2;

            if (unresolvedCount === 0) {
              resolve(resolvedValues);
            }

            return promise;
          }
        }]);

        return ZoneAwarePromise;
      }(); // Protect against aggressive optimizers dropping seemingly unused properties.
      // E.g. Closure Compiler in advanced mode.


      ZoneAwarePromise['resolve'] = ZoneAwarePromise.resolve;
      ZoneAwarePromise['reject'] = ZoneAwarePromise.reject;
      ZoneAwarePromise['race'] = ZoneAwarePromise.race;
      ZoneAwarePromise['all'] = ZoneAwarePromise.all;
      var NativePromise = global[symbolPromise] = global['Promise'];

      var ZONE_AWARE_PROMISE = Zone.__symbol__('ZoneAwarePromise');

      var desc = ObjectGetOwnPropertyDescriptor(global, 'Promise');

      if (!desc || desc.configurable) {
        desc && delete desc.writable;
        desc && delete desc.value;

        if (!desc) {
          desc = {
            configurable: true,
            enumerable: true
          };
        }

        desc.get = function () {
          // if we already set ZoneAwarePromise, use patched one
          // otherwise return native one.
          return global[ZONE_AWARE_PROMISE] ? global[ZONE_AWARE_PROMISE] : global[symbolPromise];
        };

        desc.set = function (NewNativePromise) {
          if (NewNativePromise === ZoneAwarePromise) {
            // if the NewNativePromise is ZoneAwarePromise
            // save to global
            global[ZONE_AWARE_PROMISE] = NewNativePromise;
          } else {
            // if the NewNativePromise is not ZoneAwarePromise
            // for example: after load zone.js, some library just
            // set es6-promise to global, if we set it to global
            // directly, assertZonePatched will fail and angular
            // will not loaded, so we just set the NewNativePromise
            // to global[symbolPromise], so the result is just like
            // we load ES6 Promise before zone.js
            global[symbolPromise] = NewNativePromise;

            if (!NewNativePromise.prototype[symbolThen]) {
              patchThen(NewNativePromise);
            }

            api.setNativePromise(NewNativePromise);
          }
        };

        ObjectDefineProperty(global, 'Promise', desc);
      }

      global['Promise'] = ZoneAwarePromise;

      var symbolThenPatched = __symbol__('thenPatched');

      function patchThen(Ctor) {
        var proto = Ctor.prototype;
        var prop = ObjectGetOwnPropertyDescriptor(proto, 'then');

        if (prop && (prop.writable === false || !prop.configurable)) {
          // check Ctor.prototype.then propertyDescriptor is writable or not
          // in meteor env, writable is false, we should ignore such case
          return;
        }

        var originalThen = proto.then; // Keep a reference to the original method.

        proto[symbolThen] = originalThen;

        Ctor.prototype.then = function (onResolve, onReject) {
          var _this2 = this;

          var wrapped = new ZoneAwarePromise(function (resolve, reject) {
            originalThen.call(_this2, resolve, reject);
          });
          return wrapped.then(onResolve, onReject);
        };

        Ctor[symbolThenPatched] = true;
      }

      api.patchThen = patchThen;

      function zoneify(fn) {
        return function () {
          var resultPromise = fn.apply(this, arguments);

          if (resultPromise instanceof ZoneAwarePromise) {
            return resultPromise;
          }

          var ctor = resultPromise.constructor;

          if (!ctor[symbolThenPatched]) {
            patchThen(ctor);
          }

          return resultPromise;
        };
      }

      if (NativePromise) {
        patchThen(NativePromise);
        var fetch = global['fetch'];

        if (typeof fetch == 'function') {
          global[api.symbol('fetch')] = fetch;
          global['fetch'] = zoneify(fetch);
        }
      } // This is not part of public API, but it is useful for tests, so we expose it.


      Promise[Zone.__symbol__('uncaughtPromiseErrors')] = _uncaughtPromiseErrors;
      return ZoneAwarePromise;
    });
    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    /**
     * Suppress closure compiler errors about unknown 'Zone' variable
     * @fileoverview
     * @suppress {undefinedVars,globalThis,missingRequire}
     */
    // issue #989, to reduce bundle size, use short name

    /** Object.getOwnPropertyDescriptor */


    var ObjectGetOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
    /** Object.defineProperty */

    var ObjectDefineProperty = Object.defineProperty;
    /** Object.getPrototypeOf */

    var ObjectGetPrototypeOf = Object.getPrototypeOf;
    /** Object.create */

    var ObjectCreate = Object.create;
    /** Array.prototype.slice */

    var ArraySlice = Array.prototype.slice;
    /** addEventListener string const */

    var ADD_EVENT_LISTENER_STR = 'addEventListener';
    /** removeEventListener string const */

    var REMOVE_EVENT_LISTENER_STR = 'removeEventListener';
    /** zoneSymbol addEventListener */

    var ZONE_SYMBOL_ADD_EVENT_LISTENER = Zone.__symbol__(ADD_EVENT_LISTENER_STR);
    /** zoneSymbol removeEventListener */


    var ZONE_SYMBOL_REMOVE_EVENT_LISTENER = Zone.__symbol__(REMOVE_EVENT_LISTENER_STR);
    /** true string const */


    var TRUE_STR = 'true';
    /** false string const */

    var FALSE_STR = 'false';
    /** __zone_symbol__ string const */

    var ZONE_SYMBOL_PREFIX = '__zone_symbol__';

    function wrapWithCurrentZone(callback, source) {
      return Zone.current.wrap(callback, source);
    }

    function scheduleMacroTaskWithCurrentZone(source, callback, data, customSchedule, customCancel) {
      return Zone.current.scheduleMacroTask(source, callback, data, customSchedule, customCancel);
    }

    var zoneSymbol = Zone.__symbol__;
    var isWindowExists = typeof window !== 'undefined';
    var internalWindow = isWindowExists ? window : undefined;

    var _global = isWindowExists && internalWindow || typeof self === 'object' && self || global;

    var REMOVE_ATTRIBUTE = 'removeAttribute';
    var NULL_ON_PROP_VALUE = [null];

    function bindArguments(args, source) {
      for (var i = args.length - 1; i >= 0; i--) {
        if (typeof args[i] === 'function') {
          args[i] = wrapWithCurrentZone(args[i], source + '_' + i);
        }
      }

      return args;
    }

    function patchPrototype(prototype, fnNames) {
      var source = prototype.constructor['name'];

      var _loop3 = function _loop3(i) {
        var name = fnNames[i];
        var delegate = prototype[name];

        if (delegate) {
          var prototypeDesc = ObjectGetOwnPropertyDescriptor(prototype, name);

          if (!isPropertyWritable(prototypeDesc)) {
            return "continue";
          }

          prototype[name] = function (delegate) {
            var patched = function patched() {
              return delegate.apply(this, bindArguments(arguments, source + '.' + name));
            };

            attachOriginToPatched(patched, delegate);
            return patched;
          }(delegate);
        }
      };

      for (var i = 0; i < fnNames.length; i++) {
        var _ret = _loop3(i);

        if (_ret === "continue") continue;
      }
    }

    function isPropertyWritable(propertyDesc) {
      if (!propertyDesc) {
        return true;
      }

      if (propertyDesc.writable === false) {
        return false;
      }

      return !(typeof propertyDesc.get === 'function' && typeof propertyDesc.set === 'undefined');
    }

    var isWebWorker = typeof WorkerGlobalScope !== 'undefined' && self instanceof WorkerGlobalScope; // Make sure to access `process` through `_global` so that WebPack does not accidentally browserify
    // this code.

    var isNode = !('nw' in _global) && typeof _global.process !== 'undefined' && {}.toString.call(_global.process) === '[object process]';
    var isBrowser = !isNode && !isWebWorker && !!(isWindowExists && internalWindow['HTMLElement']); // we are in electron of nw, so we are both browser and nodejs
    // Make sure to access `process` through `_global` so that WebPack does not accidentally browserify
    // this code.

    var isMix = typeof _global.process !== 'undefined' && {}.toString.call(_global.process) === '[object process]' && !isWebWorker && !!(isWindowExists && internalWindow['HTMLElement']);
    var zoneSymbolEventNames = {};

    var wrapFn = function wrapFn(event) {
      // https://github.com/angular/zone.js/issues/911, in IE, sometimes
      // event will be undefined, so we need to use window.event
      event = event || _global.event;

      if (!event) {
        return;
      }

      var eventNameSymbol = zoneSymbolEventNames[event.type];

      if (!eventNameSymbol) {
        eventNameSymbol = zoneSymbolEventNames[event.type] = zoneSymbol('ON_PROPERTY' + event.type);
      }

      var target = this || event.target || _global;
      var listener = target[eventNameSymbol];
      var result;

      if (isBrowser && target === internalWindow && event.type === 'error') {
        // window.onerror have different signiture
        // https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onerror#window.onerror
        // and onerror callback will prevent default when callback return true
        var errorEvent = event;
        result = listener && listener.call(this, errorEvent.message, errorEvent.filename, errorEvent.lineno, errorEvent.colno, errorEvent.error);

        if (result === true) {
          event.preventDefault();
        }
      } else {
        result = listener && listener.apply(this, arguments);

        if (result != undefined && !result) {
          event.preventDefault();
        }
      }

      return result;
    };

    function patchProperty(obj, prop, prototype) {
      var desc = ObjectGetOwnPropertyDescriptor(obj, prop);

      if (!desc && prototype) {
        // when patch window object, use prototype to check prop exist or not
        var prototypeDesc = ObjectGetOwnPropertyDescriptor(prototype, prop);

        if (prototypeDesc) {
          desc = {
            enumerable: true,
            configurable: true
          };
        }
      } // if the descriptor not exists or is not configurable
      // just return


      if (!desc || !desc.configurable) {
        return;
      }

      var onPropPatchedSymbol = zoneSymbol('on' + prop + 'patched');

      if (obj.hasOwnProperty(onPropPatchedSymbol) && obj[onPropPatchedSymbol]) {
        return;
      } // A property descriptor cannot have getter/setter and be writable
      // deleting the writable and value properties avoids this error:
      //
      // TypeError: property descriptors must not specify a value or be writable when a
      // getter or setter has been specified


      delete desc.writable;
      delete desc.value;
      var originalDescGet = desc.get;
      var originalDescSet = desc.set; // substr(2) cuz 'onclick' -> 'click', etc

      var eventName = prop.substr(2);
      var eventNameSymbol = zoneSymbolEventNames[eventName];

      if (!eventNameSymbol) {
        eventNameSymbol = zoneSymbolEventNames[eventName] = zoneSymbol('ON_PROPERTY' + eventName);
      }

      desc.set = function (newValue) {
        // in some of windows's onproperty callback, this is undefined
        // so we need to check it
        var target = this;

        if (!target && obj === _global) {
          target = _global;
        }

        if (!target) {
          return;
        }

        var previousValue = target[eventNameSymbol];

        if (previousValue) {
          target.removeEventListener(eventName, wrapFn);
        } // issue #978, when onload handler was added before loading zone.js
        // we should remove it with originalDescSet


        if (originalDescSet) {
          originalDescSet.apply(target, NULL_ON_PROP_VALUE);
        }

        if (typeof newValue === 'function') {
          target[eventNameSymbol] = newValue;
          target.addEventListener(eventName, wrapFn, false);
        } else {
          target[eventNameSymbol] = null;
        }
      }; // The getter would return undefined for unassigned properties but the default value of an
      // unassigned property is null


      desc.get = function () {
        // in some of windows's onproperty callback, this is undefined
        // so we need to check it
        var target = this;

        if (!target && obj === _global) {
          target = _global;
        }

        if (!target) {
          return null;
        }

        var listener = target[eventNameSymbol];

        if (listener) {
          return listener;
        } else if (originalDescGet) {
          // result will be null when use inline event attribute,
          // such as <button onclick="func();">OK</button>
          // because the onclick function is internal raw uncompiled handler
          // the onclick will be evaluated when first time event was triggered or
          // the property is accessed, https://github.com/angular/zone.js/issues/525
          // so we should use original native get to retrieve the handler
          var value = originalDescGet && originalDescGet.call(this);

          if (value) {
            desc.set.call(this, value);

            if (typeof target[REMOVE_ATTRIBUTE] === 'function') {
              target.removeAttribute(prop);
            }

            return value;
          }
        }

        return null;
      };

      ObjectDefineProperty(obj, prop, desc);
      obj[onPropPatchedSymbol] = true;
    }

    function patchOnProperties(obj, properties, prototype) {
      if (properties) {
        for (var i = 0; i < properties.length; i++) {
          patchProperty(obj, 'on' + properties[i], prototype);
        }
      } else {
        var onProperties = [];

        for (var prop in obj) {
          if (prop.substr(0, 2) == 'on') {
            onProperties.push(prop);
          }
        }

        for (var j = 0; j < onProperties.length; j++) {
          patchProperty(obj, onProperties[j], prototype);
        }
      }
    }

    var originalInstanceKey = zoneSymbol('originalInstance'); // wrap some native API on `window`

    function patchClass(className) {
      var OriginalClass = _global[className];
      if (!OriginalClass) return; // keep original class in global

      _global[zoneSymbol(className)] = OriginalClass;

      _global[className] = function () {
        var a = bindArguments(arguments, className);

        switch (a.length) {
          case 0:
            this[originalInstanceKey] = new OriginalClass();
            break;

          case 1:
            this[originalInstanceKey] = new OriginalClass(a[0]);
            break;

          case 2:
            this[originalInstanceKey] = new OriginalClass(a[0], a[1]);
            break;

          case 3:
            this[originalInstanceKey] = new OriginalClass(a[0], a[1], a[2]);
            break;

          case 4:
            this[originalInstanceKey] = new OriginalClass(a[0], a[1], a[2], a[3]);
            break;

          default:
            throw new Error('Arg list too long.');
        }
      }; // attach original delegate to patched function


      attachOriginToPatched(_global[className], OriginalClass);
      var instance = new OriginalClass(function () {});
      var prop;

      for (prop in instance) {
        // https://bugs.webkit.org/show_bug.cgi?id=44721
        if (className === 'XMLHttpRequest' && prop === 'responseBlob') continue;

        (function (prop) {
          if (typeof instance[prop] === 'function') {
            _global[className].prototype[prop] = function () {
              return this[originalInstanceKey][prop].apply(this[originalInstanceKey], arguments);
            };
          } else {
            ObjectDefineProperty(_global[className].prototype, prop, {
              set: function set(fn) {
                if (typeof fn === 'function') {
                  this[originalInstanceKey][prop] = wrapWithCurrentZone(fn, className + '.' + prop); // keep callback in wrapped function so we can
                  // use it in Function.prototype.toString to return
                  // the native one.

                  attachOriginToPatched(this[originalInstanceKey][prop], fn);
                } else {
                  this[originalInstanceKey][prop] = fn;
                }
              },
              get: function get() {
                return this[originalInstanceKey][prop];
              }
            });
          }
        })(prop);
      }

      for (prop in OriginalClass) {
        if (prop !== 'prototype' && OriginalClass.hasOwnProperty(prop)) {
          _global[className][prop] = OriginalClass[prop];
        }
      }
    }

    function copySymbolProperties(src, dest) {
      if (typeof Object.getOwnPropertySymbols !== 'function') {
        return;
      }

      var symbols = Object.getOwnPropertySymbols(src);
      symbols.forEach(function (symbol) {
        var desc = Object.getOwnPropertyDescriptor(src, symbol);
        Object.defineProperty(dest, symbol, {
          get: function get() {
            return src[symbol];
          },
          set: function set(value) {
            if (desc && (!desc.writable || typeof desc.set !== 'function')) {
              // if src[symbol] is not writable or not have a setter, just return
              return;
            }

            src[symbol] = value;
          },
          enumerable: desc ? desc.enumerable : true,
          configurable: desc ? desc.configurable : true
        });
      });
    }

    var shouldCopySymbolProperties = false;

    function patchMethod(target, name, patchFn) {
      var proto = target;

      while (proto && !proto.hasOwnProperty(name)) {
        proto = ObjectGetPrototypeOf(proto);
      }

      if (!proto && target[name]) {
        // somehow we did not find it, but we can see it. This happens on IE for Window properties.
        proto = target;
      }

      var delegateName = zoneSymbol(name);
      var delegate = null;

      if (proto && !(delegate = proto[delegateName])) {
        delegate = proto[delegateName] = proto[name]; // check whether proto[name] is writable
        // some property is readonly in safari, such as HtmlCanvasElement.prototype.toBlob

        var desc = proto && ObjectGetOwnPropertyDescriptor(proto, name);

        if (isPropertyWritable(desc)) {
          var patchDelegate = patchFn(delegate, delegateName, name);

          proto[name] = function () {
            return patchDelegate(this, arguments);
          };

          attachOriginToPatched(proto[name], delegate);

          if (shouldCopySymbolProperties) {
            copySymbolProperties(delegate, proto[name]);
          }
        }
      }

      return delegate;
    } // TODO: @JiaLiPassion, support cancel task later if necessary


    function patchMacroTask(obj, funcName, metaCreator) {
      var setNative = null;

      function scheduleTask(task) {
        var data = task.data;

        data.args[data.cbIdx] = function () {
          task.invoke.apply(this, arguments);
        };

        setNative.apply(data.target, data.args);
        return task;
      }

      setNative = patchMethod(obj, funcName, function (delegate) {
        return function (self, args) {
          var meta = metaCreator(self, args);

          if (meta.cbIdx >= 0 && typeof args[meta.cbIdx] === 'function') {
            return scheduleMacroTaskWithCurrentZone(meta.name, args[meta.cbIdx], meta, scheduleTask);
          } else {
            // cause an error by calling it directly.
            return delegate.apply(self, args);
          }
        };
      });
    }

    function attachOriginToPatched(patched, original) {
      patched[zoneSymbol('OriginalDelegate')] = original;
    }

    var isDetectedIEOrEdge = false;
    var ieOrEdge = false;

    function isIE() {
      try {
        var ua = internalWindow.navigator.userAgent;

        if (ua.indexOf('MSIE ') !== -1 || ua.indexOf('Trident/') !== -1) {
          return true;
        }
      } catch (error) {}

      return false;
    }

    function isIEOrEdge() {
      if (isDetectedIEOrEdge) {
        return ieOrEdge;
      }

      isDetectedIEOrEdge = true;

      try {
        var ua = internalWindow.navigator.userAgent;

        if (ua.indexOf('MSIE ') !== -1 || ua.indexOf('Trident/') !== -1 || ua.indexOf('Edge/') !== -1) {
          ieOrEdge = true;
        }
      } catch (error) {}

      return ieOrEdge;
    }
    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    // override Function.prototype.toString to make zone.js patched function
    // look like native function


    Zone.__load_patch('toString', function (global) {
      // patch Func.prototype.toString to let them look like native
      var originalFunctionToString = Function.prototype.toString;
      var ORIGINAL_DELEGATE_SYMBOL = zoneSymbol('OriginalDelegate');
      var PROMISE_SYMBOL = zoneSymbol('Promise');
      var ERROR_SYMBOL = zoneSymbol('Error');

      var newFunctionToString = function toString() {
        if (typeof this === 'function') {
          var originalDelegate = this[ORIGINAL_DELEGATE_SYMBOL];

          if (originalDelegate) {
            if (typeof originalDelegate === 'function') {
              return originalFunctionToString.call(originalDelegate);
            } else {
              return Object.prototype.toString.call(originalDelegate);
            }
          }

          if (this === Promise) {
            var nativePromise = global[PROMISE_SYMBOL];

            if (nativePromise) {
              return originalFunctionToString.call(nativePromise);
            }
          }

          if (this === Error) {
            var nativeError = global[ERROR_SYMBOL];

            if (nativeError) {
              return originalFunctionToString.call(nativeError);
            }
          }
        }

        return originalFunctionToString.call(this);
      };

      newFunctionToString[ORIGINAL_DELEGATE_SYMBOL] = originalFunctionToString;
      Function.prototype.toString = newFunctionToString; // patch Object.prototype.toString to let them look like native

      var originalObjectToString = Object.prototype.toString;
      var PROMISE_OBJECT_TO_STRING = '[object Promise]';

      Object.prototype.toString = function () {
        if (this instanceof Promise) {
          return PROMISE_OBJECT_TO_STRING;
        }

        return originalObjectToString.call(this);
      };
    });
    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    /**
     * @fileoverview
     * @suppress {missingRequire}
     */


    var passiveSupported = false;

    if (typeof window !== 'undefined') {
      try {
        var options = Object.defineProperty({}, 'passive', {
          get: function get() {
            passiveSupported = true;
          }
        });
        window.addEventListener('test', options, options);
        window.removeEventListener('test', options, options);
      } catch (err) {
        passiveSupported = false;
      }
    } // an identifier to tell ZoneTask do not create a new invoke closure


    var OPTIMIZED_ZONE_EVENT_TASK_DATA = {
      useG: true
    };
    var zoneSymbolEventNames$1 = {};
    var globalSources = {};
    var EVENT_NAME_SYMBOL_REGX = /^__zone_symbol__(\w+)(true|false)$/;
    var IMMEDIATE_PROPAGATION_SYMBOL = '__zone_symbol__propagationStopped';

    function patchEventTarget(_global, apis, patchOptions) {
      var ADD_EVENT_LISTENER = patchOptions && patchOptions.add || ADD_EVENT_LISTENER_STR;
      var REMOVE_EVENT_LISTENER = patchOptions && patchOptions.rm || REMOVE_EVENT_LISTENER_STR;
      var LISTENERS_EVENT_LISTENER = patchOptions && patchOptions.listeners || 'eventListeners';
      var REMOVE_ALL_LISTENERS_EVENT_LISTENER = patchOptions && patchOptions.rmAll || 'removeAllListeners';
      var zoneSymbolAddEventListener = zoneSymbol(ADD_EVENT_LISTENER);
      var ADD_EVENT_LISTENER_SOURCE = '.' + ADD_EVENT_LISTENER + ':';
      var PREPEND_EVENT_LISTENER = 'prependListener';
      var PREPEND_EVENT_LISTENER_SOURCE = '.' + PREPEND_EVENT_LISTENER + ':';

      var invokeTask = function invokeTask(task, target, event) {
        // for better performance, check isRemoved which is set
        // by removeEventListener
        if (task.isRemoved) {
          return;
        }

        var delegate = task.callback;

        if (typeof delegate === 'object' && delegate.handleEvent) {
          // create the bind version of handleEvent when invoke
          task.callback = function (event) {
            return delegate.handleEvent(event);
          };

          task.originalDelegate = delegate;
        } // invoke static task.invoke


        task.invoke(task, target, [event]);
        var options = task.options;

        if (options && typeof options === 'object' && options.once) {
          // if options.once is true, after invoke once remove listener here
          // only browser need to do this, nodejs eventEmitter will cal removeListener
          // inside EventEmitter.once
          var _delegate = task.originalDelegate ? task.originalDelegate : task.callback;

          target[REMOVE_EVENT_LISTENER].call(target, event.type, _delegate, options);
        }
      }; // global shared zoneAwareCallback to handle all event callback with capture = false


      var globalZoneAwareCallback = function globalZoneAwareCallback(event) {
        // https://github.com/angular/zone.js/issues/911, in IE, sometimes
        // event will be undefined, so we need to use window.event
        event = event || _global.event;

        if (!event) {
          return;
        } // event.target is needed for Samsung TV and SourceBuffer
        // || global is needed https://github.com/angular/zone.js/issues/190


        var target = this || event.target || _global;
        var tasks = target[zoneSymbolEventNames$1[event.type][FALSE_STR]];

        if (tasks) {
          // invoke all tasks which attached to current target with given event.type and capture = false
          // for performance concern, if task.length === 1, just invoke
          if (tasks.length === 1) {
            invokeTask(tasks[0], target, event);
          } else {
            // https://github.com/angular/zone.js/issues/836
            // copy the tasks array before invoke, to avoid
            // the callback will remove itself or other listener
            var copyTasks = tasks.slice();

            for (var i = 0; i < copyTasks.length; i++) {
              if (event && event[IMMEDIATE_PROPAGATION_SYMBOL] === true) {
                break;
              }

              invokeTask(copyTasks[i], target, event);
            }
          }
        }
      }; // global shared zoneAwareCallback to handle all event callback with capture = true


      var globalZoneAwareCaptureCallback = function globalZoneAwareCaptureCallback(event) {
        // https://github.com/angular/zone.js/issues/911, in IE, sometimes
        // event will be undefined, so we need to use window.event
        event = event || _global.event;

        if (!event) {
          return;
        } // event.target is needed for Samsung TV and SourceBuffer
        // || global is needed https://github.com/angular/zone.js/issues/190


        var target = this || event.target || _global;
        var tasks = target[zoneSymbolEventNames$1[event.type][TRUE_STR]];

        if (tasks) {
          // invoke all tasks which attached to current target with given event.type and capture = false
          // for performance concern, if task.length === 1, just invoke
          if (tasks.length === 1) {
            invokeTask(tasks[0], target, event);
          } else {
            // https://github.com/angular/zone.js/issues/836
            // copy the tasks array before invoke, to avoid
            // the callback will remove itself or other listener
            var copyTasks = tasks.slice();

            for (var i = 0; i < copyTasks.length; i++) {
              if (event && event[IMMEDIATE_PROPAGATION_SYMBOL] === true) {
                break;
              }

              invokeTask(copyTasks[i], target, event);
            }
          }
        }
      };

      function patchEventTargetMethods(obj, patchOptions) {
        if (!obj) {
          return false;
        }

        var useGlobalCallback = true;

        if (patchOptions && patchOptions.useG !== undefined) {
          useGlobalCallback = patchOptions.useG;
        }

        var validateHandler = patchOptions && patchOptions.vh;
        var checkDuplicate = true;

        if (patchOptions && patchOptions.chkDup !== undefined) {
          checkDuplicate = patchOptions.chkDup;
        }

        var returnTarget = false;

        if (patchOptions && patchOptions.rt !== undefined) {
          returnTarget = patchOptions.rt;
        }

        var proto = obj;

        while (proto && !proto.hasOwnProperty(ADD_EVENT_LISTENER)) {
          proto = ObjectGetPrototypeOf(proto);
        }

        if (!proto && obj[ADD_EVENT_LISTENER]) {
          // somehow we did not find it, but we can see it. This happens on IE for Window properties.
          proto = obj;
        }

        if (!proto) {
          return false;
        }

        if (proto[zoneSymbolAddEventListener]) {
          return false;
        }

        var eventNameToString = patchOptions && patchOptions.eventNameToString; // a shared global taskData to pass data for scheduleEventTask
        // so we do not need to create a new object just for pass some data

        var taskData = {};
        var nativeAddEventListener = proto[zoneSymbolAddEventListener] = proto[ADD_EVENT_LISTENER];
        var nativeRemoveEventListener = proto[zoneSymbol(REMOVE_EVENT_LISTENER)] = proto[REMOVE_EVENT_LISTENER];
        var nativeListeners = proto[zoneSymbol(LISTENERS_EVENT_LISTENER)] = proto[LISTENERS_EVENT_LISTENER];
        var nativeRemoveAllListeners = proto[zoneSymbol(REMOVE_ALL_LISTENERS_EVENT_LISTENER)] = proto[REMOVE_ALL_LISTENERS_EVENT_LISTENER];
        var nativePrependEventListener;

        if (patchOptions && patchOptions.prepend) {
          nativePrependEventListener = proto[zoneSymbol(patchOptions.prepend)] = proto[patchOptions.prepend];
        }

        function checkIsPassive(task) {
          if (!passiveSupported && typeof taskData.options !== 'boolean' && typeof taskData.options !== 'undefined' && taskData.options !== null) {
            // options is a non-null non-undefined object
            // passive is not supported
            // don't pass options as object
            // just pass capture as a boolean
            task.options = !!taskData.options.capture;
            taskData.options = task.options;
          }
        }

        var customScheduleGlobal = function customScheduleGlobal(task) {
          // if there is already a task for the eventName + capture,
          // just return, because we use the shared globalZoneAwareCallback here.
          if (taskData.isExisting) {
            return;
          }

          checkIsPassive(task);
          return nativeAddEventListener.call(taskData.target, taskData.eventName, taskData.capture ? globalZoneAwareCaptureCallback : globalZoneAwareCallback, taskData.options);
        };

        var customCancelGlobal = function customCancelGlobal(task) {
          // if task is not marked as isRemoved, this call is directly
          // from Zone.prototype.cancelTask, we should remove the task
          // from tasksList of target first
          if (!task.isRemoved) {
            var symbolEventNames = zoneSymbolEventNames$1[task.eventName];
            var symbolEventName;

            if (symbolEventNames) {
              symbolEventName = symbolEventNames[task.capture ? TRUE_STR : FALSE_STR];
            }

            var existingTasks = symbolEventName && task.target[symbolEventName];

            if (existingTasks) {
              for (var i = 0; i < existingTasks.length; i++) {
                var existingTask = existingTasks[i];

                if (existingTask === task) {
                  existingTasks.splice(i, 1); // set isRemoved to data for faster invokeTask check

                  task.isRemoved = true;

                  if (existingTasks.length === 0) {
                    // all tasks for the eventName + capture have gone,
                    // remove globalZoneAwareCallback and remove the task cache from target
                    task.allRemoved = true;
                    task.target[symbolEventName] = null;
                  }

                  break;
                }
              }
            }
          } // if all tasks for the eventName + capture have gone,
          // we will really remove the global event callback,
          // if not, return


          if (!task.allRemoved) {
            return;
          }

          return nativeRemoveEventListener.call(task.target, task.eventName, task.capture ? globalZoneAwareCaptureCallback : globalZoneAwareCallback, task.options);
        };

        var customScheduleNonGlobal = function customScheduleNonGlobal(task) {
          checkIsPassive(task);
          return nativeAddEventListener.call(taskData.target, taskData.eventName, task.invoke, taskData.options);
        };

        var customSchedulePrepend = function customSchedulePrepend(task) {
          return nativePrependEventListener.call(taskData.target, taskData.eventName, task.invoke, taskData.options);
        };

        var customCancelNonGlobal = function customCancelNonGlobal(task) {
          return nativeRemoveEventListener.call(task.target, task.eventName, task.invoke, task.options);
        };

        var customSchedule = useGlobalCallback ? customScheduleGlobal : customScheduleNonGlobal;
        var customCancel = useGlobalCallback ? customCancelGlobal : customCancelNonGlobal;

        var compareTaskCallbackVsDelegate = function compareTaskCallbackVsDelegate(task, delegate) {
          var typeOfDelegate = typeof delegate;
          return typeOfDelegate === 'function' && task.callback === delegate || typeOfDelegate === 'object' && task.originalDelegate === delegate;
        };

        var compare = patchOptions && patchOptions.diff ? patchOptions.diff : compareTaskCallbackVsDelegate;

        var blackListedEvents = Zone[Zone.__symbol__('BLACK_LISTED_EVENTS')];

        var makeAddListener = function makeAddListener(nativeListener, addSource, customScheduleFn, customCancelFn) {
          var returnTarget = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
          var prepend = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : false;
          return function () {
            var target = this || _global;
            var eventName = arguments[0];
            var delegate = arguments[1];

            if (!delegate) {
              return nativeListener.apply(this, arguments);
            }

            if (isNode && eventName === 'uncaughtException') {
              // don't patch uncaughtException of nodejs to prevent endless loop
              return nativeListener.apply(this, arguments);
            } // don't create the bind delegate function for handleEvent
            // case here to improve addEventListener performance
            // we will create the bind delegate when invoke


            var isHandleEvent = false;

            if (typeof delegate !== 'function') {
              if (!delegate.handleEvent) {
                return nativeListener.apply(this, arguments);
              }

              isHandleEvent = true;
            }

            if (validateHandler && !validateHandler(nativeListener, delegate, target, arguments)) {
              return;
            }

            var options = arguments[2];

            if (blackListedEvents) {
              // check black list
              for (var i = 0; i < blackListedEvents.length; i++) {
                if (eventName === blackListedEvents[i]) {
                  return nativeListener.apply(this, arguments);
                }
              }
            }

            var capture;
            var once = false;

            if (options === undefined) {
              capture = false;
            } else if (options === true) {
              capture = true;
            } else if (options === false) {
              capture = false;
            } else {
              capture = options ? !!options.capture : false;
              once = options ? !!options.once : false;
            }

            var zone = Zone.current;
            var symbolEventNames = zoneSymbolEventNames$1[eventName];
            var symbolEventName;

            if (!symbolEventNames) {
              // the code is duplicate, but I just want to get some better performance
              var falseEventName = (eventNameToString ? eventNameToString(eventName) : eventName) + FALSE_STR;
              var trueEventName = (eventNameToString ? eventNameToString(eventName) : eventName) + TRUE_STR;
              var symbol = ZONE_SYMBOL_PREFIX + falseEventName;
              var symbolCapture = ZONE_SYMBOL_PREFIX + trueEventName;
              zoneSymbolEventNames$1[eventName] = {};
              zoneSymbolEventNames$1[eventName][FALSE_STR] = symbol;
              zoneSymbolEventNames$1[eventName][TRUE_STR] = symbolCapture;
              symbolEventName = capture ? symbolCapture : symbol;
            } else {
              symbolEventName = symbolEventNames[capture ? TRUE_STR : FALSE_STR];
            }

            var existingTasks = target[symbolEventName];
            var isExisting = false;

            if (existingTasks) {
              // already have task registered
              isExisting = true;

              if (checkDuplicate) {
                for (var _i = 0; _i < existingTasks.length; _i++) {
                  if (compare(existingTasks[_i], delegate)) {
                    // same callback, same capture, same event name, just return
                    return;
                  }
                }
              }
            } else {
              existingTasks = target[symbolEventName] = [];
            }

            var source;
            var constructorName = target.constructor['name'];
            var targetSource = globalSources[constructorName];

            if (targetSource) {
              source = targetSource[eventName];
            }

            if (!source) {
              source = constructorName + addSource + (eventNameToString ? eventNameToString(eventName) : eventName);
            } // do not create a new object as task.data to pass those things
            // just use the global shared one


            taskData.options = options;

            if (once) {
              // if addEventListener with once options, we don't pass it to
              // native addEventListener, instead we keep the once setting
              // and handle ourselves.
              taskData.options.once = false;
            }

            taskData.target = target;
            taskData.capture = capture;
            taskData.eventName = eventName;
            taskData.isExisting = isExisting;
            var data = useGlobalCallback ? OPTIMIZED_ZONE_EVENT_TASK_DATA : undefined; // keep taskData into data to allow onScheduleEventTask to access the task information

            if (data) {
              data.taskData = taskData;
            }

            var task = zone.scheduleEventTask(source, delegate, data, customScheduleFn, customCancelFn); // should clear taskData.target to avoid memory leak
            // issue, https://github.com/angular/angular/issues/20442

            taskData.target = null; // need to clear up taskData because it is a global object

            if (data) {
              data.taskData = null;
            } // have to save those information to task in case
            // application may call task.zone.cancelTask() directly


            if (once) {
              options.once = true;
            }

            if (!(!passiveSupported && typeof task.options === 'boolean')) {
              // if not support passive, and we pass an option object
              // to addEventListener, we should save the options to task
              task.options = options;
            }

            task.target = target;
            task.capture = capture;
            task.eventName = eventName;

            if (isHandleEvent) {
              // save original delegate for compare to check duplicate
              task.originalDelegate = delegate;
            }

            if (!prepend) {
              existingTasks.push(task);
            } else {
              existingTasks.unshift(task);
            }

            if (returnTarget) {
              return target;
            }
          };
        };

        proto[ADD_EVENT_LISTENER] = makeAddListener(nativeAddEventListener, ADD_EVENT_LISTENER_SOURCE, customSchedule, customCancel, returnTarget);

        if (nativePrependEventListener) {
          proto[PREPEND_EVENT_LISTENER] = makeAddListener(nativePrependEventListener, PREPEND_EVENT_LISTENER_SOURCE, customSchedulePrepend, customCancel, returnTarget, true);
        }

        proto[REMOVE_EVENT_LISTENER] = function () {
          var target = this || _global;
          var eventName = arguments[0];
          var options = arguments[2];
          var capture;

          if (options === undefined) {
            capture = false;
          } else if (options === true) {
            capture = true;
          } else if (options === false) {
            capture = false;
          } else {
            capture = options ? !!options.capture : false;
          }

          var delegate = arguments[1];

          if (!delegate) {
            return nativeRemoveEventListener.apply(this, arguments);
          }

          if (validateHandler && !validateHandler(nativeRemoveEventListener, delegate, target, arguments)) {
            return;
          }

          var symbolEventNames = zoneSymbolEventNames$1[eventName];
          var symbolEventName;

          if (symbolEventNames) {
            symbolEventName = symbolEventNames[capture ? TRUE_STR : FALSE_STR];
          }

          var existingTasks = symbolEventName && target[symbolEventName];

          if (existingTasks) {
            for (var i = 0; i < existingTasks.length; i++) {
              var existingTask = existingTasks[i];

              if (compare(existingTask, delegate)) {
                existingTasks.splice(i, 1); // set isRemoved to data for faster invokeTask check

                existingTask.isRemoved = true;

                if (existingTasks.length === 0) {
                  // all tasks for the eventName + capture have gone,
                  // remove globalZoneAwareCallback and remove the task cache from target
                  existingTask.allRemoved = true;
                  target[symbolEventName] = null;
                }

                existingTask.zone.cancelTask(existingTask);

                if (returnTarget) {
                  return target;
                }

                return;
              }
            }
          } // issue 930, didn't find the event name or callback
          // from zone kept existingTasks, the callback maybe
          // added outside of zone, we need to call native removeEventListener
          // to try to remove it.


          return nativeRemoveEventListener.apply(this, arguments);
        };

        proto[LISTENERS_EVENT_LISTENER] = function () {
          var target = this || _global;
          var eventName = arguments[0];
          var listeners = [];
          var tasks = findEventTasks(target, eventNameToString ? eventNameToString(eventName) : eventName);

          for (var i = 0; i < tasks.length; i++) {
            var task = tasks[i];
            var delegate = task.originalDelegate ? task.originalDelegate : task.callback;
            listeners.push(delegate);
          }

          return listeners;
        };

        proto[REMOVE_ALL_LISTENERS_EVENT_LISTENER] = function () {
          var target = this || _global;
          var eventName = arguments[0];

          if (!eventName) {
            var keys = Object.keys(target);

            for (var i = 0; i < keys.length; i++) {
              var prop = keys[i];
              var match = EVENT_NAME_SYMBOL_REGX.exec(prop);
              var evtName = match && match[1]; // in nodejs EventEmitter, removeListener event is
              // used for monitoring the removeListener call,
              // so just keep removeListener eventListener until
              // all other eventListeners are removed

              if (evtName && evtName !== 'removeListener') {
                this[REMOVE_ALL_LISTENERS_EVENT_LISTENER].call(this, evtName);
              }
            } // remove removeListener listener finally


            this[REMOVE_ALL_LISTENERS_EVENT_LISTENER].call(this, 'removeListener');
          } else {
            var symbolEventNames = zoneSymbolEventNames$1[eventName];

            if (symbolEventNames) {
              var symbolEventName = symbolEventNames[FALSE_STR];
              var symbolCaptureEventName = symbolEventNames[TRUE_STR];
              var tasks = target[symbolEventName];
              var captureTasks = target[symbolCaptureEventName];

              if (tasks) {
                var removeTasks = tasks.slice();

                for (var _i2 = 0; _i2 < removeTasks.length; _i2++) {
                  var task = removeTasks[_i2];
                  var delegate = task.originalDelegate ? task.originalDelegate : task.callback;
                  this[REMOVE_EVENT_LISTENER].call(this, eventName, delegate, task.options);
                }
              }

              if (captureTasks) {
                var _removeTasks = captureTasks.slice();

                for (var _i3 = 0; _i3 < _removeTasks.length; _i3++) {
                  var _task = _removeTasks[_i3];

                  var _delegate2 = _task.originalDelegate ? _task.originalDelegate : _task.callback;

                  this[REMOVE_EVENT_LISTENER].call(this, eventName, _delegate2, _task.options);
                }
              }
            }
          }

          if (returnTarget) {
            return this;
          }
        }; // for native toString patch


        attachOriginToPatched(proto[ADD_EVENT_LISTENER], nativeAddEventListener);
        attachOriginToPatched(proto[REMOVE_EVENT_LISTENER], nativeRemoveEventListener);

        if (nativeRemoveAllListeners) {
          attachOriginToPatched(proto[REMOVE_ALL_LISTENERS_EVENT_LISTENER], nativeRemoveAllListeners);
        }

        if (nativeListeners) {
          attachOriginToPatched(proto[LISTENERS_EVENT_LISTENER], nativeListeners);
        }

        return true;
      }

      var results = [];

      for (var i = 0; i < apis.length; i++) {
        results[i] = patchEventTargetMethods(apis[i], patchOptions);
      }

      return results;
    }

    function findEventTasks(target, eventName) {
      var foundTasks = [];

      for (var prop in target) {
        var match = EVENT_NAME_SYMBOL_REGX.exec(prop);
        var evtName = match && match[1];

        if (evtName && (!eventName || evtName === eventName)) {
          var tasks = target[prop];

          if (tasks) {
            for (var i = 0; i < tasks.length; i++) {
              foundTasks.push(tasks[i]);
            }
          }
        }
      }

      return foundTasks;
    }

    function patchEventPrototype(global, api) {
      var Event = global['Event'];

      if (Event && Event.prototype) {
        api.patchMethod(Event.prototype, 'stopImmediatePropagation', function (delegate) {
          return function (self, args) {
            self[IMMEDIATE_PROPAGATION_SYMBOL] = true; // we need to call the native stopImmediatePropagation
            // in case in some hybrid application, some part of
            // application will be controlled by zone, some are not

            delegate && delegate.apply(self, args);
          };
        });
      }
    }
    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */


    function patchCallbacks(api, target, targetName, method, callbacks) {
      var symbol = Zone.__symbol__(method);

      if (target[symbol]) {
        return;
      }

      var nativeDelegate = target[symbol] = target[method];

      target[method] = function (name, opts, options) {
        if (opts && opts.prototype) {
          callbacks.forEach(function (callback) {
            var source = "".concat(targetName, ".").concat(method, "::") + callback;
            var prototype = opts.prototype;

            if (prototype.hasOwnProperty(callback)) {
              var descriptor = api.ObjectGetOwnPropertyDescriptor(prototype, callback);

              if (descriptor && descriptor.value) {
                descriptor.value = api.wrapWithCurrentZone(descriptor.value, source);

                api._redefineProperty(opts.prototype, callback, descriptor);
              } else if (prototype[callback]) {
                prototype[callback] = api.wrapWithCurrentZone(prototype[callback], source);
              }
            } else if (prototype[callback]) {
              prototype[callback] = api.wrapWithCurrentZone(prototype[callback], source);
            }
          });
        }

        return nativeDelegate.call(target, name, opts, options);
      };

      api.attachOriginToPatched(target[method], nativeDelegate);
    }
    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    /*
     * This is necessary for Chrome and Chrome mobile, to enable
     * things like redefining `createdCallback` on an element.
     */


    var zoneSymbol$1 = Zone.__symbol__;

    var _defineProperty = Object[zoneSymbol$1('defineProperty')] = Object.defineProperty;

    var _getOwnPropertyDescriptor = Object[zoneSymbol$1('getOwnPropertyDescriptor')] = Object.getOwnPropertyDescriptor;

    var _create = Object.create;
    var unconfigurablesKey = zoneSymbol$1('unconfigurables');

    function propertyPatch() {
      Object.defineProperty = function (obj, prop, desc) {
        if (isUnconfigurable(obj, prop)) {
          throw new TypeError('Cannot assign to read only property \'' + prop + '\' of ' + obj);
        }

        var originalConfigurableFlag = desc.configurable;

        if (prop !== 'prototype') {
          desc = rewriteDescriptor(obj, prop, desc);
        }

        return _tryDefineProperty(obj, prop, desc, originalConfigurableFlag);
      };

      Object.defineProperties = function (obj, props) {
        Object.keys(props).forEach(function (prop) {
          Object.defineProperty(obj, prop, props[prop]);
        });
        return obj;
      };

      Object.create = function (obj, proto) {
        if (typeof proto === 'object' && !Object.isFrozen(proto)) {
          Object.keys(proto).forEach(function (prop) {
            proto[prop] = rewriteDescriptor(obj, prop, proto[prop]);
          });
        }

        return _create(obj, proto);
      };

      Object.getOwnPropertyDescriptor = function (obj, prop) {
        var desc = _getOwnPropertyDescriptor(obj, prop);

        if (desc && isUnconfigurable(obj, prop)) {
          desc.configurable = false;
        }

        return desc;
      };
    }

    function _redefineProperty(obj, prop, desc) {
      var originalConfigurableFlag = desc.configurable;
      desc = rewriteDescriptor(obj, prop, desc);
      return _tryDefineProperty(obj, prop, desc, originalConfigurableFlag);
    }

    function isUnconfigurable(obj, prop) {
      return obj && obj[unconfigurablesKey] && obj[unconfigurablesKey][prop];
    }

    function rewriteDescriptor(obj, prop, desc) {
      // issue-927, if the desc is frozen, don't try to change the desc
      if (!Object.isFrozen(desc)) {
        desc.configurable = true;
      }

      if (!desc.configurable) {
        // issue-927, if the obj is frozen, don't try to set the desc to obj
        if (!obj[unconfigurablesKey] && !Object.isFrozen(obj)) {
          _defineProperty(obj, unconfigurablesKey, {
            writable: true,
            value: {}
          });
        }

        if (obj[unconfigurablesKey]) {
          obj[unconfigurablesKey][prop] = true;
        }
      }

      return desc;
    }

    function _tryDefineProperty(obj, prop, desc, originalConfigurableFlag) {
      try {
        return _defineProperty(obj, prop, desc);
      } catch (error) {
        if (desc.configurable) {
          // In case of errors, when the configurable flag was likely set by rewriteDescriptor(), let's
          // retry with the original flag value
          if (typeof originalConfigurableFlag == 'undefined') {
            delete desc.configurable;
          } else {
            desc.configurable = originalConfigurableFlag;
          }

          try {
            return _defineProperty(obj, prop, desc);
          } catch (error) {
            var descJson = null;

            try {
              descJson = JSON.stringify(desc);
            } catch (error) {
              descJson = desc.toString();
            }

            console.log("Attempting to configure '".concat(prop, "' with descriptor '").concat(descJson, "' on object '").concat(obj, "' and got error, giving up: ").concat(error));
          }
        } else {
          throw error;
        }
      }
    }
    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    /**
     * @fileoverview
     * @suppress {globalThis}
     */


    var globalEventHandlersEventNames = ['abort', 'animationcancel', 'animationend', 'animationiteration', 'auxclick', 'beforeinput', 'blur', 'cancel', 'canplay', 'canplaythrough', 'change', 'compositionstart', 'compositionupdate', 'compositionend', 'cuechange', 'click', 'close', 'contextmenu', 'curechange', 'dblclick', 'drag', 'dragend', 'dragenter', 'dragexit', 'dragleave', 'dragover', 'drop', 'durationchange', 'emptied', 'ended', 'error', 'focus', 'focusin', 'focusout', 'gotpointercapture', 'input', 'invalid', 'keydown', 'keypress', 'keyup', 'load', 'loadstart', 'loadeddata', 'loadedmetadata', 'lostpointercapture', 'mousedown', 'mouseenter', 'mouseleave', 'mousemove', 'mouseout', 'mouseover', 'mouseup', 'mousewheel', 'orientationchange', 'pause', 'play', 'playing', 'pointercancel', 'pointerdown', 'pointerenter', 'pointerleave', 'pointerlockchange', 'mozpointerlockchange', 'webkitpointerlockerchange', 'pointerlockerror', 'mozpointerlockerror', 'webkitpointerlockerror', 'pointermove', 'pointout', 'pointerover', 'pointerup', 'progress', 'ratechange', 'reset', 'resize', 'scroll', 'seeked', 'seeking', 'select', 'selectionchange', 'selectstart', 'show', 'sort', 'stalled', 'submit', 'suspend', 'timeupdate', 'volumechange', 'touchcancel', 'touchmove', 'touchstart', 'touchend', 'transitioncancel', 'transitionend', 'waiting', 'wheel'];
    var documentEventNames = ['afterscriptexecute', 'beforescriptexecute', 'DOMContentLoaded', 'freeze', 'fullscreenchange', 'mozfullscreenchange', 'webkitfullscreenchange', 'msfullscreenchange', 'fullscreenerror', 'mozfullscreenerror', 'webkitfullscreenerror', 'msfullscreenerror', 'readystatechange', 'visibilitychange', 'resume'];
    var windowEventNames = ['absolutedeviceorientation', 'afterinput', 'afterprint', 'appinstalled', 'beforeinstallprompt', 'beforeprint', 'beforeunload', 'devicelight', 'devicemotion', 'deviceorientation', 'deviceorientationabsolute', 'deviceproximity', 'hashchange', 'languagechange', 'message', 'mozbeforepaint', 'offline', 'online', 'paint', 'pageshow', 'pagehide', 'popstate', 'rejectionhandled', 'storage', 'unhandledrejection', 'unload', 'userproximity', 'vrdisplyconnected', 'vrdisplaydisconnected', 'vrdisplaypresentchange'];
    var htmlElementEventNames = ['beforecopy', 'beforecut', 'beforepaste', 'copy', 'cut', 'paste', 'dragstart', 'loadend', 'animationstart', 'search', 'transitionrun', 'transitionstart', 'webkitanimationend', 'webkitanimationiteration', 'webkitanimationstart', 'webkittransitionend'];
    var mediaElementEventNames = ['encrypted', 'waitingforkey', 'msneedkey', 'mozinterruptbegin', 'mozinterruptend'];
    var ieElementEventNames = ['activate', 'afterupdate', 'ariarequest', 'beforeactivate', 'beforedeactivate', 'beforeeditfocus', 'beforeupdate', 'cellchange', 'controlselect', 'dataavailable', 'datasetchanged', 'datasetcomplete', 'errorupdate', 'filterchange', 'layoutcomplete', 'losecapture', 'move', 'moveend', 'movestart', 'propertychange', 'resizeend', 'resizestart', 'rowenter', 'rowexit', 'rowsdelete', 'rowsinserted', 'command', 'compassneedscalibration', 'deactivate', 'help', 'mscontentzoom', 'msmanipulationstatechanged', 'msgesturechange', 'msgesturedoubletap', 'msgestureend', 'msgesturehold', 'msgesturestart', 'msgesturetap', 'msgotpointercapture', 'msinertiastart', 'mslostpointercapture', 'mspointercancel', 'mspointerdown', 'mspointerenter', 'mspointerhover', 'mspointerleave', 'mspointermove', 'mspointerout', 'mspointerover', 'mspointerup', 'pointerout', 'mssitemodejumplistitemremoved', 'msthumbnailclick', 'stop', 'storagecommit'];
    var webglEventNames = ['webglcontextrestored', 'webglcontextlost', 'webglcontextcreationerror'];
    var formEventNames = ['autocomplete', 'autocompleteerror'];
    var detailEventNames = ['toggle'];
    var frameEventNames = ['load'];
    var frameSetEventNames = ['blur', 'error', 'focus', 'load', 'resize', 'scroll', 'messageerror'];
    var marqueeEventNames = ['bounce', 'finish', 'start'];
    var XMLHttpRequestEventNames = ['loadstart', 'progress', 'abort', 'error', 'load', 'progress', 'timeout', 'loadend', 'readystatechange'];
    var IDBIndexEventNames = ['upgradeneeded', 'complete', 'abort', 'success', 'error', 'blocked', 'versionchange', 'close'];
    var websocketEventNames = ['close', 'error', 'open', 'message'];
    var workerEventNames = ['error', 'message'];
    var eventNames = globalEventHandlersEventNames.concat(webglEventNames, formEventNames, detailEventNames, documentEventNames, windowEventNames, htmlElementEventNames, ieElementEventNames);

    function filterProperties(target, onProperties, ignoreProperties) {
      if (!ignoreProperties || ignoreProperties.length === 0) {
        return onProperties;
      }

      var tip = ignoreProperties.filter(function (ip) {
        return ip.target === target;
      });

      if (!tip || tip.length === 0) {
        return onProperties;
      }

      var targetIgnoreProperties = tip[0].ignoreProperties;
      return onProperties.filter(function (op) {
        return targetIgnoreProperties.indexOf(op) === -1;
      });
    }

    function patchFilteredProperties(target, onProperties, ignoreProperties, prototype) {
      // check whether target is available, sometimes target will be undefined
      // because different browser or some 3rd party plugin.
      if (!target) {
        return;
      }

      var filteredProperties = filterProperties(target, onProperties, ignoreProperties);
      patchOnProperties(target, filteredProperties, prototype);
    }

    function propertyDescriptorPatch(api, _global) {
      if (isNode && !isMix) {
        return;
      }

      if (Zone[api.symbol('patchEvents')]) {
        // events are already been patched by legacy patch.
        return;
      }

      var supportsWebSocket = typeof WebSocket !== 'undefined';
      var ignoreProperties = _global['__Zone_ignore_on_properties']; // for browsers that we can patch the descriptor:  Chrome & Firefox

      if (isBrowser) {
        var _internalWindow = window;
        var ignoreErrorProperties = isIE ? [{
          target: _internalWindow,
          ignoreProperties: ['error']
        }] : []; // in IE/Edge, onProp not exist in window object, but in WindowPrototype
        // so we need to pass WindowPrototype to check onProp exist or not

        patchFilteredProperties(_internalWindow, eventNames.concat(['messageerror']), ignoreProperties ? ignoreProperties.concat(ignoreErrorProperties) : ignoreProperties, ObjectGetPrototypeOf(_internalWindow));
        patchFilteredProperties(Document.prototype, eventNames, ignoreProperties);

        if (typeof _internalWindow['SVGElement'] !== 'undefined') {
          patchFilteredProperties(_internalWindow['SVGElement'].prototype, eventNames, ignoreProperties);
        }

        patchFilteredProperties(Element.prototype, eventNames, ignoreProperties);
        patchFilteredProperties(HTMLElement.prototype, eventNames, ignoreProperties);
        patchFilteredProperties(HTMLMediaElement.prototype, mediaElementEventNames, ignoreProperties);
        patchFilteredProperties(HTMLFrameSetElement.prototype, windowEventNames.concat(frameSetEventNames), ignoreProperties);
        patchFilteredProperties(HTMLBodyElement.prototype, windowEventNames.concat(frameSetEventNames), ignoreProperties);
        patchFilteredProperties(HTMLFrameElement.prototype, frameEventNames, ignoreProperties);
        patchFilteredProperties(HTMLIFrameElement.prototype, frameEventNames, ignoreProperties);
        var HTMLMarqueeElement = _internalWindow['HTMLMarqueeElement'];

        if (HTMLMarqueeElement) {
          patchFilteredProperties(HTMLMarqueeElement.prototype, marqueeEventNames, ignoreProperties);
        }

        var Worker = _internalWindow['Worker'];

        if (Worker) {
          patchFilteredProperties(Worker.prototype, workerEventNames, ignoreProperties);
        }
      }

      var XMLHttpRequest = _global['XMLHttpRequest'];

      if (XMLHttpRequest) {
        // XMLHttpRequest is not available in ServiceWorker, so we need to check here
        patchFilteredProperties(XMLHttpRequest.prototype, XMLHttpRequestEventNames, ignoreProperties);
      }

      var XMLHttpRequestEventTarget = _global['XMLHttpRequestEventTarget'];

      if (XMLHttpRequestEventTarget) {
        patchFilteredProperties(XMLHttpRequestEventTarget && XMLHttpRequestEventTarget.prototype, XMLHttpRequestEventNames, ignoreProperties);
      }

      if (typeof IDBIndex !== 'undefined') {
        patchFilteredProperties(IDBIndex.prototype, IDBIndexEventNames, ignoreProperties);
        patchFilteredProperties(IDBRequest.prototype, IDBIndexEventNames, ignoreProperties);
        patchFilteredProperties(IDBOpenDBRequest.prototype, IDBIndexEventNames, ignoreProperties);
        patchFilteredProperties(IDBDatabase.prototype, IDBIndexEventNames, ignoreProperties);
        patchFilteredProperties(IDBTransaction.prototype, IDBIndexEventNames, ignoreProperties);
        patchFilteredProperties(IDBCursor.prototype, IDBIndexEventNames, ignoreProperties);
      }

      if (supportsWebSocket) {
        patchFilteredProperties(WebSocket.prototype, websocketEventNames, ignoreProperties);
      }
    }
    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */


    Zone.__load_patch('util', function (global, Zone, api) {
      api.patchOnProperties = patchOnProperties;
      api.patchMethod = patchMethod;
      api.bindArguments = bindArguments;
      api.patchMacroTask = patchMacroTask; // In earlier version of zone.js (<0.9.0), we use env name `__zone_symbol__BLACK_LISTED_EVENTS` to
      // define which events will not be patched by `Zone.js`.
      // In newer version (>=0.9.0), we change the env name to `__zone_symbol__UNPATCHED_EVENTS` to keep
      // the name consistent with angular repo.
      // The  `__zone_symbol__BLACK_LISTED_EVENTS` is deprecated, but it is still be supported for
      // backwards compatibility.

      var SYMBOL_BLACK_LISTED_EVENTS = Zone.__symbol__('BLACK_LISTED_EVENTS');

      var SYMBOL_UNPATCHED_EVENTS = Zone.__symbol__('UNPATCHED_EVENTS');

      if (global[SYMBOL_UNPATCHED_EVENTS]) {
        global[SYMBOL_BLACK_LISTED_EVENTS] = global[SYMBOL_UNPATCHED_EVENTS];
      }

      if (global[SYMBOL_BLACK_LISTED_EVENTS]) {
        Zone[SYMBOL_BLACK_LISTED_EVENTS] = Zone[SYMBOL_UNPATCHED_EVENTS] = global[SYMBOL_BLACK_LISTED_EVENTS];
      }

      api.patchEventPrototype = patchEventPrototype;
      api.patchEventTarget = patchEventTarget;
      api.isIEOrEdge = isIEOrEdge;
      api.ObjectDefineProperty = ObjectDefineProperty;
      api.ObjectGetOwnPropertyDescriptor = ObjectGetOwnPropertyDescriptor;
      api.ObjectCreate = ObjectCreate;
      api.ArraySlice = ArraySlice;
      api.patchClass = patchClass;
      api.wrapWithCurrentZone = wrapWithCurrentZone;
      api.filterProperties = filterProperties;
      api.attachOriginToPatched = attachOriginToPatched;
      api._redefineProperty = _redefineProperty;
      api.patchCallbacks = patchCallbacks;

      api.getGlobalObjects = function () {
        return {
          globalSources: globalSources,
          zoneSymbolEventNames: zoneSymbolEventNames$1,
          eventNames: eventNames,
          isBrowser: isBrowser,
          isMix: isMix,
          isNode: isNode,
          TRUE_STR: TRUE_STR,
          FALSE_STR: FALSE_STR,
          ZONE_SYMBOL_PREFIX: ZONE_SYMBOL_PREFIX,
          ADD_EVENT_LISTENER_STR: ADD_EVENT_LISTENER_STR,
          REMOVE_EVENT_LISTENER_STR: REMOVE_EVENT_LISTENER_STR
        };
      };
    });
    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    /**
     * @fileoverview
     * @suppress {missingRequire}
     */


    var taskSymbol = zoneSymbol('zoneTask');

    function patchTimer(window, setName, cancelName, nameSuffix) {
      var setNative = null;
      var clearNative = null;
      setName += nameSuffix;
      cancelName += nameSuffix;
      var tasksByHandleId = {};

      function scheduleTask(task) {
        var data = task.data;

        function timer() {
          try {
            task.invoke.apply(this, arguments);
          } finally {
            // issue-934, task will be cancelled
            // even it is a periodic task such as
            // setInterval
            if (!(task.data && task.data.isPeriodic)) {
              if (typeof data.handleId === 'number') {
                // in non-nodejs env, we remove timerId
                // from local cache
                delete tasksByHandleId[data.handleId];
              } else if (data.handleId) {
                // Node returns complex objects as handleIds
                // we remove task reference from timer object
                data.handleId[taskSymbol] = null;
              }
            }
          }
        }

        data.args[0] = timer;
        data.handleId = setNative.apply(window, data.args);
        return task;
      }

      function clearTask(task) {
        return clearNative(task.data.handleId);
      }

      setNative = patchMethod(window, setName, function (delegate) {
        return function (self, args) {
          if (typeof args[0] === 'function') {
            var _options = {
              isPeriodic: nameSuffix === 'Interval',
              delay: nameSuffix === 'Timeout' || nameSuffix === 'Interval' ? args[1] || 0 : undefined,
              args: args
            };
            var task = scheduleMacroTaskWithCurrentZone(setName, args[0], _options, scheduleTask, clearTask);

            if (!task) {
              return task;
            } // Node.js must additionally support the ref and unref functions.


            var handle = task.data.handleId;

            if (typeof handle === 'number') {
              // for non nodejs env, we save handleId: task
              // mapping in local cache for clearTimeout
              tasksByHandleId[handle] = task;
            } else if (handle) {
              // for nodejs env, we save task
              // reference in timerId Object for clearTimeout
              handle[taskSymbol] = task;
            } // check whether handle is null, because some polyfill or browser
            // may return undefined from setTimeout/setInterval/setImmediate/requestAnimationFrame


            if (handle && handle.ref && handle.unref && typeof handle.ref === 'function' && typeof handle.unref === 'function') {
              task.ref = handle.ref.bind(handle);
              task.unref = handle.unref.bind(handle);
            }

            if (typeof handle === 'number' || handle) {
              return handle;
            }

            return task;
          } else {
            // cause an error by calling it directly.
            return delegate.apply(window, args);
          }
        };
      });
      clearNative = patchMethod(window, cancelName, function (delegate) {
        return function (self, args) {
          var id = args[0];
          var task;

          if (typeof id === 'number') {
            // non nodejs env.
            task = tasksByHandleId[id];
          } else {
            // nodejs env.
            task = id && id[taskSymbol]; // other environments.

            if (!task) {
              task = id;
            }
          }

          if (task && typeof task.type === 'string') {
            if (task.state !== 'notScheduled' && (task.cancelFn && task.data.isPeriodic || task.runCount === 0)) {
              if (typeof id === 'number') {
                delete tasksByHandleId[id];
              } else if (id) {
                id[taskSymbol] = null;
              } // Do not cancel already canceled functions


              task.zone.cancelTask(task);
            }
          } else {
            // cause an error by calling it directly.
            delegate.apply(window, args);
          }
        };
      });
    }
    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */


    function patchCustomElements(_global, api) {
      var _api$getGlobalObjects = api.getGlobalObjects(),
          isBrowser = _api$getGlobalObjects.isBrowser,
          isMix = _api$getGlobalObjects.isMix;

      if (!isBrowser && !isMix || !_global['customElements'] || !('customElements' in _global)) {
        return;
      }

      var callbacks = ['connectedCallback', 'disconnectedCallback', 'adoptedCallback', 'attributeChangedCallback'];
      api.patchCallbacks(api, _global.customElements, 'customElements', 'define', callbacks);
    }
    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */


    function eventTargetPatch(_global, api) {
      if (Zone[api.symbol('patchEventTarget')]) {
        // EventTarget is already patched.
        return;
      }

      var _api$getGlobalObjects2 = api.getGlobalObjects(),
          eventNames = _api$getGlobalObjects2.eventNames,
          zoneSymbolEventNames = _api$getGlobalObjects2.zoneSymbolEventNames,
          TRUE_STR = _api$getGlobalObjects2.TRUE_STR,
          FALSE_STR = _api$getGlobalObjects2.FALSE_STR,
          ZONE_SYMBOL_PREFIX = _api$getGlobalObjects2.ZONE_SYMBOL_PREFIX; //  predefine all __zone_symbol__ + eventName + true/false string


      for (var i = 0; i < eventNames.length; i++) {
        var eventName = eventNames[i];
        var falseEventName = eventName + FALSE_STR;
        var trueEventName = eventName + TRUE_STR;
        var symbol = ZONE_SYMBOL_PREFIX + falseEventName;
        var symbolCapture = ZONE_SYMBOL_PREFIX + trueEventName;
        zoneSymbolEventNames[eventName] = {};
        zoneSymbolEventNames[eventName][FALSE_STR] = symbol;
        zoneSymbolEventNames[eventName][TRUE_STR] = symbolCapture;
      }

      var EVENT_TARGET = _global['EventTarget'];

      if (!EVENT_TARGET || !EVENT_TARGET.prototype) {
        return;
      }

      api.patchEventTarget(_global, [EVENT_TARGET && EVENT_TARGET.prototype]);
      return true;
    }

    function patchEvent(global, api) {
      api.patchEventPrototype(global, api);
    }
    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    /**
     * @fileoverview
     * @suppress {missingRequire}
     */


    Zone.__load_patch('legacy', function (global) {
      var legacyPatch = global[Zone.__symbol__('legacyPatch')];

      if (legacyPatch) {
        legacyPatch();
      }
    });

    Zone.__load_patch('timers', function (global) {
      var set = 'set';
      var clear = 'clear';
      patchTimer(global, set, clear, 'Timeout');
      patchTimer(global, set, clear, 'Interval');
      patchTimer(global, set, clear, 'Immediate');
    });

    Zone.__load_patch('requestAnimationFrame', function (global) {
      patchTimer(global, 'request', 'cancel', 'AnimationFrame');
      patchTimer(global, 'mozRequest', 'mozCancel', 'AnimationFrame');
      patchTimer(global, 'webkitRequest', 'webkitCancel', 'AnimationFrame');
    });

    Zone.__load_patch('blocking', function (global, Zone) {
      var blockingMethods = ['alert', 'prompt', 'confirm'];

      for (var i = 0; i < blockingMethods.length; i++) {
        var name = blockingMethods[i];
        patchMethod(global, name, function (delegate, symbol, name) {
          return function (s, args) {
            return Zone.current.run(delegate, global, args, name);
          };
        });
      }
    });

    Zone.__load_patch('EventTarget', function (global, Zone, api) {
      patchEvent(global, api);
      eventTargetPatch(global, api); // patch XMLHttpRequestEventTarget's addEventListener/removeEventListener

      var XMLHttpRequestEventTarget = global['XMLHttpRequestEventTarget'];

      if (XMLHttpRequestEventTarget && XMLHttpRequestEventTarget.prototype) {
        api.patchEventTarget(global, [XMLHttpRequestEventTarget.prototype]);
      }

      patchClass('MutationObserver');
      patchClass('WebKitMutationObserver');
      patchClass('IntersectionObserver');
      patchClass('FileReader');
    });

    Zone.__load_patch('on_property', function (global, Zone, api) {
      propertyDescriptorPatch(api, global);
      propertyPatch();
    });

    Zone.__load_patch('customElements', function (global, Zone, api) {
      patchCustomElements(global, api);
    });

    Zone.__load_patch('XHR', function (global, Zone) {
      // Treat XMLHttpRequest as a macrotask.
      patchXHR(global);
      var XHR_TASK = zoneSymbol('xhrTask');
      var XHR_SYNC = zoneSymbol('xhrSync');
      var XHR_LISTENER = zoneSymbol('xhrListener');
      var XHR_SCHEDULED = zoneSymbol('xhrScheduled');
      var XHR_URL = zoneSymbol('xhrURL');
      var XHR_ERROR_BEFORE_SCHEDULED = zoneSymbol('xhrErrorBeforeScheduled');

      function patchXHR(window) {
        var XMLHttpRequest = window['XMLHttpRequest'];

        if (!XMLHttpRequest) {
          // XMLHttpRequest is not available in service worker
          return;
        }

        var XMLHttpRequestPrototype = XMLHttpRequest.prototype;

        function findPendingTask(target) {
          return target[XHR_TASK];
        }

        var oriAddListener = XMLHttpRequestPrototype[ZONE_SYMBOL_ADD_EVENT_LISTENER];
        var oriRemoveListener = XMLHttpRequestPrototype[ZONE_SYMBOL_REMOVE_EVENT_LISTENER];

        if (!oriAddListener) {
          var XMLHttpRequestEventTarget = window['XMLHttpRequestEventTarget'];

          if (XMLHttpRequestEventTarget) {
            var XMLHttpRequestEventTargetPrototype = XMLHttpRequestEventTarget.prototype;
            oriAddListener = XMLHttpRequestEventTargetPrototype[ZONE_SYMBOL_ADD_EVENT_LISTENER];
            oriRemoveListener = XMLHttpRequestEventTargetPrototype[ZONE_SYMBOL_REMOVE_EVENT_LISTENER];
          }
        }

        var READY_STATE_CHANGE = 'readystatechange';
        var SCHEDULED = 'scheduled';

        function scheduleTask(task) {
          var data = task.data;
          var target = data.target;
          target[XHR_SCHEDULED] = false;
          target[XHR_ERROR_BEFORE_SCHEDULED] = false; // remove existing event listener

          var listener = target[XHR_LISTENER];

          if (!oriAddListener) {
            oriAddListener = target[ZONE_SYMBOL_ADD_EVENT_LISTENER];
            oriRemoveListener = target[ZONE_SYMBOL_REMOVE_EVENT_LISTENER];
          }

          if (listener) {
            oriRemoveListener.call(target, READY_STATE_CHANGE, listener);
          }

          var newListener = target[XHR_LISTENER] = function () {
            if (target.readyState === target.DONE) {
              // sometimes on some browsers XMLHttpRequest will fire onreadystatechange with
              // readyState=4 multiple times, so we need to check task state here
              if (!data.aborted && target[XHR_SCHEDULED] && task.state === SCHEDULED) {
                // check whether the xhr has registered onload listener
                // if that is the case, the task should invoke after all
                // onload listeners finish.
                var loadTasks = target['__zone_symbol__loadfalse'];

                if (loadTasks && loadTasks.length > 0) {
                  var oriInvoke = task.invoke;

                  task.invoke = function () {
                    // need to load the tasks again, because in other
                    // load listener, they may remove themselves
                    var loadTasks = target['__zone_symbol__loadfalse'];

                    for (var i = 0; i < loadTasks.length; i++) {
                      if (loadTasks[i] === task) {
                        loadTasks.splice(i, 1);
                      }
                    }

                    if (!data.aborted && task.state === SCHEDULED) {
                      oriInvoke.call(task);
                    }
                  };

                  loadTasks.push(task);
                } else {
                  task.invoke();
                }
              } else if (!data.aborted && target[XHR_SCHEDULED] === false) {
                // error occurs when xhr.send()
                target[XHR_ERROR_BEFORE_SCHEDULED] = true;
              }
            }
          };

          oriAddListener.call(target, READY_STATE_CHANGE, newListener);
          var storedTask = target[XHR_TASK];

          if (!storedTask) {
            target[XHR_TASK] = task;
          }

          sendNative.apply(target, data.args);
          target[XHR_SCHEDULED] = true;
          return task;
        }

        function placeholderCallback() {}

        function clearTask(task) {
          var data = task.data; // Note - ideally, we would call data.target.removeEventListener here, but it's too late
          // to prevent it from firing. So instead, we store info for the event listener.

          data.aborted = true;
          return abortNative.apply(data.target, data.args);
        }

        var openNative = patchMethod(XMLHttpRequestPrototype, 'open', function () {
          return function (self, args) {
            self[XHR_SYNC] = args[2] == false;
            self[XHR_URL] = args[1];
            return openNative.apply(self, args);
          };
        });
        var XMLHTTPREQUEST_SOURCE = 'XMLHttpRequest.send';
        var fetchTaskAborting = zoneSymbol('fetchTaskAborting');
        var fetchTaskScheduling = zoneSymbol('fetchTaskScheduling');
        var sendNative = patchMethod(XMLHttpRequestPrototype, 'send', function () {
          return function (self, args) {
            if (Zone.current[fetchTaskScheduling] === true) {
              // a fetch is scheduling, so we are using xhr to polyfill fetch
              // and because we already schedule macroTask for fetch, we should
              // not schedule a macroTask for xhr again
              return sendNative.apply(self, args);
            }

            if (self[XHR_SYNC]) {
              // if the XHR is sync there is no task to schedule, just execute the code.
              return sendNative.apply(self, args);
            } else {
              var _options2 = {
                target: self,
                url: self[XHR_URL],
                isPeriodic: false,
                args: args,
                aborted: false
              };
              var task = scheduleMacroTaskWithCurrentZone(XMLHTTPREQUEST_SOURCE, placeholderCallback, _options2, scheduleTask, clearTask);

              if (self && self[XHR_ERROR_BEFORE_SCHEDULED] === true && !_options2.aborted && task.state === SCHEDULED) {
                // xhr request throw error when send
                // we should invoke task instead of leaving a scheduled
                // pending macroTask
                task.invoke();
              }
            }
          };
        });
        var abortNative = patchMethod(XMLHttpRequestPrototype, 'abort', function () {
          return function (self, args) {
            var task = findPendingTask(self);

            if (task && typeof task.type == 'string') {
              // If the XHR has already completed, do nothing.
              // If the XHR has already been aborted, do nothing.
              // Fix #569, call abort multiple times before done will cause
              // macroTask task count be negative number
              if (task.cancelFn == null || task.data && task.data.aborted) {
                return;
              }

              task.zone.cancelTask(task);
            } else if (Zone.current[fetchTaskAborting] === true) {
              // the abort is called from fetch polyfill, we need to call native abort of XHR.
              return abortNative.apply(self, args);
            } // Otherwise, we are trying to abort an XHR which has not yet been sent, so there is no
            // task
            // to cancel. Do nothing.

          };
        });
      }
    });

    Zone.__load_patch('geolocation', function (global) {
      /// GEO_LOCATION
      if (global['navigator'] && global['navigator'].geolocation) {
        patchPrototype(global['navigator'].geolocation, ['getCurrentPosition', 'watchPosition']);
      }
    });

    Zone.__load_patch('PromiseRejectionEvent', function (global, Zone) {
      // handle unhandled promise rejection
      function findPromiseRejectionHandler(evtName) {
        return function (e) {
          var eventTasks = findEventTasks(global, evtName);
          eventTasks.forEach(function (eventTask) {
            // windows has added unhandledrejection event listener
            // trigger the event listener
            var PromiseRejectionEvent = global['PromiseRejectionEvent'];

            if (PromiseRejectionEvent) {
              var evt = new PromiseRejectionEvent(evtName, {
                promise: e.promise,
                reason: e.rejection
              });
              eventTask.invoke(evt);
            }
          });
        };
      }

      if (global['PromiseRejectionEvent']) {
        Zone[zoneSymbol('unhandledPromiseRejectionHandler')] = findPromiseRejectionHandler('unhandledrejection');
        Zone[zoneSymbol('rejectionHandledHandler')] = findPromiseRejectionHandler('rejectionhandled');
      }
    });
    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    /***/

  },

  /***/
  "./src/app/_shared/_animations/fade-in.animation.ts":
  /*!**********************************************************!*\
    !*** ./src/app/_shared/_animations/fade-in.animation.ts ***!
    \**********************************************************/

  /*! exports provided: fadeInAnimation */

  /***/
  function srcApp_shared_animationsFadeInAnimationTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "fadeInAnimation", function () {
      return fadeInAnimation;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/animations */
    "./node_modules/@angular/animations/fesm2015/animations.js"); // import the required animation functions from the angular animations module


    var fadeInAnimation = // trigger name for attaching this animation to an element using the [@triggerName] syntax
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('fadeInAnimation', [// route 'enter' transition
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])(':enter', [// css styles at start of transition
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
      opacity: 0
    }), // animation and styles at end of transition
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('.3s', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
      opacity: 1
    }))])]);
    /***/
  },

  /***/
  "./src/app/_shared/_animations/slide-in-out.animation.ts":
  /*!***************************************************************!*\
    !*** ./src/app/_shared/_animations/slide-in-out.animation.ts ***!
    \***************************************************************/

  /*! exports provided: slideInOutAnimation */

  /***/
  function srcApp_shared_animationsSlideInOutAnimationTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "slideInOutAnimation", function () {
      return slideInOutAnimation;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/animations */
    "./node_modules/@angular/animations/fesm2015/animations.js"); // import the required animation functions from the angular animations module


    var slideInOutAnimation = // trigger name for attaching this animation to an element using the [@triggerName] syntax
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('slideInOutAnimation', [// end state styles for route container (host)
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('*', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
      // the view covers the whole screen with a semi tranparent background
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.8)'
    })), // route 'enter' transition
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])(':enter', [// styles at start of transition
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
      // start with the content positioned off the right of the screen, 
      // -400% is required instead of -100% because the negative position adds to the width of the element
      right: '-400%',
      // start with background opacity set to 0 (invisible)
      backgroundColor: 'rgba(0, 0, 0, 0)'
    }), // animation and styles at end of transition
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('.5s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
      // transition the right position to 0 which slides the content into view
      right: 0,
      // transition the background opacity to 0.8 to fade it in
      backgroundColor: 'rgba(0, 0, 0, 0.8)'
    }))]), // route 'leave' transition
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])(':leave', [// animation and styles at end of transition
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('.5s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
      // transition the right position to -400% which slides the content out of view
      right: '-400%',
      // transition the background opacity to 0 to fade it out
      backgroundColor: 'rgba(0, 0, 0, 0)'
    }))])]);
    /***/
  },

  /***/
  "./src/app/_shared/_guards/auth.guard.ts":
  /*!***********************************************!*\
    !*** ./src/app/_shared/_guards/auth.guard.ts ***!
    \***********************************************/

  /*! exports provided: AuthGuard */

  /***/
  function srcApp_shared_guardsAuthGuardTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthGuard", function () {
      return AuthGuard;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var src_app_shared_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/_shared/_services */
    "./src/app/_shared/_services/index.ts");

    var AuthGuard =
    /*#__PURE__*/
    function () {
      function AuthGuard(router, authenticationService) {
        _classCallCheck(this, AuthGuard);

        this.router = router;
        this.authenticationService = authenticationService;
      }

      _createClass(AuthGuard, [{
        key: "canLoad",
        value: function canLoad(route) {
          return this.isAuthenticated();
        }
      }, {
        key: "canActivate",
        value: function canActivate(route, state) {
          return this.isAuthenticated(route);
        }
      }, {
        key: "canActivateChild",
        value: function canActivateChild(childRoute, state) {
          return this.isAuthenticated(childRoute);
        }
      }, {
        key: "isAuthenticated",
        value: function isAuthenticated(route) {
          var allowedUserType = true;
          var currentUser = this.authenticationService.currentUserValue;
          var loggedInUserType = currentUser.authority;
          var expectedRole;

          if (route) {
            // console.log(route);
            expectedRole = route.data.expectedRole;

            if (expectedRole) {
              allowedUserType = loggedInUserType === expectedRole;
            }
          }

          if (!allowedUserType) {
            return false;
          }

          return true;
        }
      }]);

      return AuthGuard;
    }();

    AuthGuard.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: src_app_shared_services__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]
      }];
    };

    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], src_app_shared_services__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]])], AuthGuard);
    /***/
  },

  /***/
  "./src/app/_shared/_guards/index.ts":
  /*!******************************************!*\
    !*** ./src/app/_shared/_guards/index.ts ***!
    \******************************************/

  /*! exports provided: AuthGuard */

  /***/
  function srcApp_shared_guardsIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _auth_guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./auth.guard */
    "./src/app/_shared/_guards/auth.guard.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "AuthGuard", function () {
      return _auth_guard__WEBPACK_IMPORTED_MODULE_1__["AuthGuard"];
    });
    /***/

  },

  /***/
  "./src/app/_shared/_helpers/error.interceptor.ts":
  /*!*******************************************************!*\
    !*** ./src/app/_shared/_helpers/error.interceptor.ts ***!
    \*******************************************************/

  /*! exports provided: ErrorInterceptor */

  /***/
  function srcApp_shared_helpersErrorInterceptorTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ErrorInterceptor", function () {
      return ErrorInterceptor;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var src_app_shared_services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/_shared/_services */
    "./src/app/_shared/_services/index.ts");

    var ErrorInterceptor =
    /*#__PURE__*/
    function () {
      function ErrorInterceptor(authenticationService) {
        _classCallCheck(this, ErrorInterceptor);

        this.authenticationService = authenticationService;
      }

      _createClass(ErrorInterceptor, [{
        key: "intercept",
        value: function intercept(request, next) {
          var _this3 = this;

          return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) {
            if ([401, 403].indexOf(err.status) !== -1) {
              // auto logout if 401 Unauthorized or 403 Forbidden response returned from api
              _this3.authenticationService.logout();

              location.reload(true);
            }

            var error = err.error.message || err.statusText;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(error);
          }));
        }
      }]);

      return ErrorInterceptor;
    }();

    ErrorInterceptor.ctorParameters = function () {
      return [{
        type: src_app_shared_services__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"]
      }];
    };

    ErrorInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_shared_services__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"]])], ErrorInterceptor);
    /***/
  },

  /***/
  "./src/app/_shared/_helpers/fake-auth-backend.ts":
  /*!*******************************************************!*\
    !*** ./src/app/_shared/_helpers/fake-auth-backend.ts ***!
    \*******************************************************/

  /*! exports provided: FakeAuthBackendInterceptor, fakeAuthBackendProvider */

  /***/
  function srcApp_shared_helpersFakeAuthBackendTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FakeAuthBackendInterceptor", function () {
      return FakeAuthBackendInterceptor;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "fakeAuthBackendProvider", function () {
      return fakeAuthBackendProvider;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var src_app_shared_models__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/_shared/_models */
    "./src/app/_shared/_models/index.ts");
    /* harmony import */


    var src_app_shared_models_enums_role__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/_shared/_models/enums/role */
    "./src/app/_shared/_models/enums/role.ts");

    var FakeAuthBackendInterceptor =
    /*#__PURE__*/
    function () {
      function FakeAuthBackendInterceptor() {
        _classCallCheck(this, FakeAuthBackendInterceptor);
      }

      _createClass(FakeAuthBackendInterceptor, [{
        key: "intercept",
        value: function intercept(request, next) {
          var users = [{
            id: 1,
            name: 'admin',
            password: 'admin',
            provider: src_app_shared_models__WEBPACK_IMPORTED_MODULE_5__["Provider"].Local,
            authority: src_app_shared_models_enums_role__WEBPACK_IMPORTED_MODULE_6__["Role"].Admin
          }, {
            id: 2,
            name: 'user',
            password: 'user',
            provider: src_app_shared_models__WEBPACK_IMPORTED_MODULE_5__["Provider"].Local,
            authority: src_app_shared_models_enums_role__WEBPACK_IMPORTED_MODULE_6__["Role"].Customer
          }, {
            id: 3,
            name: 'librarian',
            password: 'librarian',
            provider: src_app_shared_models__WEBPACK_IMPORTED_MODULE_5__["Provider"].Local,
            authority: src_app_shared_models_enums_role__WEBPACK_IMPORTED_MODULE_6__["Role"].Librarian
          }];
          var url = request.url,
              method = request.method,
              headers = request.headers,
              body = request.body;
          var authHeader = request.headers.get('Authorization');
          var isLoggedInValue = authHeader && authHeader.startsWith('Bearer fake-jwt-token');
          var roleString = isLoggedInValue && authHeader.split('.')[1];
          var role = roleString; // wrap in delayed observable to simulate server api call

          return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(null).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["mergeMap"])(handleRoute)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["materialize"])()) // call materialize and dematerialize to ensure delay even if an error is thrown (https://github.com/Reactive-Extensions/RxJS/issues/648)
          .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["delay"])(500)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["dematerialize"])());

          function handleRoute() {
            switch (true) {
              case url.endsWith('/users/authenticate') && method === 'POST':
                return authenticate();
              //  case url.endsWith('/users/register') && method === 'POST':
              //      return register();

              case url.endsWith('/users') && method === 'GET':
                return getUsers();

              case url.match(/\/users\/\d+$/) && request.method === 'GET':
                return getUserById();
              //  case url.match(/\/users\/\d+$/) && method === 'DELETE':
              //      return deleteUser();

              default:
                // pass through any requests not handled above
                return next.handle(request);
            }
          } // route functions


          function authenticate() {
            var username = body.username,
                password = body.password;
            var user = users.find(function (x) {
              return x.name === request.body.username && x.password === request.body.password;
            });
            if (!user) return error('Username or password is incorrect');
            return ok({
              id: user.id,
              name: user.name,
              authority: user.authority,
              token: "fake-jwt-token.".concat(user.authority)
            });
          } // function register() {
          //     const user = body
          //     if (users.find(x => x.name === user.name)) {
          //         return error('Username "' + user.name + '" is already taken')
          //     }
          //     user.id = users.length ? Math.max(...users.map(x => x.id)) + 1 : 1;
          //     users.push(user);
          //     localStorage.setItem('users', JSON.stringify(users));
          //     return ok();
          // }


          function getUsers() {
            if (!isLoggedIn()) return unauthorized();
            return ok(users);
          }

          function getUserById() {
            if (!isLoggedIn) return unauthorized(); // get id from request url

            var id = idFromUrl(); // only allow normal users access to their own record

            var currentUser = users.find(function (x) {
              return x.authority === role;
            });
            if (id !== currentUser.id && role !== src_app_shared_models_enums_role__WEBPACK_IMPORTED_MODULE_6__["Role"].Admin) return unauthorized();
            var user = users.find(function (x) {
              return x.id === id;
            });
            return ok(user);
          }

          function deleteUser() {
            if (!isLoggedIn()) return unauthorized();
            users = users.filter(function (x) {
              return x.id !== idFromUrl();
            });
            localStorage.setItem('users', JSON.stringify(users));
            return ok();
          } // helper functions


          function ok(body) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]({
              status: 200,
              body: body
            }));
          }

          function error(message) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])({
              error: {
                message: message
              }
            });
          }

          function unauthorized() {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])({
              status: 401,
              error: {
                message: 'Unauthorised'
              }
            });
          }

          function isLoggedIn() {
            //  return headers && headers.startsWith('Bearer fake-jwt-token');
            return isLoggedInValue;
          }

          function idFromUrl() {
            var urlParts = url.split('/');
            return parseInt(urlParts[urlParts.length - 1]);
          }
        }
      }]);

      return FakeAuthBackendInterceptor;
    }();

    FakeAuthBackendInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], FakeAuthBackendInterceptor);
    var fakeAuthBackendProvider = {
      // use fake backend in place of Http service for backend-less development
      provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HTTP_INTERCEPTORS"],
      useClass: FakeAuthBackendInterceptor,
      multi: true
    };
    /***/
  },

  /***/
  "./src/app/_shared/_helpers/fake-librarian-backend.ts":
  /*!************************************************************!*\
    !*** ./src/app/_shared/_helpers/fake-librarian-backend.ts ***!
    \************************************************************/

  /*! exports provided: FakeLibrarianBackendInterceptor, fakeLibrarianBackendProvider */

  /***/
  function srcApp_shared_helpersFakeLibrarianBackendTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FakeLibrarianBackendInterceptor", function () {
      return FakeLibrarianBackendInterceptor;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "fakeLibrarianBackendProvider", function () {
      return fakeLibrarianBackendProvider;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var FakeLibrarianBackendInterceptor =
    /*#__PURE__*/
    function () {
      function FakeLibrarianBackendInterceptor() {
        _classCallCheck(this, FakeLibrarianBackendInterceptor);
      }

      _createClass(FakeLibrarianBackendInterceptor, [{
        key: "intercept",
        value: function intercept(request, next) {
          // some initial default librarians
          var defaultLibrarians = [{
            id: 1,
            name: 'Alex',
            email: 'ttt@gmail.com',
            photo: 'https://material.angular.io/assets/img/examples/shiba2.jpg'
          }, {
            id: 2,
            name: 'Eva',
            email: 'eva@gmail.com',
            photo: 'https://material.angular.io/assets/img/examples/shiba2.jpg'
          }, {
            id: 3,
            name: 'Nastia',
            email: 'n@gmail.com',
            photo: 'https://material.angular.io/assets/img/examples/shiba2.jpg'
          }];
          var defaultLibrarians2 = [{
            id: 1,
            name: 'Ivan',
            email: 'ttt@gmail.com',
            photo: 'https://material.angular.io/assets/img/examples/shiba2.jpg'
          }, {
            id: 2,
            name: 'John',
            email: 'eva@gmail.com',
            photo: 'https://material.angular.io/assets/img/examples/shiba2.jpg'
          }, {
            id: 3,
            name: 'Peter',
            email: 'n@gmail.com',
            photo: 'https://material.angular.io/assets/img/examples/shiba2.jpg'
          }]; // array in local storage for all librarians

          var librarians = JSON.parse(localStorage.getItem('librarians')) || defaultLibrarians;
          var librarians2 = JSON.parse(localStorage.getItem('librarians2')) || defaultLibrarians2;
          var url = request.url,
              method = request.method,
              headers = request.headers,
              body = request.body; // wrap in delayed observable to simulate server api call

          return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(null).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["mergeMap"])(handleRoute)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["materialize"])()) // call materialize and dematerialize to ensure delay even if an error is thrown (https://github.com/Reactive-Extensions/RxJS/issues/648)
          .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["delay"])(500)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["dematerialize"])());

          function handleRoute() {
            switch (true) {
              case url.endsWith('/librarians') && method === 'GET':
                return getLibrarians();

              case url.endsWith('/librarians2') && method === 'GET':
                return getLibrarians2();

              case url.match(/\/librarians\/\d+$/) && method === 'GET':
                return getLibrarianById();

              case url.endsWith('/librarians') && method === 'POST':
                return createLibrarian();

              case url.match(/\/librarians\/\d+$/) && method === 'PUT':
                return updateLibrarian();

              case url.match(/\/librarians\/\d+$/) && method === 'DELETE':
                return deleteLibrarian();

              default:
                // pass through any requests not handled above
                return next.handle(request);
            }
          } // route functions


          function getLibrarians() {
            return ok(librarians);
          }

          function getLibrarians2() {
            return ok(librarians2);
          }

          function getLibrarianById() {
            var librarian = librarians.find(function (x) {
              return x.id === idFromUrl();
            });
            return ok(librarian);
          }

          function createLibrarian() {
            var librarian = body;
            librarian.id = librarians.length ? Math.max.apply(Math, _toConsumableArray(librarians.map(function (x) {
              return x.id;
            }))) + 1 : 1;
            librarians.push(librarian);
            localStorage.setItem('librarians', JSON.stringify(librarians));
            return ok(librarian);
          }

          function updateLibrarian() {
            var librarian = body;
            var index = librarians.findIndex(function (x) {
              return x.id === idFromUrl();
            });
            librarians[index] = librarian;
            localStorage.setItem('librarians', JSON.stringify(librarians));
            return ok(librarian);
          }

          function deleteLibrarian() {
            librarians = librarians.filter(function (x) {
              return x.id !== idFromUrl();
            });
            localStorage.setItem('librarians', JSON.stringify(librarians));
            return ok();
          } // helper functions


          function ok(body) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]({
              status: 200,
              body: body
            }));
          }

          function idFromUrl() {
            var urlParts = url.split('/');
            return parseInt(urlParts[urlParts.length - 1]);
          }
        }
      }]);

      return FakeLibrarianBackendInterceptor;
    }();

    FakeLibrarianBackendInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], FakeLibrarianBackendInterceptor);
    var fakeLibrarianBackendProvider = {
      // use fake backend in place of Http service for backend-less development
      provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HTTP_INTERCEPTORS"],
      useClass: FakeLibrarianBackendInterceptor,
      multi: true
    };
    /***/
  },

  /***/
  "./src/app/_shared/_helpers/index.ts":
  /*!*******************************************!*\
    !*** ./src/app/_shared/_helpers/index.ts ***!
    \*******************************************/

  /*! exports provided: ErrorInterceptor, JwtInterceptor, FakeAuthBackendInterceptor, fakeAuthBackendProvider, FakeLibrarianBackendInterceptor, fakeLibrarianBackendProvider */

  /***/
  function srcApp_shared_helpersIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _error_interceptor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./error.interceptor */
    "./src/app/_shared/_helpers/error.interceptor.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ErrorInterceptor", function () {
      return _error_interceptor__WEBPACK_IMPORTED_MODULE_1__["ErrorInterceptor"];
    });
    /* harmony import */


    var _jwt_interceptor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./jwt.interceptor */
    "./src/app/_shared/_helpers/jwt.interceptor.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "JwtInterceptor", function () {
      return _jwt_interceptor__WEBPACK_IMPORTED_MODULE_2__["JwtInterceptor"];
    });
    /* harmony import */


    var _fake_auth_backend__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./fake-auth-backend */
    "./src/app/_shared/_helpers/fake-auth-backend.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "FakeAuthBackendInterceptor", function () {
      return _fake_auth_backend__WEBPACK_IMPORTED_MODULE_3__["FakeAuthBackendInterceptor"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "fakeAuthBackendProvider", function () {
      return _fake_auth_backend__WEBPACK_IMPORTED_MODULE_3__["fakeAuthBackendProvider"];
    });
    /* harmony import */


    var _fake_librarian_backend__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./fake-librarian-backend */
    "./src/app/_shared/_helpers/fake-librarian-backend.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "FakeLibrarianBackendInterceptor", function () {
      return _fake_librarian_backend__WEBPACK_IMPORTED_MODULE_4__["FakeLibrarianBackendInterceptor"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "fakeLibrarianBackendProvider", function () {
      return _fake_librarian_backend__WEBPACK_IMPORTED_MODULE_4__["fakeLibrarianBackendProvider"];
    });
    /***/

  },

  /***/
  "./src/app/_shared/_helpers/jwt.interceptor.ts":
  /*!*****************************************************!*\
    !*** ./src/app/_shared/_helpers/jwt.interceptor.ts ***!
    \*****************************************************/

  /*! exports provided: JwtInterceptor */

  /***/
  function srcApp_shared_helpersJwtInterceptorTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "JwtInterceptor", function () {
      return JwtInterceptor;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_shared_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/_shared/_services */
    "./src/app/_shared/_services/index.ts");

    var JwtInterceptor =
    /*#__PURE__*/
    function () {
      function JwtInterceptor(authenticationService) {
        _classCallCheck(this, JwtInterceptor);

        this.authenticationService = authenticationService;
      }

      _createClass(JwtInterceptor, [{
        key: "intercept",
        value: function intercept(request, next) {
          // add authorization header with jwt token if available
          var currentUser = this.authenticationService.currentUserValue;

          if (currentUser && currentUser.token) {
            request = request.clone({
              setHeaders: {
                Authorization: "Bearer ".concat(currentUser.token)
              }
            });
          }

          return next.handle(request);
        }
      }]);

      return JwtInterceptor;
    }();

    JwtInterceptor.ctorParameters = function () {
      return [{
        type: src_app_shared_services__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]
      }];
    };

    JwtInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_shared_services__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]])], JwtInterceptor);
    /***/
  },

  /***/
  "./src/app/_shared/_helpers/must-match.validator.ts":
  /*!**********************************************************!*\
    !*** ./src/app/_shared/_helpers/must-match.validator.ts ***!
    \**********************************************************/

  /*! exports provided: MustMatch */

  /***/
  function srcApp_shared_helpersMustMatchValidatorTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MustMatch", function () {
      return MustMatch;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // custom validator to check that two fields match


    function MustMatch(controlName, matchingControlName) {
      return function (formGroup) {
        var control = formGroup.controls[controlName];
        var matchingControl = formGroup.controls[matchingControlName]; // return null if controls haven't initialised yet

        if (!control || !matchingControl) {
          return null;
        } // return null if another validator has already found an error on the matchingControl


        if (matchingControl.errors && !matchingControl.errors.mustMatch) {
          return null;
        } // set error on matchingControl if validation fails


        if (control.value !== matchingControl.value) {
          matchingControl.setErrors({
            mustMatch: true
          });
        } else {
          matchingControl.setErrors(null);
        }
      };
    }
    /***/

  },

  /***/
  "./src/app/_shared/_models/enums/provider.ts":
  /*!***************************************************!*\
    !*** ./src/app/_shared/_models/enums/provider.ts ***!
    \***************************************************/

  /*! exports provided: Provider */

  /***/
  function srcApp_shared_modelsEnumsProviderTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Provider", function () {
      return Provider;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var Provider;

    (function (Provider) {
      Provider[Provider["Local"] = 0] = "Local";
      Provider[Provider["Google"] = 1] = "Google";
      Provider[Provider["Facebook"] = 2] = "Facebook";
    })(Provider || (Provider = {}));
    /***/

  },

  /***/
  "./src/app/_shared/_models/enums/role.ts":
  /*!***********************************************!*\
    !*** ./src/app/_shared/_models/enums/role.ts ***!
    \***********************************************/

  /*! exports provided: Role */

  /***/
  function srcApp_shared_modelsEnumsRoleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Role", function () {
      return Role;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var Role;

    (function (Role) {
      Role["Customer"] = "ROLE_CUSTOMER";
      Role["Librarian"] = "ROLE_LIBRARIAN";
      Role["Admin"] = "ROLE_ADMIN";
    })(Role || (Role = {}));
    /***/

  },

  /***/
  "./src/app/_shared/_models/index.ts":
  /*!******************************************!*\
    !*** ./src/app/_shared/_models/index.ts ***!
    \******************************************/

  /*! exports provided: Provider, User */

  /***/
  function srcApp_shared_modelsIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _enums_provider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./enums/provider */
    "./src/app/_shared/_models/enums/provider.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "Provider", function () {
      return _enums_provider__WEBPACK_IMPORTED_MODULE_1__["Provider"];
    });
    /* harmony import */


    var _user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./user */
    "./src/app/_shared/_models/user.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "User", function () {
      return _user__WEBPACK_IMPORTED_MODULE_2__["User"];
    });
    /***/

  },

  /***/
  "./src/app/_shared/_models/librarian.ts":
  /*!**********************************************!*\
    !*** ./src/app/_shared/_models/librarian.ts ***!
    \**********************************************/

  /*! exports provided: Librarian */

  /***/
  function srcApp_shared_modelsLibrarianTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Librarian", function () {
      return Librarian;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var Librarian = function Librarian() {
      _classCallCheck(this, Librarian);
    };
    /***/

  },

  /***/
  "./src/app/_shared/_models/user.ts":
  /*!*****************************************!*\
    !*** ./src/app/_shared/_models/user.ts ***!
    \*****************************************/

  /*! exports provided: User */

  /***/
  function srcApp_shared_modelsUserTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "User", function () {
      return User;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var User = function User() {
      _classCallCheck(this, User);
    };
    /***/

  },

  /***/
  "./src/app/_shared/_services/authentication.service.ts":
  /*!*************************************************************!*\
    !*** ./src/app/_shared/_services/authentication.service.ts ***!
    \*************************************************************/

  /*! exports provided: AuthenticationService */

  /***/
  function srcApp_shared_servicesAuthenticationServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthenticationService", function () {
      return AuthenticationService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");

    var AuthenticationService =
    /*#__PURE__*/
    function () {
      function AuthenticationService(http) {
        _classCallCheck(this, AuthenticationService);

        this.http = http;
        this.currentUserSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
      }

      _createClass(AuthenticationService, [{
        key: "login",
        value: function login(username, password) {
          var _this4 = this;

          return this.http.post("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl, "/users/authenticate"), {
            username: username,
            password: password
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (user) {
            // login successful if there's a jwt token in the response
            if (user && user.token) {
              // store user details and jwt token in local storage to keep user logged in between page refreshes
              localStorage.setItem('currentUser', JSON.stringify(user));

              _this4.currentUserSubject.next(user);
            }

            return user;
          }));
        }
      }, {
        key: "logout",
        value: function logout() {
          // remove user from local storage to log user out
          localStorage.removeItem('currentUser');
          this.currentUserSubject.next(null);
        }
      }, {
        key: "currentUserValue",
        get: function get() {
          return this.currentUserSubject.value;
        }
      }]);

      return AuthenticationService;
    }();

    AuthenticationService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    AuthenticationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])], AuthenticationService);
    /***/
  },

  /***/
  "./src/app/_shared/_services/index.ts":
  /*!********************************************!*\
    !*** ./src/app/_shared/_services/index.ts ***!
    \********************************************/

  /*! exports provided: AuthenticationService, UserService */

  /***/
  function srcApp_shared_servicesIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _authentication_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./authentication.service */
    "./src/app/_shared/_services/authentication.service.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "AuthenticationService", function () {
      return _authentication_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"];
    });
    /* harmony import */


    var _user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./user.service */
    "./src/app/_shared/_services/user.service.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "UserService", function () {
      return _user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"];
    });
    /***/

  },

  /***/
  "./src/app/_shared/_services/librarian.service.ts":
  /*!********************************************************!*\
    !*** ./src/app/_shared/_services/librarian.service.ts ***!
    \********************************************************/

  /*! exports provided: LibrarianService */

  /***/
  function srcApp_shared_servicesLibrarianServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LibrarianService", function () {
      return LibrarianService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");

    var LibrarianService =
    /*#__PURE__*/
    function () {
      function LibrarianService(http) {
        _classCallCheck(this, LibrarianService);

        this.http = http;
      }

      _createClass(LibrarianService, [{
        key: "getAll",
        value: function getAll() {
          return this.http.get("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl, "/librarians"));
        }
      }, {
        key: "getAll2",
        value: function getAll2() {
          return this.http.get("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl, "/librarians2"));
        }
      }, {
        key: "getById",
        value: function getById(id) {
          return this.http.get("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl, "/librarians/").concat(id));
        }
      }, {
        key: "create",
        value: function create(librarian) {
          return this.http.post("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl, "/librarians"), librarian);
        }
      }, {
        key: "update",
        value: function update(librarian) {
          return this.http.put("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl, "/librarians/").concat(librarian.id), librarian);
        }
      }, {
        key: "delete",
        value: function _delete(id) {
          return this.http.delete("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl, "/librarians/").concat(id));
        }
      }]);

      return LibrarianService;
    }();

    LibrarianService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    LibrarianService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])], LibrarianService);
    /***/
  },

  /***/
  "./src/app/_shared/_services/pub-sub.service.ts":
  /*!******************************************************!*\
    !*** ./src/app/_shared/_services/pub-sub.service.ts ***!
    \******************************************************/

  /*! exports provided: PubSubService */

  /***/
  function srcApp_shared_servicesPubSubServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PubSubService", function () {
      return PubSubService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var PubSubService =
    /*#__PURE__*/
    function () {
      function PubSubService() {
        _classCallCheck(this, PubSubService);

        this.subjects = [];
      }

      _createClass(PubSubService, [{
        key: "publish",
        value: function publish(eventName) {
          // ensure a subject for the event name exists
          this.subjects[eventName] = this.subjects[eventName] || new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"](); // publish event

          this.subjects[eventName].next();
        }
      }, {
        key: "on",
        value: function on(eventName) {
          // ensure a subject for the event name exists
          this.subjects[eventName] = this.subjects[eventName] || new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"](); // return observable 

          return this.subjects[eventName].asObservable();
        }
      }]);

      return PubSubService;
    }();

    PubSubService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], PubSubService);
    /***/
  },

  /***/
  "./src/app/_shared/_services/refresh.service.ts":
  /*!******************************************************!*\
    !*** ./src/app/_shared/_services/refresh.service.ts ***!
    \******************************************************/

  /*! exports provided: RefreshService */

  /***/
  function srcApp_shared_servicesRefreshServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RefreshService", function () {
      return RefreshService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var RefreshService =
    /*#__PURE__*/
    function () {
      function RefreshService() {
        _classCallCheck(this, RefreshService);

        this.day = true;
        this.onClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      }

      _createClass(RefreshService, [{
        key: "refresh",
        value: function refresh() {
          this.day = !this.day;
          this.onClick.emit(this.day);
        }
      }]);

      return RefreshService;
    }();
    /***/

  },

  /***/
  "./src/app/_shared/_services/user.service.ts":
  /*!***************************************************!*\
    !*** ./src/app/_shared/_services/user.service.ts ***!
    \***************************************************/

  /*! exports provided: UserService */

  /***/
  function srcApp_shared_servicesUserServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserService", function () {
      return UserService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");

    var UserService =
    /*#__PURE__*/
    function () {
      function UserService(http) {
        _classCallCheck(this, UserService);

        this.http = http;
      }

      _createClass(UserService, [{
        key: "getAll",
        value: function getAll() {
          return this.http.get("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl, "/users"));
        }
      }, {
        key: "getById",
        value: function getById(id) {
          console.log("get user");
          return this.http.get("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl, "/users/").concat(id));
        }
      }, {
        key: "delete",
        value: function _delete(id) {
          return this.http.delete("".concat(config.apiUrl, "/users/").concat(id));
        }
      }]);

      return UserService;
    }();

    UserService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])], UserService); // export class UserService {
    //     constructor(
    //         private firestore: AngularFirestore
    //     ) { }
    //     getAll() {
    //         console.log("getAll")
    //         return this.firestore.collection<User>('users').snapshotChanges().pipe(map(actions => {
    //             return actions.map(action => {
    //                 const user = action.payload.doc.data() as User;
    //                 user.id = + action.payload.doc.id;
    //                 return user;
    //             });
    //         }));
    //     }
    //     getById(id: number): Observable<User> {
    //         console.log("betById" + id)
    //         return this.firestore.collection<User>('users').doc<User>(id.toString()).valueChanges();
    //     }
    //     delete(id: number) {
    //         this.firestore.collection<User>('users').doc<User>(id.toString()).delete();
    //     }
    // }

    /***/
  },

  /***/
  "./src/app/_shared/all-angular-material.module.ts":
  /*!********************************************************!*\
    !*** ./src/app/_shared/all-angular-material.module.ts ***!
    \********************************************************/

  /*! exports provided: AllMaterialModule */

  /***/
  function srcApp_sharedAllAngularMaterialModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AllMaterialModule", function () {
      return AllMaterialModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/esm2015/input.js");
    /* harmony import */


    var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/autocomplete */
    "./node_modules/@angular/material/esm2015/autocomplete.js");
    /* harmony import */


    var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/datepicker */
    "./node_modules/@angular/material/esm2015/datepicker.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/esm2015/form-field.js");
    /* harmony import */


    var _angular_material_radio__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/radio */
    "./node_modules/@angular/material/esm2015/radio.js");
    /* harmony import */


    var _angular_material_select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/select */
    "./node_modules/@angular/material/esm2015/select.js");
    /* harmony import */


    var _angular_material_slider__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/slider */
    "./node_modules/@angular/material/esm2015/slider.js");
    /* harmony import */


    var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/slide-toggle */
    "./node_modules/@angular/material/esm2015/slide-toggle.js");
    /* harmony import */


    var _angular_material_menu__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/menu */
    "./node_modules/@angular/material/esm2015/menu.js");
    /* harmony import */


    var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/material/sidenav */
    "./node_modules/@angular/material/esm2015/sidenav.js");
    /* harmony import */


    var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/material/toolbar */
    "./node_modules/@angular/material/esm2015/toolbar.js");
    /* harmony import */


    var _angular_material_list__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/material/list */
    "./node_modules/@angular/material/esm2015/list.js");
    /* harmony import */


    var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/material/grid-list */
    "./node_modules/@angular/material/esm2015/grid-list.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/esm2015/card.js");
    /* harmony import */


    var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! @angular/material/stepper */
    "./node_modules/@angular/material/esm2015/stepper.js");
    /* harmony import */


    var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! @angular/material/tabs */
    "./node_modules/@angular/material/esm2015/tabs.js");
    /* harmony import */


    var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! @angular/material/expansion */
    "./node_modules/@angular/material/esm2015/expansion.js");
    /* harmony import */


    var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! @angular/material/button-toggle */
    "./node_modules/@angular/material/esm2015/button-toggle.js");
    /* harmony import */


    var _angular_material_chips__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! @angular/material/chips */
    "./node_modules/@angular/material/esm2015/chips.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/esm2015/icon.js");
    /* harmony import */


    var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! @angular/material/progress-spinner */
    "./node_modules/@angular/material/esm2015/progress-spinner.js");
    /* harmony import */


    var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! @angular/material/progress-bar */
    "./node_modules/@angular/material/esm2015/progress-bar.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/esm2015/dialog.js");
    /* harmony import */


    var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! @angular/material/tooltip */
    "./node_modules/@angular/material/esm2015/tooltip.js");
    /* harmony import */


    var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! @angular/material/snack-bar */
    "./node_modules/@angular/material/esm2015/snack-bar.js");
    /* harmony import */


    var _angular_material_table__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
    /*! @angular/material/table */
    "./node_modules/@angular/material/esm2015/table.js");
    /* harmony import */


    var _angular_material_sort__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
    /*! @angular/material/sort */
    "./node_modules/@angular/material/esm2015/sort.js");
    /* harmony import */


    var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
    /*! @angular/material/paginator */
    "./node_modules/@angular/material/esm2015/paginator.js");

    var AllMaterialModule = function AllMaterialModule() {
      _classCallCheck(this, AllMaterialModule);
    };

    AllMaterialModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCheckboxModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCheckboxModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_4__["MatAutocompleteModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_5__["MatDatepickerModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_7__["MatRadioModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_8__["MatSelectModule"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_9__["MatSliderModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_10__["MatSlideToggleModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_11__["MatMenuModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_12__["MatSidenavModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_13__["MatToolbarModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_14__["MatListModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_15__["MatGridListModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_16__["MatCardModule"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_17__["MatStepperModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_18__["MatTabsModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_19__["MatExpansionModule"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_20__["MatButtonToggleModule"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_21__["MatChipsModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_22__["MatIconModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_23__["MatProgressSpinnerModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_24__["MatProgressBarModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_25__["MatDialogModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_26__["MatTooltipModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_27__["MatSnackBarModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_28__["MatTableModule"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_29__["MatSortModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_30__["MatPaginatorModule"]],
      exports: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCheckboxModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCheckboxModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_4__["MatAutocompleteModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_5__["MatDatepickerModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_7__["MatRadioModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_8__["MatSelectModule"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_9__["MatSliderModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_10__["MatSlideToggleModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_11__["MatMenuModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_12__["MatSidenavModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_13__["MatToolbarModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_14__["MatListModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_15__["MatGridListModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_16__["MatCardModule"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_17__["MatStepperModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_18__["MatTabsModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_19__["MatExpansionModule"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_20__["MatButtonToggleModule"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_21__["MatChipsModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_22__["MatIconModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_23__["MatProgressSpinnerModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_24__["MatProgressBarModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_25__["MatDialogModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_26__["MatTooltipModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_27__["MatSnackBarModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_28__["MatTableModule"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_29__["MatSortModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_30__["MatPaginatorModule"]]
    })], AllMaterialModule);
    /***/
  },

  /***/
  "./src/app/_shared/header/header.component.css":
  /*!*****************************************************!*\
    !*** ./src/app/_shared/header/header.component.css ***!
    \*****************************************************/

  /*! exports provided: default */

  /***/
  function srcApp_sharedHeaderHeaderComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL19zaGFyZWQvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/_shared/header/header.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/_shared/header/header.component.ts ***!
    \****************************************************/

  /*! exports provided: MyHeaderComponent */

  /***/
  function srcApp_sharedHeaderHeaderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MyHeaderComponent", function () {
      return MyHeaderComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var MyHeaderComponent =
    /*#__PURE__*/
    function () {
      function MyHeaderComponent() {
        _classCallCheck(this, MyHeaderComponent);
      }

      _createClass(MyHeaderComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return MyHeaderComponent;
    }();

    MyHeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-header',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./header.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/_shared/header/header.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./header.component.css */
      "./src/app/_shared/header/header.component.css")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], MyHeaderComponent);
    /***/
  },

  /***/
  "./src/app/_shared/page-not-found/page-not-found.component.css":
  /*!*********************************************************************!*\
    !*** ./src/app/_shared/page-not-found/page-not-found.component.css ***!
    \*********************************************************************/

  /*! exports provided: default */

  /***/
  function srcApp_sharedPageNotFoundPageNotFoundComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL19zaGFyZWQvcGFnZS1ub3QtZm91bmQvcGFnZS1ub3QtZm91bmQuY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/_shared/page-not-found/page-not-found.component.ts":
  /*!********************************************************************!*\
    !*** ./src/app/_shared/page-not-found/page-not-found.component.ts ***!
    \********************************************************************/

  /*! exports provided: PageNotFoundComponent */

  /***/
  function srcApp_sharedPageNotFoundPageNotFoundComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function () {
      return PageNotFoundComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var PageNotFoundComponent =
    /*#__PURE__*/
    function () {
      function PageNotFoundComponent() {
        _classCallCheck(this, PageNotFoundComponent);
      }

      _createClass(PageNotFoundComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return PageNotFoundComponent;
    }();

    PageNotFoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-page-not-found',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./page-not-found.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/_shared/page-not-found/page-not-found.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./page-not-found.component.css */
      "./src/app/_shared/page-not-found/page-not-found.component.css")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], PageNotFoundComponent);
    /***/
  },

  /***/
  "./src/app/admin/admin-routing.module.ts":
  /*!***********************************************!*\
    !*** ./src/app/admin/admin-routing.module.ts ***!
    \***********************************************/

  /*! exports provided: AdminRoutingModule */

  /***/
  function srcAppAdminAdminRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdminRoutingModule", function () {
      return AdminRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _librarian_list_librarian_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./librarian-list/librarian-list.component */
    "./src/app/admin/librarian-list/librarian-list.component.ts");
    /* harmony import */


    var _shared_guards__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../_shared/_guards */
    "./src/app/_shared/_guards/index.ts");
    /* harmony import */


    var _shared_models_enums_role__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../_shared/_models/enums/role */
    "./src/app/_shared/_models/enums/role.ts");
    /* harmony import */


    var _admin_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./admin.component */
    "./src/app/admin/admin.component.ts");
    /* harmony import */


    var _librarian_add_edit_librarian_add_edit_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./librarian-add-edit/librarian-add-edit.component */
    "./src/app/admin/librarian-add-edit/librarian-add-edit.component.ts");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/admin/home/home.component.ts");

    var routes = [{
      path: '',
      component: _admin_component__WEBPACK_IMPORTED_MODULE_6__["AdminComponent"],
      canActivate: [_shared_guards__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]],
      data: {
        expectedRole: _shared_models_enums_role__WEBPACK_IMPORTED_MODULE_5__["Role"].Admin
      },
      children: [{
        path: 'home',
        component: _home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"]
      }, {
        path: 'list',
        component: _librarian_list_librarian_list_component__WEBPACK_IMPORTED_MODULE_3__["LibrarianListComponent"],
        children: [{
          path: 'edit/:id',
          component: _librarian_add_edit_librarian_add_edit_component__WEBPACK_IMPORTED_MODULE_7__["LibrarianAddEditComponent"]
        }, {
          path: 'add',
          component: _librarian_add_edit_librarian_add_edit_component__WEBPACK_IMPORTED_MODULE_7__["LibrarianAddEditComponent"]
        }]
      }]
    }];

    var AdminRoutingModule = function AdminRoutingModule() {
      _classCallCheck(this, AdminRoutingModule);
    };

    AdminRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AdminRoutingModule);
    /***/
  },

  /***/
  "./src/app/admin/admin.component.css":
  /*!*******************************************!*\
    !*** ./src/app/admin/admin.component.css ***!
    \*******************************************/

  /*! exports provided: default */

  /***/
  function srcAppAdminAdminComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2FkbWluLmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/admin/admin.component.ts":
  /*!******************************************!*\
    !*** ./src/app/admin/admin.component.ts ***!
    \******************************************/

  /*! exports provided: AdminComponent */

  /***/
  function srcAppAdminAdminComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdminComponent", function () {
      return AdminComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var src_app_shared_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/_shared/_services */
    "./src/app/_shared/_services/index.ts");

    var AdminComponent =
    /*#__PURE__*/
    function () {
      function AdminComponent(userService) {
        _classCallCheck(this, AdminComponent);

        this.userService = userService;
        this.users = [];
      }

      _createClass(AdminComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this5 = this;

          this.userService.getAll().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["first"])()).subscribe(function (users) {
            _this5.users = users;
          });
        }
      }]);

      return AdminComponent;
    }();

    AdminComponent.ctorParameters = function () {
      return [{
        type: src_app_shared_services__WEBPACK_IMPORTED_MODULE_3__["UserService"]
      }];
    };

    AdminComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-admin',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./admin.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./admin.component.css */
      "./src/app/admin/admin.component.css")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_shared_services__WEBPACK_IMPORTED_MODULE_3__["UserService"]])], AdminComponent);
    /***/
  },

  /***/
  "./src/app/admin/admin.module.ts":
  /*!***************************************!*\
    !*** ./src/app/admin/admin.module.ts ***!
    \***************************************/

  /*! exports provided: AdminModule */

  /***/
  function srcAppAdminAdminModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdminModule", function () {
      return AdminModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _librarian_list_librarian_list_item_librarian_list_item_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./librarian-list/librarian-list-item/librarian-list-item.component */
    "./src/app/admin/librarian-list/librarian-list-item/librarian-list-item.component.ts");
    /* harmony import */


    var _librarian_list_librarian_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./librarian-list/librarian-list.component */
    "./src/app/admin/librarian-list/librarian-list.component.ts");
    /* harmony import */


    var _shared_all_angular_material_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../_shared/all-angular-material.module */
    "./src/app/_shared/all-angular-material.module.ts");
    /* harmony import */


    var _admin_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./admin-routing.module */
    "./src/app/admin/admin-routing.module.ts");
    /* harmony import */


    var _admin_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./admin.component */
    "./src/app/admin/admin.component.ts");
    /* harmony import */


    var _refresh_refresh_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./refresh/refresh.component */
    "./src/app/admin/refresh/refresh.component.ts");
    /* harmony import */


    var _shared_header_header_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../_shared/header/header.component */
    "./src/app/_shared/header/header.component.ts");
    /* harmony import */


    var _librarian_add_edit_librarian_add_edit_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./librarian-add-edit/librarian-add-edit.component */
    "./src/app/admin/librarian-add-edit/librarian-add-edit.component.ts");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/admin/home/home.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _shared_services_refresh_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ../_shared/_services/refresh.service */
    "./src/app/_shared/_services/refresh.service.ts");

    var AdminModule = function AdminModule() {
      _classCallCheck(this, AdminModule);
    };

    AdminModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_admin_component__WEBPACK_IMPORTED_MODULE_7__["AdminComponent"], _refresh_refresh_component__WEBPACK_IMPORTED_MODULE_8__["RefreshComponent"], _librarian_add_edit_librarian_add_edit_component__WEBPACK_IMPORTED_MODULE_10__["LibrarianAddEditComponent"], _librarian_list_librarian_list_component__WEBPACK_IMPORTED_MODULE_4__["LibrarianListComponent"], _librarian_list_librarian_list_item_librarian_list_item_component__WEBPACK_IMPORTED_MODULE_3__["LibrarianListItemComponent"], _shared_header_header_component__WEBPACK_IMPORTED_MODULE_9__["MyHeaderComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_11__["HomeComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _shared_all_angular_material_module__WEBPACK_IMPORTED_MODULE_5__["AllMaterialModule"], _admin_routing_module__WEBPACK_IMPORTED_MODULE_6__["AdminRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"]],
      providers: [_shared_services_refresh_service__WEBPACK_IMPORTED_MODULE_13__["RefreshService"]]
    })], AdminModule);
    /***/
  },

  /***/
  "./src/app/admin/home/home.component.css":
  /*!***********************************************!*\
    !*** ./src/app/admin/home/home.component.css ***!
    \***********************************************/

  /*! exports provided: default */

  /***/
  function srcAppAdminHomeHomeComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/admin/home/home.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/admin/home/home.component.ts ***!
    \**********************************************/

  /*! exports provided: HomeComponent */

  /***/
  function srcAppAdminHomeHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
      return HomeComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var HomeComponent =
    /*#__PURE__*/
    function () {
      function HomeComponent() {
        _classCallCheck(this, HomeComponent);
      }

      _createClass(HomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return HomeComponent;
    }();

    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-home',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./home.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/home/home.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./home.component.css */
      "./src/app/admin/home/home.component.css")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], HomeComponent);
    /***/
  },

  /***/
  "./src/app/admin/librarian-add-edit/librarian-add-edit.component.css":
  /*!***************************************************************************!*\
    !*** ./src/app/admin/librarian-add-edit/librarian-add-edit.component.css ***!
    \***************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAdminLibrarianAddEditLibrarianAddEditComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2xpYnJhcmlhbi1hZGQtZWRpdC9saWJyYXJpYW4tYWRkLWVkaXQuY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/admin/librarian-add-edit/librarian-add-edit.component.ts":
  /*!**************************************************************************!*\
    !*** ./src/app/admin/librarian-add-edit/librarian-add-edit.component.ts ***!
    \**************************************************************************/

  /*! exports provided: LibrarianAddEditComponent */

  /***/
  function srcAppAdminLibrarianAddEditLibrarianAddEditComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LibrarianAddEditComponent", function () {
      return LibrarianAddEditComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var src_app_shared_services_pub_sub_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/_shared/_services/pub-sub.service */
    "./src/app/_shared/_services/pub-sub.service.ts");
    /* harmony import */


    var src_app_shared_services_librarian_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/_shared/_services/librarian.service */
    "./src/app/_shared/_services/librarian.service.ts");
    /* harmony import */


    var src_app_shared_animations_slide_in_out_animation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/_shared/_animations/slide-in-out.animation */
    "./src/app/_shared/_animations/slide-in-out.animation.ts");

    var LibrarianAddEditComponent =
    /*#__PURE__*/
    function () {
      function LibrarianAddEditComponent(route, router, librarianService, pubSubService) {
        _classCallCheck(this, LibrarianAddEditComponent);

        this.route = route;
        this.router = router;
        this.librarianService = librarianService;
        this.pubSubService = pubSubService;
        this.saving = false;
      }

      _createClass(LibrarianAddEditComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this6 = this;

          console.log("ONINIT");
          this.title = 'Add Librarian';
          var librarianId = Number(this.route.snapshot.params['id']);

          if (librarianId) {
            this.title = 'Edit Librarian';
            this.librarianService.getById(librarianId).subscribe(function (x) {
              return _this6.librarian = x;
            });
          }
        }
      }, {
        key: "saveLibrarian",
        value: function saveLibrarian() {
          var _this7 = this;

          // save librarian
          this.saving = true;
          var action = this.librarian.id ? 'update' : 'create';
          this.librarianService[action](this.librarian).subscribe(function () {
            _this7.saving = false; // redirect to librarians view

            _this7.router.navigate(['list']); // publish event so list component refreshes


            _this7.pubSubService.publish('librarians-updated');
          });
        }
      }]);

      return LibrarianAddEditComponent;
    }();

    LibrarianAddEditComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: src_app_shared_services_librarian_service__WEBPACK_IMPORTED_MODULE_4__["LibrarianService"]
      }, {
        type: src_app_shared_services_pub_sub_service__WEBPACK_IMPORTED_MODULE_3__["PubSubService"]
      }];
    };

    LibrarianAddEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-librarian-add-edit',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./librarian-add-edit.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/librarian-add-edit/librarian-add-edit.component.html")).default,
      // make slide in/out animation available to this component
      animations: [src_app_shared_animations_slide_in_out_animation__WEBPACK_IMPORTED_MODULE_5__["slideInOutAnimation"]],
      // attach the slide in/out animation to the host (root) element of this component
      host: {
        '[@slideInOutAnimation]': ''
      },
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./librarian-add-edit.component.css */
      "./src/app/admin/librarian-add-edit/librarian-add-edit.component.css")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], src_app_shared_services_librarian_service__WEBPACK_IMPORTED_MODULE_4__["LibrarianService"], src_app_shared_services_pub_sub_service__WEBPACK_IMPORTED_MODULE_3__["PubSubService"]])], LibrarianAddEditComponent);
    /***/
  },

  /***/
  "./src/app/admin/librarian-list/librarian-list-item/librarian-list-item.component.css":
  /*!********************************************************************************************!*\
    !*** ./src/app/admin/librarian-list/librarian-list-item/librarian-list-item.component.css ***!
    \********************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAdminLibrarianListLibrarianListItemLibrarianListItemComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2xpYnJhcmlhbi1saXN0L2xpYnJhcmlhbi1saXN0LWl0ZW0vbGlicmFyaWFuLWxpc3QtaXRlbS5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/admin/librarian-list/librarian-list-item/librarian-list-item.component.ts":
  /*!*******************************************************************************************!*\
    !*** ./src/app/admin/librarian-list/librarian-list-item/librarian-list-item.component.ts ***!
    \*******************************************************************************************/

  /*! exports provided: LibrarianListItemComponent */

  /***/
  function srcAppAdminLibrarianListLibrarianListItemLibrarianListItemComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LibrarianListItemComponent", function () {
      return LibrarianListItemComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_shared_models_librarian__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/_shared/_models/librarian */
    "./src/app/_shared/_models/librarian.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var LibrarianListItemComponent =
    /*#__PURE__*/
    function () {
      function LibrarianListItemComponent(router) {
        _classCallCheck(this, LibrarianListItemComponent);

        this.router = router;
      }

      _createClass(LibrarianListItemComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return LibrarianListItemComponent;
    }();

    LibrarianListItemComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", src_app_shared_models_librarian__WEBPACK_IMPORTED_MODULE_2__["Librarian"])], LibrarianListItemComponent.prototype, "librarian", void 0);
    LibrarianListItemComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-librarian-list-item',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./librarian-list-item.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/librarian-list/librarian-list-item/librarian-list-item.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./librarian-list-item.component.css */
      "./src/app/admin/librarian-list/librarian-list-item/librarian-list-item.component.css")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])], LibrarianListItemComponent);
    /***/
  },

  /***/
  "./src/app/admin/librarian-list/librarian-list.component.css":
  /*!*******************************************************************!*\
    !*** ./src/app/admin/librarian-list/librarian-list.component.css ***!
    \*******************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAdminLibrarianListLibrarianListComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2xpYnJhcmlhbi1saXN0L2xpYnJhcmlhbi1saXN0LmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/admin/librarian-list/librarian-list.component.ts":
  /*!******************************************************************!*\
    !*** ./src/app/admin/librarian-list/librarian-list.component.ts ***!
    \******************************************************************/

  /*! exports provided: LibrarianListComponent */

  /***/
  function srcAppAdminLibrarianListLibrarianListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LibrarianListComponent", function () {
      return LibrarianListComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_shared_services_librarian_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/_shared/_services/librarian.service */
    "./src/app/_shared/_services/librarian.service.ts");
    /* harmony import */


    var src_app_shared_animations_fade_in_animation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/_shared/_animations/fade-in.animation */
    "./src/app/_shared/_animations/fade-in.animation.ts");
    /* harmony import */


    var src_app_shared_services_pub_sub_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/_shared/_services/pub-sub.service */
    "./src/app/_shared/_services/pub-sub.service.ts");
    /* harmony import */


    var src_app_shared_services_refresh_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/_shared/_services/refresh.service */
    "./src/app/_shared/_services/refresh.service.ts");

    var LibrarianListComponent =
    /*#__PURE__*/
    function () {
      function LibrarianListComponent(librarianService, pubSubService, refreshService) {
        var _this8 = this;

        _classCallCheck(this, LibrarianListComponent);

        this.librarianService = librarianService;
        this.pubSubService = pubSubService;
        this.refreshService = refreshService;
        this.loading = false;
        this.refreshService.onClick.subscribe(function (x) {
          _this8.shift = x;

          _this8.changeTurn();
        });
      }

      _createClass(LibrarianListComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this9 = this;

          this.loadLibrarians(); // reload librarians when updated

          this.subscription = this.pubSubService.on('librarians-updated').subscribe(function () {
            return _this9.loadLibrarians();
          });
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          // unsubscribe to ensure no memory leaks
          this.subscription.unsubscribe();
        }
      }, {
        key: "deleteLibrarian",
        value: function deleteLibrarian(id) {
          var _this10 = this;

          console.log(id);
          this.librarianService.delete(id).subscribe(function () {
            // remove librarian from librarians array after deleting
            _this10.librarians = _this10.librarians.filter(function (x) {
              return x.id !== id;
            });
          });
        }
      }, {
        key: "loadLibrarians",
        value: function loadLibrarians() {
          var _this11 = this;

          // this.librarianService.getAll().subscribe(x => this.librarians = x);
          this.librarianService.getAll().subscribe(function (x) {
            return _this11.librarians = x;
          });
        }
      }, {
        key: "loadLibrarians2",
        value: function loadLibrarians2() {
          var _this12 = this;

          this.librarianService.getAll2().subscribe(function (x) {
            return _this12.librarians = x;
          });
        }
      }, {
        key: "changeTurn",
        value: function changeTurn() {
          this.shift ? this.loadLibrarians() : this.loadLibrarians2();
        }
      }]);

      return LibrarianListComponent;
    }();

    LibrarianListComponent.ctorParameters = function () {
      return [{
        type: src_app_shared_services_librarian_service__WEBPACK_IMPORTED_MODULE_2__["LibrarianService"]
      }, {
        type: src_app_shared_services_pub_sub_service__WEBPACK_IMPORTED_MODULE_4__["PubSubService"]
      }, {
        type: src_app_shared_services_refresh_service__WEBPACK_IMPORTED_MODULE_5__["RefreshService"]
      }];
    };

    LibrarianListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-librarian-list',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./librarian-list.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/librarian-list/librarian-list.component.html")).default,
      // make fade in animation available to this component
      animations: [src_app_shared_animations_fade_in_animation__WEBPACK_IMPORTED_MODULE_3__["fadeInAnimation"]],
      // attach the fade in animation to the host (root) element of this component
      host: {
        '[@fadeInAnimation]': ''
      },
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./librarian-list.component.css */
      "./src/app/admin/librarian-list/librarian-list.component.css")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_shared_services_librarian_service__WEBPACK_IMPORTED_MODULE_2__["LibrarianService"], src_app_shared_services_pub_sub_service__WEBPACK_IMPORTED_MODULE_4__["PubSubService"], src_app_shared_services_refresh_service__WEBPACK_IMPORTED_MODULE_5__["RefreshService"]])], LibrarianListComponent);
    /***/
  },

  /***/
  "./src/app/admin/refresh/refresh.component.css":
  /*!*****************************************************!*\
    !*** ./src/app/admin/refresh/refresh.component.css ***!
    \*****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAdminRefreshRefreshComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL3JlZnJlc2gvcmVmcmVzaC5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/admin/refresh/refresh.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/admin/refresh/refresh.component.ts ***!
    \****************************************************/

  /*! exports provided: RefreshComponent */

  /***/
  function srcAppAdminRefreshRefreshComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RefreshComponent", function () {
      return RefreshComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_shared_services_refresh_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/_shared/_services/refresh.service */
    "./src/app/_shared/_services/refresh.service.ts");

    var RefreshComponent =
    /*#__PURE__*/
    function () {
      function RefreshComponent(refreshService) {
        _classCallCheck(this, RefreshComponent);

        this.refreshService = refreshService;
      }

      _createClass(RefreshComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "refresh",
        value: function refresh() {
          this.refreshService.refresh();
        }
      }]);

      return RefreshComponent;
    }();

    RefreshComponent.ctorParameters = function () {
      return [{
        type: src_app_shared_services_refresh_service__WEBPACK_IMPORTED_MODULE_2__["RefreshService"]
      }];
    };

    RefreshComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-refresh',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./refresh.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/refresh/refresh.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./refresh.component.css */
      "./src/app/admin/refresh/refresh.component.css")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_shared_services_refresh_service__WEBPACK_IMPORTED_MODULE_2__["RefreshService"]])], RefreshComponent);
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var appRoutes = [{
      path: '',
      pathMatch: 'full',
      redirectTo: 'auth'
    }, {
      path: 'admin',
      loadChildren: function loadChildren() {
        return Promise.resolve().then(__webpack_require__.bind(null,
        /*! ./admin/admin.module */
        "./src/app/admin/admin.module.ts")).then(function (m) {
          return m.AdminModule;
        });
      }
    }, {
      path: 'dashboard',
      loadChildren: function loadChildren() {
        return Promise.resolve().then(__webpack_require__.bind(null,
        /*! ./dashboard/dashboard.module */
        "./src/app/dashboard/dashboard.module.ts")).then(function (m) {
          return m.DashboardModule;
        });
      }
    }, {
      path: 'library',
      loadChildren: function loadChildren() {
        return Promise.resolve().then(__webpack_require__.bind(null,
        /*! ./library/library.module */
        "./src/app/library/library.module.ts")).then(function (m) {
          return m.LibraryModule;
        });
      }
    }, {
      path: 'auth',
      loadChildren: function loadChildren() {
        return Promise.resolve().then(__webpack_require__.bind(null,
        /*! ./auth/auth.module */
        "./src/app/auth/auth.module.ts")).then(function (m) {
          return m.AuthModule;
        });
      }
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(appRoutes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.css":
  /*!***********************************!*\
    !*** ./src/app/app.component.css ***!
    \***********************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _shared_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./_shared/_services */
    "./src/app/_shared/_services/index.ts");

    var AppComponent =
    /*#__PURE__*/
    function () {
      function AppComponent(router, authenticationService) {
        var _this13 = this;

        _classCallCheck(this, AppComponent);

        this.router = router;
        this.authenticationService = authenticationService;
        this.authenticationService.currentUser.subscribe(function (x) {
          return _this13.currentUser = x;
        });
      } // get isAdmin() {
      //     return this.currentUser && this.currentUser.authority === Role.Admin;
      // }


      _createClass(AppComponent, [{
        key: "logout",
        value: function logout() {
          this.authenticationService.logout();
          this.router.navigate(['/']);
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _shared_services__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]
      }];
    };

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.css */
      "./src/app/app.component.css")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _shared_services__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]])], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _shared_helpers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./_shared/_helpers */
    "./src/app/_shared/_helpers/index.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/fesm2015/animations.js");
    /* harmony import */


    var _shared_all_angular_material_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./_shared/all-angular-material.module */
    "./src/app/_shared/all-angular-material.module.ts");
    /* harmony import */


    var _dashboard_dashboard_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./dashboard/dashboard.module */
    "./src/app/dashboard/dashboard.module.ts");
    /* harmony import */


    var _library_library_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./library/library.module */
    "./src/app/library/library.module.ts");
    /* harmony import */


    var _admin_admin_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./admin/admin.module */
    "./src/app/admin/admin.module.ts");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _shared_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./_shared/page-not-found/page-not-found.component */
    "./src/app/_shared/page-not-found/page-not-found.component.ts");
    /* harmony import */


    var _auth_auth_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./auth/auth.module */
    "./src/app/auth/auth.module.ts"); // used to create fake backend


    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"], _shared_all_angular_material_module__WEBPACK_IMPORTED_MODULE_8__["AllMaterialModule"], _auth_auth_module__WEBPACK_IMPORTED_MODULE_14__["AuthModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_12__["AppRoutingModule"], _admin_admin_module__WEBPACK_IMPORTED_MODULE_11__["AdminModule"], _dashboard_dashboard_module__WEBPACK_IMPORTED_MODULE_9__["DashboardModule"], _library_library_module__WEBPACK_IMPORTED_MODULE_10__["LibraryModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]],
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"], _shared_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_13__["PageNotFoundComponent"]],
      providers: [{
        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HTTP_INTERCEPTORS"],
        useClass: _shared_helpers__WEBPACK_IMPORTED_MODULE_5__["JwtInterceptor"],
        multi: true
      }, {
        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HTTP_INTERCEPTORS"],
        useClass: _shared_helpers__WEBPACK_IMPORTED_MODULE_5__["ErrorInterceptor"],
        multi: true
      }, // provider used to create fake backend
      _shared_helpers__WEBPACK_IMPORTED_MODULE_5__["fakeAuthBackendProvider"], _shared_helpers__WEBPACK_IMPORTED_MODULE_5__["fakeLibrarianBackendProvider"]],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/auth/auth-routing.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/auth/auth-routing.module.ts ***!
    \*********************************************/

  /*! exports provided: AuthRoutingModule */

  /***/
  function srcAppAuthAuthRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthRoutingModule", function () {
      return AuthRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./login/login.component */
    "./src/app/auth/login/login.component.ts");
    /* harmony import */


    var _signup_signup_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./signup/signup.component */
    "./src/app/auth/signup/signup.component.ts");
    /* harmony import */


    var _auth_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./auth.component */
    "./src/app/auth/auth.component.ts");

    var routes = [{
      path: '',
      component: _auth_component__WEBPACK_IMPORTED_MODULE_5__["AuthComponent"],
      children: [{
        path: 'login',
        component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"]
      }, {
        path: 'signup',
        component: _signup_signup_component__WEBPACK_IMPORTED_MODULE_4__["SignupComponent"]
      }]
    }];

    var AuthRoutingModule = function AuthRoutingModule() {
      _classCallCheck(this, AuthRoutingModule);
    };

    AuthRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AuthRoutingModule);
    /***/
  },

  /***/
  "./src/app/auth/auth.component.css":
  /*!*****************************************!*\
    !*** ./src/app/auth/auth.component.css ***!
    \*****************************************/

  /*! exports provided: default */

  /***/
  function srcAppAuthAuthComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dGgvYXV0aC5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/auth/auth.component.ts":
  /*!****************************************!*\
    !*** ./src/app/auth/auth.component.ts ***!
    \****************************************/

  /*! exports provided: AuthComponent */

  /***/
  function srcAppAuthAuthComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthComponent", function () {
      return AuthComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AuthComponent =
    /*#__PURE__*/
    function () {
      function AuthComponent() {
        _classCallCheck(this, AuthComponent);
      }

      _createClass(AuthComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AuthComponent;
    }();

    AuthComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-auth',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./auth.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/auth.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./auth.component.css */
      "./src/app/auth/auth.component.css")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], AuthComponent);
    /***/
  },

  /***/
  "./src/app/auth/auth.module.ts":
  /*!*************************************!*\
    !*** ./src/app/auth/auth.module.ts ***!
    \*************************************/

  /*! exports provided: AuthModule */

  /***/
  function srcAppAuthAuthModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthModule", function () {
      return AuthModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./login/login.component */
    "./src/app/auth/login/login.component.ts");
    /* harmony import */


    var _signup_signup_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./signup/signup.component */
    "./src/app/auth/signup/signup.component.ts");
    /* harmony import */


    var _auth_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./auth-routing.module */
    "./src/app/auth/auth-routing.module.ts");
    /* harmony import */


    var _shared_all_angular_material_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../_shared/all-angular-material.module */
    "./src/app/_shared/all-angular-material.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _auth_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./auth.component */
    "./src/app/auth/auth.component.ts");

    var AuthModule = function AuthModule() {
      _classCallCheck(this, AuthModule);
    };

    AuthModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_auth_component__WEBPACK_IMPORTED_MODULE_9__["AuthComponent"], _login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"], _signup_signup_component__WEBPACK_IMPORTED_MODULE_5__["SignupComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _auth_routing_module__WEBPACK_IMPORTED_MODULE_6__["AuthRoutingModule"], _shared_all_angular_material_module__WEBPACK_IMPORTED_MODULE_7__["AllMaterialModule"]]
    })], AuthModule);
    /***/
  },

  /***/
  "./src/app/auth/login/login.component.css":
  /*!************************************************!*\
    !*** ./src/app/auth/login/login.component.css ***!
    \************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAuthLoginLoginComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ":host {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  margin: 100px 0px;\n}\n\n.mat-form-field {\n  width: 100%;\n  min-width: 300px;\n}\n\nmat-card-title,\nmat-card-content {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n\n.error {\n  padding: 16px;\n  width: 300px;\n  color: white;\n  background-color: red;\n}\n\n.button {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: end;\n          justify-content: flex-end;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aC9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usb0JBQWE7RUFBYixhQUFhO0VBQ2Isd0JBQXVCO1VBQXZCLHVCQUF1QjtFQUN2QixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsZ0JBQWdCO0FBQ2xCOztBQUVBOztFQUVFLG9CQUFhO0VBQWIsYUFBYTtFQUNiLHdCQUF1QjtVQUF2Qix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsWUFBWTtFQUNaLFlBQVk7RUFDWixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxvQkFBYTtFQUFiLGFBQWE7RUFDYixxQkFBeUI7VUFBekIseUJBQXlCO0FBQzNCIiwiZmlsZSI6InNyYy9hcHAvYXV0aC9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgbWFyZ2luOiAxMDBweCAwcHg7XG59XG5cbi5tYXQtZm9ybS1maWVsZCB7XG4gIHdpZHRoOiAxMDAlO1xuICBtaW4td2lkdGg6IDMwMHB4O1xufVxuXG5tYXQtY2FyZC10aXRsZSxcbm1hdC1jYXJkLWNvbnRlbnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmVycm9yIHtcbiAgcGFkZGluZzogMTZweDtcbiAgd2lkdGg6IDMwMHB4O1xuICBjb2xvcjogd2hpdGU7XG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbn1cblxuLmJ1dHRvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/auth/login/login.component.ts":
  /*!***********************************************!*\
    !*** ./src/app/auth/login/login.component.ts ***!
    \***********************************************/

  /*! exports provided: LoginComponent */

  /***/
  function srcAppAuthLoginLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
      return LoginComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var src_app_shared_services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/_shared/_services */
    "./src/app/_shared/_services/index.ts");
    /* harmony import */


    var src_app_shared_models_enums_role__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/_shared/_models/enums/role */
    "./src/app/_shared/_models/enums/role.ts");

    var LoginComponent =
    /*#__PURE__*/
    function () {
      function LoginComponent(formBuilder, route, router, authenticationService) {
        _classCallCheck(this, LoginComponent);

        this.formBuilder = formBuilder;
        this.route = route;
        this.router = router;
        this.authenticationService = authenticationService;
        this.loading = false;
        this.submitted = false;
        this.error = ''; // redirect to home if already logged in
        // if (this.authenticationService.currentUserValue) { 
        //     this.router.navigate(['/']);
        // }
      }

      _createClass(LoginComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.loginForm = this.formBuilder.group({
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
          });
        } // convenience getter for easy access to form fields

      }, {
        key: "submit",
        value: function submit() {
          var _this14 = this;

          this.submitted = true; // stop here if form is invalid

          if (this.loginForm.invalid) {
            return;
          }

          this.loading = true;
          this.authenticationService.login(this.f.username.value, this.f.password.value).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["first"])()).subscribe(function (data) {
            var url;

            switch (data.authority) {
              case src_app_shared_models_enums_role__WEBPACK_IMPORTED_MODULE_6__["Role"].Admin:
                url = '/admin/home';
                break;

              case src_app_shared_models_enums_role__WEBPACK_IMPORTED_MODULE_6__["Role"].Customer:
                url = '/library';
                break;

              case src_app_shared_models_enums_role__WEBPACK_IMPORTED_MODULE_6__["Role"].Librarian:
                url = '/dashboard';
                break;

              default:
                break;
            }

            _this14.router.navigate([url]);
          }, function (error) {
            console.log("error");
            _this14.error = error;
            _this14.loading = false;
          });
        }
      }, {
        key: "f",
        get: function get() {
          return this.loginForm.controls;
        }
      }]);

      return LoginComponent;
    }();

    LoginComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: src_app_shared_services__WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"]
      }];
    };

    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-login',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./login.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/login/login.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./login.component.css */
      "./src/app/auth/login/login.component.css")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], src_app_shared_services__WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"]])], LoginComponent);
    /***/
  },

  /***/
  "./src/app/auth/signup/signup.component.css":
  /*!**************************************************!*\
    !*** ./src/app/auth/signup/signup.component.css ***!
    \**************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAuthSignupSignupComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".signup-container {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n}\n\n.signup-container > * {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aC9zaWdudXAvc2lnbnVwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxvQkFBYTtFQUFiLGFBQWE7RUFDYiw0QkFBc0I7RUFBdEIsNkJBQXNCO1VBQXRCLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLFdBQVc7QUFDYiIsImZpbGUiOiJzcmMvYXBwL2F1dGgvc2lnbnVwL3NpZ251cC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNpZ251cC1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4uc2lnbnVwLWNvbnRhaW5lciA+ICoge1xuICB3aWR0aDogMTAwJTtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/auth/signup/signup.component.ts":
  /*!*************************************************!*\
    !*** ./src/app/auth/signup/signup.component.ts ***!
    \*************************************************/

  /*! exports provided: SignupComponent */

  /***/
  function srcAppAuthSignupSignupComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SignupComponent", function () {
      return SignupComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var src_app_shared_helpers_must_match_validator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/_shared/_helpers/must-match.validator */
    "./src/app/_shared/_helpers/must-match.validator.ts");

    var SignupComponent =
    /*#__PURE__*/
    function () {
      function SignupComponent(formBuilder) {
        _classCallCheck(this, SignupComponent);

        this.formBuilder = formBuilder;
        this.options = ['Here', 'Will', 'Be', 'Options'];
        this.submitted = false;
      }

      _createClass(SignupComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.signupForm = this.formBuilder.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            options: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6)]],
            confirmPassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
          }, {
            validator: Object(src_app_shared_helpers_must_match_validator__WEBPACK_IMPORTED_MODULE_3__["MustMatch"])('password', 'confirmPassword')
          });
        } // convenience getter for easy access to form fields

      }, {
        key: "signup",
        value: function signup() {
          this.submitted = true; // stop here if form is invalid

          if (this.signupForm.invalid) {
            return;
          }

          alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.signupForm.value));
        }
      }, {
        key: "form",
        get: function get() {
          return this.signupForm.controls;
        }
      }]);

      return SignupComponent;
    }();

    SignupComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }];
    };

    SignupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-signup',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./signup.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/signup/signup.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./signup.component.css */
      "./src/app/auth/signup/signup.component.css")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])], SignupComponent);
    /***/
  },

  /***/
  "./src/app/dashboard/dashboard-routing.module.ts":
  /*!*******************************************************!*\
    !*** ./src/app/dashboard/dashboard-routing.module.ts ***!
    \*******************************************************/

  /*! exports provided: DashboardRoutingModule */

  /***/
  function srcAppDashboardDashboardRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DashboardRoutingModule", function () {
      return DashboardRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _shared_guards__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../_shared/_guards */
    "./src/app/_shared/_guards/index.ts");
    /* harmony import */


    var _shared_models_enums_role__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../_shared/_models/enums/role */
    "./src/app/_shared/_models/enums/role.ts");
    /* harmony import */


    var _dashboard_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./dashboard.component */
    "./src/app/dashboard/dashboard.component.ts");

    var routes = [{
      path: '',
      component: _dashboard_component__WEBPACK_IMPORTED_MODULE_5__["DashboardComponent"],
      canActivate: [_shared_guards__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]],
      data: {
        expectedRole: _shared_models_enums_role__WEBPACK_IMPORTED_MODULE_4__["Role"].Librarian
      }
    }];

    var DashboardRoutingModule = function DashboardRoutingModule() {
      _classCallCheck(this, DashboardRoutingModule);
    };

    DashboardRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], DashboardRoutingModule);
    /***/
  },

  /***/
  "./src/app/dashboard/dashboard.component.css":
  /*!***************************************************!*\
    !*** ./src/app/dashboard/dashboard.component.css ***!
    \***************************************************/

  /*! exports provided: default */

  /***/
  function srcAppDashboardDashboardComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/dashboard/dashboard.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/dashboard/dashboard.component.ts ***!
    \**************************************************/

  /*! exports provided: DashboardComponent */

  /***/
  function srcAppDashboardDashboardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DashboardComponent", function () {
      return DashboardComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var src_app_shared_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/_shared/_services */
    "./src/app/_shared/_services/index.ts");

    var DashboardComponent =
    /*#__PURE__*/
    function () {
      function DashboardComponent(userService, authenticationService) {
        _classCallCheck(this, DashboardComponent);

        this.userService = userService;
        this.authenticationService = authenticationService;
        this.currentUser = this.authenticationService.currentUserValue;
      }

      _createClass(DashboardComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this15 = this;

          this.userService.getById(this.currentUser.id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["first"])()).subscribe(function (user) {
            _this15.userFromApi = user;
          });
        }
      }]);

      return DashboardComponent;
    }();

    DashboardComponent.ctorParameters = function () {
      return [{
        type: src_app_shared_services__WEBPACK_IMPORTED_MODULE_3__["UserService"]
      }, {
        type: src_app_shared_services__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]
      }];
    };

    DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-dashboard',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./dashboard.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/dashboard.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./dashboard.component.css */
      "./src/app/dashboard/dashboard.component.css")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_shared_services__WEBPACK_IMPORTED_MODULE_3__["UserService"], src_app_shared_services__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]])], DashboardComponent);
    /***/
  },

  /***/
  "./src/app/dashboard/dashboard.module.ts":
  /*!***********************************************!*\
    !*** ./src/app/dashboard/dashboard.module.ts ***!
    \***********************************************/

  /*! exports provided: DashboardModule */

  /***/
  function srcAppDashboardDashboardModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DashboardModule", function () {
      return DashboardModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./dashboard.component */
    "./src/app/dashboard/dashboard.component.ts");
    /* harmony import */


    var _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./dashboard-routing.module */
    "./src/app/dashboard/dashboard-routing.module.ts");

    var DashboardModule = function DashboardModule() {
      _classCallCheck(this, DashboardModule);
    };

    DashboardModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_4__["DashboardRoutingModule"]]
    })], DashboardModule);
    /***/
  },

  /***/
  "./src/app/library/library-routing.module.ts":
  /*!***************************************************!*\
    !*** ./src/app/library/library-routing.module.ts ***!
    \***************************************************/

  /*! exports provided: LibraryRoutingModule */

  /***/
  function srcAppLibraryLibraryRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LibraryRoutingModule", function () {
      return LibraryRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _shared_guards__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../_shared/_guards */
    "./src/app/_shared/_guards/index.ts");
    /* harmony import */


    var _shared_models_enums_role__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../_shared/_models/enums/role */
    "./src/app/_shared/_models/enums/role.ts");
    /* harmony import */


    var _library_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./library.component */
    "./src/app/library/library.component.ts");

    var routes = [{
      path: '',
      component: _library_component__WEBPACK_IMPORTED_MODULE_5__["LibraryComponent"],
      canActivate: [_shared_guards__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]],
      data: {
        expectedRole: _shared_models_enums_role__WEBPACK_IMPORTED_MODULE_4__["Role"].Customer
      }
    }];

    var LibraryRoutingModule = function LibraryRoutingModule() {
      _classCallCheck(this, LibraryRoutingModule);
    };

    LibraryRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], LibraryRoutingModule);
    /***/
  },

  /***/
  "./src/app/library/library.component.css":
  /*!***********************************************!*\
    !*** ./src/app/library/library.component.css ***!
    \***********************************************/

  /*! exports provided: default */

  /***/
  function srcAppLibraryLibraryComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xpYnJhcnkvbGlicmFyeS5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/library/library.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/library/library.component.ts ***!
    \**********************************************/

  /*! exports provided: LibraryComponent */

  /***/
  function srcAppLibraryLibraryComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LibraryComponent", function () {
      return LibraryComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var src_app_shared_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/_shared/_services */
    "./src/app/_shared/_services/index.ts");

    var LibraryComponent =
    /*#__PURE__*/
    function () {
      function LibraryComponent(userService, authenticationService) {
        _classCallCheck(this, LibraryComponent);

        this.userService = userService;
        this.authenticationService = authenticationService;
        this.currentUser = this.authenticationService.currentUserValue;
      }

      _createClass(LibraryComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this16 = this;

          this.userService.getById(this.currentUser.id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["first"])()).subscribe(function (user) {
            _this16.userFromApi = user;
          });
        }
      }]);

      return LibraryComponent;
    }();

    LibraryComponent.ctorParameters = function () {
      return [{
        type: src_app_shared_services__WEBPACK_IMPORTED_MODULE_3__["UserService"]
      }, {
        type: src_app_shared_services__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]
      }];
    };

    LibraryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-library',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./library.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/library/library.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./library.component.css */
      "./src/app/library/library.component.css")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_shared_services__WEBPACK_IMPORTED_MODULE_3__["UserService"], src_app_shared_services__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]])], LibraryComponent);
    /***/
  },

  /***/
  "./src/app/library/library.module.ts":
  /*!*******************************************!*\
    !*** ./src/app/library/library.module.ts ***!
    \*******************************************/

  /*! exports provided: LibraryModule */

  /***/
  function srcAppLibraryLibraryModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LibraryModule", function () {
      return LibraryModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _library_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./library.component */
    "./src/app/library/library.component.ts");
    /* harmony import */


    var _shared_all_angular_material_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../_shared/all-angular-material.module */
    "./src/app/_shared/all-angular-material.module.ts");
    /* harmony import */


    var _library_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./library-routing.module */
    "./src/app/library/library-routing.module.ts");

    var LibraryModule = function LibraryModule() {
      _classCallCheck(this, LibraryModule);
    };

    LibraryModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_library_component__WEBPACK_IMPORTED_MODULE_3__["LibraryComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _shared_all_angular_material_module__WEBPACK_IMPORTED_MODULE_4__["AllMaterialModule"], _library_routing_module__WEBPACK_IMPORTED_MODULE_5__["LibraryRoutingModule"]]
    })], LibraryModule);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false,
      apiUrl: 'http://localhost:8080',
      firebase: {
        apiKey: "AIzaSyDm5-QX7HNDy2H4jX7RxxdSa1BV_xAYDYg",
        authDomain: "library-8393c.firebaseapp.com",
        databaseURL: "https://library-8393c.firebaseio.com",
        projectId: "library-8393c",
        storageBucket: "library-8393c.appspot.com",
        messagingSenderId: "846769383641"
      }
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! hammerjs */
    "./node_modules/hammerjs/hammer.js");
    /* harmony import */


    var hammerjs__WEBPACK_IMPORTED_MODULE_1___default =
    /*#__PURE__*/
    __webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _polyfills__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./polyfills */
    "./src/polyfills.ts");

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"]);

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"]).catch(function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  "./src/polyfills.ts":
  /*!**************************!*\
    !*** ./src/polyfills.ts ***!
    \**************************/

  /*! no exports provided */

  /***/
  function srcPolyfillsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var zone_js_dist_zone__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! zone.js/dist/zone */
    "./node_modules/zone.js/dist/zone-evergreen.js");
    /* harmony import */


    var zone_js_dist_zone__WEBPACK_IMPORTED_MODULE_1___default =
    /*#__PURE__*/
    __webpack_require__.n(zone_js_dist_zone__WEBPACK_IMPORTED_MODULE_1__);
    /**
     * This file includes polyfills needed by Angular and is loaded before the app.
     * You can add your own extra polyfills to this file.
     *
     * This file is divided into 2 sections:
     *   1. Browser polyfills. These are applied before loading ZoneJS and are sorted by browsers.
     *   2. Application imports. Files imported after ZoneJS that should be loaded before your main
     *      file.
     *
     * The current setup is for so-called "evergreen" browsers; the last versions of browsers that
     * automatically update themselves. This includes Safari >= 10, Chrome >= 55 (including Opera),
     * Edge >= 13 on the desktop, and iOS 10 and Chrome on mobile.
     *
     * Learn more in https://angular.io/guide/browser-support
     */

    /***************************************************************************************************
     * BROWSER POLYFILLS
     */

    /** IE10 and IE11 requires the following for NgClass support on SVG elements */
    // import 'classlist.js';  // Run `npm install --save classlist.js`.

    /**
     * Web Animations `@angular/platform-browser/animations`
     * Only required if AnimationBuilder is used within the application and using IE/Edge or Safari.
     * Standard animation support in Angular DOES NOT require any polyfills (as of Angular 6.0).
     */
    // import 'web-animations-js';  // Run `npm install --save web-animations-js`.

    /**
     * By default, zone.js will patch all possible macroTask and DomEvents
     * user can disable parts of macroTask/DomEvents patch by setting following flags
     * because those flags need to be set before `zone.js` being loaded, and webpack
     * will put import in the top of bundle, so user need to create a separate file
     * in this directory (for example: zone-flags.ts), and put the following flags
     * into that file, and then add the following code before importing zone.js.
     * import './zone-flags.ts';
     *
     * The flags allowed in zone-flags.ts are listed here.
     *
     * The following flags will work for all browsers.
     *
     * (window as any).__Zone_disable_requestAnimationFrame = true; // disable patch requestAnimationFrame
     * (window as any).__Zone_disable_on_property = true; // disable patch onProperty such as onclick
     * (window as any).__zone_symbol__UNPATCHED_EVENTS = ['scroll', 'mousemove']; // disable patch specified eventNames
     *
     *  in IE/Edge developer tools, the addEventListener will also be wrapped by zone.js
     *  with the following flag, it will bypass `zone.js` patch for IE/Edge
     *
     *  (window as any).__Zone_enable_cross_context_check = true;
     *
     */

    /***************************************************************************************************
     * Zone JS is required by default for Angular itself.
     */
    // Included with Angular CLI.

    /***************************************************************************************************
     * APPLICATION IMPORTS
     */

    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /home/alexandr/Documents/workspace/projects/libraryFE/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map