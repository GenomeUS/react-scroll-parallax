"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _ParallaxController = _interopRequireDefault(require("../classes/ParallaxController"));

var _withController = _interopRequireDefault(require("./withController"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Parallax = /*#__PURE__*/function (_Component) {
  _inherits(Parallax, _Component);

  var _super = _createSuper(Parallax);

  function Parallax() {
    var _this;

    _classCallCheck(this, Parallax);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "mapRefOuter", function (ref) {
      _this._outer = ref;
    });

    _defineProperty(_assertThisInitialized(_this), "mapRefInner", function (ref) {
      _this._inner = ref;
    });

    return _this;
  }

  _createClass(Parallax, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      // Make sure the provided controller is an instance of the Parallax Controller
      var isInstance = this.controller instanceof _ParallaxController.default; // Throw if neither context or global is available

      if (!this.controller && !isInstance) {
        throw new Error("Must wrap your application's <Parallax /> components in a <ParallaxProvider />.");
      } // create a new parallax element and save the reference


      this.element = this.controller.createElement(this._getElementOptions());
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (this.props.disabled !== prevProps.disabled || this.props.x[0] !== prevProps.x[0] || this.props.x[1] !== prevProps.x[1] || this.props.y[0] !== prevProps.y[0] || this.props.y[1] !== prevProps.y[1]) {
        this.controller.updateElementPropsById(this.element.id, this._getElementOptions().props);
      } // resets element styles when disabled


      if (this.props.disabled !== prevProps.disabled && this.props.disabled) {
        this.controller.resetElementStyles(this.element);
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.controller.removeElementById(this.element.id);
    }
  }, {
    key: "_getElementOptions",
    value: function _getElementOptions() {
      return {
        elInner: this._inner,
        elOuter: this._outer,
        props: {
          disabled: this.props.disabled,
          x0: this.props.x[0],
          x1: this.props.x[1],
          y0: this.props.y[0],
          y1: this.props.y[1]
        }
      };
    }
  }, {
    key: "controller",
    get: function get() {
      return this.props.parallaxController;
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          className = _this$props.className,
          Outer = _this$props.tagOuter,
          Inner = _this$props.tagInner,
          styleOuter = _this$props.styleOuter,
          styleInner = _this$props.styleInner;
      var rootClass = 'parallax-outer' + (className ? " ".concat(className) : '');
      return /*#__PURE__*/_react.default.createElement(Outer, {
        className: rootClass,
        ref: this.mapRefOuter,
        style: styleOuter
      }, /*#__PURE__*/_react.default.createElement(Inner, {
        className: "parallax-inner",
        ref: this.mapRefInner,
        style: styleInner
      }, children));
    }
  }]);

  return Parallax;
}(_react.Component);

_defineProperty(Parallax, "defaultProps", {
  disabled: false,
  tagInner: 'div',
  tagOuter: 'div',
  x: [0, 0],
  y: [0, 0]
});

_defineProperty(Parallax, "propTypes", {
  children: _propTypes.default.node,
  className: _propTypes.default.string,
  disabled: _propTypes.default.bool.isRequired,
  parallaxController: _propTypes.default.object,
  styleInner: _propTypes.default.object,
  styleOuter: _propTypes.default.object,
  tagInner: _propTypes.default.string.isRequired,
  tagOuter: _propTypes.default.string.isRequired,
  x: _propTypes.default.arrayOf(_propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number])),
  y: _propTypes.default.arrayOf(_propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number]))
});

var _default = (0, _withController.default)(Parallax);

exports.default = _default;