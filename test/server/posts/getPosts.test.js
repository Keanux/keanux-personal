var sinon = require('sinon');
var chai = require('chai');
var expect = chai.expect;

var Models = require('../../../server/models');
var getPosts = require('../../../server/routes/posts/getPosts');

describe('Login', function() {
  describe('Get Posts', function() {

    it('Get Posts should return all posts', function() {
      var req = {};
      var res = {};
      res.json = sinon.spy();

      var post = {
        title: '0到1 121/365',
        subtitle: '凡事起頭難',
        content: '0到1，無中生有，在什麼也沒有的情況下，要怎麼變出東西來，靠的就是想像力，還有充分的利用現有資源。<div><br></div><div>我的工作是網站設計，主要就是必須先了解需求，了解有哪些功能，一個項目一個項目的構思大概需要的實作方法和時間，然後逐一從無到有的建構，一行一行的程式編寫出每個功能，透過軟體編譯將寫好的程式變成0與1，再進行各層次的溝通，從程式語言到機器語言再回到人機介面，一連串的拆解與組合，在一次又一次的工程專案中，我看到的是藉由持續不斷的完成0到1，將每個細節精密的打造後產出的作品，在每個項目的起頭都是最困難的開始，因為沒有一個支撐點，就是容易產生放棄的念頭，或著不知道該從哪一點下手。</div><div><br></div><div>也因為經歷過了無數個工作項目，才深刻的感受到，喔，其實就下手就對了，先把1完成，別想太多，做的很差也沒關係，太簡單更好，總之先求有，然後到了10的時候再回頭調整，到了20再來，30...40...80，最後終究會到100，假設100是盡頭，是完美的數字，那就再重來一次，可是這次是Level 2的1。</div><div><br></div><div>困難的從0到1，其實就是可以變得很簡單，別想太多，做就對了，更重要的是別一下子想的太龐大把自己都嚇傻了什麼也不敢做，真的要做，就把龐大的項目細分到馬上就能做的程度，現在就可以做，先有個開始，再來逐一評估剩下的還需要花多少時間、人力和資源。</div><div><br></div><div>總之，做就對了。Just do it!</div>',
        user: { name: 'test' }
      };
      var mockFind = {
        populate: function (table) {
          return this;
        },
        exec: function () {
          return this;
        },
        then: function (callback) {
          callback([post]);
        }
      };

      sinon.stub(Models.Post, "find")
        .withArgs({})
        .returns(mockFind);

      getPosts(req, res);

      expect(res.json.calledOnce).to.equals(true);
      expect(Models.Post.find.calledOnce).to.equals(true);
    });
  });
});
