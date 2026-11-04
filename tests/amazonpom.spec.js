import{test} from'@playwright/test'
import { amazon1 } from '../page/amazon1'

test('amazon iphone search', async({page})=>{

    const amazonsearch=new amazon1(page)

    await amazonsearch.visiturl()
    await amazonsearch.search()
    await amazonsearch.iphone()


})

