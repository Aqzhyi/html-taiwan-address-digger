function dig(template) {
  const ADDRESS_EX = /(..(?:縣|市).{2,3}(?:鄉|區|鎮|市|街|路|道).*?(?:號|樓))/img

  if (template == null && typeof template !== 'string') {
    return Promise.reject('需要一份<樣版: string> 來提供解析')
  }

  template = template.replace(/[\r\n\t]/g, '').replace(/[ ]{2,}/g, ' ')

  let data = template.match(ADDRESS_EX)

  return Promise.resolve(data)
}

export default {dig}
