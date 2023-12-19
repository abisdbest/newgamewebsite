import { F as FLevelUtils } from "./FLevelUtils-126fc55f.js";
import { d as defineComponent, _ as _export_sfc, o as openBlock, c as createElementBlock, a as createBaseVNode, w as withDirectives, v as vModelText, n as normalizeClass, e as createCommentVNode, t as toDisplayString, p as pushScopeId, g as popScopeId } from "./index-3b1febdb.js";
import { _ as _imports_0 } from "./back_arrow-5923ebc4.js";
import "./FConfig-083e5ca7.js";
const _sfc_main = defineComponent({
  data() {
    const data = {
      customLevelBlueprintGridText: "",
      errorMessage: "",
      didCheckErrors: false,
      isLoading: false
    };
    return data;
  },
  methods: {
    onClickLobbyButton() {
      this.$router.push({ path: "/lobby" });
    },
    onClickClearInput() {
      this.customLevelBlueprintGridText = "";
      this.errorMessage = "";
      this.didCheckErrors = false;
    },
    onClickPlayGame() {
      this.isLoading = true;
      this.$nextTick(() => {
        const levelData = {
          objectBlueprintGridText: this.customLevelBlueprintGridText,
          creatorName: "You"
        };
        const customLevelDataText = JSON.stringify(levelData);
        this.$router.push({ path: "/game", query: { customLevelDataText } });
      });
    },
    onClickCheckErrors() {
      try {
        FLevelUtils.getObjectBlueprintsFromText(this.customLevelBlueprintGridText);
        this.didCheckErrors = true;
      } catch (error) {
        this.errorMessage = error.message;
      }
    }
  },
  mounted() {
  }
});
const VLevelMaker_vue_vue_type_style_index_0_scoped_2cf22489_lang = "";
const _withScopeId = (n) => (pushScopeId("data-v-2cf22489"), n = n(), popScopeId(), n);
const _hoisted_1 = {
  key: 0,
  class: "mapMakerMain"
};
const _hoisted_2 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("div", { class: "paddingDiv" }, [
  /* @__PURE__ */ createBaseVNode("h1", { class: "textLarge" }, "Loading ..."),
  /* @__PURE__ */ createBaseVNode("p", { class: "textSmall colorBright" }, "Please wait patiently while the game is loading."),
  /* @__PURE__ */ createBaseVNode("p", { class: "textSmall colorBright" }, "This should take less than 3 seconds.")
], -1));
const _hoisted_3 = [
  _hoisted_2
];
const _hoisted_4 = {
  key: 1,
  class: "mapMakerMain"
};
const _hoisted_5 = { class: "titleWithIcon" };
const _hoisted_6 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("h1", { class: "textLarge" }, "Make your level", -1));
const _hoisted_7 = { class: "paddingDiv" };
const _hoisted_8 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("div", null, [
  /* @__PURE__ */ createBaseVNode("a", {
    class: "buttonSmall",
    href: "https://docs.google.com/spreadsheets/d/1HeblpUB4Wo84hzzgflYtTV-DvqkbfS62nuJQ0NSZE2Q",
    target: "_blank"
  }, "Sample"),
  /* @__PURE__ */ createBaseVNode("a", {
    class: "buttonSmall",
    href: "https://discord.gg/S8kZjgb",
    target: "_blank"
  }, "Discord"),
  /* @__PURE__ */ createBaseVNode("a", {
    class: "buttonSmall",
    href: "https://youtu.be/ULX0CJuXX98",
    target: "_blank"
  }, "Learn")
], -1));
const _hoisted_9 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("p", { class: "textSmall" }, "Paste level data", -1));
const _hoisted_10 = { key: 0 };
const _hoisted_11 = { class: "textSmall errorMessage" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return _ctx.isLoading ? (openBlock(), createElementBlock("main", _hoisted_1, _hoisted_3)) : (openBlock(), createElementBlock("main", _hoisted_4, [
    createBaseVNode("div", _hoisted_5, [
      createBaseVNode("img", {
        src: _imports_0,
        onClick: _cache[0] || (_cache[0] = (...args) => _ctx.onClickLobbyButton && _ctx.onClickLobbyButton(...args))
      }),
      _hoisted_6
    ]),
    createBaseVNode("div", _hoisted_7, [
      _hoisted_8,
      _hoisted_9,
      createBaseVNode("div", null, [
        withDirectives(createBaseVNode("textarea", {
          class: normalizeClass({ isHidden: _ctx.customLevelBlueprintGridText != "" }),
          id: "customLevelBlueprintGridText",
          "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => _ctx.customLevelBlueprintGridText = $event)
        }, null, 2), [
          [vModelText, _ctx.customLevelBlueprintGridText]
        ]),
        _ctx.customLevelBlueprintGridText != "" ? (openBlock(), createElementBlock("div", _hoisted_10, [
          createBaseVNode("div", {
            class: "buttonSmall",
            onClick: _cache[2] || (_cache[2] = (...args) => _ctx.onClickClearInput && _ctx.onClickClearInput(...args))
          }, " Clear input "),
          createBaseVNode("div", {
            class: "buttonSmall",
            onClick: _cache[3] || (_cache[3] = (...args) => _ctx.onClickCheckErrors && _ctx.onClickCheckErrors(...args))
          }, " Check errors "),
          _ctx.didCheckErrors ? (openBlock(), createElementBlock("div", {
            key: 0,
            class: "buttonSmall",
            onClick: _cache[4] || (_cache[4] = (...args) => _ctx.onClickPlayGame && _ctx.onClickPlayGame(...args))
          }, " Play game ")) : createCommentVNode("", true)
        ])) : createCommentVNode("", true),
        createBaseVNode("p", _hoisted_11, toDisplayString(_ctx.errorMessage), 1)
      ])
    ])
  ]));
}
const VLevelMaker = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-2cf22489"]]);
export {
  VLevelMaker as default
};
