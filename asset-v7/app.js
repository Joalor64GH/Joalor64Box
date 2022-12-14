/* 0.5.4 2021-04-23 21:06:13 */
var app = new function() {
    this.name = "Jeevan", this.version = "7", this.date = "2019", this.folder = "asset-v7/", this.looptime = 6857, this.bpm = 140, this.totalframe = 342, this.nbpolo = 7, this.nbloopbonus = 3, this.bonusloopA = !0, this.bonusendloopA = !0, this.recmaxloop = 27, this.recminloop = 3, this.recmintime = Math.round(this.looptime / 1e3) * this.recminloop, this.spritepolo = "polo-sprite.png", this.spritepicto = "game-picto.png", this.colBck = "#2b0f02", this.col0 = "#fe6e23", this.col1 = "#d65a1e", this.col2 = "#ae4619", this.col3 = "#863214", this.col4 = "#551e05", this.animearray = [{
        name: "1_lead",
        color: "5119ff",
        uniqsnd: !0
    }, {
        name: "2_pouin",
        color: "5119ff",
        uniqsnd: !1
    }, {
        name: "3_tung",
        color: "5119ff",
        uniqsnd: !0
    }, {
        name: "4_tabla",
        color: "5119ff",
        uniqsnd: !0
    }, {
        name: "5_tuduki",
        color: "5119ff",
        uniqsnd: !0
    }, {
        name: "6_bass",
        color: "1934e1",
        uniqsnd: !1
    }, {
        name: "7_bourdon",
        color: "1934e1",
        uniqsnd: !0
    }, {
        name: "8_campan",
        color: "1934e1",
        uniqsnd: !0
    }, {
        name: "9_kum",
        color: "1934e1",
        uniqsnd: !1
    }, {
        name: "10_string",
        color: "1934e1",
        uniqsnd: !1
    }, {
        name: "11_citar",
        color: "99d232",
        uniqsnd: !0
    }, {
        name: "12_guit",
        color: "99d232",
        uniqsnd: !0
    }, {
        name: "13_tromp",
        color: "99d232",
        uniqsnd: !1
    }, {
        name: "14_taoung",
        color: "99d232",
        uniqsnd: !0
    }, {
        name: "15_sifle",
        color: "99d232",
        uniqsnd: !1
    }, {
        name: "16_djindr",
        color: "b43632",
        uniqsnd: !0
    }, {
        name: "17_djinga",
        color: "b43632",
        uniqsnd: !0
    }, {
        name: "18_djinta",
        color: "b43632",
        uniqsnd: !0
    }, {
        name: "19_jeevan",
        color: "b43632",
        uniqsnd: !1
    }, {
        name: "20_yaha",
        color: "b43632",
        uniqsnd: !1
    }], this.bonusarray = [{
        name: "Kofitez",
        src: "v7-b1-kofitez-hb.mp4",
        code: "1,5,6,12,18",
        sound: "bonus_kofitez",
        aspire: "aspire_kofitez"
    }, {
        name: "Sapna",
        src: "v7-b2-sapna-hb.mp4",
        code: "1,3,10,14,19",
        sound: "bonus_sapna",
        aspire: "aspire_sapna"
    }, {
        name: "Kabikabi",
        src: "v7-b3-kabikabi-hb.mp4",
        code: "7,8,9,10,20",
        sound: "bonus_kabikabi",
        aspire: "aspire_kabikabi"
    }], this.unlockerarray = [];
    for (var n = 0, a = this.animearray.length; n < a; n++) {
        var i = this.animearray[n].name;
        this.animearray[n].soundA = i + "_a", this.animearray[n].soundB = this.animearray[n].uniqsnd ? i + "_a" : i + "_b", this.animearray[n].anime = i + "-sprite.png", this.animearray[n].animeData = i + ".json"
    }
};
