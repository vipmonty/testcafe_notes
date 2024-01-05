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
    ("demoaqButtonTest", async t => {
        const button = Selector('#item-3');
        await t.click(button).wait(5000)

        const headerSelector = Selector(".main-header");
        const headerString = await headerSelector.innerText;

        console.log('Header String: ' + headerString);
    });

test
    .page("youtube.com")
    ("youtube_test", async t => {
        const name_test = Selector('.ytd-searchbox');
        await t
            .click(name_test).wait(5000)

    })

// test

//     .page('google.com')
//     ('google search button test', async t => {
//         console.log("googot passed too")
//         const search_button = Selector("input.gNO89b")
//         await t.click(search_button)

//     })
// test
//     .page('https://vipmonty.github.io/portfolio_project.github.io/')
//     ('Testing my git.io page', async t => {
//         console.log("Testing if my vip section button works")
//         const vip_button = Selector('#navPanelToggle')
//         await t
//             .click(vip_button)
//             .wait(100000)

// })