(function() {
'use strict';
var myLocalStorage = angular.module('msLocalStorage', []);
myLocalStorage.provider('localStorageService', function() {
  this.notify = {
    setItem: true,
    removeItem: false
  };
  this.setNotify = function(itemSet, itemRemove) {
    this.notify = {
      setItem: itemSet,
      removeItem: itemRemove
    };
  };
  this.$get = ['$rootScope', '$window', '$document', function($rootScope, $window, $document) {
    var prefix = 'ls';
    var notify = this.notify;
    var webStorage;
    if (!$document) {
      $document = document;
    }
    var deriveKey = function(key) {
      return prefix + key;
    }
    var setPrefix = function(value) {
      prefix = value;
      return true;
    }
    var getPrefix = function() {
      return prefix;
    }
    var browserSupportsLocalStorage = (function () {
      try {
        var supported = ('localStorage' in $window && $window.localStorage !== null);
        var key = deriveKey('__' + Math.round(Math.random() * 1e7));
        if (supported) {
          webStorage = $window.localStorage;
          webStorage.setItem(key, '');
          webStorage.removeItem(key);
        }
        return supported;
      } catch (e) {
        $rootScope.$broadcast('LocalStorageModule.notification.error', e.message);
        return false;
      }
    }());
    var addToLocalStorage = function (key, value) {
      if(!browserSupportsLocalStorage){
        return;
      }
      if (typeof value === "undefined") {
        value = null;
      }
      try {
        if (angular.isObject(value) || angular.isArray(value)) {
          value = angular.toJson(value);
        }
        if (webStorage) {webStorage.setItem(deriveKey(key), value)};
        if (notify.setItem) {
          $rootScope.$broadcast('LocalStorageModule.notification.setitem', {key: key, newvalue: value});
        }
      } catch (e) {
        $rootScope.$broadcast('LocalStorageModule.notification.error', e.message);
        return false;
      }
      return true;
    };
    var getFromLocalStorage = function (key) {
      if(!browserSupportsLocalStorage){
        return;
      }
      var item = webStorage ? webStorage.getItem(deriveKey(key)) : null;
      if (!item || item === 'null') {
        return null;
      }
      if (item.charAt(0) === "{" || item.charAt(0) === "[") {
        return angular.fromJson(item);
      }
      return item;
    };
    var removeFromLocalStorage = function (key) {
      if(!browserSupportsLocalStorage){
        return;
      }
      try {
        webStorage.removeItem(deriveKey(key));
        if (notify.removeItem) {
          $rootScope.$broadcast('LocalStorageModule.notification.removeitem', {key: key});
        }
      } catch (e) {
        $rootScope.$broadcast('LocalStorageModule.notification.error', e.message);
        return false;
      }
      return true;
    };
    var getKeysForLocalStorage = function () {
      if(!browserSupportsLocalStorage){
        return;
      }
      var prefixLength = prefix.length;
      var keys = [];
      for (var key in webStorage) {
        if (key.substr(0,prefixLength) === prefix) {
          try {
            keys.push(key.substr(prefixLength));
          } catch (e) {
            $rootScope.$broadcast('LocalStorageModule.notification.error', e.Description);
            return [];
          }
        }
      }
      return keys;
    };
    return {
      isSupported: browserSupportsLocalStorage,
      set: addToLocalStorage,
      get: getFromLocalStorage,
      keys: getKeysForLocalStorage,
      remove: removeFromLocalStorage,
      setPrefix: setPrefix,
      getPrefix: getPrefix
    };
  }];
});
}).call(this);