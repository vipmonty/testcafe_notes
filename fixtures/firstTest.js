fixture("Vips first fixture")

test
    .page("youtube.com")
    ("vip's first test", async t => {
        console.log("Pass!!!!")
    });
test
    .page('google.com')
    ('googot', async => {
        console.log("googot passed too")
    })