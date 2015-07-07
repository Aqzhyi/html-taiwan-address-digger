import {expect} from 'chai'
import digger from '../dist/index'
import fs from 'fs'

describe('dig()', () => {

  let template = fs.readFileSync('./test/article1.html', { encoding: 'utf8' })

  it('Basic Usage', () => {

    return digger.dig(template)
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
  })
})
