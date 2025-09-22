import{j as e,i as o,ai as j,p as T,r as m,H as p,T as P}from"./index-CrYLJ35E.js";import{P as k}from"./index-8HG2UBo4.js";import{S as R}from"./index-D4FnEovC.js";import{C as E}from"./CopyButton-BpQpHSx5.js";import{T as G}from"./Tooltip-DX-W6HAp.js";import{A as H}from"./ActionIcon-BLd_TQ7M.js";import{I as N}from"./IconX-C8tq1l1C.js";import{I as A}from"./IconCopy-Cw3u2Biq.js";import{u as $}from"./useGetEventSettings-DFKTJ1TG.js";import{P as F}from"./index-CpyDlQAY.js";import{L as S}from"./index-DpQBxPsG.js";import{u as W}from"./useGetEvent-CFH1OqrJ.js";import{C as V}from"./index-7NKK2XhK.js";import{u as q}from"./use-form-DO-Lj7Bd.js";import{m as _}from"./matches-DCiZ_LSR.js";import{I as z}from"./IconInfoCircle-CrlftMzD.js";import{C as u}from"./ColorInput-D0hVPYb2.js";import{T as M}from"./TextInput-Dyfe9c5f.js";import{N as L}from"./NumberInput-Dq2KMGGG.js";import{S as D}from"./Switch-FM0Hma1Y.js";import{T as c}from"./Tabs-hT51rQik.js";import{T as x}from"./Textarea-BXNnwWxM.js";import"./useMutation-CHItg7KV.js";import"./order.client-BEfWWJ5t.js";import"./notifications-D8-hBIGe.js";import"./index-LP32uuv2.js";import"./currency-7v5nqsb_.js";import"./Popover-DAx2K-A9.js";import"./use-resolved-styles-api-HMAOTifY.js";import"./use-floating-auto-update-BpvGJ4Om.js";import"./use-uncontrolled-Bla5ZcWH.js";import"./IconPlus-BS6Rh2lr.js";import"./dates-g39-e9ny.js";import"./dayjs.min-CAylC5Ss.js";import"./utc-B6dqfpjB.js";import"./use-input-state-rAGqPNFj.js";import"./Input-_p9qh6bi.js";import"./Anchor-DXr_WVxj.js";import"./IconChevronRight-D9hDbPbB.js";import"./Collapse-DpIN2tq4.js";import"./use-clipboard-BKhAVmN_.js";import"./LoadingOverlay-7O_NQRPA.js";import"./ColorPicker-DYJKaIPI.js";import"./ColorSwatch-r3-miZQE.js";import"./clamp-DTmYCdls.js";import"./InputBase-D8xkHQO8.js";import"./InputsGroupFieldset-DnG0ZjS0.js";import"./get-safe-id-Bp3H8K0-.js";import"./get-auto-contrast-value-Da6zqqWm.js";import"./create-scoped-keydown-handler-O-eo68DQ.js";const K="_widgetGrid_1b3y4_1",U="_widgetForm_1b3y4_16",Z="_formHeader_1b3y4_21",X="_previewPane_1b3y4_31",J="_browserChrome_1b3y4_37",Q="_browserActionButtons_1b3y4_46",Y="_browserAddressBar_1b3y4_62",O="_previewHeader_1b3y4_81",ee="_websitePlaceholder_1b3y4_87",re="_widgetWrapper_1b3y4_99",oe="_lorem_1b3y4_102",te="_stickyContainer_1b3y4_107",t={widgetGrid:K,widgetForm:U,formHeader:Z,previewPane:X,browserChrome:J,browserActionButtons:Q,browserAddressBar:Y,previewHeader:O,websitePlaceholder:ee,widgetWrapper:re,lorem:oe,stickyContainer:te},h=({value:i})=>e.jsx(E,{value:i,timeout:2e3,children:({copied:d,copy:a})=>e.jsx(G,{label:d?o._({id:"6V3Ea3"}):o._({id:"he3ygx"}),withArrow:!0,position:"right",children:e.jsx(H,{color:d?"teal":"gray",variant:"subtle",onClick:a,children:d?e.jsx(N,{style:{width:j(16)}}):e.jsx(A,{style:{width:j(16)}})})})}),se=()=>{const{eventId:i}=T(),d=W(i),a=o._({id:"Vd+LC3"}),l=/^#([0-9a-f]{3,4}|[0-9a-f]{6}|[0-9a-f]{8})$/,{data:s,isFetched:w}=$(i),r=q({initialValues:{background_color:"#ffffff",primary_color:"#828282",primary_text_color:"#ffffff",secondary_color:"#f5f5f5",secondary_text_color:"#828282",continue_button_text:o._({id:"xGVfLh"}),padding:20,autoResize:!0},validate:{background_color:_(l,a),primary_color:_(l,a),primary_text_color:_(l,a),secondary_color:_(l,a),secondary_text_color:_(l,a)}}),[v,C]=m.useState(""),[y,B]=m.useState(""),[g,I]=m.useState(""),n=typeof window<"u"?window==null?void 0:window.location:void 0,b=`${n==null?void 0:n.protocol}//${n==null?void 0:n.host}/widget.js`,f=`<script async src="${b}"><\/script>`;return m.useEffect(()=>{C('<div data-hievents-id="'+i+'" data-hievents-primary-color="'+r.values.primary_color+'" data-hievents-primary-text-color="'+r.values.primary_text_color+'" data-hievents-secondary-color="'+r.values.secondary_color+'" data-hievents-secondary-text-color="'+r.values.secondary_text_color+'" data-hievents-background-color="'+r.values.background_color+'" data-hievents-widget-type="widget" data-hievents-widget-version="1.0" data-hievents-locale="en" data-hievents-padding="'+r.values.padding+'px" data-hievents-autoresize="'+r.values.autoResize+'" data-hievents-continue-button-text="'+r.values.continue_button_text+'" class="hievents-widget"></div>'),B(`
import React, { useEffect } from 'react';

const HiEventsWidget = ({
  eventId,
  primaryColor = "${r.values.primary_color}",
  primaryTextColor = "${r.values.primary_text_color}",
  secondaryColor = "${r.values.secondary_color}",
  secondaryTextColor = "${r.values.secondary_text_color}",
  backgroundColor = "${r.values.background_color}",
  widgetType = "widget",
  widgetVersion = "1.0",
  locale = "en"
}) => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "${b}";
    script.async = true;
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div
      data-hievents-id={eventId}
      data-hievents-primary-color={primaryColor}
      data-hievents-primary-text-color={primaryTextColor}
      data-hievents-secondary-color={secondaryColor}
      data-hievents-secondary-text-color={secondaryTextColor}
      data-hievents-background-color={backgroundColor}
      data-hievents-widget-type={widgetType}
      data-hievents-widget-version={widgetVersion}
      data-hievents-locale={locale}
      className="hievents-widget"
    />
  );
};

export default HiEventsWidget;
        `),I(`
import React from 'react';
import HiEventsWidget from './HiEventsWidget';

const App = () => {
  return (
    <div>
      <h1>My Website</h1>
      <HiEventsWidget 
        eventId="${i}"
        primaryColor="${r.values.primary_color}"
        primaryTextColor="${r.values.primary_text_color}"
        secondaryColor="${r.values.secondary_color}"
        secondaryTextColor="${r.values.secondary_text_color}"
        backgroundColor="${r.values.background_color}"
        widgetType="widget"
        widgetVersion="1.0"
        locale="en"
      />
    </div>
  );
};

export default App;
        `),r.validate()},[r.values,i]),m.useEffect(()=>{s&&r.setValues({background_color:s.homepage_background_color,primary_color:s.homepage_primary_color,primary_text_color:s.homepage_primary_text_color,secondary_color:s.homepage_secondary_color,secondary_text_color:s.homepage_secondary_text_color,continue_button_text:s.continue_button_text})},[w,s]),e.jsx("div",{children:e.jsxs("div",{className:t.widgetGrid,children:[e.jsx(V,{className:t.widgetForm,children:e.jsxs("form",{children:[e.jsx("h2",{className:t.formHeader,children:o._({id:"v1P7Gm"})}),e.jsx("h3",{children:e.jsxs(p,{justify:"space-between",children:[o._({id:"1HfW/F"}),e.jsx(F,{title:o._({id:"ne/9Ur"}),children:e.jsx(z,{size:23})})]})}),e.jsx(u,{label:o._({id:"k1bLf+"}),placeholder:"#RRGGBB",...r.getInputProps("background_color"),required:!0,style:{marginBottom:15}}),e.jsx(u,{label:o._({id:"6RmHKN"}),placeholder:"#RRGGBB",...r.getInputProps("primary_color"),required:!0,style:{marginBottom:15}}),e.jsx(u,{label:o._({id:"8cBtvm"}),placeholder:"#RRGGBB",...r.getInputProps("primary_text_color"),required:!0,style:{marginBottom:15}}),e.jsx(u,{label:o._({id:"DnXcDK"}),placeholder:"#RRGGBB",...r.getInputProps("secondary_color"),required:!0,style:{marginBottom:15}}),e.jsx(u,{label:o._({id:"ZIgYeg"}),placeholder:"#RRGGBB",...r.getInputProps("secondary_text_color"),required:!0,style:{marginBottom:15}}),e.jsx("h3",{children:o._({id:"aAIQg2"})}),e.jsx(M,{label:o._({id:"AfNRFG"}),placeholder:o._({id:"xGVfLh"}),...r.getInputProps("continue_button_text"),style:{marginBottom:15}}),e.jsx(L,{label:o._({id:"fdjq4c"}),min:0,max:500,placeholder:o._({id:"IoRZzD"}),rightSection:"px",...r.getInputProps("padding"),style:{marginBottom:15}}),e.jsx(D,{label:o._({id:"IMJ6rh"}),...r.getInputProps("autoResize",{type:"checkbox"}),style:{marginBottom:15,marginTop:15},description:o._({id:"vZ5qKF"})}),e.jsx("h3",{children:"Embedding"}),e.jsxs(c,{defaultValue:"html",children:[e.jsxs(c.List,{children:[e.jsx(c.Tab,{value:"html",children:"HTML"}),e.jsx(c.Tab,{value:"react",children:"React"})]}),e.jsx("div",{style:{marginTop:15,marginBottom:15},children:e.jsxs(c.Panel,{value:"html",children:[e.jsx(x,{onChange:void 0,description:o._({id:"xdA9ud"}),label:e.jsxs(p,{children:[o._({id:"4rnJq4"}),e.jsx(h,{value:f})]}),rows:3,value:f}),e.jsx(x,{onChange:void 0,description:o._({id:"aEDp5C"}),label:e.jsxs(p,{children:[o._({id:"NTZ/NX"}),e.jsx(h,{value:v})]}),rows:6,value:v})]})}),e.jsxs(c.Panel,{value:"react",children:[e.jsx(x,{description:o._({id:"Y1SSqh"}),label:e.jsxs(p,{children:[o._({id:"DwF9eH"}),e.jsx(h,{value:y})]}),rows:6,value:y}),e.jsx(x,{description:o._({id:"6K/IHl"}),label:e.jsxs(p,{children:[o._({id:"e5lF64"}),e.jsx(h,{value:g})]}),rows:6,value:g})]})]})]})}),e.jsxs("div",{className:t.previewPane,children:[e.jsx("h2",{className:t.previewHeader,children:o._({id:"o1zPwM"})}),e.jsxs("section",{className:t.stickyContainer,children:[e.jsxs("div",{className:t.browserChrome,children:[e.jsxs("div",{className:t.browserActionButtons,children:[e.jsx("div",{}),e.jsx("div",{}),e.jsx("div",{})]}),e.jsx("div",{className:t.browserAddressBar,children:e.jsx("div",{children:e.jsx(P,{id:"OXku3b",components:{0:e.jsx("span",{})}})})})]}),e.jsxs("div",{className:t.websitePlaceholder,children:[e.jsx("h1",{children:o._({id:"Eh5Wrd"})}),e.jsx("p",{className:t.lorem,children:o._({id:"F2jAFv"})}),e.jsx("div",{className:t.widgetWrapper,children:d.isFetched?e.jsx(R,{event:d.data,widgetMode:"preview",colors:{primary:r.values.primary_color,primaryText:r.values.primary_text_color,secondary:r.values.secondary_color,secondaryText:r.values.secondary_text_color,background:r.values.background_color},continueButtonText:r.values.continue_button_text,padding:r.values.padding+"px"}):e.jsx(S,{})}),e.jsx("p",{className:t.lorem,children:o._({id:"pRjx4L"})})]})]})]})]})})},rr=()=>e.jsx(k,{children:e.jsx(se,{})});export{rr as Widget,rr as default};
