import { Map } from "immutable";

import * as actionTypes from "./constants";

const defaultState = Map({
  currentSong: {
    name: "冬眠",
    id: 1398663411,
    pst: 0,
    t: 0,
    ar: [
      {
        id: 28863695,
        name: "司南",
        tns: [],
        alias: [],
      },
    ],
    alia: [],
    pop: 100,
    st: 0,
    rt: "",
    fee: 8,
    v: 6,
    crbt: null,
    cf: "",
    al: {
      id: 82655016,
      name: "冬眠",
      picUrl:
        "https://p1.music.126.net/4KDBaQXnQywQovmqvjx-8Q==/109951164444131697.jpg",
      tns: [],
      pic_str: "109951164444131697",
      pic: 109951164444131697,
    },
    dt: 269583,
    h: {
      br: 320000,
      fid: 0,
      size: 10785480,
      vd: -21403,
    },
    m: {
      br: 192000,
      fid: 0,
      size: 6471306,
      vd: -18804,
    },
    l: {
      br: 128000,
      fid: 0,
      size: 4314218,
      vd: -17128,
    },
    a: null,
    cd: "01",
    no: 1,
    rtUrl: null,
    ftype: 0,
    rtUrls: [],
    djId: 0,
    copyright: 1,
    s_id: 0,
    mark: 0,
    originCoverType: 0,
    single: 0,
    noCopyrightRcmd: null,
    rtype: 0,
    rurl: null,
    mst: 9,
    cp: 1416678,
    mv: 0,
    publishTime: 1571932800000,
  },
});

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    // case actionTypes.CHANGE_CURRENT_SONG:
    //   return state.set('currentSong', action.currentSong)
    default:
      return state;
  }
};

export default reducer;
