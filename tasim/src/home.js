function execute() {
    return Response.success([
        // { title: "Cập Nhật", input: "", script: "gen.js" },
        // { title: "Hoàn thành", input: "/finish", script: "gen.js" },
        // { title: "Manhwa", input: "/tim-truyen/manhwa", script: "gen.js" },
        // { title: "18+", input: "/tim-truyen/18", script: "gen.js" },
        // { title: "Top Tuần", input: "5", script: "top.js" },
        // { title: "Top Tháng", input: "3", script: "top.js" },
	{ title: "玄幻", input: "/xuanhuan", script: "gen.js" },
	{ title: "武侠", input: "/wuxia", script: "gen.js" },
        { title: "都市", input: "/dushi", script: "gen.js" },
        { title: "历史", input: "/lishi", script: "gen.js" },
        { title: "网游", input: "/wangyou", script: "gen.js" },
        { title: "科幻", input: "/kehuan", script: "gen.js" },
        { title: "女生", input: "/mm", script: "gen.js" },
        { title: "全本", input: "/finish", script: "gen.js" },
        { title: "排行榜", input: "/top", script: "rank.js" }	
    ]);
}