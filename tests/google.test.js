import { searchOpsIn } from 'search_ops-in'

describe('Google Ops-in Search Test', () => {

  beforeAll(async () => {
    console.log('Hello!!')
  })

  it('オプスイン検索', async () => {

    await searchOpsIn()

  })

  afterAll(async () => {
    console.log('Good Bye!!')
  })
})
