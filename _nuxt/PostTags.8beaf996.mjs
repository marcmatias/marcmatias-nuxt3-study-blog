import{o as t,F as e,J as n,O as u,P as l,c as f,C as $,Q as x,I as h,E as g}from"./entry.04926ed9.mjs";import{_}from"./_plugin-vue_export-helper.7287ed4b.mjs";const k={props:["post"],computed:{formatedDate(){return new Date(this.post.date+"T00:00:00").toLocaleString("pt-BR",{dateStyle:"short"})}}},B={class:"post-meta"};function D(c,r,s,p,d,o){return t(),e("div",B,"Postado em "+n(o.formatedDate),1)}const C=_(k,[["render",D]]),y={props:["post"]},L={class:"post-tags"},N=h("span",null,"#",-1);function S(c,r,s,p,d,o){const i=g;return t(),e("div",L,[(t(!0),e(u,null,l(s.post.tags,(a,m)=>(t(),f(i,{class:"post-tags__link",key:m,to:`/tag/${a}`},{default:$(()=>[N,x(" "+n(a),1)]),_:2},1032,["to"]))),128))])}const E=_(y,[["render",S]]);export{C as _,E as a};
