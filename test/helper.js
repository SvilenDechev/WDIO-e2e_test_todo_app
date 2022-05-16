class Helper {

  async expectVisible(element) {
    await element.waitForDisplayed({ timeout: 5000 })
  }

  async expectInvisible(element) {
    await element.waitForDisplayed({ timeout: 3000, reverse: true });
  }

  async expectText(element, text) {
    await element.waitForExist({ timeout: 5000 })
    await expect(element).toHaveText(text)
  }


  async expectValue(element, text) {
    await element.waitForExist({ timeout: 5000 })
    await expect(element).toHaveValue(text)
  }

  async setValue(element, value) {
    await element.waitForExist({ timeout: 5000 })
    await element.clearValue()
    await element.setValue(value)
    await this.expectValue(element, value)
  }

  getElementWithAriaLabel(label) {
    return $(`[aria-label="${label}"]`)
  }

}

module.exports = new Helper();
