const state = () => ({
    news: [
        {
            id: 0,
            title: "Zeldzame tropische storm Leslie richt ravage aan in Portugal",
            description: "Orkaan Leslie is in de nacht van zaterdag op zondag als een tropische storm aan land gekomen in Portugal. Leslie richtte een ravage aan langs de noordkust van Portugal ",
            thumbnail: "https://media.nu.nl/m/hjsxbmvaevzn_wd640.jpg/zeldzame-tropische-storm-leslie-richt-ravage-in-portugal-.jpg",
            date: "2018-10-14",
            dateNice: "14 oktober 2018"
        },
        {
            id: 1,
            title: "Brimstone wint Spaanse filmprijs",
            description: "De film Brimstone van Martin Koolhoven heeft zaterdagavond de grote prijs van het Almería Western Filmfestival in Spanje gewonnen. ",
            thumbnail: "https://media.nu.nl/m/fjpxu1lazes2_wd640.jpg/brimstone-wint-spaanse-filmprijs.jpg",
            date: "2018-10-06",
            dateNice: "6 oktober 2018"
        },
        {
            id: 2,
            title: "Zevenduizend bomen verwisseld langs A6",
            description: "Rijkswaterstaat begint maandag met de vervanging van zevenduizend oude populieren langs de A6 bij Lelystad. De bomen worden de komende maanden verwijderd om volgend jaar plaats te maken voor nieuwe aanplant.",
            thumbnail: "https://media.nu.nl/m/xb1xph5a4qfc_wd640.jpg/zevenduizend-bomen-verwisseld-langs-a6.jpg",
            date: "2018-04-18",
            dateNice: "18 april 2018"
        },
        {
            id: 3,
            title: "Steekpartij op camping in Arnhem, verdachte aangehouden",
            description: "Op een vakantiepark in Arnhem-Noord is in de nacht van zaterdag op zondag een man neergestoken. Vanwege onrust op het park droeg de politie kogelwerende vesten en konden hulpdiensten eerst niet het terrein op.",
            thumbnail: "https://media.nu.nl/m/7x5xcyrabdgg_wd640.jpg/steekpartij-camping-in-arnhem-verdachte-aangehouden.jpg",
            date: "2017-01-02",
            dateNice: "2 januari 2017"
        },
        {
            id: 4,
            title: "Rutte wil dat Nederlandse CEO's zich meer laten zien in de media",
            description: "Premier Mark Rutte zou willen dat de topmensen van Nederlandse multinationals zich vaker laten zien in de media. Dat moet de moeizame relatie die er op het moment is tussen het bedrijfsleven en de samenleving herstellen.",
            thumbnail: "https://media.nu.nl/m/3ujxzyxatwmf_wd640.jpg/rutte-wil-nederlandse-ceos-zich-meer-laten-zien-in-media.jpg",
            date: "2018-10-12",
            dateNice: "12 oktober 2018"
        }
    ]
});

const getters = {
    news: state => {
        return state.news;
    },
    newsItem: (state) => (id) => {
        return state.news.find(item => item.id == id);
    }
};

const mutations = {
    news: (state, value) => {
        state.news = value;
    }
};

export default {
    state,
    getters,
    mutations
};