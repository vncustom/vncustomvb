load('config.js');
function execute(url) {
    url = url.replace(/^(?:https?:\/\/)?(?:[^@\n]+@)?(?:www\.)?([^:\/\n?]+)/img, BASE_URL);
    let response = fetch(url);
    if (response.ok) {
        let doc = response.html();
        let el = doc.select(".book ")
        return Response.success({
            name: doc.select(".info h1").first().text(),
            cover: doc.select(".info .cover img").first().attr("src"),
            author: doc.select(".info .small span").get(0).text(),
            description: doc.select(".info .intro dd").text(),
            detail: doc.select(".info .small span").get(0).text(),
            host: BASE_URL,
            ongoing: doc.select(".info .small span").get(1).text().indexOf("已经完本") == -1
        });
        

    }
    return null;
}