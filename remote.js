(function(g){var window=this;'use strict';var mYa=function(a,b,c){null!=c&&(g.rd(a,b,1),a=a.i,b=c>>>0,c=Math.floor((c-b)/4294967296)>>>0,g.xe=b,g.we=c,g.pd(a,g.xe),g.pd(a,g.we))},nYa=function(a,b,c){b=g.zd(b,c);
null!=b&&(g.rd(a,c,0),a.i.i.push(b?1:0))},oYa=function(a,b){return g.rf(a,b)},pYa=function(a,b){b=b instanceof g.tg?b:g.zg(b,/^data:image\//i.test(b));
a.src=g.ug(b)},rYa=function(a){g.E.call(this,a,-1,qYa)},sYa=function(a){g.E.call(this,a)},vYa=function(){return[1,
tYa,2,uYa]},wYa=function(){return[1,
g.vr,sYa,vYa]},xYa=function(a){g.E.call(this,a)},yYa=function(a){g.E.call(this,a)},AYa=function(){return[1,
g.xr,2,g.xr,3,zYa]},BYa=function(a){g.E.call(this,a)},DYa=function(){return[1,
g.xr,2,g.xr,3,CYa,4,zYa]},FYa=function(){return[1,
g.Ne,yYa,AYa,EYa,2,g.Ne,BYa,DYa,EYa]},JYa=function(){return[1,
GYa,g.Pi,2,HYa,g.Pi,3,IYa,g.Pi]},MYa=function(){return[1,
KYa,g.Oi,2,LYa,g.Oi,3,g.Ne,rYa,wYa,g.Oi]},OYa=function(){return[1,
g.vr,g.Ji,JYa,2,NYa,g.Mi,MYa]},SYa=function(){return[1,
g.xr,5,PYa,2,NYa,xYa,FYa,3,QYa,6,RYa,4,g.vr,g.Ii,OYa]},W6=function(a){g.Dl(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^g.Va()).toString(36));
return a},X6=function(a,b,c){Array.isArray(c)||(c=[String(c)]);
g.Il(a.j,b,c)},TYa=function(a){if(a===g.So)throw Error("ES6 Iteration protocol does NOT adjust control flow when StopIteration is thrown from callback helper functions. If your code relies on this behavior, consider throwing a different error and catching it to terminate iteration.");
throw a;},UYa=function(a){if(a instanceof g.Qo)return a;
if("function"==typeof a.Qg)return a.Qg(!1);if(g.Oa(a)){var b=0,c=new g.Qo;c.next=function(){for(;;){if(b>=a.length)return g.j2;if(b in a)return g.Ro(a[b++]);b++}};
var d=c.next;c.Nj=function(){return g.To(d.call(c))};
return c}throw Error("Not implemented");},VYa=function(a,b,c){if(g.Oa(a))try{g.rc(a,b,c)}catch(e){TYa(e)}else for(a=UYa(a);;){var d=void 0;
try{d=a.Nj()}catch(e){if(e===g.So)break;throw e;}try{b.call(c,d,void 0,a)}catch(e){TYa(e)}}},WYa=function(a,b){var c=[];
VYa(b,function(d){try{var e=g.er.prototype.j.call(this,d,!0)}catch(f){if("Storage: Invalid value was encountered"==f)return;throw f;}void 0===e?c.push(d):g.Rga(e)&&c.push(d)},a);
return c},XYa=function(a,b){WYa(a,b).forEach(function(c){g.er.prototype.remove.call(this,c)},a)},YYa=function(a){if(a.ea){if(a.ea.locationOverrideToken)return{locationOverrideToken:a.ea.locationOverrideToken};
if(null!=a.ea.latitudeE7&&null!=a.ea.longitudeE7)return{latitudeE7:a.ea.latitudeE7,longitudeE7:a.ea.longitudeE7}}return null},ZYa=function(a,b){g.Zb(a,b)||a.push(b)},Y6=function(a){var b=0,c;
for(c in a)b++;return b},$Ya=function(a){try{return g.C.JSON.parse(a)}catch(b){}a=String(a);
if(/^\s*$/.test(a)?0:/^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g,"@").replace(/(?:"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)[\s\u2028\u2029]*(?=:|,|]|}|$)/g,"]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g,"")))try{return eval("("+a+")")}catch(b){}throw Error("Invalid JSON string: "+a);},Z6=function(a){if(g.C.JSON)try{return g.C.JSON.parse(a)}catch(b){}return $Ya(a)},aZa=function(a,b,c,d){var e=new g.ll(null,void 0);
a&&g.ml(e,a);b&&g.nl(e,b);c&&g.ol(e,c);d&&(e.J=d);return e},$6=function(a,b){g.hu[a]=!0;
var c=g.fu();c&&c.publish.apply(c,arguments);g.hu[a]=!1},a7=function(a){this.name=this.id="";
this.clientName="UNKNOWN_INTERFACE";this.app="";this.type="REMOTE_CONTROL";this.obfuscatedGaiaId=this.avatar=this.username="";this.capabilities=new Set;this.experiments=new Set;this.theme="u";new g.Nq;this.model=this.brand="";this.year=0;this.chipset=this.osVersion=this.os="";this.mdxDialServerType="MDX_DIAL_SERVER_TYPE_UNKNOWN";a&&(this.id=a.id||a.name,this.name=a.name,this.clientName=a.clientName?a.clientName.toUpperCase():"UNKNOWN_INTERFACE",this.app=a.app,this.type=a.type||"REMOTE_CONTROL",this.username=
a.user||"",this.avatar=a.userAvatarUri||"",this.obfuscatedGaiaId=a.obfuscatedGaiaId||"",this.theme=a.theme||"u",bZa(this,a.capabilities||""),cZa(this,a.experiments||""),this.brand=a.brand||"",this.model=a.model||"",this.year=a.year||0,this.os=a.os||"",this.osVersion=a.osVersion||"",this.chipset=a.chipset||"",this.mdxDialServerType=a.mdxDialServerType||"MDX_DIAL_SERVER_TYPE_UNKNOWN",a=a.deviceInfo)&&(a=JSON.parse(a),this.brand=a.brand||"",this.model=a.model||"",this.year=a.year||0,this.os=a.os||"",
this.osVersion=a.osVersion||"",this.chipset=a.chipset||"",this.clientName=a.clientName?a.clientName.toUpperCase():"UNKNOWN_INTERFACE",this.mdxDialServerType=a.mdxDialServerType||"MDX_DIAL_SERVER_TYPE_UNKNOWN")},bZa=function(a,b){a.capabilities.clear();
g.Xo(b.split(","),g.Ua(oYa,dZa)).forEach(function(c){a.capabilities.add(c)})},cZa=function(a,b){a.experiments.clear();
b.split(",").forEach(function(c){a.experiments.add(c)})},b7=function(a){a=a||{};
this.name=a.name||"";this.id=a.id||a.screenId||"";this.token=a.token||a.loungeToken||"";this.uuid=a.uuid||a.dialId||"";this.idType=a.screenIdType||"normal"},c7=function(a,b){return!!b&&(a.id==b||a.uuid==b)},eZa=function(a){return{name:a.name,
screenId:a.id,loungeToken:a.token,dialId:a.uuid,screenIdType:a.idType}},fZa=function(a){return new b7(a)},gZa=function(a){return Array.isArray(a)?g.Kn(a,fZa):[]},d7=function(a){return a?'{name:"'+a.name+'",id:'+a.id.substr(0,6)+"..,token:"+((a.token?".."+a.token.slice(-6):"-")+",uuid:"+(a.uuid?".."+a.uuid.slice(-6):"-")+",idType:"+a.idType+"}"):"null"},e7=function(a){return Array.isArray(a)?"["+g.Kn(a,d7).join(",")+"]":"null"},f7=function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,
function(a){var b=16*Math.random()|0;
return("x"==a?b:b&3|8).toString(16)})},hZa=function(a){return g.Kn(a,function(b){return{key:b.id,
name:b.name}})},g7=function(a,b){return g.Wb(a,function(c){return c||b?!c!=!b?!1:c.id==b.id:!0})},h7=function(a,b){return g.Wb(a,function(c){return c7(c,b)})},iZa=function(){var a=(0,g.Hx)();
a&&XYa(a,a.i.Qg(!0))},i7=function(){var a=g.Kx("yt-remote-connected-devices")||[];
g.oc(a);return a},jZa=function(a){if(g.$b(a))return[];
var b=a[0].indexOf("#"),c=-1==b?a[0]:a[0].substring(0,b);return g.Kn(a,function(d,e){return 0==e?d:d.substring(c.length)})},kZa=function(a){g.Jx("yt-remote-connected-devices",a,86400)},k7=function(){if(j7)return j7;
var a=g.Kx("yt-remote-device-id");a||(a=f7(),g.Jx("yt-remote-device-id",a,31536E3));for(var b=i7(),c=1,d=a;g.Zb(b,d);)c++,d=a+"#"+c;return j7=d},l7=function(){var a=i7(),b=k7();
g.Zb(a,b);g.Mx()&&g.qc(a,b);a=jZa(a);if(g.$b(a))try{g.tka("remote_sid")}catch(c){}else try{g.kt("remote_sid",a.join(","),-1)}catch(c){}},lZa=function(){return g.Kx("yt-remote-session-browser-channel")},mZa=function(){return g.Kx("yt-remote-local-screens")||[]},nZa=function(){g.Jx("yt-remote-lounge-token-expiration",!0,86400)},oZa=function(a){5<a.length&&(a=a.slice(a.length-5));
var b=g.Kn(mZa(),function(d){return d.loungeToken}),c=g.Kn(a,function(d){return d.loungeToken});
g.Ln(c,function(d){return!g.Zb(b,d)})&&nZa();
g.Jx("yt-remote-local-screens",a,31536E3)},pZa=function(a,b){g.Jx("yt-remote-session-browser-channel",a);
g.Jx("yt-remote-session-screen-id",b);a=i7();b=k7();g.Zb(a,b)||a.push(b);kZa(a);l7()},m7=function(a){a||(g.Lx("yt-remote-session-screen-id"),g.Lx("yt-remote-session-video-id"));
l7();a=i7();g.cc(a,k7());kZa(a)},qZa=function(){if(!n7){var a=g.nr();
a&&(n7=new g.br(a))}},rZa=function(){qZa();
return n7?!!n7.get("yt-remote-use-staging-server"):!1},o7=function(){var a=window.navigator.userAgent.match(/Chrome\/([0-9]+)/);
return a?parseInt(a[1],10):0},sZa=function(a){return!!document.currentScript&&(-1!=document.currentScript.src.indexOf("?"+a)||-1!=document.currentScript.src.indexOf("&"+a))},tZa=function(){return"function"==typeof window.__onGCastApiAvailable?window.__onGCastApiAvailable:null},p7=function(a){a.length?uZa(a.shift(),function(){p7(a)}):q7()},vZa=function(a){return"chrome-extension://"+a+"/cast_sender.js"},uZa=function(a,b,c){var d=document.createElement("script");
d.onerror=b;c&&(d.onload=c);g.Fk(d,g.Sq(a));(document.head||document.documentElement).appendChild(d)},wZa=function(){var a=o7(),b=[];
if(1<a){var c=a-1;b.push("//www.gstatic.com/eureka/clank/"+a+"/cast_sender.js");b.push("//www.gstatic.com/eureka/clank/"+c+"/cast_sender.js")}return b},q7=function(){var a=tZa();
a&&a(!1,"No cast extension found")},r7=function(){if(xZa){var a=2,b=tZa(),c=function(){a--;
0==a&&b&&b(!0)};
window.__onGCastApiAvailable=c;uZa("//www.gstatic.com/cast/sdk/libs/sender/1.0/cast_framework.js",q7,c)}},yZa=function(){r7();
var a=wZa();a.push("//www.gstatic.com/eureka/clank/cast_sender.js");p7(a)},AZa=function(){r7();
var a=wZa();a.push.apply(a,g.u(zZa.map(vZa)));a.push("//www.gstatic.com/eureka/clank/cast_sender.js");p7(a)},BZa=function(){this.i=s7();
this.i.Ty("/client_streamz/youtube/living_room/mdx/browser_channel/closed_channels")},CZa=function(){this.i=s7();
this.i.Ty("/client_streamz/youtube/living_room/mdx/browser_channel/pending_maps")},DZa=function(){this.i=s7();
this.i.Ty("/client_streamz/youtube/living_room/mdx/browser_channel/undelivered_maps")},t7=function(a,b,c){g.G.call(this);
this.I=null!=c?(0,g.Ta)(a,c):a;this.Zf=b;this.C=(0,g.Ta)(this.ER,this);this.i=!1;this.j=0;this.u=this.Pb=null;this.B=[]},u7=function(a,b,c){g.G.call(this);
this.B=null!=c?a.bind(c):a;this.Zf=b;this.u=null;this.i=!1;this.j=0;this.Pb=null},v7=function(a){a.Pb=g.Ai(function(){a.Pb=null;
a.i&&!a.j&&(a.i=!1,v7(a))},a.Zf);
var b=a.u;a.u=null;a.B.apply(null,b)},w7=function(){},x7=function(a,b){if("function"!==typeof a)throw Error("Fn must not be null and must be a function");
return g.C.setTimeout(function(){a()},b)},z7=function(a){y7.dispatchEvent(new EZa(y7,a))},EZa=function(a,b){g.We.call(this,"statevent",a);
this.stat=b},A7=function(a,b,c,d){this.i=a;
this.u=b;this.N=c;this.J=d||1;this.j=45E3;this.B=new g.Jl(this);this.I=new g.zi;this.I.setInterval(250)},GZa=function(a,b,c){a.uu=1;
a.An=W6(b.clone());a.Oq=c;a.C=!0;FZa(a,null)},B7=function(a,b,c,d,e){a.uu=1;
a.An=W6(b.clone());a.Oq=null;a.C=c;e&&(a.RO=!1);FZa(a,d)},FZa=function(a,b){a.Tt=Date.now();
C7(a);a.Xo=a.An.clone();X6(a.Xo,"t",a.J);a.iC=0;a.Pf=a.i.mE(a.i.Vx()?b:null);0<a.ZC&&(a.tB=new u7((0,g.Ta)(a.QP,a,a.Pf),a.ZC));a.B.Pa(a.Pf,"readystatechange",a.FR);b=a.xp?g.yf(a.xp):{};a.Oq?(a.fC="POST",b["Content-Type"]="application/x-www-form-urlencoded",a.Pf.send(a.Xo,a.fC,a.Oq,b)):(a.fC="GET",a.RO&&!g.$e&&(b.Connection="close"),a.Pf.send(a.Xo,a.fC,null,b));a.i.Oj(1)},IZa=function(a,b){var c=a.iC,d=b.indexOf("\n",c);
if(-1==d)return D7;c=Number(b.substring(c,d));if(isNaN(c))return HZa;d+=1;if(d+c>b.length)return D7;b=b.substr(d,c);a.iC=d+c;return b},KZa=function(a,b){a.Tt=Date.now();
C7(a);var c=b?window.location.hostname:"";a.Xo=a.An.clone();g.Dl(a.Xo,"DOMAIN",c);g.Dl(a.Xo,"t",a.J);try{a.ek=new ActiveXObject("htmlfile")}catch(m){E7(a);a.pn=7;z7(22);F7(a);return}var d="<html><body>";if(b){var e="";for(b=0;b<c.length;b++){var f=c.charAt(b);if("<"==f)f=e+"\\x3c";else if(">"==f)f=e+"\\x3e";else{if(f in G7)f=G7[f];else if(f in JZa)f=G7[f]=JZa[f];else{var k=f.charCodeAt(0);if(31<k&&127>k)var l=f;else{if(256>k){if(l="\\x",16>k||256<k)l+="0"}else l="\\u",4096>k&&(l+="0");l+=k.toString(16).toUpperCase()}f=
G7[f]=l}f=e+f}e=f}d+='<script>document.domain="'+e+'"\x3c/script>'}d+="</body></html>";c=g.Qg(g.lg("b/12014412"),d);a.ek.open();a.ek.write(g.Kg(c));a.ek.close();a.ek.parentWindow.m=(0,g.Ta)(a.JX,a);a.ek.parentWindow.d=(0,g.Ta)(a.aO,a,!0);a.ek.parentWindow.rpcClose=(0,g.Ta)(a.aO,a,!1);c=a.ek.createElement("DIV");a.ek.parentWindow.document.body.appendChild(c);d=g.yg(a.Xo.toString());d=g.gh(g.ug(d));d=g.Qg(g.lg("b/12014412"),'<iframe src="'+d+'"></iframe>');g.Sg(c,d);a.i.Oj(1)},C7=function(a){a.kI=Date.now()+
a.j;
LZa(a,a.j)},LZa=function(a,b){if(null!=a.Hu)throw Error("WatchDog timer not null");
a.Hu=x7((0,g.Ta)(a.RX,a),b)},H7=function(a){a.Hu&&(g.C.clearTimeout(a.Hu),a.Hu=null)},F7=function(a){a.i.zf()||a.Pp||a.i.Ny(a)},E7=function(a){H7(a);
g.Te(a.tB);a.tB=null;a.I.stop();g.Ll(a.B);if(a.Pf){var b=a.Pf;a.Pf=null;b.abort();b.dispose()}a.ek&&(a.ek=null)},I7=function(a,b){try{a.i.TN(a,b),a.i.Oj(4)}catch(c){}},NZa=function(a,b,c,d,e){if(0==d)c(!1);
else{var f=e||0;d--;MZa(a,b,function(k){k?c(!0):g.C.setTimeout(function(){NZa(a,b,c,d,f)},f)})}},MZa=function(a,b,c){var d=new Image;
d.onload=function(){try{J7(d),c(!0)}catch(e){}};
d.onerror=function(){try{J7(d),c(!1)}catch(e){}};
d.onabort=function(){try{J7(d),c(!1)}catch(e){}};
d.ontimeout=function(){try{J7(d),c(!1)}catch(e){}};
g.C.setTimeout(function(){if(d.ontimeout)d.ontimeout()},b);
pYa(d,a)},J7=function(a){a.onload=null;
a.onerror=null;a.onabort=null;a.ontimeout=null},OZa=function(a){this.i=a;
this.j=new w7},PZa=function(a){var b=K7(a.i,a.Cv,"/mail/images/cleardot.gif");
W6(b);NZa(b.toString(),5E3,(0,g.Ta)(a.uS,a),3,2E3);a.Oj(1)},M7=function(a){var b=a.i.W;
if(null!=b)z7(5),b?(z7(11),L7(a.i,a,!1)):(z7(12),L7(a.i,a,!0));else if(a.uh=new A7(a,void 0,void 0,void 0),a.uh.xp=a.aD,b=a.i,b=K7(b,b.Vx()?a.hv:null,a.bD),z7(5),!g.Ic||g.Bc(10))X6(b,"TYPE","xmlhttp"),B7(a.uh,b,!1,a.hv,!1);else{X6(b,"TYPE","html");var c=a.uh;a=!!a.hv;c.uu=3;c.An=W6(b.clone());KZa(c,a)}},N7=function(a,b,c){this.i=1;
this.j=[];this.B=[];this.C=new w7;this.N=a||null;this.W=null!=b?b:null;this.I=c||!1},QZa=function(a,b){this.i=a;
this.map=b;this.context=null},RZa=function(a,b,c,d){g.We.call(this,"timingevent",a);
this.size=b;this.Lx=d},SZa=function(a){g.We.call(this,"serverreachability",a)},VZa=function(a){TZa(a);
if(3==a.i){var b=a.Xw++,c=a.Ez.clone();g.Dl(c,"SID",a.u);g.Dl(c,"RID",b);g.Dl(c,"TYPE","terminate");O7(a,c);b=new A7(a,a.u,b,void 0);b.uu=2;b.An=W6(c.clone());pYa(new Image,b.An.toString());b.Tt=Date.now();C7(b)}UZa(a)},WZa=function(a){a.ZS(1,0);
a.Ez=K7(a,null,a.cD);P7(a)},TZa=function(a){a.En&&(a.En.abort(),a.En=null);
a.Qe&&(a.Qe.cancel(),a.Qe=null);a.Tl&&(g.C.clearTimeout(a.Tl),a.Tl=null);Q7(a);a.ah&&(a.ah.cancel(),a.ah=null);a.Pn&&(g.C.clearTimeout(a.Pn),a.Pn=null)},XZa=function(a,b){if(0==a.i)throw Error("Invalid operation: sending map when state is closed");
a.j.push(new QZa(a.LU++,b));2!=a.i&&3!=a.i||P7(a)},YZa=function(a){var b=0;
a.Qe&&b++;a.ah&&b++;return b},P7=function(a){a.ah||a.Pn||(a.Pn=x7((0,g.Ta)(a.YN,a),0),a.Ns=0)},$Za=function(a,b){if(1==a.i){if(!b){a.Xw=Math.floor(1E5*Math.random());
b=a.Xw++;var c=new A7(a,"",b,void 0);c.xp=a.zk;var d=R7(a),e=a.Ez.clone();g.Dl(e,"RID",b);g.Dl(e,"CVER","1");O7(a,e);GZa(c,e,d);a.ah=c;a.i=2}}else 3==a.i&&(b?ZZa(a,b):0==a.j.length||a.ah||ZZa(a))},ZZa=function(a,b){if(b)if(6<a.Qp){a.j=a.B.concat(a.j);
a.B.length=0;var c=a.Xw-1;b=R7(a)}else c=b.N,b=b.Oq;else c=a.Xw++,b=R7(a);var d=a.Ez.clone();g.Dl(d,"SID",a.u);g.Dl(d,"RID",c);g.Dl(d,"AID",a.wt);O7(a,d);c=new A7(a,a.u,c,a.Ns+1);c.xp=a.zk;c.setTimeout(1E4+Math.round(1E4*Math.random()));a.ah=c;GZa(c,d,b)},O7=function(a,b){a.Qf&&(a=a.Qf.rL())&&g.ff(a,function(c,d){g.Dl(b,d,c)})},R7=function(a){var b=Math.min(a.j.length,1E3),c=["count="+b];
if(6<a.Qp&&0<b){var d=a.j[0].i;c.push("ofs="+d)}else d=0;for(var e={},f=0;f<b;e={Cr:e.Cr},f++){e.Cr=a.j[f].i;var k=a.j[f].map;e.Cr=6>=a.Qp?f:e.Cr-d;try{g.ff(k,function(l){return function(m,n){c.push("req"+l.Cr+"_"+n+"="+encodeURIComponent(m))}}(e))}catch(l){c.push("req"+e.Cr+"_type="+encodeURIComponent("_badmap"))}}a.B=a.B.concat(a.j.splice(0,b));
return c.join("&")},a_a=function(a){a.Qe||a.Tl||(a.J=1,a.Tl=x7((0,g.Ta)(a.XN,a),0),a.xs=0)},S7=function(a){if(a.Qe||a.Tl||3<=a.xs)return!1;
a.J++;a.Tl=x7((0,g.Ta)(a.XN,a),b_a(a,a.xs));a.xs++;return!0},L7=function(a,b,c){a.dC=c;
a.Ak=b.Kl;a.I||WZa(a)},Q7=function(a){null!=a.Yp&&(g.C.clearTimeout(a.Yp),a.Yp=null)},b_a=function(a,b){var c=5E3+Math.floor(1E4*Math.random());
a.isActive()||(c*=2);return c*b},T7=function(a,b){if(2==b||9==b){var c=null;
a.Qf&&(c=null);var d=(0,g.Ta)(a.XY,a);c||(c=new g.ll("//www.google.com/images/cleardot.gif"),W6(c));MZa(c.toString(),1E4,d)}else z7(2);c_a(a,b)},c_a=function(a,b){a.i=0;
a.Qf&&a.Qf.GK(b);UZa(a);TZa(a)},UZa=function(a){a.i=0;
a.Ak=-1;if(a.Qf)if(0==a.B.length&&0==a.j.length)a.Qf.WD();else{var b=g.fc(a.B),c=g.fc(a.j);a.B.length=0;a.j.length=0;a.Qf.WD(b,c)}},K7=function(a,b,c){var d=g.El(c);
if(""!=d.i)b&&g.nl(d,b+"."+d.i),g.ol(d,d.u);else{var e=window.location;d=aZa(e.protocol,b?b+"."+e.hostname:e.hostname,+e.port,c)}a.Wv&&g.ff(a.Wv,function(f,k){g.Dl(d,k,f)});
g.Dl(d,"VER",a.Qp);O7(a,d);return d},d_a=function(){},e_a=function(){this.i=[];
this.j=[]},f_a=function(){},s7=function(){if(!U7){U7=new g.Ci(new f_a);
var a=g.Bs("client_streamz_web_flush_count",-1);-1!==a&&(U7.B=a)}return U7},g_a=function(a,b){this.action=a;
this.params=b||{}},V7=function(a,b){g.G.call(this);
this.i=new g.K(this.AX,0,this);g.J(this,this.i);this.Zf=5E3;this.j=0;if("function"===typeof a)b&&(a=(0,g.Ta)(a,b));else if(a&&"function"===typeof a.handleEvent)a=(0,g.Ta)(a.handleEvent,a);else throw Error("Invalid listener argument");this.u=a},W7=function(a,b,c,d,e){c=void 0===c?!1:c;
d=void 0===d?function(){return""}:d;
e=void 0===e?!1:e;this.va=a;this.I=b;this.u=new g.ar;this.j=new V7(this.yY,this);this.i=null;this.Y=!1;this.C=null;this.W="";this.N=this.B=0;this.J=[];this.ya=c;this.ea=d;this.Ha=e;this.xa=new BZa;this.Ia=new CZa;this.La=new DZa},h_a=function(a){return{firstTestResults:[""],
secondTestResults:!a.i.dC,sessionId:a.i.u,arrayId:a.i.wt}},i_a=function(a,b){a.N=b||0;
a.j.stop();X7(a);a.i&&(3==a.i.getState()&&$Za(a.i),VZa(a.i));a.N=0},Y7=function(a){return!!a.i&&3==a.i.getState()},X7=function(a){if(a.i){var b=a.ea(),c=a.i.zk||{};
b?c["x-youtube-lounge-xsrf-token"]=b:delete c["x-youtube-lounge-xsrf-token"];a.i.zk=c}},Z7=function(a){this.port=this.domain="";
this.i="/api/lounge";this.j=!0;a=a||document.location.href;var b=Number(g.nj(4,a))||"";b&&(this.port=":"+b);this.domain=g.oj(a)||"";a=g.zb();0<=a.search("MSIE")&&(a=a.match(/MSIE ([\d.]+)/)[1],0>g.yb(a,"10.0")&&(this.j=!1))},$7=function(a,b){var c=a.i;
a.j&&(c="https://"+a.domain+a.port+a.i);return g.zj(c+b,{})},a8=function(a,b,c,d,e){a={format:"JSON",
method:"POST",context:a,timeout:5E3,withCredentials:!1,onSuccess:g.Ua(a.B,d,!0),onError:g.Ua(a.u,e),onTimeout:g.Ua(a.C,e)};c&&(a.postParams=c,a.headers={"Content-Type":"application/x-www-form-urlencoded"});return g.at(b,a)},m_a=function(){var a=j_a;
k_a();b8.push(a);l_a()},c8=function(a,b){k_a();
var c=n_a(a,String(b));g.$b(b8)?o_a(c):(l_a(),g.rc(b8,function(d){d(c)}))},k_a=function(){b8||(b8=g.Ka("yt.mdx.remote.debug.handlers_")||[],g.Ia("yt.mdx.remote.debug.handlers_",b8,void 0))},o_a=function(a){var b=(d8+1)%50;
d8=b;e8[b]=a;f8||(f8=49==b)},l_a=function(){var a=b8;
if(e8[0]){var b=f8?d8:-1;do{b=(b+1)%50;var c=e8[b];g.rc(a,function(d){d(c)})}while(b!=d8);
e8=Array(50);d8=-1;f8=!1}},n_a=function(a,b){var c=(Date.now()-p_a)/1E3;
c.toFixed&&(c=c.toFixed(3));var d=[];d.push("[",c+"s","] ");d.push("[","yt.mdx.remote","] ");d.push(a+": "+b,"\n");return d.join("")},g8=function(a){g.Uw.call(this);
this.I=a;this.screens=[]},q_a=function(a,b){var c=a.get(b.uuid)||a.get(b.id);
if(c)return a=c.name,c.id=b.id||c.id,c.name=b.name,c.token=b.token,c.uuid=b.uuid||c.uuid,c.name!=a;a.screens.push(b);return!0},r_a=function(a,b){var c=a.screens.length!=b.length;
a.screens=g.Xo(a.screens,function(f){return!!g7(b,f)});
for(var d=0,e=b.length;d<e;d++)c=q_a(a,b[d])||c;return c},s_a=function(a,b){var c=a.screens.length;
a.screens=g.Xo(a.screens,function(d){return!(d||b?!d!=!b?0:d.id==b.id:1)});
return a.screens.length<c},h8=function(a,b,c,d,e){g.Uw.call(this);
this.u=a;this.J=b;this.B=c;this.I=d;this.C=e;this.j=0;this.i=null;this.Pb=NaN},j8=function(a){g8.call(this,"LocalScreenService");
this.j=a;this.i=NaN;i8(this);this.info("Initializing with "+e7(this.screens))},t_a=function(a){if(a.screens.length){var b=g.Kn(a.screens,function(d){return d.id}),c=$7(a.j,"/pairing/get_lounge_token_batch");
a8(a.j,c,{screen_ids:b.join(",")},(0,g.Ta)(a.AT,a),(0,g.Ta)(a.zT,a))}},i8=function(a){if(g.Q("deprecate_pair_servlet_enabled"))return r_a(a,[]);
var b=gZa(mZa());b=g.Xo(b,function(c){return!c.uuid});
return r_a(a,b)},k8=function(a,b){oZa(g.Kn(a.screens,eZa));
b&&nZa()},m8=function(a,b){g.Uw.call(this);
this.I=b;b=(b=g.Kx("yt-remote-online-screen-ids")||"")?b.split(","):[];for(var c={},d=this.I(),e=0,f=d.length;e<f;++e){var k=d[e].id;c[k]=g.Zb(b,k)}this.i=c;this.C=a;this.u=this.B=NaN;this.j=null;l8("Initialized with "+g.ej(this.i))},n8=function(a,b,c){var d=$7(a.C,"/pairing/get_screen_availability");
a8(a.C,d,{lounge_token:b.token},(0,g.Ta)(function(e){e=e.screens||[];for(var f=0,k=e.length;f<k;++f)if(e[f].loungeToken==b.token){c("online"==e[f].status);return}c(!1)},a),(0,g.Ta)(function(){c(!1)},a))},o8=function(a,b){a:if(Y6(b)!=Y6(a.i))var c=!1;
else{c=g.pf(b);for(var d=0,e=c.length;d<e;++d)if(!a.i[c[d]]){c=!1;break a}c=!0}c||(l8("Updated online screens: "+g.ej(a.i)),a.i=b,a.Z("screenChange"));u_a(a)},p8=function(a){isNaN(a.u)||g.Xs(a.u);
a.u=g.Vs((0,g.Ta)(a.bH,a),0<a.B&&a.B<g.Va()?2E4:1E4)},l8=function(a){c8("OnlineScreenService",a)},v_a=function(a){var b={};
g.rc(a.I(),function(c){c.token?b[c.token]=c.id:this.xe("Requesting availability of screen w/o lounge token.")});
return b},u_a=function(a){a=g.pf(g.hf(a.i,function(b){return b}));
g.oc(a);a.length?g.Jx("yt-remote-online-screen-ids",a.join(","),60):g.Lx("yt-remote-online-screen-ids")},q8=function(a,b){b=void 0===b?!1:b;
g8.call(this,"ScreenService");this.B=a;this.J=b;this.i=this.j=null;this.u=[];this.C={};w_a(this)},y_a=function(a,b,c,d,e,f){a.info("getAutomaticScreenByIds "+c+" / "+b);
c||(c=a.C[b]);var k=a.Jh(),l=c?h7(k,c):null;c&&(a.J||l)||(l=h7(k,b));if(l){l.uuid=b;var m=r8(a,l);n8(a.i,m,function(n){e(n?m:null)})}else c?x_a(a,c,(0,g.Ta)(function(n){var p=r8(this,new b7({name:d,
screenId:c,loungeToken:n,dialId:b||""}));n8(this.i,p,function(r){e(r?p:null)})},a),f):e(null)},z_a=function(a,b){for(var c=0,d=a.screens.length;c<d;++c)if(a.screens[c].name==b)return a.screens[c];
return null},A_a=function(a,b,c){n8(a.i,b,c)},x_a=function(a,b,c,d){a.info("requestLoungeToken_ for "+b);
var e={postParams:{screen_ids:b},method:"POST",context:a,onSuccess:function(f,k){f=k&&k.screens||[];f[0]&&f[0].screenId==b?c(f[0].loungeToken):d(Error("Missing lounge token in token response"))},
onError:function(){d(Error("Request screen lounge token failed"))}};
g.at($7(a.B,"/pairing/get_lounge_token_batch"),e)},B_a=function(a){a.screens=a.j.Jh();
var b=a.C,c={},d;for(d in b)c[b[d]]=d;b=0;for(d=a.screens.length;b<d;++b){var e=a.screens[b];e.uuid=c[e.id]||""}a.info("Updated manual screens: "+e7(a.screens))},w_a=function(a){s8(a);
a.j=new j8(a.B);a.j.subscribe("screenChange",(0,g.Ta)(a.JT,a));B_a(a);a.J||(a.u=gZa(g.Kx("yt-remote-automatic-screen-cache")||[]));s8(a);a.info("Initializing automatic screens: "+e7(a.u));a.i=new m8(a.B,(0,g.Ta)(a.Jh,a,!0));a.i.subscribe("screenChange",(0,g.Ta)(function(){this.Z("onlineScreenChange")},a))},r8=function(a,b){var c=a.get(b.id);
c?(c.uuid=b.uuid,b=c):((c=h7(a.u,b.uuid))?(c.id=b.id,c.token=b.token,b=c):a.u.push(b),a.J||C_a(a));s8(a);a.C[b.uuid]=b.id;g.Jx("yt-remote-device-id-map",a.C,31536E3);return b},C_a=function(a){a=g.Xo(a.u,function(b){return"shortLived"!=b.idType});
g.Jx("yt-remote-automatic-screen-cache",g.Kn(a,eZa))},s8=function(a){a.C=g.Kx("yt-remote-device-id-map")||{}},t8=function(a,b,c){g.Uw.call(this);
this.ya=c;this.u=a;this.i=b;this.B=null},u8=function(a,b){a.B=b;
a.Z("sessionScreen",a.B)},D_a=function(a,b){a.B&&(a.B.token=b,r8(a.u,a.B));
a.Z("sessionScreen",a.B)},v8=function(a,b){c8(a.ya,b)},w8=function(a,b,c){t8.call(this,a,b,"CastSession");
var d=this;this.config_=c;this.j=null;this.ea=(0,g.Ta)(this.KR,this);this.xa=(0,g.Ta)(this.VX,this);this.Y=g.Vs(function(){E_a(d,null)},12E4);
this.J=this.C=this.I=this.N=0;this.va=!1;this.W="unknown"},x8=function(a,b){g.Xs(a.J);
a.J=0;0==b?F_a(a):a.J=g.Vs(function(){F_a(a)},b)},F_a=function(a){G_a(a,"getLoungeToken");
g.Xs(a.C);a.C=g.Vs(function(){H_a(a,null)},3E4)},G_a=function(a,b){a.info("sendYoutubeMessage_: "+b+" "+g.ej(void 0));
var c={};c.type=b;a.j?a.j.sendMessage("urn:x-cast:com.google.youtube.mdx",c,function(){},(0,g.Ta)(function(){v8(this,"Failed to send message: "+b+".")},a)):v8(a,"Sending yt message without session: "+g.ej(c))},y8=function(a,b){b?(a.info("onConnectedScreenId_: Received screenId: "+b),a.getScreen()&&a.getScreen().id==b||a.FL(b,function(c){u8(a,c)},function(){return a.Cg()},5)):a.Cg(Error("Waiting for session status timed out."))},J_a=function(a,b,c){a.info("onConnectedScreenData_: Received screenData: "+
JSON.stringify(b));
var d=new b7(b);I_a(a,d,function(e){e?(a.va=!0,r8(a.u,d),u8(a,d),a.W="unknown",x8(a,c)):(g.Fs(Error("CastSession, RemoteScreen from screenData: "+JSON.stringify(b)+" is not online.")),a.Cg())},5)},E_a=function(a,b){g.Xs(a.Y);
a.Y=0;b?a.config_.enableCastLoungeToken&&b.loungeToken?b.deviceId?a.getScreen()&&a.getScreen().uuid==b.deviceId||(b.loungeTokenRefreshIntervalMs?J_a(a,{name:a.i.friendlyName,screenId:b.screenId,loungeToken:b.loungeToken,dialId:b.deviceId,screenIdType:"shortLived"},b.loungeTokenRefreshIntervalMs):(g.Fs(Error("No loungeTokenRefreshIntervalMs presents in mdxSessionStatusData: "+JSON.stringify(b)+".")),y8(a,b.screenId))):(g.Fs(Error("No device id presents in mdxSessionStatusData: "+JSON.stringify(b)+
".")),y8(a,b.screenId)):y8(a,b.screenId):a.Cg(Error("Waiting for session status timed out."))},H_a=function(a,b){g.Xs(a.C);
a.C=0;var c=null;if(b)if(b.loungeToken){var d;(null==(d=a.getScreen())?void 0:d.token)==b.loungeToken&&(c="staleLoungeToken")}else c="missingLoungeToken";else c="noLoungeTokenResponse";c?(a.info("Did not receive a new lounge token in onLoungeToken_ with data: "+(JSON.stringify(b)+", error: "+c)),a.W=c,x8(a,3E4)):(D_a(a,b.loungeToken),a.va=!1,a.W="unknown",x8(a,b.loungeTokenRefreshIntervalMs))},I_a=function(a,b,c,d){g.Xs(a.I);
a.I=0;A_a(a.u,b,function(e){e||0>d?c(e):a.I=g.Vs(function(){I_a(a,b,c,d-1)},300)})},K_a=function(a){g.Xs(a.N);
a.N=0;g.Xs(a.I);a.I=0;g.Xs(a.Y);a.Y=0;g.Xs(a.C);a.C=0;g.Xs(a.J);a.J=0},z8=function(a,b,c,d){t8.call(this,a,b,"DialSession");
this.config_=d;this.j=this.N=null;this.xa="";this.La=c;this.Ia=null;this.Y=function(){};
this.W=NaN;this.Ha=(0,g.Ta)(this.LR,this);this.C=function(){};
this.J=this.I=0;this.ea=!1;this.va="unknown"},A8=function(a){var b;
return!!(a.config_.enableDialLoungeToken&&(null==(b=a.j)?0:b.getDialAppInfo))},L_a=function(a){a.C=a.u.uJ(a.xa,a.i.label,a.i.friendlyName,A8(a),function(b,c){a.C=function(){};
a.ea=!0;u8(a,b);"shortLived"==b.idType&&0<c&&B8(a,c)},function(b){a.C=function(){};
a.Cg(b)})},M_a=function(a){var b={};
b.pairingCode=a.xa;b.theme=a.La;rZa()&&(b.env_useStageMdx=1);return g.xj(b)},C8=function(a){return new Promise(function(b){a.xa=f7();
if(a.Ia){var c=new chrome.cast.DialLaunchResponse(!0,M_a(a));b(c);L_a(a)}else a.Y=function(){g.Xs(a.W);a.Y=function(){};
a.W=NaN;var d=new chrome.cast.DialLaunchResponse(!0,M_a(a));b(d);L_a(a)},a.W=g.Vs(function(){a.Y()},100)})},O_a=function(a,b,c){a.info("initOnConnectedScreenDataPromise_: Received screenData: "+JSON.stringify(b));
var d=new b7(b);return(new Promise(function(e){N_a(a,d,function(f){f?(a.ea=!0,r8(a.u,d),u8(a,d),B8(a,c)):g.Fs(Error("DialSession, RemoteScreen from screenData: "+JSON.stringify(b)+" is not online."));e(f)},5)})).then(function(e){return e?new chrome.cast.DialLaunchResponse(!1):C8(a)})},P_a=function(a,b){var c=a.N.receiver.label,d=a.i.friendlyName;
return(new Promise(function(e){y_a(a.u,c,b,d,function(f){f&&f.token&&u8(a,f);e(f)},function(f){v8(a,"Failed to get DIAL screen: "+f);
e(null)})})).then(function(e){return e&&e.token?new chrome.cast.DialLaunchResponse(!1):C8(a)})},N_a=function(a,b,c,d){g.Xs(a.I);
a.I=0;A_a(a.u,b,function(e){e||0>d?c(e):a.I=g.Vs(function(){N_a(a,b,c,d-1)},300)})},B8=function(a,b){a.info("getDialAppInfoWithTimeout_ "+b);
A8(a)&&(g.Xs(a.J),a.J=0,0==b?Q_a(a):a.J=g.Vs(function(){Q_a(a)},b))},Q_a=function(a){A8(a)&&a.j.getDialAppInfo(function(b){a.info("getDialAppInfo dialLaunchData: "+JSON.stringify(b));
b=b.extraData||{};var c=null;if(b.loungeToken){var d;(null==(d=a.getScreen())?void 0:d.token)==b.loungeToken&&(c="staleLoungeToken")}else c="missingLoungeToken";c?(a.va=c,B8(a,3E4)):(a.ea=!1,a.va="unknown",D_a(a,b.loungeToken),B8(a,b.loungeTokenRefreshIntervalMs))},function(b){a.info("getDialAppInfo error: "+b);
a.va="noLoungeTokenResponse";B8(a,3E4)})},R_a=function(a){g.Xs(a.I);
a.I=0;g.Xs(a.J);a.J=0;a.C();a.C=function(){};
g.Xs(a.W)},D8=function(a,b){t8.call(this,a,b,"ManualSession");
this.j=g.Vs((0,g.Ta)(this.xt,this,null),150)},E8=function(a,b){g.Uw.call(this);
this.config_=b;this.j=a;this.N=b.appId||"233637DE";this.B=b.theme||"cl";this.W=b.disableCastApi||!1;this.I=b.forceMirroring||!1;this.i=null;this.J=!1;this.u=[];this.C=(0,g.Ta)(this.OW,this)},S_a=function(a,b){return b?g.Wb(a.u,function(c){return c7(b,c.label)},a):null},F8=function(a){c8("Controller",a)},j_a=function(a){window.chrome&&chrome.cast&&chrome.cast.logMessage&&chrome.cast.logMessage(a)},G8=function(a){return a.J||!!a.u.length||!!a.i},H8=function(a,b,c){b!=a.i&&(g.Te(a.i),(a.i=b)?(c?a.Z("yt-remote-cast2-receiver-resumed",
b.i):a.Z("yt-remote-cast2-receiver-selected",b.i),b.subscribe("sessionScreen",(0,g.Ta)(a.WN,a,b)),b.subscribe("sessionFailed",function(){return T_a(a,b)}),b.getScreen()?a.Z("yt-remote-cast2-session-change",b.getScreen()):c&&a.i.xt(null)):a.Z("yt-remote-cast2-session-change",null))},T_a=function(a,b){a.i==b&&a.Z("yt-remote-cast2-session-failed")},U_a=function(a){var b=a.j.tJ(),c=a.i&&a.i.i;
a=g.Kn(b,function(d){c&&c7(d,c.label)&&(c=null);var e=d.uuid?d.uuid:d.id,f=S_a(this,d);f?(f.label=e,f.friendlyName=d.name):(f=new chrome.cast.Receiver(e,d.name),f.receiverType=chrome.cast.ReceiverType.CUSTOM);return f},a);
c&&(c.receiverType!=chrome.cast.ReceiverType.CUSTOM&&(c=new chrome.cast.Receiver(c.label,c.friendlyName),c.receiverType=chrome.cast.ReceiverType.CUSTOM),a.push(c));return a},Z_a=function(a,b,c,d){d.disableCastApi?I8("Cannot initialize because disabled by Mdx config."):V_a()?W_a(b,d)&&(J8(!0),window.chrome&&chrome.cast&&chrome.cast.isAvailable?X_a(a,c):(window.__onGCastApiAvailable=function(e,f){e?X_a(a,c):(K8("Failed to load cast API: "+f),L8(!1),J8(!1),g.Lx("yt-remote-cast-available"),g.Lx("yt-remote-cast-receiver"),
Y_a(),c(!1))},d.loadCastApiSetupScript?g.Nx("https://www.gstatic.com/cv/js/sender/v1/cast_sender.js"):0<=window.navigator.userAgent.indexOf("Android")&&0<=window.navigator.userAgent.indexOf("Chrome/")&&window.navigator.presentation?60<=o7()&&yZa():!window.chrome||!window.navigator.presentation||0<=window.navigator.userAgent.indexOf("Edge")?q7():89<=o7()?AZa():(r7(),p7(zZa.map(vZa))))):I8("Cannot initialize because not running Chrome")},Y_a=function(){I8("dispose");
var a=M8();a&&a.dispose();g.Ia("yt.mdx.remote.cloudview.instance_",null,void 0);$_a(!1);g.ku(N8);N8.length=0},O8=function(){return!!g.Kx("yt-remote-cast-installed")},a0a=function(){var a=g.Kx("yt-remote-cast-receiver");
return a?a.friendlyName:null},b0a=function(){I8("clearCurrentReceiver");
g.Lx("yt-remote-cast-receiver")},c0a=function(){return O8()?M8()?M8().getCastSession():(K8("getCastSelector: Cast is not initialized."),null):(K8("getCastSelector: Cast API is not installed!"),null)},Q8=function(){O8()?M8()?P8()?(I8("Requesting cast selector."),M8().requestSession()):(I8("Wait for cast API to be ready to request the session."),N8.push(g.ju("yt-remote-cast2-api-ready",Q8))):K8("requestCastSelector: Cast is not initialized."):K8("requestCastSelector: Cast API is not installed!")},R8=
function(a,b){P8()?M8().setConnectedScreenStatus(a,b):K8("setConnectedScreenStatus called before ready.")},V_a=function(){var a=0<=g.zb().search(/ (CrMo|Chrome|CriOS)\//);
return g.uz||a},d0a=function(a,b){M8().init(a,b)},W_a=function(a,b){var c=!1;
M8()||(a=new E8(a,b),a.subscribe("yt-remote-cast2-availability-change",function(d){g.Jx("yt-remote-cast-available",d);$6("yt-remote-cast2-availability-change",d)}),a.subscribe("yt-remote-cast2-receiver-selected",function(d){I8("onReceiverSelected: "+d.friendlyName);
g.Jx("yt-remote-cast-receiver",d);$6("yt-remote-cast2-receiver-selected",d)}),a.subscribe("yt-remote-cast2-receiver-resumed",function(d){I8("onReceiverResumed: "+d.friendlyName);
g.Jx("yt-remote-cast-receiver",d);$6("yt-remote-cast2-receiver-resumed",d)}),a.subscribe("yt-remote-cast2-session-change",function(d){I8("onSessionChange: "+d7(d));
d||g.Lx("yt-remote-cast-receiver");$6("yt-remote-cast2-session-change",d)}),g.Ia("yt.mdx.remote.cloudview.instance_",a,void 0),c=!0);
I8("cloudview.createSingleton_: "+c);return c},M8=function(){return g.Ka("yt.mdx.remote.cloudview.instance_")},X_a=function(a,b){L8(!0);
J8(!1);d0a(a,function(c){c?($_a(!0),g.lu("yt-remote-cast2-api-ready")):(K8("Failed to initialize cast API."),L8(!1),g.Lx("yt-remote-cast-available"),g.Lx("yt-remote-cast-receiver"),Y_a());b(c)})},I8=function(a){c8("cloudview",a)},K8=function(a){c8("cloudview",a)},L8=function(a){I8("setCastInstalled_ "+a);
g.Jx("yt-remote-cast-installed",a)},P8=function(){return!!g.Ka("yt.mdx.remote.cloudview.apiReady_")},$_a=function(a){I8("setApiReady_ "+a);
g.Ia("yt.mdx.remote.cloudview.apiReady_",a,void 0)},J8=function(a){g.Ia("yt.mdx.remote.cloudview.initializing_",a,void 0)},S8=function(a){this.index=-1;
this.videoId=this.listId="";this.volume=this.playerState=-1;this.muted=!1;this.audioTrackId=null;this.I=this.J=0;this.trackData=null;this.hasNext=this.Zk=!1;this.N=this.C=this.i=this.B=0;this.u=NaN;this.j=!1;this.reset(a)},T8=function(a){a.audioTrackId=null;
a.trackData=null;a.playerState=-1;a.Zk=!1;a.hasNext=!1;a.J=0;a.I=g.Va();a.B=0;a.i=0;a.C=0;a.N=0;a.u=NaN;a.j=!1},U8=function(a){return a.Ic()?(g.Va()-a.I)/1E3:0},V8=function(a,b){a.J=b;
a.I=g.Va()},W8=function(a){switch(a.playerState){case 1:case 1081:return(g.Va()-a.I)/1E3+a.J;
case -1E3:return 0}return a.J},X8=function(a,b,c){var d=a.videoId;
a.videoId=b;a.index=c;b!=d&&T8(a)},Y8=function(a){var b={};
b.index=a.index;b.listId=a.listId;b.videoId=a.videoId;b.playerState=a.playerState;b.volume=a.volume;b.muted=a.muted;b.audioTrackId=a.audioTrackId;b.trackData=g.zf(a.trackData);b.hasPrevious=a.Zk;b.hasNext=a.hasNext;b.playerTime=a.J;b.playerTimeAt=a.I;b.seekableStart=a.B;b.seekableEnd=a.i;b.duration=a.C;b.loadedTime=a.N;b.liveIngestionTime=a.u;return b},$8=function(a,b){g.Uw.call(this);
this.u=0;this.B=a;this.I=[];this.C=new e_a;this.j=this.i=null;this.W=(0,g.Ta)(this.uV,this);this.J=(0,g.Ta)(this.jx,this);this.N=(0,g.Ta)(this.tV,this);this.Y=(0,g.Ta)(this.BV,this);var c=0;a?(c=a.getProxyState(),3!=c&&(a.subscribe("proxyStateChange",this.sH,this),e0a(this))):c=3;0!=c&&(b?this.sH(c):g.Vs((0,g.Ta)(function(){this.sH(c)},this),0));
(a=c0a())&&Z8(this,a);this.subscribe("yt-remote-cast2-session-change",this.Y)},a9=function(a){return new S8(a.B.getPlayerContextData())},e0a=function(a){g.rc("nowAutoplaying autoplayDismissed remotePlayerChange remoteQueueChange autoplayModeChange autoplayUpNext previousNextChange multiStateLoopEnabled loopModeChange".split(" "),function(b){this.I.push(this.B.subscribe(b,g.Ua(this.MW,b),this))},a)},f0a=function(a){g.rc(a.I,function(b){this.B.unsubscribeByKey(b)},a);
a.I.length=0},b9=function(a){return 1==a.getState()},c9=function(a,b){var c=a.C;
50>c.i.length+c.j.length&&a.C.j.push(b)},e9=function(a,b,c){var d=a9(a);
V8(d,c);-1E3!=d.playerState&&(d.playerState=b);d9(a,d)},f9=function(a,b,c){a.B.sendMessage(b,c)},d9=function(a,b){f0a(a);
a.B.setPlayerContextData(Y8(b));e0a(a)},Z8=function(a,b){a.j&&(a.j.removeUpdateListener(a.W),a.j.removeMediaListener(a.J),a.jx(null));
a.j=b;a.j&&(c8("CP","Setting cast session: "+a.j.sessionId),a.j.addUpdateListener(a.W),a.j.addMediaListener(a.J),a.j.media.length&&a.jx(a.j.media[0]))},g0a=function(a){var b=a.i.media,c=a.i.customData;
if(b&&c){var d=a9(a);b.contentId!=d.videoId&&c8("CP","Cast changing video to: "+b.contentId);d.videoId=b.contentId;d.playerState=c.playerState;V8(d,a.i.getEstimatedTime());d9(a,d)}else c8("CP","No cast media video. Ignoring state update.")},g9=function(a,b,c){return(0,g.Ta)(function(d){this.xe("Failed to "+b+" with cast v2 channel. Error code: "+d.code);
d.code!=chrome.cast.ErrorCode.TIMEOUT&&(this.xe("Retrying "+b+" using MDx browser channel."),f9(this,b,c))},a)},h9=function(a,b,c,d){d=void 0===d?!1:d;
g.Uw.call(this);var e=this;this.C=NaN;this.va=!1;this.N=this.J=this.Y=this.ea=NaN;this.W=[];this.B=this.I=this.u=this.yc=this.i=null;this.Ha=a;this.ya=d;this.W.push(g.Qt(window,"beforeunload",function(){e.Js(2)}));
this.j=[];this.yc=new S8;this.Ia=b.id;this.xa=b.idType;this.i=h0a(this,c);this.i.subscribe("handlerOpened",this.yV,this);this.i.subscribe("handlerClosed",this.vV,this);this.i.subscribe("handlerError",this.wV,this);this.i.subscribe("handlerMessage",this.xV,this);this.i.FB(b.token);this.subscribe("remoteQueueChange",function(){var f=this.yc.videoId;g.Mx()&&g.Jx("yt-remote-session-video-id",f)},this)},i0a=function(a){return g.Wb(a.j,function(b){return"LOUNGE_SCREEN"==b.type})},i9=function(a){c8("conn",
a)},h0a=function(a,b){return new W7($7(a.Ha,"/bc"),b,!1,function(){return a.yJ()},"shortLived"==a.xa)},j9=function(a,b){a.Z("proxyStateChange",b)},j0a=function(a){a.C=g.Vs(function(){i9("Connecting timeout");
a.Js(1)},2E4)},k9=function(a){g.Xs(a.C);
a.C=NaN},l9=function(a){g.Xs(a.ea);
a.ea=NaN},k0a=function(a){m9(a);
a.Y=g.Vs(function(){n9(a,"getNowPlaying")},2E4)},m9=function(a){g.Xs(a.Y);
a.Y=NaN},m0a=function(a,b){var c=null;
if(b){var d=i0a(a);d&&(c={clientName:d.clientName,deviceMake:d.brand,deviceModel:d.model,osVersion:d.osVersion})}g.Ia("yt.mdx.remote.remoteClient_",c,void 0);b&&(k9(a),l9(a));c=Y7(a.i)&&isNaN(a.C);b==c?b&&(j9(a,1),n9(a,"getSubtitlesTrack")):b?(a.EL()&&a.yc.reset(),j9(a,1),n9(a,"getNowPlaying"),l0a(a)):a.Js(1)},n0a=function(a,b){var c=b.params.videoId;
delete b.params.videoId;c==a.yc.videoId&&(g.uf(b.params)?a.yc.trackData=null:a.yc.trackData=b.params,a.Z("remotePlayerChange"))},o0a=function(a,b,c){var d=b.params.videoId||b.params.video_id,e=parseInt(b.params.currentIndex,10);
a.yc.listId=b.params.listId||a.yc.listId;X8(a.yc,d,e);a.Z("remoteQueueChange",c)},q0a=function(a,b){b.params=b.params||{};
o0a(a,b,"NOW_PLAYING_MAY_CHANGE");p0a(a,b);a.Z("autoplayDismissed")},p0a=function(a,b){var c=parseInt(b.params.currentTime||b.params.current_time,10);
V8(a.yc,isNaN(c)?0:c);c=parseInt(b.params.state,10);c=isNaN(c)?-1:c;-1==c&&-1E3==a.yc.playerState&&(c=-1E3);a.yc.playerState=c;c=Number(b.params.loadedTime);a.yc.N=isNaN(c)?0:c;a.yc.Xj(Number(b.params.duration));c=a.yc;var d=Number(b.params.liveIngestionTime);c.u=d;c.j=isNaN(d)?!1:!0;c=a.yc;d=Number(b.params.seekableStartTime);b=Number(b.params.seekableEndTime);c.B=isNaN(d)?0:d;c.i=isNaN(b)?0:b;1==a.yc.playerState?k0a(a):m9(a);a.Z("remotePlayerChange")},r0a=function(a,b){if(-1E3!=a.yc.playerState){var c=
1085;
switch(parseInt(b.params.adState,10)){case 1:c=1081;break;case 2:c=1084;break;case 0:c=1083}a.yc.playerState=c;b=parseInt(b.params.currentTime,10);V8(a.yc,isNaN(b)?0:b);a.Z("remotePlayerChange")}},s0a=function(a,b){var c="true"==b.params.muted;
a.yc.volume=parseInt(b.params.volume,10);a.yc.muted=c;a.Z("remotePlayerChange")},t0a=function(a,b){a.I=b.params.videoId;
a.Z("nowAutoplaying",parseInt(b.params.timeout,10))},u0a=function(a,b){var c="true"==b.params.hasNext;
a.yc.Zk="true"==b.params.hasPrevious;a.yc.hasNext=c;a.Z("previousNextChange")},l0a=function(a){g.Xs(a.N);
a.N=g.Vs(function(){a.Js(1)},864E5)},n9=function(a,b,c){c?i9("Sending: action="+b+", params="+g.ej(c)):i9("Sending: action="+b);
a.i.sendMessage(b,c)},o9=function(a){g8.call(this,"ScreenServiceProxy");
this.Xe=a;this.i=[];this.i.push(this.Xe.$_s("screenChange",(0,g.Ta)(this.PR,this)));this.i.push(this.Xe.$_s("onlineScreenChange",(0,g.Ta)(this.sW,this)))},y0a=function(a,b){qZa();
if(!n7||!n7.get("yt-remote-disable-remote-module-for-dev")){b=g.P("MDX_CONFIG")||b;iZa();l7();p9||(p9=new Z7(b?b.loungeApiHost:void 0),rZa()&&(p9.i="/api/loungedev"));q9||(q9=g.Ka("yt.mdx.remote.deferredProxies_")||[],g.Ia("yt.mdx.remote.deferredProxies_",q9,void 0));v0a();var c=r9();if(!c){var d=new q8(p9,b?b.disableAutomaticScreenCache||!1:!1);g.Ia("yt.mdx.remote.screenService_",d,void 0);c=r9();var e={};b&&(e={appId:b.appId,disableDial:b.disableDial,theme:b.theme,loadCastApiSetupScript:b.loadCastApiSetupScript,
disableCastApi:b.disableCastApi,enableDialLoungeToken:b.enableDialLoungeToken,enableCastLoungeToken:b.enableCastLoungeToken,forceMirroring:b.forceMirroring});g.Ia("yt.mdx.remote.enableConnectWithInitialState_",b?b.enableConnectWithInitialState||!1:!1,void 0);Z_a(a,d,function(f){f?s9()&&R8(s9(),"YouTube TV"):d.subscribe("onlineScreenChange",function(){$6("yt-remote-receiver-availability-change")})},e)}b&&!g.Ka("yt.mdx.remote.initialized_")&&(g.Ia("yt.mdx.remote.initialized_",!0,void 0),t9("Initializing: "+
g.ej(b)),u9.push(g.ju("yt-remote-cast2-api-ready",function(){$6("yt-remote-api-ready")})),u9.push(g.ju("yt-remote-cast2-availability-change",function(){$6("yt-remote-receiver-availability-change")})),u9.push(g.ju("yt-remote-cast2-receiver-selected",function(){v9(null);
$6("yt-remote-auto-connect","cast-selector-receiver")})),u9.push(g.ju("yt-remote-cast2-receiver-resumed",function(){$6("yt-remote-receiver-resumed","cast-selector-receiver")})),u9.push(g.ju("yt-remote-cast2-session-change",w0a)),u9.push(g.ju("yt-remote-connection-change",function(f){f?R8(s9(),"YouTube TV"):w9()||(R8(null,null),b0a())})),u9.push(g.ju("yt-remote-cast2-session-failed",function(){$6("yt-remote-connection-failed")})),a=x9(),b.isAuto&&(a.id+="#dial"),e=b.capabilities||[],g.Q("desktop_enable_autoplay")&&
e.push("atp"),0<e.length&&(a.capabilities=e),a.name=b.device,a.app=b.app,(b=b.theme)&&(a.theme=b),t9(" -- with channel params: "+g.ej(a)),a?(g.Jx("yt-remote-session-app",a.app),g.Jx("yt-remote-session-name",a.name)):(g.Lx("yt-remote-session-app"),g.Lx("yt-remote-session-name")),g.Ia("yt.mdx.remote.channelParams_",a,void 0),c.start(),s9()||x0a())}},z0a=function(){var a=r9().Xe.$_gos();
var b=y9();b&&z9()&&(g7(a,b)||a.push(b));return hZa(a)},A9=function(){var a=A0a();
!a&&O8()&&a0a()&&(a={key:"cast-selector-receiver",name:a0a()});return a},A0a=function(){var a=z0a(),b=y9();
b||(b=w9());return g.Wb(a,function(c){return b&&c7(b,c.key)?!0:!1})},y9=function(){var a=s9();
if(!a)return null;var b=r9().Jh();return h7(b,a)},w0a=function(a){t9("remote.onCastSessionChange_: "+d7(a));
if(a){var b=y9();if(b&&b.id==a.id){if(R8(b.id,"YouTube TV"),"shortLived"==a.idType&&(a=a.token))B9&&(B9.token=a),(b=z9())&&b.FB(a)}else b&&C9(),D9(a,1)}else z9()&&C9()},C9=function(){P8()?M8().stopSession():K8("stopSession called before API ready.");
var a=z9();a&&(a.disconnect(1),E9(null))},F9=function(){var a=z9();
return!!a&&3!=a.getProxyState()},t9=function(a){c8("remote",a)},r9=function(){if(!G9){var a=g.Ka("yt.mdx.remote.screenService_");
G9=a?new o9(a):null}return G9},s9=function(){return g.Ka("yt.mdx.remote.currentScreenId_")},B0a=function(a){g.Ia("yt.mdx.remote.currentScreenId_",a,void 0)},C0a=function(){return g.Ka("yt.mdx.remote.connectData_")},v9=function(a){g.Ia("yt.mdx.remote.connectData_",a,void 0)},z9=function(){return g.Ka("yt.mdx.remote.connection_")},E9=function(a){var b=z9();
v9(null);a||B0a("");g.Ia("yt.mdx.remote.connection_",a,void 0);q9&&(g.rc(q9,function(c){c(a)}),q9.length=0);
b&&!a?$6("yt-remote-connection-change",!1):!b&&a&&$6("yt-remote-connection-change",!0)},w9=function(){var a=g.Mx();
if(!a)return null;var b=r9();if(!b)return null;b=b.Jh();return h7(b,a)},D9=function(a,b){s9();
y9()&&y9();if(H9)B9=a;else{B0a(a.id);var c=g.Ka("yt.mdx.remote.enableConnectWithInitialState_")||!1;a=new h9(p9,a,x9(),c);a.connect(b,C0a());a.subscribe("beforeDisconnect",function(d){$6("yt-remote-before-disconnect",d)});
a.subscribe("beforeDispose",function(){z9()&&(z9(),E9(null))});
a.subscribe("browserChannelAuthError",function(){var d=y9();d&&"shortLived"==d.idType&&(P8()?M8().handleBrowserChannelAuthError():K8("refreshLoungeToken called before API ready."))});
E9(a)}},x0a=function(){var a=w9();
a?(t9("Resume connection to: "+d7(a)),D9(a,0)):(m7(),b0a(),t9("Skipping connecting because no session screen found."))},v0a=function(){var a=x9();
if(g.uf(a)){a=k7();var b=g.Kx("yt-remote-session-name")||"",c=g.Kx("yt-remote-session-app")||"";a={device:"REMOTE_CONTROL",id:a,name:b,app:c,mdxVersion:3};g.Ia("yt.mdx.remote.channelParams_",a,void 0)}},x9=function(){return g.Ka("yt.mdx.remote.channelParams_")||{}},I9=function(a,b,c){g.G.call(this);
var d=this;this.j=a;this.G=b;this.Wb=c;this.events=new g.qC(this);this.Y=this.events.S(this.G,"onVolumeChange",function(e){D0a(d,e)});
this.C=!1;this.I=new g.QI(64);this.i=new g.K(this.cP,500,this);this.u=new g.K(this.dP,1E3,this);this.N=new t7(this.qZ,0,this);this.B={};this.W=new g.K(this.IP,1E3,this);this.J=new u7(this.seekTo,1E3,this);g.J(this,this.events);this.events.S(b,"onCaptionsTrackListChanged",this.dW);this.events.S(b,"captionschanged",this.rV);this.events.S(b,"captionssettingschanged",this.iP);this.events.S(b,"videoplayerreset",this.YA);this.events.S(b,"mdxautoplaycancel",function(){d.Wb.aL()});
a=this.Wb;a.isDisposed();a.subscribe("proxyStateChange",this.SN,this);a.subscribe("remotePlayerChange",this.nx,this);a.subscribe("remoteQueueChange",this.YA,this);a.subscribe("previousNextChange",this.PN,this);a.subscribe("nowAutoplaying",this.JN,this);a.subscribe("autoplayDismissed",this.mN,this);g.J(this,this.i);g.J(this,this.u);g.J(this,this.N);g.J(this,this.W);g.J(this,this.J);this.iP();this.YA();this.nx()},D0a=function(a,b){if(J9(a)){a.Wb.unsubscribe("remotePlayerChange",a.nx,a);
var c=Math.round(b.volume);b=!!b.muted;var d=a9(a.Wb);if(c!==d.volume||b!==d.muted)a.Wb.setVolume(c,b),a.W.start();a.Wb.subscribe("remotePlayerChange",a.nx,a)}},E0a=function(a){a.Sb(0);
a.i.stop();a.Xb(new g.QI(64))},K9=function(a,b){if(J9(a)&&!a.C){var c=null;
b&&(c={style:a.G.getSubtitlesUserSettings()},g.Bf(c,b));a.Wb.xJ(a.G.getVideoData(1).videoId,c);a.B=a9(a.Wb).trackData}},L9=function(a,b){var c=a.G.getPlaylist();
if(null==c?0:c.listId){var d=c.index;var e=c.listId.toString()}c=a.G.getVideoData(1);a.Wb.playVideo(c.videoId,b,d,e,c.playerParams,c.Ya,YYa(c));a.Xb(new g.QI(1))},F0a=function(a,b){if(b){var c=a.G.getOption("captions","tracklist",{cM:1});
c&&c.length?(a.G.setOption("captions","track",b),a.C=!1):(a.G.loadModule("captions"),a.C=!0)}else a.G.setOption("captions","track",{})},J9=function(a){return a9(a.Wb).videoId===a.G.getVideoData(1).videoId},M9=function(){g.W.call(this,{D:"div",
K:"ytp-mdx-popup-dialog",V:{role:"dialog"},U:[{D:"div",K:"ytp-mdx-popup-dialog-inner-content",U:[{D:"div",K:"ytp-mdx-popup-title",qa:"\u0412\u044b \u0432\u044b\u0448\u043b\u0438 \u0438\u0437 \u0430\u043a\u043a\u0430\u0443\u043d\u0442\u0430"},{D:"div",K:"ytp-mdx-popup-description",qa:'\u0420\u043e\u043b\u0438\u043a\u0438, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u0432\u044b \u043f\u043e\u0441\u043c\u043e\u0442\u0440\u0438\u0442\u0435, \u043c\u043e\u0433\u0443\u0442 \u0431\u044b\u0442\u044c \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u044b \u0432 \u0438\u0441\u0442\u043e\u0440\u0438\u044e \u043f\u0440\u043e\u0441\u043c\u043e\u0442\u0440\u0430 \u043d\u0430 \u0442\u0435\u043b\u0435\u0432\u0438\u0437\u043e\u0440\u0435, \u0447\u0442\u043e \u0441\u043a\u0430\u0436\u0435\u0442\u0441\u044f \u043d\u0430 \u0440\u0435\u043a\u043e\u043c\u0435\u043d\u0434\u0430\u0446\u0438\u044f\u0445. \u0427\u0442\u043e\u0431\u044b \u044d\u0442\u043e\u0433\u043e \u0438\u0437\u0431\u0435\u0436\u0430\u0442\u044c, \u0432\u044b\u0431\u0435\u0440\u0438\u0442\u0435 "\u041e\u0442\u043c\u0435\u043d\u0430" \u0438 \u0432\u043e\u0439\u0434\u0438\u0442\u0435 \u0432 \u0430\u043a\u043a\u0430\u0443\u043d\u0442 \u043d\u0430 \u043a\u043e\u043c\u043f\u044c\u044e\u0442\u0435\u0440\u0435.'},
{D:"div",K:"ytp-mdx-privacy-popup-buttons",U:[{D:"button",Ga:["ytp-button","ytp-mdx-privacy-popup-cancel"],qa:"\u041e\u0442\u043c\u0435\u043d\u0430"},{D:"button",Ga:["ytp-button","ytp-mdx-privacy-popup-confirm"],qa:"\u041e\u041a"}]}]}]});this.i=new g.OK(this,250);this.cancelButton=this.Da("ytp-mdx-privacy-popup-cancel");this.confirmButton=this.Da("ytp-mdx-privacy-popup-confirm");g.J(this,this.i);this.S(this.cancelButton,"click",this.j);this.S(this.confirmButton,"click",this.u)},N9=function(a){g.W.call(this,
{D:"div",
K:"ytp-remote",U:[{D:"div",K:"ytp-remote-display-status",U:[{D:"div",K:"ytp-remote-display-status-icon",U:[g.dK()]},{D:"div",K:"ytp-remote-display-status-text",qa:"{{statustext}}"}]}]});this.api=a;this.i=new g.OK(this,250);g.J(this,this.i);this.S(a,"presentingplayerstatechange",this.onStateChange);G0a(this,a.zb())},G0a=function(a,b){if(3===a.api.getPresentingPlayerType()){var c={RECEIVER_NAME:a.api.getOption("remote","currentReceiver").name};
b=g.V(b,128)?g.kH('\u041e\u0448\u0438\u0431\u043a\u0430 \u043d\u0430 \u0443\u0441\u0442\u0440\u043e\u0439\u0441\u0442\u0432\u0435 "$RECEIVER_NAME"',c):b.Ic()||g.V(b,4)?g.kH('\u0412\u043e\u0441\u043f\u0440\u043e\u0438\u0437\u0432\u0435\u0434\u0435\u043d\u0438\u0435 \u043d\u0430 \u0443\u0441\u0442\u0440\u043e\u0439\u0441\u0442\u0432\u0435 "$RECEIVER_NAME"',c):g.kH('\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u043b\u0435\u043d\u043e \u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435 \u043a \u0443\u0441\u0442\u0440\u043e\u0439\u0441\u0442\u0432\u0443 "$RECEIVER_NAME"',
c);a.Ma("statustext",b);a.i.show()}else a.i.hide()},O9=function(a,b){g.uP.call(this,"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0443\u0441\u0442\u0440\u043e\u0439\u0441\u0442\u0432\u043e \u0434\u043b\u044f \u043f\u0440\u043e\u0441\u043c\u043e\u0442\u0440\u0430",0,a,b);
this.G=a;this.Uo={};this.S(a,"onMdxReceiversChange",this.C);this.S(a,"presentingplayerstatechange",this.C);this.C()},P9=function(a){g.tM.call(this,a);
this.ll={key:f7(),name:"\u042d\u0442\u043e\u0442 \u043a\u043e\u043c\u043f\u044c\u044e\u0442\u0435\u0440"};this.ji=null;this.subscriptions=[];this.NG=this.Wb=null;this.Uo=[this.ll];this.Gn=this.ll;this.Gd=new g.QI(64);this.AM=0;this.Cf=-1;this.yx=!1;this.wx=this.Ot=null;if(!g.dE(this.player.T())&&!g.eE(this.player.T())){a=this.player;var b=g.WL(a);b&&(b=b.Yn())&&(b=new O9(a,b),g.J(this,b));b=new N9(a);g.J(this,b);g.fM(a,b.element,4);this.Ot=new M9;g.J(this,this.Ot);g.fM(a,this.Ot.element,4);this.yx=
!!w9()}},Q9=function(a){a.wx&&(a.player.removeEventListener("presentingplayerstatechange",a.wx),a.wx=null)},H0a=function(a,b,c){a.Gd=c;
a.player.Z("presentingplayerstatechange",new g.TG(c,b))},R9=function(a,b){if(b.key!==a.Gn.key)if(b.key===a.ll.key)C9();
else{var c;(c=!a.player.T().L("mdx_enable_privacy_disclosure_ui"))||(c=((c=g.P("PLAYER_CONFIG"))&&c.args&&void 0!==c.args.authuser?!0:!(!g.P("SESSION_INDEX")&&!g.P("LOGGED_IN")))||a.yx||!a.Ot);(c?0:g.tE(a.player.T())||g.wE(a.player.T()))&&I0a(a);a.Gn=b;if(!a.player.T().L("disable_mdx_connection_in_mdx_module_for_music_web")||!g.eE(a.player.T())){var d=a.player.getPlaylistId();c=a.player.getVideoData(1);var e=c.videoId;if(!d&&!e||(2===a.player.getAppState()||1===a.player.getAppState())&&a.player.T().L("should_clear_video_data_on_player_cued_unstarted"))a=
null;else{var f=a.player.getPlaylist();if(f){var k=[];for(var l=0;l<f.length;l++)k[l]=g.nM(f,l).videoId}else k=[e];f=a.player.getCurrentTime(1);a={videoIds:k,listId:d,videoId:e,playerParams:c.playerParams,clickTrackingParams:c.Ya,index:Math.max(a.player.getPlaylistIndex(),0),currentTime:0===f?void 0:f};(c=YYa(c))&&(a.locationInfo=c)}t9("Connecting to: "+g.ej(b));"cast-selector-receiver"==b.key?(v9(a||null),b=a||null,P8()?M8().setLaunchParams(b):K8("setLaunchParams called before ready.")):!a&&F9()&&
s9()==b.key?$6("yt-remote-connection-change",!0):(C9(),v9(a||null),a=r9().Jh(),(b=h7(a,b.key))&&D9(b,1))}}},I0a=function(a){a.player.zb().Ic()?a.player.pauseVideo():(a.wx=function(b){!a.yx&&g.VG(b,8)&&(a.player.pauseVideo(),Q9(a))},a.player.addEventListener("presentingplayerstatechange",a.wx));
a.Ot&&a.Ot.jd();z9()||(H9=!0)};
g.Uc.prototype.C=g.ca(0,function(){var a=g.Yc(this);return 4294967296*g.Yc(this)+(a>>>0)});
var tYa=g.ve(function(a,b,c){if(1!==a.j)return!1;g.D(b,c,g.fd(a));return!0},g.ye),LYa=g.ve(function(a,b,c,d){if(1!==a.j)return!1;
g.Jd(b,c,d,g.fd(a));return!0},g.ye),uYa=g.ve(function(a,b,c){if(0!==a.j)return!1;
g.D(b,c,g.Wc(a.i));return!0},g.ze),KYa=g.ve(function(a,b,c,d){if(0!==a.j)return!1;
g.Jd(b,c,d,g.Wc(a.i));return!0},g.ze),CYa=g.ve(function(a,b,c){if(0!==a.j)return!1;
g.D(b,c,g.Xc(a.i));return!0},g.Be),HYa=g.ve(function(a,b,c,d){if(0!==a.j)return!1;
g.Jd(b,c,d,g.Xc(a.i));return!0},g.Be),PYa=g.ve(function(a,b,c){if(1!==a.j)return!1;
g.D(b,c,a.i.C());return!0},function(a,b,c){mYa(a,c,g.zd(b,c))}),RYa=g.ve(function(a,b,c){if(1!==a.j&&2!==a.j)return!1;
b=g.Bd(b,c);if(2==a.j){c=g.Uc.prototype.C;var d=g.Xc(a.i)>>>0;for(d=a.i.i+d;a.i.i<d;)b.push(c.call(a.i))}else b.push(a.i.C());return!0},function(a,b,c){b=g.Bd(b,c);
if(null!=b)for(var d=0;d<b.length;d++)mYa(a,c,b[d])}),zYa=g.ve(function(a,b,c){if(0!==a.j)return!1;
g.D(b,c,g.Zc(a.i));return!0},nYa),IYa=g.ve(function(a,b,c,d){if(0!==a.j)return!1;
g.Jd(b,c,d,g.Zc(a.i));return!0},nYa),QYa=g.ve(function(a,b,c){if(2!==a.j)return!1;
a=g.hd(a);g.Bd(b,c).push(a);return!0},function(a,b,c){b=g.Bd(b,c);
if(null!=b)for(var d=0;d<b.length;d++){var e=b[d];null!=e&&g.ud(a,c,g.ib(e))}}),GYa=g.ve(function(a,b,c,d){if(2!==a.j)return!1;
g.Jd(b,c,d,g.hd(a));return!0},g.Ce),NYa=g.ve(function(a,b,c,d,e){if(2!==a.j)return!1;
g.ed(a,g.Kd(b,d,c),e);return!0},g.De),qYa=[1];
g.v(rYa,g.E);g.v(sYa,g.E);g.v(xYa,g.E);g.v(yYa,g.E);var EYa=[1,2];g.v(BYa,g.E);var JZa={"\x00":"\\0","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\v":"\\x0B",'"':'\\"',"\\":"\\\\","<":"\\u003C"},G7={"'":"\\'"},dZa={M_:"atp",gca:"ska",Laa:"que",y9:"mus",fca:"sus",k5:"dsp",lba:"seq",b9:"mic",f4:"dpa",d0:"cds",w9:"mlm",b4:"dsdtr",e$:"ntb"};a7.prototype.equals=function(a){return a?this.id==a.id:!1};
var n7,j7="",xZa=sZa("loadCastFramework")||sZa("loadCastApplicationFramework"),zZa=["pkedcjkdefgpdelpbcmbmeomcjbeemfm","enhhojjnijigcajfphajepfemndkmdlo"];/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
g.Wa(t7,g.G);g.h=t7.prototype;g.h.DR=function(a){this.B=arguments;this.i=!1;this.Pb?this.u=g.Va()+this.Zf:this.Pb=g.Ai(this.C,this.Zf)};
g.h.stop=function(){this.Pb&&(g.C.clearTimeout(this.Pb),this.Pb=null);this.u=null;this.i=!1;this.B=[]};
g.h.pause=function(){++this.j};
g.h.resume=function(){this.j&&(--this.j,!this.j&&this.i&&(this.i=!1,this.I.apply(null,this.B)))};
g.h.ra=function(){this.stop();t7.ue.ra.call(this)};
g.h.ER=function(){this.Pb&&(g.C.clearTimeout(this.Pb),this.Pb=null);this.u?(this.Pb=g.Ai(this.C,this.u-g.Va()),this.u=null):this.j?this.i=!0:(this.i=!1,this.I.apply(null,this.B))};g.v(u7,g.G);g.h=u7.prototype;g.h.sJ=function(a){this.u=arguments;this.Pb||this.j?this.i=!0:v7(this)};
g.h.stop=function(){this.Pb&&(g.C.clearTimeout(this.Pb),this.Pb=null,this.i=!1,this.u=null)};
g.h.pause=function(){this.j++};
g.h.resume=function(){this.j--;this.j||!this.i||this.Pb||(this.i=!1,v7(this))};
g.h.ra=function(){g.G.prototype.ra.call(this);this.stop()};w7.prototype.stringify=function(a){return g.C.JSON.stringify(a,void 0)};
w7.prototype.parse=function(a){return g.C.JSON.parse(a,void 0)};var y7=new g.Vf;g.v(EZa,g.We);g.h=A7.prototype;g.h.xp=null;g.h.Ym=!1;g.h.Hu=null;g.h.kI=null;g.h.Tt=null;g.h.uu=null;g.h.An=null;g.h.Xo=null;g.h.Oq=null;g.h.Pf=null;g.h.iC=0;g.h.ek=null;g.h.fC=null;g.h.pn=null;g.h.fv=-1;g.h.RO=!0;g.h.Pp=!1;g.h.ZC=0;g.h.tB=null;var HZa={},D7={};g.h=A7.prototype;g.h.setTimeout=function(a){this.j=a};
g.h.FR=function(a){a=a.target;var b=this.tB;b&&3==g.Mj(a)?b.sJ():this.QP(a)};
g.h.QP=function(a){try{if(a==this.Pf)a:{var b=g.Mj(this.Pf),c=this.Pf.j,d=this.Pf.getStatus();if(g.Ic&&!g.Bc(10)||g.$e&&!g.Ac("420+")){if(4>b)break a}else if(3>b||3==b&&!g.Wj(this.Pf))break a;this.Pp||4!=b||7==c||(8==c||0>=d?this.i.Oj(3):this.i.Oj(2));H7(this);var e=this.Pf.getStatus();this.fv=e;var f=g.Wj(this.Pf);if(this.Ym=200==e){4==b&&E7(this);if(this.C){for(a=!0;!this.Pp&&this.iC<f.length;){var k=IZa(this,f);if(k==D7){4==b&&(this.pn=4,z7(15),a=!1);break}else if(k==HZa){this.pn=4;z7(16);a=!1;
break}else I7(this,k)}4==b&&0==f.length&&(this.pn=1,z7(17),a=!1);this.Ym=this.Ym&&a;a||(E7(this),F7(this))}else I7(this,f);this.Ym&&!this.Pp&&(4==b?this.i.Ny(this):(this.Ym=!1,C7(this)))}else 400==e&&0<f.indexOf("Unknown SID")?(this.pn=3,z7(13)):(this.pn=0,z7(14)),E7(this),F7(this)}}catch(l){this.Pf&&g.Wj(this.Pf)}finally{}};
g.h.JX=function(a){x7((0,g.Ta)(this.IX,this,a),0)};
g.h.IX=function(a){this.Pp||(H7(this),I7(this,a),C7(this))};
g.h.aO=function(a){x7((0,g.Ta)(this.HX,this,a),0)};
g.h.HX=function(a){this.Pp||(E7(this),this.Ym=a,this.i.Ny(this),this.i.Oj(4))};
g.h.cancel=function(){this.Pp=!0;E7(this)};
g.h.RX=function(){this.Hu=null;var a=Date.now();0<=a-this.kI?(2!=this.uu&&this.i.Oj(3),E7(this),this.pn=2,z7(18),F7(this)):LZa(this,this.kI-a)};
g.h.getLastError=function(){return this.pn};g.h=OZa.prototype;g.h.aD=null;g.h.uh=null;g.h.uB=!1;g.h.eP=null;g.h.Dz=null;g.h.IF=null;g.h.bD=null;g.h.ai=null;g.h.Kl=-1;g.h.hv=null;g.h.Cv=null;g.h.connect=function(a){this.bD=a;a=K7(this.i,null,this.bD);z7(3);this.eP=Date.now();var b=this.i.N;null!=b?(this.hv=b[0],(this.Cv=b[1])?(this.ai=1,PZa(this)):(this.ai=2,M7(this))):(X6(a,"MODE","init"),this.uh=new A7(this,void 0,void 0,void 0),this.uh.xp=this.aD,B7(this.uh,a,!1,null,!0),this.ai=0)};
g.h.uS=function(a){if(a)this.ai=2,M7(this);else{z7(4);var b=this.i;b.Ak=b.En.Kl;T7(b,9)}a&&this.Oj(2)};
g.h.mE=function(a){return this.i.mE(a)};
g.h.abort=function(){this.uh&&(this.uh.cancel(),this.uh=null);this.Kl=-1};
g.h.zf=function(){return!1};
g.h.TN=function(a,b){this.Kl=a.fv;if(0==this.ai)if(b){try{var c=this.j.parse(b)}catch(d){a=this.i;a.Ak=this.Kl;T7(a,2);return}this.hv=c[0];this.Cv=c[1]}else a=this.i,a.Ak=this.Kl,T7(a,2);else if(2==this.ai)if(this.uB)z7(7),this.IF=Date.now();else if("11111"==b){if(z7(6),this.uB=!0,this.Dz=Date.now(),a=this.Dz-this.eP,!g.Ic||g.Bc(10)||500>a)this.Kl=200,this.uh.cancel(),z7(12),L7(this.i,this,!0)}else z7(8),this.Dz=this.IF=Date.now(),this.uB=!1};
g.h.Ny=function(){this.Kl=this.uh.fv;if(this.uh.Ym)0==this.ai?this.Cv?(this.ai=1,PZa(this)):(this.ai=2,M7(this)):2==this.ai&&((!g.Ic||g.Bc(10)?!this.uB:200>this.IF-this.Dz)?(z7(11),L7(this.i,this,!1)):(z7(12),L7(this.i,this,!0)));else{0==this.ai?z7(9):2==this.ai&&z7(10);var a=this.i;this.uh.getLastError();a.Ak=this.Kl;T7(a,2)}};
g.h.Vx=function(){return this.i.Vx()};
g.h.isActive=function(){return this.i.isActive()};
g.h.Oj=function(a){this.i.Oj(a)};g.h=N7.prototype;g.h.zk=null;g.h.Wv=null;g.h.ah=null;g.h.Qe=null;g.h.cD=null;g.h.Ez=null;g.h.qK=null;g.h.Oy=null;g.h.Xw=0;g.h.LU=0;g.h.Qf=null;g.h.Pn=null;g.h.Tl=null;g.h.Yp=null;g.h.En=null;g.h.dC=null;g.h.wt=-1;g.h.zM=-1;g.h.Ak=-1;g.h.Ns=0;g.h.xs=0;g.h.Qp=8;g.Wa(RZa,g.We);g.Wa(SZa,g.We);g.h=N7.prototype;g.h.connect=function(a,b,c,d,e){z7(0);this.cD=b;this.Wv=c||{};d&&void 0!==e&&(this.Wv.OSID=d,this.Wv.OAID=e);this.I?(x7((0,g.Ta)(this.MK,this,a),100),WZa(this)):this.MK(a)};
g.h.MK=function(a){this.En=new OZa(this);this.En.aD=this.zk;this.En.j=this.C;this.En.connect(a)};
g.h.zf=function(){return 0==this.i};
g.h.getState=function(){return this.i};
g.h.YN=function(a){this.Pn=null;$Za(this,a)};
g.h.XN=function(){this.Tl=null;this.Qe=new A7(this,this.u,"rpc",this.J);this.Qe.xp=this.zk;this.Qe.ZC=0;var a=this.qK.clone();g.Dl(a,"RID","rpc");g.Dl(a,"SID",this.u);g.Dl(a,"CI",this.dC?"0":"1");g.Dl(a,"AID",this.wt);O7(this,a);if(!g.Ic||g.Bc(10))g.Dl(a,"TYPE","xmlhttp"),B7(this.Qe,a,!0,this.Oy,!1);else{g.Dl(a,"TYPE","html");var b=this.Qe,c=!!this.Oy;b.uu=3;b.An=W6(a.clone());KZa(b,c)}};
g.h.TN=function(a,b){if(0!=this.i&&(this.Qe==a||this.ah==a))if(this.Ak=a.fv,this.ah==a&&3==this.i)if(7<this.Qp){try{var c=this.C.parse(b)}catch(d){c=null}if(Array.isArray(c)&&3==c.length)if(a=c,0==a[0])a:{if(!this.Tl){if(this.Qe)if(this.Qe.Tt+3E3<this.ah.Tt)Q7(this),this.Qe.cancel(),this.Qe=null;else break a;S7(this);z7(19)}}else this.zM=a[1],0<this.zM-this.wt&&37500>a[2]&&this.dC&&0==this.xs&&!this.Yp&&(this.Yp=x7((0,g.Ta)(this.oV,this),6E3));else T7(this,11)}else null!=b&&T7(this,11);else if(this.Qe==
a&&Q7(this),!g.nb(b))for(a=this.C.parse(b),b=0;b<a.length;b++)c=a[b],this.wt=c[0],c=c[1],2==this.i?"c"==c[0]?(this.u=c[1],this.Oy=c[2],c=c[3],null!=c?this.Qp=c:this.Qp=6,this.i=3,this.Qf&&this.Qf.IK(),this.qK=K7(this,this.Vx()?this.Oy:null,this.cD),a_a(this)):"stop"==c[0]&&T7(this,7):3==this.i&&("stop"==c[0]?T7(this,7):"noop"!=c[0]&&this.Qf&&this.Qf.HK(c),this.xs=0)};
g.h.oV=function(){null!=this.Yp&&(this.Yp=null,this.Qe.cancel(),this.Qe=null,S7(this),z7(20))};
g.h.Ny=function(a){if(this.Qe==a){Q7(this);this.Qe=null;var b=2}else if(this.ah==a)this.ah=null,b=1;else return;this.Ak=a.fv;if(0!=this.i)if(a.Ym)if(1==b){b=Date.now()-a.Tt;var c=y7;c.dispatchEvent(new RZa(c,a.Oq?a.Oq.length:0,b,this.Ns));P7(this);this.B.length=0}else a_a(this);else{c=a.getLastError();var d;if(!(d=3==c||7==c||0==c&&0<this.Ak)){if(d=1==b)this.ah||this.Pn||1==this.i||2<=this.Ns?d=!1:(this.Pn=x7((0,g.Ta)(this.YN,this,a),b_a(this,this.Ns)),this.Ns++,d=!0);d=!(d||2==b&&S7(this))}if(d)switch(c){case 1:T7(this,
5);break;case 4:T7(this,10);break;case 3:T7(this,6);break;case 7:T7(this,12);break;default:T7(this,2)}}};
g.h.ZS=function(a){if(!g.Zb(arguments,this.i))throw Error("Unexpected channel state: "+this.i);};
g.h.XY=function(a){a?z7(2):(z7(1),c_a(this,8))};
g.h.mE=function(a){if(a)throw Error("Can't create secondary domain capable XhrIo object.");a=new g.Gj;a.N=!1;return a};
g.h.isActive=function(){return!!this.Qf&&this.Qf.isActive(this)};
g.h.Oj=function(a){var b=y7;b.dispatchEvent(new SZa(b,a))};
g.h.Vx=function(){return!(!g.Ic||g.Bc(10))};
g.h=d_a.prototype;g.h.IK=function(){};
g.h.HK=function(){};
g.h.GK=function(){};
g.h.WD=function(){};
g.h.rL=function(){return{}};
g.h.isActive=function(){return!0};g.h=e_a.prototype;g.h.isEmpty=function(){return 0===this.i.length&&0===this.j.length};
g.h.clear=function(){this.i=[];this.j=[]};
g.h.contains=function(a){return g.Zb(this.i,a)||g.Zb(this.j,a)};
g.h.remove=function(a){var b=this.i;var c=(0,g.oSa)(b,a);0<=c?(g.bc(b,c),b=!0):b=!1;return b||g.cc(this.j,a)};
g.h.Di=function(){for(var a=[],b=this.i.length-1;0<=b;--b)a.push(this.i[b]);var c=this.j.length;for(b=0;b<c;++b)a.push(this.j[b]);return a};f_a.prototype.flush=function(a,b){a=void 0===a?[]:a;b=void 0===b?!1:b;if(g.Q("enable_client_streamz_web")){a=g.q(a);for(var c=a.next();!c.done;c=a.next())c=g.Qi(c.value),c={serializedIncrementBatch:g.Ec(g.ue(c,SYa))},g.ev("streamzIncremented",c,{mH:b})}};var U7;g.Wa(V7,g.G);g.h=V7.prototype;g.h.AX=function(){this.Zf=Math.min(3E5,2*this.Zf);this.u();this.j&&this.start()};
g.h.start=function(){var a=this.Zf+15E3*Math.random();g.zq(this.i,a);this.j=Date.now()+a};
g.h.stop=function(){this.i.stop();this.j=0};
g.h.isActive=function(){return this.i.isActive()};
g.h.reset=function(){this.i.stop();this.Zf=5E3};g.Wa(W7,d_a);g.h=W7.prototype;g.h.subscribe=function(a,b,c){return this.u.subscribe(a,b,c)};
g.h.unsubscribe=function(a,b,c){return this.u.unsubscribe(a,b,c)};
g.h.jg=function(a){return this.u.jg(a)};
g.h.Z=function(a,b){return this.u.Z.apply(this.u,arguments)};
g.h.dispose=function(){this.Y||(this.Y=!0,g.Te(this.u),i_a(this),g.Te(this.j),this.j=null,this.ea=function(){return""})};
g.h.isDisposed=function(){return this.Y};
g.h.connect=function(a,b,c){if(!this.i||2!=this.i.getState()){this.W="";this.j.stop();this.C=a||null;this.B=b||0;a=this.va+"/test";b=this.va+"/bind";var d=new N7(c?c.firstTestResults:null,c?c.secondTestResults:null,this.ya),e=this.i;e&&(e.Qf=null);d.Qf=this;this.i=d;X7(this);if(this.i){d=g.P("ID_TOKEN");var f=this.i.zk||{};d?f["x-youtube-identity-token"]=d:delete f["x-youtube-identity-token"];this.i.zk=f}e?(3!=e.getState()&&0==YZa(e)||e.getState(),this.i.connect(a,b,this.I,e.u,e.wt)):c?this.i.connect(a,
b,this.I,c.sessionId,c.arrayId):this.i.connect(a,b,this.I)}};
g.h.sendMessage=function(a,b){a={_sc:a};b&&g.Bf(a,b);this.j.isActive()||2==(this.i?this.i.getState():0)?this.J.push(a):Y7(this)&&(X7(this),XZa(this.i,a))};
g.h.IK=function(){this.j.reset();this.C=null;this.B=0;if(this.J.length){var a=this.J;this.J=[];for(var b=0,c=a.length;b<c;++b)XZa(this.i,a[b])}this.Z("handlerOpened")};
g.h.GK=function(a){var b=2==a&&401==this.i.Ak;4==a||b||this.j.start();this.Z("handlerError",a,b)};
g.h.WD=function(a,b){if(!this.j.isActive())this.Z("handlerClosed");else if(b)for(var c=0,d=b.length;c<d;++c){var e=b[c].map;e&&this.J.push(e)}this.xa.i.JI("/client_streamz/youtube/living_room/mdx/browser_channel/closed_channels");a&&this.Ia.i.GC("/client_streamz/youtube/living_room/mdx/browser_channel/pending_maps",a.length);b&&this.La.i.GC("/client_streamz/youtube/living_room/mdx/browser_channel/undelivered_maps",b.length)};
g.h.rL=function(){var a={v:2};this.W&&(a.gsessionid=this.W);0!=this.B&&(a.ui=""+this.B);0!=this.N&&(a.ui=""+this.N);this.C&&g.Bf(a,this.C);return a};
g.h.HK=function(a){"S"==a[0]?this.W=a[1]:"gracefulReconnect"==a[0]?(this.j.start(),VZa(this.i)):this.Z("handlerMessage",new g_a(a[0],a[1]))};
g.h.FB=function(a){(this.I.loungeIdToken=a)||this.j.stop();if(this.Ha&&this.i){var b=this.i.zk||{};a?b["X-YouTube-LoungeId-Token"]=a:delete b["X-YouTube-LoungeId-Token"];this.i.zk=b}};
g.h.yY=function(){this.j.isActive();0==YZa(this.i)&&this.connect(this.C,this.B)};Z7.prototype.B=function(a,b,c,d){b?a(d):a({text:c.responseText})};
Z7.prototype.u=function(a,b){a(Error("Request error: "+b.status))};
Z7.prototype.C=function(a){a(Error("request timed out"))};var p_a=Date.now(),b8=null,e8=Array(50),d8=-1,f8=!1;g.Wa(g8,g.Uw);g8.prototype.Jh=function(){return this.screens};
g8.prototype.contains=function(a){return!!g7(this.screens,a)};
g8.prototype.get=function(a){return a?h7(this.screens,a):null};
g8.prototype.info=function(a){c8(this.I,a)};g.v(h8,g.Uw);g.h=h8.prototype;g.h.start=function(){!this.i&&isNaN(this.Pb)&&this.lO()};
g.h.stop=function(){this.i&&(this.i.abort(),this.i=null);isNaN(this.Pb)||(g.Xs(this.Pb),this.Pb=NaN)};
g.h.ra=function(){this.stop();g.Uw.prototype.ra.call(this)};
g.h.lO=function(){this.Pb=NaN;this.i=g.at($7(this.u,"/pairing/get_screen"),{method:"POST",postParams:{pairing_code:this.J},timeout:5E3,onSuccess:(0,g.Ta)(this.HR,this),onError:(0,g.Ta)(this.GR,this),onTimeout:(0,g.Ta)(this.IR,this)})};
g.h.HR=function(a,b){this.i=null;a=b.screen||{};a.dialId=this.B;a.name=this.I;b=-1;this.C&&a.shortLivedLoungeToken&&a.shortLivedLoungeToken.value&&a.shortLivedLoungeToken.refreshIntervalMs&&(a.screenIdType="shortLived",a.loungeToken=a.shortLivedLoungeToken.value,b=a.shortLivedLoungeToken.refreshIntervalMs);this.Z("pairingComplete",new b7(a),b)};
g.h.GR=function(a){this.i=null;a.status&&404==a.status?this.j>=J0a.length?this.Z("pairingFailed",Error("DIAL polling timed out")):(a=J0a[this.j],this.Pb=g.Vs((0,g.Ta)(this.lO,this),a),this.j++):this.Z("pairingFailed",Error("Server error "+a.status))};
g.h.IR=function(){this.i=null;this.Z("pairingFailed",Error("Server not responding"))};
var J0a=[2E3,2E3,1E3,1E3,1E3,2E3,2E3,5E3,5E3,1E4];g.Wa(j8,g8);g.h=j8.prototype;g.h.start=function(){i8(this)&&this.Z("screenChange");!g.Kx("yt-remote-lounge-token-expiration")&&t_a(this);g.Xs(this.i);this.i=g.Vs((0,g.Ta)(this.start,this),1E4)};
g.h.add=function(a,b){i8(this);q_a(this,a);k8(this,!1);this.Z("screenChange");b(a);a.token||t_a(this)};
g.h.remove=function(a,b){var c=i8(this);s_a(this,a)&&(k8(this,!1),c=!0);b(a);c&&this.Z("screenChange")};
g.h.bC=function(a,b,c,d){var e=i8(this),f=this.get(a.id);f?(f.name!=b&&(f.name=b,k8(this,!1),e=!0),c(a)):d(Error("no such local screen."));e&&this.Z("screenChange")};
g.h.ra=function(){g.Xs(this.i);j8.ue.ra.call(this)};
g.h.AT=function(a){i8(this);var b=this.screens.length;a=a&&a.screens||[];for(var c=0,d=a.length;c<d;++c){var e=a[c],f=this.get(e.screenId);f&&(f.token=e.loungeToken,--b)}k8(this,!b);b&&c8(this.I,"Missed "+b+" lounge tokens.")};
g.h.zT=function(a){c8(this.I,"Requesting lounge tokens failed: "+a)};g.v(m8,g.Uw);g.h=m8.prototype;g.h.start=function(){var a=parseInt(g.Kx("yt-remote-fast-check-period")||"0",10);(this.B=g.Va()-144E5<a?0:a)?p8(this):(this.B=g.Va()+3E5,g.Jx("yt-remote-fast-check-period",this.B),this.bH())};
g.h.isEmpty=function(){return g.uf(this.i)};
g.h.update=function(){l8("Updating availability on schedule.");var a=this.I(),b=g.hf(this.i,function(c,d){return c&&!!h7(a,d)},this);
o8(this,b)};
g.h.ra=function(){g.Xs(this.u);this.u=NaN;this.j&&(this.j.abort(),this.j=null);g.Uw.prototype.ra.call(this)};
g.h.bH=function(){g.Xs(this.u);this.u=NaN;this.j&&this.j.abort();var a=v_a(this);if(Y6(a)){var b=$7(this.C,"/pairing/get_screen_availability");this.j=a8(this.C,b,{lounge_token:g.pf(a).join(",")},(0,g.Ta)(this.gX,this,a),(0,g.Ta)(this.fX,this))}else o8(this,{}),p8(this)};
g.h.gX=function(a,b){this.j=null;var c=g.pf(v_a(this));if(g.pc(c,g.pf(a))){b=b.screens||[];c={};for(var d=0,e=b.length;d<e;++d)c[a[b[d].loungeToken]]="online"==b[d].status;o8(this,c);p8(this)}else this.xe("Changing Screen set during request."),this.bH()};
g.h.fX=function(a){this.xe("Screen availability failed: "+a);this.j=null;p8(this)};
g.h.xe=function(a){c8("OnlineScreenService",a)};g.Wa(q8,g8);g.h=q8.prototype;g.h.start=function(){this.j.start();this.i.start();this.screens.length&&(this.Z("screenChange"),this.i.isEmpty()||this.Z("onlineScreenChange"))};
g.h.add=function(a,b,c){this.j.add(a,b,c)};
g.h.remove=function(a,b,c){this.j.remove(a,b,c);this.i.update()};
g.h.bC=function(a,b,c,d){this.j.contains(a)?this.j.bC(a,b,c,d):(a="Updating name of unknown screen: "+a.name,c8(this.I,a),d(Error(a)))};
g.h.Jh=function(a){return a?this.screens:g.ec(this.screens,g.Xo(this.u,function(b){return!this.contains(b)},this))};
g.h.tJ=function(){return g.Xo(this.Jh(!0),function(a){return!!this.i.i[a.id]},this)};
g.h.uJ=function(a,b,c,d,e,f){var k=this;this.info("getDialScreenByPairingCode "+a+" / "+b);var l=new h8(this.B,a,b,c,d);l.subscribe("pairingComplete",function(m,n){g.Te(l);e(r8(k,m),n)});
l.subscribe("pairingFailed",function(m){g.Te(l);f(m)});
l.start();return(0,g.Ta)(l.stop,l)};
g.h.JR=function(a,b,c,d){g.at($7(this.B,"/pairing/get_screen"),{method:"POST",postParams:{pairing_code:a},timeout:5E3,onSuccess:(0,g.Ta)(function(e,f){e=new b7(f.screen||{});if(!e.name||z_a(this,e.name)){a:{f=e.name;for(var k=2,l=b(f,k);z_a(this,l);){k++;if(20<k)break a;l=b(f,k)}f=l}e.name=f}c(r8(this,e))},this),
onError:(0,g.Ta)(function(e){d(Error("pairing request failed: "+e.status))},this),
onTimeout:(0,g.Ta)(function(){d(Error("pairing request timed out."))},this)})};
g.h.ra=function(){g.Te(this.j);g.Te(this.i);q8.ue.ra.call(this)};
g.h.JT=function(){B_a(this);this.Z("screenChange");this.i.update()};
q8.prototype.dispose=q8.prototype.dispose;g.Wa(t8,g.Uw);g.h=t8.prototype;g.h.getScreen=function(){return this.B};
g.h.Cg=function(a){this.isDisposed()||(a&&(v8(this,""+a),this.Z("sessionFailed")),this.B=null,this.Z("sessionScreen",null))};
g.h.info=function(a){c8(this.ya,a)};
g.h.vJ=function(){return null};
g.h.rH=function(a){var b=this.i;a?(b.displayStatus=new chrome.cast.ReceiverDisplayStatus(a,[]),b.displayStatus.showStop=!0):b.displayStatus=null;chrome.cast.setReceiverDisplayStatus(b,(0,g.Ta)(function(){this.info("Updated receiver status for "+b.friendlyName+": "+a)},this),(0,g.Ta)(function(){v8(this,"Failed to update receiver status for: "+b.friendlyName)},this))};
g.h.ra=function(){this.rH("");t8.ue.ra.call(this)};g.v(w8,t8);g.h=w8.prototype;g.h.qH=function(a){if(this.j){if(this.j==a)return;v8(this,"Overriding cast session with new session object");K_a(this);this.va=!1;this.W="unknown";this.j.removeUpdateListener(this.ea);this.j.removeMessageListener("urn:x-cast:com.google.youtube.mdx",this.xa)}this.j=a;this.j.addUpdateListener(this.ea);this.j.addMessageListener("urn:x-cast:com.google.youtube.mdx",this.xa);G_a(this,"getMdxSessionStatus")};
g.h.xt=function(a){this.info("launchWithParams no-op for Cast: "+g.ej(a))};
g.h.stop=function(){this.j?this.j.stop((0,g.Ta)(function(){this.Cg()},this),(0,g.Ta)(function(){this.Cg(Error("Failed to stop receiver app."))},this)):this.Cg(Error("Stopping cast device without session."))};
g.h.rH=function(){};
g.h.ra=function(){this.info("disposeInternal");K_a(this);this.j&&(this.j.removeUpdateListener(this.ea),this.j.removeMessageListener("urn:x-cast:com.google.youtube.mdx",this.xa));this.j=null;t8.prototype.ra.call(this)};
g.h.VX=function(a,b){if(!this.isDisposed())if(b)if(b=Z6(b),g.Pa(b))switch(a=""+b.type,b=b.data||{},this.info("onYoutubeMessage_: "+a+" "+g.ej(b)),a){case "mdxSessionStatus":E_a(this,b);break;case "loungeToken":H_a(this,b);break;default:v8(this,"Unknown youtube message: "+a)}else v8(this,"Unable to parse message.");else v8(this,"No data in message.")};
g.h.FL=function(a,b,c,d){g.Xs(this.N);this.N=0;y_a(this.u,this.i.label,a,this.i.friendlyName,(0,g.Ta)(function(e){e?b(e):0<=d?(v8(this,"Screen "+a+" appears to be offline. "+d+" retries left."),this.N=g.Vs((0,g.Ta)(this.FL,this,a,b,c,d-1),300)):c(Error("Unable to fetch screen."))},this),c)};
g.h.vJ=function(){return this.j};
g.h.KR=function(a){this.isDisposed()||a||(v8(this,"Cast session died."),this.Cg())};g.v(z8,t8);g.h=z8.prototype;g.h.qH=function(a){this.j=a;this.j.addUpdateListener(this.Ha)};
g.h.xt=function(a){this.Ia=a;this.Y()};
g.h.stop=function(){R_a(this);this.j?this.j.stop((0,g.Ta)(this.Cg,this,null),(0,g.Ta)(this.Cg,this,"Failed to stop DIAL device.")):this.Cg()};
g.h.ra=function(){R_a(this);this.j&&this.j.removeUpdateListener(this.Ha);this.j=null;t8.prototype.ra.call(this)};
g.h.LR=function(a){this.isDisposed()||a||(v8(this,"DIAL session died."),this.C(),this.C=function(){},this.Cg())};g.v(D8,t8);D8.prototype.stop=function(){this.Cg()};
D8.prototype.qH=function(){};
D8.prototype.xt=function(){g.Xs(this.j);this.j=NaN;var a=h7(this.u.Jh(),this.i.label);a?u8(this,a):this.Cg(Error("No such screen"))};
D8.prototype.ra=function(){g.Xs(this.j);this.j=NaN;t8.prototype.ra.call(this)};g.v(E8,g.Uw);g.h=E8.prototype;
g.h.init=function(a,b){chrome.cast.timeout.requestSession=3E4;var c=new chrome.cast.SessionRequest(this.N,[chrome.cast.Capability.AUDIO_OUT]);this.W||(c.dialRequest=new chrome.cast.DialRequest("YouTube"));var d=chrome.cast.AutoJoinPolicy.TAB_AND_ORIGIN_SCOPED;a=a||this.I?chrome.cast.DefaultActionPolicy.CAST_THIS_TAB:chrome.cast.DefaultActionPolicy.CREATE_SESSION;var e=(0,g.Ta)(this.RW,this);c=new chrome.cast.ApiConfig(c,(0,g.Ta)(this.UN,this),e,d,a);c.customDialLaunchCallback=(0,g.Ta)(this.KV,this);
chrome.cast.initialize(c,(0,g.Ta)(function(){this.isDisposed()||(chrome.cast.addReceiverActionListener(this.C),m_a(),this.j.subscribe("onlineScreenChange",(0,g.Ta)(this.wJ,this)),this.u=U_a(this),chrome.cast.setCustomReceivers(this.u,function(){},(0,g.Ta)(function(f){this.xe("Failed to set initial custom receivers: "+g.ej(f))},this)),this.Z("yt-remote-cast2-availability-change",G8(this)),b(!0))},this),(0,g.Ta)(function(f){this.xe("Failed to initialize API: "+g.ej(f));
b(!1)},this))};
g.h.CY=function(a,b){F8("Setting connected screen ID: "+a+" -> "+b);if(this.i){var c=this.i.getScreen();if(!a||c&&c.id!=a)F8("Unsetting old screen status: "+this.i.i.friendlyName),H8(this,null)}if(a&&b){if(!this.i){c=h7(this.j.Jh(),a);if(!c){F8("setConnectedScreenStatus: Unknown screen.");return}if("shortLived"==c.idType){F8("setConnectedScreenStatus: Screen with id type to be short lived.");return}a=S_a(this,c);a||(F8("setConnectedScreenStatus: Connected receiver not custom..."),a=new chrome.cast.Receiver(c.uuid?
c.uuid:c.id,c.name),a.receiverType=chrome.cast.ReceiverType.CUSTOM,this.u.push(a),chrome.cast.setCustomReceivers(this.u,function(){},(0,g.Ta)(function(d){this.xe("Failed to set initial custom receivers: "+g.ej(d))},this)));
F8("setConnectedScreenStatus: new active receiver: "+a.friendlyName);H8(this,new D8(this.j,a),!0)}this.i.rH(b)}else F8("setConnectedScreenStatus: no screen.")};
g.h.DY=function(a){this.isDisposed()?this.xe("Setting connection data on disposed cast v2"):this.i?this.i.xt(a):this.xe("Setting connection data without a session")};
g.h.NR=function(){this.isDisposed()?this.xe("Stopping session on disposed cast v2"):this.i?(this.i.stop(),H8(this,null)):F8("Stopping non-existing session")};
g.h.requestSession=function(){chrome.cast.requestSession((0,g.Ta)(this.UN,this),(0,g.Ta)(this.jX,this))};
g.h.ra=function(){this.j.unsubscribe("onlineScreenChange",(0,g.Ta)(this.wJ,this));window.chrome&&chrome.cast&&chrome.cast.removeReceiverActionListener(this.C);var a=j_a,b=g.Ka("yt.mdx.remote.debug.handlers_");g.cc(b||[],a);g.Te(this.i);g.Uw.prototype.ra.call(this)};
g.h.xe=function(a){c8("Controller",a)};
g.h.WN=function(a,b){this.i==a&&(b||H8(this,null),this.Z("yt-remote-cast2-session-change",b))};
g.h.OW=function(a,b){if(!this.isDisposed())if(a)switch(a.friendlyName=chrome.cast.unescape(a.friendlyName),F8("onReceiverAction_ "+a.label+" / "+a.friendlyName+"-- "+b),b){case chrome.cast.ReceiverAction.CAST:if(this.i)if(this.i.i.label!=a.label)F8("onReceiverAction_: Stopping active receiver: "+this.i.i.friendlyName),this.i.stop();else{F8("onReceiverAction_: Casting to active receiver.");this.i.getScreen()&&this.Z("yt-remote-cast2-session-change",this.i.getScreen());break}switch(a.receiverType){case chrome.cast.ReceiverType.CUSTOM:H8(this,
new D8(this.j,a));break;case chrome.cast.ReceiverType.DIAL:H8(this,new z8(this.j,a,this.B,this.config_));break;case chrome.cast.ReceiverType.CAST:H8(this,new w8(this.j,a,this.config_));break;default:this.xe("Unknown receiver type: "+a.receiverType)}break;case chrome.cast.ReceiverAction.STOP:this.i&&this.i.i.label==a.label?this.i.stop():this.xe("Stopping receiver w/o session: "+a.friendlyName)}else this.xe("onReceiverAction_ called without receiver.")};
g.h.KV=function(a){if(this.isDisposed())return Promise.reject(Error("disposed"));var b=a.receiver;b.receiverType!=chrome.cast.ReceiverType.DIAL&&(this.xe("Not DIAL receiver: "+b.friendlyName),b.receiverType=chrome.cast.ReceiverType.DIAL);var c=this.i?this.i.i:null;if(!c||c.label!=b.label)return this.xe("Receiving DIAL launch request for non-clicked DIAL receiver: "+b.friendlyName),Promise.reject(Error("illegal DIAL launch"));if(c&&c.label==b.label&&c.receiverType!=chrome.cast.ReceiverType.DIAL){if(this.i.getScreen())return F8("Reselecting dial screen."),
this.Z("yt-remote-cast2-session-change",this.i.getScreen()),Promise.resolve(new chrome.cast.DialLaunchResponse(!1));this.xe('Changing CAST intent from "'+c.receiverType+'" to "dial" for '+b.friendlyName);H8(this,new z8(this.j,b,this.B,this.config_))}b=this.i;b.N=a;b.N.appState==chrome.cast.DialAppState.RUNNING?(a=b.N.extraData||{},c=a.screenId||null,A8(b)&&a.loungeToken?a.loungeTokenRefreshIntervalMs?a=O_a(b,{name:b.i.friendlyName,screenId:a.screenId,loungeToken:a.loungeToken,dialId:b.N.receiver.label,
screenIdType:"shortLived"},a.loungeTokenRefreshIntervalMs):(g.Fs(Error("No loungeTokenRefreshIntervalMs presents in additionalData: "+JSON.stringify(a)+".")),a=P_a(b,c)):a=P_a(b,c)):a=C8(b);return a};
g.h.UN=function(a){var b=this;if(!this.isDisposed()&&!this.I){F8("New cast session ID: "+a.sessionId);var c=a.receiver;if(c.receiverType!=chrome.cast.ReceiverType.CUSTOM){if(!this.i)if(c.receiverType==chrome.cast.ReceiverType.CAST)F8("Got resumed cast session before resumed mdx connection."),c.friendlyName=chrome.cast.unescape(c.friendlyName),H8(this,new w8(this.j,c,this.config_),!0);else{this.xe("Got non-cast session without previous mdx receiver event, or mdx resume.");return}var d=this.i.i,e=h7(this.j.Jh(),
d.label);e&&c7(e,c.label)&&d.receiverType!=chrome.cast.ReceiverType.CAST&&c.receiverType==chrome.cast.ReceiverType.CAST&&(F8("onSessionEstablished_: manual to cast session change "+c.friendlyName),g.Te(this.i),this.i=new w8(this.j,c,this.config_),this.i.subscribe("sessionScreen",(0,g.Ta)(this.WN,this,this.i)),this.i.subscribe("sessionFailed",function(){return T_a(b,b.i)}),this.i.xt(null));
this.i.qH(a)}}};
g.h.MR=function(){return this.i?this.i.vJ():null};
g.h.jX=function(a){this.isDisposed()||(this.xe("Failed to estabilish a session: "+g.ej(a)),a.code!=chrome.cast.ErrorCode.CANCEL&&H8(this,null),this.Z("yt-remote-cast2-session-failed"))};
g.h.RW=function(a){F8("Receiver availability updated: "+a);if(!this.isDisposed()){var b=G8(this);this.J=a==chrome.cast.ReceiverAvailability.AVAILABLE;G8(this)!=b&&this.Z("yt-remote-cast2-availability-change",G8(this))}};
g.h.wJ=function(){this.isDisposed()||(this.u=U_a(this),F8("Updating custom receivers: "+g.ej(this.u)),chrome.cast.setCustomReceivers(this.u,function(){},(0,g.Ta)(function(){this.xe("Failed to set custom receivers.")},this)),this.Z("yt-remote-cast2-availability-change",G8(this)))};
E8.prototype.setLaunchParams=E8.prototype.DY;E8.prototype.setConnectedScreenStatus=E8.prototype.CY;E8.prototype.stopSession=E8.prototype.NR;E8.prototype.getCastSession=E8.prototype.MR;E8.prototype.requestSession=E8.prototype.requestSession;E8.prototype.init=E8.prototype.init;E8.prototype.dispose=E8.prototype.dispose;var N8=[];g.h=S8.prototype;
g.h.reset=function(a){this.listId="";this.index=-1;this.videoId="";T8(this);this.volume=-1;this.muted=!1;a&&(this.index=a.index,this.listId=a.listId,this.videoId=a.videoId,this.playerState=a.playerState,this.volume=a.volume,this.muted=a.muted,this.audioTrackId=a.audioTrackId,this.trackData=a.trackData,this.Zk=a.hasPrevious,this.hasNext=a.hasNext,this.J=a.playerTime,this.I=a.playerTimeAt,this.B=a.seekableStart,this.i=a.seekableEnd,this.C=a.duration,this.N=a.loadedTime,this.u=a.liveIngestionTime,this.j=
!isNaN(this.u))};
g.h.Ic=function(){return 1==this.playerState};
g.h.isAdPlaying=function(){return 1081==this.playerState};
g.h.Xj=function(a){this.C=isNaN(a)?0:a};
g.h.getDuration=function(){return this.j?this.C+U8(this):this.C};
g.h.clone=function(){return new S8(Y8(this))};g.v($8,g.Uw);g.h=$8.prototype;g.h.getState=function(){return this.u};
g.h.play=function(){b9(this)?(this.i?this.i.play(null,g.La,g9(this,"play")):f9(this,"play"),e9(this,1,W8(a9(this))),this.Z("remotePlayerChange")):c9(this,this.play)};
g.h.pause=function(){b9(this)?(this.i?this.i.pause(null,g.La,g9(this,"pause")):f9(this,"pause"),e9(this,2,W8(a9(this))),this.Z("remotePlayerChange")):c9(this,this.pause)};
g.h.seekTo=function(a){if(b9(this)){if(this.i){var b=a9(this),c=new chrome.cast.media.SeekRequest;c.currentTime=a;b.Ic()||3==b.playerState?c.resumeState=chrome.cast.media.ResumeState.PLAYBACK_START:c.resumeState=chrome.cast.media.ResumeState.PLAYBACK_PAUSE;this.i.seek(c,g.La,g9(this,"seekTo",{newTime:a}))}else f9(this,"seekTo",{newTime:a});e9(this,3,a);this.Z("remotePlayerChange")}else c9(this,g.Ua(this.seekTo,a))};
g.h.stop=function(){if(b9(this)){this.i?this.i.stop(null,g.La,g9(this,"stopVideo")):f9(this,"stopVideo");var a=a9(this);a.index=-1;a.videoId="";T8(a);d9(this,a);this.Z("remotePlayerChange")}else c9(this,this.stop)};
g.h.setVolume=function(a,b){if(b9(this)){var c=a9(this);if(this.j){if(c.volume!=a){var d=Math.round(a)/100;this.j.setReceiverVolumeLevel(d,(0,g.Ta)(function(){c8("CP","set receiver volume: "+d)},this),(0,g.Ta)(function(){this.xe("failed to set receiver volume.")},this))}c.muted!=b&&this.j.setReceiverMuted(b,(0,g.Ta)(function(){c8("CP","set receiver muted: "+b)},this),(0,g.Ta)(function(){this.xe("failed to set receiver muted.")},this))}else{var e={volume:a,
muted:b};-1!=c.volume&&(e.delta=a-c.volume);f9(this,"setVolume",e)}c.muted=b;c.volume=a;d9(this,c)}else c9(this,g.Ua(this.setVolume,a,b))};
g.h.xJ=function(a,b){if(b9(this)){var c=a9(this);a={videoId:a};b&&(c.trackData={trackName:b.name,languageCode:b.languageCode,sourceLanguageCode:b.translationLanguage?b.translationLanguage.languageCode:"",languageName:b.languageName,kind:b.kind},a.style=g.ej(b.style),g.Bf(a,c.trackData));f9(this,"setSubtitlesTrack",a);d9(this,c)}else c9(this,g.Ua(this.xJ,a,b))};
g.h.setAudioTrack=function(a,b){b9(this)?(b=b.getLanguageInfo().getId(),f9(this,"setAudioTrack",{videoId:a,audioTrackId:b}),a=a9(this),a.audioTrackId=b,d9(this,a)):c9(this,g.Ua(this.setAudioTrack,a,b))};
g.h.playVideo=function(a,b,c,d,e,f,k){d=void 0===d?null:d;e=void 0===e?null:e;f=void 0===f?null:f;k=void 0===k?null:k;var l=a9(this),m={videoId:a};void 0!==c&&(m.currentIndex=c);X8(l,a,c||0);void 0!==b&&(V8(l,b),m.currentTime=b);d&&(m.listId=d);e&&(m.playerParams=e);f&&(m.clickTrackingParams=f);k&&(m.locationInfo=g.ej(k));f9(this,"setPlaylist",m);d||d9(this,l)};
g.h.mB=function(a,b){if(b9(this)){if(a&&b){var c=a9(this);X8(c,a,b);d9(this,c)}f9(this,"previous")}else c9(this,g.Ua(this.mB,a,b))};
g.h.nextVideo=function(a,b){if(b9(this)){if(a&&b){var c=a9(this);X8(c,a,b);d9(this,c)}f9(this,"next")}else c9(this,g.Ua(this.nextVideo,a,b))};
g.h.As=function(){if(b9(this)){f9(this,"clearPlaylist");var a=a9(this);a.reset();d9(this,a);this.Z("remotePlayerChange")}else c9(this,this.As)};
g.h.aL=function(){b9(this)?f9(this,"dismissAutoplay"):c9(this,this.aL)};
g.h.dispose=function(){if(3!=this.u){var a=this.u;this.u=3;this.Z("proxyStateChange",a,this.u)}g.Uw.prototype.dispose.call(this)};
g.h.ra=function(){f0a(this);this.B=null;this.C.clear();Z8(this,null);g.Uw.prototype.ra.call(this)};
g.h.sH=function(a){if((a!=this.u||2==a)&&3!=this.u&&0!=a){var b=this.u;this.u=a;this.Z("proxyStateChange",b,a);if(1==a)for(;!this.C.isEmpty();)b=a=this.C,0===b.i.length&&(b.i=b.j,b.i.reverse(),b.j=[]),a.i.pop().apply(this);else 3==a&&this.dispose()}};
g.h.MW=function(a,b){this.Z(a,b)};
g.h.uV=function(a){if(!a)this.jx(null),Z8(this,null);else if(this.j.receiver.volume){a=this.j.receiver.volume;var b=a9(this),c=Math.round(100*a.level||0);if(b.volume!=c||b.muted!=a.muted)c8("CP","Cast volume update: "+a.level+(a.muted?" muted":"")),b.volume=c,b.muted=!!a.muted,d9(this,b)}};
g.h.jx=function(a){c8("CP","Cast media: "+!!a);this.i&&this.i.removeUpdateListener(this.N);if(this.i=a)this.i.addUpdateListener(this.N),g0a(this),this.Z("remotePlayerChange")};
g.h.tV=function(a){a?(g0a(this),this.Z("remotePlayerChange")):this.jx(null)};
g.h.MH=function(){f9(this,"sendDebugCommand",{debugCommand:"stats4nerds "})};
g.h.BV=function(){var a=c0a();a&&Z8(this,a)};
g.h.xe=function(a){c8("CP",a)};g.v(h9,g.Uw);g.h=h9.prototype;
g.h.connect=function(a,b){if(b){var c=b.listId,d=b.videoId,e=b.videoIds,f=b.playerParams,k=b.clickTrackingParams,l=b.index,m={videoId:d},n=b.currentTime,p=b.locationInfo;b=b.loopMode;void 0!==n&&(m.currentTime=5>=n?0:n);f&&(m.playerParams=f);p&&(m.locationInfo=p);k&&(m.clickTrackingParams=k);c&&(m.listId=c);e&&0<e.length&&(m.videoIds=e.join(","));void 0!==l&&(m.currentIndex=l);this.ya&&(m.loopMode=b||"LOOP_MODE_OFF");c&&(this.yc.listId=c);this.yc.videoId=d;this.yc.index=l||0;this.yc.state=3;V8(this.yc,
n);this.B="UNSUPPORTED";c=this.ya?"setInitialState":"setPlaylist";i9("Connecting with "+c+" and params: "+g.ej(m));this.i.connect({method:c,params:g.ej(m)},a,lZa())}else i9("Connecting without params"),this.i.connect({},a,lZa());j0a(this)};
g.h.FB=function(a){this.i.FB(a)};
g.h.dispose=function(){this.isDisposed()||(g.Ia("yt.mdx.remote.remoteClient_",null,void 0),this.Z("beforeDispose"),j9(this,3));g.Uw.prototype.dispose.call(this)};
g.h.ra=function(){k9(this);m9(this);l9(this);g.Xs(this.J);this.J=NaN;g.Xs(this.N);this.N=NaN;this.u=null;g.Rt(this.W);this.W.length=0;this.i.dispose();g.Uw.prototype.ra.call(this);this.B=this.I=this.j=this.yc=this.i=null};
g.h.yV=function(){var a=this;i9("Channel opened");this.va&&(this.va=!1,l9(this),this.ea=g.Vs(function(){i9("Timing out waiting for a screen.");a.Js(1)},15E3));
pZa(h_a(this.i),this.Ia)};
g.h.vV=function(){i9("Channel closed");isNaN(this.C)?m7(!0):m7();this.dispose()};
g.h.wV=function(a,b){m7();isNaN(this.qw())?(b&&"shortLived"==this.xa&&this.Z("browserChannelAuthError",a),i9("Channel error: "+a+" without reconnection"),this.dispose()):(this.va=!0,i9("Channel error: "+a+" with reconnection in "+this.qw()+" ms"),j9(this,2))};
g.h.lM=function(a){if(!this.j||0===this.j.length)return!1;for(var b=g.q(this.j),c=b.next();!c.done;c=b.next())if(!c.value.capabilities.has(a))return!1;return!0};
g.h.xV=function(a){a.params?i9("Received: action="+a.action+", params="+g.ej(a.params)):i9("Received: action="+a.action+" {}");switch(a.action){case "loungeStatus":a=Z6(a.params.devices);this.j=g.Kn(a,function(c){return new a7(c)});
a=!!g.Wb(this.j,function(c){return"LOUNGE_SCREEN"==c.type});
m0a(this,a);a=this.lM("mlm");this.Z("multiStateLoopEnabled",a);break;case "loungeScreenDisconnected":g.dc(this.j,function(c){return"LOUNGE_SCREEN"==c.type});
m0a(this,!1);break;case "remoteConnected":var b=new a7(Z6(a.params.device));g.Wb(this.j,function(c){return c.equals(b)})||ZYa(this.j,b);
break;case "remoteDisconnected":b=new a7(Z6(a.params.device));g.dc(this.j,function(c){return c.equals(b)});
break;case "gracefulDisconnect":break;case "playlistModified":o0a(this,a,"QUEUE_MODIFIED");break;case "nowPlaying":q0a(this,a);break;case "onStateChange":p0a(this,a);break;case "onAdStateChange":r0a(this,a);break;case "onVolumeChanged":s0a(this,a);break;case "onSubtitlesTrackChanged":n0a(this,a);break;case "nowAutoplaying":t0a(this,a);break;case "autoplayDismissed":this.Z("autoplayDismissed");break;case "autoplayUpNext":this.I=a.params.videoId||null;this.Z("autoplayUpNext",this.I);break;case "onAutoplayModeChanged":this.B=
a.params.autoplayMode;this.Z("autoplayModeChange",this.B);"DISABLED"==this.B&&this.Z("autoplayDismissed");break;case "onHasPreviousNextChanged":u0a(this,a);break;case "requestAssistedSignIn":this.Z("assistedSignInRequested",a.params.authCode);break;case "onLoopModeChanged":this.Z("loopModeChange",a.params.loopMode);break;default:i9("Unrecognized action: "+a.action)}};
g.h.sT=function(){var a=3;this.isDisposed()||(a=0,isNaN(this.qw())?Y7(this.i)&&isNaN(this.C)&&(a=1):a=2);return a};
g.h.Js=function(a){i9("Disconnecting with "+a);g.Ia("yt.mdx.remote.remoteClient_",null,void 0);k9(this);this.Z("beforeDisconnect",a);1==a&&m7();i_a(this.i,a);this.dispose()};
g.h.qT=function(){var a=this.yc;this.u&&(a=this.yc.clone(),X8(a,this.u,a.index));return Y8(a)};
g.h.EY=function(a){var b=this,c=new S8(a);c.videoId&&c.videoId!=this.yc.videoId&&(this.u=c.videoId,g.Xs(this.J),this.J=g.Vs(function(){if(b.u){var e=b.u;b.u=null;b.yc.videoId!=e&&n9(b,"getNowPlaying")}},5E3));
var d=[];this.yc.listId==c.listId&&this.yc.videoId==c.videoId&&this.yc.index==c.index||d.push("remoteQueueChange");this.yc.playerState==c.playerState&&this.yc.volume==c.volume&&this.yc.muted==c.muted&&W8(this.yc)==W8(c)&&g.ej(this.yc.trackData)==g.ej(c.trackData)||d.push("remotePlayerChange");this.yc.reset(a);g.rc(d,function(e){this.Z(e)},this)};
g.h.EL=function(){var a=this.i.I.id,b=g.Wb(this.j,function(c){return"REMOTE_CONTROL"==c.type&&c.id!=a});
return b?b.id:""};
g.h.qw=function(){var a=this.i;return a.j.isActive()?a.j.j-Date.now():NaN};
g.h.nT=function(){return this.B||"UNSUPPORTED"};
g.h.oT=function(){return this.I||""};
g.h.OR=function(){if(!isNaN(this.qw())){var a=this.i.j;g.Aq(a.i);a.start()}};
g.h.BY=function(a,b){n9(this,a,b);l0a(this)};
g.h.yJ=function(){var a=g.lt("SID","")||"",b=g.lt("SAPISID","")||"",c=g.lt("__Secure-3PAPISID","")||"";if(!a&&!b&&!c)return"";a=g.Ec(g.jb(a),2);b=g.Ec(g.jb(b),2);c=g.Ec(g.jb(c),2);return g.Ec(g.jb(a+","+b+","+c),2)};
h9.prototype.subscribe=h9.prototype.subscribe;h9.prototype.unsubscribeByKey=h9.prototype.jg;h9.prototype.getProxyState=h9.prototype.sT;h9.prototype.disconnect=h9.prototype.Js;h9.prototype.getPlayerContextData=h9.prototype.qT;h9.prototype.setPlayerContextData=h9.prototype.EY;h9.prototype.getOtherConnectedRemoteId=h9.prototype.EL;h9.prototype.getReconnectTimeout=h9.prototype.qw;h9.prototype.getAutoplayMode=h9.prototype.nT;h9.prototype.getAutoplayVideoId=h9.prototype.oT;h9.prototype.reconnect=h9.prototype.OR;
h9.prototype.sendMessage=h9.prototype.BY;h9.prototype.getXsrfToken=h9.prototype.yJ;h9.prototype.isCapabilitySupportedOnConnectedDevices=h9.prototype.lM;g.v(o9,g8);g.h=o9.prototype;g.h.Jh=function(a){return this.Xe.$_gs(a)};
g.h.contains=function(a){return!!this.Xe.$_c(a)};
g.h.get=function(a){return this.Xe.$_g(a)};
g.h.start=function(){this.Xe.$_st()};
g.h.add=function(a,b,c){this.Xe.$_a(a,b,c)};
g.h.remove=function(a,b,c){this.Xe.$_r(a,b,c)};
g.h.bC=function(a,b,c,d){this.Xe.$_un(a,b,c,d)};
g.h.ra=function(){for(var a=0,b=this.i.length;a<b;++a)this.Xe.$_ubk(this.i[a]);this.i.length=0;this.Xe=null;g8.prototype.ra.call(this)};
g.h.PR=function(){this.Z("screenChange")};
g.h.sW=function(){this.Z("onlineScreenChange")};
q8.prototype.$_st=q8.prototype.start;q8.prototype.$_gspc=q8.prototype.JR;q8.prototype.$_gsppc=q8.prototype.uJ;q8.prototype.$_c=q8.prototype.contains;q8.prototype.$_g=q8.prototype.get;q8.prototype.$_a=q8.prototype.add;q8.prototype.$_un=q8.prototype.bC;q8.prototype.$_r=q8.prototype.remove;q8.prototype.$_gs=q8.prototype.Jh;q8.prototype.$_gos=q8.prototype.tJ;q8.prototype.$_s=q8.prototype.subscribe;q8.prototype.$_ubk=q8.prototype.jg;var B9=null,H9=!1,p9=null,q9=null,G9=null,u9=[];g.v(I9,g.G);g.h=I9.prototype;g.h.ra=function(){g.G.prototype.ra.call(this);this.i.stop();this.u.stop();this.N.stop();var a=this.Wb;a.unsubscribe("proxyStateChange",this.SN,this);a.unsubscribe("remotePlayerChange",this.nx,this);a.unsubscribe("remoteQueueChange",this.YA,this);a.unsubscribe("previousNextChange",this.PN,this);a.unsubscribe("nowAutoplaying",this.JN,this);a.unsubscribe("autoplayDismissed",this.mN,this);this.Wb=this.j=null};
g.h.Gj=function(a){var b=g.Ca.apply(1,arguments);if(2!=this.Wb.u)if(J9(this)){var c=a;if(!a9(this.Wb).isAdPlaying()||"control_seek"!==c)switch(c){case "control_toggle_play_pause":a9(this.Wb).Ic()?this.Wb.pause():this.Wb.play();break;case "control_play":this.Wb.play();break;case "control_pause":this.Wb.pause();break;case "control_seek":this.J.sJ(b[0],b[1]);break;case "control_subtitles_set_track":K9(this,b[0]);break;case "control_set_audio_track":this.setAudioTrack(b[0])}}else switch(a){case "control_toggle_play_pause":case "control_play":case "control_pause":b=
this.G.getCurrentTime();L9(this,0===b?void 0:b);break;case "control_seek":L9(this,b[0]);break;case "control_subtitles_set_track":K9(this,b[0]);break;case "control_set_audio_track":this.setAudioTrack(b[0])}};
g.h.rV=function(a){this.N.DR(a)};
g.h.qZ=function(a){this.Gj("control_subtitles_set_track",g.uf(a)?null:a)};
g.h.iP=function(){var a=this.G.getOption("captions","track");g.uf(a)||K9(this,a)};
g.h.Sb=function(a){this.j.Sb(a,this.G.getVideoData().lengthSeconds)};
g.h.dW=function(){g.uf(this.B)||F0a(this,this.B);this.C=!1};
g.h.SN=function(a,b){this.u.stop();2===b&&this.dP()};
g.h.nx=function(){if(J9(this)){this.i.stop();var a=a9(this.Wb);switch(a.playerState){case 1080:case 1081:case 1084:case 1085:this.j.Cf=1;break;case 1082:case 1083:this.j.Cf=0;break;default:this.j.Cf=-1}switch(a.playerState){case 1081:case 1:this.Xb(new g.QI(8));this.cP();break;case 1085:case 3:this.Xb(new g.QI(9));break;case 1083:case 0:this.Xb(new g.QI(2));this.J.stop();this.Sb(this.G.getVideoData().lengthSeconds);break;case 1084:this.Xb(new g.QI(4));break;case 2:this.Xb(new g.QI(4));this.Sb(W8(a));
break;case -1:this.Xb(new g.QI(64));break;case -1E3:this.Xb(new g.QI(128,{errorCode:"mdx.remoteerror",errorMessage:"\u0412\u0438\u0434\u0435\u043e \u043d\u0435\u0434\u043e\u0441\u0442\u0443\u043f\u043d\u043e \u0434\u043b\u044f \u0443\u0434\u0430\u043b\u0435\u043d\u043d\u043e\u0433\u043e \u0432\u043e\u0441\u043f\u0440\u043e\u0438\u0437\u0432\u0435\u0434\u0435\u043d\u0438\u044f.",wE:2}))}a=a9(this.Wb).trackData;var b=this.B;(a||b?a&&b&&a.trackName==b.trackName&&a.languageCode==b.languageCode&&a.languageName==
b.languageName&&a.kind==b.kind:1)||(this.B=a,F0a(this,a));a=a9(this.Wb);-1===a.volume||Math.round(this.G.getVolume())===a.volume&&this.G.isMuted()===a.muted||this.W.isActive()||this.IP()}else E0a(this)};
g.h.PN=function(){this.G.Z("mdxpreviousnextchange")};
g.h.YA=function(){J9(this)||E0a(this)};
g.h.JN=function(a){isNaN(a)||this.G.Z("mdxnowautoplaying",a)};
g.h.mN=function(){this.G.Z("mdxautoplaycanceled")};
g.h.setAudioTrack=function(a){J9(this)&&this.Wb.setAudioTrack(this.G.getVideoData(1).videoId,a)};
g.h.seekTo=function(a,b){-1===a9(this.Wb).playerState?L9(this,a):b&&this.Wb.seekTo(a)};
g.h.IP=function(){var a=this;if(J9(this)){var b=a9(this.Wb);this.events.xc(this.Y);b.muted?this.G.mute():this.G.unMute();this.G.setVolume(b.volume);this.Y=this.events.S(this.G,"onVolumeChange",function(c){D0a(a,c)})}};
g.h.cP=function(){this.i.stop();if(!this.Wb.isDisposed()){var a=a9(this.Wb);a.Ic()&&this.Xb(new g.QI(8));this.Sb(W8(a));this.i.start()}};
g.h.dP=function(){this.u.stop();this.i.stop();var a=this.Wb.B.getReconnectTimeout();2==this.Wb.u&&!isNaN(a)&&this.u.start()};
g.h.Xb=function(a){this.u.stop();var b=this.I;if(!g.VI(b,a)){var c=g.V(a,2);c!==g.V(this.I,2)&&this.G.Zt(c);this.I=a;H0a(this.j,b,a)}};g.v(M9,g.W);M9.prototype.jd=function(){this.i.show()};
M9.prototype.Db=function(){this.i.hide()};
M9.prototype.j=function(){$6("mdx-privacy-popup-cancel");this.Db()};
M9.prototype.u=function(){$6("mdx-privacy-popup-confirm");this.Db()};g.v(N9,g.W);N9.prototype.onStateChange=function(a){G0a(this,a.state)};g.v(O9,g.uP);O9.prototype.C=function(){var a=this.G.getOption("remote","receivers");a&&1<a.length&&!this.G.getOption("remote","quickCast")?(this.Uo=g.sc(a,this.i,this),g.vP(this,g.Kn(a,this.i)),a=this.G.getOption("remote","currentReceiver"),a=this.i(a),this.options[a]&&this.Zh(a),this.enable(!0)):this.enable(!1)};
O9.prototype.i=function(a){return a.key};
O9.prototype.xj=function(a){return"cast-selector-receiver"===a?"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c":this.Uo[a].name};
O9.prototype.If=function(a){g.uP.prototype.If.call(this,a);this.G.setOption("remote","currentReceiver",this.Uo[a]);this.qb.Db()};g.v(P9,g.tM);g.h=P9.prototype;
g.h.create=function(){var a=this.player.T(),b=g.bE(a);a={device:"Desktop",app:"youtube-desktop",loadCastApiSetupScript:a.L("mdx_load_cast_api_bootstrap_script"),enableDialLoungeToken:a.L("enable_dial_short_lived_lounge_token"),enableCastLoungeToken:a.L("enable_cast_short_lived_lounge_token")};y0a(b,a);this.subscriptions.push(g.ju("yt-remote-before-disconnect",this.qV,this));this.subscriptions.push(g.ju("yt-remote-connection-change",this.SW,this));this.subscriptions.push(g.ju("yt-remote-receiver-availability-change",this.RN,
this));this.subscriptions.push(g.ju("yt-remote-auto-connect",this.QW,this));this.subscriptions.push(g.ju("yt-remote-receiver-resumed",this.PW,this));this.subscriptions.push(g.ju("mdx-privacy-popup-confirm",this.hY,this));this.subscriptions.push(g.ju("mdx-privacy-popup-cancel",this.gY,this));this.RN()};
g.h.load=function(){this.player.cancelPlayback();g.tM.prototype.load.call(this);this.ji=new I9(this,this.player,this.Wb);var a=(a=C0a())?a.currentTime:0;var b=F9()?new $8(z9(),void 0):null;0==a&&b&&(a=W8(a9(b)));0!==a&&this.Sb(a);H0a(this,this.Gd,this.Gd);this.player.yl(6)};
g.h.unload=function(){this.player.Z("mdxautoplaycanceled");this.Gn=this.ll;g.Ue(this.ji,this.Wb);this.Wb=this.ji=null;g.tM.prototype.unload.call(this);this.player.yl(5);Q9(this)};
g.h.ra=function(){g.ku(this.subscriptions);g.tM.prototype.ra.call(this)};
g.h.ol=function(a){var b=g.Ca.apply(1,arguments);this.loaded&&this.ji.Gj.apply(this.ji,[a].concat(g.u(b)))};
g.h.getAdState=function(){return this.Cf};
g.h.Zk=function(){return this.Wb?a9(this.Wb).Zk:!1};
g.h.hasNext=function(){return this.Wb?a9(this.Wb).hasNext:!1};
g.h.Sb=function(a,b){this.AM=a||0;this.player.Z("progresssync",a,b);this.player.Oa("onVideoProgress",a||0)};
g.h.getCurrentTime=function(){return this.AM};
g.h.getProgressState=function(){var a=a9(this.Wb),b=this.player.getVideoData();return{airingStart:0,airingEnd:0,allowSeeking:this.player.T().L("web_player_mdx_allow_seeking_change_killswitch")?this.player.lf():!a.isAdPlaying()&&this.player.lf(),clipEnd:b.clipEnd,clipStart:b.clipStart,current:this.getCurrentTime(),displayedStart:-1,duration:a.getDuration(),ingestionTime:a.j?a.u+U8(a):a.u,isAtLiveHead:1>=(a.j?a.i+U8(a):a.i)-this.getCurrentTime(),loaded:a.N,seekableEnd:a.j?a.i+U8(a):a.i,seekableStart:0<
a.B?a.B+U8(a):a.B}};
g.h.nextVideo=function(){this.Wb&&this.Wb.nextVideo()};
g.h.mB=function(){this.Wb&&this.Wb.mB()};
g.h.qV=function(a){1===a&&(this.NG=this.Wb?a9(this.Wb):null)};
g.h.SW=function(){var a=F9()?new $8(z9(),void 0):null;if(a){var b=this.Gn;this.loaded&&this.unload();this.Wb=a;this.NG=null;b.key!==this.ll.key&&(this.Gn=b,this.load())}else g.Te(this.Wb),this.Wb=null,this.loaded&&(this.unload(),(a=this.NG)&&a.videoId===this.player.getVideoData().videoId&&this.player.cueVideoById(a.videoId,W8(a)));this.player.Z("videodatachange","newdata",this.player.getVideoData(),3)};
g.h.RN=function(){var a=[this.ll],b=a.concat,c=z0a();O8()&&g.Kx("yt-remote-cast-available")&&c.push({key:"cast-selector-receiver",name:"Cast..."});this.Uo=b.call(a,c);a=A9()||this.ll;R9(this,a);this.player.Oa("onMdxReceiversChange")};
g.h.QW=function(){var a=A9();R9(this,a)};
g.h.PW=function(){this.Gn=A9()};
g.h.hY=function(){this.yx=!0;Q9(this);H9=!1;B9&&D9(B9,1);B9=null};
g.h.gY=function(){this.yx=!1;Q9(this);R9(this,this.ll);this.Gn=this.ll;H9=!1;B9=null;this.player.playVideo()};
g.h.tf=function(a,b){switch(a){case "casting":return this.loaded;case "receivers":return this.Uo;case "currentReceiver":return b&&("cast-selector-receiver"===b.key?Q8():R9(this,b)),this.loaded?this.Gn:this.ll;case "quickCast":return 2===this.Uo.length&&"cast-selector-receiver"===this.Uo[1].key?(b&&Q8(),!0):!1}};
g.h.MH=function(){this.Wb.MH()};
g.h.dj=function(){return!1};
g.h.getOptions=function(){return["casting","receivers","currentReceiver","quickCast"]};g.sM("remote",P9);})(_yt_player);
