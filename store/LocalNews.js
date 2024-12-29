export const state = () => ({
    news: [
        {
            id: 0,
            title: "Zeldzame tropische storm Leslie richt ravage aan in Portugal",
            description: "Orkaan Leslie is in de nacht van zaterdag op zondag als een tropische storm aan land gekomen in Portugal. Leslie richtte een ravage aan langs de noordkust van Portugal ",
            thumbnail: "/img/media-nu/hjsxbmvaevzn_wd640.jpg",
            date: "2018-10-14",
            dateNice: "14 oktober 2018"
        },
        {
            id: 1,
            title: "Brimstone wint Spaanse filmprijs",
            description: "De film Brimstone van Martin Koolhoven heeft zaterdagavond de grote prijs van het Almería Western Filmfestival in Spanje gewonnen. ",
            thumbnail: "/img/media-nu/fjpxu1lazes2_wd640.jpg",
            date: "2018-10-06",
            dateNice: "6 oktober 2018"
        },
        {
            id: 2,
            title: "Zevenduizend bomen verwisseld langs A6",
            description: "Rijkswaterstaat begint maandag met de vervanging van zevenduizend oude populieren langs de A6 bij Lelystad. De bomen worden de komende maanden verwijderd om volgend jaar plaats te maken voor nieuwe aanplant.",
            thumbnail: "/img/media-nu/xb1xph5a4qfc_wd640.jpg",
            date: "2018-04-18",
            dateNice: "18 april 2018"
        },
        {
            id: 3,
            title: "Steekpartij op camping in Arnhem, verdachte aangehouden",
            description: "Op een vakantiepark in Arnhem-Noord is in de nacht van zaterdag op zondag een man neergestoken. Vanwege onrust op het park droeg de politie kogelwerende vesten en konden hulpdiensten eerst niet het terrein op.",
            thumbnail: "/img/media-nu/7x5xcyrabdgg_wd640.jpg",
            date: "2017-01-02",
            dateNice: "2 januari 2017"
        },
        {
            id: 4,
            title: "Rutte wil dat Nederlandse CEO's zich meer laten zien in de media",
            description: "Premier Mark Rutte zou willen dat de topmensen van Nederlandse multinationals zich vaker laten zien in de media. Dat moet de moeizame relatie die er op het moment is tussen het bedrijfsleven en de samenleving herstellen.",
            thumbnail: "/img/media-nu/3ujxzyxatwmf_wd640.jpg",
            date: "2018-10-12",
            dateNice: "12 oktober 2018"
        }
    ]
});

export const getters = {
    getList: state => {
        return state.news;
    },
    getItem: (state) => (id) => {
        return state.news.find(item => item.id == id);
    }
};