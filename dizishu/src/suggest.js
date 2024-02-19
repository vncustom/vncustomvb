load('config.js');
function execute(input, next) {
    let doc = Html.parse(input);
    let books = [];
    doc.select("dl").forEach(e => {
        books.push({
            name: e.select("h4 a").text(),
            link: e.select("h4 a").attr("href"),
            cover: e.select("img").first().attr("src"),
            description: e.select("p.intro").text(),
            host: BASE_URL
        })
    });

    return Response.success(books);

}