function getTitle (vm) {
  const { title } = vm.$options

  if (title) {
    return typeof title === 'function'
      ? title.call(vm)
      : title
  }
}
export default {
  created () {
    console.log('makeTitlePlugin')
    console.log(this)
    const title = getTitle(this)
    if (title) {
      document.title = title
    }
  }
}