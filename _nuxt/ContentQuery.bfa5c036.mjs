import{a as q,t as g,k as S,e as b,h as k}from"./entry.04926ed9.mjs";import{u as C}from"./asyncData.2e68f489.mjs";import{h as $}from"./json.5e9b3df1.mjs";import{q as m}from"./query.19d3968d.mjs";import"./utils.41cc6a8b.mjs";import"./utils.e766e4ed.mjs";const P=q({props:{path:{type:String,required:!1,default:void 0},only:{type:Array,required:!1,default:void 0},without:{type:Array,required:!1,default:void 0},where:{type:Object,required:!1,default:void 0},sort:{type:Object,required:!1,default:void 0},limit:{type:Number,required:!1,default:void 0},skip:{type:Number,required:!1,default:void 0},locale:{type:String,required:!1,default:void 0},find:{type:String,required:!1,default:void 0}},async setup(a){const{path:t,only:r,without:n,where:i,sort:o,limit:l,skip:s,locale:f,find:d}=g(a),p=S(()=>t.value.includes("/_")),{data:h,refresh:y}=await C(`content-query-${$(a)}`,()=>{let e;return t.value?e=m(t.value):e=m(),r.value&&(e=e.only(r.value)),n.value&&(e=e.without(n.value)),i.value&&(e=e.where(i.value)),o.value&&(e=e.sort(o.value)),l.value&&(e=e.limit(l.value)),s.value&&(e=e.skip(s.value)),f.value&&(e=e.where({_locale:f.value})),d.value==="one"?e.findOne():d.value==="surround"?t.value?e.findSurround(t):(console.warn("[Content] Surround queries requires `path` prop to be set."),console.warn("[Content] Query without `path` will return regular `find()` results."),e.find()):e.find()},"$4SxX7Zuw4E");return{isPartial:p,data:h,refresh:y}},render(a){var v;const t=b(),{data:r,refresh:n,isPartial:i,path:o,only:l,without:s,where:f,sort:d,limit:p,skip:h,locale:y,find:e}=a,u={path:o,only:l,without:s,where:f,sort:d,limit:p,skip:h,locale:y,find:e};if(u.find==="one"){if(!r&&(t==null?void 0:t["not-found"]))return t["not-found"]({props:u,...this.$attrs});if(r._type&&r._type==="markdown"&&!((v=r==null?void 0:r.body)!=null&&v.children.length))return t.empty({props:u,...this.$attrs})}else if((!r||!r.length)&&t!=null&&t["not-found"])return t["not-found"]({props:u,...this.$attrs});return t!=null&&t.default?t.default({data:r,refresh:n,isPartial:i,props:u,...this.$attrs}):((c,w)=>k("pre",null,JSON.stringify({message:"You should use slots with <ContentQuery>!",slot:c,data:w},null,2)))("default",{data:r,props:u,isPartial:i})}});export{P as default};
