class MobileMenu {
  constructor() {
      this.DOM = {};
      this.DOM.btn = document.querySelector('.menu__button');
      this.DOM.text = document.querySelector('.menu__button--text');
      this.DOM.menu = document.querySelector('.menu_content');
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
  }
}

// インスタンス化
new MobileMenu();
