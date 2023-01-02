(function() {
  "use strict";
  var __vue2_script$9 = {
    props: {
      initialTab: String,
      tabs: Array
    },
    data() {
      return {
        activeTab: this.initialTab
      };
    },
    computed: {
      tabPanelSlotName() {
        return `tab-panel-${this.activeTab}`;
      }
    },
    methods: {
      tabHeadSlotName(tabName) {
        return `tab-head-${tabName}`;
      },
      switchTab(tabName) {
        this.activeTab = tabName;
      }
    }
  };
  var render$9 = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("div", { staticClass: "card" }, [_c("header", { staticClass: "card-header" }, [_c("ul", { staticClass: "tab-heads" }, _vm._l(_vm.tabs, function(tab) {
      return _c("li", { key: tab, staticClass: "tab-head", class: {
        "tab-head--active": _vm.activeTab === tab
      }, on: { "click": function($event) {
        return _vm.switchTab(tab);
      } } }, [_vm._t(_vm.tabHeadSlotName(tab), function() {
        return [_vm._v(_vm._s(tab) + " ")];
      })], 2);
    }), 0)]), _c("main", { staticClass: "card-body" }, [_c("div", { staticClass: "tab-panel" }, [_vm._t(_vm.tabPanelSlotName)], 2)])]);
  };
  var staticRenderFns$9 = [];
  render$9._withStripped = true;
  var tabs_vue_vue_type_style_index_0_lang = "";
  function normalizeComponent(scriptExports, render2, staticRenderFns2, functionalTemplate, injectStyles, scopeId, moduleIdentifier, shadowMode) {
    var options = typeof scriptExports === "function" ? scriptExports.options : scriptExports;
    if (render2) {
      options.render = render2;
      options.staticRenderFns = staticRenderFns2;
      options._compiled = true;
    }
    if (functionalTemplate) {
      options.functional = true;
    }
    if (scopeId) {
      options._scopeId = "data-v-" + scopeId;
    }
    var hook;
    if (moduleIdentifier) {
      hook = function(context) {
        context = context || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext;
        if (!context && typeof __VUE_SSR_CONTEXT__ !== "undefined") {
          context = __VUE_SSR_CONTEXT__;
        }
        if (injectStyles) {
          injectStyles.call(this, context);
        }
        if (context && context._registeredComponents) {
          context._registeredComponents.add(moduleIdentifier);
        }
      };
      options._ssrRegister = hook;
    } else if (injectStyles) {
      hook = shadowMode ? function() {
        injectStyles.call(this, (options.functional ? this.parent : this).$root.$options.shadowRoot);
      } : injectStyles;
    }
    if (hook) {
      if (options.functional) {
        options._injectStyles = hook;
        var originalRender = options.render;
        options.render = function renderWithStyleInjection(h, context) {
          hook.call(context);
          return originalRender(h, context);
        };
      } else {
        var existing = options.beforeCreate;
        options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
      }
    }
    return {
      exports: scriptExports,
      options
    };
  }
  const __cssModules$9 = {};
  var __component__$9 = /* @__PURE__ */ normalizeComponent(__vue2_script$9, render$9, staticRenderFns$9, false, __vue2_injectStyles$9, null, null, null);
  function __vue2_injectStyles$9(context) {
    for (let o in __cssModules$9) {
      this[o] = __cssModules$9[o];
    }
  }
  __component__$9.options.__file = "src/components/tools/tabs.vue";
  var TabCard = /* @__PURE__ */ function() {
    return __component__$9.exports;
  }();
  var __vue2_script$8 = {
    data() {
      return {
        abandoned: null
      };
    },
    computed: {
      abandonedCount() {
        return this.abandoned ? this.abandoned.length : "Loading...";
      }
    },
    async created() {
      let response = await this.$api.get("snipcart/carts/abandoned");
      this.abandoned = response.items;
    }
  };
  var render$8 = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("div", { staticClass: "k-snipcart-vital" }, [_c("h3", [_vm._v("Abandonded Carts")]), _c("span", [_vm._v(_vm._s(_vm.abandonedCount))])]);
  };
  var staticRenderFns$8 = [];
  render$8._withStripped = true;
  const __cssModules$8 = {};
  var __component__$8 = /* @__PURE__ */ normalizeComponent(__vue2_script$8, render$8, staticRenderFns$8, false, __vue2_injectStyles$8, null, null, null);
  function __vue2_injectStyles$8(context) {
    for (let o in __cssModules$8) {
      this[o] = __cssModules$8[o];
    }
  }
  __component__$8.options.__file = "src/components/dashboard/abandoned.vue";
  var Abandoned = /* @__PURE__ */ function() {
    return __component__$8.exports;
  }();
  var __vue2_script$7 = {
    data() {
      return {
        totalSales: null
      };
    },
    computed: {
      salesCount() {
        return this.totalSales ? this.totalSales : "Loading...";
      }
    },
    async created() {
      let response = await this.$api.get("snipcart/orders");
      let salesTotal = response.items.reduce((acc, item) => acc + item.finalGrandTotal, 0).toFixed(2);
      this.totalSales = salesTotal;
    }
  };
  var render$7 = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("div", { staticClass: "k-snipcart-vital" }, [_c("h3", [_vm._v("Total Sales")]), _c("span", [_vm._v(_vm._s(_vm.salesCount))])]);
  };
  var staticRenderFns$7 = [];
  render$7._withStripped = true;
  const __cssModules$7 = {};
  var __component__$7 = /* @__PURE__ */ normalizeComponent(__vue2_script$7, render$7, staticRenderFns$7, false, __vue2_injectStyles$7, null, null, null);
  function __vue2_injectStyles$7(context) {
    for (let o in __cssModules$7) {
      this[o] = __cssModules$7[o];
    }
  }
  __component__$7.options.__file = "src/components/dashboard/sales.vue";
  var SalesTotal = /* @__PURE__ */ function() {
    return __component__$7.exports;
  }();
  var __vue2_script$6 = {
    name: "popularItem",
    data() {
      return {
        popularItem: void 0,
        errors: []
      };
    },
    computed: {
      popularCount() {
        return this.popularItem ? this.popularItem : "Loading...";
      }
    },
    async created() {
      try {
        let response = await this.$api.get("snipcart/orders", { pretty: true });
        let flattened = response.items.reduce((a, b) => a.concat(b.items), []);
        let flattenedIDs = flattened.map(({ name }) => name).reduce((names, name) => {
          const count = names[name] || 0;
          names[name] = count + 1;
          return names;
        }, {});
        let popularID = Object.keys(flattenedIDs).reduce((a, b) => flattenedIDs[a] > flattenedIDs[b] ? a : b);
        this.popularItem = popularID;
      } catch (e) {
        this.errors.push(e);
      }
    }
  };
  var render$6 = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("div", { staticClass: "k-snipcart-vital" }, [_c("h3", [_vm._v("Most Popular")]), _c("span", [_vm._v(_vm._s(_vm.popularCount))])]);
  };
  var staticRenderFns$6 = [];
  render$6._withStripped = true;
  const __cssModules$6 = {};
  var __component__$6 = /* @__PURE__ */ normalizeComponent(__vue2_script$6, render$6, staticRenderFns$6, false, __vue2_injectStyles$6, null, null, null);
  function __vue2_injectStyles$6(context) {
    for (let o in __cssModules$6) {
      this[o] = __cssModules$6[o];
    }
  }
  __component__$6.options.__file = "src/components/dashboard/popular.vue";
  var Popular = /* @__PURE__ */ function() {
    return __component__$6.exports;
  }();
  var __vue2_script$5 = {
    props: {
      name: String,
      columns: Object,
      options: Array,
      rows: {
        type: Array,
        default() {
          return [];
        }
      },
      empty: String
    },
    data() {
      return {
        tablecolumns: { invoiceNumber: { label: "Code", type: "text" }, date: { label: "Date", type: "text" }, status: { label: "Status", type: "text" }, total: { label: "Total", type: "text" }, shippingAddressCountry: { label: "Ship to", type: "text" } },
        orders: []
      };
    },
    async created() {
      let response = await this.$api.get("snipcart/orders?limit=500");
      let data = response.items.map(function(element) {
        let date = new Date(Date.parse(element.completionDate));
        let datestring = ("0" + date.getDate()).slice(-2) + "/" + ("0" + (date.getMonth() + 1)).slice(-2) + "/" + date.getFullYear();
        return { invoiceNumber: element.invoiceNumber, date: datestring, status: element.status, total: element.finalGrandTotal, shippingAddressCountry: element.shippingAddressCountry };
      });
      this.orders = data;
    }
  };
  var render$5 = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("div", [_vm.orders.length ? _c("k-table", { attrs: { "columns": _vm.tablecolumns, "rows": _vm.orders } }) : _vm._e()], 1);
  };
  var staticRenderFns$5 = [];
  render$5._withStripped = true;
  var orders_vue_vue_type_style_index_0_lang = "";
  const __cssModules$5 = {};
  var __component__$5 = /* @__PURE__ */ normalizeComponent(__vue2_script$5, render$5, staticRenderFns$5, false, __vue2_injectStyles$5, null, null, null);
  function __vue2_injectStyles$5(context) {
    for (let o in __cssModules$5) {
      this[o] = __cssModules$5[o];
    }
  }
  __component__$5.options.__file = "src/components/dashboard/orders.vue";
  var Orders = /* @__PURE__ */ function() {
    return __component__$5.exports;
  }();
  var __vue2_script$4 = {
    name: "Vitals",
    components: {
      abandoned: Abandoned,
      salestotal: SalesTotal,
      popular: Popular,
      "orders": Orders
    }
  };
  var render$4 = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("k-view", { staticClass: "k-snipcart-view" }, [_c("k-grid", { staticClass: "k-snipcart-vitals", attrs: { "gutter": "medium" } }, [_c("k-column", { attrs: { "width": "1/3" } }, [_c("salestotal")], 1), _c("k-column", { attrs: { "width": "1/3" } }, [_c("popular")], 1), _c("k-column", { attrs: { "width": "1/3" } }, [_c("abandoned")], 1), _c("k-column", { attrs: { "width": "1/1" } }, [_c("orders")], 1)], 1)], 1);
  };
  var staticRenderFns$4 = [];
  render$4._withStripped = true;
  const __cssModules$4 = {};
  var __component__$4 = /* @__PURE__ */ normalizeComponent(__vue2_script$4, render$4, staticRenderFns$4, false, __vue2_injectStyles$4, null, null, null);
  function __vue2_injectStyles$4(context) {
    for (let o in __cssModules$4) {
      this[o] = __cssModules$4[o];
    }
  }
  __component__$4.options.__file = "src/components/dashboard/Vitals.vue";
  var Vitals = /* @__PURE__ */ function() {
    return __component__$4.exports;
  }();
  var __vue2_script$3 = {
    props: {
      name: String,
      columns: Object,
      options: Array,
      rows: {
        type: Array,
        default() {
          return [];
        }
      },
      empty: String
    },
    data() {
      return {
        tablecolumns: { discname: { label: "Name", type: "text" }, code: { label: "Code", type: "text" }, expires: { label: "Expires", type: "text" }, uses: { label: "Uses", type: "text" } },
        discounts: []
      };
    },
    async created() {
      let response = await this.$api.get("snipcart/discounts");
      let data = response.map(function(element) {
        let date = new Date(Date.parse(element.expires));
        let datestring = ("0" + date.getDate()).slice(-2) + "/" + ("0" + (date.getMonth() + 1)).slice(-2) + "/" + date.getFullYear();
        return { discname: element.discname, code: element.code, uses: element.numberOfUsages, expires: datestring };
      });
      this.discounts = data;
    }
  };
  var render$3 = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("div", [_vm.discounts.length ? _c("k-table", { attrs: { "columns": _vm.tablecolumns, "rows": _vm.discounts } }) : _vm._e()], 1);
  };
  var staticRenderFns$3 = [];
  render$3._withStripped = true;
  var discountlist_vue_vue_type_style_index_0_lang = "";
  const __cssModules$3 = {};
  var __component__$3 = /* @__PURE__ */ normalizeComponent(__vue2_script$3, render$3, staticRenderFns$3, false, __vue2_injectStyles$3, null, null, null);
  function __vue2_injectStyles$3(context) {
    for (let o in __cssModules$3) {
      this[o] = __cssModules$3[o];
    }
  }
  __component__$3.options.__file = "src/components/discounts/components/discountlist.vue";
  var Discounts$1 = /* @__PURE__ */ function() {
    return __component__$3.exports;
  }();
  var __vue2_script$2 = {
    name: "Discounts",
    components: {
      "discounts": Discounts$1
    }
  };
  var render$2 = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("div", [_c("k-grid", { staticClass: "k-snipcart-vitals", attrs: { "gutter": "medium" } }, [_c("k-column", { attrs: { "width": "1/1" } }, [_c("discounts")], 1)], 1)], 1);
  };
  var staticRenderFns$2 = [];
  render$2._withStripped = true;
  const __cssModules$2 = {};
  var __component__$2 = /* @__PURE__ */ normalizeComponent(__vue2_script$2, render$2, staticRenderFns$2, false, __vue2_injectStyles$2, null, null, null);
  function __vue2_injectStyles$2(context) {
    for (let o in __cssModules$2) {
      this[o] = __cssModules$2[o];
    }
  }
  __component__$2.options.__file = "src/components/discounts/discounts.vue";
  var Discounts = /* @__PURE__ */ function() {
    return __component__$2.exports;
  }();
  var __vue2_script$1 = {
    name: "Dashboard",
    components: {
      "vitals": Vitals,
      "discounts": Discounts,
      "TabCard": TabCard
    },
    data() {
      return {
        initialTab: "dashboard",
        tabs: ["dashboard", "discounts"]
      };
    }
  };
  var render$1 = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("k-inside", [_c("k-view", { staticClass: "k-snipcart-view" }, [_c("TabCard", { attrs: { "tabs": _vm.tabs, "initialTab": _vm.initialTab } }, [_c("template", { slot: "tab-head-dashboard" }, [_vm._v(" Dashboard ")]), _c("template", { slot: "tab-panel-dashboard" }, [_c("vitals")], 1), _c("template", { slot: "tab-head-discounts" }, [_vm._v(" Discounts ")]), _c("template", { slot: "tab-panel-discounts" }, [_c("discounts")], 1)], 2)], 1)], 1);
  };
  var staticRenderFns$1 = [];
  render$1._withStripped = true;
  var Dashboard_vue_vue_type_style_index_0_lang = "";
  const __cssModules$1 = {};
  var __component__$1 = /* @__PURE__ */ normalizeComponent(__vue2_script$1, render$1, staticRenderFns$1, false, __vue2_injectStyles$1, null, null, null);
  function __vue2_injectStyles$1(context) {
    for (let o in __cssModules$1) {
      this[o] = __cssModules$1[o];
    }
  }
  __component__$1.options.__file = "src/components/panel/Dashboard.vue";
  var Dash = /* @__PURE__ */ function() {
    return __component__$1.exports;
  }();
  var __vue2_script = {
    props: {
      label: String,
      value: String,
      disabled: Boolean,
      required: Boolean,
      value: String
    },
    data() {
      return {
        totalSales: null,
        productID: this.$store.getters["content/values"]()["productid"]
      };
    },
    computed: {
      salesCount() {
        return this.totalSales ? this.totalSales : "Loading...";
      }
    },
    async created() {
      let response = await this.$api.get("snipcart/products/" + this.productID);
      if (response === void 0 || response.length == 0) {
        this.totalSales = 0;
      } else {
        this.totalSales = response["statistics"]["totalSales"].toFixed(2);
      }
    }
  };
  var render = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("div", { staticClass: "k-snipcart-product-total" }, [_c("div", { staticClass: "k-snipcart-vital" }, [_c("h3", [_vm._v("Total Sales")]), _c("span", [_vm._v(_vm._s(_vm.salesCount))])])]);
  };
  var staticRenderFns = [];
  render._withStripped = true;
  const __cssModules = {};
  var __component__ = /* @__PURE__ */ normalizeComponent(__vue2_script, render, staticRenderFns, false, __vue2_injectStyles, null, null, null);
  function __vue2_injectStyles(context) {
    for (let o in __cssModules) {
      this[o] = __cssModules[o];
    }
  }
  __component__.options.__file = "src/components/products/ProductTotal.vue";
  var ProductTotal = /* @__PURE__ */ function() {
    return __component__.exports;
  }();
  panel.plugin("hashandsalt/snipcart", {
    components: {
      dash: Dash
    },
    fields: {
      productTotal: ProductTotal
    }
  });
})();
