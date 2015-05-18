"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

Object.defineProperty(exports, "__esModule", {
  value: true
});

var Element = function Element(value) {
  _classCallCheck(this, Element);

  this.prev = null;
  this.next = null;
  this.value = value;
};

var LinkedList = (function () {
  function LinkedList() {
    _classCallCheck(this, LinkedList);

    this.totalNodes = 0;
    this.start = null;
  }

  _createClass(LinkedList, [{
    key: "push",
    value: function push(value) {
      if (this.start) {
        this.addNode(value, this.start.prev);
      } else {
        this.addNode(value);
      }
    }
  }, {
    key: "addNode",
    value: function addNode(value, location) {

      var node = new Element(value);

      if (!location) {
        this.start = node.prev = node.next = node;
      } else {
        node.next = this.start;
        node.prev = this.start.prev;

        location.next = node;
        location = node;
        //this doesn't work
        //'this'
      }

      this.totalNodes++;
    }
  }, {
    key: "unshift",
    value: function unshift(value) {
      if (this.start) {
        this.addNode(value, this.start);
      } else {
        this.addNode(value);
      }
    }
  }, {
    key: "pop",
    value: function pop() {
      if (!this.start) {
        return undefined;
      }var el = this.start.prev;
      this.start.prev.prev.next = this.start;
      this.start.prev = this.start.prev.prev;
      this.totalNodes--;
      return el.value;
    }
  }, {
    key: "shift",
    value: function shift() {
      if (!this.start) {
        return undefined;
      }var el = this.start;
      this.start.prev.next = this.start.next;
      this.start.next.prev = this.start.prev;
      this.start = this.start.next;
      this.totalNodes++;
      return el.value;
    }
  }, {
    key: "count",
    value: function count() {
      return this.totalNodes;
    }
  }, {
    key: "delete",
    value: function _delete(value, node) {
      node = node || this.start;
      if (node.value === value) {
        node.prev.next = node.next;
        node.next.prev = node.prev;
        this.totalNodes--;
      } else if (node.next === this.start) {
        return false;
      } else {
        return this["delete"](value, node.next);
      }
    }
  }]);

  return LinkedList;
})();

exports["default"] = LinkedList;
module.exports = exports["default"];