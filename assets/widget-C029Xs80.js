import{j as e,i as o,ai as j,p as T,r as m,H as p,T as P}from"./index-C9sI7Gna.js";import{P as k}from"./index-BFQnf91w.js";import{S as R}from"./index-g3dkFq1A.js";import{C as E}from"./CopyButton-CHtAK0l0.js";import{T as G}from"./Tooltip-CLG_9_Dk.js";import{A as H}from"./ActionIcon-f8sLOYys.js";import{I as N}from"./IconX-ShztG4rI.js";import{I as A}from"./IconCopy-CNp09O7b.js";import{u as $}from"./useGetEventSettings-C9oxHj6S.js";import{P as F}from"./index-BQBXmpsl.js";import{L as S}from"./index-MAjwDjbY.js";import{u as W}from"./useGetEvent-CDno4J0y.js";import{C as V}from"./index-C4jWGKXm.js";import{u as q}from"./use-form-Bbt9HXX6.js";import{m as _}from"./matches-DCiZ_LSR.js";import{I as z}from"./IconInfoCircle-GTjd0Wpn.js";import{C as u}from"./ColorInput-B-yz84Tu.js";import{T as M}from"./TextInput-BbA5zoUC.js";import{N as L}from"./NumberInput-BKsqxNIx.js";import{S as D}from"./Switch-D2yvklri.js";import{T as c}from"./Tabs-YHCRDvyQ.js";import{T as x}from"./Textarea-B_sar3qI.js";import"./useMutation-CYQcb89n.js";import"./order.client-BRrf34Oe.js";import"./notifications-DzVcCFOD.js";import"./index-D7k8R78T.js";import"./currency-7v5nqsb_.js";import"./Popover-BHePuegg.js";import"./use-resolved-styles-api-BTjKVxLz.js";import"./use-floating-auto-update-DVx11VEd.js";import"./use-uncontrolled-TwOR95g3.js";import"./IconPlus-CaidmU-r.js";import"./dates-DVVhKCjw.js";import"./dayjs.min-BonEcI70.js";import"./utc-Cwjk2NBM.js";import"./use-input-state-CmmfzdBl.js";import"./Input-iWChu1pp.js";import"./Anchor-Bklr8Exz.js";import"./IconChevronRight-BTHYOyE0.js";import"./Collapse-CsFj8PSn.js";import"./use-clipboard-CSJlCCmu.js";import"./LoadingOverlay-CY5kQqcR.js";import"./ColorPicker-BtmvRcvq.js";import"./ColorSwatch-tC7s6pK0.js";import"./clamp-DTmYCdls.js";import"./InputBase-CWghs66v.js";import"./InputsGroupFieldset-BceY9IKp.js";import"./get-safe-id-Bp3H8K0-.js";import"./get-auto-contrast-value-Da6zqqWm.js";import"./create-scoped-keydown-handler-O-eo68DQ.js";const K="_widgetGrid_1b3y4_1",U="_widgetForm_1b3y4_16",Z="_formHeader_1b3y4_21",X="_previewPane_1b3y4_31",J="_browserChrome_1b3y4_37",Q="_browserActionButtons_1b3y4_46",Y="_browserAddressBar_1b3y4_62",O="_previewHeader_1b3y4_81",ee="_websitePlaceholder_1b3y4_87",re="_widgetWrapper_1b3y4_99",oe="_lorem_1b3y4_102",te="_stickyContainer_1b3y4_107",t={widgetGrid:K,widgetForm:U,formHeader:Z,previewPane:X,browserChrome:J,browserActionButtons:Q,browserAddressBar:Y,previewHeader:O,websitePlaceholder:ee,widgetWrapper:re,lorem:oe,stickyContainer:te},h=({value:i})=>e.jsx(E,{value:i,timeout:2e3,children:({copied:d,copy:a})=>e.jsx(G,{label:d?o._({id:"6V3Ea3"}):o._({id:"he3ygx"}),withArrow:!0,position:"right",children:e.jsx(H,{color:d?"teal":"gray",variant:"subtle",onClick:a,children:d?e.jsx(N,{style:{width:j(16)}}):e.jsx(A,{style:{width:j(16)}})})})}),se=()=>{const{eventId:i}=T(),d=W(i),a=o._({id:"Vd+LC3"}),l=/^#([0-9a-f]{3,4}|[0-9a-f]{6}|[0-9a-f]{8})$/,{data:s,isFetched:w}=$(i),r=q({initialValues:{background_color:"#ffffff",primary_color:"#828282",primary_text_color:"#ffffff",secondary_color:"#f5f5f5",secondary_text_color:"#828282",continue_button_text:o._({id:"xGVfLh"}),padding:20,autoResize:!0},validate:{background_color:_(l,a),primary_color:_(l,a),primary_text_color:_(l,a),secondary_color:_(l,a),secondary_text_color:_(l,a)}}),[v,C]=m.useState(""),[y,B]=m.useState(""),[g,I]=m.useState(""),n=typeof window<"u"?window==null?void 0:window.location:void 0,b=`${n==null?void 0:n.protocol}//${n==null?void 0:n.host}/widget.js`,f=`<script async src="${b}"><\/script>`;return m.useEffect(()=>{C('<div data-hievents-id="'+i+'" data-hievents-primary-color="'+r.values.primary_color+'" data-hievents-primary-text-color="'+r.values.primary_text_color+'" data-hievents-secondary-color="'+r.values.secondary_color+'" data-hievents-secondary-text-color="'+r.values.secondary_text_color+'" data-hievents-background-color="'+r.values.background_color+'" data-hievents-widget-type="widget" data-hievents-widget-version="1.0" data-hievents-locale="en" data-hievents-padding="'+r.values.padding+'px" data-hievents-autoresize="'+r.values.autoResize+'" data-hievents-continue-button-text="'+r.values.continue_button_text+'" class="hievents-widget"></div>'),B(`
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
