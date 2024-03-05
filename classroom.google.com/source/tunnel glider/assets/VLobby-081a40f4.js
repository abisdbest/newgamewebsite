import { F as FStorage } from "./FStorage-9c5eaba7.js";
import { C as CompletedLevelUtils } from "./CompletedLevelUtils-2c183254.js";
import { d as defineComponent, _ as _export_sfc, o as openBlock, c as createElementBlock, a as createBaseVNode, t as toDisplayString, e as createCommentVNode, n as normalizeClass, F as Fragment, f as renderList, b as createStaticVNode, p as pushScopeId, g as popScopeId } from "./index-3b1febdb.js";
import "./FConfig-083e5ca7.js";
class OnionfistUtils {
  static onGameLoaded() {
    console.log("OnionfistUtils v3");
    if (FStorage.isExtension())
      return;
    OnionfistUtils.redirectIfNotInIframe();
    OnionfistUtils.sendLoadedMessage();
  }
  static sendLoadedMessage() {
    if (window.top == null) {
      console.error("window.top is null");
      return;
    }
    window.top.postMessage("gameLoaded", "*");
    console.log("Sent gameLoaded message");
  }
  static redirectIfNotInIframe() {
    if (OnionfistUtils.isInIframe())
      return;
    if (window.location.hostname == "localhost")
      return;
    window.location.href = "https://onionfist.com";
  }
  static isInIframe() {
    try {
      return window.self !== window.top;
    } catch (e) {
      return true;
    }
  }
}
const ALL_LEVEL_LISTINGS = [
  { id: "tutorial", title: "Tutorial", difficulty: 1 },
  { id: "ocean", title: "Ocean", difficulty: 2 },
  { id: "maze", title: "Maze", difficulty: 2 },
  { id: "lake_of_lava", title: "Lake of Lava", difficulty: 2 },
  { id: "stairs", title: "Stairs", difficulty: 3 },
  { id: "rotate", title: "Rotate", difficulty: 3 },
  { id: "up_and_down", title: "Up and Down", difficulty: 3 },
  { id: "block_hop", title: "Block Hop", difficulty: 3 },
  { id: "satellite", title: "Satellite", difficulty: 4 },
  { id: "rings", title: "Rings", difficulty: 4 },
  { id: "ramp_run", title: "Ramp Run", difficulty: 4 },
  { id: "jumping", title: "Jumping", difficulty: 4 },
  { id: "tectonic", title: "Tectonic", difficulty: 5 },
  { id: "memory", title: "Memory", difficulty: 5 },
  { id: "dizzy", title: "Dizzy", difficulty: 5 },
  { id: "opposing", title: "Opposing", difficulty: 5 },
  { id: "fingerbreaker", title: "Fingerbreaker", difficulty: 6 },
  { id: "cylinder", title: "Cylinder", difficulty: 6 },
  { id: "tight_turns", title: "Tight Turns", difficulty: 7 },
  { id: "hard_rings", title: "Hard Rings", difficulty: 7 },
  { id: "fire_and_ice", title: "Fire and Ice", difficulty: 8 },
  { id: "the_unknown", title: "The Unknown", difficulty: 9 },
  { id: "timing", title: "Timing", difficulty: 9 },
  { id: "skips_n_rage", title: "Skips n Rage", difficulty: 12 }
];
const _sfc_main = defineComponent({
  data() {
    const data = {
      levelListings: ALL_LEVEL_LISTINGS,
      isLoading: true,
      completedLevels: []
    };
    return data;
  },
  methods: {
    onClickLevel(levelId) {
      this.isLoading = true;
      this.$nextTick(() => {
        this.$router.push({ path: "/game", query: { levelId } });
      });
    },
    onClickSettings() {
      this.$router.push({ path: "/settings" });
    },
    onClickCredits() {
      this.$router.push({ path: "/credits" });
    },
    onClickMoreGames() {
      window.open("https://onionfist.com", "_blank");
    },
    onClickLevelMaker() {
      this.$router.push({ path: "/level_maker" });
    },
    onClickSkins() {
      this.$router.push({ path: "/skins" });
    },
    getLevelPercent(levelId) {
      const completedLevel = this.completedLevels.find((completedLevel2) => completedLevel2.levelId === levelId);
      if (completedLevel == null)
        return 0;
      return completedLevel.percent;
    },
    didCollectAllCoins(levelId) {
      const completedLevel = this.completedLevels.find((completedLevel2) => completedLevel2.levelId === levelId);
      if (completedLevel == null)
        return false;
      return completedLevel.didCollectAllCoins;
    }
  },
  async mounted() {
    this.completedLevels = await CompletedLevelUtils.getCompletedLevels();
    OnionfistUtils.onGameLoaded();
    this.isLoading = false;
  }
});
const _imports_0 = "/assets/others/settings.svg";
const VLobby_vue_vue_type_style_index_0_scoped_98a67173_lang = "";
const _withScopeId = (n) => (pushScopeId("data-v-98a67173"), n = n(), popScopeId(), n);
const _hoisted_1 = { class: "lobbyMain" };
const _hoisted_2 = { key: 0 };
const _hoisted_3 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("div", { class: "mainContents" }, [
  /* @__PURE__ */ createBaseVNode("div", { id: "loadingContainer" }, [
    /* @__PURE__ */ createBaseVNode("div", null, [
      /* @__PURE__ */ createBaseVNode("h1", { class: "textLarge" }, "Loading Level ... 30%")
    ])
  ])
], -1));
const _hoisted_4 = [
  _hoisted_3
];
const _hoisted_5 = { key: 1 };
const _hoisted_6 = { class: "mainContents" };
const _hoisted_7 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("h1", { class: "textLarge" }, "Welcome to Tunnel Glider!", -1));
const _hoisted_8 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("p", { class: "textSmall" }, "Please play the tutorial first. Click the level below.", -1));
const _hoisted_9 = { class: "levelTitle" };
const _hoisted_10 = {
  key: 0,
  class: "levelCoins colorYellow"
};
const _hoisted_11 = { class: "levelDifficulty" };
const _hoisted_12 = { key: 2 };
const _hoisted_13 = { class: "titleWithIcon" };
const _hoisted_14 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("h1", { class: "textLarge" }, "Tunnel Glider", -1));
const _hoisted_15 = { class: "mainContents" };
const _hoisted_16 = ["onClick"];
const _hoisted_17 = { class: "levelTitle" };
const _hoisted_18 = {
  key: 0,
  class: "levelCoins colorYellow"
};
const _hoisted_19 = { class: "levelDifficulty" };
const _hoisted_20 = { class: "paddingDiv" };
const _hoisted_21 = /* @__PURE__ */ createStaticVNode('<div class="footer" data-v-98a67173><p data-v-98a67173><span class="fontArial" data-v-98a67173>© 2023 onionfist.com</span></p><p data-v-98a67173><span class="fontArial" data-v-98a67173>All rights reserved</span></p><p data-v-98a67173><a class="fontArial" target="_blank" href="https://onionfist.com/privacy_policy/" data-v-98a67173>Privacy Policy</a><span class="fontArial" data-v-98a67173> - </span><a class="fontArial" target="_blank" href="https://onionfist.com/terms_of_service" data-v-98a67173>Terms of Service</a></p></div>', 1);
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("main", _hoisted_1, [
    _ctx.isLoading ? (openBlock(), createElementBlock("div", _hoisted_2, _hoisted_4)) : _ctx.getLevelPercent(_ctx.levelListings[0].id) < 100 ? (openBlock(), createElementBlock("div", _hoisted_5, [
      createBaseVNode("div", _hoisted_6, [
        _hoisted_7,
        _hoisted_8,
        createBaseVNode("div", {
          class: "levelRow",
          onClick: _cache[0] || (_cache[0] = () => _ctx.onClickLevel(_ctx.levelListings[0].id))
        }, [
          createBaseVNode("div", _hoisted_9, toDisplayString(_ctx.levelListings[0].title), 1),
          _ctx.didCollectAllCoins(_ctx.levelListings[0].id) ? (openBlock(), createElementBlock("div", _hoisted_10, "$")) : createCommentVNode("", true),
          createBaseVNode("div", {
            class: normalizeClass(["levelCompletion", { colorGreen: _ctx.getLevelPercent(_ctx.levelListings[0].id) == 100 }])
          }, toDisplayString(_ctx.getLevelPercent(_ctx.levelListings[0].id)) + " %", 3),
          createBaseVNode("div", _hoisted_11, "Diff: " + toDisplayString(_ctx.levelListings[0].difficulty), 1)
        ])
      ])
    ])) : (openBlock(), createElementBlock("div", _hoisted_12, [
      createBaseVNode("div", _hoisted_13, [
        _hoisted_14,
        createBaseVNode("img", {
          src: _imports_0,
          onClick: _cache[1] || (_cache[1] = (...args) => _ctx.onClickSettings && _ctx.onClickSettings(...args))
        })
      ]),
      createBaseVNode("div", _hoisted_15, [
        (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.levelListings, (levelListing) => {
          return openBlock(), createElementBlock("div", {
            key: levelListing.id
          }, [
            createBaseVNode("div", {
              class: "levelRow",
              onClick: () => _ctx.onClickLevel(levelListing.id)
            }, [
              createBaseVNode("div", _hoisted_17, toDisplayString(levelListing.title), 1),
              _ctx.didCollectAllCoins(levelListing.id) ? (openBlock(), createElementBlock("div", _hoisted_18, "$")) : createCommentVNode("", true),
              createBaseVNode("div", {
                class: normalizeClass(["levelCompletion", { colorGreen: _ctx.getLevelPercent(levelListing.id) == 100 }])
              }, toDisplayString(_ctx.getLevelPercent(levelListing.id)) + " %", 3),
              createBaseVNode("div", _hoisted_19, "Diff: " + toDisplayString(levelListing.difficulty), 1)
            ], 8, _hoisted_16)
          ]);
        }), 128)),
        createBaseVNode("div", _hoisted_20, [
          createBaseVNode("div", {
            class: "buttonSmall",
            onClick: _cache[2] || (_cache[2] = (...args) => _ctx.onClickCredits && _ctx.onClickCredits(...args))
          }, " Credits "),
          createBaseVNode("div", {
            class: "buttonSmall",
            onClick: _cache[3] || (_cache[3] = (...args) => _ctx.onClickLevelMaker && _ctx.onClickLevelMaker(...args))
          }, " Make your level "),
          createBaseVNode("div", {
            class: "buttonSmall",
            onClick: _cache[4] || (_cache[4] = (...args) => _ctx.onClickMoreGames && _ctx.onClickMoreGames(...args))
          }, " More games like this "),
          createBaseVNode("div", {
            class: "buttonSmall",
            onClick: _cache[5] || (_cache[5] = (...args) => _ctx.onClickSkins && _ctx.onClickSkins(...args))
          }, " Skins ")
        ]),
        _hoisted_21
      ])
    ]))
  ]);
}
const VLobby = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-98a67173"]]);
export {
  VLobby as default
};
