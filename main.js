class MobileMenu {
  constructor() {
      this.DOM = {};
      this.DOM.btn = document.querySelector('.menu__button');
      this.DOM.text = document.querySelector('.menu__button--text');
      this.DOM.menu = document.querySelector('.menu__content');
      this.DOM.list = document.querySelector('.menu_content--list');
      this.eventType = this._getEventType();
      this._addEvent();
  }
  // スマホかタブレットかの確認
  _getEventType() {
      return window.ontouchstart ? 'touchstart' : 'click';
  }

  // クリックされた際のクラスネームの処理
  _toggle() {
      this.DOM.btn.classList.toggle('active');
      this.DOM.menu.classList.toggle('active');
  }

  // クリックされた際のメニュー下部のテキストを’MENU’から’CLOSEに’変える処理
  _textChange(){
    if(this.DOM.btn.className === 'menu__button'){
      this.DOM.text.textContent = 'MENU';
    }else{
      this.DOM.text.textContent = 'CLOSE';
    }
  }

// クリックイベントを定義
  _addEvent() {
      this.DOM.btn.addEventListener(this.eventType, this._toggle.bind(this));
      this.DOM.btn.addEventListener(this.eventType, this._textChange.bind(this));
      this.DOM.list.addEventListener(this.eventType,this._toggle.bind(this));
  }


}

// インスタンス化
new MobileMenu();



document.addEventListener('DOMContentLoaded', function () {

  const cb = function (el, isIntersecting) {
      if(isIntersecting) {
          const ta = new TextAnimation(el);
          ta.animate();
      }
  }

  const so = new ScrollObserver('.team__block--unit-title', cb);

  const so1 = new ScrollObserver('.youngplayer-name', cb);

  const so2 = new ScrollObserver('.veteranplayer-name', cb);

  const so3 = new ScrollObserver('.foreigner-name', cb);

});


document.addEventListener('DOMContentLoaded', function () {

  const cb = function (el, isIntersecting) {
      if(isIntersecting) {
          el.classList.toggle('inview');
      }
  }

  const so4 = new ScrollObserver('.player-picture', cb);
  
});
