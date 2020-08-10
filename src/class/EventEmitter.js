class EventEmitter {
  constructor() {
    this._subs = {}
  }

  /**
   *
   * @param {string} event 事件名称
   * @param {string} eventName 该文件监听的事件名
   * @param {function} cb 回调函数
   * 因为会有多个文件同时监听一个事件,所以是个数组
   */
  on(event, eventName, cb) {
    (this._subs[event] || (this._subs[event] = [])).push({name: eventName, cb})
  }

  /**
   *
   * @param event
   * @param args
   * 触发,获取到该事件对应的数组进行循环调用
   */
  emit(event, ...args) {
    this._subs[event] && this._subs[event].forEach(obj => obj.cb(...args))
  }

  off(event, eventName) {
    if (this._subs[event]) {
      const index = this._subs[event].filter(obj => obj.name === eventName)
      this._subs[event].splice(index, 1)

      !!!this._subs[event].length && delete this._subs[event]
    }
  }
}

export default new EventEmitter()
