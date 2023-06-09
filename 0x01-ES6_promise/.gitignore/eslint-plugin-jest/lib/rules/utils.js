"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getNodeName = getNodeName;
exports.scopeHasLocalReference = exports.isDescribe = exports.isTestCase = exports.isHook = exports.isFunction = exports.TestCaseProperty = exports.DescribeProperty = exports.HookName = exports.TestCaseName = exports.DescribeAlias = exports.parseExpectCall = exports.isParsedEqualityMatcherCall = exports.EqualityMatcher = exports.ModifierName = exports.isExpectMember = exports.isExpectCall = exports.getAccessorValue = exports.isSupportedAccessor = exports.hasOnlyOneArgument = exports.getStringValue = exports.isStringNode = exports.followTypeAssertionChain = exports.createRule = void 0;

var _path = require("path");

var _experimentalUtils = require("@typescript-eslint/experimental-utils");

var _package = require("../../package.json");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const REPO_URL = 'https://github.com/jest-community/eslint-plugin-jest';

const createRule = _experimentalUtils.ESLintUtils.RuleCreator(name => {
  const ruleName = (0, _path.basename)(name, '.ts');
  return `${REPO_URL}/blob/v${_package.version}/docs/rules/${ruleName}.md`;
});

exports.createRule = createRule;

const isTypeCastExpression = node => node.type === _experimentalUtils.AST_NODE_TYPES.TSAsExpression || node.type === _experimentalUtils.AST_NODE_TYPES.TSTypeAssertion;

const followTypeAssertionChain = expression => isTypeCastExpression(expression) ? followTypeAssertionChain(expression.expression) : expression;
/**
 * A `Literal` with a `value` of type `string`.
 */


exports.followTypeAssertionChain = followTypeAssertionChain;

/**
 * Checks if the given `node` is a `StringLiteral`.
 *
 * If a `value` is provided & the `node` is a `StringLiteral`,
 * the `value` will be compared to that of the `StringLiteral`.
 *
 * @param {Node} node
 * @param {V?} value
 *
 * @return {node is StringLiteral<V>}
 *
 * @template {V}.
 */
const isStringLiteral = (node, value) => node.type === _experimentalUtils.AST_NODE_TYPES.Literal && typeof node.value === 'string' && (value === undefined || node.value === value);

/**
 * Checks if the given `node` is a `TemplateLiteral`.
 *
 * Complex `TemplateLiteral`s are not considered specific, and so will return `false`.
 *
 * If a `value` is provided & the `node` is a `TemplateLiteral`,
 * the `value` will be compared to that of the `TemplateLiteral`.
 *
 * @param {Node} node
 * @param {V?} value
 *
 * @return {node is TemplateLiteral<V>}
 *
 * @template V
 */
const isTemplateLiteral = (node, value) => node.type === _experimentalUtils.AST_NODE_TYPES.TemplateLiteral && node.quasis.length === 1 && ( // bail out if not simple
value === undefined || node.quasis[0].value.raw === value);

/**
 * Checks if the given `node` is a {@link StringNode}.
 *
 * @param {Node} node
 * @param {V?} specifics
 *
 * @return {node is StringNode}
 *
 * @template V
 */
const isStringNode = (node, specifics) => isStringLiteral(node, specifics) || isTemplateLiteral(node, specifics);
/**
 * Gets the value of the given `StringNode`.
 *
 * If the `node` is a `TemplateLiteral`, the `raw` value is used;
 * otherwise, `value` is returned instead.
 *
 * @param {StringNode<S>} node
 *
 * @return {S}
 *
 * @template S
 */


exports.isStringNode = isStringNode;

const getStringValue = node => isTemplateLiteral(node) ? node.quasis[0].value.raw : node.value;
/**
 * Represents a `MemberExpression` with a "known" `property`.
 */


exports.getStringValue = getStringValue;

/**
 * Guards that the given `call` has only one `argument`.
 *
 * @param {CallExpression} call
 *
 * @return {call is CallExpressionWithSingleArgument}
 */
const hasOnlyOneArgument = call => call.arguments && call.arguments.length === 1;
/**
 * An `Identifier` with a known `name` value - i.e `expect`.
 */


exports.hasOnlyOneArgument = hasOnlyOneArgument;

/**
 * Checks if the given `node` is an `Identifier`.
 *
 * If a `name` is provided, & the `node` is an `Identifier`,
 * the `name` will be compared to that of the `identifier`.
 *
 * @param {Node} node
 * @param {V?} name
 *
 * @return {node is KnownIdentifier<Name>}
 *
 * @template V
 */
const isIdentifier = (node, name) => node.type === _experimentalUtils.AST_NODE_TYPES.Identifier && (name === undefined || node.name === name);
/**
 * Checks if the given `node` is a "supported accessor".
 *
 * This means that it's a node can be used to access properties,
 * and who's "value" can be statically determined.
 *
 * `MemberExpression` nodes most commonly contain accessors,
 * but it's possible for other nodes to contain them.
 *
 * If a `value` is provided & the `node` is an `AccessorNode`,
 * the `value` will be compared to that of the `AccessorNode`.
 *
 * Note that `value` here refers to the normalised value.
 * The property that holds the value is not always called `name`.
 *
 * @param {Node} node
 * @param {V?} value
 *
 * @return {node is AccessorNode<V>}
 *
 * @template V
 */


const isSupportedAccessor = (node, value) => isIdentifier(node, value) || isStringNode(node, value);
/**
 * Gets the value of the given `AccessorNode`,
 * account for the different node types.
 *
 * @param {AccessorNode<S>} accessor
 *
 * @return {S}
 *
 * @template S
 */


exports.isSupportedAccessor = isSupportedAccessor;

const getAccessorValue = accessor => accessor.type === _experimentalUtils.AST_NODE_TYPES.Identifier ? accessor.name : getStringValue(accessor);

exports.getAccessorValue = getAccessorValue;

/**
 * Checks if the given `node` is a valid `ExpectCall`.
 *
 * In order to be an `ExpectCall`, the `node` must:
 *  * be a `CallExpression`,
 *  * have an accessor named 'expect',
 *  * have a `parent`.
 *
 * @param {Node} node
 *
 * @return {node is ExpectCall}
 */
const isExpectCall = node => node.type === _experimentalUtils.AST_NODE_TYPES.CallExpression && isSupportedAccessor(node.callee, 'expect') && node.parent !== undefined;

exports.isExpectCall = isExpectCall;

const isExpectMember = (node, name) => node.type === _experimentalUtils.AST_NODE_TYPES.MemberExpression && isSupportedAccessor(node.property, name);
/**
 * Represents all the jest matchers.
 */


exports.isExpectMember = isExpectMember;
let ModifierName;
exports.ModifierName = ModifierName;

(function (ModifierName) {
  ModifierName["not"] = "not";
  ModifierName["rejects"] = "rejects";
  ModifierName["resolves"] = "resolves";
})(ModifierName || (exports.ModifierName = ModifierName = {}));

let EqualityMatcher;
exports.EqualityMatcher = EqualityMatcher;

(function (EqualityMatcher) {
  EqualityMatcher["toBe"] = "toBe";
  EqualityMatcher["toEqual"] = "toEqual";
  EqualityMatcher["toStrictEqual"] = "toStrictEqual";
})(EqualityMatcher || (exports.EqualityMatcher = EqualityMatcher = {}));

const isParsedEqualityMatcherCall = (matcher, name) => (name ? matcher.name === name : EqualityMatcher.hasOwnProperty(matcher.name)) && matcher.arguments !== null && matcher.arguments.length === 1;
/**
 * Represents a parsed expect matcher, such as `toBe`, `toContain`, and so on.
 */


exports.isParsedEqualityMatcherCall = isParsedEqualityMatcherCall;

const parseExpectMember = expectMember => ({
  name: getAccessorValue(expectMember.property),
  node: expectMember
});

const reparseAsMatcher = parsedMember => _objectSpread({}, parsedMember, {
  /**
   * The arguments being passed to this `Matcher`, if any.
   *
   * If this matcher isn't called, this will be `null`.
   */
  arguments: parsedMember.node.parent && parsedMember.node.parent.type === _experimentalUtils.AST_NODE_TYPES.CallExpression ? parsedMember.node.parent.arguments : null
});
/**
 * Re-parses the given `parsedMember` as a `ParsedExpectModifier`.
 *
 * If the given `parsedMember` does not have a `name` of a valid `Modifier`,
 * an exception will be thrown.
 *
 * @param {ParsedExpectMember<ModifierName>} parsedMember
 *
 * @return {ParsedExpectModifier}
 */


const reparseMemberAsModifier = parsedMember => {
  if (isSpecificMember(parsedMember, ModifierName.not)) {
    return parsedMember;
  }
  /* istanbul ignore if */


  if (!isSpecificMember(parsedMember, ModifierName.resolves) && !isSpecificMember(parsedMember, ModifierName.rejects)) {
    // ts doesn't think that the ModifierName.not check is the direct inverse as the above two checks
    // todo: impossible at runtime, but can't be typed w/o negation support
    throw new Error(`modifier name must be either "${ModifierName.resolves}" or "${ModifierName.rejects}" (got "${parsedMember.name}")`);
  }

  const negation = parsedMember.node.parent && isExpectMember(parsedMember.node.parent, ModifierName.not) ? parsedMember.node.parent : undefined;
  return _objectSpread({}, parsedMember, {
    negation
  });
};

const isSpecificMember = (member, specific) => member.name === specific;
/**
 * Checks if the given `ParsedExpectMember` should be re-parsed as an `ParsedExpectModifier`.
 *
 * @param {ParsedExpectMember} member
 *
 * @return {member is ParsedExpectMember<ModifierName>}
 */


const shouldBeParsedExpectModifier = member => ModifierName.hasOwnProperty(member.name);

const parseExpectCall = expect => {
  const expectation = {
    expect
  };

  if (!isExpectMember(expect.parent)) {
    return expectation;
  }

  const parsedMember = parseExpectMember(expect.parent);

  if (!shouldBeParsedExpectModifier(parsedMember)) {
    expectation.matcher = reparseAsMatcher(parsedMember);
    return expectation;
  }

  const modifier = expectation.modifier = reparseMemberAsModifier(parsedMember);
  const memberNode = modifier.negation || modifier.node;

  if (!memberNode.parent || !isExpectMember(memberNode.parent)) {
    return expectation;
  }

  expectation.matcher = reparseAsMatcher(parseExpectMember(memberNode.parent));
  return expectation;
};

exports.parseExpectCall = parseExpectCall;
let DescribeAlias;
exports.DescribeAlias = DescribeAlias;

(function (DescribeAlias) {
  DescribeAlias["describe"] = "describe";
  DescribeAlias["fdescribe"] = "fdescribe";
  DescribeAlias["xdescribe"] = "xdescribe";
})(DescribeAlias || (exports.DescribeAlias = DescribeAlias = {}));

let TestCaseName;
exports.TestCaseName = TestCaseName;

(function (TestCaseName) {
  TestCaseName["fit"] = "fit";
  TestCaseName["it"] = "it";
  TestCaseName["test"] = "test";
  TestCaseName["xit"] = "xit";
  TestCaseName["xtest"] = "xtest";
})(TestCaseName || (exports.TestCaseName = TestCaseName = {}));

let HookName;
exports.HookName = HookName;

(function (HookName) {
  HookName["beforeAll"] = "beforeAll";
  HookName["beforeEach"] = "beforeEach";
  HookName["afterAll"] = "afterAll";
  HookName["afterEach"] = "afterEach";
})(HookName || (exports.HookName = HookName = {}));

let DescribeProperty;
exports.DescribeProperty = DescribeProperty;

(function (DescribeProperty) {
  DescribeProperty["each"] = "each";
  DescribeProperty["only"] = "only";
  DescribeProperty["skip"] = "skip";
})(DescribeProperty || (exports.DescribeProperty = DescribeProperty = {}));

let TestCaseProperty;
exports.TestCaseProperty = TestCaseProperty;

(function (TestCaseProperty) {
  TestCaseProperty["each"] = "each";
  TestCaseProperty["only"] = "only";
  TestCaseProperty["skip"] = "skip";
  TestCaseProperty["todo"] = "todo";
})(TestCaseProperty || (exports.TestCaseProperty = TestCaseProperty = {}));

function getNodeName(node) {
  function joinNames(a, b) {
    return a && b ? `${a}.${b}` : null;
  }

  switch (node.type) {
    case _experimentalUtils.AST_NODE_TYPES.Identifier:
      return node.name;

    case _experimentalUtils.AST_NODE_TYPES.Literal:
      return `${node.value}`;

    case _experimentalUtils.AST_NODE_TYPES.TemplateLiteral:
      if (node.expressions.length === 0) return node.quasis[0].value.cooked;
      break;

    case _experimentalUtils.AST_NODE_TYPES.MemberExpression:
      return joinNames(getNodeName(node.object), getNodeName(node.property));
  }

  return null;
}

const isFunction = node => node.type === _experimentalUtils.AST_NODE_TYPES.FunctionExpression || node.type === _experimentalUtils.AST_NODE_TYPES.ArrowFunctionExpression;

exports.isFunction = isFunction;

const isHook = node => {
  return node.callee.type === _experimentalUtils.AST_NODE_TYPES.Identifier && HookName.hasOwnProperty(node.callee.name);
};

exports.isHook = isHook;

const isTestCase = node => {
  return node.callee.type === _experimentalUtils.AST_NODE_TYPES.Identifier && TestCaseName.hasOwnProperty(node.callee.name) || node.callee.type === _experimentalUtils.AST_NODE_TYPES.MemberExpression && node.callee.object.type === _experimentalUtils.AST_NODE_TYPES.Identifier && TestCaseName.hasOwnProperty(node.callee.object.name) && node.callee.property.type === _experimentalUtils.AST_NODE_TYPES.Identifier && TestCaseProperty.hasOwnProperty(node.callee.property.name);
};

exports.isTestCase = isTestCase;

const isDescribe = node => {
  return node.callee.type === _experimentalUtils.AST_NODE_TYPES.Identifier && DescribeAlias.hasOwnProperty(node.callee.name) || node.callee.type === _experimentalUtils.AST_NODE_TYPES.MemberExpression && node.callee.object.type === _experimentalUtils.AST_NODE_TYPES.Identifier && DescribeAlias.hasOwnProperty(node.callee.object.name) && node.callee.property.type === _experimentalUtils.AST_NODE_TYPES.Identifier && DescribeProperty.hasOwnProperty(node.callee.property.name);
};

exports.isDescribe = isDescribe;

const collectReferences = scope => {
  const locals = new Set();
  const unresolved = new Set();
  let currentScope = scope;

  while (currentScope !== null) {
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = currentScope.variables[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        const ref = _step.value;
        const isReferenceDefined = ref.defs.some(def => {
          return def.type !== 'ImplicitGlobalVariable';
        });

        if (isReferenceDefined) {
          locals.add(ref.name);
        }
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

    var _iteratorNormalCompletion2 = true;
    var _didIteratorError2 = false;
    var _iteratorError2 = undefined;

    try {
      for (var _iterator2 = currentScope.through[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
        const ref = _step2.value;
        unresolved.add(ref.identifier.name);
      }
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

    currentScope = currentScope.upper;
  }

  return {
    locals,
    unresolved
  };
};

const scopeHasLocalReference = (scope, referenceName) => {
  const references = collectReferences(scope);
  return (// referenceName was found as a local variable or function declaration.
    references.locals.has(referenceName) || // referenceName was not found as an unresolved reference,
    // meaning it is likely not an implicit global reference.
    !references.unresolved.has(referenceName)
  );
};

exports.scopeHasLocalReference = scopeHasLocalReference;