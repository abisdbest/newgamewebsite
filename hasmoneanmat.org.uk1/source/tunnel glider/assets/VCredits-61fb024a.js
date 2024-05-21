import { d as defineComponent, _ as _export_sfc, o as openBlock, c as createElementBlock, a as createBaseVNode, p as pushScopeId, g as popScopeId } from "./index-3b1febdb.js";
import { _ as _imports_0 } from "./back_arrow-5923ebc4.js";
const _sfc_main = defineComponent({
  data() {
    return {};
  },
  methods: {
    onClickLobbyButton() {
      this.$router.push({ path: "/lobby" });
    }
  },
  mounted() {
  }
});
const VCredits_vue_vue_type_style_index_0_scoped_1cc10ec7_lang = "";
const _withScopeId = (n) => (pushScopeId("data-v-1cc10ec7"), n = n(), popScopeId(), n);
const _hoisted_1 = { class: "creditsMain" };
const _hoisted_2 = { class: "titleWithIcon" };
const _hoisted_3 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("h1", { class: "textLarge" }, "Credits", -1));
const _hoisted_4 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("div", { class: "paddingDiv" }, [
  /* @__PURE__ */ createBaseVNode("p", { class: "textSmall" }, "Music: EnV"),
  /* @__PURE__ */ createBaseVNode("p", { class: "textSmall" }, "Programming: seojoon.y - IG & yzffkindacrzy - GITHUB | Yusof#2500"),
  /* @__PURE__ */ createBaseVNode("p", { class: "textSmall" }, "Special thanks: Jon")
], -1));
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("main", _hoisted_1, [
    createBaseVNode("div", _hoisted_2, [
      createBaseVNode("img", {
        src: _imports_0,
        onClick: _cache[0] || (_cache[0] = (...args) => _ctx.onClickLobbyButton && _ctx.onClickLobbyButton(...args))
      }),
      _hoisted_3
    ]),
    _hoisted_4
  ]);
}
const VCredits = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-1cc10ec7"]]);
export {
  VCredits as default
};
