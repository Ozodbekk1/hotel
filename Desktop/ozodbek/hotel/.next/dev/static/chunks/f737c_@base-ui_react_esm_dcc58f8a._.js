(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/react/esm/field/index.parts.js [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
;
;
;
;
;
;
;
}),
"[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/react/esm/field/control/FieldControlDataAttributes.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FieldControlDataAttributes",
    ()=>FieldControlDataAttributes
]);
let FieldControlDataAttributes = /*#__PURE__*/ function(FieldControlDataAttributes) {
    /**
   * Present when the field is disabled.
   */ FieldControlDataAttributes["disabled"] = "data-disabled";
    /**
   * Present when the field is in valid state.
   */ FieldControlDataAttributes["valid"] = "data-valid";
    /**
   * Present when the field is in invalid state.
   */ FieldControlDataAttributes["invalid"] = "data-invalid";
    /**
   * Present when the field has been touched.
   */ FieldControlDataAttributes["touched"] = "data-touched";
    /**
   * Present when the field's value has changed.
   */ FieldControlDataAttributes["dirty"] = "data-dirty";
    /**
   * Present when the field is filled.
   */ FieldControlDataAttributes["filled"] = "data-filled";
    /**
   * Present when the field control is focused.
   */ FieldControlDataAttributes["focused"] = "data-focused";
    return FieldControlDataAttributes;
}({});
}),
"[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/react/esm/field/utils/constants.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DEFAULT_FIELD_ROOT_STATE",
    ()=>DEFAULT_FIELD_ROOT_STATE,
    "DEFAULT_FIELD_STATE_ATTRIBUTES",
    ()=>DEFAULT_FIELD_STATE_ATTRIBUTES,
    "DEFAULT_VALIDITY_STATE",
    ()=>DEFAULT_VALIDITY_STATE,
    "fieldValidityMapping",
    ()=>fieldValidityMapping
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$field$2f$control$2f$FieldControlDataAttributes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/react/esm/field/control/FieldControlDataAttributes.js [app-client] (ecmascript)");
;
const DEFAULT_VALIDITY_STATE = {
    badInput: false,
    customError: false,
    patternMismatch: false,
    rangeOverflow: false,
    rangeUnderflow: false,
    stepMismatch: false,
    tooLong: false,
    tooShort: false,
    typeMismatch: false,
    valid: null,
    valueMissing: false
};
const DEFAULT_FIELD_STATE_ATTRIBUTES = {
    valid: null,
    touched: false,
    dirty: false,
    filled: false,
    focused: false
};
const DEFAULT_FIELD_ROOT_STATE = {
    disabled: false,
    ...DEFAULT_FIELD_STATE_ATTRIBUTES
};
const fieldValidityMapping = {
    valid (value) {
        if (value === null) {
            return null;
        }
        if (value) {
            return {
                [__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$field$2f$control$2f$FieldControlDataAttributes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FieldControlDataAttributes"].valid]: ''
            };
        }
        return {
            [__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$field$2f$control$2f$FieldControlDataAttributes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FieldControlDataAttributes"].invalid]: ''
        };
    }
};
}),
"[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/react/esm/field/root/FieldRootContext.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FieldRootContext",
    ()=>FieldRootContext,
    "useFieldRootContext",
    ()=>useFieldRootContext
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$empty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/utils/esm/empty.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$field$2f$utils$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/react/esm/field/utils/constants.js [app-client] (ecmascript)");
'use client';
;
;
;
;
;
const FieldRootContext = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"]({
    invalid: undefined,
    name: undefined,
    validityData: {
        state: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$field$2f$utils$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_VALIDITY_STATE"],
        errors: [],
        error: '',
        value: '',
        initialValue: null
    },
    setValidityData: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$empty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NOOP"],
    disabled: undefined,
    touched: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$field$2f$utils$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_FIELD_STATE_ATTRIBUTES"].touched,
    setTouched: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$empty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NOOP"],
    dirty: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$field$2f$utils$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_FIELD_STATE_ATTRIBUTES"].dirty,
    setDirty: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$empty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NOOP"],
    filled: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$field$2f$utils$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_FIELD_STATE_ATTRIBUTES"].filled,
    setFilled: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$empty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NOOP"],
    focused: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$field$2f$utils$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_FIELD_STATE_ATTRIBUTES"].focused,
    setFocused: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$empty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NOOP"],
    validate: ()=>null,
    validationMode: 'onSubmit',
    validationDebounceTime: 0,
    shouldValidateOnChange: ()=>false,
    state: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$field$2f$utils$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_FIELD_ROOT_STATE"],
    markedDirtyRef: {
        current: false
    },
    validation: {
        getValidationProps: (props = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$empty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EMPTY_OBJECT"])=>props,
        getInputValidationProps: (props = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$empty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EMPTY_OBJECT"])=>props,
        inputRef: {
            current: null
        },
        commit: async ()=>{}
    }
});
if ("TURBOPACK compile-time truthy", 1) FieldRootContext.displayName = "FieldRootContext";
function useFieldRootContext(optional = true) {
    const context = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"](FieldRootContext);
    if (context.setValidityData === __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$empty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NOOP"] && !optional) {
        throw new Error(("TURBOPACK compile-time truthy", 1) ? 'Base UI: FieldRootContext is missing. Field parts must be placed within <Field.Root>.' : "TURBOPACK unreachable");
    }
    return context;
}
}),
"[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/react/esm/fieldset/root/FieldsetRootContext.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FieldsetRootContext",
    ()=>FieldsetRootContext,
    "useFieldsetRootContext",
    ()=>useFieldsetRootContext
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
'use client';
;
;
const FieldsetRootContext = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"]({
    legendId: undefined,
    setLegendId: ()=>{},
    disabled: undefined
});
if ("TURBOPACK compile-time truthy", 1) FieldsetRootContext.displayName = "FieldsetRootContext";
function useFieldsetRootContext(optional = false) {
    const context = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"](FieldsetRootContext);
    if (!context && !optional) {
        throw new Error(("TURBOPACK compile-time truthy", 1) ? 'Base UI: FieldsetRootContext is missing. Fieldset parts must be placed within <Fieldset.Root>.' : "TURBOPACK unreachable");
    }
    return context;
}
}),
"[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/react/esm/form/FormContext.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FormContext",
    ()=>FormContext,
    "useFormContext",
    ()=>useFormContext
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$empty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/utils/esm/empty.js [app-client] (ecmascript)");
'use client';
;
;
const FormContext = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"]({
    formRef: {
        current: {
            fields: new Map()
        }
    },
    errors: {},
    clearErrors: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$empty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NOOP"],
    validationMode: 'onSubmit',
    submitAttemptedRef: {
        current: false
    }
});
if ("TURBOPACK compile-time truthy", 1) FormContext.displayName = "FormContext";
function useFormContext() {
    return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"](FormContext);
}
}),
"[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/react/esm/labelable-provider/LabelableContext.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LabelableContext",
    ()=>LabelableContext,
    "useLabelableContext",
    ()=>useLabelableContext
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$empty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/utils/esm/empty.js [app-client] (ecmascript)");
'use client';
;
;
const LabelableContext = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"]({
    controlId: undefined,
    registerControlId: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$empty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NOOP"],
    labelId: undefined,
    setLabelId: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$empty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NOOP"],
    messageIds: [],
    setMessageIds: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$empty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NOOP"],
    getDescriptionProps: (externalProps)=>externalProps
});
if ("TURBOPACK compile-time truthy", 1) LabelableContext.displayName = "LabelableContext";
function useLabelableContext() {
    return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"](LabelableContext);
}
}),
"[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/react/esm/labelable-provider/LabelableProvider.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LabelableProvider",
    ()=>LabelableProvider
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useStableCallback$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/utils/esm/useStableCallback.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useRefWithInit$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/utils/esm/useRefWithInit.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$merge$2d$props$2f$mergeProps$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/react/esm/merge-props/mergeProps.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$useBaseUiId$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/react/esm/utils/useBaseUiId.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$labelable$2d$provider$2f$LabelableContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/react/esm/labelable-provider/LabelableContext.js [app-client] (ecmascript)");
/**
 * @internal
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
'use client';
;
;
;
;
;
;
;
const LabelableProvider = function LabelableProvider(props) {
    const defaultId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$useBaseUiId$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBaseUiId"])();
    const initialControlId = props.controlId === undefined ? defaultId : props.controlId;
    const [controlId, setControlIdState] = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](initialControlId);
    const [labelId, setLabelId] = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](props.labelId);
    const [messageIds, setMessageIds] = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"]([]);
    const registrationsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useRefWithInit$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRefWithInit"])({
        "LabelableProvider.useRefWithInit[registrationsRef]": ()=>new Map()
    }["LabelableProvider.useRefWithInit[registrationsRef]"]);
    const { messageIds: parentMessageIds } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$labelable$2d$provider$2f$LabelableContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLabelableContext"])();
    const registerControlId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useStableCallback$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStableCallback"])({
        "LabelableProvider.useStableCallback[registerControlId]": (source, nextId)=>{
            const registrations = registrationsRef.current;
            if (nextId === undefined) {
                registrations.delete(source);
                return;
            }
            registrations.set(source, nextId);
            // Only flush when registering, not when unregistering.
            // This prevents loops during rapid unmount/remount cycles (e.g. React Activity).
            // The next registration will pick up the correct state.
            setControlIdState({
                "LabelableProvider.useStableCallback[registerControlId]": (prev)=>{
                    if (registrations.size === 0) {
                        return undefined;
                    }
                    let nextControlId;
                    for (const id of registrations.values()){
                        if (prev !== undefined && id === prev) {
                            return prev;
                        }
                        if (nextControlId === undefined) {
                            nextControlId = id;
                        }
                    }
                    return nextControlId;
                }
            }["LabelableProvider.useStableCallback[registerControlId]"]);
        }
    }["LabelableProvider.useStableCallback[registerControlId]"]);
    const getDescriptionProps = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"]({
        "LabelableProvider.useCallback[getDescriptionProps]": (externalProps)=>{
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$merge$2d$props$2f$mergeProps$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mergeProps"])({
                'aria-describedby': parentMessageIds.concat(messageIds).join(' ') || undefined
            }, externalProps);
        }
    }["LabelableProvider.useCallback[getDescriptionProps]"], [
        parentMessageIds,
        messageIds
    ]);
    const contextValue = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "LabelableProvider.useMemo[contextValue]": ()=>({
                controlId,
                registerControlId,
                labelId,
                setLabelId,
                messageIds,
                setMessageIds,
                getDescriptionProps
            })
    }["LabelableProvider.useMemo[contextValue]"], [
        controlId,
        registerControlId,
        labelId,
        setLabelId,
        messageIds,
        setMessageIds,
        getDescriptionProps
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$labelable$2d$provider$2f$LabelableContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LabelableContext"].Provider, {
        value: contextValue,
        children: props.children
    });
};
if ("TURBOPACK compile-time truthy", 1) LabelableProvider.displayName = "LabelableProvider";
}),
"[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/react/esm/field/utils/getCombinedFieldValidityData.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Combines the field's client-side, stateful validity data with the external invalid state to
 * determine the field's true validity.
 */ __turbopack_context__.s([
    "getCombinedFieldValidityData",
    ()=>getCombinedFieldValidityData
]);
function getCombinedFieldValidityData(validityData, invalid) {
    return {
        ...validityData,
        state: {
            ...validityData.state,
            valid: !invalid && validityData.state.valid
        }
    };
}
}),
"[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/react/esm/field/root/useFieldValidation.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useFieldValidation",
    ()=>useFieldValidation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$empty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/utils/esm/empty.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useTimeout$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/utils/esm/useTimeout.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useStableCallback$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/utils/esm/useStableCallback.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$labelable$2d$provider$2f$LabelableContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/react/esm/labelable-provider/LabelableContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$merge$2d$props$2f$mergeProps$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/react/esm/merge-props/mergeProps.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$field$2f$utils$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/react/esm/field/utils/constants.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$form$2f$FormContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/react/esm/form/FormContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$field$2f$utils$2f$getCombinedFieldValidityData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/react/esm/field/utils/getCombinedFieldValidityData.js [app-client] (ecmascript)");
'use client';
;
;
;
;
;
;
;
;
;
const validityKeys = Object.keys(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$field$2f$utils$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_VALIDITY_STATE"]);
function isOnlyValueMissing(state) {
    if (!state || state.valid || !state.valueMissing) {
        return false;
    }
    let onlyValueMissing = false;
    for (const key of validityKeys){
        if (key === 'valid') {
            continue;
        }
        if (key === 'valueMissing') {
            onlyValueMissing = state[key];
        }
        if (state[key]) {
            onlyValueMissing = false;
        }
    }
    return onlyValueMissing;
}
function useFieldValidation(params) {
    const { formRef, clearErrors } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$form$2f$FormContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFormContext"])();
    const { setValidityData, validate, validityData, validationDebounceTime, invalid, markedDirtyRef, state, name, shouldValidateOnChange } = params;
    const { controlId, getDescriptionProps } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$labelable$2d$provider$2f$LabelableContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLabelableContext"])();
    const timeout = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useTimeout$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTimeout"])();
    const inputRef = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](null);
    const commit = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useStableCallback$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStableCallback"])({
        "useFieldValidation.useStableCallback[commit]": async (value, revalidate = false)=>{
            const element = inputRef.current;
            if (!element) {
                return;
            }
            if (revalidate) {
                if (state.valid !== false) {
                    return;
                }
                const currentNativeValidity = element.validity;
                if (!currentNativeValidity.valueMissing) {
                    // The 'valueMissing' (required) condition has been resolved by the user typing.
                    // Temporarily mark the field as valid for this onChange event.
                    // Other native errors (e.g., typeMismatch) will be caught by full validation on blur or submit.
                    const nextValidityData = {
                        value,
                        state: {
                            ...__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$field$2f$utils$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_VALIDITY_STATE"],
                            valid: true
                        },
                        error: '',
                        errors: [],
                        initialValue: validityData.initialValue
                    };
                    element.setCustomValidity('');
                    if (controlId) {
                        const currentFieldData = formRef.current.fields.get(controlId);
                        if (currentFieldData) {
                            formRef.current.fields.set(controlId, {
                                ...currentFieldData,
                                ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$field$2f$utils$2f$getCombinedFieldValidityData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCombinedFieldValidityData"])(nextValidityData, false) // invalid = false
                            });
                        }
                    }
                    setValidityData(nextValidityData);
                    return;
                }
                // Value is still missing, or other conditions apply.
                // Let's use a representation of current validity for isOnlyValueMissing.
                const currentNativeValidityObject = validityKeys.reduce({
                    "useFieldValidation.useStableCallback[commit].currentNativeValidityObject": (acc, key)=>{
                        acc[key] = currentNativeValidity[key];
                        return acc;
                    }
                }["useFieldValidation.useStableCallback[commit].currentNativeValidityObject"], {});
                // If it's (still) natively invalid due to something other than just valueMissing,
                // then bail from this revalidation on change to avoid "scolding" for other errors.
                if (!currentNativeValidityObject.valid && !isOnlyValueMissing(currentNativeValidityObject)) {
                    return;
                }
            // If valueMissing is still true AND it's the only issue, or if the field is now natively valid,
            // let it fall through to the main validation logic below.
            }
            function getState(el) {
                const computedState = validityKeys.reduce({
                    "useFieldValidation.useStableCallback[commit].getState.computedState": (acc, key)=>{
                        acc[key] = el.validity[key];
                        return acc;
                    }
                }["useFieldValidation.useStableCallback[commit].getState.computedState"], {});
                let hasOnlyValueMissingError = false;
                for (const key of validityKeys){
                    if (key === 'valid') {
                        continue;
                    }
                    if (key === 'valueMissing' && computedState[key]) {
                        hasOnlyValueMissingError = true;
                    } else if (computedState[key]) {
                        return computedState;
                    }
                }
                // Only make `valueMissing` mark the field invalid if it's been changed
                // to reduce error noise.
                if (hasOnlyValueMissingError && !markedDirtyRef.current) {
                    computedState.valid = true;
                    computedState.valueMissing = false;
                }
                return computedState;
            }
            timeout.clear();
            let result = null;
            let validationErrors = [];
            const nextState = getState(element);
            let defaultValidationMessage;
            const validateOnChange = shouldValidateOnChange();
            if (element.validationMessage && !validateOnChange) {
                // not validating on change, if there is a `validationMessage` from
                // native validity, set errors and skip calling the custom validate fn
                defaultValidationMessage = element.validationMessage;
                validationErrors = [
                    element.validationMessage
                ];
            } else {
                // call the validate function because either
                // - validating on change, or
                // - native constraint validations passed, custom validity check is next
                const formValues = Array.from(formRef.current.fields.values()).reduce({
                    "useFieldValidation.useStableCallback[commit].formValues": (acc, field)=>{
                        if (field.name) {
                            acc[field.name] = field.getValue();
                        }
                        return acc;
                    }
                }["useFieldValidation.useStableCallback[commit].formValues"], {});
                const resultOrPromise = validate(value, formValues);
                if (typeof resultOrPromise === 'object' && resultOrPromise !== null && 'then' in resultOrPromise) {
                    result = await resultOrPromise;
                } else {
                    result = resultOrPromise;
                }
                if (result !== null) {
                    nextState.valid = false;
                    nextState.customError = true;
                    if (Array.isArray(result)) {
                        validationErrors = result;
                        element.setCustomValidity(result.join('\n'));
                    } else if (result) {
                        validationErrors = [
                            result
                        ];
                        element.setCustomValidity(result);
                    }
                } else if (validateOnChange) {
                    // validate function returned no errors, if validating on change
                    // we need to clear the custom validity state
                    element.setCustomValidity('');
                    nextState.customError = false;
                    if (element.validationMessage) {
                        defaultValidationMessage = element.validationMessage;
                        validationErrors = [
                            element.validationMessage
                        ];
                    } else if (element.validity.valid && !nextState.valid) {
                        nextState.valid = true;
                    }
                }
            }
            const nextValidityData = {
                value,
                state: nextState,
                error: defaultValidationMessage ?? (Array.isArray(result) ? result[0] : result ?? ''),
                errors: validationErrors,
                initialValue: validityData.initialValue
            };
            if (controlId) {
                const currentFieldData = formRef.current.fields.get(controlId);
                if (currentFieldData) {
                    formRef.current.fields.set(controlId, {
                        ...currentFieldData,
                        // Keep Form-level errors part of overall field validity for submit blocking/focus logic.
                        ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$field$2f$utils$2f$getCombinedFieldValidityData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCombinedFieldValidityData"])(nextValidityData, invalid)
                    });
                }
            }
            setValidityData(nextValidityData);
        }
    }["useFieldValidation.useStableCallback[commit]"]);
    const getValidationProps = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"]({
        "useFieldValidation.useCallback[getValidationProps]": (externalProps = {})=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$merge$2d$props$2f$mergeProps$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mergeProps"])(getDescriptionProps, state.valid === false ? {
                'aria-invalid': true
            } : __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$empty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EMPTY_OBJECT"], externalProps)
    }["useFieldValidation.useCallback[getValidationProps]"], [
        getDescriptionProps,
        state.valid
    ]);
    const getInputValidationProps = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"]({
        "useFieldValidation.useCallback[getInputValidationProps]": (externalProps = {})=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$merge$2d$props$2f$mergeProps$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mergeProps"])({
                onChange (event) {
                    // Workaround for https://github.com/facebook/react/issues/9023
                    if (event.nativeEvent.defaultPrevented) {
                        return;
                    }
                    clearErrors(name);
                    if (!shouldValidateOnChange()) {
                        commit(event.currentTarget.value, true);
                        return;
                    }
                    // When validating on change, run client-side validation even if
                    // externally invalid
                    const element = event.currentTarget;
                    if (element.value === '') {
                        // Ignore the debounce time for empty values.
                        commit(element.value);
                        return;
                    }
                    timeout.clear();
                    if (validationDebounceTime) {
                        timeout.start(validationDebounceTime, {
                            "useFieldValidation.useCallback[getInputValidationProps]": ()=>{
                                commit(element.value);
                            }
                        }["useFieldValidation.useCallback[getInputValidationProps]"]);
                    } else {
                        commit(element.value);
                    }
                }
            }, getValidationProps(externalProps))
    }["useFieldValidation.useCallback[getInputValidationProps]"], [
        getValidationProps,
        clearErrors,
        name,
        timeout,
        commit,
        validationDebounceTime,
        shouldValidateOnChange
    ]);
    return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "useFieldValidation.useMemo": ()=>({
                getValidationProps,
                getInputValidationProps,
                inputRef,
                commit
            })
    }["useFieldValidation.useMemo"], [
        getValidationProps,
        getInputValidationProps,
        commit
    ]);
}
}),
"[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/react/esm/field/root/FieldRoot.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FieldRoot",
    ()=>FieldRoot
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useStableCallback$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/utils/esm/useStableCallback.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$field$2f$root$2f$FieldRootContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/react/esm/field/root/FieldRootContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$field$2f$utils$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/react/esm/field/utils/constants.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$fieldset$2f$root$2f$FieldsetRootContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/react/esm/fieldset/root/FieldsetRootContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$form$2f$FormContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/react/esm/form/FormContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$labelable$2d$provider$2f$LabelableProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/react/esm/labelable-provider/LabelableProvider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$useRenderElement$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/react/esm/utils/useRenderElement.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$field$2f$root$2f$useFieldValidation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/react/esm/field/root/useFieldValidation.js [app-client] (ecmascript)");
/**
 * @internal
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
'use client';
;
;
;
;
;
;
;
;
;
;
const FieldRootInner = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](function FieldRootInner(componentProps, forwardedRef) {
    const { errors, validationMode: formValidationMode, submitAttemptedRef } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$form$2f$FormContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFormContext"])();
    const { render, className, validate: validateProp, validationDebounceTime = 0, validationMode = formValidationMode, name, disabled: disabledProp = false, invalid: invalidProp, dirty: dirtyProp, touched: touchedProp, actionsRef, ...elementProps } = componentProps;
    const { disabled: disabledFieldset } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$fieldset$2f$root$2f$FieldsetRootContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFieldsetRootContext"])();
    const validate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useStableCallback$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStableCallback"])(validateProp || ({
        "FieldRootInner.FieldRootInner.useStableCallback[validate]": ()=>null
    })["FieldRootInner.FieldRootInner.useStableCallback[validate]"]);
    const disabled = disabledFieldset || disabledProp;
    const [touchedState, setTouchedUnwrapped] = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](false);
    const [dirtyState, setDirtyUnwrapped] = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](false);
    const [filled, setFilled] = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](false);
    const [focused, setFocused] = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](false);
    const dirty = dirtyProp ?? dirtyState;
    const touched = touchedProp ?? touchedState;
    const markedDirtyRef = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](false);
    const setDirty = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useStableCallback$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStableCallback"])({
        "FieldRootInner.FieldRootInner.useStableCallback[setDirty]": (value)=>{
            if (dirtyProp !== undefined) {
                return;
            }
            if (value) {
                markedDirtyRef.current = true;
            }
            setDirtyUnwrapped(value);
        }
    }["FieldRootInner.FieldRootInner.useStableCallback[setDirty]"]);
    const setTouched = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useStableCallback$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStableCallback"])({
        "FieldRootInner.FieldRootInner.useStableCallback[setTouched]": (value)=>{
            if (touchedProp !== undefined) {
                return;
            }
            setTouchedUnwrapped(value);
        }
    }["FieldRootInner.FieldRootInner.useStableCallback[setTouched]"]);
    const shouldValidateOnChange = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useStableCallback$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStableCallback"])({
        "FieldRootInner.FieldRootInner.useStableCallback[shouldValidateOnChange]": ()=>validationMode === 'onChange' || validationMode === 'onSubmit' && submitAttemptedRef.current
    }["FieldRootInner.FieldRootInner.useStableCallback[shouldValidateOnChange]"]);
    const hasFormError = !!name && Object.hasOwn(errors, name) && errors[name] !== undefined;
    const invalid = invalidProp === true || hasFormError;
    const [validityData, setValidityData] = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"]({
        state: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$field$2f$utils$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_VALIDITY_STATE"],
        error: '',
        errors: [],
        value: null,
        initialValue: null
    });
    const valid = !invalid && validityData.state.valid;
    const state = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "FieldRootInner.FieldRootInner.useMemo[state]": ()=>({
                disabled,
                touched,
                dirty,
                valid,
                filled,
                focused
            })
    }["FieldRootInner.FieldRootInner.useMemo[state]"], [
        disabled,
        touched,
        dirty,
        valid,
        filled,
        focused
    ]);
    const validation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$field$2f$root$2f$useFieldValidation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFieldValidation"])({
        setValidityData,
        validate,
        validityData,
        validationDebounceTime,
        invalid,
        markedDirtyRef,
        state,
        name,
        shouldValidateOnChange
    });
    const handleImperativeValidate = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"]({
        "FieldRootInner.FieldRootInner.useCallback[handleImperativeValidate]": ()=>{
            markedDirtyRef.current = true;
            validation.commit(validityData.value);
        }
    }["FieldRootInner.FieldRootInner.useCallback[handleImperativeValidate]"], [
        validation,
        validityData
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useImperativeHandle"](actionsRef, {
        "FieldRootInner.FieldRootInner.useImperativeHandle": ()=>({
                validate: handleImperativeValidate
            })
    }["FieldRootInner.FieldRootInner.useImperativeHandle"], [
        handleImperativeValidate
    ]);
    const contextValue = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "FieldRootInner.FieldRootInner.useMemo[contextValue]": ()=>({
                invalid,
                name,
                validityData,
                setValidityData,
                disabled,
                touched,
                setTouched,
                dirty,
                setDirty,
                filled,
                setFilled,
                focused,
                setFocused,
                validate,
                validationMode,
                validationDebounceTime,
                shouldValidateOnChange,
                state,
                markedDirtyRef,
                validation
            })
    }["FieldRootInner.FieldRootInner.useMemo[contextValue]"], [
        invalid,
        name,
        validityData,
        disabled,
        touched,
        setTouched,
        dirty,
        setDirty,
        filled,
        setFilled,
        focused,
        setFocused,
        validate,
        validationMode,
        validationDebounceTime,
        shouldValidateOnChange,
        state,
        validation
    ]);
    const element = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$useRenderElement$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRenderElement"])('div', componentProps, {
        ref: forwardedRef,
        state,
        props: elementProps,
        stateAttributesMapping: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$field$2f$utils$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fieldValidityMapping"]
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$field$2f$root$2f$FieldRootContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FieldRootContext"].Provider, {
        value: contextValue,
        children: element
    });
});
/**
 * Groups all parts of the field.
 * Renders a `<div>` element.
 *
 * Documentation: [Base UI Field](https://base-ui.com/react/components/field)
 */ if ("TURBOPACK compile-time truthy", 1) FieldRootInner.displayName = "FieldRootInner";
const FieldRoot = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](function FieldRoot(componentProps, forwardedRef) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$labelable$2d$provider$2f$LabelableProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LabelableProvider"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(FieldRootInner, {
            ...componentProps,
            ref: forwardedRef
        })
    });
});
if ("TURBOPACK compile-time truthy", 1) FieldRoot.displayName = "FieldRoot";
}),
"[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/react/esm/utils/useRegisteredLabelId.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useRegisteredLabelId",
    ()=>useRegisteredLabelId
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useIsoLayoutEffect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/utils/esm/useIsoLayoutEffect.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$useBaseUiId$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/react/esm/utils/useBaseUiId.js [app-client] (ecmascript)");
'use client';
;
;
function useRegisteredLabelId(idProp, setLabelId) {
    const id = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$useBaseUiId$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBaseUiId"])(idProp);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useIsoLayoutEffect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useIsoLayoutEffect"])({
        "useRegisteredLabelId.useIsoLayoutEffect": ()=>{
            setLabelId(id);
            return ({
                "useRegisteredLabelId.useIsoLayoutEffect": ()=>{
                    setLabelId(undefined);
                }
            })["useRegisteredLabelId.useIsoLayoutEffect"];
        }
    }["useRegisteredLabelId.useIsoLayoutEffect"], [
        id,
        setLabelId
    ]);
    return id;
}
}),
"[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/react/esm/labelable-provider/useLabel.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "focusElementWithVisible",
    ()=>focusElementWithVisible,
    "useLabel",
    ()=>useLabel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/@floating-ui/utils/dist/floating-ui.utils.dom.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$owner$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/utils/esm/owner.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useStableCallback$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/utils/esm/useStableCallback.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$floating$2d$ui$2d$react$2f$utils$2f$element$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/react/esm/floating-ui-react/utils/element.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$useRegisteredLabelId$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/react/esm/utils/useRegisteredLabelId.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$labelable$2d$provider$2f$LabelableContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/react/esm/labelable-provider/LabelableContext.js [app-client] (ecmascript)");
'use client';
;
;
;
;
;
;
function useLabel(params = {}) {
    const { id: idProp, fallbackControlId, native = false, setLabelId: setLabelIdProp, focusControl: focusControlProp } = params;
    const { controlId: contextControlId, setLabelId: setContextLabelId } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$labelable$2d$provider$2f$LabelableContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLabelableContext"])();
    const syncLabelId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useStableCallback$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStableCallback"])({
        "useLabel.useStableCallback[syncLabelId]": (nextLabelId)=>{
            setContextLabelId(nextLabelId);
            setLabelIdProp?.(nextLabelId);
        }
    }["useLabel.useStableCallback[syncLabelId]"]);
    const id = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$useRegisteredLabelId$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRegisteredLabelId"])(idProp, syncLabelId);
    const resolvedControlId = contextControlId ?? fallbackControlId;
    function focusControl(event) {
        if (focusControlProp) {
            focusControlProp(event, resolvedControlId);
            return;
        }
        if (!resolvedControlId) {
            return;
        }
        const controlElement = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$owner$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ownerDocument"])(event.currentTarget).getElementById(resolvedControlId);
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isHTMLElement"])(controlElement)) {
            focusElementWithVisible(controlElement);
        }
    }
    function handleInteraction(event) {
        const target = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$floating$2d$ui$2d$react$2f$utils$2f$element$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getTarget"])(event.nativeEvent);
        if (target?.closest('button,input,select,textarea')) {
            return;
        }
        // Prevent text selection when double clicking label.
        if (!event.defaultPrevented && event.detail > 1) {
            event.preventDefault();
        }
        if (native) {
            return;
        }
        focusControl(event);
    }
    return native ? {
        id,
        htmlFor: resolvedControlId ?? undefined,
        onMouseDown: handleInteraction
    } : {
        id,
        onClick: handleInteraction,
        onPointerDown (event) {
            event.preventDefault();
        }
    };
}
function focusElementWithVisible(element) {
    element.focus({
        // Available from Chrome 144+ (January 2026).
        // Safari and Firefox already support it.
        // @ts-expect-error not available in types yet
        focusVisible: true
    });
}
}),
"[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/react/esm/field/label/FieldLabel.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FieldLabel",
    ()=>FieldLabel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/utils/esm/error.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$safeReact$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/utils/esm/safeReact.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$field$2f$root$2f$FieldRootContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/react/esm/field/root/FieldRootContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$field$2f$utils$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/react/esm/field/utils/constants.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$useRenderElement$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/react/esm/utils/useRenderElement.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$labelable$2d$provider$2f$LabelableContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/react/esm/labelable-provider/LabelableContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$labelable$2d$provider$2f$useLabel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/react/esm/labelable-provider/useLabel.js [app-client] (ecmascript)");
'use client';
;
;
;
;
;
;
;
;
const FieldLabel = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](function FieldLabel(componentProps, forwardedRef) {
    const { render, className, id: idProp, nativeLabel = true, ...elementProps } = componentProps;
    const fieldRootContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$field$2f$root$2f$FieldRootContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFieldRootContext"])(false);
    const { labelId } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$labelable$2d$provider$2f$LabelableContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLabelableContext"])();
    const labelRef = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](null);
    const labelProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$labelable$2d$provider$2f$useLabel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLabel"])({
        id: labelId ?? idProp,
        native: nativeLabel
    });
    if ("TURBOPACK compile-time truthy", 1) {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
            "FieldLabel.FieldLabel.useEffect": ()=>{
                if (!labelRef.current) {
                    return;
                }
                const isLabelTag = labelRef.current.tagName === 'LABEL';
                if (nativeLabel) {
                    if (!isLabelTag) {
                        const ownerStackMessage = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$safeReact$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SafeReact"].captureOwnerStack?.() || '';
                        const message = '<Field.Label> expected a <label> element because the `nativeLabel` prop is true. ' + 'Rendering a non-<label> disables native label association, so `htmlFor` will not ' + 'work. Use a real <label> in the `render` prop, or set `nativeLabel` to `false`.';
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["error"])(`${message}${ownerStackMessage}`);
                    }
                } else if (isLabelTag) {
                    const ownerStackMessage = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$safeReact$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SafeReact"].captureOwnerStack?.() || '';
                    const message = '<Field.Label> expected a non-<label> element because the `nativeLabel` prop is false. ' + 'Rendering a <label> assumes native label behavior while Base UI treats it as ' + 'non-native, which can cause unexpected pointer behavior. Use a non-<label> in the ' + '`render` prop, or set `nativeLabel` to `true`.';
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["error"])(`${message}${ownerStackMessage}`);
                }
            }
        }["FieldLabel.FieldLabel.useEffect"], [
            nativeLabel
        ]);
    }
    const element = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$useRenderElement$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRenderElement"])('label', componentProps, {
        ref: [
            forwardedRef,
            labelRef
        ],
        state: fieldRootContext.state,
        props: [
            labelProps,
            elementProps
        ],
        stateAttributesMapping: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$field$2f$utils$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fieldValidityMapping"]
    });
    return element;
});
if ("TURBOPACK compile-time truthy", 1) FieldLabel.displayName = "FieldLabel";
}),
"[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/react/esm/field/error/FieldError.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FieldError",
    ()=>FieldError
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useIsoLayoutEffect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/utils/esm/useIsoLayoutEffect.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$field$2f$root$2f$FieldRootContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/react/esm/field/root/FieldRootContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$labelable$2d$provider$2f$LabelableContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/react/esm/labelable-provider/LabelableContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$field$2f$utils$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/react/esm/field/utils/constants.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$form$2f$FormContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/react/esm/form/FormContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$useRenderElement$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/react/esm/utils/useRenderElement.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$useBaseUiId$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/react/esm/utils/useBaseUiId.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$useOpenChangeComplete$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/react/esm/utils/useOpenChangeComplete.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$stateAttributesMapping$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/react/esm/utils/stateAttributesMapping.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$useTransitionStatus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/react/esm/utils/useTransitionStatus.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
'use client';
;
;
;
;
;
;
;
;
;
;
;
;
const stateAttributesMapping = {
    ...__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$field$2f$utils$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fieldValidityMapping"],
    ...__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$stateAttributesMapping$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transitionStatusMapping"]
};
const FieldError = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](function FieldError(componentProps, forwardedRef) {
    const { render, id: idProp, className, match, ...elementProps } = componentProps;
    const id = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$useBaseUiId$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBaseUiId"])(idProp);
    const { validityData, state: fieldState, name } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$field$2f$root$2f$FieldRootContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFieldRootContext"])(false);
    const { setMessageIds } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$labelable$2d$provider$2f$LabelableContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLabelableContext"])();
    const { errors } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$form$2f$FormContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFormContext"])();
    const formError = name ? errors[name] : null;
    let rendered = false;
    if (formError || match === true) {
        rendered = true;
    } else if (match) {
        rendered = Boolean(validityData.state[match]);
    } else {
        rendered = validityData.state.valid === false;
    }
    const { mounted, transitionStatus, setMounted } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$useTransitionStatus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransitionStatus"])(rendered);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useIsoLayoutEffect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useIsoLayoutEffect"])({
        "FieldError.FieldError.useIsoLayoutEffect": ()=>{
            if (!rendered || !id) {
                return undefined;
            }
            setMessageIds({
                "FieldError.FieldError.useIsoLayoutEffect": (v)=>v.concat(id)
            }["FieldError.FieldError.useIsoLayoutEffect"]);
            return ({
                "FieldError.FieldError.useIsoLayoutEffect": ()=>{
                    setMessageIds({
                        "FieldError.FieldError.useIsoLayoutEffect": (v)=>v.filter({
                                "FieldError.FieldError.useIsoLayoutEffect": (item)=>item !== id
                            }["FieldError.FieldError.useIsoLayoutEffect"])
                    }["FieldError.FieldError.useIsoLayoutEffect"]);
                }
            })["FieldError.FieldError.useIsoLayoutEffect"];
        }
    }["FieldError.FieldError.useIsoLayoutEffect"], [
        rendered,
        id,
        setMessageIds
    ]);
    const errorRef = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](null);
    const [lastRenderedMessage, setLastRenderedMessage] = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](null);
    const [lastRenderedMessageKey, setLastRenderedMessageKey] = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](null);
    const errorMessage = formError || (validityData.errors.length > 1 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("ul", {
        children: validityData.errors.map((message)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("li", {
                children: message
            }, message))
    }) : validityData.error);
    let errorKey = validityData.error;
    if (formError != null) {
        errorKey = Array.isArray(formError) ? JSON.stringify(formError) : formError;
    } else if (validityData.errors.length > 1) {
        errorKey = JSON.stringify(validityData.errors);
    }
    if (rendered && errorKey !== lastRenderedMessageKey) {
        setLastRenderedMessageKey(errorKey);
        setLastRenderedMessage(errorMessage);
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$useOpenChangeComplete$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useOpenChangeComplete"])({
        open: rendered,
        ref: errorRef,
        onComplete () {
            if (!rendered) {
                setMounted(false);
            }
        }
    });
    const state = {
        ...fieldState,
        transitionStatus
    };
    const element = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$useRenderElement$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRenderElement"])('div', componentProps, {
        ref: [
            forwardedRef,
            errorRef
        ],
        state,
        props: [
            {
                id,
                children: rendered ? errorMessage : lastRenderedMessage
            },
            elementProps
        ],
        stateAttributesMapping,
        enabled: mounted
    });
    if (!mounted) {
        return null;
    }
    return element;
});
if ("TURBOPACK compile-time truthy", 1) FieldError.displayName = "FieldError";
}),
"[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/react/esm/field/description/FieldDescription.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FieldDescription",
    ()=>FieldDescription
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useIsoLayoutEffect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/utils/esm/useIsoLayoutEffect.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$field$2f$root$2f$FieldRootContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/react/esm/field/root/FieldRootContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$labelable$2d$provider$2f$LabelableContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/react/esm/labelable-provider/LabelableContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$field$2f$utils$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/react/esm/field/utils/constants.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$useBaseUiId$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/react/esm/utils/useBaseUiId.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$useRenderElement$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/react/esm/utils/useRenderElement.js [app-client] (ecmascript)");
'use client';
;
;
;
;
;
;
;
const FieldDescription = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](function FieldDescription(componentProps, forwardedRef) {
    const { render, id: idProp, className, ...elementProps } = componentProps;
    const id = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$useBaseUiId$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBaseUiId"])(idProp);
    const fieldRootContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$field$2f$root$2f$FieldRootContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFieldRootContext"])(false);
    const { setMessageIds } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$labelable$2d$provider$2f$LabelableContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLabelableContext"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useIsoLayoutEffect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useIsoLayoutEffect"])({
        "FieldDescription.FieldDescription.useIsoLayoutEffect": ()=>{
            if (!id) {
                return undefined;
            }
            setMessageIds({
                "FieldDescription.FieldDescription.useIsoLayoutEffect": (v)=>v.concat(id)
            }["FieldDescription.FieldDescription.useIsoLayoutEffect"]);
            return ({
                "FieldDescription.FieldDescription.useIsoLayoutEffect": ()=>{
                    setMessageIds({
                        "FieldDescription.FieldDescription.useIsoLayoutEffect": (v)=>v.filter({
                                "FieldDescription.FieldDescription.useIsoLayoutEffect": (item)=>item !== id
                            }["FieldDescription.FieldDescription.useIsoLayoutEffect"])
                    }["FieldDescription.FieldDescription.useIsoLayoutEffect"]);
                }
            })["FieldDescription.FieldDescription.useIsoLayoutEffect"];
        }
    }["FieldDescription.FieldDescription.useIsoLayoutEffect"], [
        id,
        setMessageIds
    ]);
    const element = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$useRenderElement$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRenderElement"])('p', componentProps, {
        ref: forwardedRef,
        state: fieldRootContext.state,
        props: [
            {
                id
            },
            elementProps
        ],
        stateAttributesMapping: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$field$2f$utils$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fieldValidityMapping"]
    });
    return element;
});
if ("TURBOPACK compile-time truthy", 1) FieldDescription.displayName = "FieldDescription";
}),
"[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/react/esm/labelable-provider/useLabelableId.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useLabelableId",
    ()=>useLabelableId
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useIsoLayoutEffect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/utils/esm/useIsoLayoutEffect.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useStableCallback$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/utils/esm/useStableCallback.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useRefWithInit$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/utils/esm/useRefWithInit.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/@floating-ui/utils/dist/floating-ui.utils.dom.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$empty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/utils/esm/empty.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$useBaseUiId$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/react/esm/utils/useBaseUiId.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$labelable$2d$provider$2f$LabelableContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/react/esm/labelable-provider/LabelableContext.js [app-client] (ecmascript)");
'use client';
;
;
;
;
;
;
;
;
function useLabelableId(params = {}) {
    const { id, implicit = false, controlRef } = params;
    const { controlId, registerControlId } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$labelable$2d$provider$2f$LabelableContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLabelableContext"])();
    const defaultId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$useBaseUiId$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBaseUiId"])(id);
    const controlIdForEffect = implicit ? controlId : undefined;
    const controlSourceRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useRefWithInit$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRefWithInit"])({
        "useLabelableId.useRefWithInit[controlSourceRef]": ()=>Symbol('labelable-control')
    }["useLabelableId.useRefWithInit[controlSourceRef]"]);
    const hasRegisteredRef = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](false);
    const hadExplicitIdRef = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](id != null);
    const unregisterControlId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useStableCallback$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStableCallback"])({
        "useLabelableId.useStableCallback[unregisterControlId]": ()=>{
            if (!hasRegisteredRef.current || registerControlId === __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$empty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NOOP"]) {
                return;
            }
            hasRegisteredRef.current = false;
            registerControlId(controlSourceRef.current, undefined);
        }
    }["useLabelableId.useStableCallback[unregisterControlId]"]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useIsoLayoutEffect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useIsoLayoutEffect"])({
        "useLabelableId.useIsoLayoutEffect": ()=>{
            if (registerControlId === __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$empty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NOOP"]) {
                return undefined;
            }
            let nextId;
            if (implicit) {
                const elem = controlRef?.current;
                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isElement"])(elem) && elem.closest('label') != null) {
                    nextId = id ?? null;
                } else {
                    nextId = controlIdForEffect ?? defaultId;
                }
            } else if (id != null) {
                hadExplicitIdRef.current = true;
                nextId = id;
            } else if (hadExplicitIdRef.current) {
                nextId = defaultId;
            } else {
                unregisterControlId();
                return undefined;
            }
            if (nextId === undefined) {
                unregisterControlId();
                return undefined;
            }
            hasRegisteredRef.current = true;
            registerControlId(controlSourceRef.current, nextId);
            return undefined;
        }
    }["useLabelableId.useIsoLayoutEffect"], [
        id,
        controlRef,
        controlIdForEffect,
        registerControlId,
        implicit,
        defaultId,
        controlSourceRef,
        unregisterControlId
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "useLabelableId.useEffect": ()=>{
            return unregisterControlId;
        }
    }["useLabelableId.useEffect"], [
        unregisterControlId
    ]);
    return controlId ?? defaultId;
}
}),
"[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/react/esm/field/useField.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useField",
    ()=>useField
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/next/dist/compiled/react-dom/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useIsoLayoutEffect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/utils/esm/useIsoLayoutEffect.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useStableCallback$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/utils/esm/useStableCallback.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$field$2f$utils$2f$getCombinedFieldValidityData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/react/esm/field/utils/getCombinedFieldValidityData.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$form$2f$FormContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/react/esm/form/FormContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$field$2f$root$2f$FieldRootContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/react/esm/field/root/FieldRootContext.js [app-client] (ecmascript)");
'use client';
;
;
;
;
;
;
function useField(params) {
    const { enabled = true, value, id, name, controlRef, commit } = params;
    const { formRef } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$form$2f$FormContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFormContext"])();
    const { invalid, markedDirtyRef, validityData, setValidityData } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$field$2f$root$2f$FieldRootContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFieldRootContext"])();
    const getValue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useStableCallback$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStableCallback"])(params.getValue);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useIsoLayoutEffect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useIsoLayoutEffect"])({
        "useField.useIsoLayoutEffect": ()=>{
            if (!enabled) {
                return;
            }
            let initialValue = value;
            if (initialValue === undefined) {
                initialValue = getValue();
            }
            if (validityData.initialValue === null && initialValue !== null) {
                setValidityData({
                    "useField.useIsoLayoutEffect": (prev)=>({
                            ...prev,
                            initialValue
                        })
                }["useField.useIsoLayoutEffect"]);
            }
        }
    }["useField.useIsoLayoutEffect"], [
        enabled,
        setValidityData,
        value,
        validityData.initialValue,
        getValue
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useIsoLayoutEffect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useIsoLayoutEffect"])({
        "useField.useIsoLayoutEffect": ()=>{
            if (!enabled || !id) {
                return;
            }
            formRef.current.fields.set(id, {
                getValue,
                name,
                controlRef,
                validityData: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$field$2f$utils$2f$getCombinedFieldValidityData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCombinedFieldValidityData"])(validityData, invalid),
                validate (flushSync = true) {
                    let nextValue = value;
                    if (nextValue === undefined) {
                        nextValue = getValue();
                    }
                    markedDirtyRef.current = true;
                    if (!flushSync) {
                        commit(nextValue);
                    } else {
                        // Synchronously update the validity state so the submit event can be prevented.
                        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["flushSync"]({
                            "useField.useIsoLayoutEffect": ()=>commit(nextValue)
                        }["useField.useIsoLayoutEffect"]);
                    }
                }
            });
        }
    }["useField.useIsoLayoutEffect"], [
        commit,
        controlRef,
        enabled,
        formRef,
        getValue,
        id,
        invalid,
        markedDirtyRef,
        name,
        validityData,
        value
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useIsoLayoutEffect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useIsoLayoutEffect"])({
        "useField.useIsoLayoutEffect": ()=>{
            const fields = formRef.current.fields;
            return ({
                "useField.useIsoLayoutEffect": ()=>{
                    if (id) {
                        fields.delete(id);
                    }
                }
            })["useField.useIsoLayoutEffect"];
        }
    }["useField.useIsoLayoutEffect"], [
        formRef,
        id
    ]);
}
}),
"[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/react/esm/field/control/FieldControl.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FieldControl",
    ()=>FieldControl
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useControlled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/utils/esm/useControlled.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useIsoLayoutEffect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/utils/esm/useIsoLayoutEffect.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$owner$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/utils/esm/owner.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$field$2f$root$2f$FieldRootContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/react/esm/field/root/FieldRootContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$labelable$2d$provider$2f$LabelableContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/react/esm/labelable-provider/LabelableContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$labelable$2d$provider$2f$useLabelableId$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/react/esm/labelable-provider/useLabelableId.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$field$2f$utils$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/react/esm/field/utils/constants.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$useRenderElement$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/react/esm/utils/useRenderElement.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$field$2f$useField$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/react/esm/field/useField.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$createBaseUIEventDetails$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/react/esm/utils/createBaseUIEventDetails.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$reason$2d$parts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__REASONS$3e$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/react/esm/utils/reason-parts.js [app-client] (ecmascript) <export * as REASONS>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$floating$2d$ui$2d$react$2f$utils$2f$element$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/react/esm/floating-ui-react/utils/element.js [app-client] (ecmascript)");
'use client';
;
;
;
;
;
;
;
;
;
;
;
;
;
const FieldControl = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](function FieldControl(componentProps, forwardedRef) {
    const { render, className, id: idProp, name: nameProp, value: valueProp, disabled: disabledProp = false, onValueChange, defaultValue, autoFocus = false, ...elementProps } = componentProps;
    const { state: fieldState, name: fieldName, disabled: fieldDisabled, setTouched, setDirty, validityData, setFocused, setFilled, validationMode, validation } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$field$2f$root$2f$FieldRootContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFieldRootContext"])();
    const disabled = fieldDisabled || disabledProp;
    const name = fieldName ?? nameProp;
    const state = {
        ...fieldState,
        disabled
    };
    const { labelId } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$labelable$2d$provider$2f$LabelableContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLabelableContext"])();
    const id = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$labelable$2d$provider$2f$useLabelableId$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLabelableId"])({
        id: idProp
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useIsoLayoutEffect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useIsoLayoutEffect"])({
        "FieldControl.FieldControl.useIsoLayoutEffect": ()=>{
            const hasExternalValue = valueProp != null;
            if (validation.inputRef.current?.value || hasExternalValue && valueProp !== '') {
                setFilled(true);
            } else if (hasExternalValue && valueProp === '') {
                setFilled(false);
            }
        }
    }["FieldControl.FieldControl.useIsoLayoutEffect"], [
        validation.inputRef,
        setFilled,
        valueProp
    ]);
    const inputRef = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useIsoLayoutEffect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useIsoLayoutEffect"])({
        "FieldControl.FieldControl.useIsoLayoutEffect": ()=>{
            if (autoFocus && inputRef.current === (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$floating$2d$ui$2d$react$2f$utils$2f$element$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["activeElement"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$owner$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ownerDocument"])(inputRef.current))) {
                setFocused(true);
            }
        }
    }["FieldControl.FieldControl.useIsoLayoutEffect"], [
        autoFocus,
        setFocused
    ]);
    const [valueUnwrapped] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useControlled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useControlled"])({
        controlled: valueProp,
        default: defaultValue,
        name: 'FieldControl',
        state: 'value'
    });
    const isControlled = valueProp !== undefined;
    const value = isControlled ? valueUnwrapped : undefined;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$field$2f$useField$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useField"])({
        id,
        name,
        commit: validation.commit,
        value,
        getValue: {
            "FieldControl.FieldControl.useField": ()=>validation.inputRef.current?.value
        }["FieldControl.FieldControl.useField"],
        controlRef: validation.inputRef
    });
    const element = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$useRenderElement$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRenderElement"])('input', componentProps, {
        ref: [
            forwardedRef,
            inputRef
        ],
        state,
        props: [
            {
                id,
                disabled,
                name,
                ref: validation.inputRef,
                'aria-labelledby': labelId,
                autoFocus,
                ...isControlled ? {
                    value
                } : {
                    defaultValue
                },
                onChange (event) {
                    const inputValue = event.currentTarget.value;
                    onValueChange?.(inputValue, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$createBaseUIEventDetails$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createChangeEventDetails"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$reason$2d$parts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__REASONS$3e$__["REASONS"].none, event.nativeEvent));
                    setDirty(inputValue !== validityData.initialValue);
                    setFilled(inputValue !== '');
                },
                onFocus () {
                    setFocused(true);
                },
                onBlur (event) {
                    setTouched(true);
                    setFocused(false);
                    if (validationMode === 'onBlur') {
                        validation.commit(event.currentTarget.value);
                    }
                },
                onKeyDown (event) {
                    if (event.currentTarget.tagName === 'INPUT' && event.key === 'Enter') {
                        setTouched(true);
                        validation.commit(event.currentTarget.value);
                    }
                }
            },
            validation.getInputValidationProps(),
            elementProps
        ],
        stateAttributesMapping: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$field$2f$utils$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fieldValidityMapping"]
    });
    return element;
});
if ("TURBOPACK compile-time truthy", 1) FieldControl.displayName = "FieldControl";
}),
"[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/react/esm/field/validity/FieldValidity.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FieldValidity",
    ()=>FieldValidity
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$field$2f$root$2f$FieldRootContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/react/esm/field/root/FieldRootContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$field$2f$utils$2f$getCombinedFieldValidityData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/react/esm/field/utils/getCombinedFieldValidityData.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$useTransitionStatus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/react/esm/utils/useTransitionStatus.js [app-client] (ecmascript)");
/**
 * Used to display a custom message based on the field’s validity.
 * Requires `children` to be a function that accepts field validity state as an argument.
 *
 * Documentation: [Base UI Field](https://base-ui.com/react/components/field)
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
'use client';
;
;
;
;
;
const FieldValidity = function FieldValidity(props) {
    const { children } = props;
    const { validityData, invalid } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$field$2f$root$2f$FieldRootContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFieldRootContext"])(false);
    const combinedFieldValidityData = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "FieldValidity.useMemo[combinedFieldValidityData]": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$field$2f$utils$2f$getCombinedFieldValidityData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCombinedFieldValidityData"])(validityData, invalid)
    }["FieldValidity.useMemo[combinedFieldValidityData]"], [
        validityData,
        invalid
    ]);
    const isInvalid = combinedFieldValidityData.state.valid === false;
    const { transitionStatus } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$useTransitionStatus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransitionStatus"])(isInvalid);
    const fieldValidityState = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "FieldValidity.useMemo[fieldValidityState]": ()=>{
            return {
                ...combinedFieldValidityData,
                validity: combinedFieldValidityData.state,
                transitionStatus
            };
        }
    }["FieldValidity.useMemo[fieldValidityState]"], [
        combinedFieldValidityData,
        transitionStatus
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: children(fieldValidityState)
    });
};
if ("TURBOPACK compile-time truthy", 1) FieldValidity.displayName = "FieldValidity";
}),
"[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/react/esm/field/item/FieldItemContext.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FieldItemContext",
    ()=>FieldItemContext,
    "useFieldItemContext",
    ()=>useFieldItemContext
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
'use client';
;
const FieldItemContext = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"]({
    disabled: false
});
if ("TURBOPACK compile-time truthy", 1) FieldItemContext.displayName = "FieldItemContext";
function useFieldItemContext() {
    const context = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"](FieldItemContext);
    return context;
}
}),
"[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/react/esm/checkbox-group/CheckboxGroupContext.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CheckboxGroupContext",
    ()=>CheckboxGroupContext,
    "useCheckboxGroupContext",
    ()=>useCheckboxGroupContext
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
'use client';
;
;
const CheckboxGroupContext = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"](undefined);
if ("TURBOPACK compile-time truthy", 1) CheckboxGroupContext.displayName = "CheckboxGroupContext";
function useCheckboxGroupContext(optional = true) {
    const context = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"](CheckboxGroupContext);
    if (context === undefined && !optional) {
        throw new Error(("TURBOPACK compile-time truthy", 1) ? 'Base UI: CheckboxGroupContext is missing. CheckboxGroup parts must be placed within <CheckboxGroup>.' : "TURBOPACK unreachable");
    }
    return context;
}
}),
"[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/react/esm/field/item/FieldItem.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FieldItem",
    ()=>FieldItem
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$field$2f$root$2f$FieldRootContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/react/esm/field/root/FieldRootContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$field$2f$utils$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/react/esm/field/utils/constants.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$useRenderElement$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/react/esm/utils/useRenderElement.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$field$2f$item$2f$FieldItemContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/react/esm/field/item/FieldItemContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$labelable$2d$provider$2f$LabelableProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/react/esm/labelable-provider/LabelableProvider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$checkbox$2d$group$2f$CheckboxGroupContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/react/esm/checkbox-group/CheckboxGroupContext.js [app-client] (ecmascript)");
/**
 * Groups individual items in a checkbox group or radio group with a label and description.
 * Renders a `<div>` element.
 *
 * Documentation: [Base UI Field](https://base-ui.com/react/components/field)
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
'use client';
;
;
;
;
;
;
;
;
const FieldItem = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](function FieldItem(componentProps, forwardedRef) {
    const { render, className, disabled: disabledProp = false, ...elementProps } = componentProps;
    const { state, disabled: rootDisabled } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$field$2f$root$2f$FieldRootContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFieldRootContext"])(false);
    const disabled = rootDisabled || disabledProp;
    const checkboxGroupContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$checkbox$2d$group$2f$CheckboxGroupContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCheckboxGroupContext"])();
    // checkboxGroupContext.parent is truthy even if no parent checkbox is involved
    const parentId = checkboxGroupContext?.parent.id;
    // this a more reliable check
    const hasParentCheckbox = checkboxGroupContext?.allValues !== undefined;
    const controlId = hasParentCheckbox ? parentId : undefined;
    const fieldItemContext = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "FieldItem.FieldItem.useMemo[fieldItemContext]": ()=>({
                disabled
            })
    }["FieldItem.FieldItem.useMemo[fieldItemContext]"], [
        disabled
    ]);
    const element = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$useRenderElement$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRenderElement"])('div', componentProps, {
        ref: forwardedRef,
        state,
        props: elementProps,
        stateAttributesMapping: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$field$2f$utils$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fieldValidityMapping"]
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$labelable$2d$provider$2f$LabelableProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LabelableProvider"], {
        controlId: controlId,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$field$2f$item$2f$FieldItemContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FieldItemContext"].Provider, {
            value: fieldItemContext,
            children: element
        })
    });
});
if ("TURBOPACK compile-time truthy", 1) FieldItem.displayName = "FieldItem";
}),
"[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/react/esm/field/index.parts.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Control",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$field$2f$control$2f$FieldControl$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FieldControl"],
    "Description",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$field$2f$description$2f$FieldDescription$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FieldDescription"],
    "Error",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$field$2f$error$2f$FieldError$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FieldError"],
    "Item",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$field$2f$item$2f$FieldItem$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FieldItem"],
    "Label",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$field$2f$label$2f$FieldLabel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FieldLabel"],
    "Root",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$field$2f$root$2f$FieldRoot$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FieldRoot"],
    "Validity",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$field$2f$validity$2f$FieldValidity$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FieldValidity"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$field$2f$index$2e$parts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/react/esm/field/index.parts.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$field$2f$root$2f$FieldRoot$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/react/esm/field/root/FieldRoot.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$field$2f$label$2f$FieldLabel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/react/esm/field/label/FieldLabel.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$field$2f$error$2f$FieldError$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/react/esm/field/error/FieldError.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$field$2f$description$2f$FieldDescription$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/react/esm/field/description/FieldDescription.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$field$2f$control$2f$FieldControl$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/react/esm/field/control/FieldControl.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$field$2f$validity$2f$FieldValidity$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/react/esm/field/validity/FieldValidity.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$field$2f$item$2f$FieldItem$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/react/esm/field/item/FieldItem.js [app-client] (ecmascript)");
}),
"[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/react/esm/field/index.parts.js [app-client] (ecmascript) <export * as Field>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Field",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$field$2f$index$2e$parts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$field$2f$index$2e$parts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/react/esm/field/index.parts.js [app-client] (ecmascript)");
}),
"[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/react/esm/input/Input.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Input",
    ()=>Input
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$field$2f$index$2e$parts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Field$3e$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/react/esm/field/index.parts.js [app-client] (ecmascript) <export * as Field>");
/**
 * A native input element that automatically works with [Field](https://base-ui.com/react/components/field).
 * Renders an `<input>` element.
 *
 * Documentation: [Base UI Input](https://base-ui.com/react/components/input)
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
'use client';
;
;
;
const Input = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](function Input(props, forwardedRef) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$field$2f$index$2e$parts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Field$3e$__["Field"].Control, {
        ref: forwardedRef,
        ...props
    });
});
if ("TURBOPACK compile-time truthy", 1) Input.displayName = "Input";
}),
"[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/react/esm/popover/index.parts.js [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
;
;
;
;
;
;
;
;
;
;
;
;
}),
"[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/react/esm/popover/root/PopoverRootContext.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PopoverRootContext",
    ()=>PopoverRootContext,
    "usePopoverRootContext",
    ()=>usePopoverRootContext
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
'use client';
;
;
const PopoverRootContext = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"](undefined);
if ("TURBOPACK compile-time truthy", 1) PopoverRootContext.displayName = "PopoverRootContext";
function usePopoverRootContext(optional) {
    const context = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"](PopoverRootContext);
    if (context === undefined && !optional) {
        throw new Error(("TURBOPACK compile-time truthy", 1) ? 'Base UI: PopoverRootContext is missing. Popover parts must be placed within <Popover.Root>.' : "TURBOPACK unreachable");
    }
    return context;
}
}),
"[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/react/esm/popover/store/PopoverStore.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PopoverStore",
    ()=>PopoverStore
]);
/* eslint-disable react-hooks/rules-of-hooks */ var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/next/dist/compiled/react-dom/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$store$2f$ReactStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/utils/esm/store/ReactStore.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$store$2f$createSelector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/utils/esm/store/createSelector.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useTimeout$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/utils/esm/useTimeout.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useRefWithInit$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/utils/esm/useRefWithInit.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useOnMount$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/utils/esm/useOnMount.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$reason$2d$parts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__REASONS$3e$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/react/esm/utils/reason-parts.js [app-client] (ecmascript) <export * as REASONS>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$popups$2f$store$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/react/esm/utils/popups/store.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$popups$2f$popupTriggerMap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/react/esm/utils/popups/popupTriggerMap.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/react/esm/utils/constants.js [app-client] (ecmascript) <locals>");
;
;
;
;
;
;
;
;
;
function createInitialState() {
    return {
        ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$popups$2f$store$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createInitialPopupStoreState"])(),
        disabled: false,
        modal: false,
        instantType: undefined,
        openMethod: null,
        openChangeReason: null,
        titleElementId: undefined,
        descriptionElementId: undefined,
        stickIfOpen: true,
        nested: false,
        openOnHover: false,
        closeDelay: 0,
        hasViewport: false
    };
}
const selectors = {
    ...__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$popups$2f$store$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["popupStoreSelectors"],
    disabled: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$store$2f$createSelector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createSelector"])((state)=>state.disabled),
    instantType: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$store$2f$createSelector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createSelector"])((state)=>state.instantType),
    openMethod: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$store$2f$createSelector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createSelector"])((state)=>state.openMethod),
    openChangeReason: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$store$2f$createSelector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createSelector"])((state)=>state.openChangeReason),
    modal: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$store$2f$createSelector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createSelector"])((state)=>state.modal),
    stickIfOpen: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$store$2f$createSelector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createSelector"])((state)=>state.stickIfOpen),
    titleElementId: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$store$2f$createSelector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createSelector"])((state)=>state.titleElementId),
    descriptionElementId: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$store$2f$createSelector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createSelector"])((state)=>state.descriptionElementId),
    openOnHover: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$store$2f$createSelector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createSelector"])((state)=>state.openOnHover),
    closeDelay: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$store$2f$createSelector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createSelector"])((state)=>state.closeDelay),
    hasViewport: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$store$2f$createSelector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createSelector"])((state)=>state.hasViewport)
};
class PopoverStore extends __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$store$2f$ReactStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ReactStore"] {
    constructor(initialState){
        const initial = {
            ...createInitialState(),
            ...initialState
        };
        if (initial.open && initialState?.mounted === undefined) {
            initial.mounted = true;
        }
        super(initial, {
            popupRef: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createRef"](),
            backdropRef: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createRef"](),
            internalBackdropRef: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createRef"](),
            onOpenChange: undefined,
            onOpenChangeComplete: undefined,
            triggerFocusTargetRef: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createRef"](),
            beforeContentFocusGuardRef: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createRef"](),
            stickIfOpenTimeout: new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useTimeout$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Timeout"](),
            triggerElements: new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$popups$2f$popupTriggerMap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PopupTriggerMap"]()
        }, selectors);
    }
    setOpen = (nextOpen, eventDetails)=>{
        const isHover = eventDetails.reason === __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$reason$2d$parts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__REASONS$3e$__["REASONS"].triggerHover;
        const isKeyboardClick = eventDetails.reason === __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$reason$2d$parts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__REASONS$3e$__["REASONS"].triggerPress && eventDetails.event.detail === 0;
        const isDismissClose = !nextOpen && (eventDetails.reason === __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$reason$2d$parts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__REASONS$3e$__["REASONS"].escapeKey || eventDetails.reason == null);
        eventDetails.preventUnmountOnClose = ()=>{
            this.set('preventUnmountingOnClose', true);
        };
        this.context.onOpenChange?.(nextOpen, eventDetails);
        if (eventDetails.isCanceled) {
            return;
        }
        const details = {
            open: nextOpen,
            nativeEvent: eventDetails.event,
            reason: eventDetails.reason,
            nested: this.state.nested,
            triggerElement: eventDetails.trigger
        };
        const floatingEvents = this.state.floatingRootContext.context.events;
        floatingEvents?.emit('openchange', details);
        const changeState = ()=>{
            const updatedState = {
                open: nextOpen,
                openChangeReason: eventDetails.reason
            };
            // If a popup is closing, the `trigger` may be null.
            // We want to keep the previous value so that exit animations are played and focus is returned correctly.
            const newTriggerId = eventDetails.trigger?.id ?? null;
            if (newTriggerId || nextOpen) {
                updatedState.activeTriggerId = newTriggerId;
                updatedState.activeTriggerElement = eventDetails.trigger ?? null;
            }
            this.update(updatedState);
        };
        if (isHover) {
            // Only allow "patient" clicks to close the popover if it's open.
            // If they clicked within 500ms of the popover opening, keep it open.
            this.set('stickIfOpen', true);
            this.context.stickIfOpenTimeout.start(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["PATIENT_CLICK_THRESHOLD"], ()=>{
                this.set('stickIfOpen', false);
            });
            __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["flushSync"](changeState);
        } else {
            changeState();
        }
        if (isKeyboardClick || isDismissClose) {
            this.set('instantType', isKeyboardClick ? 'click' : 'dismiss');
        } else if (eventDetails.reason === __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$reason$2d$parts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__REASONS$3e$__["REASONS"].focusOut) {
            this.set('instantType', 'focus');
        } else {
            this.set('instantType', undefined);
        }
    };
    static useStore(externalStore, initialState) {
        const internalStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useRefWithInit$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRefWithInit"])(()=>{
            return new PopoverStore(initialState);
        }).current;
        const store = externalStore ?? internalStore;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useOnMount$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useOnMount"])(internalStore.disposeEffect);
        return store;
    }
    disposeEffect = ()=>{
        return this.context.stickIfOpenTimeout.disposeEffect();
    };
}
}),
"[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/react/esm/popover/root/PopoverRoot.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PopoverRoot",
    ()=>PopoverRoot
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useScrollLock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/utils/esm/useScrollLock.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useOnFirstRender$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/utils/esm/useOnFirstRender.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$floating$2d$ui$2d$react$2f$hooks$2f$useDismiss$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/react/esm/floating-ui-react/hooks/useDismiss.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$floating$2d$ui$2d$react$2f$hooks$2f$useInteractions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/react/esm/floating-ui-react/hooks/useInteractions.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$floating$2d$ui$2d$react$2f$hooks$2f$useRole$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/react/esm/floating-ui-react/hooks/useRole.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$floating$2d$ui$2d$react$2f$components$2f$FloatingTree$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/react/esm/floating-ui-react/components/FloatingTree.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$floating$2d$ui$2d$react$2f$hooks$2f$useSyncedFloatingRootContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/react/esm/floating-ui-react/hooks/useSyncedFloatingRootContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$popover$2f$root$2f$PopoverRootContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/react/esm/popover/root/PopoverRootContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$popover$2f$store$2f$PopoverStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/react/esm/popover/store/PopoverStore.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$createBaseUIEventDetails$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/react/esm/utils/createBaseUIEventDetails.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$reason$2d$parts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__REASONS$3e$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/react/esm/utils/reason-parts.js [app-client] (ecmascript) <export * as REASONS>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$popups$2f$popupStoreUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/react/esm/utils/popups/popupStoreUtils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$useOpenInteractionType$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/react/esm/utils/useOpenInteractionType.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
'use client';
;
;
;
;
;
;
;
;
;
;
;
function PopoverRootComponent({ props }) {
    const { children, open: openProp, defaultOpen = false, onOpenChange, onOpenChangeComplete, modal = false, handle, triggerId: triggerIdProp, defaultTriggerId: defaultTriggerIdProp = null } = props;
    const store = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$popover$2f$store$2f$PopoverStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PopoverStore"].useStore(handle?.store, {
        modal,
        open: defaultOpen,
        openProp,
        activeTriggerId: defaultTriggerIdProp,
        triggerIdProp
    });
    // Support initially open state when uncontrolled
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useOnFirstRender$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useOnFirstRender"])({
        "PopoverRootComponent.useOnFirstRender": ()=>{
            if (openProp === undefined && store.state.open === false && defaultOpen === true) {
                store.update({
                    open: true,
                    activeTriggerId: defaultTriggerIdProp
                });
            }
        }
    }["PopoverRootComponent.useOnFirstRender"]);
    store.useControlledProp('openProp', openProp);
    store.useControlledProp('triggerIdProp', triggerIdProp);
    const open = store.useState('open');
    const positionerElement = store.useState('positionerElement');
    const payload = store.useState('payload');
    const openReason = store.useState('openChangeReason');
    store.useContextCallback('onOpenChange', onOpenChange);
    store.useContextCallback('onOpenChangeComplete', onOpenChangeComplete);
    const { openMethod, triggerProps: interactionTypeTriggerProps } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$useOpenInteractionType$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useOpenInteractionType"])(open);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$popups$2f$popupStoreUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useImplicitActiveTrigger"])(store);
    const { forceUnmount } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$popups$2f$popupStoreUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useOpenStateTransitions"])(open, store, {
        "PopoverRootComponent.useOpenStateTransitions": ()=>{
            store.update({
                stickIfOpen: true,
                openChangeReason: null
            });
        }
    }["PopoverRootComponent.useOpenStateTransitions"]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useScrollLock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScrollLock"])(open && modal === true && openReason !== __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$reason$2d$parts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__REASONS$3e$__["REASONS"].triggerHover && openMethod !== 'touch', positionerElement);
    __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "PopoverRootComponent.useEffect": ()=>{
            if (!open) {
                store.context.stickIfOpenTimeout.clear();
            }
        }
    }["PopoverRootComponent.useEffect"], [
        store,
        open
    ]);
    const createPopoverEventDetails = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"]({
        "PopoverRootComponent.useCallback[createPopoverEventDetails]": (reason)=>{
            const details = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$createBaseUIEventDetails$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createChangeEventDetails"])(reason);
            details.preventUnmountOnClose = ({
                "PopoverRootComponent.useCallback[createPopoverEventDetails]": ()=>{
                    store.set('preventUnmountingOnClose', true);
                }
            })["PopoverRootComponent.useCallback[createPopoverEventDetails]"];
            return details;
        }
    }["PopoverRootComponent.useCallback[createPopoverEventDetails]"], [
        store
    ]);
    const handleImperativeClose = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"]({
        "PopoverRootComponent.useCallback[handleImperativeClose]": ()=>{
            store.setOpen(false, createPopoverEventDetails(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$reason$2d$parts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__REASONS$3e$__["REASONS"].imperativeAction));
        }
    }["PopoverRootComponent.useCallback[handleImperativeClose]"], [
        store,
        createPopoverEventDetails
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useImperativeHandle"](props.actionsRef, {
        "PopoverRootComponent.useImperativeHandle": ()=>({
                unmount: forceUnmount,
                close: handleImperativeClose
            })
    }["PopoverRootComponent.useImperativeHandle"], [
        forceUnmount,
        handleImperativeClose
    ]);
    const floatingRootContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$floating$2d$ui$2d$react$2f$hooks$2f$useSyncedFloatingRootContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSyncedFloatingRootContext"])({
        popupStore: store,
        onOpenChange: store.setOpen
    });
    const dismiss = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$floating$2d$ui$2d$react$2f$hooks$2f$useDismiss$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDismiss"])(floatingRootContext, {
        outsidePressEvent: {
            // Ensure `aria-hidden` on outside elements is removed immediately
            // on outside press when trapping focus.
            mouse: modal === 'trap-focus' ? 'sloppy' : 'intentional',
            touch: 'sloppy'
        }
    });
    const role = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$floating$2d$ui$2d$react$2f$hooks$2f$useRole$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRole"])(floatingRootContext);
    const { getReferenceProps, getFloatingProps, getTriggerProps } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$floating$2d$ui$2d$react$2f$hooks$2f$useInteractions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInteractions"])([
        dismiss,
        role
    ]);
    const activeTriggerProps = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "PopoverRootComponent.useMemo[activeTriggerProps]": ()=>{
            return getReferenceProps(interactionTypeTriggerProps);
        }
    }["PopoverRootComponent.useMemo[activeTriggerProps]"], [
        getReferenceProps,
        interactionTypeTriggerProps
    ]);
    const inactiveTriggerProps = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "PopoverRootComponent.useMemo[inactiveTriggerProps]": ()=>{
            return getTriggerProps(interactionTypeTriggerProps);
        }
    }["PopoverRootComponent.useMemo[inactiveTriggerProps]"], [
        getTriggerProps,
        interactionTypeTriggerProps
    ]);
    const popupProps = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "PopoverRootComponent.useMemo[popupProps]": ()=>{
            return getFloatingProps();
        }
    }["PopoverRootComponent.useMemo[popupProps]"], [
        getFloatingProps
    ]);
    store.useSyncedValues({
        modal,
        openMethod,
        activeTriggerProps,
        inactiveTriggerProps,
        popupProps,
        floatingRootContext,
        nested: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$floating$2d$ui$2d$react$2f$components$2f$FloatingTree$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFloatingParentNodeId"])() != null
    });
    const popoverContext = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "PopoverRootComponent.useMemo[popoverContext]": ()=>({
                store
            })
    }["PopoverRootComponent.useMemo[popoverContext]"], [
        store
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$popover$2f$root$2f$PopoverRootContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PopoverRootContext"].Provider, {
        value: popoverContext,
        children: typeof children === 'function' ? children({
            payload
        }) : children
    });
}
function PopoverRoot(props) {
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$popover$2f$root$2f$PopoverRootContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePopoverRootContext"])(true)) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(PopoverRootComponent, {
            props: props
        });
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$floating$2d$ui$2d$react$2f$components$2f$FloatingTree$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FloatingTree"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(PopoverRootComponent, {
            props: props
        })
    });
}
}),
"[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/react/esm/popover/utils/constants.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "OPEN_DELAY",
    ()=>OPEN_DELAY
]);
const OPEN_DELAY = 300;
}),
"[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/react/esm/popover/trigger/PopoverTrigger.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PopoverTrigger",
    ()=>PopoverTrigger
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/next/dist/compiled/react-dom/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useStableCallback$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/utils/esm/useStableCallback.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$popover$2f$root$2f$PopoverRootContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/react/esm/popover/root/PopoverRootContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$use$2d$button$2f$useButton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/react/esm/use-button/useButton.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$popupStateMapping$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/react/esm/utils/popupStateMapping.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$useRenderElement$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/react/esm/utils/useRenderElement.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/react/esm/utils/constants.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$floating$2d$ui$2d$react$2f$safePolygon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/react/esm/floating-ui-react/safePolygon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$floating$2d$ui$2d$react$2f$hooks$2f$useClick$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/react/esm/floating-ui-react/hooks/useClick.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$floating$2d$ui$2d$react$2f$hooks$2f$useHoverReferenceInteraction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/react/esm/floating-ui-react/hooks/useHoverReferenceInteraction.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$floating$2d$ui$2d$react$2f$hooks$2f$useInteractions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/react/esm/floating-ui-react/hooks/useInteractions.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$popover$2f$utils$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/react/esm/popover/utils/constants.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$useBaseUiId$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/react/esm/utils/useBaseUiId.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$FocusGuard$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/react/esm/utils/FocusGuard.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$floating$2d$ui$2d$react$2f$utils$2f$element$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/react/esm/floating-ui-react/utils/element.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$floating$2d$ui$2d$react$2f$utils$2f$tabbable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/react/esm/floating-ui-react/utils/tabbable.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$createBaseUIEventDetails$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/react/esm/utils/createBaseUIEventDetails.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$reason$2d$parts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__REASONS$3e$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/react/esm/utils/reason-parts.js [app-client] (ecmascript) <export * as REASONS>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$popups$2f$popupStoreUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/react/esm/utils/popups/popupStoreUtils.js [app-client] (ecmascript)");
/**
 * A button that opens the popover.
 * Renders a `<button>` element.
 *
 * Documentation: [Base UI Popover](https://base-ui.com/react/components/popover)
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
'use client';
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
const PopoverTrigger = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](function PopoverTrigger(componentProps, forwardedRef) {
    const { render, className, disabled = false, nativeButton = true, handle, payload, openOnHover = false, delay = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$popover$2f$utils$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OPEN_DELAY"], closeDelay = 0, id: idProp, ...elementProps } = componentProps;
    const rootContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$popover$2f$root$2f$PopoverRootContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePopoverRootContext"])(true);
    const store = handle?.store ?? rootContext?.store;
    if (!store) {
        throw new Error(("TURBOPACK compile-time truthy", 1) ? 'Base UI: <Popover.Trigger> must be either used within a <Popover.Root> component or provided with a handle.' : "TURBOPACK unreachable");
    }
    const thisTriggerId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$useBaseUiId$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBaseUiId"])(idProp);
    const isTriggerActive = store.useState('isTriggerActive', thisTriggerId);
    const floatingContext = store.useState('floatingRootContext');
    const isOpenedByThisTrigger = store.useState('isOpenedByTrigger', thisTriggerId);
    const triggerElementRef = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](null);
    const { registerTrigger, isMountedByThisTrigger } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$popups$2f$popupStoreUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTriggerDataForwarding"])(thisTriggerId, triggerElementRef, store, {
        payload,
        disabled,
        openOnHover,
        closeDelay
    });
    const openReason = store.useState('openChangeReason');
    const stickIfOpen = store.useState('stickIfOpen');
    const openMethod = store.useState('openMethod');
    const hoverProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$floating$2d$ui$2d$react$2f$hooks$2f$useHoverReferenceInteraction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useHoverReferenceInteraction"])(floatingContext, {
        enabled: floatingContext != null && openOnHover && (openMethod !== 'touch' || openReason !== __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$reason$2d$parts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__REASONS$3e$__["REASONS"].triggerPress),
        mouseOnly: true,
        move: false,
        handleClose: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$floating$2d$ui$2d$react$2f$safePolygon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["safePolygon"])(),
        restMs: delay,
        delay: {
            close: closeDelay
        },
        triggerElementRef,
        isActiveTrigger: isTriggerActive
    });
    const click = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$floating$2d$ui$2d$react$2f$hooks$2f$useClick$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useClick"])(floatingContext, {
        enabled: floatingContext != null,
        stickIfOpen
    });
    const localProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$floating$2d$ui$2d$react$2f$hooks$2f$useInteractions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInteractions"])([
        click
    ]);
    const rootTriggerProps = store.useState('triggerProps', isMountedByThisTrigger);
    const state = {
        disabled,
        open: isOpenedByThisTrigger
    };
    const { getButtonProps, buttonRef } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$use$2d$button$2f$useButton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useButton"])({
        disabled,
        native: nativeButton
    });
    const stateAttributesMapping = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "PopoverTrigger.PopoverTrigger.useMemo[stateAttributesMapping]": ()=>({
                open (value) {
                    if (value && openReason === __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$reason$2d$parts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__REASONS$3e$__["REASONS"].triggerPress) {
                        return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$popupStateMapping$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pressableTriggerOpenStateMapping"].open(value);
                    }
                    return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$popupStateMapping$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["triggerOpenStateMapping"].open(value);
                }
            })
    }["PopoverTrigger.PopoverTrigger.useMemo[stateAttributesMapping]"], [
        openReason
    ]);
    const element = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$useRenderElement$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRenderElement"])('button', componentProps, {
        state,
        ref: [
            buttonRef,
            forwardedRef,
            registerTrigger,
            triggerElementRef
        ],
        props: [
            localProps.getReferenceProps(),
            hoverProps,
            rootTriggerProps,
            {
                [__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["CLICK_TRIGGER_IDENTIFIER"]]: '',
                id: thisTriggerId
            },
            elementProps,
            getButtonProps
        ],
        stateAttributesMapping
    });
    const preFocusGuardRef = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](null);
    const handlePreFocusGuardFocus = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useStableCallback$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStableCallback"])({
        "PopoverTrigger.PopoverTrigger.useStableCallback[handlePreFocusGuardFocus]": (event)=>{
            __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["flushSync"]({
                "PopoverTrigger.PopoverTrigger.useStableCallback[handlePreFocusGuardFocus]": ()=>{
                    store.setOpen(false, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$createBaseUIEventDetails$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createChangeEventDetails"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$reason$2d$parts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__REASONS$3e$__["REASONS"].focusOut, event.nativeEvent, event.currentTarget));
                }
            }["PopoverTrigger.PopoverTrigger.useStableCallback[handlePreFocusGuardFocus]"]);
            const previousTabbable = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$floating$2d$ui$2d$react$2f$utils$2f$tabbable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getTabbableBeforeElement"])(preFocusGuardRef.current);
            previousTabbable?.focus();
        }
    }["PopoverTrigger.PopoverTrigger.useStableCallback[handlePreFocusGuardFocus]"]);
    const handleFocusTargetFocus = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useStableCallback$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStableCallback"])({
        "PopoverTrigger.PopoverTrigger.useStableCallback[handleFocusTargetFocus]": (event)=>{
            const positionerElement = store.select('positionerElement');
            if (positionerElement && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$floating$2d$ui$2d$react$2f$utils$2f$tabbable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isOutsideEvent"])(event, positionerElement)) {
                store.context.beforeContentFocusGuardRef.current?.focus();
            } else {
                __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["flushSync"]({
                    "PopoverTrigger.PopoverTrigger.useStableCallback[handleFocusTargetFocus]": ()=>{
                        store.setOpen(false, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$createBaseUIEventDetails$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createChangeEventDetails"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$reason$2d$parts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__REASONS$3e$__["REASONS"].focusOut, event.nativeEvent, event.currentTarget));
                    }
                }["PopoverTrigger.PopoverTrigger.useStableCallback[handleFocusTargetFocus]"]);
                let nextTabbable = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$floating$2d$ui$2d$react$2f$utils$2f$tabbable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getTabbableAfterElement"])(store.context.triggerFocusTargetRef.current || triggerElementRef.current);
                while(nextTabbable !== null && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$floating$2d$ui$2d$react$2f$utils$2f$element$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["contains"])(positionerElement, nextTabbable)){
                    const prevTabbable = nextTabbable;
                    nextTabbable = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$floating$2d$ui$2d$react$2f$utils$2f$tabbable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getNextTabbable"])(nextTabbable);
                    if (nextTabbable === prevTabbable) {
                        break;
                    }
                }
                nextTabbable?.focus();
            }
        }
    }["PopoverTrigger.PopoverTrigger.useStableCallback[handleFocusTargetFocus]"]);
    // A fragment with key is required to ensure that the `element` is mounted to the same DOM node
    // regardless of whether the focus guards are rendered or not.
    if (isTriggerActive) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$FocusGuard$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FocusGuard"], {
                    ref: preFocusGuardRef,
                    onFocus: handlePreFocusGuardFocus
                }),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: element
                }, thisTriggerId),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$FocusGuard$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FocusGuard"], {
                    ref: store.context.triggerFocusTargetRef,
                    onFocus: handleFocusTargetFocus
                })
            ]
        });
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: element
    }, thisTriggerId);
});
if ("TURBOPACK compile-time truthy", 1) PopoverTrigger.displayName = "PopoverTrigger";
}),
"[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/react/esm/popover/portal/PopoverPortalContext.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PopoverPortalContext",
    ()=>PopoverPortalContext,
    "usePopoverPortalContext",
    ()=>usePopoverPortalContext
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
'use client';
;
;
const PopoverPortalContext = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"](undefined);
if ("TURBOPACK compile-time truthy", 1) PopoverPortalContext.displayName = "PopoverPortalContext";
function usePopoverPortalContext() {
    const value = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"](PopoverPortalContext);
    if (value === undefined) {
        throw new Error(("TURBOPACK compile-time truthy", 1) ? 'Base UI: <Popover.Portal> is missing.' : "TURBOPACK unreachable");
    }
    return value;
}
}),
"[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/react/esm/popover/portal/PopoverPortal.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PopoverPortal",
    ()=>PopoverPortal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$floating$2d$ui$2d$react$2f$components$2f$FloatingPortal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/react/esm/floating-ui-react/components/FloatingPortal.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$popover$2f$root$2f$PopoverRootContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/react/esm/popover/root/PopoverRootContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$popover$2f$portal$2f$PopoverPortalContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/react/esm/popover/portal/PopoverPortalContext.js [app-client] (ecmascript)");
/**
 * A portal element that moves the popup to a different part of the DOM.
 * By default, the portal element is appended to `<body>`.
 * Renders a `<div>` element.
 *
 * Documentation: [Base UI Popover](https://base-ui.com/react/components/popover)
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
'use client';
;
;
;
;
;
const PopoverPortal = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](function PopoverPortal(props, forwardedRef) {
    const { keepMounted = false, ...portalProps } = props;
    const { store } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$popover$2f$root$2f$PopoverRootContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePopoverRootContext"])();
    const mounted = store.useState('mounted');
    const shouldRender = mounted || keepMounted;
    if (!shouldRender) {
        return null;
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$popover$2f$portal$2f$PopoverPortalContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PopoverPortalContext"].Provider, {
        value: keepMounted,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$floating$2d$ui$2d$react$2f$components$2f$FloatingPortal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FloatingPortal"], {
            ref: forwardedRef,
            ...portalProps
        })
    });
});
if ("TURBOPACK compile-time truthy", 1) PopoverPortal.displayName = "PopoverPortal";
}),
"[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/react/esm/popover/positioner/PopoverPositionerContext.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PopoverPositionerContext",
    ()=>PopoverPositionerContext,
    "usePopoverPositionerContext",
    ()=>usePopoverPositionerContext
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
'use client';
;
;
const PopoverPositionerContext = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"](undefined);
if ("TURBOPACK compile-time truthy", 1) PopoverPositionerContext.displayName = "PopoverPositionerContext";
function usePopoverPositionerContext() {
    const context = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"](PopoverPositionerContext);
    if (!context) {
        throw new Error(("TURBOPACK compile-time truthy", 1) ? 'Base UI: PopoverPositionerContext is missing. PopoverPositioner parts must be placed within <Popover.Positioner>.' : "TURBOPACK unreachable");
    }
    return context;
}
}),
"[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/react/esm/popover/positioner/PopoverPositioner.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PopoverPositioner",
    ()=>PopoverPositioner
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$inertValue$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/utils/esm/inertValue.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useIsoLayoutEffect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/utils/esm/useIsoLayoutEffect.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$floating$2d$ui$2d$react$2f$components$2f$FloatingTree$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/react/esm/floating-ui-react/components/FloatingTree.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$popover$2f$root$2f$PopoverRootContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/react/esm/popover/root/PopoverRootContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$popover$2f$positioner$2f$PopoverPositionerContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/react/esm/popover/positioner/PopoverPositionerContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$useAnchorPositioning$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/react/esm/utils/useAnchorPositioning.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$popupStateMapping$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/react/esm/utils/popupStateMapping.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$popover$2f$portal$2f$PopoverPortalContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/react/esm/popover/portal/PopoverPortalContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$InternalBackdrop$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/react/esm/utils/InternalBackdrop.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$reason$2d$parts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__REASONS$3e$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/react/esm/utils/reason-parts.js [app-client] (ecmascript) <export * as REASONS>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$useRenderElement$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/react/esm/utils/useRenderElement.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/react/esm/utils/constants.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$useAnimationsFinished$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/react/esm/utils/useAnimationsFinished.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$adaptiveOriginMiddleware$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/react/esm/utils/adaptiveOriginMiddleware.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$getDisabledMountTransitionStyles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/react/esm/utils/getDisabledMountTransitionStyles.js [app-client] (ecmascript)");
/**
 * Positions the popover against the trigger.
 * Renders a `<div>` element.
 *
 * Documentation: [Base UI Popover](https://base-ui.com/react/components/popover)
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
'use client';
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
const PopoverPositioner = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](function PopoverPositioner(componentProps, forwardedRef) {
    const { render, className, anchor, positionMethod = 'absolute', side = 'bottom', align = 'center', sideOffset = 0, alignOffset = 0, collisionBoundary = 'clipping-ancestors', collisionPadding = 5, arrowPadding = 5, sticky = false, disableAnchorTracking = false, collisionAvoidance = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["POPUP_COLLISION_AVOIDANCE"], ...elementProps } = componentProps;
    const { store } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$popover$2f$root$2f$PopoverRootContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePopoverRootContext"])();
    const keepMounted = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$popover$2f$portal$2f$PopoverPortalContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePopoverPortalContext"])();
    const nodeId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$floating$2d$ui$2d$react$2f$components$2f$FloatingTree$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFloatingNodeId"])();
    const floatingRootContext = store.useState('floatingRootContext');
    const mounted = store.useState('mounted');
    const open = store.useState('open');
    const openReason = store.useState('openChangeReason');
    const triggerElement = store.useState('activeTriggerElement');
    const modal = store.useState('modal');
    const positionerElement = store.useState('positionerElement');
    const instantType = store.useState('instantType');
    const transitionStatus = store.useState('transitionStatus');
    const hasViewport = store.useState('hasViewport');
    const prevTriggerElementRef = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](null);
    const runOnceAnimationsFinish = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$useAnimationsFinished$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAnimationsFinished"])(positionerElement, false, false);
    const positioning = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$useAnchorPositioning$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAnchorPositioning"])({
        anchor,
        floatingRootContext,
        positionMethod,
        mounted,
        side,
        sideOffset,
        align,
        alignOffset,
        arrowPadding,
        collisionBoundary,
        collisionPadding,
        sticky,
        disableAnchorTracking,
        keepMounted,
        nodeId,
        collisionAvoidance,
        adaptiveOrigin: hasViewport ? __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$adaptiveOriginMiddleware$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["adaptiveOrigin"] : undefined
    });
    const defaultProps = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "PopoverPositioner.PopoverPositioner.useMemo[defaultProps]": ()=>{
            const hiddenStyles = {};
            if (!open) {
                hiddenStyles.pointerEvents = 'none';
            }
            return {
                role: 'presentation',
                hidden: !mounted,
                style: {
                    ...positioning.positionerStyles,
                    ...hiddenStyles
                }
            };
        }
    }["PopoverPositioner.PopoverPositioner.useMemo[defaultProps]"], [
        open,
        mounted,
        positioning.positionerStyles
    ]);
    const positioner = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "PopoverPositioner.PopoverPositioner.useMemo[positioner]": ()=>({
                props: defaultProps,
                ...positioning
            })
    }["PopoverPositioner.PopoverPositioner.useMemo[positioner]"], [
        defaultProps,
        positioning
    ]);
    const domReference = floatingRootContext.useState('domReferenceElement');
    // When the current trigger element changes, enable transitions on the
    // positioner temporarily
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useIsoLayoutEffect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useIsoLayoutEffect"])({
        "PopoverPositioner.PopoverPositioner.useIsoLayoutEffect": ()=>{
            const currentTriggerElement = domReference;
            const prevTriggerElement = prevTriggerElementRef.current;
            if (currentTriggerElement) {
                prevTriggerElementRef.current = currentTriggerElement;
            }
            if (prevTriggerElement && currentTriggerElement && currentTriggerElement !== prevTriggerElement) {
                store.set('instantType', undefined);
                const ac = new AbortController();
                runOnceAnimationsFinish({
                    "PopoverPositioner.PopoverPositioner.useIsoLayoutEffect": ()=>{
                        store.set('instantType', 'trigger-change');
                    }
                }["PopoverPositioner.PopoverPositioner.useIsoLayoutEffect"], ac.signal);
                return ({
                    "PopoverPositioner.PopoverPositioner.useIsoLayoutEffect": ()=>{
                        ac.abort();
                    }
                })["PopoverPositioner.PopoverPositioner.useIsoLayoutEffect"];
            }
            return undefined;
        }
    }["PopoverPositioner.PopoverPositioner.useIsoLayoutEffect"], [
        domReference,
        runOnceAnimationsFinish,
        store
    ]);
    const state = {
        open,
        side: positioner.side,
        align: positioner.align,
        anchorHidden: positioner.anchorHidden,
        instant: instantType
    };
    const setPositionerElement = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"]({
        "PopoverPositioner.PopoverPositioner.useCallback[setPositionerElement]": (element)=>{
            store.set('positionerElement', element);
        }
    }["PopoverPositioner.PopoverPositioner.useCallback[setPositionerElement]"], [
        store
    ]);
    const element = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$useRenderElement$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRenderElement"])('div', componentProps, {
        state,
        props: [
            positioner.props,
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$getDisabledMountTransitionStyles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDisabledMountTransitionStyles"])(transitionStatus),
            elementProps
        ],
        ref: [
            forwardedRef,
            setPositionerElement
        ],
        stateAttributesMapping: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$popupStateMapping$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["popupStateMapping"]
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$popover$2f$positioner$2f$PopoverPositionerContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PopoverPositionerContext"].Provider, {
        value: positioner,
        children: [
            mounted && modal === true && openReason !== __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$reason$2d$parts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__REASONS$3e$__["REASONS"].triggerHover && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$InternalBackdrop$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InternalBackdrop"], {
                ref: store.context.internalBackdropRef,
                inert: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$inertValue$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["inertValue"])(!open),
                cutout: triggerElement
            }),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$floating$2d$ui$2d$react$2f$components$2f$FloatingTree$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FloatingNode"], {
                id: nodeId,
                children: element
            })
        ]
    });
});
if ("TURBOPACK compile-time truthy", 1) PopoverPositioner.displayName = "PopoverPositioner";
}),
"[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/react/esm/toolbar/root/ToolbarRootContext.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ToolbarRootContext",
    ()=>ToolbarRootContext,
    "useToolbarRootContext",
    ()=>useToolbarRootContext
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
'use client';
;
;
const ToolbarRootContext = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"](undefined);
if ("TURBOPACK compile-time truthy", 1) ToolbarRootContext.displayName = "ToolbarRootContext";
function useToolbarRootContext(optional) {
    const context = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"](ToolbarRootContext);
    if (context === undefined && !optional) {
        throw new Error(("TURBOPACK compile-time truthy", 1) ? 'Base UI: ToolbarRootContext is missing. Toolbar parts must be placed within <Toolbar.Root>.' : "TURBOPACK unreachable");
    }
    return context;
}
}),
"[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/react/esm/utils/closePart.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ClosePartProvider",
    ()=>ClosePartProvider,
    "useClosePartCount",
    ()=>useClosePartCount,
    "useClosePartRegistration",
    ()=>useClosePartRegistration
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useIsoLayoutEffect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/utils/esm/useIsoLayoutEffect.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useStableCallback$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/utils/esm/useStableCallback.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
'use client';
;
;
;
;
const ClosePartContext = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"](undefined);
if ("TURBOPACK compile-time truthy", 1) ClosePartContext.displayName = "ClosePartContext";
function useClosePartCount() {
    const [closePartCount, setClosePartCount] = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](0);
    const register = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useStableCallback$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStableCallback"])({
        "useClosePartCount.useStableCallback[register]": ()=>{
            setClosePartCount({
                "useClosePartCount.useStableCallback[register]": (count)=>count + 1
            }["useClosePartCount.useStableCallback[register]"]);
            return ({
                "useClosePartCount.useStableCallback[register]": ()=>{
                    setClosePartCount({
                        "useClosePartCount.useStableCallback[register]": (count)=>Math.max(0, count - 1)
                    }["useClosePartCount.useStableCallback[register]"]);
                }
            })["useClosePartCount.useStableCallback[register]"];
        }
    }["useClosePartCount.useStableCallback[register]"]);
    const context = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "useClosePartCount.useMemo[context]": ()=>({
                register
            })
    }["useClosePartCount.useMemo[context]"], [
        register
    ]);
    return {
        context,
        hasClosePart: closePartCount > 0
    };
}
function ClosePartProvider(props) {
    const { value, children } = props;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(ClosePartContext.Provider, {
        value: value,
        children: children
    });
}
function useClosePartRegistration() {
    const context = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"](ClosePartContext);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useIsoLayoutEffect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useIsoLayoutEffect"])({
        "useClosePartRegistration.useIsoLayoutEffect": ()=>{
            return context?.register();
        }
    }["useClosePartRegistration.useIsoLayoutEffect"], [
        context
    ]);
}
}),
"[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/react/esm/popover/popup/PopoverPopup.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PopoverPopup",
    ()=>PopoverPopup
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/@floating-ui/utils/dist/floating-ui.utils.dom.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$floating$2d$ui$2d$react$2f$components$2f$FloatingFocusManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/react/esm/floating-ui-react/components/FloatingFocusManager.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$floating$2d$ui$2d$react$2f$hooks$2f$useHoverFloatingInteraction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/react/esm/floating-ui-react/hooks/useHoverFloatingInteraction.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$popover$2f$root$2f$PopoverRootContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/react/esm/popover/root/PopoverRootContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$popover$2f$positioner$2f$PopoverPositionerContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/react/esm/popover/positioner/PopoverPositionerContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$popupStateMapping$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/react/esm/utils/popupStateMapping.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$stateAttributesMapping$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/react/esm/utils/stateAttributesMapping.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$useOpenChangeComplete$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/react/esm/utils/useOpenChangeComplete.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$useRenderElement$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/react/esm/utils/useRenderElement.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$reason$2d$parts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__REASONS$3e$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/react/esm/utils/reason-parts.js [app-client] (ecmascript) <export * as REASONS>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$composite$2f$composite$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/react/esm/composite/composite.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$toolbar$2f$root$2f$ToolbarRootContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/react/esm/toolbar/root/ToolbarRootContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$getDisabledMountTransitionStyles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/react/esm/utils/getDisabledMountTransitionStyles.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$closePart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/react/esm/utils/closePart.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
'use client';
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
const stateAttributesMapping = {
    ...__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$popupStateMapping$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["popupStateMapping"],
    ...__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$stateAttributesMapping$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transitionStatusMapping"]
};
const PopoverPopup = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](function PopoverPopup(componentProps, forwardedRef) {
    const { className, render, initialFocus, finalFocus, ...elementProps } = componentProps;
    const { store } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$popover$2f$root$2f$PopoverRootContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePopoverRootContext"])();
    const positioner = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$popover$2f$positioner$2f$PopoverPositionerContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePopoverPositionerContext"])();
    const insideToolbar = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$toolbar$2f$root$2f$ToolbarRootContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useToolbarRootContext"])(true) != null;
    const { context: closePartContext, hasClosePart } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$closePart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useClosePartCount"])();
    const open = store.useState('open');
    const openMethod = store.useState('openMethod');
    const instantType = store.useState('instantType');
    const transitionStatus = store.useState('transitionStatus');
    const popupProps = store.useState('popupProps');
    const titleId = store.useState('titleElementId');
    const descriptionId = store.useState('descriptionElementId');
    const modal = store.useState('modal');
    const mounted = store.useState('mounted');
    const openReason = store.useState('openChangeReason');
    const activeTriggerElement = store.useState('activeTriggerElement');
    const floatingContext = store.useState('floatingRootContext');
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$useOpenChangeComplete$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useOpenChangeComplete"])({
        open,
        ref: store.context.popupRef,
        onComplete () {
            if (open) {
                store.context.onOpenChangeComplete?.(true);
            }
        }
    });
    const disabled = store.useState('disabled');
    const openOnHover = store.useState('openOnHover');
    const closeDelay = store.useState('closeDelay');
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$floating$2d$ui$2d$react$2f$hooks$2f$useHoverFloatingInteraction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useHoverFloatingInteraction"])(floatingContext, {
        enabled: openOnHover && !disabled,
        closeDelay
    });
    // Default initial focus logic:
    // If opened by touch, focus the popup element to prevent the virtual keyboard from opening
    // (this is required for Android specifically as iOS handles this automatically).
    function defaultInitialFocus(interactionType) {
        if (interactionType === 'touch') {
            return store.context.popupRef.current;
        }
        return true;
    }
    const resolvedInitialFocus = initialFocus === undefined ? defaultInitialFocus : initialFocus;
    const state = {
        open,
        side: positioner.side,
        align: positioner.align,
        instant: instantType,
        transitionStatus
    };
    const focusManagerModal = modal !== false && hasClosePart;
    const setPopupElement = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"]({
        "PopoverPopup.PopoverPopup.useCallback[setPopupElement]": (element)=>{
            store.set('popupElement', element);
        }
    }["PopoverPopup.PopoverPopup.useCallback[setPopupElement]"], [
        store
    ]);
    const element = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$useRenderElement$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRenderElement"])('div', componentProps, {
        state,
        ref: [
            forwardedRef,
            store.context.popupRef,
            setPopupElement
        ],
        props: [
            popupProps,
            {
                'aria-labelledby': titleId,
                'aria-describedby': descriptionId,
                onKeyDown (event) {
                    if (insideToolbar && __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$composite$2f$composite$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["COMPOSITE_KEYS"].has(event.key)) {
                        event.stopPropagation();
                    }
                }
            },
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$getDisabledMountTransitionStyles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDisabledMountTransitionStyles"])(transitionStatus),
            elementProps
        ],
        stateAttributesMapping
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$floating$2d$ui$2d$react$2f$components$2f$FloatingFocusManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FloatingFocusManager"], {
        context: floatingContext,
        openInteractionType: openMethod,
        modal: focusManagerModal,
        disabled: !mounted || openReason === __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$reason$2d$parts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__REASONS$3e$__["REASONS"].triggerHover,
        initialFocus: resolvedInitialFocus,
        returnFocus: finalFocus,
        restoreFocus: "popup",
        previousFocusableElement: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isHTMLElement"])(activeTriggerElement) ? activeTriggerElement : undefined,
        nextFocusableElement: store.context.triggerFocusTargetRef,
        beforeContentFocusGuardRef: store.context.beforeContentFocusGuardRef,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$closePart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ClosePartProvider"], {
            value: closePartContext,
            children: element
        })
    });
});
if ("TURBOPACK compile-time truthy", 1) PopoverPopup.displayName = "PopoverPopup";
}),
"[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/react/esm/popover/arrow/PopoverArrow.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PopoverArrow",
    ()=>PopoverArrow
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$popover$2f$positioner$2f$PopoverPositionerContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/react/esm/popover/positioner/PopoverPositionerContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$popover$2f$root$2f$PopoverRootContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/react/esm/popover/root/PopoverRootContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$popupStateMapping$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/react/esm/utils/popupStateMapping.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$useRenderElement$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/react/esm/utils/useRenderElement.js [app-client] (ecmascript)");
'use client';
;
;
;
;
;
const PopoverArrow = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](function PopoverArrow(componentProps, forwardedRef) {
    const { className, render, ...elementProps } = componentProps;
    const { store } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$popover$2f$root$2f$PopoverRootContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePopoverRootContext"])();
    const open = store.useState('open');
    const { arrowRef, side, align, arrowUncentered, arrowStyles } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$popover$2f$positioner$2f$PopoverPositionerContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePopoverPositionerContext"])();
    const state = {
        open,
        side,
        align,
        uncentered: arrowUncentered
    };
    const element = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$useRenderElement$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRenderElement"])('div', componentProps, {
        state,
        ref: [
            forwardedRef,
            arrowRef
        ],
        props: [
            {
                style: arrowStyles,
                'aria-hidden': true
            },
            elementProps
        ],
        stateAttributesMapping: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$popupStateMapping$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["popupStateMapping"]
    });
    return element;
});
if ("TURBOPACK compile-time truthy", 1) PopoverArrow.displayName = "PopoverArrow";
}),
"[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/react/esm/popover/backdrop/PopoverBackdrop.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PopoverBackdrop",
    ()=>PopoverBackdrop
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$popover$2f$root$2f$PopoverRootContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/react/esm/popover/root/PopoverRootContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$popupStateMapping$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/react/esm/utils/popupStateMapping.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$stateAttributesMapping$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/react/esm/utils/stateAttributesMapping.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$useRenderElement$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/react/esm/utils/useRenderElement.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$reason$2d$parts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__REASONS$3e$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/react/esm/utils/reason-parts.js [app-client] (ecmascript) <export * as REASONS>");
'use client';
;
;
;
;
;
;
const stateAttributesMapping = {
    ...__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$popupStateMapping$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["popupStateMapping"],
    ...__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$stateAttributesMapping$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transitionStatusMapping"]
};
const PopoverBackdrop = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](function PopoverBackdrop(props, forwardedRef) {
    const { className, render, ...elementProps } = props;
    const { store } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$popover$2f$root$2f$PopoverRootContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePopoverRootContext"])();
    const open = store.useState('open');
    const mounted = store.useState('mounted');
    const transitionStatus = store.useState('transitionStatus');
    const openReason = store.useState('openChangeReason');
    const state = {
        open,
        transitionStatus
    };
    const element = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$useRenderElement$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRenderElement"])('div', props, {
        state,
        ref: [
            store.context.backdropRef,
            forwardedRef
        ],
        props: [
            {
                role: 'presentation',
                hidden: !mounted,
                style: {
                    pointerEvents: openReason === __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$reason$2d$parts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__REASONS$3e$__["REASONS"].triggerHover ? 'none' : undefined,
                    userSelect: 'none',
                    WebkitUserSelect: 'none'
                }
            },
            elementProps
        ],
        stateAttributesMapping
    });
    return element;
});
if ("TURBOPACK compile-time truthy", 1) PopoverBackdrop.displayName = "PopoverBackdrop";
}),
"[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/react/esm/popover/title/PopoverTitle.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PopoverTitle",
    ()=>PopoverTitle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useIsoLayoutEffect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/utils/esm/useIsoLayoutEffect.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$popover$2f$root$2f$PopoverRootContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/react/esm/popover/root/PopoverRootContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$useRenderElement$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/react/esm/utils/useRenderElement.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$useBaseUiId$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/react/esm/utils/useBaseUiId.js [app-client] (ecmascript)");
'use client';
;
;
;
;
;
const PopoverTitle = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](function PopoverTitle(componentProps, forwardedRef) {
    const { render, className, ...elementProps } = componentProps;
    const { store } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$popover$2f$root$2f$PopoverRootContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePopoverRootContext"])();
    const id = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$useBaseUiId$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBaseUiId"])(elementProps.id);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useIsoLayoutEffect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useIsoLayoutEffect"])({
        "PopoverTitle.PopoverTitle.useIsoLayoutEffect": ()=>{
            store.set('titleElementId', id);
            return ({
                "PopoverTitle.PopoverTitle.useIsoLayoutEffect": ()=>{
                    store.set('titleElementId', undefined);
                }
            })["PopoverTitle.PopoverTitle.useIsoLayoutEffect"];
        }
    }["PopoverTitle.PopoverTitle.useIsoLayoutEffect"], [
        store,
        id
    ]);
    const element = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$useRenderElement$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRenderElement"])('h2', componentProps, {
        ref: forwardedRef,
        props: [
            {
                id
            },
            elementProps
        ]
    });
    return element;
});
if ("TURBOPACK compile-time truthy", 1) PopoverTitle.displayName = "PopoverTitle";
}),
"[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/react/esm/popover/description/PopoverDescription.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PopoverDescription",
    ()=>PopoverDescription
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useIsoLayoutEffect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/utils/esm/useIsoLayoutEffect.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$popover$2f$root$2f$PopoverRootContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/react/esm/popover/root/PopoverRootContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$useBaseUiId$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/react/esm/utils/useBaseUiId.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$useRenderElement$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/react/esm/utils/useRenderElement.js [app-client] (ecmascript)");
'use client';
;
;
;
;
;
const PopoverDescription = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](function PopoverDescription(componentProps, forwardedRef) {
    const { render, className, ...elementProps } = componentProps;
    const { store } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$popover$2f$root$2f$PopoverRootContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePopoverRootContext"])();
    const id = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$useBaseUiId$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBaseUiId"])(elementProps.id);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useIsoLayoutEffect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useIsoLayoutEffect"])({
        "PopoverDescription.PopoverDescription.useIsoLayoutEffect": ()=>{
            store.set('descriptionElementId', id);
            return ({
                "PopoverDescription.PopoverDescription.useIsoLayoutEffect": ()=>{
                    store.set('descriptionElementId', undefined);
                }
            })["PopoverDescription.PopoverDescription.useIsoLayoutEffect"];
        }
    }["PopoverDescription.PopoverDescription.useIsoLayoutEffect"], [
        store,
        id
    ]);
    const element = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$useRenderElement$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRenderElement"])('p', componentProps, {
        ref: forwardedRef,
        props: [
            {
                id
            },
            elementProps
        ]
    });
    return element;
});
if ("TURBOPACK compile-time truthy", 1) PopoverDescription.displayName = "PopoverDescription";
}),
"[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/react/esm/popover/close/PopoverClose.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PopoverClose",
    ()=>PopoverClose
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$popover$2f$root$2f$PopoverRootContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/react/esm/popover/root/PopoverRootContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$useRenderElement$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/react/esm/utils/useRenderElement.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$use$2d$button$2f$useButton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/react/esm/use-button/useButton.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$createBaseUIEventDetails$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/react/esm/utils/createBaseUIEventDetails.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$reason$2d$parts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__REASONS$3e$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/react/esm/utils/reason-parts.js [app-client] (ecmascript) <export * as REASONS>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$closePart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/react/esm/utils/closePart.js [app-client] (ecmascript)");
'use client';
;
;
;
;
;
;
;
const PopoverClose = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](function PopoverClose(componentProps, forwardedRef) {
    const { render, className, disabled = false, nativeButton = true, ...elementProps } = componentProps;
    const { buttonRef, getButtonProps } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$use$2d$button$2f$useButton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useButton"])({
        disabled,
        focusableWhenDisabled: false,
        native: nativeButton
    });
    const { store } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$popover$2f$root$2f$PopoverRootContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePopoverRootContext"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$closePart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useClosePartRegistration"])();
    const element = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$useRenderElement$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRenderElement"])('button', componentProps, {
        ref: [
            forwardedRef,
            buttonRef
        ],
        props: [
            {
                onClick (event) {
                    store.setOpen(false, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$createBaseUIEventDetails$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createChangeEventDetails"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$reason$2d$parts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__REASONS$3e$__["REASONS"].closePress, event.nativeEvent, event.currentTarget));
                }
            },
            elementProps,
            getButtonProps
        ]
    });
    return element;
});
if ("TURBOPACK compile-time truthy", 1) PopoverClose.displayName = "PopoverClose";
}),
"[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/react/esm/popover/viewport/PopoverViewportCssVars.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PopoverViewportCssVars",
    ()=>PopoverViewportCssVars
]);
let PopoverViewportCssVars = /*#__PURE__*/ function(PopoverViewportCssVars) {
    /**
   * The width of the parent popup.
   * This variable is placed on the 'previous' container and stores the width of the popup when the previous content was rendered.
   * It can be used to freeze the dimensions of the popup when animating between different content.
   */ PopoverViewportCssVars["popupWidth"] = "--popup-width";
    /**
   * The height of the parent popup.
   * This variable is placed on the 'previous' container and stores the height of the popup when the previous content was rendered.
   * It can be used to freeze the dimensions of the popup when animating between different content.
   */ PopoverViewportCssVars["popupHeight"] = "--popup-height";
    return PopoverViewportCssVars;
}({});
}),
"[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/react/esm/utils/usePopupAutoResize.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "usePopupAutoResize",
    ()=>usePopupAutoResize
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useAnimationFrame$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/utils/esm/useAnimationFrame.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useIsoLayoutEffect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/utils/esm/useIsoLayoutEffect.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useStableCallback$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/utils/esm/useStableCallback.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$empty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/utils/esm/empty.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$useAnimationsFinished$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/react/esm/utils/useAnimationsFinished.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$getCssDimensions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/react/esm/utils/getCssDimensions.js [app-client] (ecmascript)");
'use client';
;
;
;
;
;
;
;
;
const DEFAULT_ENABLED = ()=>true;
function usePopupAutoResize(parameters) {
    const { popupElement, positionerElement, content, mounted, enabled = DEFAULT_ENABLED, onMeasureLayout: onMeasureLayoutParam, onMeasureLayoutComplete: onMeasureLayoutCompleteParam, side, direction } = parameters;
    const runOnceAnimationsFinish = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$useAnimationsFinished$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAnimationsFinished"])(popupElement, true, false);
    const animationFrame = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useAnimationFrame$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAnimationFrame"])();
    const committedDimensionsRef = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](null);
    const liveDimensionsRef = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](null);
    const isInitialRenderRef = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](true);
    const restoreAnchoringStylesRef = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$empty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NOOP"]);
    const onMeasureLayout = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useStableCallback$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStableCallback"])(onMeasureLayoutParam);
    const onMeasureLayoutComplete = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useStableCallback$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStableCallback"])(onMeasureLayoutCompleteParam);
    const anchoringStyles = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "usePopupAutoResize.useMemo[anchoringStyles]": ()=>{
            // Ensure popup size transitions correctly when anchored to `bottom` (side=top) or `right` (side=left).
            let isOriginSide = side === 'top';
            let isPhysicalLeft = side === 'left';
            if (direction === 'rtl') {
                isOriginSide = isOriginSide || side === 'inline-end';
                isPhysicalLeft = isPhysicalLeft || side === 'inline-end';
            } else {
                isOriginSide = isOriginSide || side === 'inline-start';
                isPhysicalLeft = isPhysicalLeft || side === 'inline-start';
            }
            return isOriginSide ? {
                position: 'absolute',
                [side === 'top' ? 'bottom' : 'top']: '0',
                [isPhysicalLeft ? 'right' : 'left']: '0'
            } : __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$empty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EMPTY_OBJECT"];
        }
    }["usePopupAutoResize.useMemo[anchoringStyles]"], [
        side,
        direction
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useIsoLayoutEffect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useIsoLayoutEffect"])({
        "usePopupAutoResize.useIsoLayoutEffect": ()=>{
            // Reset the state when the popup is closed.
            if (!mounted || !enabled() || typeof ResizeObserver !== 'function') {
                restoreAnchoringStylesRef.current = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$empty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NOOP"];
                isInitialRenderRef.current = true;
                committedDimensionsRef.current = null;
                liveDimensionsRef.current = null;
                return undefined;
            }
            if (!popupElement || !positionerElement) {
                return undefined;
            }
            restoreAnchoringStylesRef.current = applyElementStyles(popupElement, anchoringStyles);
            const observer = new ResizeObserver({
                "usePopupAutoResize.useIsoLayoutEffect": (entries)=>{
                    const entry = entries[0];
                    if (entry) {
                        liveDimensionsRef.current = {
                            width: Math.ceil(entry.borderBoxSize[0].inlineSize),
                            height: Math.ceil(entry.borderBoxSize[0].blockSize)
                        };
                    }
                }
            }["usePopupAutoResize.useIsoLayoutEffect"]);
            observer.observe(popupElement);
            // Measure the rendered size to enable transitions:
            setPopupCssSize(popupElement, 'auto');
            const restorePopupPosition = overrideElementStyle(popupElement, 'position', 'static');
            const restorePopupTransform = overrideElementStyle(popupElement, 'transform', 'none');
            const restorePopupScale = overrideElementStyle(popupElement, 'scale', '1');
            const restorePositionerAvailableSize = applyElementStyles(positionerElement, {
                '--available-width': 'max-content',
                '--available-height': 'max-content'
            });
            function restoreMeasurementOverrides() {
                restorePopupPosition();
                restorePopupTransform();
                restorePositionerAvailableSize();
            }
            function restoreMeasurementOverridesIncludingScale() {
                restoreMeasurementOverrides();
                restorePopupScale();
            }
            onMeasureLayout?.();
            // Initial render (for each time the popup opens).
            if (isInitialRenderRef.current || committedDimensionsRef.current === null) {
                setPositionerCssSize(positionerElement, 'max-content');
                const dimensions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$getCssDimensions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCssDimensions"])(popupElement);
                committedDimensionsRef.current = dimensions;
                setPositionerCssSize(positionerElement, dimensions);
                restoreMeasurementOverridesIncludingScale();
                onMeasureLayoutComplete?.(null, dimensions);
                isInitialRenderRef.current = false;
                return ({
                    "usePopupAutoResize.useIsoLayoutEffect": ()=>{
                        observer.disconnect();
                        restoreAnchoringStylesRef.current();
                        restoreAnchoringStylesRef.current = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$empty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NOOP"];
                    }
                })["usePopupAutoResize.useIsoLayoutEffect"];
            }
            // Subsequent renders while open (when `content` changes).
            setPopupCssSize(popupElement, 'auto');
            setPositionerCssSize(positionerElement, 'max-content');
            const previousDimensions = committedDimensionsRef.current ?? liveDimensionsRef.current;
            const newDimensions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$getCssDimensions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCssDimensions"])(popupElement);
            // Commit immediately so future content changes have a stable previous size, even if
            // ResizeObserver runs after this point.
            committedDimensionsRef.current = newDimensions;
            if (!previousDimensions) {
                setPositionerCssSize(positionerElement, newDimensions);
                restoreMeasurementOverridesIncludingScale();
                onMeasureLayoutComplete?.(null, newDimensions);
                return ({
                    "usePopupAutoResize.useIsoLayoutEffect": ()=>{
                        observer.disconnect();
                        animationFrame.cancel();
                        restoreAnchoringStylesRef.current();
                        restoreAnchoringStylesRef.current = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$empty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NOOP"];
                    }
                })["usePopupAutoResize.useIsoLayoutEffect"];
            }
            setPopupCssSize(popupElement, previousDimensions);
            restoreMeasurementOverridesIncludingScale();
            onMeasureLayoutComplete?.(previousDimensions, newDimensions);
            setPositionerCssSize(positionerElement, newDimensions);
            const abortController = new AbortController();
            animationFrame.request({
                "usePopupAutoResize.useIsoLayoutEffect": ()=>{
                    setPopupCssSize(popupElement, newDimensions);
                    runOnceAnimationsFinish({
                        "usePopupAutoResize.useIsoLayoutEffect": ()=>{
                            popupElement.style.setProperty('--popup-width', 'auto');
                            popupElement.style.setProperty('--popup-height', 'auto');
                        }
                    }["usePopupAutoResize.useIsoLayoutEffect"], abortController.signal);
                }
            }["usePopupAutoResize.useIsoLayoutEffect"]);
            return ({
                "usePopupAutoResize.useIsoLayoutEffect": ()=>{
                    observer.disconnect();
                    abortController.abort();
                    animationFrame.cancel();
                    restoreAnchoringStylesRef.current();
                    restoreAnchoringStylesRef.current = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$empty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NOOP"];
                }
            })["usePopupAutoResize.useIsoLayoutEffect"];
        }
    }["usePopupAutoResize.useIsoLayoutEffect"], [
        content,
        popupElement,
        positionerElement,
        runOnceAnimationsFinish,
        animationFrame,
        enabled,
        mounted,
        onMeasureLayout,
        onMeasureLayoutComplete,
        anchoringStyles
    ]);
}
function overrideElementStyle(element, property, value) {
    const originalValue = element.style.getPropertyValue(property);
    element.style.setProperty(property, value);
    return ()=>{
        element.style.setProperty(property, originalValue);
    };
}
function applyElementStyles(element, styles) {
    const restorers = [];
    for (const [key, value] of Object.entries(styles)){
        restorers.push(overrideElementStyle(element, key, value));
    }
    return restorers.length ? ()=>{
        restorers.forEach((restore)=>restore());
    } : __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$empty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NOOP"];
}
function setPopupCssSize(popupElement, size) {
    const width = size === 'auto' ? 'auto' : `${size.width}px`;
    const height = size === 'auto' ? 'auto' : `${size.height}px`;
    popupElement.style.setProperty('--popup-width', width);
    popupElement.style.setProperty('--popup-height', height);
}
function setPositionerCssSize(positionerElement, size) {
    const width = size === 'max-content' ? 'max-content' : `${size.width}px`;
    const height = size === 'max-content' ? 'max-content' : `${size.height}px`;
    positionerElement.style.setProperty('--positioner-width', width);
    positionerElement.style.setProperty('--positioner-height', height);
}
}),
"[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/react/esm/utils/usePopupViewport.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "usePopupViewport",
    ()=>usePopupViewport
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/next/dist/compiled/react-dom/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$inertValue$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/utils/esm/inertValue.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useAnimationFrame$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/utils/esm/useAnimationFrame.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$usePreviousValue$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/utils/esm/usePreviousValue.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useIsoLayoutEffect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/utils/esm/useIsoLayoutEffect.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useStableCallback$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/utils/esm/useStableCallback.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$useAnimationsFinished$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/react/esm/utils/useAnimationsFinished.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$usePopupAutoResize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/react/esm/utils/usePopupAutoResize.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$direction$2d$provider$2f$DirectionContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/react/esm/direction-provider/DirectionContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
'use client';
;
;
;
;
;
;
;
;
;
;
;
function usePopupViewport(parameters) {
    const { store, side, cssVars, children } = parameters;
    const direction = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$direction$2d$provider$2f$DirectionContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDirection"])();
    const activeTrigger = store.useState('activeTriggerElement');
    const activeTriggerId = store.useState('activeTriggerId');
    const open = store.useState('open');
    const payload = store.useState('payload');
    const mounted = store.useState('mounted');
    const popupElement = store.useState('popupElement');
    const positionerElement = store.useState('positionerElement');
    const previousActiveTrigger = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$usePreviousValue$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePreviousValue"])(open ? activeTrigger : null);
    // Remount current content on trigger changes (and once more when payload lags) to avoid DOM reuse flashes.
    // The key bumps immediately on trigger switches, then again if the payload arrives on a later render.
    const currentContentKey = usePopupContentKey(activeTriggerId, payload);
    const capturedNodeRef = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](null);
    const [previousContentNode, setPreviousContentNode] = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](null);
    const [newTriggerOffset, setNewTriggerOffset] = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](null);
    const currentContainerRef = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](null);
    const previousContainerRef = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](null);
    const onAnimationsFinished = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$useAnimationsFinished$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAnimationsFinished"])(currentContainerRef, true, false);
    const cleanupFrame = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useAnimationFrame$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAnimationFrame"])();
    const [previousContentDimensions, setPreviousContentDimensions] = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](null);
    const [showStartingStyleAttribute, setShowStartingStyleAttribute] = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useIsoLayoutEffect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useIsoLayoutEffect"])({
        "usePopupViewport.useIsoLayoutEffect": ()=>{
            store.set('hasViewport', true);
            return ({
                "usePopupViewport.useIsoLayoutEffect": ()=>{
                    store.set('hasViewport', false);
                }
            })["usePopupViewport.useIsoLayoutEffect"];
        }
    }["usePopupViewport.useIsoLayoutEffect"], [
        store
    ]);
    const handleMeasureLayout = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useStableCallback$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStableCallback"])({
        "usePopupViewport.useStableCallback[handleMeasureLayout]": ()=>{
            currentContainerRef.current?.style.setProperty('animation', 'none');
            currentContainerRef.current?.style.setProperty('transition', 'none');
            previousContainerRef.current?.style.setProperty('display', 'none');
        }
    }["usePopupViewport.useStableCallback[handleMeasureLayout]"]);
    const handleMeasureLayoutComplete = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useStableCallback$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStableCallback"])({
        "usePopupViewport.useStableCallback[handleMeasureLayoutComplete]": (previousDimensions)=>{
            currentContainerRef.current?.style.removeProperty('animation');
            currentContainerRef.current?.style.removeProperty('transition');
            previousContainerRef.current?.style.removeProperty('display');
            if (previousDimensions) {
                setPreviousContentDimensions(previousDimensions);
            }
        }
    }["usePopupViewport.useStableCallback[handleMeasureLayoutComplete]"]);
    const lastHandledTriggerRef = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useIsoLayoutEffect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useIsoLayoutEffect"])({
        "usePopupViewport.useIsoLayoutEffect": ()=>{
            // When a trigger changes, set the captured children HTML to state,
            // so we can render both new and old content.
            if (activeTrigger && previousActiveTrigger && activeTrigger !== previousActiveTrigger && lastHandledTriggerRef.current !== activeTrigger && capturedNodeRef.current) {
                setPreviousContentNode(capturedNodeRef.current);
                setShowStartingStyleAttribute(true);
                // Calculate the relative position between the previous and new trigger,
                // so we can pass it to the style hook for animation purposes.
                const offset = calculateRelativePosition(previousActiveTrigger, activeTrigger);
                setNewTriggerOffset(offset);
                cleanupFrame.request({
                    "usePopupViewport.useIsoLayoutEffect": ()=>{
                        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["flushSync"]({
                            "usePopupViewport.useIsoLayoutEffect": ()=>{
                                setShowStartingStyleAttribute(false);
                            }
                        }["usePopupViewport.useIsoLayoutEffect"]);
                        onAnimationsFinished({
                            "usePopupViewport.useIsoLayoutEffect": ()=>{
                                setPreviousContentNode(null);
                                setPreviousContentDimensions(null);
                                capturedNodeRef.current = null;
                            }
                        }["usePopupViewport.useIsoLayoutEffect"]);
                    }
                }["usePopupViewport.useIsoLayoutEffect"]);
                lastHandledTriggerRef.current = activeTrigger;
            }
        }
    }["usePopupViewport.useIsoLayoutEffect"], [
        activeTrigger,
        previousActiveTrigger,
        previousContentNode,
        onAnimationsFinished,
        cleanupFrame
    ]);
    // Capture a clone of the current content DOM subtree when not transitioning.
    // We can't store previous React nodes as they may be stateful; instead we capture DOM clones for visual continuity.
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useIsoLayoutEffect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useIsoLayoutEffect"])({
        "usePopupViewport.useIsoLayoutEffect": ()=>{
            // When a transition is in progress, we store the next content in capturedNodeRef.
            // This handles the case where the trigger changes multiple times before the transition finishes.
            // We want to always capture the latest content for the previous snapshot.
            // So clicking quickly on T1, T2, T3 will result in the following sequence:
            // 1. T1 -> T2: previousContent = T1, currentContent = T2
            // 2. T2 -> T3: previousContent = T2, currentContent = T3
            const source = currentContainerRef.current;
            if (!source) {
                return;
            }
            const wrapper = document.createElement('div');
            for (const child of Array.from(source.childNodes)){
                wrapper.appendChild(child.cloneNode(true));
            }
            capturedNodeRef.current = wrapper;
        }
    }["usePopupViewport.useIsoLayoutEffect"]);
    const isTransitioning = previousContentNode != null;
    let childrenToRender;
    if (!isTransitioning) {
        childrenToRender = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("div", {
            "data-current": true,
            ref: currentContainerRef,
            children: children
        }, currentContentKey);
    } else {
        childrenToRender = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("div", {
                    "data-previous": true,
                    inert: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$inertValue$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["inertValue"])(true),
                    ref: previousContainerRef,
                    style: {
                        ...previousContentDimensions ? {
                            [cssVars.popupWidth]: `${previousContentDimensions.width}px`,
                            [cssVars.popupHeight]: `${previousContentDimensions.height}px`
                        } : null,
                        position: 'absolute'
                    },
                    "data-ending-style": showStartingStyleAttribute ? undefined : ''
                }, "previous"),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("div", {
                    "data-current": true,
                    ref: currentContainerRef,
                    "data-starting-style": showStartingStyleAttribute ? '' : undefined,
                    children: children
                }, currentContentKey)
            ]
        });
    }
    // When previousContentNode is present, imperatively populate the previous container with the cloned children.
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useIsoLayoutEffect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useIsoLayoutEffect"])({
        "usePopupViewport.useIsoLayoutEffect": ()=>{
            const container = previousContainerRef.current;
            if (!container || !previousContentNode) {
                return;
            }
            container.replaceChildren(...Array.from(previousContentNode.childNodes));
        }
    }["usePopupViewport.useIsoLayoutEffect"], [
        previousContentNode
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$usePopupAutoResize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePopupAutoResize"])({
        popupElement,
        positionerElement,
        mounted,
        content: payload,
        onMeasureLayout: handleMeasureLayout,
        onMeasureLayoutComplete: handleMeasureLayoutComplete,
        side,
        direction
    });
    const state = {
        activationDirection: getActivationDirection(newTriggerOffset),
        transitioning: isTransitioning
    };
    return {
        children: childrenToRender,
        state
    };
}
/**
 * Returns a string describing the provided offset.
 * It describes both the horizontal and vertical offset, separated by a space.
 *
 * @param offset
 */ function getActivationDirection(offset) {
    if (!offset) {
        return undefined;
    }
    return `${getValueWithTolerance(offset.horizontal, 5, 'right', 'left')} ${getValueWithTolerance(offset.vertical, 5, 'down', 'up')}`;
}
/**
 * Returns a label describing the value (positive/negative) treating values
 * within tolerance as zero.
 *
 * @param value Value to check
 * @param tolerance Tolerance to treat the value as zero.
 * @param positiveLabel
 * @param negativeLabel
 * @returns If 0 < abs(value) < tolerance, returns an empty string. Otherwise returns positiveLabel or negativeLabel.
 */ function getValueWithTolerance(value, tolerance, positiveLabel, negativeLabel) {
    if (value > tolerance) {
        return positiveLabel;
    }
    if (value < -tolerance) {
        return negativeLabel;
    }
    return '';
}
/**
 * Calculates the relative position between centers of two elements.
 */ function calculateRelativePosition(from, to) {
    const fromRect = from.getBoundingClientRect();
    const toRect = to.getBoundingClientRect();
    const fromCenter = {
        x: fromRect.left + fromRect.width / 2,
        y: fromRect.top + fromRect.height / 2
    };
    const toCenter = {
        x: toRect.left + toRect.width / 2,
        y: toRect.top + toRect.height / 2
    };
    return {
        horizontal: toCenter.x - fromCenter.x,
        vertical: toCenter.y - fromCenter.y
    };
}
/**
 * Returns a key that forces remounting content when triggers change or a payload is updated.
 */ function usePopupContentKey(activeTriggerId, payload) {
    const [contentKey, setContentKey] = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](0);
    const previousActiveTriggerIdRef = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](activeTriggerId);
    const previousPayloadRef = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](payload);
    const pendingPayloadUpdateRef = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useIsoLayoutEffect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useIsoLayoutEffect"])({
        "usePopupContentKey.useIsoLayoutEffect": ()=>{
            // Compare against the last committed values to decide whether we need a new DOM subtree.
            const previousActiveTriggerId = previousActiveTriggerIdRef.current;
            const previousPayload = previousPayloadRef.current;
            const triggerIdChanged = activeTriggerId !== previousActiveTriggerId;
            const payloadChanged = payload !== previousPayload;
            if (triggerIdChanged) {
                // Remount immediately on trigger change; remember if payload hasn't caught up yet.
                setContentKey({
                    "usePopupContentKey.useIsoLayoutEffect": (value)=>value + 1
                }["usePopupContentKey.useIsoLayoutEffect"]);
                pendingPayloadUpdateRef.current = !payloadChanged;
            } else if (pendingPayloadUpdateRef.current && payloadChanged) {
                // Payload arrived a render later, so remount once more to avoid reusing the old <img>.
                setContentKey({
                    "usePopupContentKey.useIsoLayoutEffect": (value)=>value + 1
                }["usePopupContentKey.useIsoLayoutEffect"]);
                pendingPayloadUpdateRef.current = false;
            }
            // Persist current values for the next render's comparison.
            previousActiveTriggerIdRef.current = activeTriggerId;
            previousPayloadRef.current = payload;
        }
    }["usePopupContentKey.useIsoLayoutEffect"], [
        activeTriggerId,
        payload
    ]);
    return `${activeTriggerId ?? 'current'}-${contentKey}`;
}
}),
"[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/react/esm/popover/viewport/PopoverViewport.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PopoverViewport",
    ()=>PopoverViewport
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$popover$2f$root$2f$PopoverRootContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/react/esm/popover/root/PopoverRootContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$popover$2f$positioner$2f$PopoverPositionerContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/react/esm/popover/positioner/PopoverPositionerContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$useRenderElement$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/react/esm/utils/useRenderElement.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$popover$2f$viewport$2f$PopoverViewportCssVars$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/react/esm/popover/viewport/PopoverViewportCssVars.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$usePopupViewport$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/react/esm/utils/usePopupViewport.js [app-client] (ecmascript)");
'use client';
;
;
;
;
;
;
const stateAttributesMapping = {
    activationDirection: (value)=>value ? {
            'data-activation-direction': value
        } : null
};
const PopoverViewport = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](function PopoverViewport(componentProps, forwardedRef) {
    const { render, className, children, ...elementProps } = componentProps;
    const { store } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$popover$2f$root$2f$PopoverRootContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePopoverRootContext"])();
    const { side } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$popover$2f$positioner$2f$PopoverPositionerContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePopoverPositionerContext"])();
    const instantType = store.useState('instantType');
    const { children: childrenToRender, state: viewportState } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$usePopupViewport$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePopupViewport"])({
        store,
        side,
        cssVars: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$popover$2f$viewport$2f$PopoverViewportCssVars$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PopoverViewportCssVars"],
        children
    });
    const state = {
        activationDirection: viewportState.activationDirection,
        transitioning: viewportState.transitioning,
        instant: instantType
    };
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$useRenderElement$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRenderElement"])('div', componentProps, {
        state,
        ref: forwardedRef,
        props: [
            elementProps,
            {
                children: childrenToRender
            }
        ],
        stateAttributesMapping
    });
});
if ("TURBOPACK compile-time truthy", 1) PopoverViewport.displayName = "PopoverViewport";
}),
"[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/react/esm/popover/store/PopoverHandle.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PopoverHandle",
    ()=>PopoverHandle,
    "createPopoverHandle",
    ()=>createPopoverHandle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$createBaseUIEventDetails$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/react/esm/utils/createBaseUIEventDetails.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$reason$2d$parts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__REASONS$3e$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/react/esm/utils/reason-parts.js [app-client] (ecmascript) <export * as REASONS>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$popover$2f$store$2f$PopoverStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/react/esm/popover/store/PopoverStore.js [app-client] (ecmascript)");
;
;
;
;
class PopoverHandle {
    /**
   * Internal store holding the popover's state.
   * @internal
   */ constructor(){
        this.store = new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$popover$2f$store$2f$PopoverStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PopoverStore"]();
    }
    /**
   * Opens the popover and associates it with the trigger with the given id.
   * The trigger must be a Popover.Trigger component with this handle passed as a prop.
   *
   * @param triggerId ID of the trigger to associate with the popover.
   */ open(triggerId) {
        const triggerElement = triggerId ? this.store.context.triggerElements.getById(triggerId) ?? undefined : undefined;
        if (triggerId && !triggerElement) {
            throw new Error(("TURBOPACK compile-time truthy", 1) ? `Base UI: PopoverHandle.open: No trigger found with id "${triggerId}".` : "TURBOPACK unreachable");
        }
        this.store.setOpen(true, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$createBaseUIEventDetails$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createChangeEventDetails"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$reason$2d$parts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__REASONS$3e$__["REASONS"].imperativeAction, undefined, triggerElement));
    }
    /**
   * Closes the popover.
   */ close() {
        this.store.setOpen(false, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$createBaseUIEventDetails$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createChangeEventDetails"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$reason$2d$parts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__REASONS$3e$__["REASONS"].imperativeAction, undefined, undefined));
    }
    /**
   * Indicates whether the popover is currently open.
   */ get isOpen() {
        return this.store.state.open;
    }
}
function createPopoverHandle() {
    return new PopoverHandle();
}
}),
"[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/react/esm/popover/index.parts.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Arrow",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$popover$2f$arrow$2f$PopoverArrow$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PopoverArrow"],
    "Backdrop",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$popover$2f$backdrop$2f$PopoverBackdrop$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PopoverBackdrop"],
    "Close",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$popover$2f$close$2f$PopoverClose$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PopoverClose"],
    "Description",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$popover$2f$description$2f$PopoverDescription$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PopoverDescription"],
    "Handle",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$popover$2f$store$2f$PopoverHandle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PopoverHandle"],
    "Popup",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$popover$2f$popup$2f$PopoverPopup$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PopoverPopup"],
    "Portal",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$popover$2f$portal$2f$PopoverPortal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PopoverPortal"],
    "Positioner",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$popover$2f$positioner$2f$PopoverPositioner$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PopoverPositioner"],
    "Root",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$popover$2f$root$2f$PopoverRoot$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PopoverRoot"],
    "Title",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$popover$2f$title$2f$PopoverTitle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PopoverTitle"],
    "Trigger",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$popover$2f$trigger$2f$PopoverTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PopoverTrigger"],
    "Viewport",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$popover$2f$viewport$2f$PopoverViewport$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PopoverViewport"],
    "createHandle",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$popover$2f$store$2f$PopoverHandle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createPopoverHandle"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$popover$2f$index$2e$parts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/react/esm/popover/index.parts.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$popover$2f$root$2f$PopoverRoot$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/react/esm/popover/root/PopoverRoot.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$popover$2f$trigger$2f$PopoverTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/react/esm/popover/trigger/PopoverTrigger.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$popover$2f$portal$2f$PopoverPortal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/react/esm/popover/portal/PopoverPortal.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$popover$2f$positioner$2f$PopoverPositioner$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/react/esm/popover/positioner/PopoverPositioner.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$popover$2f$popup$2f$PopoverPopup$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/react/esm/popover/popup/PopoverPopup.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$popover$2f$arrow$2f$PopoverArrow$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/react/esm/popover/arrow/PopoverArrow.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$popover$2f$backdrop$2f$PopoverBackdrop$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/react/esm/popover/backdrop/PopoverBackdrop.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$popover$2f$title$2f$PopoverTitle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/react/esm/popover/title/PopoverTitle.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$popover$2f$description$2f$PopoverDescription$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/react/esm/popover/description/PopoverDescription.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$popover$2f$close$2f$PopoverClose$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/react/esm/popover/close/PopoverClose.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$popover$2f$viewport$2f$PopoverViewport$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/react/esm/popover/viewport/PopoverViewport.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$popover$2f$store$2f$PopoverHandle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/react/esm/popover/store/PopoverHandle.js [app-client] (ecmascript)");
}),
"[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/react/esm/popover/index.parts.js [app-client] (ecmascript) <export * as Popover>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Popover",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$popover$2f$index$2e$parts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$popover$2f$index$2e$parts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/react/esm/popover/index.parts.js [app-client] (ecmascript)");
}),
"[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/react/esm/select/index.parts.js [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
}),
"[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/react/esm/floating-ui-react/hooks/useListNavigation.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ESCAPE",
    ()=>ESCAPE,
    "useListNavigation",
    ()=>useListNavigation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/@floating-ui/utils/dist/floating-ui.utils.dom.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useValueAsRef$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/utils/esm/useValueAsRef.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useStableCallback$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/utils/esm/useStableCallback.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useIsoLayoutEffect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/utils/esm/useIsoLayoutEffect.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$owner$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/utils/esm/owner.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$floating$2d$ui$2d$react$2f$utils$2f$element$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/react/esm/floating-ui-react/utils/element.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$floating$2d$ui$2d$react$2f$utils$2f$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/react/esm/floating-ui-react/utils/event.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$floating$2d$ui$2d$react$2f$utils$2f$composite$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/react/esm/floating-ui-react/utils/composite.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$floating$2d$ui$2d$react$2f$components$2f$FloatingTree$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/react/esm/floating-ui-react/components/FloatingTree.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$createBaseUIEventDetails$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/react/esm/utils/createBaseUIEventDetails.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$reason$2d$parts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__REASONS$3e$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/react/esm/utils/reason-parts.js [app-client] (ecmascript) <export * as REASONS>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$floating$2d$ui$2d$react$2f$utils$2f$enqueueFocus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/react/esm/floating-ui-react/utils/enqueueFocus.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$floating$2d$ui$2d$react$2f$utils$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/react/esm/floating-ui-react/utils/constants.js [app-client] (ecmascript)");
'use client';
;
;
;
;
;
;
;
;
;
;
;
;
const ESCAPE = 'Escape';
function doSwitch(orientation, vertical, horizontal) {
    switch(orientation){
        case 'vertical':
            return vertical;
        case 'horizontal':
            return horizontal;
        default:
            return vertical || horizontal;
    }
}
function isMainOrientationKey(key, orientation) {
    const vertical = key === __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$floating$2d$ui$2d$react$2f$utils$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ARROW_UP"] || key === __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$floating$2d$ui$2d$react$2f$utils$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ARROW_DOWN"];
    const horizontal = key === __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$floating$2d$ui$2d$react$2f$utils$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ARROW_LEFT"] || key === __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$floating$2d$ui$2d$react$2f$utils$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ARROW_RIGHT"];
    return doSwitch(orientation, vertical, horizontal);
}
function isMainOrientationToEndKey(key, orientation, rtl) {
    const vertical = key === __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$floating$2d$ui$2d$react$2f$utils$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ARROW_DOWN"];
    const horizontal = rtl ? key === __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$floating$2d$ui$2d$react$2f$utils$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ARROW_LEFT"] : key === __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$floating$2d$ui$2d$react$2f$utils$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ARROW_RIGHT"];
    return doSwitch(orientation, vertical, horizontal) || key === 'Enter' || key === ' ' || key === '';
}
function isCrossOrientationOpenKey(key, orientation, rtl) {
    const vertical = rtl ? key === __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$floating$2d$ui$2d$react$2f$utils$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ARROW_LEFT"] : key === __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$floating$2d$ui$2d$react$2f$utils$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ARROW_RIGHT"];
    const horizontal = key === __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$floating$2d$ui$2d$react$2f$utils$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ARROW_DOWN"];
    return doSwitch(orientation, vertical, horizontal);
}
function isCrossOrientationCloseKey(key, orientation, rtl, cols) {
    const vertical = rtl ? key === __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$floating$2d$ui$2d$react$2f$utils$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ARROW_RIGHT"] : key === __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$floating$2d$ui$2d$react$2f$utils$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ARROW_LEFT"];
    const horizontal = key === __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$floating$2d$ui$2d$react$2f$utils$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ARROW_UP"];
    if (orientation === 'both' || orientation === 'horizontal' && cols && cols > 1) {
        return key === ESCAPE;
    }
    return doSwitch(orientation, vertical, horizontal);
}
function useListNavigation(context, props) {
    const store = 'rootStore' in context ? context.rootStore : context;
    const open = store.useState('open');
    const floatingElement = store.useState('floatingElement');
    const domReferenceElement = store.useState('domReferenceElement');
    const dataRef = store.context.dataRef;
    const { listRef, activeIndex, onNavigate: onNavigateProp = ()=>{}, enabled = true, selectedIndex = null, allowEscape = false, loopFocus = false, nested = false, rtl = false, virtual = false, focusItemOnOpen = 'auto', focusItemOnHover = true, openOnArrowKeyDown = true, disabledIndices = undefined, orientation = 'vertical', parentOrientation, cols = 1, id, resetOnPointerLeave = true, externalTree } = props;
    if ("TURBOPACK compile-time truthy", 1) {
        if (allowEscape) {
            if (!loopFocus) {
                console.warn('`useListNavigation` looping must be enabled to allow escaping.');
            }
            if (!virtual) {
                console.warn('`useListNavigation` must be virtual to allow escaping.');
            }
        }
        if (orientation === 'vertical' && cols > 1) {
            console.warn('In grid list navigation mode (`cols` > 1), the `orientation` should', 'be either "horizontal" or "both".');
        }
    }
    const floatingFocusElement = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$floating$2d$ui$2d$react$2f$utils$2f$element$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getFloatingFocusElement"])(floatingElement);
    const floatingFocusElementRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useValueAsRef$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useValueAsRef"])(floatingFocusElement);
    const parentId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$floating$2d$ui$2d$react$2f$components$2f$FloatingTree$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFloatingParentNodeId"])();
    const tree = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$floating$2d$ui$2d$react$2f$components$2f$FloatingTree$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFloatingTree"])(externalTree);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useIsoLayoutEffect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useIsoLayoutEffect"])({
        "useListNavigation.useIsoLayoutEffect": ()=>{
            dataRef.current.orientation = orientation;
        }
    }["useListNavigation.useIsoLayoutEffect"], [
        dataRef,
        orientation
    ]);
    const typeableComboboxReference = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$floating$2d$ui$2d$react$2f$utils$2f$element$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isTypeableCombobox"])(domReferenceElement);
    const focusItemOnOpenRef = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](focusItemOnOpen);
    const indexRef = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](selectedIndex ?? -1);
    const keyRef = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](null);
    const isPointerModalityRef = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](true);
    const onNavigate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useStableCallback$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStableCallback"])({
        "useListNavigation.useStableCallback[onNavigate]": (event)=>{
            onNavigateProp(indexRef.current === -1 ? null : indexRef.current, event);
        }
    }["useListNavigation.useStableCallback[onNavigate]"]);
    const previousOnNavigateRef = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](onNavigate);
    const previousMountedRef = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](!!floatingElement);
    const previousOpenRef = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](open);
    const forceSyncFocusRef = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](false);
    const forceScrollIntoViewRef = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](false);
    const disabledIndicesRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useValueAsRef$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useValueAsRef"])(disabledIndices);
    const latestOpenRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useValueAsRef$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useValueAsRef"])(open);
    const selectedIndexRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useValueAsRef$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useValueAsRef"])(selectedIndex);
    const resetOnPointerLeaveRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useValueAsRef$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useValueAsRef"])(resetOnPointerLeave);
    const focusItem = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useStableCallback$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStableCallback"])({
        "useListNavigation.useStableCallback[focusItem]": ()=>{
            function runFocus(item) {
                if (virtual) {
                    tree?.events.emit('virtualfocus', item);
                } else {
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$floating$2d$ui$2d$react$2f$utils$2f$enqueueFocus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["enqueueFocus"])(item, {
                        sync: forceSyncFocusRef.current,
                        preventScroll: true
                    });
                }
            }
            const initialItem = listRef.current[indexRef.current];
            const forceScrollIntoView = forceScrollIntoViewRef.current;
            if (initialItem) {
                runFocus(initialItem);
            }
            const scheduler = forceSyncFocusRef.current ? ({
                "useListNavigation.useStableCallback[focusItem]": (v)=>v()
            })["useListNavigation.useStableCallback[focusItem]"] : requestAnimationFrame;
            scheduler({
                "useListNavigation.useStableCallback[focusItem]": ()=>{
                    const waitedItem = listRef.current[indexRef.current] || initialItem;
                    if (!waitedItem) {
                        return;
                    }
                    if (!initialItem) {
                        runFocus(waitedItem);
                    }
                    const shouldScrollIntoView = // eslint-disable-next-line @typescript-eslint/no-use-before-define
                    item && (forceScrollIntoView || !isPointerModalityRef.current);
                    if (shouldScrollIntoView) {
                        // JSDOM doesn't support `.scrollIntoView()` but it's widely supported
                        // by all browsers.
                        waitedItem.scrollIntoView?.({
                            block: 'nearest',
                            inline: 'nearest'
                        });
                    }
                }
            }["useListNavigation.useStableCallback[focusItem]"]);
        }
    }["useListNavigation.useStableCallback[focusItem]"]);
    // Sync `selectedIndex` to be the `activeIndex` upon opening the floating
    // element. Also, reset `activeIndex` upon closing the floating element.
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useIsoLayoutEffect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useIsoLayoutEffect"])({
        "useListNavigation.useIsoLayoutEffect": ()=>{
            if (!enabled) {
                return;
            }
            if (open && floatingElement) {
                indexRef.current = selectedIndex ?? -1;
                if (focusItemOnOpenRef.current && selectedIndex != null) {
                    // Regardless of the pointer modality, we want to ensure the selected
                    // item comes into view when the floating element is opened.
                    forceScrollIntoViewRef.current = true;
                    onNavigate();
                }
            } else if (previousMountedRef.current) {
                // Since the user can specify `onNavigate` conditionally
                // (onNavigate: open ? setActiveIndex : setSelectedIndex),
                // we store and call the previous function.
                indexRef.current = -1;
                previousOnNavigateRef.current();
            }
        }
    }["useListNavigation.useIsoLayoutEffect"], [
        enabled,
        open,
        floatingElement,
        selectedIndex,
        onNavigate
    ]);
    // Sync `activeIndex` to be the focused item while the floating element is
    // open.
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useIsoLayoutEffect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useIsoLayoutEffect"])({
        "useListNavigation.useIsoLayoutEffect": ()=>{
            if (!enabled) {
                return;
            }
            if (!open) {
                forceSyncFocusRef.current = false;
                return;
            }
            if (!floatingElement) {
                return;
            }
            if (activeIndex == null) {
                forceSyncFocusRef.current = false;
                if (selectedIndexRef.current != null) {
                    return;
                }
                // Reset while the floating element was open (e.g. the list changed).
                if (previousMountedRef.current) {
                    indexRef.current = -1;
                    focusItem();
                }
                // Initial sync.
                if ((!previousOpenRef.current || !previousMountedRef.current) && focusItemOnOpenRef.current && (keyRef.current != null || focusItemOnOpenRef.current === true && keyRef.current == null)) {
                    let runs = 0;
                    const waitForListPopulated = {
                        "useListNavigation.useIsoLayoutEffect.waitForListPopulated": ()=>{
                            if (listRef.current[0] == null) {
                                // Avoid letting the browser paint if possible on the first try,
                                // otherwise use rAF. Don't try more than twice, since something
                                // is wrong otherwise.
                                if (runs < 2) {
                                    const scheduler = runs ? requestAnimationFrame : queueMicrotask;
                                    scheduler(waitForListPopulated);
                                }
                                runs += 1;
                            } else {
                                // initially focus the first non-disabled item
                                indexRef.current = keyRef.current == null || isMainOrientationToEndKey(keyRef.current, orientation, rtl) || nested ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$floating$2d$ui$2d$react$2f$utils$2f$composite$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getMinListIndex"])(listRef) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$floating$2d$ui$2d$react$2f$utils$2f$composite$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getMaxListIndex"])(listRef);
                                keyRef.current = null;
                                onNavigate();
                            }
                        }
                    }["useListNavigation.useIsoLayoutEffect.waitForListPopulated"];
                    waitForListPopulated();
                }
            } else if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$floating$2d$ui$2d$react$2f$utils$2f$composite$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isIndexOutOfListBounds"])(listRef, activeIndex)) {
                indexRef.current = activeIndex;
                focusItem();
                forceScrollIntoViewRef.current = false;
            }
        }
    }["useListNavigation.useIsoLayoutEffect"], [
        enabled,
        open,
        floatingElement,
        activeIndex,
        selectedIndexRef,
        nested,
        listRef,
        orientation,
        rtl,
        onNavigate,
        focusItem,
        disabledIndicesRef
    ]);
    // Ensure the parent floating element has focus when a nested child closes
    // to allow arrow key navigation to work after the pointer leaves the child.
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useIsoLayoutEffect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useIsoLayoutEffect"])({
        "useListNavigation.useIsoLayoutEffect": ()=>{
            if (!enabled || floatingElement || !tree || virtual || !previousMountedRef.current) {
                return;
            }
            const nodes = tree.nodesRef.current;
            const parent = nodes.find({
                "useListNavigation.useIsoLayoutEffect": (node)=>node.id === parentId
            }["useListNavigation.useIsoLayoutEffect"])?.context?.elements.floating;
            const activeEl = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$floating$2d$ui$2d$react$2f$utils$2f$element$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["activeElement"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$owner$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ownerDocument"])(floatingElement));
            const treeContainsActiveEl = nodes.some({
                "useListNavigation.useIsoLayoutEffect.treeContainsActiveEl": (node)=>node.context && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$floating$2d$ui$2d$react$2f$utils$2f$element$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["contains"])(node.context.elements.floating, activeEl)
            }["useListNavigation.useIsoLayoutEffect.treeContainsActiveEl"]);
            if (parent && !treeContainsActiveEl && isPointerModalityRef.current) {
                parent.focus({
                    preventScroll: true
                });
            }
        }
    }["useListNavigation.useIsoLayoutEffect"], [
        enabled,
        floatingElement,
        tree,
        parentId,
        virtual
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useIsoLayoutEffect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useIsoLayoutEffect"])({
        "useListNavigation.useIsoLayoutEffect": ()=>{
            previousOnNavigateRef.current = onNavigate;
            previousOpenRef.current = open;
            previousMountedRef.current = !!floatingElement;
        }
    }["useListNavigation.useIsoLayoutEffect"]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useIsoLayoutEffect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useIsoLayoutEffect"])({
        "useListNavigation.useIsoLayoutEffect": ()=>{
            if (!open) {
                keyRef.current = null;
                focusItemOnOpenRef.current = focusItemOnOpen;
            }
        }
    }["useListNavigation.useIsoLayoutEffect"], [
        open,
        focusItemOnOpen
    ]);
    const hasActiveIndex = activeIndex != null;
    const item = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "useListNavigation.useMemo[item]": ()=>{
            function syncCurrentTarget(event) {
                if (!latestOpenRef.current) {
                    return;
                }
                const index = listRef.current.indexOf(event.currentTarget);
                if (index !== -1 && indexRef.current !== index) {
                    indexRef.current = index;
                    onNavigate(event);
                }
            }
            const itemProps = {
                onFocus (event) {
                    forceSyncFocusRef.current = true;
                    syncCurrentTarget(event);
                },
                onClick: {
                    "useListNavigation.useMemo[item]": ({ currentTarget })=>currentTarget.focus({
                            preventScroll: true
                        })
                }["useListNavigation.useMemo[item]"],
                // Safari
                onMouseMove (event) {
                    forceSyncFocusRef.current = true;
                    forceScrollIntoViewRef.current = false;
                    if (focusItemOnHover) {
                        syncCurrentTarget(event);
                    }
                },
                onPointerLeave (event) {
                    if (!latestOpenRef.current || !isPointerModalityRef.current || event.pointerType === 'touch') {
                        return;
                    }
                    forceSyncFocusRef.current = true;
                    const relatedTarget = event.relatedTarget;
                    if (!focusItemOnHover || listRef.current.includes(relatedTarget)) {
                        return;
                    }
                    if (!resetOnPointerLeaveRef.current) {
                        return;
                    }
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$floating$2d$ui$2d$react$2f$utils$2f$enqueueFocus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["enqueueFocus"])(null, {
                        sync: true
                    });
                    indexRef.current = -1;
                    onNavigate(event);
                    if (!virtual) {
                        const floatingFocusEl = floatingFocusElementRef.current;
                        const activeEl = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$floating$2d$ui$2d$react$2f$utils$2f$element$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["activeElement"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$owner$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ownerDocument"])(floatingFocusEl));
                        if (floatingFocusEl && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$floating$2d$ui$2d$react$2f$utils$2f$element$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["contains"])(floatingFocusEl, activeEl)) {
                            floatingFocusEl.focus({
                                preventScroll: true
                            });
                        }
                    }
                }
            };
            return itemProps;
        }
    }["useListNavigation.useMemo[item]"], [
        latestOpenRef,
        floatingFocusElementRef,
        focusItemOnHover,
        listRef,
        onNavigate,
        resetOnPointerLeaveRef,
        virtual
    ]);
    const getParentOrientation = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"]({
        "useListNavigation.useCallback[getParentOrientation]": ()=>{
            return parentOrientation ?? tree?.nodesRef.current.find({
                "useListNavigation.useCallback[getParentOrientation]": (node)=>node.id === parentId
            }["useListNavigation.useCallback[getParentOrientation]"])?.context?.dataRef?.current.orientation;
        }
    }["useListNavigation.useCallback[getParentOrientation]"], [
        parentId,
        tree,
        parentOrientation
    ]);
    const commonOnKeyDown = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useStableCallback$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStableCallback"])({
        "useListNavigation.useStableCallback[commonOnKeyDown]": (event)=>{
            isPointerModalityRef.current = false;
            forceSyncFocusRef.current = true;
            // When composing a character, Chrome fires ArrowDown twice. Firefox/Safari
            // don't appear to suffer from this. `event.isComposing` is avoided due to
            // Safari not supporting it properly (although it's not needed in the first
            // place for Safari, just avoiding any possible issues).
            if (event.which === 229) {
                return;
            }
            // If the floating element is animating out, ignore navigation. Otherwise,
            // the `activeIndex` gets set to 0 despite not being open so the next time
            // the user ArrowDowns, the first item won't be focused.
            if (!latestOpenRef.current && event.currentTarget === floatingFocusElementRef.current) {
                return;
            }
            if (nested && isCrossOrientationCloseKey(event.key, orientation, rtl, cols)) {
                // If the nested list's close key is also the parent navigation key,
                // let the parent navigate. Otherwise, stop propagating the event.
                if (!isMainOrientationKey(event.key, getParentOrientation())) {
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$floating$2d$ui$2d$react$2f$utils$2f$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stopEvent"])(event);
                }
                store.setOpen(false, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$createBaseUIEventDetails$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createChangeEventDetails"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$reason$2d$parts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__REASONS$3e$__["REASONS"].listNavigation, event.nativeEvent));
                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isHTMLElement"])(domReferenceElement)) {
                    if (virtual) {
                        tree?.events.emit('virtualfocus', domReferenceElement);
                    } else {
                        domReferenceElement.focus();
                    }
                }
                return;
            }
            const currentIndex = indexRef.current;
            const minIndex = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$floating$2d$ui$2d$react$2f$utils$2f$composite$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getMinListIndex"])(listRef, disabledIndices);
            const maxIndex = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$floating$2d$ui$2d$react$2f$utils$2f$composite$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getMaxListIndex"])(listRef, disabledIndices);
            if (!typeableComboboxReference) {
                if (event.key === 'Home') {
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$floating$2d$ui$2d$react$2f$utils$2f$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stopEvent"])(event);
                    indexRef.current = minIndex;
                    onNavigate(event);
                }
                if (event.key === 'End') {
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$floating$2d$ui$2d$react$2f$utils$2f$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stopEvent"])(event);
                    indexRef.current = maxIndex;
                    onNavigate(event);
                }
            }
            // Grid navigation.
            if (cols > 1) {
                const sizes = Array.from({
                    length: listRef.current.length
                }, {
                    "useListNavigation.useStableCallback[commonOnKeyDown].sizes": ()=>({
                            width: 1,
                            height: 1
                        })
                }["useListNavigation.useStableCallback[commonOnKeyDown].sizes"]);
                // To calculate movements on the grid, we use hypothetical cell indices
                // as if every item was 1x1, then convert back to real indices.
                const cellMap = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$floating$2d$ui$2d$react$2f$utils$2f$composite$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createGridCellMap"])(sizes, cols, false);
                const minGridIndex = cellMap.findIndex({
                    "useListNavigation.useStableCallback[commonOnKeyDown].minGridIndex": (index)=>index != null && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$floating$2d$ui$2d$react$2f$utils$2f$composite$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isListIndexDisabled"])(listRef, index, disabledIndices)
                }["useListNavigation.useStableCallback[commonOnKeyDown].minGridIndex"]);
                // last enabled index
                const maxGridIndex = cellMap.reduce({
                    "useListNavigation.useStableCallback[commonOnKeyDown].maxGridIndex": (foundIndex, index, cellIndex)=>index != null && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$floating$2d$ui$2d$react$2f$utils$2f$composite$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isListIndexDisabled"])(listRef, index, disabledIndices) ? cellIndex : foundIndex
                }["useListNavigation.useStableCallback[commonOnKeyDown].maxGridIndex"], -1);
                const index = cellMap[(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$floating$2d$ui$2d$react$2f$utils$2f$composite$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getGridNavigatedIndex"])({
                    current: cellMap.map({
                        "useListNavigation.useStableCallback[commonOnKeyDown]": (itemIndex)=>itemIndex != null ? listRef.current[itemIndex] : null
                    }["useListNavigation.useStableCallback[commonOnKeyDown]"])
                }, {
                    event,
                    orientation,
                    loopFocus,
                    rtl,
                    cols,
                    // treat undefined (empty grid spaces) as disabled indices so we
                    // don't end up in them
                    disabledIndices: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$floating$2d$ui$2d$react$2f$utils$2f$composite$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getGridCellIndices"])([
                        ...(typeof disabledIndices !== 'function' ? disabledIndices : null) || listRef.current.map({
                            "useListNavigation.useStableCallback[commonOnKeyDown]": (_, listIndex)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$floating$2d$ui$2d$react$2f$utils$2f$composite$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isListIndexDisabled"])(listRef, listIndex, disabledIndices) ? listIndex : undefined
                        }["useListNavigation.useStableCallback[commonOnKeyDown]"]),
                        undefined
                    ], cellMap),
                    minIndex: minGridIndex,
                    maxIndex: maxGridIndex,
                    prevIndex: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$floating$2d$ui$2d$react$2f$utils$2f$composite$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getGridCellIndexOfCorner"])(indexRef.current > maxIndex ? minIndex : indexRef.current, sizes, cellMap, cols, // use a corner matching the edge closest to the direction
                    // we're moving in so we don't end up in the same item. Prefer
                    // top/left over bottom/right.
                    // eslint-disable-next-line no-nested-ternary
                    event.key === __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$floating$2d$ui$2d$react$2f$utils$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ARROW_DOWN"] ? 'bl' : event.key === (rtl ? __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$floating$2d$ui$2d$react$2f$utils$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ARROW_LEFT"] : __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$floating$2d$ui$2d$react$2f$utils$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ARROW_RIGHT"]) ? 'tr' : 'tl'),
                    stopEvent: true
                })];
                if (index != null) {
                    indexRef.current = index;
                    onNavigate(event);
                }
                if (orientation === 'both') {
                    return;
                }
            }
            if (isMainOrientationKey(event.key, orientation)) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$floating$2d$ui$2d$react$2f$utils$2f$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stopEvent"])(event);
                // Reset the index if no item is focused.
                if (open && !virtual && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$floating$2d$ui$2d$react$2f$utils$2f$element$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["activeElement"])(event.currentTarget.ownerDocument) === event.currentTarget) {
                    indexRef.current = isMainOrientationToEndKey(event.key, orientation, rtl) ? minIndex : maxIndex;
                    onNavigate(event);
                    return;
                }
                if (isMainOrientationToEndKey(event.key, orientation, rtl)) {
                    if (loopFocus) {
                        if (currentIndex >= maxIndex) {
                            if (allowEscape && currentIndex !== listRef.current.length) {
                                indexRef.current = -1;
                            } else {
                                // Give time for virtualizers to update the listRef.
                                forceSyncFocusRef.current = false;
                                indexRef.current = minIndex;
                            }
                        } else {
                            indexRef.current = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$floating$2d$ui$2d$react$2f$utils$2f$composite$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findNonDisabledListIndex"])(listRef, {
                                startingIndex: currentIndex,
                                disabledIndices
                            });
                        }
                    } else {
                        indexRef.current = Math.min(maxIndex, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$floating$2d$ui$2d$react$2f$utils$2f$composite$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findNonDisabledListIndex"])(listRef, {
                            startingIndex: currentIndex,
                            disabledIndices
                        }));
                    }
                } else if (loopFocus) {
                    if (currentIndex <= minIndex) {
                        if (allowEscape && currentIndex !== -1) {
                            indexRef.current = listRef.current.length;
                        } else {
                            // Give time for virtualizers to update the listRef.
                            forceSyncFocusRef.current = false;
                            indexRef.current = maxIndex;
                        }
                    } else {
                        indexRef.current = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$floating$2d$ui$2d$react$2f$utils$2f$composite$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findNonDisabledListIndex"])(listRef, {
                            startingIndex: currentIndex,
                            decrement: true,
                            disabledIndices
                        });
                    }
                } else {
                    indexRef.current = Math.max(minIndex, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$floating$2d$ui$2d$react$2f$utils$2f$composite$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findNonDisabledListIndex"])(listRef, {
                        startingIndex: currentIndex,
                        decrement: true,
                        disabledIndices
                    }));
                }
                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$floating$2d$ui$2d$react$2f$utils$2f$composite$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isIndexOutOfListBounds"])(listRef, indexRef.current)) {
                    indexRef.current = -1;
                }
                onNavigate(event);
            }
        }
    }["useListNavigation.useStableCallback[commonOnKeyDown]"]);
    const ariaActiveDescendantProp = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "useListNavigation.useMemo[ariaActiveDescendantProp]": ()=>{
            return virtual && open && hasActiveIndex && {
                'aria-activedescendant': `${id}-${activeIndex}`
            };
        }
    }["useListNavigation.useMemo[ariaActiveDescendantProp]"], [
        virtual,
        open,
        hasActiveIndex,
        id,
        activeIndex
    ]);
    const floating = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "useListNavigation.useMemo[floating]": ()=>{
            return {
                'aria-orientation': orientation === 'both' ? undefined : orientation,
                ...!typeableComboboxReference ? ariaActiveDescendantProp : {},
                onKeyDown (event) {
                    // Close submenu on Shift+Tab
                    if (event.key === 'Tab' && event.shiftKey && open && !virtual) {
                        // If the event originated from within a nested element (e.g., a Dialog opened from
                        // within the menu), don't close the menu. The nested element has its own focus
                        // management and should handle the Tab key.
                        const target = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$floating$2d$ui$2d$react$2f$utils$2f$element$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getTarget"])(event.nativeEvent);
                        if (target && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$floating$2d$ui$2d$react$2f$utils$2f$element$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["contains"])(floatingFocusElementRef.current, target)) {
                            return;
                        }
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$floating$2d$ui$2d$react$2f$utils$2f$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stopEvent"])(event);
                        store.setOpen(false, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$createBaseUIEventDetails$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createChangeEventDetails"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$reason$2d$parts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__REASONS$3e$__["REASONS"].focusOut, event.nativeEvent));
                        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isHTMLElement"])(domReferenceElement)) {
                            domReferenceElement.focus();
                        }
                        return;
                    }
                    commonOnKeyDown(event);
                },
                onPointerMove () {
                    isPointerModalityRef.current = true;
                }
            };
        }
    }["useListNavigation.useMemo[floating]"], [
        ariaActiveDescendantProp,
        commonOnKeyDown,
        floatingFocusElementRef,
        orientation,
        typeableComboboxReference,
        store,
        open,
        virtual,
        domReferenceElement
    ]);
    const trigger = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "useListNavigation.useMemo[trigger]": ()=>{
            function checkVirtualMouse(event) {
                if (focusItemOnOpen === 'auto' && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$floating$2d$ui$2d$react$2f$utils$2f$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isVirtualClick"])(event.nativeEvent)) {
                    focusItemOnOpenRef.current = !virtual;
                }
            }
            function checkVirtualPointer(event) {
                // `pointerdown` fires first, reset the state then perform the checks.
                focusItemOnOpenRef.current = focusItemOnOpen;
                if (focusItemOnOpen === 'auto' && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$floating$2d$ui$2d$react$2f$utils$2f$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isVirtualPointerEvent"])(event.nativeEvent)) {
                    focusItemOnOpenRef.current = true;
                }
            }
            return {
                onKeyDown (event) {
                    // non-reactive open state (to prevent re-creation of the handler)
                    const currentOpen = store.select('open');
                    isPointerModalityRef.current = false;
                    const isArrowKey = event.key.startsWith('Arrow');
                    const isParentCrossOpenKey = isCrossOrientationOpenKey(event.key, getParentOrientation(), rtl);
                    const isMainKey = isMainOrientationKey(event.key, orientation);
                    const isNavigationKey = (nested ? isParentCrossOpenKey : isMainKey) || event.key === 'Enter' || event.key.trim() === '';
                    if (virtual && currentOpen) {
                        return commonOnKeyDown(event);
                    }
                    // If a floating element should not open on arrow key down, avoid
                    // setting `activeIndex` while it's closed.
                    if (!currentOpen && !openOnArrowKeyDown && isArrowKey) {
                        return undefined;
                    }
                    if (isNavigationKey) {
                        const isParentMainKey = isMainOrientationKey(event.key, getParentOrientation());
                        keyRef.current = nested && isParentMainKey ? null : event.key;
                    }
                    if (nested) {
                        if (isParentCrossOpenKey) {
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$floating$2d$ui$2d$react$2f$utils$2f$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stopEvent"])(event);
                            if (currentOpen) {
                                indexRef.current = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$floating$2d$ui$2d$react$2f$utils$2f$composite$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getMinListIndex"])(listRef, disabledIndicesRef.current);
                                onNavigate(event);
                            } else {
                                store.setOpen(true, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$createBaseUIEventDetails$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createChangeEventDetails"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$reason$2d$parts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__REASONS$3e$__["REASONS"].listNavigation, event.nativeEvent, event.currentTarget));
                            }
                        }
                        return undefined;
                    }
                    if (isMainKey) {
                        if (selectedIndexRef.current != null) {
                            indexRef.current = selectedIndexRef.current;
                        }
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$floating$2d$ui$2d$react$2f$utils$2f$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stopEvent"])(event);
                        if (!currentOpen && openOnArrowKeyDown) {
                            store.setOpen(true, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$createBaseUIEventDetails$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createChangeEventDetails"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$reason$2d$parts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__REASONS$3e$__["REASONS"].listNavigation, event.nativeEvent, event.currentTarget));
                        } else {
                            commonOnKeyDown(event);
                        }
                        if (currentOpen) {
                            onNavigate(event);
                        }
                    }
                    return undefined;
                },
                onFocus (event) {
                    if (store.select('open') && !virtual) {
                        indexRef.current = -1;
                        onNavigate(event);
                    }
                },
                onPointerDown: checkVirtualPointer,
                onPointerEnter: checkVirtualPointer,
                onMouseDown: checkVirtualMouse,
                onClick: checkVirtualMouse
            };
        }
    }["useListNavigation.useMemo[trigger]"], [
        commonOnKeyDown,
        disabledIndicesRef,
        focusItemOnOpen,
        listRef,
        nested,
        onNavigate,
        store,
        openOnArrowKeyDown,
        orientation,
        getParentOrientation,
        rtl,
        selectedIndexRef,
        virtual
    ]);
    const reference = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "useListNavigation.useMemo[reference]": ()=>{
            return {
                ...ariaActiveDescendantProp,
                ...trigger
            };
        }
    }["useListNavigation.useMemo[reference]"], [
        ariaActiveDescendantProp,
        trigger
    ]);
    return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "useListNavigation.useMemo": ()=>enabled ? {
                reference,
                floating,
                item,
                trigger
            } : {}
    }["useListNavigation.useMemo"], [
        enabled,
        reference,
        floating,
        trigger,
        item
    ]);
}
}),
"[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/react/esm/floating-ui-react/hooks/useTypeahead.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useTypeahead",
    ()=>useTypeahead
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useStableCallback$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/utils/esm/useStableCallback.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useIsoLayoutEffect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/utils/esm/useIsoLayoutEffect.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useTimeout$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/utils/esm/useTimeout.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$floating$2d$ui$2d$react$2f$utils$2f$element$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/react/esm/floating-ui-react/utils/element.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$floating$2d$ui$2d$react$2f$utils$2f$composite$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/react/esm/floating-ui-react/utils/composite.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$floating$2d$ui$2d$react$2f$utils$2f$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/react/esm/floating-ui-react/utils/event.js [app-client] (ecmascript)");
'use client';
;
;
;
;
;
function useTypeahead(context, props) {
    const store = 'rootStore' in context ? context.rootStore : context;
    const dataRef = store.context.dataRef;
    const open = store.useState('open');
    const { listRef, elementsRef, activeIndex, onMatch: onMatchProp, onTypingChange, enabled = true, resetMs = 750, selectedIndex = null } = props;
    const timeout = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useTimeout$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTimeout"])();
    const stringRef = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"]('');
    const prevIndexRef = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](selectedIndex ?? activeIndex ?? -1);
    const matchIndexRef = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useIsoLayoutEffect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useIsoLayoutEffect"])({
        "useTypeahead.useIsoLayoutEffect": ()=>{
            if (!open && selectedIndex !== null) {
                return;
            }
            timeout.clear();
            matchIndexRef.current = null;
            if (stringRef.current !== '') {
                stringRef.current = '';
            }
        }
    }["useTypeahead.useIsoLayoutEffect"], [
        open,
        selectedIndex,
        timeout
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useIsoLayoutEffect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useIsoLayoutEffect"])({
        "useTypeahead.useIsoLayoutEffect": ()=>{
            // Sync arrow key navigation but not typeahead navigation.
            if (open && stringRef.current === '') {
                prevIndexRef.current = selectedIndex ?? activeIndex ?? -1;
            }
        }
    }["useTypeahead.useIsoLayoutEffect"], [
        open,
        selectedIndex,
        activeIndex
    ]);
    const setTypingChange = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useStableCallback$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStableCallback"])({
        "useTypeahead.useStableCallback[setTypingChange]": (value)=>{
            if (value) {
                if (!dataRef.current.typing) {
                    dataRef.current.typing = value;
                    onTypingChange?.(value);
                }
            } else if (dataRef.current.typing) {
                dataRef.current.typing = value;
                onTypingChange?.(value);
            }
        }
    }["useTypeahead.useStableCallback[setTypingChange]"]);
    const onKeyDown = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useStableCallback$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStableCallback"])({
        "useTypeahead.useStableCallback[onKeyDown]": (event)=>{
            function isVisible(index) {
                const element = elementsRef?.current[index];
                return !element || (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$floating$2d$ui$2d$react$2f$utils$2f$composite$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isElementVisible"])(element);
            }
            function getMatchingIndex(list, string, startIndex = 0) {
                if (list.length === 0) {
                    return -1;
                }
                const normalizedStartIndex = (startIndex % list.length + list.length) % list.length;
                const lowerString = string.toLocaleLowerCase();
                for(let offset = 0; offset < list.length; offset += 1){
                    const index = (normalizedStartIndex + offset) % list.length;
                    const text = list[index];
                    if (!text?.toLocaleLowerCase().startsWith(lowerString) || !isVisible(index)) {
                        continue;
                    }
                    return index;
                }
                return -1;
            }
            const listContent = listRef.current;
            if (stringRef.current.length > 0 && event.key === ' ') {
                // Space should continue the in-progress typeahead session.
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$floating$2d$ui$2d$react$2f$utils$2f$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stopEvent"])(event);
                setTypingChange(true);
            }
            if (stringRef.current.length > 0 && stringRef.current[0] !== ' ') {
                if (getMatchingIndex(listContent, stringRef.current) === -1 && event.key !== ' ') {
                    setTypingChange(false);
                }
            }
            if (listContent == null || // Character key.
            event.key.length !== 1 || // Modifier key.
            event.ctrlKey || event.metaKey || event.altKey) {
                return;
            }
            if (open && event.key !== ' ') {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$floating$2d$ui$2d$react$2f$utils$2f$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stopEvent"])(event);
                setTypingChange(true);
            }
            // Capture whether this is a new typing session before mutating the string.
            const isNewSession = stringRef.current === '';
            if (isNewSession) {
                prevIndexRef.current = selectedIndex ?? activeIndex ?? -1;
            }
            // Bail out if the list contains a word like "llama" or "aaron". TODO:
            // allow it in this case, too.
            const allowRapidSuccessionOfFirstLetter = listContent.every({
                "useTypeahead.useStableCallback[onKeyDown].allowRapidSuccessionOfFirstLetter": (text)=>text ? text[0]?.toLocaleLowerCase() !== text[1]?.toLocaleLowerCase() : true
            }["useTypeahead.useStableCallback[onKeyDown].allowRapidSuccessionOfFirstLetter"]);
            // Allows the user to cycle through items that start with the same letter
            // in rapid succession.
            if (allowRapidSuccessionOfFirstLetter && stringRef.current === event.key) {
                stringRef.current = '';
                prevIndexRef.current = matchIndexRef.current;
            }
            stringRef.current += event.key;
            timeout.start(resetMs, {
                "useTypeahead.useStableCallback[onKeyDown]": ()=>{
                    stringRef.current = '';
                    prevIndexRef.current = matchIndexRef.current;
                    setTypingChange(false);
                }
            }["useTypeahead.useStableCallback[onKeyDown]"]);
            // Compute the starting index for this search.
            // If this is a new typing session (string is empty), base it on the current
            // selection/active item; otherwise continue from the last matched index.
            const prevIndex = isNewSession ? selectedIndex ?? activeIndex ?? -1 : prevIndexRef.current;
            const startIndex = (prevIndex ?? 0) + 1;
            const index = getMatchingIndex(listContent, stringRef.current, startIndex);
            if (index !== -1) {
                onMatchProp?.(index);
                matchIndexRef.current = index;
            } else if (event.key !== ' ') {
                stringRef.current = '';
                setTypingChange(false);
            }
        }
    }["useTypeahead.useStableCallback[onKeyDown]"]);
    const onBlur = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useStableCallback$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStableCallback"])({
        "useTypeahead.useStableCallback[onBlur]": (event)=>{
            const next = event.relatedTarget;
            const currentDomReferenceElement = store.select('domReferenceElement');
            const currentFloatingElement = store.select('floatingElement');
            const withinReference = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$floating$2d$ui$2d$react$2f$utils$2f$element$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["contains"])(currentDomReferenceElement, next);
            const withinFloating = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$floating$2d$ui$2d$react$2f$utils$2f$element$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["contains"])(currentFloatingElement, next);
            // Keep the session if focus moves within the composite (reference <-> floating).
            if (withinReference || withinFloating) {
                return;
            }
            // End the current typing session when focus leaves the composite entirely.
            timeout.clear();
            stringRef.current = '';
            prevIndexRef.current = matchIndexRef.current;
            setTypingChange(false);
        }
    }["useTypeahead.useStableCallback[onBlur]"]);
    const reference = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "useTypeahead.useMemo[reference]": ()=>({
                onKeyDown,
                onBlur
            })
    }["useTypeahead.useMemo[reference]"], [
        onKeyDown,
        onBlur
    ]);
    const floating = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "useTypeahead.useMemo[floating]": ()=>{
            return {
                onKeyDown,
                onBlur
            };
        }
    }["useTypeahead.useMemo[floating]"], [
        onKeyDown,
        onBlur
    ]);
    return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "useTypeahead.useMemo": ()=>enabled ? {
                reference,
                floating
            } : {}
    }["useTypeahead.useMemo"], [
        enabled,
        reference,
        floating
    ]);
}
}),
"[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/react/esm/select/root/SelectRootContext.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SelectFloatingContext",
    ()=>SelectFloatingContext,
    "SelectRootContext",
    ()=>SelectRootContext,
    "useSelectFloatingContext",
    ()=>useSelectFloatingContext,
    "useSelectRootContext",
    ()=>useSelectRootContext
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
'use client';
;
;
const SelectRootContext = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"](null);
if ("TURBOPACK compile-time truthy", 1) SelectRootContext.displayName = "SelectRootContext";
const SelectFloatingContext = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"](null);
if ("TURBOPACK compile-time truthy", 1) SelectFloatingContext.displayName = "SelectFloatingContext";
function useSelectRootContext() {
    const context = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"](SelectRootContext);
    if (context === null) {
        throw new Error(("TURBOPACK compile-time truthy", 1) ? 'Base UI: SelectRootContext is missing. Select parts must be placed within <Select.Root>.' : "TURBOPACK unreachable");
    }
    return context;
}
function useSelectFloatingContext() {
    const context = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"](SelectFloatingContext);
    if (context === null) {
        throw new Error(("TURBOPACK compile-time truthy", 1) ? 'Base UI: SelectFloatingContext is missing. Select parts must be placed within <Select.Root>.' : "TURBOPACK unreachable");
    }
    return context;
}
}),
"[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/react/esm/utils/itemEquality.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "compareItemEquality",
    ()=>compareItemEquality,
    "defaultItemEquality",
    ()=>defaultItemEquality,
    "findItemIndex",
    ()=>findItemIndex,
    "removeItem",
    ()=>removeItem,
    "selectedValueIncludes",
    ()=>selectedValueIncludes
]);
const defaultItemEquality = (itemValue, selectedValue)=>Object.is(itemValue, selectedValue);
function compareItemEquality(itemValue, selectedValue, comparer) {
    if (itemValue == null || selectedValue == null) {
        return Object.is(itemValue, selectedValue);
    }
    return comparer(itemValue, selectedValue);
}
function selectedValueIncludes(selectedValues, itemValue, comparer) {
    if (!selectedValues || selectedValues.length === 0) {
        return false;
    }
    return selectedValues.some((selectedValue)=>{
        if (selectedValue === undefined) {
            return false;
        }
        return compareItemEquality(itemValue, selectedValue, comparer);
    });
}
function findItemIndex(itemValues, selectedValue, comparer) {
    if (!itemValues || itemValues.length === 0) {
        return -1;
    }
    return itemValues.findIndex((itemValue)=>{
        if (itemValue === undefined) {
            return false;
        }
        return compareItemEquality(itemValue, selectedValue, comparer);
    });
}
function removeItem(selectedValues, itemValue, comparer) {
    return selectedValues.filter((selectedValue)=>!compareItemEquality(itemValue, selectedValue, comparer));
}
}),
"[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/react/esm/utils/serializeValue.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "serializeValue",
    ()=>serializeValue
]);
function serializeValue(value) {
    if (value == null) {
        return '';
    }
    if (typeof value === 'string') {
        return value;
    }
    try {
        return JSON.stringify(value);
    } catch  {
        return String(value);
    }
}
}),
"[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/react/esm/utils/resolveValueLabel.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "hasNullItemLabel",
    ()=>hasNullItemLabel,
    "isGroupedItems",
    ()=>isGroupedItems,
    "resolveMultipleLabels",
    ()=>resolveMultipleLabels,
    "resolveSelectedLabel",
    ()=>resolveSelectedLabel,
    "stringifyAsLabel",
    ()=>stringifyAsLabel,
    "stringifyAsValue",
    ()=>stringifyAsValue
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$serializeValue$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/react/esm/utils/serializeValue.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
'use client';
;
;
;
function isGroupedItems(items) {
    return items != null && items.length > 0 && typeof items[0] === 'object' && items[0] != null && 'items' in items[0];
}
function hasNullItemLabel(items) {
    if (!Array.isArray(items)) {
        return items != null && 'null' in items;
    }
    const arrayItems = items;
    if (isGroupedItems(arrayItems)) {
        for (const group of arrayItems){
            for (const item of group.items){
                if (item && item.value == null && item.label != null) {
                    return true;
                }
            }
        }
        return false;
    }
    for (const item of arrayItems){
        if (item && item.value == null && item.label != null) {
            return true;
        }
    }
    return false;
}
function stringifyAsLabel(item, itemToStringLabel) {
    if (itemToStringLabel && item != null) {
        return itemToStringLabel(item) ?? '';
    }
    if (item && typeof item === 'object') {
        if ('label' in item && item.label != null) {
            return String(item.label);
        }
        if ('value' in item) {
            return String(item.value);
        }
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$serializeValue$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serializeValue"])(item);
}
function stringifyAsValue(item, itemToStringValue) {
    if (itemToStringValue && item != null) {
        return itemToStringValue(item) ?? '';
    }
    if (item && typeof item === 'object' && 'value' in item && 'label' in item) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$serializeValue$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serializeValue"])(item.value);
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$serializeValue$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serializeValue"])(item);
}
function resolveSelectedLabel(value, items, itemToStringLabel) {
    function fallback() {
        return stringifyAsLabel(value, itemToStringLabel);
    }
    if (itemToStringLabel && value != null) {
        return itemToStringLabel(value);
    }
    // Custom object with explicit label takes precedence
    if (value && typeof value === 'object' && 'label' in value && value.label != null) {
        return value.label;
    }
    // Items provided as plain record map
    if (items && !Array.isArray(items)) {
        return items[value] ?? fallback();
    }
    // Items provided as array (flat or grouped)
    if (Array.isArray(items)) {
        const arrayItems = items;
        const flatItems = isGroupedItems(arrayItems) ? arrayItems.flatMap((group)=>group.items) : arrayItems;
        if (value == null || typeof value !== 'object') {
            const match = flatItems.find((item)=>item.value === value);
            if (match && match.label != null) {
                return match.label;
            }
            return fallback();
        }
        // Object without explicit label: try matching by its `value` property
        if ('value' in value) {
            const match = flatItems.find((item)=>item && item.value === value.value);
            if (match && match.label != null) {
                return match.label;
            }
        }
    }
    return fallback();
}
function resolveMultipleLabels(values, items, itemToStringLabel) {
    return values.reduce((acc, value, index)=>{
        if (index > 0) {
            acc.push(', ');
        }
        acc.push(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: resolveSelectedLabel(value, items, itemToStringLabel)
        }, index));
        return acc;
    }, []);
}
}),
"[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/react/esm/select/store.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "selectors",
    ()=>selectors
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$store$2f$createSelector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/utils/esm/store/createSelector.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$itemEquality$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/react/esm/utils/itemEquality.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$resolveValueLabel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/react/esm/utils/resolveValueLabel.js [app-client] (ecmascript)");
;
;
;
const selectors = {
    id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$store$2f$createSelector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createSelector"])((state)=>state.id),
    labelId: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$store$2f$createSelector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createSelector"])((state)=>state.labelId),
    modal: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$store$2f$createSelector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createSelector"])((state)=>state.modal),
    multiple: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$store$2f$createSelector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createSelector"])((state)=>state.multiple),
    items: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$store$2f$createSelector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createSelector"])((state)=>state.items),
    itemToStringLabel: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$store$2f$createSelector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createSelector"])((state)=>state.itemToStringLabel),
    itemToStringValue: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$store$2f$createSelector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createSelector"])((state)=>state.itemToStringValue),
    isItemEqualToValue: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$store$2f$createSelector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createSelector"])((state)=>state.isItemEqualToValue),
    value: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$store$2f$createSelector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createSelector"])((state)=>state.value),
    hasSelectedValue: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$store$2f$createSelector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createSelector"])((state)=>{
        const { value, multiple, itemToStringValue } = state;
        if (value == null) {
            return false;
        }
        if (multiple && Array.isArray(value)) {
            return value.length > 0;
        }
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$resolveValueLabel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stringifyAsValue"])(value, itemToStringValue) !== '';
    }),
    hasNullItemLabel: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$store$2f$createSelector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createSelector"])((state, enabled)=>{
        return enabled ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$resolveValueLabel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hasNullItemLabel"])(state.items) : false;
    }),
    open: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$store$2f$createSelector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createSelector"])((state)=>state.open),
    mounted: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$store$2f$createSelector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createSelector"])((state)=>state.mounted),
    forceMount: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$store$2f$createSelector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createSelector"])((state)=>state.forceMount),
    transitionStatus: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$store$2f$createSelector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createSelector"])((state)=>state.transitionStatus),
    openMethod: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$store$2f$createSelector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createSelector"])((state)=>state.openMethod),
    activeIndex: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$store$2f$createSelector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createSelector"])((state)=>state.activeIndex),
    selectedIndex: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$store$2f$createSelector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createSelector"])((state)=>state.selectedIndex),
    isActive: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$store$2f$createSelector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createSelector"])((state, index)=>state.activeIndex === index),
    isSelected: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$store$2f$createSelector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createSelector"])((state, index, itemValue)=>{
        const comparer = state.isItemEqualToValue;
        const storeValue = state.value;
        if (state.multiple) {
            return Array.isArray(storeValue) && storeValue.some((selectedItem)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$itemEquality$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["compareItemEquality"])(itemValue, selectedItem, comparer));
        }
        // `selectedIndex` is only updated after the items mount for the first time,
        // the value check avoids a re-render for the initially selected item.
        if (state.selectedIndex === index && state.selectedIndex !== null) {
            return true;
        }
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$itemEquality$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["compareItemEquality"])(itemValue, storeValue, comparer);
    }),
    isSelectedByFocus: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$store$2f$createSelector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createSelector"])((state, index)=>{
        return state.selectedIndex === index;
    }),
    popupProps: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$store$2f$createSelector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createSelector"])((state)=>state.popupProps),
    triggerProps: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$store$2f$createSelector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createSelector"])((state)=>state.triggerProps),
    triggerElement: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$store$2f$createSelector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createSelector"])((state)=>state.triggerElement),
    positionerElement: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$store$2f$createSelector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createSelector"])((state)=>state.positionerElement),
    listElement: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$store$2f$createSelector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createSelector"])((state)=>state.listElement),
    scrollUpArrowVisible: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$store$2f$createSelector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createSelector"])((state)=>state.scrollUpArrowVisible),
    scrollDownArrowVisible: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$store$2f$createSelector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createSelector"])((state)=>state.scrollDownArrowVisible),
    hasScrollArrows: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$store$2f$createSelector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createSelector"])((state)=>state.hasScrollArrows)
};
}),
"[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/react/esm/select/root/SelectRoot.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SelectRoot",
    ()=>SelectRoot
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$visuallyHidden$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/utils/esm/visuallyHidden.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useMergedRefs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/utils/esm/useMergedRefs.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useRefWithInit$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/utils/esm/useRefWithInit.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useOnFirstRender$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/utils/esm/useOnFirstRender.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useControlled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/utils/esm/useControlled.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useIsoLayoutEffect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/utils/esm/useIsoLayoutEffect.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useStableCallback$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/utils/esm/useStableCallback.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useValueAsRef$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/utils/esm/useValueAsRef.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$store$2f$useStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/utils/esm/store/useStore.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$store$2f$Store$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/utils/esm/store/Store.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$floating$2d$ui$2d$react$2f$hooks$2f$useClick$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/react/esm/floating-ui-react/hooks/useClick.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$floating$2d$ui$2d$react$2f$hooks$2f$useDismiss$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/react/esm/floating-ui-react/hooks/useDismiss.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$floating$2d$ui$2d$react$2f$hooks$2f$useFloatingRootContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/react/esm/floating-ui-react/hooks/useFloatingRootContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$floating$2d$ui$2d$react$2f$hooks$2f$useInteractions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/react/esm/floating-ui-react/hooks/useInteractions.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$floating$2d$ui$2d$react$2f$hooks$2f$useListNavigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/react/esm/floating-ui-react/hooks/useListNavigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$floating$2d$ui$2d$react$2f$hooks$2f$useTypeahead$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/react/esm/floating-ui-react/hooks/useTypeahead.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$select$2f$root$2f$SelectRootContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/react/esm/select/root/SelectRootContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$field$2f$root$2f$FieldRootContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/react/esm/field/root/FieldRootContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$labelable$2d$provider$2f$useLabelableId$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/react/esm/labelable-provider/useLabelableId.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$useTransitionStatus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/react/esm/utils/useTransitionStatus.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$select$2f$store$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/react/esm/select/store.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$createBaseUIEventDetails$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/react/esm/utils/createBaseUIEventDetails.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$reason$2d$parts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__REASONS$3e$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/react/esm/utils/reason-parts.js [app-client] (ecmascript) <export * as REASONS>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$useOpenChangeComplete$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/react/esm/utils/useOpenChangeComplete.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$form$2f$FormContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/react/esm/form/FormContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$field$2f$useField$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/react/esm/field/useField.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$resolveValueLabel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/react/esm/utils/resolveValueLabel.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$empty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/utils/esm/empty.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$itemEquality$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/react/esm/utils/itemEquality.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$useValueChanged$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/react/esm/utils/useValueChanged.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$useOpenInteractionType$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/react/esm/utils/useOpenInteractionType.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$merge$2d$props$2f$mergeProps$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/react/esm/merge-props/mergeProps.js [app-client] (ecmascript)");
/**
 * Groups all parts of the select.
 * Doesn’t render its own HTML element.
 *
 * Documentation: [Base UI Select](https://base-ui.com/react/components/select)
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
'use client';
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
function SelectRoot(props) {
    const { id, value: valueProp, defaultValue = null, onValueChange, open: openProp, defaultOpen = false, onOpenChange, name: nameProp, autoComplete, disabled: disabledProp = false, readOnly = false, required = false, modal = true, actionsRef, inputRef, onOpenChangeComplete, items, multiple = false, itemToStringLabel, itemToStringValue, isItemEqualToValue = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$itemEquality$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defaultItemEquality"], highlightItemOnHover = true, children } = props;
    const { clearErrors } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$form$2f$FormContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFormContext"])();
    const { setDirty, setTouched, setFocused, shouldValidateOnChange, validityData, setFilled, name: fieldName, disabled: fieldDisabled, validation, validationMode } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$field$2f$root$2f$FieldRootContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFieldRootContext"])();
    const generatedId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$labelable$2d$provider$2f$useLabelableId$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLabelableId"])({
        id
    });
    const disabled = fieldDisabled || disabledProp;
    const name = fieldName ?? nameProp;
    const [value, setValueUnwrapped] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useControlled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useControlled"])({
        controlled: valueProp,
        default: multiple ? defaultValue ?? __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$empty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EMPTY_ARRAY"] : defaultValue,
        name: 'Select',
        state: 'value'
    });
    const [open, setOpenUnwrapped] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useControlled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useControlled"])({
        controlled: openProp,
        default: defaultOpen,
        name: 'Select',
        state: 'open'
    });
    const listRef = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"]([]);
    const labelsRef = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"]([]);
    const popupRef = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](null);
    const scrollHandlerRef = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](null);
    const scrollArrowsMountedCountRef = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](0);
    const valueRef = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](null);
    const valuesRef = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"]([]);
    const typingRef = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](false);
    const keyboardActiveRef = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](false);
    const selectedItemTextRef = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](null);
    const selectionRef = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"]({
        allowSelectedMouseUp: false,
        allowUnselectedMouseUp: false
    });
    const alignItemWithTriggerActiveRef = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](false);
    const { mounted, setMounted, transitionStatus } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$useTransitionStatus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransitionStatus"])(open);
    const { openMethod, triggerProps: interactionTypeProps } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$useOpenInteractionType$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useOpenInteractionType"])(open);
    const store = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useRefWithInit$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRefWithInit"])({
        "SelectRoot.useRefWithInit": ()=>new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$store$2f$Store$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Store"]({
                id: generatedId,
                labelId: undefined,
                modal,
                multiple,
                itemToStringLabel,
                itemToStringValue,
                isItemEqualToValue,
                value,
                open,
                mounted,
                transitionStatus,
                items,
                forceMount: false,
                openMethod: null,
                activeIndex: null,
                selectedIndex: null,
                popupProps: {},
                triggerProps: {},
                triggerElement: null,
                positionerElement: null,
                listElement: null,
                scrollUpArrowVisible: false,
                scrollDownArrowVisible: false,
                hasScrollArrows: false
            })
    }["SelectRoot.useRefWithInit"]).current;
    const activeIndex = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$store$2f$useStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"])(store, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$select$2f$store$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["selectors"].activeIndex);
    const selectedIndex = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$store$2f$useStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"])(store, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$select$2f$store$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["selectors"].selectedIndex);
    const triggerElement = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$store$2f$useStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"])(store, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$select$2f$store$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["selectors"].triggerElement);
    const positionerElement = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$store$2f$useStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"])(store, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$select$2f$store$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["selectors"].positionerElement);
    const serializedValue = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "SelectRoot.useMemo[serializedValue]": ()=>{
            if (multiple && Array.isArray(value) && value.length === 0) {
                return '';
            }
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$resolveValueLabel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stringifyAsValue"])(value, itemToStringValue);
        }
    }["SelectRoot.useMemo[serializedValue]"], [
        multiple,
        value,
        itemToStringValue
    ]);
    const fieldStringValue = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "SelectRoot.useMemo[fieldStringValue]": ()=>{
            if (multiple && Array.isArray(value)) {
                return value.map({
                    "SelectRoot.useMemo[fieldStringValue]": (currentValue)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$resolveValueLabel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stringifyAsValue"])(currentValue, itemToStringValue)
                }["SelectRoot.useMemo[fieldStringValue]"]);
            }
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$resolveValueLabel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stringifyAsValue"])(value, itemToStringValue);
        }
    }["SelectRoot.useMemo[fieldStringValue]"], [
        multiple,
        value,
        itemToStringValue
    ]);
    const controlRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useValueAsRef$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useValueAsRef"])(store.state.triggerElement);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$field$2f$useField$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useField"])({
        id: generatedId,
        commit: validation.commit,
        value,
        controlRef,
        name,
        getValue: {
            "SelectRoot.useField": ()=>fieldStringValue
        }["SelectRoot.useField"]
    });
    const initialValueRef = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](value);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useIsoLayoutEffect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useIsoLayoutEffect"])({
        "SelectRoot.useIsoLayoutEffect": ()=>{
            // Ensure the values and labels are registered for programmatic value changes.
            if (value !== initialValueRef.current) {
                store.set('forceMount', true);
            }
        }
    }["SelectRoot.useIsoLayoutEffect"], [
        store,
        value
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useIsoLayoutEffect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useIsoLayoutEffect"])({
        "SelectRoot.useIsoLayoutEffect": ()=>{
            setFilled(multiple ? Array.isArray(value) && value.length > 0 : value != null);
        }
    }["SelectRoot.useIsoLayoutEffect"], [
        multiple,
        value,
        setFilled
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useIsoLayoutEffect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useIsoLayoutEffect"])(function syncSelectedIndex() {
        if (open) {
            return;
        }
        const registry = valuesRef.current;
        if (multiple) {
            const currentValue = Array.isArray(value) ? value : [];
            if (currentValue.length === 0) {
                store.set('selectedIndex', null);
                return;
            }
            const lastValue = currentValue[currentValue.length - 1];
            const lastIndex = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$itemEquality$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findItemIndex"])(registry, lastValue, isItemEqualToValue);
            store.set('selectedIndex', lastIndex === -1 ? null : lastIndex);
            return;
        }
        const index = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$itemEquality$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findItemIndex"])(registry, value, isItemEqualToValue);
        store.set('selectedIndex', index === -1 ? null : index);
    }, [
        multiple,
        open,
        value,
        valuesRef,
        isItemEqualToValue,
        store
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$useValueChanged$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useValueChanged"])(value, {
        "SelectRoot.useValueChanged": ()=>{
            clearErrors(name);
            setDirty(value !== validityData.initialValue);
            if (shouldValidateOnChange()) {
                validation.commit(value);
            } else {
                validation.commit(value, true);
            }
        }
    }["SelectRoot.useValueChanged"]);
    const setOpen = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useStableCallback$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStableCallback"])({
        "SelectRoot.useStableCallback[setOpen]": (nextOpen, eventDetails)=>{
            onOpenChange?.(nextOpen, eventDetails);
            if (eventDetails.isCanceled) {
                return;
            }
            setOpenUnwrapped(nextOpen);
            if (!nextOpen && (eventDetails.reason === __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$reason$2d$parts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__REASONS$3e$__["REASONS"].focusOut || eventDetails.reason === __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$reason$2d$parts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__REASONS$3e$__["REASONS"].outsidePress)) {
                setTouched(true);
                setFocused(false);
                if (validationMode === 'onBlur') {
                    validation.commit(value);
                }
            }
            // The active index will sync to the last selected index on the next open.
            // Workaround `enableFocusInside` in Floating UI setting `tabindex=0` of a non-highlighted
            // option upon close when tabbing out due to `keepMounted=true`:
            // https://github.com/floating-ui/floating-ui/pull/3004/files#diff-962a7439cdeb09ea98d4b622a45d517bce07ad8c3f866e089bda05f4b0bbd875R194-R199
            // This otherwise causes options to retain `tabindex=0` incorrectly when the popup is closed
            // when tabbing outside.
            if (!nextOpen && store.state.activeIndex !== null) {
                const activeOption = listRef.current[store.state.activeIndex];
                // Wait for Floating UI's focus effect to have fired
                queueMicrotask({
                    "SelectRoot.useStableCallback[setOpen]": ()=>{
                        activeOption?.setAttribute('tabindex', '-1');
                    }
                }["SelectRoot.useStableCallback[setOpen]"]);
            }
        }
    }["SelectRoot.useStableCallback[setOpen]"]);
    const handleUnmount = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useStableCallback$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStableCallback"])({
        "SelectRoot.useStableCallback[handleUnmount]": ()=>{
            setMounted(false);
            store.set('activeIndex', null);
            onOpenChangeComplete?.(false);
        }
    }["SelectRoot.useStableCallback[handleUnmount]"]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$useOpenChangeComplete$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useOpenChangeComplete"])({
        enabled: !actionsRef,
        open,
        ref: popupRef,
        onComplete () {
            if (!open) {
                handleUnmount();
            }
        }
    });
    __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useImperativeHandle"](actionsRef, {
        "SelectRoot.useImperativeHandle": ()=>({
                unmount: handleUnmount
            })
    }["SelectRoot.useImperativeHandle"], [
        handleUnmount
    ]);
    const setValue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useStableCallback$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStableCallback"])({
        "SelectRoot.useStableCallback[setValue]": (nextValue, eventDetails)=>{
            onValueChange?.(nextValue, eventDetails);
            if (eventDetails.isCanceled) {
                return;
            }
            setValueUnwrapped(nextValue);
        }
    }["SelectRoot.useStableCallback[setValue]"]);
    const handleScrollArrowVisibility = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useStableCallback$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStableCallback"])({
        "SelectRoot.useStableCallback[handleScrollArrowVisibility]": ()=>{
            const scroller = store.state.listElement || popupRef.current;
            if (!scroller) {
                return;
            }
            const viewportTop = scroller.scrollTop;
            const viewportBottom = scroller.scrollTop + scroller.clientHeight;
            const shouldShowUp = viewportTop > 1;
            const shouldShowDown = viewportBottom < scroller.scrollHeight - 1;
            if (store.state.scrollUpArrowVisible !== shouldShowUp) {
                store.set('scrollUpArrowVisible', shouldShowUp);
            }
            if (store.state.scrollDownArrowVisible !== shouldShowDown) {
                store.set('scrollDownArrowVisible', shouldShowDown);
            }
        }
    }["SelectRoot.useStableCallback[handleScrollArrowVisibility]"]);
    const floatingContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$floating$2d$ui$2d$react$2f$hooks$2f$useFloatingRootContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFloatingRootContext"])({
        open,
        onOpenChange: setOpen,
        elements: {
            reference: triggerElement,
            floating: positionerElement
        }
    });
    const click = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$floating$2d$ui$2d$react$2f$hooks$2f$useClick$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useClick"])(floatingContext, {
        enabled: !readOnly && !disabled,
        event: 'mousedown'
    });
    const dismiss = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$floating$2d$ui$2d$react$2f$hooks$2f$useDismiss$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDismiss"])(floatingContext, {
        bubbles: false
    });
    const listNavigation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$floating$2d$ui$2d$react$2f$hooks$2f$useListNavigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useListNavigation"])(floatingContext, {
        enabled: !readOnly && !disabled,
        listRef,
        activeIndex,
        selectedIndex,
        disabledIndices: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$empty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EMPTY_ARRAY"],
        onNavigate (nextActiveIndex) {
            // Retain the highlight while transitioning out.
            if (nextActiveIndex === null && !open) {
                return;
            }
            store.set('activeIndex', nextActiveIndex);
        },
        // Implement our own listeners since `onPointerLeave` on each option fires while scrolling with
        // the `alignItemWithTrigger=true`, causing a performance issue on Chrome.
        focusItemOnHover: false
    });
    const typeahead = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$floating$2d$ui$2d$react$2f$hooks$2f$useTypeahead$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTypeahead"])(floatingContext, {
        enabled: !readOnly && !disabled && (open || !multiple),
        listRef: labelsRef,
        activeIndex,
        selectedIndex,
        onMatch (index) {
            if (open) {
                store.set('activeIndex', index);
            } else {
                setValue(valuesRef.current[index], (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$createBaseUIEventDetails$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createChangeEventDetails"])('none'));
            }
        },
        onTypingChange (typing) {
            typingRef.current = typing;
        }
    });
    const { getReferenceProps, getFloatingProps, getItemProps } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$floating$2d$ui$2d$react$2f$hooks$2f$useInteractions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInteractions"])([
        click,
        dismiss,
        listNavigation,
        typeahead
    ]);
    const mergedTriggerProps = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "SelectRoot.useMemo[mergedTriggerProps]": ()=>{
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$merge$2d$props$2f$mergeProps$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mergeProps"])(getReferenceProps(), interactionTypeProps, generatedId ? {
                id: generatedId
            } : __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$empty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EMPTY_OBJECT"]);
        }
    }["SelectRoot.useMemo[mergedTriggerProps]"], [
        getReferenceProps,
        interactionTypeProps,
        generatedId
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useOnFirstRender$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useOnFirstRender"])({
        "SelectRoot.useOnFirstRender": ()=>{
            store.update({
                popupProps: getFloatingProps(),
                triggerProps: mergedTriggerProps
            });
        }
    }["SelectRoot.useOnFirstRender"]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useIsoLayoutEffect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useIsoLayoutEffect"])({
        "SelectRoot.useIsoLayoutEffect": ()=>{
            store.update({
                id: generatedId,
                modal,
                multiple,
                value,
                open,
                mounted,
                transitionStatus,
                popupProps: getFloatingProps(),
                triggerProps: mergedTriggerProps,
                items,
                itemToStringLabel,
                itemToStringValue,
                isItemEqualToValue,
                openMethod
            });
        }
    }["SelectRoot.useIsoLayoutEffect"], [
        store,
        generatedId,
        modal,
        multiple,
        value,
        open,
        mounted,
        transitionStatus,
        getFloatingProps,
        mergedTriggerProps,
        items,
        itemToStringLabel,
        itemToStringValue,
        isItemEqualToValue,
        openMethod
    ]);
    const contextValue = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "SelectRoot.useMemo[contextValue]": ()=>({
                store,
                name,
                required,
                disabled,
                readOnly,
                multiple,
                itemToStringLabel,
                itemToStringValue,
                highlightItemOnHover,
                setValue,
                setOpen,
                listRef,
                popupRef,
                scrollHandlerRef,
                handleScrollArrowVisibility,
                scrollArrowsMountedCountRef,
                getItemProps,
                events: floatingContext.context.events,
                valueRef,
                valuesRef,
                labelsRef,
                typingRef,
                selectionRef,
                selectedItemTextRef,
                validation,
                onOpenChangeComplete,
                keyboardActiveRef,
                alignItemWithTriggerActiveRef,
                initialValueRef
            })
    }["SelectRoot.useMemo[contextValue]"], [
        store,
        name,
        required,
        disabled,
        readOnly,
        multiple,
        itemToStringLabel,
        itemToStringValue,
        highlightItemOnHover,
        setValue,
        setOpen,
        getItemProps,
        floatingContext.context.events,
        validation,
        onOpenChangeComplete,
        handleScrollArrowVisibility
    ]);
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useMergedRefs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMergedRefs"])(inputRef, validation.inputRef);
    const hasMultipleSelection = multiple && Array.isArray(value) && value.length > 0;
    const hiddenInputName = multiple ? undefined : name;
    const hiddenInputs = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "SelectRoot.useMemo[hiddenInputs]": ()=>{
            if (!multiple || !Array.isArray(value) || !name) {
                return null;
            }
            return value.map({
                "SelectRoot.useMemo[hiddenInputs]": (v)=>{
                    const currentSerializedValue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$resolveValueLabel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stringifyAsValue"])(v, itemToStringValue);
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("input", {
                        type: "hidden",
                        name: name,
                        value: currentSerializedValue
                    }, currentSerializedValue);
                }
            }["SelectRoot.useMemo[hiddenInputs]"]);
        }
    }["SelectRoot.useMemo[hiddenInputs]"], [
        multiple,
        value,
        name,
        itemToStringValue
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$select$2f$root$2f$SelectRootContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectRootContext"].Provider, {
        value: contextValue,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$select$2f$root$2f$SelectRootContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectFloatingContext"].Provider, {
            value: floatingContext,
            children: [
                children,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("input", {
                    ...validation.getInputValidationProps({
                        onFocus () {
                            // Move focus to the trigger element when the hidden input is focused.
                            store.state.triggerElement?.focus({
                                // Supported in Chrome from 144 (January 2026)
                                // @ts-expect-error - focusVisible is not yet in the lib.dom.d.ts
                                focusVisible: true
                            });
                        },
                        // Handle browser autofill.
                        onChange (event) {
                            // Workaround for https://github.com/facebook/react/issues/9023
                            if (event.nativeEvent.defaultPrevented) {
                                return;
                            }
                            const nextValue = event.target.value;
                            const details = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$createBaseUIEventDetails$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createChangeEventDetails"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$reason$2d$parts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__REASONS$3e$__["REASONS"].none, event.nativeEvent);
                            function handleChange() {
                                if (multiple) {
                                    // Browser autofill only writes a single scalar value.
                                    return;
                                }
                                // Handle single selection: match against registered values using serialization
                                const matchingValue = valuesRef.current.find((v)=>{
                                    const candidate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$resolveValueLabel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stringifyAsValue"])(v, itemToStringValue);
                                    if (candidate.toLowerCase() === nextValue.toLowerCase()) {
                                        return true;
                                    }
                                    return false;
                                });
                                if (matchingValue != null) {
                                    setDirty(matchingValue !== validityData.initialValue);
                                    setValue(matchingValue, details);
                                    if (shouldValidateOnChange()) {
                                        validation.commit(matchingValue);
                                    }
                                }
                            }
                            store.set('forceMount', true);
                            queueMicrotask(handleChange);
                        }
                    }),
                    id: generatedId && hiddenInputName == null ? `${generatedId}-hidden-input` : undefined,
                    name: hiddenInputName,
                    autoComplete: autoComplete,
                    value: serializedValue,
                    disabled: disabled,
                    required: required && !hasMultipleSelection,
                    readOnly: readOnly,
                    ref: ref,
                    style: name ? __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$visuallyHidden$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["visuallyHiddenInput"] : __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$visuallyHidden$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["visuallyHidden"],
                    tabIndex: -1,
                    "aria-hidden": true
                }),
                hiddenInputs
            ]
        })
    });
}
}),
"[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/react/esm/utils/resolveAriaLabelledBy.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getDefaultLabelId",
    ()=>getDefaultLabelId,
    "resolveAriaLabelledBy",
    ()=>resolveAriaLabelledBy
]);
'use client';
function getDefaultLabelId(id) {
    return id == null ? undefined : `${id}-label`;
}
function resolveAriaLabelledBy(fieldLabelId, localLabelId) {
    return fieldLabelId ?? localLabelId;
}
}),
"[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/react/esm/select/label/SelectLabel.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SelectLabel",
    ()=>SelectLabel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$store$2f$useStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/utils/esm/store/useStore.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$useRenderElement$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/react/esm/utils/useRenderElement.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$field$2f$root$2f$FieldRootContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/react/esm/field/root/FieldRootContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$field$2f$utils$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/react/esm/field/utils/constants.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$labelable$2d$provider$2f$useLabel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/react/esm/labelable-provider/useLabel.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$resolveAriaLabelledBy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/react/esm/utils/resolveAriaLabelledBy.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$select$2f$root$2f$SelectRootContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/react/esm/select/root/SelectRootContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$select$2f$store$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/react/esm/select/store.js [app-client] (ecmascript)");
'use client';
;
;
;
;
;
;
;
;
;
const SelectLabel = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](function SelectLabel(componentProps, forwardedRef) {
    const { render, className, ...elementProps } = componentProps;
    // Keep label id derived from the root and ignore runtime `id` overrides from untyped consumers.
    const elementPropsWithoutId = elementProps;
    delete elementPropsWithoutId.id;
    const fieldRootContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$field$2f$root$2f$FieldRootContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFieldRootContext"])();
    const { store } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$select$2f$root$2f$SelectRootContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSelectRootContext"])();
    const triggerElement = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$store$2f$useStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"])(store, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$select$2f$store$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["selectors"].triggerElement);
    const rootId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$store$2f$useStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"])(store, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$select$2f$store$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["selectors"].id);
    const defaultLabelId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$resolveAriaLabelledBy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDefaultLabelId"])(rootId);
    const labelProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$labelable$2d$provider$2f$useLabel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLabel"])({
        id: defaultLabelId,
        fallbackControlId: triggerElement?.id ?? rootId,
        setLabelId (nextLabelId) {
            store.set('labelId', nextLabelId);
        }
    });
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$useRenderElement$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRenderElement"])('div', componentProps, {
        ref: forwardedRef,
        state: fieldRootContext.state,
        props: [
            labelProps,
            elementProps
        ],
        stateAttributesMapping: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$field$2f$utils$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fieldValidityMapping"]
    });
});
if ("TURBOPACK compile-time truthy", 1) SelectLabel.displayName = "SelectLabel";
}),
"[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/react/esm/utils/getPseudoElementBounds.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getPseudoElementBounds",
    ()=>getPseudoElementBounds
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
function getPseudoElementBounds(element) {
    const elementRect = element.getBoundingClientRect();
    // Avoid "Not implemented: window.getComputedStyle(elt, pseudoElt)"
    if ("TURBOPACK compile-time truthy", 1) {
        return elementRect;
    }
    //TURBOPACK unreachable
    ;
    const beforeStyles = undefined;
    const afterStyles = undefined;
    const hasPseudoElements = undefined;
    // Get dimensions of pseudo-elements
    const beforeWidth = undefined;
    const beforeHeight = undefined;
    const afterWidth = undefined;
    const afterHeight = undefined;
    // Calculate max dimensions including pseudo-elements
    const totalWidth = undefined;
    const totalHeight = undefined;
    // Calculate the differences to extend the bounds
    const widthDiff = undefined;
    const heightDiff = undefined;
}
}),
"[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/react/esm/select/trigger/SelectTrigger.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SelectTrigger",
    ()=>SelectTrigger
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$owner$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/utils/esm/owner.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useTimeout$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/utils/esm/useTimeout.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useStableCallback$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/utils/esm/useStableCallback.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useMergedRefs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/utils/esm/useMergedRefs.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useValueAsRef$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/utils/esm/useValueAsRef.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$store$2f$useStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/utils/esm/store/useStore.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$select$2f$root$2f$SelectRootContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/react/esm/select/root/SelectRootContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$field$2f$root$2f$FieldRootContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/react/esm/field/root/FieldRootContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$labelable$2d$provider$2f$LabelableContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/react/esm/labelable-provider/LabelableContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$popupStateMapping$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/react/esm/utils/popupStateMapping.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$field$2f$utils$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/react/esm/field/utils/constants.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$useRenderElement$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/react/esm/utils/useRenderElement.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$select$2f$store$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/react/esm/select/store.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$getPseudoElementBounds$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/react/esm/utils/getPseudoElementBounds.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$floating$2d$ui$2d$react$2f$utils$2f$element$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/react/esm/floating-ui-react/utils/element.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$merge$2d$props$2f$mergeProps$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/react/esm/merge-props/mergeProps.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$use$2d$button$2f$useButton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/react/esm/use-button/useButton.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$createBaseUIEventDetails$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/react/esm/utils/createBaseUIEventDetails.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$reason$2d$parts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__REASONS$3e$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/react/esm/utils/reason-parts.js [app-client] (ecmascript) <export * as REASONS>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$labelable$2d$provider$2f$useLabelableId$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/react/esm/labelable-provider/useLabelableId.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$resolveAriaLabelledBy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/react/esm/utils/resolveAriaLabelledBy.js [app-client] (ecmascript)");
'use client';
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
const BOUNDARY_OFFSET = 2;
const SELECTED_DELAY = 400;
const UNSELECTED_DELAY = 200;
const stateAttributesMapping = {
    ...__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$popupStateMapping$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pressableTriggerOpenStateMapping"],
    ...__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$field$2f$utils$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fieldValidityMapping"],
    value: ()=>null
};
const SelectTrigger = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](function SelectTrigger(componentProps, forwardedRef) {
    const { render, className, id: idProp, disabled: disabledProp = false, nativeButton = true, ...elementProps } = componentProps;
    const { setTouched, setFocused, validationMode, state: fieldState, disabled: fieldDisabled } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$field$2f$root$2f$FieldRootContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFieldRootContext"])();
    const { labelId: fieldLabelId } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$labelable$2d$provider$2f$LabelableContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLabelableContext"])();
    const { store, setOpen, selectionRef, validation, readOnly, required, alignItemWithTriggerActiveRef, disabled: selectDisabled, keyboardActiveRef } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$select$2f$root$2f$SelectRootContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSelectRootContext"])();
    const disabled = fieldDisabled || selectDisabled || disabledProp;
    const open = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$store$2f$useStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"])(store, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$select$2f$store$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["selectors"].open);
    const value = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$store$2f$useStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"])(store, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$select$2f$store$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["selectors"].value);
    const triggerProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$store$2f$useStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"])(store, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$select$2f$store$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["selectors"].triggerProps);
    const positionerElement = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$store$2f$useStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"])(store, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$select$2f$store$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["selectors"].positionerElement);
    const listElement = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$store$2f$useStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"])(store, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$select$2f$store$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["selectors"].listElement);
    const rootId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$store$2f$useStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"])(store, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$select$2f$store$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["selectors"].id);
    const selectLabelId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$store$2f$useStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"])(store, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$select$2f$store$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["selectors"].labelId);
    const hasSelectedValue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$store$2f$useStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"])(store, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$select$2f$store$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["selectors"].hasSelectedValue);
    const shouldCheckNullItemLabel = !hasSelectedValue && open;
    const hasNullItemLabel = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$store$2f$useStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"])(store, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$select$2f$store$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["selectors"].hasNullItemLabel, shouldCheckNullItemLabel);
    const id = idProp ?? rootId;
    const ariaLabelledBy = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$resolveAriaLabelledBy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveAriaLabelledBy"])(fieldLabelId, selectLabelId);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$labelable$2d$provider$2f$useLabelableId$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLabelableId"])({
        id
    });
    const positionerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useValueAsRef$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useValueAsRef"])(positionerElement);
    const triggerRef = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](null);
    const { getButtonProps, buttonRef } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$use$2d$button$2f$useButton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useButton"])({
        disabled,
        native: nativeButton
    });
    const setTriggerElement = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useStableCallback$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStableCallback"])({
        "SelectTrigger.SelectTrigger.useStableCallback[setTriggerElement]": (element)=>{
            store.set('triggerElement', element);
        }
    }["SelectTrigger.SelectTrigger.useStableCallback[setTriggerElement]"]);
    const mergedRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useMergedRefs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMergedRefs"])(forwardedRef, triggerRef, buttonRef, setTriggerElement);
    const timeoutFocus = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useTimeout$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTimeout"])();
    const timeoutMouseDown = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useTimeout$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTimeout"])();
    const selectedDelayTimeout = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useTimeout$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTimeout"])();
    const unselectedDelayTimeout = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useTimeout$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTimeout"])();
    __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "SelectTrigger.SelectTrigger.useEffect": ()=>{
            if (open) {
                const hasSelectedItemInList = hasSelectedValue || hasNullItemLabel;
                const shouldDelayUnselectedMouseUpLonger = !hasSelectedItemInList;
                // When there is no selected item in the list (placeholder-only selects), a mousedown
                // on the trigger followed by a quick mouseup over the first option can accidentally select
                // within 200ms. Delay unselected mouseup to match the safer 400ms window.
                if (shouldDelayUnselectedMouseUpLonger) {
                    selectedDelayTimeout.start(SELECTED_DELAY, {
                        "SelectTrigger.SelectTrigger.useEffect": ()=>{
                            selectionRef.current.allowUnselectedMouseUp = true;
                            selectionRef.current.allowSelectedMouseUp = true;
                        }
                    }["SelectTrigger.SelectTrigger.useEffect"]);
                } else {
                    // mousedown -> move to unselected item -> mouseup should not select within 200ms.
                    unselectedDelayTimeout.start(UNSELECTED_DELAY, {
                        "SelectTrigger.SelectTrigger.useEffect": ()=>{
                            selectionRef.current.allowUnselectedMouseUp = true;
                            // mousedown -> mouseup on selected item should not select within 400ms.
                            selectedDelayTimeout.start(UNSELECTED_DELAY, {
                                "SelectTrigger.SelectTrigger.useEffect": ()=>{
                                    selectionRef.current.allowSelectedMouseUp = true;
                                }
                            }["SelectTrigger.SelectTrigger.useEffect"]);
                        }
                    }["SelectTrigger.SelectTrigger.useEffect"]);
                }
                return ({
                    "SelectTrigger.SelectTrigger.useEffect": ()=>{
                        selectedDelayTimeout.clear();
                        unselectedDelayTimeout.clear();
                    }
                })["SelectTrigger.SelectTrigger.useEffect"];
            }
            selectionRef.current = {
                allowSelectedMouseUp: false,
                allowUnselectedMouseUp: false
            };
            timeoutMouseDown.clear();
            return undefined;
        }
    }["SelectTrigger.SelectTrigger.useEffect"], [
        open,
        hasSelectedValue,
        hasNullItemLabel,
        selectionRef,
        timeoutMouseDown,
        selectedDelayTimeout,
        unselectedDelayTimeout
    ]);
    const ariaControlsId = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "SelectTrigger.SelectTrigger.useMemo[ariaControlsId]": ()=>{
            return listElement?.id ?? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$floating$2d$ui$2d$react$2f$utils$2f$element$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getFloatingFocusElement"])(positionerElement)?.id;
        }
    }["SelectTrigger.SelectTrigger.useMemo[ariaControlsId]"], [
        listElement,
        positionerElement
    ]);
    const props = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$merge$2d$props$2f$mergeProps$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mergeProps"])(triggerProps, {
        id,
        role: 'combobox',
        'aria-expanded': open ? 'true' : 'false',
        'aria-haspopup': 'listbox',
        'aria-controls': open ? ariaControlsId : undefined,
        'aria-labelledby': ariaLabelledBy,
        'aria-readonly': readOnly || undefined,
        'aria-required': required || undefined,
        tabIndex: disabled ? -1 : 0,
        ref: mergedRef,
        onFocus (event) {
            setFocused(true);
            // The popup element shouldn't obscure the focused trigger.
            if (open && alignItemWithTriggerActiveRef.current) {
                setOpen(false, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$createBaseUIEventDetails$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createChangeEventDetails"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$reason$2d$parts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__REASONS$3e$__["REASONS"].none, event.nativeEvent));
            }
            // Saves a re-render on initial click: `forceMount === true` mounts
            // the items before `open === true`. We could sync those cycles better
            // without a timeout, but this is enough for now.
            //
            // XXX: might be causing `act()` warnings.
            timeoutFocus.start(0, ()=>{
                store.set('forceMount', true);
            });
        },
        onBlur (event) {
            // If focus is moving into the popup, don't count it as a blur.
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$floating$2d$ui$2d$react$2f$utils$2f$element$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["contains"])(positionerElement, event.relatedTarget)) {
                return;
            }
            setTouched(true);
            setFocused(false);
            if (validationMode === 'onBlur') {
                validation.commit(value);
            }
        },
        onPointerMove () {
            keyboardActiveRef.current = false;
        },
        onKeyDown () {
            keyboardActiveRef.current = true;
        },
        onMouseDown (event) {
            if (open) {
                return;
            }
            const doc = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$owner$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ownerDocument"])(event.currentTarget);
            function handleMouseUp(mouseEvent) {
                if (!triggerRef.current) {
                    return;
                }
                const mouseUpTarget = mouseEvent.target;
                // Early return if clicked on trigger element or its children
                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$floating$2d$ui$2d$react$2f$utils$2f$element$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["contains"])(triggerRef.current, mouseUpTarget) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$floating$2d$ui$2d$react$2f$utils$2f$element$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["contains"])(positionerRef.current, mouseUpTarget) || mouseUpTarget === triggerRef.current) {
                    return;
                }
                const bounds = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$getPseudoElementBounds$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPseudoElementBounds"])(triggerRef.current);
                if (mouseEvent.clientX >= bounds.left - BOUNDARY_OFFSET && mouseEvent.clientX <= bounds.right + BOUNDARY_OFFSET && mouseEvent.clientY >= bounds.top - BOUNDARY_OFFSET && mouseEvent.clientY <= bounds.bottom + BOUNDARY_OFFSET) {
                    return;
                }
                setOpen(false, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$createBaseUIEventDetails$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createChangeEventDetails"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$reason$2d$parts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__REASONS$3e$__["REASONS"].cancelOpen, mouseEvent));
            }
            // Firefox can fire this upon mousedown
            timeoutMouseDown.start(0, ()=>{
                doc.addEventListener('mouseup', handleMouseUp, {
                    once: true
                });
            });
        }
    }, validation.getValidationProps, elementProps, getButtonProps);
    // ensure nested useButton does not overwrite the combobox role:
    // <Toolbar.Button render={<Select.Trigger />} />
    props.role = 'combobox';
    const state = {
        ...fieldState,
        open,
        disabled,
        value,
        readOnly,
        placeholder: !hasSelectedValue
    };
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$useRenderElement$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRenderElement"])('button', componentProps, {
        ref: [
            forwardedRef,
            triggerRef
        ],
        state,
        stateAttributesMapping,
        props
    });
});
if ("TURBOPACK compile-time truthy", 1) SelectTrigger.displayName = "SelectTrigger";
}),
"[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/react/esm/select/value/SelectValue.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SelectValue",
    ()=>SelectValue
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$store$2f$useStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/utils/esm/store/useStore.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$useRenderElement$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/react/esm/utils/useRenderElement.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$select$2f$root$2f$SelectRootContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/react/esm/select/root/SelectRootContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$resolveValueLabel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/react/esm/utils/resolveValueLabel.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$select$2f$store$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/react/esm/select/store.js [app-client] (ecmascript)");
'use client';
;
;
;
;
;
;
const stateAttributesMapping = {
    value: ()=>null
};
const SelectValue = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](function SelectValue(componentProps, forwardedRef) {
    const { className, render, children: childrenProp, placeholder, ...elementProps } = componentProps;
    const { store, valueRef } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$select$2f$root$2f$SelectRootContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSelectRootContext"])();
    const value = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$store$2f$useStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"])(store, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$select$2f$store$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["selectors"].value);
    const items = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$store$2f$useStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"])(store, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$select$2f$store$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["selectors"].items);
    const itemToStringLabel = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$store$2f$useStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"])(store, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$select$2f$store$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["selectors"].itemToStringLabel);
    const hasSelectedValue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$store$2f$useStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"])(store, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$select$2f$store$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["selectors"].hasSelectedValue);
    const shouldCheckNullItemLabel = !hasSelectedValue && placeholder != null && childrenProp == null;
    const hasNullLabel = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$store$2f$useStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"])(store, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$select$2f$store$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["selectors"].hasNullItemLabel, shouldCheckNullItemLabel);
    const state = {
        value,
        placeholder: !hasSelectedValue
    };
    let children = null;
    if (typeof childrenProp === 'function') {
        children = childrenProp(value);
    } else if (childrenProp != null) {
        children = childrenProp;
    } else if (!hasSelectedValue && placeholder != null && !hasNullLabel) {
        children = placeholder;
    } else if (Array.isArray(value)) {
        children = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$resolveValueLabel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveMultipleLabels"])(value, items, itemToStringLabel);
    } else {
        children = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$resolveValueLabel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveSelectedLabel"])(value, items, itemToStringLabel);
    }
    const element = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$useRenderElement$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRenderElement"])('span', componentProps, {
        state,
        ref: [
            forwardedRef,
            valueRef
        ],
        props: [
            {
                children
            },
            elementProps
        ],
        stateAttributesMapping
    });
    return element;
});
if ("TURBOPACK compile-time truthy", 1) SelectValue.displayName = "SelectValue";
}),
"[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/react/esm/select/icon/SelectIcon.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SelectIcon",
    ()=>SelectIcon
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$store$2f$useStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/utils/esm/store/useStore.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$useRenderElement$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/react/esm/utils/useRenderElement.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$select$2f$root$2f$SelectRootContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/react/esm/select/root/SelectRootContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$popupStateMapping$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/react/esm/utils/popupStateMapping.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$select$2f$store$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/react/esm/select/store.js [app-client] (ecmascript)");
'use client';
;
;
;
;
;
;
const SelectIcon = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](function SelectIcon(componentProps, forwardedRef) {
    const { className, render, ...elementProps } = componentProps;
    const { store } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$select$2f$root$2f$SelectRootContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSelectRootContext"])();
    const open = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$store$2f$useStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"])(store, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$select$2f$store$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["selectors"].open);
    const state = {
        open
    };
    const element = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$useRenderElement$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRenderElement"])('span', componentProps, {
        state,
        ref: forwardedRef,
        props: [
            {
                'aria-hidden': true,
                children: '▼'
            },
            elementProps
        ],
        stateAttributesMapping: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$popupStateMapping$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["triggerOpenStateMapping"]
    });
    return element;
});
if ("TURBOPACK compile-time truthy", 1) SelectIcon.displayName = "SelectIcon";
}),
"[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/react/esm/select/portal/SelectPortalContext.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SelectPortalContext",
    ()=>SelectPortalContext,
    "useSelectPortalContext",
    ()=>useSelectPortalContext
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
'use client';
;
;
const SelectPortalContext = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"](undefined);
if ("TURBOPACK compile-time truthy", 1) SelectPortalContext.displayName = "SelectPortalContext";
function useSelectPortalContext() {
    const value = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"](SelectPortalContext);
    if (value === undefined) {
        throw new Error(("TURBOPACK compile-time truthy", 1) ? 'Base UI: <Select.Portal> is missing.' : "TURBOPACK unreachable");
    }
    return value;
}
}),
"[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/react/esm/select/portal/SelectPortal.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SelectPortal",
    ()=>SelectPortal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$store$2f$useStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/utils/esm/store/useStore.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$floating$2d$ui$2d$react$2f$components$2f$FloatingPortal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/react/esm/floating-ui-react/components/FloatingPortal.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$select$2f$portal$2f$SelectPortalContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/react/esm/select/portal/SelectPortalContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$select$2f$root$2f$SelectRootContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/react/esm/select/root/SelectRootContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$select$2f$store$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/react/esm/select/store.js [app-client] (ecmascript)");
/**
 * A portal element that moves the popup to a different part of the DOM.
 * By default, the portal element is appended to `<body>`.
 * Renders a `<div>` element.
 *
 * Documentation: [Base UI Select](https://base-ui.com/react/components/select)
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
'use client';
;
;
;
;
;
;
;
const SelectPortal = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](function SelectPortal(portalProps, forwardedRef) {
    const { store } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$select$2f$root$2f$SelectRootContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSelectRootContext"])();
    const mounted = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$store$2f$useStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"])(store, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$select$2f$store$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["selectors"].mounted);
    const forceMount = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$store$2f$useStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"])(store, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$select$2f$store$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["selectors"].forceMount);
    const shouldRender = mounted || forceMount;
    if (!shouldRender) {
        return null;
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$select$2f$portal$2f$SelectPortalContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectPortalContext"].Provider, {
        value: true,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$floating$2d$ui$2d$react$2f$components$2f$FloatingPortal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FloatingPortal"], {
            ref: forwardedRef,
            ...portalProps
        })
    });
});
if ("TURBOPACK compile-time truthy", 1) SelectPortal.displayName = "SelectPortal";
}),
"[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/react/esm/select/backdrop/SelectBackdrop.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SelectBackdrop",
    ()=>SelectBackdrop
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$store$2f$useStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/utils/esm/store/useStore.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$select$2f$root$2f$SelectRootContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/react/esm/select/root/SelectRootContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$popupStateMapping$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/react/esm/utils/popupStateMapping.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$stateAttributesMapping$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/react/esm/utils/stateAttributesMapping.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$useRenderElement$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/react/esm/utils/useRenderElement.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$select$2f$store$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/react/esm/select/store.js [app-client] (ecmascript)");
'use client';
;
;
;
;
;
;
;
const stateAttributesMapping = {
    ...__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$popupStateMapping$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["popupStateMapping"],
    ...__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$stateAttributesMapping$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transitionStatusMapping"]
};
const SelectBackdrop = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](function SelectBackdrop(componentProps, forwardedRef) {
    const { className, render, ...elementProps } = componentProps;
    const { store } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$select$2f$root$2f$SelectRootContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSelectRootContext"])();
    const open = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$store$2f$useStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"])(store, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$select$2f$store$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["selectors"].open);
    const mounted = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$store$2f$useStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"])(store, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$select$2f$store$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["selectors"].mounted);
    const transitionStatus = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$store$2f$useStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"])(store, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$select$2f$store$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["selectors"].transitionStatus);
    const state = {
        open,
        transitionStatus
    };
    const element = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$useRenderElement$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRenderElement"])('div', componentProps, {
        state,
        ref: forwardedRef,
        props: [
            {
                role: 'presentation',
                hidden: !mounted,
                style: {
                    userSelect: 'none',
                    WebkitUserSelect: 'none'
                }
            },
            elementProps
        ],
        stateAttributesMapping
    });
    return element;
});
if ("TURBOPACK compile-time truthy", 1) SelectBackdrop.displayName = "SelectBackdrop";
}),
"[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/react/esm/select/positioner/SelectPositionerContext.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SelectPositionerContext",
    ()=>SelectPositionerContext,
    "useSelectPositionerContext",
    ()=>useSelectPositionerContext
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
'use client';
;
;
const SelectPositionerContext = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"](undefined);
if ("TURBOPACK compile-time truthy", 1) SelectPositionerContext.displayName = "SelectPositionerContext";
function useSelectPositionerContext() {
    const context = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"](SelectPositionerContext);
    if (!context) {
        throw new Error(("TURBOPACK compile-time truthy", 1) ? 'Base UI: SelectPositionerContext is missing. SelectPositioner parts must be placed within <Select.Positioner>.' : "TURBOPACK unreachable");
    }
    return context;
}
}),
"[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/react/esm/select/popup/utils.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LIST_FUNCTIONAL_STYLES",
    ()=>LIST_FUNCTIONAL_STYLES,
    "clearStyles",
    ()=>clearStyles
]);
function clearStyles(element, originalStyles) {
    if (element) {
        Object.assign(element.style, originalStyles);
    }
}
const LIST_FUNCTIONAL_STYLES = {
    position: 'relative',
    maxHeight: '100%',
    overflowX: 'hidden',
    overflowY: 'auto'
};
}),
"[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/react/esm/select/positioner/SelectPositioner.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SelectPositioner",
    ()=>SelectPositioner
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$inertValue$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/utils/esm/inertValue.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useIsoLayoutEffect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/utils/esm/useIsoLayoutEffect.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useScrollLock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/utils/esm/useScrollLock.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useStableCallback$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/utils/esm/useStableCallback.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$store$2f$useStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/utils/esm/store/useStore.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$select$2f$root$2f$SelectRootContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/react/esm/select/root/SelectRootContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$composite$2f$list$2f$CompositeList$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/react/esm/composite/list/CompositeList.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$popupStateMapping$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/react/esm/utils/popupStateMapping.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$useAnchorPositioning$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/react/esm/utils/useAnchorPositioning.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$select$2f$positioner$2f$SelectPositionerContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/react/esm/select/positioner/SelectPositionerContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$InternalBackdrop$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/react/esm/utils/InternalBackdrop.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$useRenderElement$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/react/esm/utils/useRenderElement.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/react/esm/utils/constants.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$getDisabledMountTransitionStyles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/react/esm/utils/getDisabledMountTransitionStyles.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$select$2f$popup$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/react/esm/select/popup/utils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$select$2f$store$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/react/esm/select/store.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$createBaseUIEventDetails$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/react/esm/utils/createBaseUIEventDetails.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$reason$2d$parts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__REASONS$3e$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/react/esm/utils/reason-parts.js [app-client] (ecmascript) <export * as REASONS>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$itemEquality$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/react/esm/utils/itemEquality.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
'use client';
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
const FIXED = {
    position: 'fixed'
};
const SelectPositioner = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](function SelectPositioner(componentProps, forwardedRef) {
    const { anchor, positionMethod = 'absolute', className, render, side = 'bottom', align = 'center', sideOffset = 0, alignOffset = 0, collisionBoundary = 'clipping-ancestors', collisionPadding, arrowPadding = 5, sticky = false, disableAnchorTracking, alignItemWithTrigger = true, collisionAvoidance = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["DROPDOWN_COLLISION_AVOIDANCE"], ...elementProps } = componentProps;
    const { store, listRef, labelsRef, alignItemWithTriggerActiveRef, selectedItemTextRef, valuesRef, initialValueRef, popupRef, setValue } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$select$2f$root$2f$SelectRootContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSelectRootContext"])();
    const floatingRootContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$select$2f$root$2f$SelectRootContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSelectFloatingContext"])();
    const open = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$store$2f$useStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"])(store, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$select$2f$store$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["selectors"].open);
    const mounted = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$store$2f$useStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"])(store, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$select$2f$store$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["selectors"].mounted);
    const modal = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$store$2f$useStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"])(store, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$select$2f$store$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["selectors"].modal);
    const value = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$store$2f$useStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"])(store, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$select$2f$store$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["selectors"].value);
    const openMethod = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$store$2f$useStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"])(store, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$select$2f$store$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["selectors"].openMethod);
    const positionerElement = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$store$2f$useStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"])(store, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$select$2f$store$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["selectors"].positionerElement);
    const triggerElement = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$store$2f$useStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"])(store, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$select$2f$store$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["selectors"].triggerElement);
    const isItemEqualToValue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$store$2f$useStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"])(store, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$select$2f$store$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["selectors"].isItemEqualToValue);
    const transitionStatus = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$store$2f$useStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"])(store, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$select$2f$store$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["selectors"].transitionStatus);
    const scrollUpArrowRef = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](null);
    const scrollDownArrowRef = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](null);
    const [controlledAlignItemWithTrigger, setControlledAlignItemWithTrigger] = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](alignItemWithTrigger);
    const alignItemWithTriggerActive = mounted && controlledAlignItemWithTrigger && openMethod !== 'touch';
    if (!mounted && controlledAlignItemWithTrigger !== alignItemWithTrigger) {
        setControlledAlignItemWithTrigger(alignItemWithTrigger);
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useIsoLayoutEffect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useIsoLayoutEffect"])({
        "SelectPositioner.SelectPositioner.useIsoLayoutEffect": ()=>{
            if (!mounted) {
                if (__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$select$2f$store$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["selectors"].scrollUpArrowVisible(store.state)) {
                    store.set('scrollUpArrowVisible', false);
                }
                if (__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$select$2f$store$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["selectors"].scrollDownArrowVisible(store.state)) {
                    store.set('scrollDownArrowVisible', false);
                }
            }
        }
    }["SelectPositioner.SelectPositioner.useIsoLayoutEffect"], [
        store,
        mounted
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useImperativeHandle"](alignItemWithTriggerActiveRef, {
        "SelectPositioner.SelectPositioner.useImperativeHandle": ()=>alignItemWithTriggerActive
    }["SelectPositioner.SelectPositioner.useImperativeHandle"]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useScrollLock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScrollLock"])((alignItemWithTriggerActive || modal) && open && openMethod !== 'touch', triggerElement);
    const positioning = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$useAnchorPositioning$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAnchorPositioning"])({
        anchor,
        floatingRootContext,
        positionMethod,
        mounted,
        side,
        sideOffset,
        align,
        alignOffset,
        arrowPadding,
        collisionBoundary,
        collisionPadding,
        sticky,
        disableAnchorTracking: disableAnchorTracking ?? alignItemWithTriggerActive,
        collisionAvoidance,
        keepMounted: true
    });
    const renderedSide = alignItemWithTriggerActive ? 'none' : positioning.side;
    const positionerStyles = alignItemWithTriggerActive ? FIXED : positioning.positionerStyles;
    const defaultProps = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "SelectPositioner.SelectPositioner.useMemo[defaultProps]": ()=>{
            const hiddenStyles = {};
            if (!open) {
                hiddenStyles.pointerEvents = 'none';
            }
            return {
                role: 'presentation',
                hidden: !mounted,
                style: {
                    ...positionerStyles,
                    ...hiddenStyles
                }
            };
        }
    }["SelectPositioner.SelectPositioner.useMemo[defaultProps]"], [
        open,
        mounted,
        positionerStyles
    ]);
    const state = {
        open,
        side: renderedSide,
        align: positioning.align,
        anchorHidden: positioning.anchorHidden
    };
    const setPositionerElement = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useStableCallback$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStableCallback"])({
        "SelectPositioner.SelectPositioner.useStableCallback[setPositionerElement]": (element)=>{
            store.set('positionerElement', element);
        }
    }["SelectPositioner.SelectPositioner.useStableCallback[setPositionerElement]"]);
    const element = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$useRenderElement$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRenderElement"])('div', componentProps, {
        ref: [
            forwardedRef,
            setPositionerElement
        ],
        state,
        stateAttributesMapping: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$popupStateMapping$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["popupStateMapping"],
        props: [
            defaultProps,
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$getDisabledMountTransitionStyles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDisabledMountTransitionStyles"])(transitionStatus),
            elementProps
        ]
    });
    const prevMapSizeRef = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](0);
    const onMapChange = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useStableCallback$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStableCallback"])({
        "SelectPositioner.SelectPositioner.useStableCallback[onMapChange]": (map)=>{
            if (map.size === 0 && prevMapSizeRef.current === 0) {
                return;
            }
            if (valuesRef.current.length === 0) {
                return;
            }
            const prevSize = prevMapSizeRef.current;
            prevMapSizeRef.current = map.size;
            if (map.size === prevSize) {
                return;
            }
            const eventDetails = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$createBaseUIEventDetails$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createChangeEventDetails"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$reason$2d$parts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__REASONS$3e$__["REASONS"].none);
            if (prevSize !== 0 && !store.state.multiple && value !== null) {
                const selectedValueIndex = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$itemEquality$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findItemIndex"])(valuesRef.current, value, isItemEqualToValue);
                if (selectedValueIndex === -1) {
                    const initialSelectedValue = initialValueRef.current;
                    const hasInitial = initialSelectedValue != null && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$itemEquality$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findItemIndex"])(valuesRef.current, initialSelectedValue, isItemEqualToValue) !== -1;
                    const nextValue = hasInitial ? initialSelectedValue : null;
                    setValue(nextValue, eventDetails);
                    if (nextValue === null) {
                        store.set('selectedIndex', null);
                        selectedItemTextRef.current = null;
                    }
                }
            }
            if (prevSize !== 0 && store.state.multiple && Array.isArray(value)) {
                const hasVisibleItem = {
                    "SelectPositioner.SelectPositioner.useStableCallback[onMapChange].hasVisibleItem": (selectedItemValue)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$itemEquality$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findItemIndex"])(valuesRef.current, selectedItemValue, isItemEqualToValue) !== -1
                }["SelectPositioner.SelectPositioner.useStableCallback[onMapChange].hasVisibleItem"];
                const nextValue = value.filter({
                    "SelectPositioner.SelectPositioner.useStableCallback[onMapChange].nextValue": (selectedItemValue)=>hasVisibleItem(selectedItemValue)
                }["SelectPositioner.SelectPositioner.useStableCallback[onMapChange].nextValue"]);
                if (nextValue.length !== value.length || nextValue.some({
                    "SelectPositioner.SelectPositioner.useStableCallback[onMapChange]": (selectedItemValue)=>!(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$itemEquality$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["selectedValueIncludes"])(value, selectedItemValue, isItemEqualToValue)
                }["SelectPositioner.SelectPositioner.useStableCallback[onMapChange]"])) {
                    setValue(nextValue, eventDetails);
                    if (nextValue.length === 0) {
                        store.set('selectedIndex', null);
                        selectedItemTextRef.current = null;
                    }
                }
            }
            if (open && alignItemWithTriggerActive) {
                store.update({
                    scrollUpArrowVisible: false,
                    scrollDownArrowVisible: false
                });
                const stylesToClear = {
                    height: ''
                };
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$select$2f$popup$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clearStyles"])(positionerElement, stylesToClear);
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$select$2f$popup$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clearStyles"])(popupRef.current, stylesToClear);
            }
        }
    }["SelectPositioner.SelectPositioner.useStableCallback[onMapChange]"]);
    const contextValue = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "SelectPositioner.SelectPositioner.useMemo[contextValue]": ()=>({
                ...positioning,
                side: renderedSide,
                alignItemWithTriggerActive,
                setControlledAlignItemWithTrigger,
                scrollUpArrowRef,
                scrollDownArrowRef
            })
    }["SelectPositioner.SelectPositioner.useMemo[contextValue]"], [
        positioning,
        renderedSide,
        alignItemWithTriggerActive,
        setControlledAlignItemWithTrigger
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$composite$2f$list$2f$CompositeList$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CompositeList"], {
        elementsRef: listRef,
        labelsRef: labelsRef,
        onMapChange: onMapChange,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$select$2f$positioner$2f$SelectPositionerContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectPositionerContext"].Provider, {
            value: contextValue,
            children: [
                mounted && modal && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$InternalBackdrop$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InternalBackdrop"], {
                    inert: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$inertValue$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["inertValue"])(!open),
                    cutout: triggerElement
                }),
                element
            ]
        })
    });
});
if ("TURBOPACK compile-time truthy", 1) SelectPositioner.displayName = "SelectPositioner";
}),
"[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/react/esm/utils/styles.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "styleDisableScrollbar",
    ()=>styleDisableScrollbar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
;
const DISABLE_SCROLLBAR_CLASS_NAME = 'base-ui-disable-scrollbar';
const styleDisableScrollbar = {
    className: DISABLE_SCROLLBAR_CLASS_NAME,
    getElement (nonce) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("style", {
            nonce: nonce,
            href: DISABLE_SCROLLBAR_CLASS_NAME,
            precedence: "base-ui:low",
            children: `.${DISABLE_SCROLLBAR_CLASS_NAME}{scrollbar-width:none}.${DISABLE_SCROLLBAR_CLASS_NAME}::-webkit-scrollbar{display:none}`
        });
    }
};
if ("TURBOPACK compile-time truthy", 1) styleDisableScrollbar.getElement.displayName = "styleDisableScrollbar.getElement";
}),
"[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/react/esm/utils/clamp.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "clamp",
    ()=>clamp
]);
function clamp(val, min = Number.MIN_SAFE_INTEGER, max = Number.MAX_SAFE_INTEGER) {
    return Math.max(min, Math.min(val, max));
}
}),
"[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/react/esm/csp-provider/CSPContext.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CSPContext",
    ()=>CSPContext,
    "useCSPContext",
    ()=>useCSPContext
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
'use client';
;
const CSPContext = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"](undefined);
if ("TURBOPACK compile-time truthy", 1) CSPContext.displayName = "CSPContext";
const DEFAULT_CSP_CONTEXT_VALUE = {
    disableStyleElements: false
};
function useCSPContext() {
    return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"](CSPContext) ?? DEFAULT_CSP_CONTEXT_VALUE;
}
}),
"[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/react/esm/select/popup/SelectPopup.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SelectPopup",
    ()=>SelectPopup
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/next/dist/compiled/react-dom/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/@floating-ui/utils/dist/floating-ui.utils.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useTimeout$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/utils/esm/useTimeout.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$detectBrowser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/utils/esm/detectBrowser.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useStableCallback$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/utils/esm/useStableCallback.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$owner$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/utils/esm/owner.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__getWindow__as__ownerWindow$3e$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/@floating-ui/utils/dist/floating-ui.utils.dom.mjs [app-client] (ecmascript) <export getWindow as ownerWindow>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$isMouseWithinBounds$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/utils/esm/isMouseWithinBounds.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useIsoLayoutEffect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/utils/esm/useIsoLayoutEffect.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$store$2f$useStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/utils/esm/store/useStore.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useAnimationFrame$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/utils/esm/useAnimationFrame.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$floating$2d$ui$2d$react$2f$components$2f$FloatingFocusManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/react/esm/floating-ui-react/components/FloatingFocusManager.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$floating$2d$ui$2f$dom$2f$dist$2f$floating$2d$ui$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/@floating-ui/dom/dist/floating-ui.dom.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$select$2f$root$2f$SelectRootContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/react/esm/select/root/SelectRootContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$popupStateMapping$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/react/esm/utils/popupStateMapping.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$select$2f$positioner$2f$SelectPositionerContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/react/esm/select/positioner/SelectPositionerContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/react/esm/utils/styles.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$stateAttributesMapping$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/react/esm/utils/stateAttributesMapping.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$useOpenChangeComplete$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/react/esm/utils/useOpenChangeComplete.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$useRenderElement$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/react/esm/utils/useRenderElement.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$select$2f$store$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/react/esm/select/store.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$select$2f$popup$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/react/esm/select/popup/utils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$createBaseUIEventDetails$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/react/esm/utils/createBaseUIEventDetails.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$reason$2d$parts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__REASONS$3e$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/react/esm/utils/reason-parts.js [app-client] (ecmascript) <export * as REASONS>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$toolbar$2f$root$2f$ToolbarRootContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/react/esm/toolbar/root/ToolbarRootContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$composite$2f$composite$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/react/esm/composite/composite.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$getDisabledMountTransitionStyles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/react/esm/utils/getDisabledMountTransitionStyles.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$clamp$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/react/esm/utils/clamp.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$csp$2d$provider$2f$CSPContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/react/esm/csp-provider/CSPContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
'use client';
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
const SCROLL_EPS_PX = 1;
const stateAttributesMapping = {
    ...__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$popupStateMapping$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["popupStateMapping"],
    ...__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$stateAttributesMapping$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transitionStatusMapping"]
};
const SelectPopup = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](function SelectPopup(componentProps, forwardedRef) {
    const { render, className, finalFocus, ...elementProps } = componentProps;
    const { store, popupRef, onOpenChangeComplete, setOpen, valueRef, selectedItemTextRef, keyboardActiveRef, multiple, handleScrollArrowVisibility, scrollHandlerRef, highlightItemOnHover } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$select$2f$root$2f$SelectRootContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSelectRootContext"])();
    const { side, align, alignItemWithTriggerActive, setControlledAlignItemWithTrigger, scrollDownArrowRef, scrollUpArrowRef } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$select$2f$positioner$2f$SelectPositionerContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSelectPositionerContext"])();
    const insideToolbar = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$toolbar$2f$root$2f$ToolbarRootContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useToolbarRootContext"])(true) != null;
    const floatingRootContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$select$2f$root$2f$SelectRootContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSelectFloatingContext"])();
    const { nonce, disableStyleElements } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$csp$2d$provider$2f$CSPContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCSPContext"])();
    const highlightTimeout = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useTimeout$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTimeout"])();
    const id = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$store$2f$useStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"])(store, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$select$2f$store$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["selectors"].id);
    const open = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$store$2f$useStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"])(store, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$select$2f$store$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["selectors"].open);
    const mounted = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$store$2f$useStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"])(store, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$select$2f$store$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["selectors"].mounted);
    const popupProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$store$2f$useStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"])(store, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$select$2f$store$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["selectors"].popupProps);
    const transitionStatus = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$store$2f$useStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"])(store, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$select$2f$store$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["selectors"].transitionStatus);
    const triggerElement = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$store$2f$useStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"])(store, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$select$2f$store$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["selectors"].triggerElement);
    const positionerElement = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$store$2f$useStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"])(store, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$select$2f$store$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["selectors"].positionerElement);
    const listElement = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$store$2f$useStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"])(store, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$select$2f$store$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["selectors"].listElement);
    const initialHeightRef = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](0);
    const reachedMaxHeightRef = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](false);
    const maxHeightRef = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](0);
    const initialPlacedRef = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](false);
    const originalPositionerStylesRef = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"]({});
    const scrollArrowFrame = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useAnimationFrame$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAnimationFrame"])();
    const handleScroll = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useStableCallback$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStableCallback"])({
        "SelectPopup.SelectPopup.useStableCallback[handleScroll]": (scroller)=>{
            if (!positionerElement || !popupRef.current || !initialPlacedRef.current) {
                return;
            }
            if (reachedMaxHeightRef.current || !alignItemWithTriggerActive) {
                handleScrollArrowVisibility();
                return;
            }
            const isTopPositioned = positionerElement.style.top === '0px';
            const isBottomPositioned = positionerElement.style.bottom === '0px';
            const currentHeight = positionerElement.getBoundingClientRect().height;
            const doc = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$owner$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ownerDocument"])(positionerElement);
            const positionerStyles = getComputedStyle(positionerElement);
            const marginTop = parseFloat(positionerStyles.marginTop);
            const marginBottom = parseFloat(positionerStyles.marginBottom);
            const maxPopupHeight = getMaxPopupHeight(getComputedStyle(popupRef.current));
            const maxAvailableHeight = Math.min(doc.documentElement.clientHeight - marginTop - marginBottom, maxPopupHeight);
            const scrollTop = scroller.scrollTop;
            const maxScrollTop = getMaxScrollTop(scroller);
            let nextPositionerHeight = 0;
            let nextScrollTop = null;
            let setReachedMax = false;
            let scrollToMax = false;
            const setHeight = {
                "SelectPopup.SelectPopup.useStableCallback[handleScroll].setHeight": (height)=>{
                    positionerElement.style.height = `${height}px`;
                }
            }["SelectPopup.SelectPopup.useStableCallback[handleScroll].setHeight"];
            const handleSmallDiff = {
                "SelectPopup.SelectPopup.useStableCallback[handleScroll].handleSmallDiff": (diff, targetScrollTop)=>{
                    const heightDelta = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$clamp$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clamp"])(diff, 0, maxAvailableHeight - currentHeight);
                    if (heightDelta > 0) {
                        // Consume the remaining scroll in height.
                        setHeight(currentHeight + heightDelta);
                    }
                    scroller.scrollTop = targetScrollTop;
                    if (maxAvailableHeight - (currentHeight + heightDelta) <= SCROLL_EPS_PX) {
                        reachedMaxHeightRef.current = true;
                    }
                    handleScrollArrowVisibility();
                }
            }["SelectPopup.SelectPopup.useStableCallback[handleScroll].handleSmallDiff"];
            if (isTopPositioned) {
                const diff = maxScrollTop - scrollTop;
                const idealHeight = currentHeight + diff;
                const nextHeight = Math.min(idealHeight, maxAvailableHeight);
                nextPositionerHeight = nextHeight;
                if (diff <= SCROLL_EPS_PX) {
                    handleSmallDiff(diff, maxScrollTop);
                    return;
                }
                if (maxAvailableHeight - nextHeight > SCROLL_EPS_PX) {
                    scrollToMax = true;
                } else {
                    setReachedMax = true;
                }
            } else if (isBottomPositioned) {
                const diff = scrollTop;
                const idealHeight = currentHeight + diff;
                const nextHeight = Math.min(idealHeight, maxAvailableHeight);
                const overshoot = idealHeight - maxAvailableHeight;
                nextPositionerHeight = nextHeight;
                if (diff <= SCROLL_EPS_PX) {
                    handleSmallDiff(diff, 0);
                    return;
                }
                if (maxAvailableHeight - nextHeight > SCROLL_EPS_PX) {
                    nextScrollTop = 0;
                } else {
                    setReachedMax = true;
                    if (scrollTop < maxScrollTop) {
                        nextScrollTop = scrollTop - (diff - overshoot);
                    }
                }
            }
            nextPositionerHeight = Math.ceil(nextPositionerHeight);
            if (nextPositionerHeight !== 0) {
                setHeight(nextPositionerHeight);
            }
            if (scrollToMax || nextScrollTop != null) {
                // Recompute bounds after resizing (clientHeight likely changed).
                const nextMaxScrollTop = getMaxScrollTop(scroller);
                const target = scrollToMax ? nextMaxScrollTop : (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$clamp$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clamp"])(nextScrollTop, 0, nextMaxScrollTop);
                // Avoid adjustments that re-trigger scroll events forever.
                if (Math.abs(scroller.scrollTop - target) > SCROLL_EPS_PX) {
                    scroller.scrollTop = target;
                }
            }
            if (setReachedMax || nextPositionerHeight >= maxAvailableHeight - SCROLL_EPS_PX) {
                reachedMaxHeightRef.current = true;
            }
            handleScrollArrowVisibility();
        }
    }["SelectPopup.SelectPopup.useStableCallback[handleScroll]"]);
    __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useImperativeHandle"](scrollHandlerRef, {
        "SelectPopup.SelectPopup.useImperativeHandle": ()=>handleScroll
    }["SelectPopup.SelectPopup.useImperativeHandle"], [
        handleScroll
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$useOpenChangeComplete$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useOpenChangeComplete"])({
        open,
        ref: popupRef,
        onComplete () {
            if (open) {
                onOpenChangeComplete?.(true);
            }
        }
    });
    const state = {
        open,
        transitionStatus,
        side,
        align
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useIsoLayoutEffect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useIsoLayoutEffect"])({
        "SelectPopup.SelectPopup.useIsoLayoutEffect": ()=>{
            if (!positionerElement || !popupRef.current || Object.keys(originalPositionerStylesRef.current).length) {
                return;
            }
            originalPositionerStylesRef.current = {
                top: positionerElement.style.top || '0',
                left: positionerElement.style.left || '0',
                right: positionerElement.style.right,
                height: positionerElement.style.height,
                bottom: positionerElement.style.bottom,
                minHeight: positionerElement.style.minHeight,
                maxHeight: positionerElement.style.maxHeight,
                marginTop: positionerElement.style.marginTop,
                marginBottom: positionerElement.style.marginBottom
            };
        }
    }["SelectPopup.SelectPopup.useIsoLayoutEffect"], [
        popupRef,
        positionerElement
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useIsoLayoutEffect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useIsoLayoutEffect"])({
        "SelectPopup.SelectPopup.useIsoLayoutEffect": ()=>{
            if (open || alignItemWithTriggerActive) {
                return;
            }
            initialPlacedRef.current = false;
            reachedMaxHeightRef.current = false;
            initialHeightRef.current = 0;
            maxHeightRef.current = 0;
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$select$2f$popup$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clearStyles"])(positionerElement, originalPositionerStylesRef.current);
        }
    }["SelectPopup.SelectPopup.useIsoLayoutEffect"], [
        open,
        alignItemWithTriggerActive,
        positionerElement,
        popupRef
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useIsoLayoutEffect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useIsoLayoutEffect"])({
        "SelectPopup.SelectPopup.useIsoLayoutEffect": ()=>{
            const popupElement = popupRef.current;
            if (!open || !triggerElement || !positionerElement || !popupElement || store.state.transitionStatus === 'ending') {
                return;
            }
            if (!alignItemWithTriggerActive) {
                initialPlacedRef.current = true;
                scrollArrowFrame.request(handleScrollArrowVisibility);
                popupElement.style.removeProperty('--transform-origin');
                return;
            }
            // Wait for `selectedItemTextRef.current` to be set.
            queueMicrotask({
                "SelectPopup.SelectPopup.useIsoLayoutEffect": ()=>{
                    // Ensure we remove any transforms that can affect the location of the popup
                    // and therefore the calculations.
                    const restoreTransformStyles = unsetTransformStyles(popupElement);
                    popupElement.style.removeProperty('--transform-origin');
                    try {
                        const positionerStyles = getComputedStyle(positionerElement);
                        const popupStyles = getComputedStyle(popupElement);
                        const doc = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$owner$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ownerDocument"])(triggerElement);
                        const win = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__getWindow__as__ownerWindow$3e$__["ownerWindow"])(positionerElement);
                        const scale = getScale(triggerElement);
                        const triggerRect = normalizeRect(triggerElement.getBoundingClientRect(), scale);
                        const positionerRect = normalizeRect(positionerElement.getBoundingClientRect(), scale);
                        const triggerX = triggerRect.left;
                        const triggerHeight = triggerRect.height;
                        const scroller = listElement || popupElement;
                        const scrollHeight = scroller.scrollHeight;
                        const borderBottom = parseFloat(popupStyles.borderBottomWidth);
                        const marginTop = parseFloat(positionerStyles.marginTop) || 10;
                        const marginBottom = parseFloat(positionerStyles.marginBottom) || 10;
                        const minHeight = parseFloat(positionerStyles.minHeight) || 100;
                        const maxPopupHeight = getMaxPopupHeight(popupStyles);
                        const paddingLeft = 5;
                        const paddingRight = 5;
                        const triggerCollisionThreshold = 20;
                        const viewportHeight = doc.documentElement.clientHeight - marginTop - marginBottom;
                        const viewportWidth = doc.documentElement.clientWidth;
                        const availableSpaceBeneathTrigger = viewportHeight - triggerRect.bottom + triggerHeight;
                        const textElement = selectedItemTextRef.current;
                        const valueElement = valueRef.current;
                        let textRect;
                        let offsetX = 0;
                        let offsetY = 0;
                        if (textElement && valueElement) {
                            const valueRect = normalizeRect(valueElement.getBoundingClientRect(), scale);
                            textRect = normalizeRect(textElement.getBoundingClientRect(), scale);
                            const valueLeftFromTriggerLeft = valueRect.left - triggerX;
                            const textLeftFromPositionerLeft = textRect.left - positionerRect.left;
                            const valueCenterFromPositionerTop = valueRect.top - triggerRect.top + valueRect.height / 2;
                            const textCenterFromTriggerTop = textRect.top - positionerRect.top + textRect.height / 2;
                            offsetX = valueLeftFromTriggerLeft - textLeftFromPositionerLeft;
                            offsetY = textCenterFromTriggerTop - valueCenterFromPositionerTop;
                        }
                        const idealHeight = availableSpaceBeneathTrigger + offsetY + marginBottom + borderBottom;
                        let height = Math.min(viewportHeight, idealHeight);
                        const maxHeight = viewportHeight - marginTop - marginBottom;
                        const scrollTop = idealHeight - height;
                        const left = Math.max(paddingLeft, triggerX + offsetX);
                        const maxRight = viewportWidth - paddingRight;
                        const rightOverflow = Math.max(0, left + positionerRect.width - maxRight);
                        positionerElement.style.left = `${left - rightOverflow}px`;
                        positionerElement.style.height = `${height}px`;
                        positionerElement.style.maxHeight = 'auto';
                        positionerElement.style.marginTop = `${marginTop}px`;
                        positionerElement.style.marginBottom = `${marginBottom}px`;
                        popupElement.style.height = '100%';
                        const maxScrollTop = getMaxScrollTop(scroller);
                        const isTopPositioned = scrollTop >= maxScrollTop - SCROLL_EPS_PX;
                        if (isTopPositioned) {
                            height = Math.min(viewportHeight, positionerRect.height) - (scrollTop - maxScrollTop);
                        }
                        // When the trigger is too close to the top or bottom of the viewport, or the minHeight is
                        // reached, we fallback to aligning the popup to the trigger as the UX is poor otherwise.
                        const fallbackToAlignPopupToTrigger = triggerRect.top < triggerCollisionThreshold || triggerRect.bottom > viewportHeight - triggerCollisionThreshold || Math.ceil(height) + SCROLL_EPS_PX < Math.min(scrollHeight, minHeight);
                        // Safari doesn't position the popup correctly when pinch-zoomed.
                        const isPinchZoomed = (win.visualViewport?.scale ?? 1) !== 1 && __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$detectBrowser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isWebKit"];
                        if (fallbackToAlignPopupToTrigger || isPinchZoomed) {
                            initialPlacedRef.current = true;
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$select$2f$popup$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clearStyles"])(positionerElement, originalPositionerStylesRef.current);
                            __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["flushSync"]({
                                "SelectPopup.SelectPopup.useIsoLayoutEffect": ()=>setControlledAlignItemWithTrigger(false)
                            }["SelectPopup.SelectPopup.useIsoLayoutEffect"]);
                            return;
                        }
                        if (isTopPositioned) {
                            const topOffset = Math.max(0, viewportHeight - idealHeight);
                            positionerElement.style.top = positionerRect.height >= maxHeight ? '0' : `${topOffset}px`;
                            positionerElement.style.height = `${height}px`;
                            scroller.scrollTop = getMaxScrollTop(scroller);
                            initialHeightRef.current = Math.max(minHeight, height);
                        } else {
                            positionerElement.style.bottom = '0';
                            initialHeightRef.current = Math.max(minHeight, height);
                            scroller.scrollTop = scrollTop;
                        }
                        if (textRect) {
                            const popupTop = positionerRect.top;
                            const popupHeight = positionerRect.height;
                            const textCenterY = textRect.top + textRect.height / 2;
                            const transformOriginY = popupHeight > 0 ? (textCenterY - popupTop) / popupHeight * 100 : 50;
                            const clampedY = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$clamp$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clamp"])(transformOriginY, 0, 100);
                            popupElement.style.setProperty('--transform-origin', `50% ${clampedY}%`);
                        }
                        if (initialHeightRef.current === viewportHeight || height >= maxPopupHeight) {
                            reachedMaxHeightRef.current = true;
                        }
                        handleScrollArrowVisibility();
                        // Avoid the `onScroll` event logic from triggering before the popup is placed.
                        setTimeout({
                            "SelectPopup.SelectPopup.useIsoLayoutEffect": ()=>{
                                initialPlacedRef.current = true;
                            }
                        }["SelectPopup.SelectPopup.useIsoLayoutEffect"]);
                    } finally{
                        restoreTransformStyles();
                    }
                }
            }["SelectPopup.SelectPopup.useIsoLayoutEffect"]);
        }
    }["SelectPopup.SelectPopup.useIsoLayoutEffect"], [
        store,
        open,
        positionerElement,
        triggerElement,
        valueRef,
        selectedItemTextRef,
        popupRef,
        handleScrollArrowVisibility,
        alignItemWithTriggerActive,
        setControlledAlignItemWithTrigger,
        scrollArrowFrame,
        scrollDownArrowRef,
        scrollUpArrowRef,
        listElement
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "SelectPopup.SelectPopup.useEffect": ()=>{
            if (!alignItemWithTriggerActive || !positionerElement || !open) {
                return undefined;
            }
            const win = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__getWindow__as__ownerWindow$3e$__["ownerWindow"])(positionerElement);
            function handleResize(event) {
                setOpen(false, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$createBaseUIEventDetails$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createChangeEventDetails"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$reason$2d$parts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__REASONS$3e$__["REASONS"].windowResize, event));
            }
            win.addEventListener('resize', handleResize);
            return ({
                "SelectPopup.SelectPopup.useEffect": ()=>{
                    win.removeEventListener('resize', handleResize);
                }
            })["SelectPopup.SelectPopup.useEffect"];
        }
    }["SelectPopup.SelectPopup.useEffect"], [
        setOpen,
        alignItemWithTriggerActive,
        positionerElement,
        open
    ]);
    const defaultProps = {
        ...listElement ? {
            role: 'presentation',
            'aria-orientation': undefined
        } : {
            role: 'listbox',
            'aria-multiselectable': multiple || undefined,
            id: `${id}-list`
        },
        onKeyDown (event) {
            keyboardActiveRef.current = true;
            if (insideToolbar && __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$composite$2f$composite$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["COMPOSITE_KEYS"].has(event.key)) {
                event.stopPropagation();
            }
        },
        onMouseMove () {
            keyboardActiveRef.current = false;
        },
        onPointerLeave (event) {
            if (!highlightItemOnHover || (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$isMouseWithinBounds$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isMouseWithinBounds"])(event) || event.pointerType === 'touch') {
                return;
            }
            const popup = event.currentTarget;
            highlightTimeout.start(0, ()=>{
                store.set('activeIndex', null);
                popup.focus({
                    preventScroll: true
                });
            });
        },
        onScroll (event) {
            if (listElement) {
                return;
            }
            handleScroll(event.currentTarget);
        },
        ...alignItemWithTriggerActive && {
            style: listElement ? {
                height: '100%'
            } : __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$select$2f$popup$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LIST_FUNCTIONAL_STYLES"]
        }
    };
    const element = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$useRenderElement$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRenderElement"])('div', componentProps, {
        ref: [
            forwardedRef,
            popupRef
        ],
        state,
        stateAttributesMapping,
        props: [
            popupProps,
            defaultProps,
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$getDisabledMountTransitionStyles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDisabledMountTransitionStyles"])(transitionStatus),
            {
                className: !listElement && alignItemWithTriggerActive ? __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["styleDisableScrollbar"].className : undefined
            },
            elementProps
        ]
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            !disableStyleElements && __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["styleDisableScrollbar"].getElement(nonce),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$floating$2d$ui$2d$react$2f$components$2f$FloatingFocusManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FloatingFocusManager"], {
                context: floatingRootContext,
                modal: false,
                disabled: !mounted,
                returnFocus: finalFocus,
                restoreFocus: true,
                children: element
            })
        ]
    });
});
if ("TURBOPACK compile-time truthy", 1) SelectPopup.displayName = "SelectPopup";
function getMaxPopupHeight(popupStyles) {
    const maxHeightStyle = popupStyles.maxHeight || '';
    return maxHeightStyle.endsWith('px') ? parseFloat(maxHeightStyle) || Infinity : Infinity;
}
function getMaxScrollTop(scroller) {
    return Math.max(0, scroller.scrollHeight - scroller.clientHeight);
}
function getScale(element) {
    // The platform API is async-capable, but the DOM platform returns a plain scale object.
    return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$floating$2d$ui$2f$dom$2f$dist$2f$floating$2d$ui$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["platform"].getScale(element);
}
function normalizeRect(rect, scale) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rectToClientRect"])({
        x: rect.x / scale.x,
        y: rect.y / scale.y,
        width: rect.width / scale.x,
        height: rect.height / scale.y
    });
}
const TRANSFORM_STYLE_RESETS = [
    [
        'transform',
        'none'
    ],
    [
        'scale',
        '1'
    ],
    [
        'translate',
        '0 0'
    ]
];
function unsetTransformStyles(popupElement) {
    const { style } = popupElement;
    const originalStyles = {};
    for (const [property, value] of TRANSFORM_STYLE_RESETS){
        originalStyles[property] = style.getPropertyValue(property);
        style.setProperty(property, value, 'important');
    }
    return ()=>{
        for (const [property] of TRANSFORM_STYLE_RESETS){
            const originalValue = originalStyles[property];
            if (originalValue) {
                style.setProperty(property, originalValue);
            } else {
                style.removeProperty(property);
            }
        }
    };
}
}),
"[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/react/esm/select/list/SelectList.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SelectList",
    ()=>SelectList
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useStableCallback$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/utils/esm/useStableCallback.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$store$2f$useStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/utils/esm/store/useStore.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$select$2f$root$2f$SelectRootContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/react/esm/select/root/SelectRootContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$select$2f$positioner$2f$SelectPositionerContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/react/esm/select/positioner/SelectPositionerContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$useRenderElement$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/react/esm/utils/useRenderElement.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/react/esm/utils/styles.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$select$2f$popup$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/react/esm/select/popup/utils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$select$2f$store$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/react/esm/select/store.js [app-client] (ecmascript)");
'use client';
;
;
;
;
;
;
;
;
;
const SelectList = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](function SelectList(componentProps, forwardedRef) {
    const { className, render, ...elementProps } = componentProps;
    const { store, scrollHandlerRef } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$select$2f$root$2f$SelectRootContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSelectRootContext"])();
    const { alignItemWithTriggerActive } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$select$2f$positioner$2f$SelectPositionerContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSelectPositionerContext"])();
    const hasScrollArrows = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$store$2f$useStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"])(store, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$select$2f$store$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["selectors"].hasScrollArrows);
    const openMethod = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$store$2f$useStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"])(store, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$select$2f$store$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["selectors"].openMethod);
    const multiple = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$store$2f$useStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"])(store, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$select$2f$store$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["selectors"].multiple);
    const id = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$store$2f$useStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"])(store, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$select$2f$store$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["selectors"].id);
    const defaultProps = {
        id: `${id}-list`,
        role: 'listbox',
        'aria-multiselectable': multiple || undefined,
        onScroll (event) {
            scrollHandlerRef.current?.(event.currentTarget);
        },
        ...alignItemWithTriggerActive && {
            style: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$select$2f$popup$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LIST_FUNCTIONAL_STYLES"]
        },
        className: hasScrollArrows && openMethod !== 'touch' ? __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["styleDisableScrollbar"].className : undefined
    };
    const setListElement = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useStableCallback$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStableCallback"])({
        "SelectList.SelectList.useStableCallback[setListElement]": (element)=>{
            store.set('listElement', element);
        }
    }["SelectList.SelectList.useStableCallback[setListElement]"]);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$useRenderElement$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRenderElement"])('div', componentProps, {
        ref: [
            forwardedRef,
            setListElement
        ],
        props: [
            defaultProps,
            elementProps
        ]
    });
});
if ("TURBOPACK compile-time truthy", 1) SelectList.displayName = "SelectList";
}),
"[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/react/esm/select/item/SelectItemContext.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SelectItemContext",
    ()=>SelectItemContext,
    "useSelectItemContext",
    ()=>useSelectItemContext
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
'use client';
;
;
const SelectItemContext = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"](undefined);
if ("TURBOPACK compile-time truthy", 1) SelectItemContext.displayName = "SelectItemContext";
function useSelectItemContext() {
    const context = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"](SelectItemContext);
    if (!context) {
        throw new Error(("TURBOPACK compile-time truthy", 1) ? 'Base UI: SelectItemContext is missing. SelectItem parts must be placed within <Select.Item>.' : "TURBOPACK unreachable");
    }
    return context;
}
}),
"[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/react/esm/select/item/SelectItem.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SelectItem",
    ()=>SelectItem
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useIsoLayoutEffect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/utils/esm/useIsoLayoutEffect.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useValueAsRef$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/utils/esm/useValueAsRef.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$isMouseWithinBounds$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/utils/esm/isMouseWithinBounds.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useTimeout$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/utils/esm/useTimeout.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$store$2f$useStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/utils/esm/store/useStore.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$select$2f$root$2f$SelectRootContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/react/esm/select/root/SelectRootContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$composite$2f$list$2f$useCompositeListItem$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/react/esm/composite/list/useCompositeListItem.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$useRenderElement$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/react/esm/utils/useRenderElement.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$select$2f$item$2f$SelectItemContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/react/esm/select/item/SelectItemContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$select$2f$store$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/react/esm/select/store.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$use$2d$button$2f$useButton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/react/esm/use-button/useButton.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$createBaseUIEventDetails$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/react/esm/utils/createBaseUIEventDetails.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$reason$2d$parts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__REASONS$3e$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/react/esm/utils/reason-parts.js [app-client] (ecmascript) <export * as REASONS>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$itemEquality$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/react/esm/utils/itemEquality.js [app-client] (ecmascript)");
/**
 * An individual option in the select popup.
 * Renders a `<div>` element.
 *
 * Documentation: [Base UI Select](https://base-ui.com/react/components/select)
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
'use client';
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
const SelectItem = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["memo"](/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](function SelectItem(componentProps, forwardedRef) {
    const { render, className, value: itemValue = null, label, disabled = false, nativeButton = false, ...elementProps } = componentProps;
    const textRef = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](null);
    const listItem = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$composite$2f$list$2f$useCompositeListItem$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCompositeListItem"])({
        label,
        textRef,
        indexGuessBehavior: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$composite$2f$list$2f$useCompositeListItem$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IndexGuessBehavior"].GuessFromOrder
    });
    const { store, getItemProps, setOpen, setValue, selectionRef, typingRef, valuesRef, keyboardActiveRef, multiple, highlightItemOnHover } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$select$2f$root$2f$SelectRootContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSelectRootContext"])();
    const highlightTimeout = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useTimeout$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTimeout"])();
    const highlighted = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$store$2f$useStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"])(store, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$select$2f$store$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["selectors"].isActive, listItem.index);
    const selected = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$store$2f$useStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"])(store, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$select$2f$store$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["selectors"].isSelected, listItem.index, itemValue);
    const selectedByFocus = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$store$2f$useStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"])(store, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$select$2f$store$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["selectors"].isSelectedByFocus, listItem.index);
    const isItemEqualToValue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$store$2f$useStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"])(store, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$select$2f$store$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["selectors"].isItemEqualToValue);
    const index = listItem.index;
    const hasRegistered = index !== -1;
    const itemRef = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](null);
    const indexRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useValueAsRef$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useValueAsRef"])(index);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useIsoLayoutEffect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useIsoLayoutEffect"])({
        "SelectItem.SelectItem.useIsoLayoutEffect": ()=>{
            if (!hasRegistered) {
                return undefined;
            }
            const values = valuesRef.current;
            values[index] = itemValue;
            return ({
                "SelectItem.SelectItem.useIsoLayoutEffect": ()=>{
                    delete values[index];
                }
            })["SelectItem.SelectItem.useIsoLayoutEffect"];
        }
    }["SelectItem.SelectItem.useIsoLayoutEffect"], [
        hasRegistered,
        index,
        itemValue,
        valuesRef
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useIsoLayoutEffect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useIsoLayoutEffect"])({
        "SelectItem.SelectItem.useIsoLayoutEffect": ()=>{
            if (!hasRegistered) {
                return undefined;
            }
            const selectedValue = store.state.value;
            let selectedCandidate = selectedValue;
            if (multiple && Array.isArray(selectedValue) && selectedValue.length > 0) {
                selectedCandidate = selectedValue[selectedValue.length - 1];
            }
            if (selectedCandidate !== undefined && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$itemEquality$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["compareItemEquality"])(itemValue, selectedCandidate, isItemEqualToValue)) {
                store.set('selectedIndex', index);
            }
            return undefined;
        }
    }["SelectItem.SelectItem.useIsoLayoutEffect"], [
        hasRegistered,
        index,
        multiple,
        isItemEqualToValue,
        store,
        itemValue
    ]);
    const state = {
        disabled,
        selected,
        highlighted
    };
    const rootProps = getItemProps({
        active: highlighted,
        selected
    });
    // With our custom `focusItemOnHover` implementation, this interferes with the logic and can
    // cause the index state to be stuck when leaving the select popup.
    rootProps.onFocus = undefined;
    rootProps.id = undefined;
    const lastKeyRef = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](null);
    const pointerTypeRef = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"]('mouse');
    const didPointerDownRef = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](false);
    const { getButtonProps, buttonRef } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$use$2d$button$2f$useButton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useButton"])({
        disabled,
        focusableWhenDisabled: true,
        native: nativeButton,
        composite: true
    });
    function commitSelection(event) {
        const selectedValue = store.state.value;
        if (multiple) {
            const currentValue = Array.isArray(selectedValue) ? selectedValue : [];
            const nextValue = selected ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$itemEquality$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["removeItem"])(currentValue, itemValue, isItemEqualToValue) : [
                ...currentValue,
                itemValue
            ];
            setValue(nextValue, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$createBaseUIEventDetails$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createChangeEventDetails"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$reason$2d$parts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__REASONS$3e$__["REASONS"].itemPress, event));
        } else {
            setValue(itemValue, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$createBaseUIEventDetails$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createChangeEventDetails"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$reason$2d$parts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__REASONS$3e$__["REASONS"].itemPress, event));
            setOpen(false, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$createBaseUIEventDetails$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createChangeEventDetails"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$reason$2d$parts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__REASONS$3e$__["REASONS"].itemPress, event));
        }
    }
    const defaultProps = {
        role: 'option',
        'aria-selected': selected,
        tabIndex: highlighted ? 0 : -1,
        onFocus () {
            store.set('activeIndex', index);
        },
        onMouseEnter () {
            if (!keyboardActiveRef.current && store.state.selectedIndex === null && highlightItemOnHover) {
                store.set('activeIndex', index);
            }
        },
        onMouseMove () {
            if (highlightItemOnHover) {
                store.set('activeIndex', index);
            }
        },
        onMouseLeave (event) {
            if (!highlightItemOnHover || keyboardActiveRef.current || (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$isMouseWithinBounds$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isMouseWithinBounds"])(event)) {
                return;
            }
            highlightTimeout.start(0, ()=>{
                if (store.state.activeIndex === index) {
                    store.set('activeIndex', null);
                }
            });
        },
        onTouchStart () {
            selectionRef.current = {
                allowSelectedMouseUp: false,
                allowUnselectedMouseUp: false
            };
        },
        onKeyDown (event) {
            lastKeyRef.current = event.key;
            store.set('activeIndex', index);
            if (event.key === ' ' && typingRef.current) {
                event.preventDefault();
            }
        },
        onClick (event) {
            didPointerDownRef.current = false;
            // Prevent double commit on {Enter}
            if (event.type === 'keydown' && lastKeyRef.current === null) {
                return;
            }
            if (disabled || event.type === 'keydown' && lastKeyRef.current === ' ' && typingRef.current || pointerTypeRef.current !== 'touch' && !highlighted) {
                return;
            }
            lastKeyRef.current = null;
            commitSelection(event.nativeEvent);
        },
        onPointerEnter (event) {
            pointerTypeRef.current = event.pointerType;
        },
        onPointerDown (event) {
            pointerTypeRef.current = event.pointerType;
            didPointerDownRef.current = true;
        },
        onMouseUp () {
            if (disabled) {
                return;
            }
            // Regular click (pointerdown on this element) if didPointerDownRef is set, otherwise drag-to-select
            if (didPointerDownRef.current) {
                didPointerDownRef.current = false;
                return;
            }
            const disallowSelectedMouseUp = !selectionRef.current.allowSelectedMouseUp && selected;
            const disallowUnselectedMouseUp = !selectionRef.current.allowUnselectedMouseUp && !selected;
            if (disallowSelectedMouseUp || disallowUnselectedMouseUp || pointerTypeRef.current !== 'touch' && !highlighted) {
                return;
            }
            itemRef.current?.click();
        }
    };
    const element = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$useRenderElement$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRenderElement"])('div', componentProps, {
        ref: [
            buttonRef,
            forwardedRef,
            listItem.ref,
            itemRef
        ],
        state,
        props: [
            rootProps,
            defaultProps,
            elementProps,
            getButtonProps
        ]
    });
    const contextValue = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "SelectItem.SelectItem.useMemo[contextValue]": ()=>({
                selected,
                indexRef,
                textRef,
                selectedByFocus,
                hasRegistered
            })
    }["SelectItem.SelectItem.useMemo[contextValue]"], [
        selected,
        indexRef,
        textRef,
        selectedByFocus,
        hasRegistered
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$select$2f$item$2f$SelectItemContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItemContext"].Provider, {
        value: contextValue,
        children: element
    });
}));
if ("TURBOPACK compile-time truthy", 1) SelectItem.displayName = "SelectItem";
}),
"[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/react/esm/select/item-indicator/SelectItemIndicator.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SelectItemIndicator",
    ()=>SelectItemIndicator
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$select$2f$item$2f$SelectItemContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/react/esm/select/item/SelectItemContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$useTransitionStatus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/react/esm/utils/useTransitionStatus.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$useOpenChangeComplete$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/react/esm/utils/useOpenChangeComplete.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$useRenderElement$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/react/esm/utils/useRenderElement.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$stateAttributesMapping$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/react/esm/utils/stateAttributesMapping.js [app-client] (ecmascript)");
/**
 * Indicates whether the select item is selected.
 * Renders a `<span>` element.
 *
 * Documentation: [Base UI Select](https://base-ui.com/react/components/select)
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
'use client';
;
;
;
;
;
;
;
const SelectItemIndicator = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](function SelectItemIndicator(componentProps, forwardedRef) {
    const keepMounted = componentProps.keepMounted ?? false;
    const { selected } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$select$2f$item$2f$SelectItemContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSelectItemContext"])();
    const shouldRender = keepMounted || selected;
    if (!shouldRender) {
        return null;
    }
    // eslint-disable-next-line @typescript-eslint/no-use-before-define
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(Inner, {
        ...componentProps,
        ref: forwardedRef
    });
});
/** The core implementation of the indicator is split here to avoid paying the hooks
 * costs unless the element needs to be mounted. */ if ("TURBOPACK compile-time truthy", 1) SelectItemIndicator.displayName = "SelectItemIndicator";
const Inner = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["memo"](/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"]((componentProps, forwardedRef)=>{
    const { render, className, keepMounted, ...elementProps } = componentProps;
    const { selected } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$select$2f$item$2f$SelectItemContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSelectItemContext"])();
    const indicatorRef = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](null);
    const { transitionStatus, setMounted } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$useTransitionStatus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransitionStatus"])(selected);
    const state = {
        selected,
        transitionStatus
    };
    const element = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$useRenderElement$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRenderElement"])('span', componentProps, {
        ref: [
            forwardedRef,
            indicatorRef
        ],
        state,
        props: [
            {
                'aria-hidden': true,
                children: '✔️'
            },
            elementProps
        ],
        stateAttributesMapping: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$stateAttributesMapping$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transitionStatusMapping"]
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$useOpenChangeComplete$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useOpenChangeComplete"])({
        open: selected,
        ref: indicatorRef,
        onComplete () {
            if (!selected) {
                setMounted(false);
            }
        }
    });
    return element;
}));
if ("TURBOPACK compile-time truthy", 1) Inner.displayName = "Inner";
}),
"[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/react/esm/select/item-text/SelectItemText.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SelectItemText",
    ()=>SelectItemText
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$select$2f$root$2f$SelectRootContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/react/esm/select/root/SelectRootContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$select$2f$item$2f$SelectItemContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/react/esm/select/item/SelectItemContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$useRenderElement$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/react/esm/utils/useRenderElement.js [app-client] (ecmascript)");
'use client';
;
;
;
;
const SelectItemText = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["memo"](/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](function SelectItemText(componentProps, forwardedRef) {
    const { indexRef, textRef, selectedByFocus, hasRegistered } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$select$2f$item$2f$SelectItemContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSelectItemContext"])();
    const { selectedItemTextRef } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$select$2f$root$2f$SelectRootContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSelectRootContext"])();
    const { className, render, ...elementProps } = componentProps;
    const localRef = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"]({
        "SelectItemText.SelectItemText.useCallback[localRef]": (node)=>{
            if (!node || !hasRegistered) {
                return;
            }
            const hasNoSelectedItemText = selectedItemTextRef.current === null || !selectedItemTextRef.current.isConnected;
            if (selectedByFocus || hasNoSelectedItemText && indexRef.current === 0) {
                selectedItemTextRef.current = node;
            }
        }
    }["SelectItemText.SelectItemText.useCallback[localRef]"], [
        selectedItemTextRef,
        indexRef,
        selectedByFocus,
        hasRegistered
    ]);
    const element = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$useRenderElement$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRenderElement"])('div', componentProps, {
        ref: [
            localRef,
            forwardedRef,
            textRef
        ],
        props: elementProps
    });
    return element;
}));
if ("TURBOPACK compile-time truthy", 1) SelectItemText.displayName = "SelectItemText";
}),
"[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/react/esm/select/arrow/SelectArrow.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SelectArrow",
    ()=>SelectArrow
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$store$2f$useStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/utils/esm/store/useStore.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$select$2f$positioner$2f$SelectPositionerContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/react/esm/select/positioner/SelectPositionerContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$select$2f$root$2f$SelectRootContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/react/esm/select/root/SelectRootContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$popupStateMapping$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/react/esm/utils/popupStateMapping.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$stateAttributesMapping$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/react/esm/utils/stateAttributesMapping.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$useRenderElement$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/react/esm/utils/useRenderElement.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$select$2f$store$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/react/esm/select/store.js [app-client] (ecmascript)");
'use client';
;
;
;
;
;
;
;
;
const stateAttributesMapping = {
    ...__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$popupStateMapping$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["popupStateMapping"],
    ...__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$stateAttributesMapping$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transitionStatusMapping"]
};
const SelectArrow = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](function SelectArrow(componentProps, forwardedRef) {
    const { className, render, ...elementProps } = componentProps;
    const { store } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$select$2f$root$2f$SelectRootContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSelectRootContext"])();
    const { side, align, arrowRef, arrowStyles, arrowUncentered, alignItemWithTriggerActive } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$select$2f$positioner$2f$SelectPositionerContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSelectPositionerContext"])();
    const open = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$store$2f$useStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"])(store, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$select$2f$store$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["selectors"].open, true);
    const state = {
        open,
        side,
        align,
        uncentered: arrowUncentered
    };
    const element = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$useRenderElement$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRenderElement"])('div', componentProps, {
        state,
        ref: [
            arrowRef,
            forwardedRef
        ],
        props: [
            {
                style: arrowStyles,
                'aria-hidden': true
            },
            elementProps
        ],
        stateAttributesMapping
    });
    if (alignItemWithTriggerActive) {
        return null;
    }
    return element;
});
if ("TURBOPACK compile-time truthy", 1) SelectArrow.displayName = "SelectArrow";
}),
"[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/react/esm/select/scroll-arrow/SelectScrollArrow.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SelectScrollArrow",
    ()=>SelectScrollArrow
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useTimeout$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/utils/esm/useTimeout.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$store$2f$useStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/utils/esm/store/useStore.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useIsoLayoutEffect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/utils/esm/useIsoLayoutEffect.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$select$2f$root$2f$SelectRootContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/react/esm/select/root/SelectRootContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$select$2f$positioner$2f$SelectPositionerContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/react/esm/select/positioner/SelectPositionerContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$useTransitionStatus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/react/esm/utils/useTransitionStatus.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$useOpenChangeComplete$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/react/esm/utils/useOpenChangeComplete.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$useRenderElement$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/react/esm/utils/useRenderElement.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$select$2f$store$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/react/esm/select/store.js [app-client] (ecmascript)");
'use client';
;
;
;
;
;
;
;
;
;
;
const SelectScrollArrow = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](function SelectScrollArrow(componentProps, forwardedRef) {
    const { render, className, direction, keepMounted = false, ...elementProps } = componentProps;
    const { store, popupRef, listRef, handleScrollArrowVisibility, scrollArrowsMountedCountRef } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$select$2f$root$2f$SelectRootContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSelectRootContext"])();
    const { side, scrollDownArrowRef, scrollUpArrowRef } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$select$2f$positioner$2f$SelectPositionerContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSelectPositionerContext"])();
    const visibleSelector = direction === 'up' ? __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$select$2f$store$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["selectors"].scrollUpArrowVisible : __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$select$2f$store$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["selectors"].scrollDownArrowVisible;
    const stateVisible = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$store$2f$useStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"])(store, visibleSelector);
    const openMethod = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$store$2f$useStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"])(store, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$select$2f$store$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["selectors"].openMethod);
    // Scroll arrows are disabled for touch modality as they are a hover-only element.
    const visible = stateVisible && openMethod !== 'touch';
    const timeout = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useTimeout$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTimeout"])();
    const scrollArrowRef = direction === 'up' ? scrollUpArrowRef : scrollDownArrowRef;
    const { transitionStatus, setMounted } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$useTransitionStatus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransitionStatus"])(visible);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useIsoLayoutEffect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useIsoLayoutEffect"])({
        "SelectScrollArrow.SelectScrollArrow.useIsoLayoutEffect": ()=>{
            scrollArrowsMountedCountRef.current += 1;
            if (!store.state.hasScrollArrows) {
                store.set('hasScrollArrows', true);
            }
            return ({
                "SelectScrollArrow.SelectScrollArrow.useIsoLayoutEffect": ()=>{
                    scrollArrowsMountedCountRef.current = Math.max(0, scrollArrowsMountedCountRef.current - 1);
                    if (scrollArrowsMountedCountRef.current === 0 && store.state.hasScrollArrows) {
                        store.set('hasScrollArrows', false);
                    }
                }
            })["SelectScrollArrow.SelectScrollArrow.useIsoLayoutEffect"];
        }
    }["SelectScrollArrow.SelectScrollArrow.useIsoLayoutEffect"], [
        store,
        scrollArrowsMountedCountRef
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$useOpenChangeComplete$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useOpenChangeComplete"])({
        open: visible,
        ref: scrollArrowRef,
        onComplete () {
            if (!visible) {
                setMounted(false);
            }
        }
    });
    const state = {
        direction,
        visible,
        side,
        transitionStatus
    };
    const defaultProps = {
        'aria-hidden': true,
        children: direction === 'up' ? '▲' : '▼',
        style: {
            position: 'absolute'
        },
        onMouseMove (event) {
            if (event.movementX === 0 && event.movementY === 0 || timeout.isStarted()) {
                return;
            }
            store.set('activeIndex', null);
            function scrollNextItem() {
                const scroller = store.state.listElement ?? popupRef.current;
                if (!scroller) {
                    return;
                }
                store.set('activeIndex', null);
                handleScrollArrowVisibility();
                const isScrolledToTop = scroller.scrollTop === 0;
                const isScrolledToBottom = Math.round(scroller.scrollTop + scroller.clientHeight) >= scroller.scrollHeight;
                const list = listRef.current;
                // Fallback when there are no items registered yet.
                if (list.length === 0) {
                    if (direction === 'up') {
                        store.set('scrollUpArrowVisible', !isScrolledToTop);
                    } else {
                        store.set('scrollDownArrowVisible', !isScrolledToBottom);
                    }
                }
                if (direction === 'up' && isScrolledToTop || direction === 'down' && isScrolledToBottom) {
                    timeout.clear();
                    return;
                }
                if ((store.state.listElement || popupRef.current) && listRef.current && listRef.current.length > 0) {
                    const items = listRef.current;
                    const scrollArrowHeight = scrollArrowRef.current?.offsetHeight || 0;
                    if (direction === 'up') {
                        let firstVisibleIndex = 0;
                        const scrollTop = scroller.scrollTop + scrollArrowHeight;
                        for(let i = 0; i < items.length; i += 1){
                            const item = items[i];
                            if (item) {
                                const itemTop = item.offsetTop;
                                if (itemTop >= scrollTop) {
                                    firstVisibleIndex = i;
                                    break;
                                }
                            }
                        }
                        const targetIndex = Math.max(0, firstVisibleIndex - 1);
                        if (targetIndex < firstVisibleIndex) {
                            const targetItem = items[targetIndex];
                            if (targetItem) {
                                scroller.scrollTop = Math.max(0, targetItem.offsetTop - scrollArrowHeight);
                            }
                        } else {
                            // Already at the first item; ensure we reach the absolute top to account for group labels.
                            scroller.scrollTop = 0;
                        }
                    } else {
                        let lastVisibleIndex = items.length - 1;
                        const scrollBottom = scroller.scrollTop + scroller.clientHeight - scrollArrowHeight;
                        for(let i = 0; i < items.length; i += 1){
                            const item = items[i];
                            if (item) {
                                const itemBottom = item.offsetTop + item.offsetHeight;
                                if (itemBottom > scrollBottom) {
                                    lastVisibleIndex = Math.max(0, i - 1);
                                    break;
                                }
                            }
                        }
                        const targetIndex = Math.min(items.length - 1, lastVisibleIndex + 1);
                        if (targetIndex > lastVisibleIndex) {
                            const targetItem = items[targetIndex];
                            if (targetItem) {
                                scroller.scrollTop = targetItem.offsetTop + targetItem.offsetHeight - scroller.clientHeight + scrollArrowHeight;
                            }
                        } else {
                            // Already at the last item; ensure we reach the true bottom.
                            scroller.scrollTop = scroller.scrollHeight - scroller.clientHeight;
                        }
                    }
                }
                timeout.start(40, scrollNextItem);
            }
            timeout.start(40, scrollNextItem);
        },
        onMouseLeave () {
            timeout.clear();
        }
    };
    const element = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$useRenderElement$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRenderElement"])('div', componentProps, {
        ref: [
            forwardedRef,
            scrollArrowRef
        ],
        state,
        props: [
            defaultProps,
            elementProps
        ]
    });
    const shouldRender = visible || keepMounted;
    if (!shouldRender) {
        return null;
    }
    return element;
});
if ("TURBOPACK compile-time truthy", 1) SelectScrollArrow.displayName = "SelectScrollArrow";
}),
"[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/react/esm/select/scroll-down-arrow/SelectScrollDownArrow.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SelectScrollDownArrow",
    ()=>SelectScrollDownArrow
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$select$2f$scroll$2d$arrow$2f$SelectScrollArrow$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/react/esm/select/scroll-arrow/SelectScrollArrow.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
'use client';
;
;
;
const SelectScrollDownArrow = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](function SelectScrollDownArrow(props, forwardedRef) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$select$2f$scroll$2d$arrow$2f$SelectScrollArrow$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectScrollArrow"], {
        ...props,
        ref: forwardedRef,
        direction: "down"
    });
});
if ("TURBOPACK compile-time truthy", 1) SelectScrollDownArrow.displayName = "SelectScrollDownArrow";
}),
"[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/react/esm/select/scroll-up-arrow/SelectScrollUpArrow.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SelectScrollUpArrow",
    ()=>SelectScrollUpArrow
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$select$2f$scroll$2d$arrow$2f$SelectScrollArrow$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/react/esm/select/scroll-arrow/SelectScrollArrow.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
'use client';
;
;
;
const SelectScrollUpArrow = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](function SelectScrollUpArrow(props, forwardedRef) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$select$2f$scroll$2d$arrow$2f$SelectScrollArrow$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectScrollArrow"], {
        ...props,
        ref: forwardedRef,
        direction: "up"
    });
});
if ("TURBOPACK compile-time truthy", 1) SelectScrollUpArrow.displayName = "SelectScrollUpArrow";
}),
"[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/react/esm/select/group/SelectGroupContext.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SelectGroupContext",
    ()=>SelectGroupContext,
    "useSelectGroupContext",
    ()=>useSelectGroupContext
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
'use client';
;
;
const SelectGroupContext = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"](undefined);
if ("TURBOPACK compile-time truthy", 1) SelectGroupContext.displayName = "SelectGroupContext";
function useSelectGroupContext() {
    const context = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"](SelectGroupContext);
    if (context === undefined) {
        throw new Error(("TURBOPACK compile-time truthy", 1) ? 'Base UI: SelectGroupContext is missing. SelectGroup parts must be placed within <Select.Group>.' : "TURBOPACK unreachable");
    }
    return context;
}
}),
"[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/react/esm/select/group/SelectGroup.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SelectGroup",
    ()=>SelectGroup
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$select$2f$group$2f$SelectGroupContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/react/esm/select/group/SelectGroupContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$useRenderElement$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/react/esm/utils/useRenderElement.js [app-client] (ecmascript)");
/**
 * Groups related select items with the corresponding label.
 * Renders a `<div>` element.
 *
 * Documentation: [Base UI Select](https://base-ui.com/react/components/select)
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
'use client';
;
;
;
;
const SelectGroup = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](function SelectGroup(componentProps, forwardedRef) {
    const { className, render, ...elementProps } = componentProps;
    const [labelId, setLabelId] = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"]();
    const contextValue = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "SelectGroup.SelectGroup.useMemo[contextValue]": ()=>({
                labelId,
                setLabelId
            })
    }["SelectGroup.SelectGroup.useMemo[contextValue]"], [
        labelId,
        setLabelId
    ]);
    const element = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$useRenderElement$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRenderElement"])('div', componentProps, {
        ref: forwardedRef,
        props: [
            {
                role: 'group',
                'aria-labelledby': labelId
            },
            elementProps
        ]
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$select$2f$group$2f$SelectGroupContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectGroupContext"].Provider, {
        value: contextValue,
        children: element
    });
});
if ("TURBOPACK compile-time truthy", 1) SelectGroup.displayName = "SelectGroup";
}),
"[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/react/esm/select/group-label/SelectGroupLabel.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SelectGroupLabel",
    ()=>SelectGroupLabel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useIsoLayoutEffect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/utils/esm/useIsoLayoutEffect.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$useBaseUiId$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/react/esm/utils/useBaseUiId.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$select$2f$group$2f$SelectGroupContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/react/esm/select/group/SelectGroupContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$useRenderElement$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/react/esm/utils/useRenderElement.js [app-client] (ecmascript)");
'use client';
;
;
;
;
;
const SelectGroupLabel = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](function SelectGroupLabel(componentProps, forwardedRef) {
    const { className, render, id: idProp, ...elementProps } = componentProps;
    const { setLabelId } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$select$2f$group$2f$SelectGroupContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSelectGroupContext"])();
    const id = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$useBaseUiId$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBaseUiId"])(idProp);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useIsoLayoutEffect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useIsoLayoutEffect"])({
        "SelectGroupLabel.SelectGroupLabel.useIsoLayoutEffect": ()=>{
            setLabelId(id);
        }
    }["SelectGroupLabel.SelectGroupLabel.useIsoLayoutEffect"], [
        id,
        setLabelId
    ]);
    const element = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$useRenderElement$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRenderElement"])('div', componentProps, {
        ref: forwardedRef,
        props: [
            {
                id
            },
            elementProps
        ]
    });
    return element;
});
if ("TURBOPACK compile-time truthy", 1) SelectGroupLabel.displayName = "SelectGroupLabel";
}),
"[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/react/esm/select/index.parts.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Arrow",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$select$2f$arrow$2f$SelectArrow$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectArrow"],
    "Backdrop",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$select$2f$backdrop$2f$SelectBackdrop$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectBackdrop"],
    "Group",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$select$2f$group$2f$SelectGroup$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectGroup"],
    "GroupLabel",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$select$2f$group$2d$label$2f$SelectGroupLabel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectGroupLabel"],
    "Icon",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$select$2f$icon$2f$SelectIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectIcon"],
    "Item",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$select$2f$item$2f$SelectItem$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"],
    "ItemIndicator",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$select$2f$item$2d$indicator$2f$SelectItemIndicator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItemIndicator"],
    "ItemText",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$select$2f$item$2d$text$2f$SelectItemText$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItemText"],
    "Label",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$select$2f$label$2f$SelectLabel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectLabel"],
    "List",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$select$2f$list$2f$SelectList$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectList"],
    "Popup",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$select$2f$popup$2f$SelectPopup$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectPopup"],
    "Portal",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$select$2f$portal$2f$SelectPortal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectPortal"],
    "Positioner",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$select$2f$positioner$2f$SelectPositioner$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectPositioner"],
    "Root",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$select$2f$root$2f$SelectRoot$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectRoot"],
    "ScrollDownArrow",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$select$2f$scroll$2d$down$2d$arrow$2f$SelectScrollDownArrow$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectScrollDownArrow"],
    "ScrollUpArrow",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$select$2f$scroll$2d$up$2d$arrow$2f$SelectScrollUpArrow$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectScrollUpArrow"],
    "Separator",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$separator$2f$Separator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Separator"],
    "Trigger",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$select$2f$trigger$2f$SelectTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectTrigger"],
    "Value",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$select$2f$value$2f$SelectValue$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectValue"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$select$2f$index$2e$parts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/react/esm/select/index.parts.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$select$2f$root$2f$SelectRoot$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/react/esm/select/root/SelectRoot.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$select$2f$label$2f$SelectLabel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/react/esm/select/label/SelectLabel.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$select$2f$trigger$2f$SelectTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/react/esm/select/trigger/SelectTrigger.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$select$2f$value$2f$SelectValue$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/react/esm/select/value/SelectValue.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$select$2f$icon$2f$SelectIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/react/esm/select/icon/SelectIcon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$select$2f$portal$2f$SelectPortal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/react/esm/select/portal/SelectPortal.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$select$2f$backdrop$2f$SelectBackdrop$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/react/esm/select/backdrop/SelectBackdrop.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$select$2f$positioner$2f$SelectPositioner$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/react/esm/select/positioner/SelectPositioner.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$select$2f$popup$2f$SelectPopup$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/react/esm/select/popup/SelectPopup.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$select$2f$list$2f$SelectList$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/react/esm/select/list/SelectList.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$select$2f$item$2f$SelectItem$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/react/esm/select/item/SelectItem.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$select$2f$item$2d$indicator$2f$SelectItemIndicator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/react/esm/select/item-indicator/SelectItemIndicator.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$select$2f$item$2d$text$2f$SelectItemText$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/react/esm/select/item-text/SelectItemText.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$select$2f$arrow$2f$SelectArrow$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/react/esm/select/arrow/SelectArrow.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$select$2f$scroll$2d$down$2d$arrow$2f$SelectScrollDownArrow$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/react/esm/select/scroll-down-arrow/SelectScrollDownArrow.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$select$2f$scroll$2d$up$2d$arrow$2f$SelectScrollUpArrow$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/react/esm/select/scroll-up-arrow/SelectScrollUpArrow.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$select$2f$group$2f$SelectGroup$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/react/esm/select/group/SelectGroup.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$select$2f$group$2d$label$2f$SelectGroupLabel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/react/esm/select/group-label/SelectGroupLabel.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$separator$2f$Separator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/react/esm/separator/Separator.js [app-client] (ecmascript)");
}),
"[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/react/esm/select/index.parts.js [app-client] (ecmascript) <export * as Select>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Select",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$select$2f$index$2e$parts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ozodbek$2f$hotel$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$select$2f$index$2e$parts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ozodbek/hotel/node_modules/@base-ui/react/esm/select/index.parts.js [app-client] (ecmascript)");
}),
]);

//# sourceMappingURL=f737c_%40base-ui_react_esm_dcc58f8a._.js.map