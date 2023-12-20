function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));

var styles = {"primary":"_3ljpl","default":"_3UK6o","dashed":"_27xYC","text":"_5bXm4","link":"_71S8l"};

var Button = function Button(_ref) {
  var type = _ref.type,
    content = _ref.content;
  return /*#__PURE__*/React.createElement("button", {
    className: styles[type]
  }, content);
};

exports.Button = Button;
//# sourceMappingURL=index.js.map
