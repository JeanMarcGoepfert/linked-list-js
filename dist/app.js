"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

Object.defineProperty(exports, "__esModule", {
  value: true
});

var Node = function Node(value) {
  _classCallCheck(this, Node);

  this.value = value;
  this.prev = this;
  this.next = this;
};

var LinkedList = (function () {
  function LinkedList() {
    _classCallCheck(this, LinkedList);

    this.head = null;
    this.total = 0;
  }

  _createClass(LinkedList, [{
    key: "push",
    value: function push(value) {
      this.add(value);
    }
  }, {
    key: "unshift",
    value: function unshift(value) {
      this.head = this.add(value);
    }
  }, {
    key: "pop",
    value: function pop() {
      if (!this.head) {
        return undefined;
      }return this.remove(this.head.prev);
    }
  }, {
    key: "shift",
    value: function shift() {
      if (!this.head) {
        return undefined;
      }return this.remove(this.head);
    }
  }, {
    key: "delete",
    value: function _delete(value) {
      var node = arguments[1] === undefined ? this.head : arguments[1];

      if (node.value === value) {
        return this.remove(node);
      } else if (node.next === this.head) {
        return undefined;
      }

      return this["delete"](value, node.next);
    }
  }, {
    key: "count",
    value: function count() {
      return this.total;
    }
  }, {
    key: "add",
    value: function add(value) {
      var node = new Node(value);

      if (this.head) {
        var _ref = [this.head.prev, this.head];
        node.prev = _ref[0];
        node.next = _ref[1];

        this.head.prev.next = this.head.prev = node;
      } else {
        this.head = node;
      }

      this.total++;
      return node;
    }
  }, {
    key: "remove",
    value: function remove(node) {
      if (node === node.next) {
        this.head = null;
      } else {
        node.next.prev = node.prev;
        node.prev.next = node.next;

        if (node === this.head) this.head = node.next;
      }

      this.total--;
      return node.value;
    }
  }]);

  return LinkedList;
})();

exports["default"] = LinkedList;
module.exports = exports["default"];