'use strict';

// ES5 shims for Function.prototype.bind, Object.prototype.keys, etc.
require('core-js/es5');

// Assert Library
var chai = require('chai');
var chaiDatetime = require('chai-datetime');
var expect = chai.expect;

// Controls
var React = require('react/addons');
var TestUtils = React.addons.TestUtils;
var PostMeta = require('../../../../client/app/components/post/postmeta');
var Ago = require('react-ago-component');

// Setup
chai.use(chaiDatetime);

// Test
describe('PostMeta', function () {
  it('User data display correct ', function () {
    var data = {
      username: 'user',
      nickname: 'nickname',
      createdAt: new Date()
    };
    var postMeta = TestUtils.renderIntoDocument(
      <PostMeta username={ data.username } nickname={ data.nickname } createdAt={ data.createdAt } />
    );

    var postMetaDOM = React.findDOMNode(postMeta);

    // Assert link
    var a = postMetaDOM.querySelectorAll('a');
    expect(a[0].getAttribute('href')).to.equal('http://keanux.com/@user');
    expect(a[1].getAttribute('href')).to.equal('http://keanux.com/@user');

    // Assert icon
    var img = postMetaDOM.querySelector('img');
    expect(img.getAttribute('src')).to.equal('https://graph.facebook.com/user/picture?width=120&height=120');

    // Assert child control
    var ago = TestUtils.findRenderedComponentWithType(postMeta, Ago);
    expect(ago.props.date).to.equalDate(data.createdAt);
  });
});
