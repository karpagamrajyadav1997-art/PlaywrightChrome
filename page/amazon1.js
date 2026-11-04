export class amazon1{
    constructor(page){
        this.page=page
        this.searchbox=page.locator('//input[@id="twotabsearchtextbox"]');
        this.iphone18search=page.locator('//h2[text()="Results"]//ancestor::div[contains(@class,"a-section a-spacing-none s-result-item")]//following-sibling::div[@role="listitem"]//descendant::span[text()="iPhone 18 Pro (256 GB) - Black"]')

    }
    
    async visiturl(){
        await this.page.goto("https://www.amazon.in")
    }

    async search(){
        await this.searchbox.fill('iphone18')
        await this.page.keyboard.press('Enter');
        }
    async iphone(){
        await this.iphone18search.click()
    }
    


}