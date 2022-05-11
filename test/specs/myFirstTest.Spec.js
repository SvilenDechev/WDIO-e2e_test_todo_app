const ToDoPage = require('../pageobjects/todoHomePage');

async function waitAndClick(selector) {
    await selector.waitForExist()
    await expect(selector).toBeClickable()
    await selector.click()
    await browser.pause(500)
}

function isTaskDisplayed(taskNum) {
    expect(ToDoPage.task(taskNum)).toBeDisplayed()
}

function isNotTaskDisplayed(taskNum) {
    expect(ToDoPage.task(taskNum)).not.toBeDisplayed()
}

function expectTaskText(taskNum, text) {
    expect(ToDoPage.task(taskNum)).toHaveText(text)
}

describe('first test', async () => {

    it.only('should navigate to example cypress page', async () => {
        await browser.url('https://example.cypress.io/todo')

        await isTaskDisplayed(2);

        await isNotTaskDisplayed(3)
    });

    it.only('should be check tasks text', async () => {
        await expectTaskText(1, 'Pay electric bill');
        await expectTaskText(2, 'Walk the dog');
    });

    it.only('should be able to add new tasks', async () => {
        await ToDoPage.addNewTask('To get launch')
        await ToDoPage.addNewTask('To write homework')

        await isTaskDisplayed(3)
        await isTaskDisplayed(4)

        await expectTaskText(3, 'To get launch')
        await expectTaskText(4, 'To write homework')
    });

    it.only('should be able to mark task as completed', async () => {
        await !expect(ToDoPage.task(1)).toHaveAttribute('class', 'completed')
        await !expect(ToDoPage.task(2)).toHaveAttribute('class', 'completed')

        await ToDoPage.checkbox(1).click()
        await ToDoPage.checkbox(2).click()

        await expect(ToDoPage.task(1)).toHaveAttribute('class', 'completed')
        await expect(ToDoPage.task(2)).toHaveAttribute('class', 'completed')
    });


    it.only('should displayed only completed tasks', async () => {
        await waitAndClick(ToDoPage.showCompletedTaskButton)

        await isTaskDisplayed(1);
        await isTaskDisplayed(2);


        await expect(ToDoPage.task(1)).toHaveAttribute('class', 'completed')
        await expect(ToDoPage.task(2)).toHaveAttribute('class', 'completed')

        await expectTaskText(1, 'Pay electric bill')
        await expectTaskText(2, 'Walk the dog')

        await isNotTaskDisplayed(3)
    });


    it.only('should displayed only active tasks', async () => {
        await waitAndClick(ToDoPage.showActiveTaskButton)

        await isTaskDisplayed(1);
        await isTaskDisplayed(2);

        await !expect(ToDoPage.task(1)).toHaveAttribute('class', 'completed')
        await !expect(ToDoPage.task(2)).toHaveAttribute('class', 'completed')


        await expectTaskText(1, 'To get launch')
        await expectTaskText(2, 'To write homework')
    });

    it.only('should displayed all tasks', async () => {
        await waitAndClick(ToDoPage.showAllTaskButton)
       
        for (let i = 1; i < 5; i++) {
        await expect(ToDoPage.task(i)).toBeDisplayed()
        }
    });

    it.only('should be clear completed', async () => {
        await waitAndClick(ToDoPage.clearCompletedButton)
        
        await !expect(ToDoPage.task(1)).toHaveAttribute('class', 'completed')
        await !expect(ToDoPage.task(2)).toHaveAttribute('class', 'completed')
        
        await isTaskDisplayed(1);
        await isTaskDisplayed(2);
        
        await expectTaskText(1, 'To get launch')
        await expectTaskText(2, 'To write homework')
    });
});
