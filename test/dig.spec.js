import {expect} from 'chai'
import digger from '../dist/index'
import fs from 'fs'

describe('dig()', () => {

  let templates = [
    './test/article1.html',
    './test/article2.html',
    './test/article3.html',
  ]

  templates = templates.map((templateUrl) => fs.readFileSync(templateUrl, { encoding: 'utf8' }))

  it('Basic Usage', () => {

    let p1 = digger
    .dig(templates[0])
    .then((result) => {

      expect(result).to.be.an('array')
      expect(result).to.include('桃園縣寶山街276號')
      expect(result).to.include('新竹市民生路286號')
      expect(result).to.include('竹北市文平路86號')
      expect(result).to.include('桃園市寶山街276號')
      expect(result).to.include('桃園市中正五街188號')
      expect(result).to.include('新北市鶯歌區永明街58號')
      expect(result).to.include('台北市中山區龍江路106巷3號')
    })

    let p2 = digger
    .dig(templates[1])
    .then((result) => {

      expect(result).to.be.an('null')
    })

    let p3 = digger
    .dig(templates[2])
    .then((result) => {

      expect(result).to.be.an('array')
      expect(result).to.include('台南市南區大同路二段130號')
    })

    return Promise.all([p1, p2, p3])
  })
})
