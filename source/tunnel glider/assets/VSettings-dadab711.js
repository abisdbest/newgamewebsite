import { F as FStorage } from "./FStorage-9c5eaba7.js";
import { l as StorageValueEnum, k as StorageKeyEnum } from "./FConfig-083e5ca7.js";
import { d as defineComponent, _ as _export_sfc, o as openBlock, c as createElementBlock, a as createBaseVNode, e as createCommentVNode, p as pushScopeId, g as popScopeId } from "./index-3b1febdb.js";
import { _ as _imports_0 } from "./back_arrow-5923ebc4.js";
const _sfc_main = defineComponent({
  data() {
    const data = {
      isSoundOn: null,
      isMusicOn: null,
      yesValue: StorageValueEnum.Yes,
      noValue: StorageValueEnum.No
    };
    return data;
  },
  methods: {
    async onClickChangeSoundSettings() {
      const newIsSoundOn = this.isSoundOn === StorageValueEnum.Yes ? StorageValueEnum.No : StorageValueEnum.Yes;
      this.isSoundOn = newIsSoundOn;
      await FStorage.set(StorageKeyEnum.IsSoundOn, newIsSoundOn);
    },
    async onClickChangeMusicSettings() {
      const newIsMusicOn = this.isMusicOn === StorageValueEnum.Yes ? StorageValueEnum.No : StorageValueEnum.Yes;
      this.isMusicOn = newIsMusicOn;
      await FStorage.set(StorageKeyEnum.IsMusicOn, newIsMusicOn);
    },
    onClickLobbyButton() {
      this.$router.push({ path: "/lobby" });
    }
  },
  async mounted() {
    this.isSoundOn = await FStorage.getString(StorageKeyEnum.IsSoundOn) ?? StorageValueEnum.Yes;
    this.isMusicOn = await FStorage.getString(StorageKeyEnum.IsMusicOn) ?? StorageValueEnum.Yes;
  }
});
const VSettings_vue_vue_type_style_index_0_scoped_af9fa93c_lang = "";
const _withScopeId = (n) => (pushScopeId("data-v-af9fa93c"), n = n(), popScopeId(), n);
const _hoisted_1 = {
  key: 0,
  class: "settingsMain"
};
const _hoisted_2 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("h1", null, "Loading ...", -1));
const _hoisted_3 = [
  _hoisted_2
];
const _hoisted_4 = {
  key: 1,
  class: "settingsMain"
};
const _hoisted_5 = { class: "titleWithIcon" };
const _hoisted_6 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("h1", { class: "textLarge" }, "Settings", -1));
const _hoisted_7 = { class: "paddingDiv" };
const _hoisted_8 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("span", null, "Sound: ", -1));
const _hoisted_9 = { key: 0 };
const _hoisted_10 = { key: 1 };
const _hoisted_11 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("span", null, "Music: ", -1));
const _hoisted_12 = { key: 0 };
const _hoisted_13 = { key: 1 };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return _ctx.isSoundOn == null ? (openBlock(), createElementBlock("main", _hoisted_1, _hoisted_3)) : (openBlock(), createElementBlock("main", _hoisted_4, [
    createBaseVNode("div", _hoisted_5, [
      createBaseVNode("img", {
        src: _imports_0,
        onClick: _cache[0] || (_cache[0] = (...args) => _ctx.onClickLobbyButton && _ctx.onClickLobbyButton(...args))
      }),
      _hoisted_6
    ]),
    createBaseVNode("div", _hoisted_7, [
      createBaseVNode("div", null, [
        _hoisted_8,
        createBaseVNode("div", {
          class: "buttonSmall",
          onClick: _cache[1] || (_cache[1] = (...args) => _ctx.onClickChangeSoundSettings && _ctx.onClickChangeSoundSettings(...args))
        }, [
          _ctx.isSoundOn === _ctx.yesValue ? (openBlock(), createElementBlock("span", _hoisted_9, "Enabled")) : createCommentVNode("", true),
          _ctx.isSoundOn === _ctx.noValue ? (openBlock(), createElementBlock("span", _hoisted_10, "Disabled")) : createCommentVNode("", true)
        ])
      ]),
      createBaseVNode("div", null, [
        _hoisted_11,
        createBaseVNode("div", {
          class: "buttonSmall",
          onClick: _cache[2] || (_cache[2] = (...args) => _ctx.onClickChangeMusicSettings && _ctx.onClickChangeMusicSettings(...args))
        }, [
          _ctx.isMusicOn === _ctx.yesValue ? (openBlock(), createElementBlock("span", _hoisted_12, "Enabled")) : createCommentVNode("", true),
          _ctx.isMusicOn === _ctx.noValue ? (openBlock(), createElementBlock("span", _hoisted_13, "Disabled")) : createCommentVNode("", true)
        ])
      ])
    ])
  ]));
}
const VSettings = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-af9fa93c"]]);
export {
  VSettings as default
};
