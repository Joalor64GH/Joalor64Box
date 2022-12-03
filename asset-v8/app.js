/* 0.5.4 2021-04-23 21:06:13 */
var app = new function() {
    this.name = "Dystopia", this.version = "8", this.date = "2020", this.folder = "asset-v8/", this.looptime = 6857, this.bpm = 140, this.totalframe = 328, this.nbpolo = 7, this.nbloopbonus = 6, this.bonusloopA = !0, this.bonusendloopA = !1, this.recmaxloop = 27, this.recminloop = 4, this.recmintime = Math.round(this.looptime / 1e3) * this.recminloop, this.spritepolo = "polo-sprite.png", this.spritepicto = "game-picto.png", this.colBck = "#0a1d1e", this.col0 = "#779295", this.col1 = "#5f7e7b", this.col2 = "#476761", this.col3 = "#304d47", this.col4 = "#1b312f", this.animearray = [{
        name: "1_atlanta",
        color: "67475f",
        uniqsnd: !1
    }, {
        name: "2_tuctom",
        color: "67475f",
        uniqsnd: !1
    }, {
        name: "3_foubreak",
        color: "67475f",
        uniqsnd: !1
    }, {
        name: "4_koukaki",
        color: "67475f",
        uniqsnd: !0
    }, {
        name: "5_koungou",
        color: "67475f",
        uniqsnd: !0
    }, {
        name: "6_bass",
        color: "3b4d30",
        uniqsnd: !1
    }, {
        name: "7_monk",
        color: "3b4d30",
        uniqsnd: !1
    }, {
        name: "8_sonar",
        color: "3b4d30",
        uniqsnd: !0
    }, {
        name: "9_souffle",
        color: "3b4d30",
        uniqsnd: !1
    }, {
        name: "10_epifle",
        color: "3b4d30",
        uniqsnd: !1
    }, {
        name: "11_arpeg",
        color: "5d4767",
        uniqsnd: !1
    }, {
        name: "12_tromp",
        color: "5d4767",
        uniqsnd: !1
    }, {
        name: "13_pizzi",
        color: "5d4767",
        uniqsnd: !1
    }, {
        name: "14_organ",
        color: "5d4767",
        uniqsnd: !1
    }, {
        name: "15_synth",
        color: "5d4767",
        uniqsnd: !1
    }, {
        name: "16_follow",
        color: "4d3b30",
        uniqsnd: !1
    }, {
        name: "17_choir",
        color: "4d3b30",
        uniqsnd: !1
    }, {
        name: "18_houhou",
        color: "4d3b30",
        uniqsnd: !1
    }, {
        name: "19_reach",
        color: "4d3b30",
        uniqsnd: !1
    }, {
        name: "20_believe",
        color: "4d3b30",
        uniqsnd: !1
    }], this.bonusarray = [{
        name: "Riveria",
        src: "v8-b1-riviera-hb.mp4",
        code: "1,3,6,11,19",
        sound: "21_bonus_riviera",
        aspire: "aspire"
    }, {
        name: "Zemetekile",
        src: "v8-b2-zemetekile-hb.mp4",
        code: "1,2,4,11,13",
        sound: "22_bonus_zemetekile",
        aspire: "aspire"
    }, {
        name: "Cumulor",
        src: "v8-b3-cumulor-hb.mp4",
        code: "4,5,14,16,17",
        sound: "23_bonus_cumulor",
        aspire: "aspire"
    }];
    for (var e = 0, n = this.animearray.length; e < n; e++) {
        var o = this.animearray[e].name;
        this.animearray[e].soundA = o + "_a", this.animearray[e].soundB = this.animearray[e].uniqsnd ? o + "_a" : o + "_b", this.animearray[e].anime = o + "-sprite.png", this.animearray[e].animeData = o + ".json"
    }
};
