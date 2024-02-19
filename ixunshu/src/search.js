load("config.js");

function execute(key, page) {
    let response = fetch(BASE_URL + "/zhao/", {
        method: "GET",
        queries: {
            "keyword": key
        }
    });

    if (response.ok) {
        let doc = response.html();
        let books = [];
        doc.select("#hotcontent > .l > .item").forEach(e => {
            books.push({
                name: e.select("a").last().text(),
                link: e.select("a").last().attr("href"),
                cover: e.select("img").attr("data-original"),
                description: e.select("dd").text(),
                host: BASE_URL
            })
        });

        return Response.success(books);
    }

    return null;
}