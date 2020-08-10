import {Dialog, Toast} from 'vant'

/**
 * 确认提示框装饰器
 * @param {*} message 提示信息
 * @param {*} title 标题
 * @param {*} cancelFn 取消回调函数
 */
export function confirm(message = '确定要删除数据，此操作不可回退。', title = '提示', cancelFn = function () {
}) {
  return function (target, name, descriptor) {
    console.log(target, name, descriptor)
    const originFn = descriptor.value
    descriptor.value = async function (...rest) {
      Dialog.confirm({
        message,
        title: title
      })
        .then(e => {
          originFn.apply(this, rest)
        })
        .catch(e => {
          cancelFn && cancelFn(e)
        })
    }
  }
}
