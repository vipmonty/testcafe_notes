import { Selector, t } from "testcafe";

fixture("Vips first fixture").skipJsErrors();

test
    .skip
    .page("youtube.com")
    ("vip's first test", async t => {
        console.log("Pass!!!!")
    });

test
    .skip
    .page('http://demoqa.com/text-box')
    ("demoaqelementTest", async t => {
        const element = Selector('#item-3');
        await t.click(element).wait(5000)

        const headerSelector = Selector(".rt-resizable-header-content");
        const headerString = await headerSelector.innerText;

        console.log('inner Text is: ' + headerString);
    });

test
    .skip
    .page("youtube.com")
    ("youtube_test", async t => {
        const name_test = Selector('.ytd-searchbox');
        await t
            .click(name_test).wait(5000)

    })

test
    .page('youtube.com')
    ('searchBarTest', async t => {
        const element = Selector('.ytd-feed-filter-chip-bar-renderer')
        await t.click(element).wait(5000)
        const innerText = await element.classNames
        console.log('here are the attributes ' + innerText)
    })


// test

//     .page('google.com')
//     ('google search element test', async t => {
//         console.log("googot passed too")
//         const search_element = Selector("input.gNO89b")
//         await t.click(search_element)

//     })
// test
//     .page('https://vipmonty.github.io/portfolio_project.github.io/')
//     ('Testing my git.io page', async t => {
//         console.log("Testing if my vip section element works")
//         const vip_element = Selector('#navPanelToggle')
//         await t
//             .click(vip_element)
//             .wait(100000)

// })