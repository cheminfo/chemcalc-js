/**
 * chemcalc - Analyse molecular formula
 * @version v3.0.6
 * @date 2017-01-03T13:04:02.642Z
 * @link http://www.chemcalc.org
 * @license BSD
*/
(function (root) {
    'use strict';

    function getExports($wnd) {

        var $doc = $wnd.document;
        var $gwt = {};
        var navigator = {
            userAgent: 'webkit'
        };

        function noop(){}

        var __gwtModuleFunction = noop;
        __gwtModuleFunction.__moduleStartupDone = noop;
        var $sendStats = noop;
        var $moduleName, $moduleBase;

        // Start GWT code 
function Hh(){}
function Dh(){}
function Kh(){}
function eb(){}
function mc(){}
function tc(){}
function cc(){}
function Qc(){}
function pq(){}
function ss(){}
function cu(){}
function Ov(){}
function Ih(){Jh()}
function Ip(){tp(this)}
function xq(){pn(this)}
function Pi(a){this.a=a}
function Ac(a){this.a=a}
function Jc(a){this.a=a}
function Uc(a){this.a=a}
function ed(a){this.a=a}
function Lh(a){this.a=a}
function Dn(a){this.a=a}
function po(a){this.a=a}
function vo(a){this.a=a}
function zo(a){this.a=a}
function Eo(a){this.a=a}
function co(a){this.c=a}
function bq(a){this.c=a}
function ep(a){this.b=a}
function jp(a){this.a=a}
function pp(a){this.a=a}
function $s(a){this.a=a}
function Bv(a){this.a=a}
function zc(){this.a=[]}
function Fc(a){return a.a}
function Mc(a){return a.a}
function Zc(a){return a.a}
function kd(a){return a.a}
function zd(a){return a.a}
function rd(){return null}
function Tc(){return null}
function hc(a){gc();fc.u(a)}
function km(){gm();hm(this)}
function cj(){zb.call(this)}
function Uj(){zb.call(this)}
function Oh(){zb.call(this)}
function Ni(){zb.call(this)}
function uq(){zb.call(this)}
function vq(){zb.call(this)}
function cr(){zb.call(this)}
function Fr(){gr.call(this)}
function au(){$r.call(this)}
function Qh(){Oh.call(this)}
function Kq(){Kq=Dh;Jq=Mq()}
function oq(){oq=Dh;nq=new pq}
function Lv(){Lv=Dh;Kv=new xq}
function Db(){Db=Dh;Cb=new eb}
function _b(){_b=Dh;$b=new cc}
function Pc(){Pc=Dh;Oc=new Qc}
function dw(){this.a=new zc}
function jw(){this.a=new dd}
function gr(){this.a=new Ip}
function Ls(){this.g=new $r}
function nt(a){ht(a);return a}
function pt(a){return isNaN(a)}
function Jr(a){a.c=null;a.d=0}
function Ab(a){yb.call(this,a)}
function dj(a){Bb.call(this,a)}
function ej(a){Ab.call(this,a)}
function Nc(a){Ab.call(this,a)}
function Nh(a){Ab.call(this,a)}
function Ph(a){Ab.call(this,a)}
function Mi(a){Ab.call(this,a)}
function Vj(a){Ab.call(this,a)}
function gj(a){Mi.call(this,a)}
function Pj(a){Ph.call(this,a)}
function Rh(a){Ph.call(this,a)}
function _s(a){$s.call(this,a)}
function Vu(a){Ms.call(this,a)}
function gv(a){yb.call(this,a)}
function dd(){ed.call(this,{})}
function Fj(){Lh.call(this,'')}
function Mj(){Lh.call(this,'')}
function Nj(){Lh.call(this,'')}
function xh(){vh==null&&(vh=[])}
function wt(){wt=Dh;tt={};vt={}}
function Rb(){Rb=Dh;!!(gc(),fc)}
function Sr(a){return !!a&&a.b}
function $i(a){return a<0?-a:a}
function _i(a,b){return a>b?a:b}
function aj(a,b){return a<b?a:b}
function Ad(a,b){return ni(a,b)}
function Xo(a,b){return !!a.W(b)}
function eh(a,b){return $g(a,b)>0}
function gh(a,b){return $g(a,b)<0}
function od(a){return new Uc(a)}
function qd(a){return new td(a)}
function Zo(a){return Yo(a,Mr(a))}
function Tm(a){return !a?null:a.c}
function qn(a){return a.a.c+a.b.c}
function is(a){return a.b=ao(a.a)}
function ie(a){return a.l|a.m<<22}
function qu(a){return a.a.e*a.a.c}
function ru(a){return a.a.e*a.a.d}
function fr(a,b){return vp(a.a,b)}
function bh(a,b){return $g(a,b)==0}
function hh(a,b){return $g(a,b)<=0}
function nd(a){return Ic(),a?Hc:Gc}
function fi(a){ei(a);return a.k}
function Oq(){Kq();return new Jq}
function Qq(a,b){return a.a.get(b)}
function Fp(a){kq(a.a,a.a.length)}
function Ms(a){this.g=new _r(a)}
function Ei(a,b){this.a=a;this.b=b}
function Jo(a,b){this.c=a;this.d=b}
function $l(a,b){Ei.call(this,a,b)}
function zs(a,b){Ei.call(this,a,b)}
function Qo(a,b){Jo.call(this,a,b)}
function $r(){_r.call(this,null)}
function Th(){Th=Dh;Sh=(Th(),false)}
function oj(a,b){return ht(a),a===b}
function Oi(a,b){return Qi(a.a,b.a)}
function xe(a){return typeof a===qw}
function ye(a){return typeof a===rw}
function Be(a){return typeof a===sw}
function fh(a){return typeof a===rw}
function Um(a){return !a?null:a.T()}
function Yb(a){$wnd.clearTimeout(a)}
function Ys(a,b,c){a.splice(b,c)}
function Ws(a,b,c){a.splice(b,0,c)}
function Wk(a){Dk();Xk.call(this,a)}
function ct(){$s.call(this,'UTF-8')}
function Zb(){Ob!=0&&(Ob=0);Qb=-1}
function Dq(a){this.a=Oq();this.b=a}
function Tq(a){this.a=Oq();this.b=a}
function Ro(a){Jo.call(this,a.c,a.d)}
function tp(a){a.a=Ed(rf,ow,1,0,5,1)}
function pv(a){a.b=a.d.b;a.c=new au}
function Ej(a,b){a.a+=''+b;return a}
function Ij(a,b){a.a+=''+b;return a}
function Jj(a,b){a.a+=''+b;return a}
function Kj(a,b){a.a+=''+b;return a}
function Er(a,b){vp(a.a,b);return b}
function qj(a,b){return a.indexOf(b)}
function _n(a){return a.a<a.c.size()}
function Ld(a){return Md(a.l,a.m,a.h)}
function Ci(a){return oj(rw,typeof a)}
function rj(a){return oj(sw,typeof a)}
function Ce(a){return a==null?null:a}
function er(a){return a!=null?kb(a):0}
function Qi(a,b){return a<b?-1:a>b?1:0}
function lj(a,b){return a.charCodeAt(b)}
function ot(a,b){return a==b?0:a<b?-1:1}
function st(a){return a.$H||(a.$H=++rt)}
function Xg(a){return a.backingJsObject}
function Vd(a){return a.l+a.m*Kw+a.h*Lw}
function Md(a,b,c){return {l:a,m:b,h:c}}
function Ds(){zs.call(this,'Head',1)}
function Is(){zs.call(this,'Tail',3)}
function Fs(){zs.call(this,'Range',2)}
function Gj(a){Lh.call(this,(ht(a),a))}
function Oj(a){Lh.call(this,(ht(a),a))}
function mb(a){a.g=Ed(tf,ow,33,0,0,1)}
function ft(a){if(!a){throw Xg(new cr)}}
function lt(a){if(!a){throw Xg(new Ni)}}
function Sj(){Sj=Dh;Qj=new Kh;Rj=new Kh}
function tq(a){var b;b=a[Zw]|0;a[Zw]=b+1}
function ps(a){this.a=a;ep.call(this,a)}
function ks(a){ls.call(this,a,(ys(),us))}
function zb(){mb(this);nb(this);this.t()}
function sj(a,b){return a.lastIndexOf(b)}
function yj(a,b,c){return a.substr(b,c-b)}
function we(a,b){return a!=null&&te(a,b)}
function ai(a){return a>=56320&&a<=57343}
function Gp(a){return Us(a.a,a.a.length)}
function Uh(a){Th();return oj(qw,typeof a)}
function Vh(a,b){Th();return a==b?0:a?1:-1}
function kc(a){gc();return parseInt(a)||-1}
function mk(a){this.e=5;gk(this,(ht(a),a))}
function xv(a,b){this.d=a;pv(this);this.c=b}
function Gu(a,b,c){Hu.call(this,a,b,c,true)}
function gw(a,b,c){bd(a.a,b,c);return a}
function Io(a,b){var c;c=a.d;a.d=b;return c}
function js(a){bo(a.a);Vr(a.c,a.b);a.b=null}
function ei(a){if(a.k!=null){return}ri(a)}
function ue(a){return String.fromCharCode(a)}
function gn(a,b){return hn(b,a.b)||hn(b,a.a)}
function Ap(a,b){return Bp(a,b,a.a.length-1)}
function Ae(a,b){return a&&b&&a instanceof b}
function tj(a,b,c){return a.lastIndexOf(b,c)}
function Sb(a,b,c){return a.apply(b,c);var d}
function Tu(a,b,c){Uu.call(this,a,b,c,1,true)}
function lu(a,b,c,d){ku.call(this,a,0,b,c,d)}
function $q(a,b,c){this.a=a;this.b=b;this.c=c}
function kk(a){this.f=a;this.e=5;this.a=nk(a)}
function kq(a,b){et(b,a.length);iq(a,0,b,null)}
function vp(a,b){a.a[a.a.length]=b;return true}
function ji(a){var b;b=ii(a);vi(a,b);return b}
function Zi(){Zi=Dh;Yi=Ed(mf,ow,21,256,0,1)}
function mj(a,b){return ot((ht(a),a),(ht(b),b))}
function mh(a,b){return _g(de(fh(a)?qh(a):a,b))}
function nh(a,b){return _g(ee(fh(a)?qh(a):a,b))}
function oh(a,b){return _g(fe(fh(a)?qh(a):a,b))}
function xj(a,b){return a.substr(b,a.length-b)}
function Xs(a,b,c){Vs(c,0,a,b,c.length,false)}
function up(a,b,c){jt(b,a.a.length);Ws(a.a,b,c)}
function yp(a,b){gt(b,a.a.length);return a.a[b]}
function cw(a,b){xc(a.a,a.a.a.length,b);return a}
function sh(a){if(fh(a)){return a|0}return ie(a)}
function dt(a,b){if(!a){throw Xg(new Mi(b))}}
function it(a,b){if(a==null){throw Xg(new ej(b))}}
function lr(a,b){if(a<0||a>=b){throw Xg(new Qh)}}
function wv(a,b){b<1.0E-10&&(b=1.0E-10);a.b=b}
function fn(a,b){return Be(b)?ln(a,b):!!Aq(a.a,b)}
function be(a){return Md(~a.l&Hw,~a.m&Hw,~a.h&Iw)}
function Dt(a){return a.a!=0?'['+a.a+a.i+']':a.i}
function Gd(a){return Array.isArray(a)&&a.bb===Hh}
function ve(a){return !Array.isArray(a)&&a.bb===Hh}
function Ks(a,b){return Tr(a.g,b,(Th(),Sh))==null}
function Pq(a,b){return !(a.a.get(b)===undefined)}
function dc(a,b){!a&&(a=[]);a[a.length]=b;return a}
function li(a){var b;b=ii(a);b.j=a;b.e=1;return b}
function th(a){if(fh(a)){return ''+a}return je(a)}
function cp(a){if(!a){throw Xg(new cr)}return a.c}
function zt(){if(ut==256){tt=vt;vt={};ut=0}++ut}
function qt(b,c,d){try{b[c]=d}catch(a){}}
function vv(a,b,c,d){Rt(a.c,d);Qt(a.c,c);Vt(a.c,b)}
function Cd(a,b,c,d,e,f){return Dd(a,b,c,d,e,0,f)}
function Yd(a,b){return Md(a.l&b.l,a.m&b.m,a.h&b.h)}
function ce(a,b){return Md(a.l|b.l,a.m|b.m,a.h|b.h)}
function ke(a,b){return Md(a.l^b.l,a.m^b.m,a.h^b.h)}
function jn(a,b){return Be(b)?kn(a,b):Um(Aq(a.a,b))}
function Us(a,b){var c;c=a.slice(0,b);return Id(c,a)}
function Ur(a,b){var c;c=new ss;Wr(a,b,c);return c.d}
function xc(a,b,c){var d;d=wc(a,b);yc(a,b,c);return d}
function bd(a,b,c){var d;d=_c(a,b);cd(a,b,c);return d}
function mn(a,b,c){return Be(b)?nn(a,b,c):Bq(a.a,b,c)}
function Tk(a,b,c){Dk();this.e=a;this.d=b;this.a=c}
function yb(a){mb(this);this.f=a;nb(this);this.t()}
function hj(a,b,c){this.a=pw;this.d=a;this.b=b;this.c=c}
function _r(a){this.c=null;this.b=(oq(),!a?nq:a)}
function ht(a){if(a==null){throw Xg(new cj)}return a}
function td(a){if(a==null){throw Xg(new cj)}this.a=a}
function sq(a,b){if(b[Zw]!=a[Zw]){throw Xg(new uq)}}
function tu(a){this.a=a;if(a.d>a.c)throw Xg(new gv(ex))}
function Ic(){Ic=Dh;Gc=new Jc(false);Hc=new Jc(true)}
function Hj(a,b){a.a+=String.fromCharCode(b);return a}
function Aj(a){return String.fromCharCode.apply(null,a)}
function $h(a){return /\d/.test(String.fromCharCode(a))}
function wq(a,b){return Ce(a)===Ce(b)||a!=null&&gb(a,b)}
function dr(a,b){return Ce(a)===Ce(b)||a!=null&&gb(a,b)}
function ln(a,b){return b==null?!!Aq(a.a,null):Pq(a.b,b)}
function Yo(a,b){!!b&&Vr(a,b);return !b?null:new Ro(b)}
function zq(a,b){var c;c=a.a.get(b);return c==null?[]:c}
function rb(a,b){var c;c=fi(a._);return b==null?c:c+': '+b}
function ki(a,b){var c;c=ii(a);vi(a,c);c.e=b?8:0;return c}
function ho(a,b){co.call(this,a);jt(b,a.size());this.a=b}
function _u(a,b,c,d){this.c=a;this.b=b;this.d=c;this.a=d}
function aw(a,b,c,d){this.a=a;this.c=b;this.b=d;this.d=c}
function qb(a,b){a.backingJsObject=b;b!=null&&qt(b,uw,a)}
function kn(a,b){return b==null?Um(Aq(a.a,null)):Qq(a.b,b)}
function Zg(a,b){return _g(Yd(fh(a)?qh(a):a,fh(b)?qh(b):b))}
function lh(a,b){return _g(ce(fh(a)?qh(a):a,fh(b)?qh(b):b))}
function uh(a,b){return _g(ke(fh(a)?qh(a):a,fh(b)?qh(b):b))}
function Mm(a,b){return b===a?'(this Map)':b==null?ww:Gh(b)}
function nj(a,b){return mj(a.toLowerCase(),b.toLowerCase())}
function _h(a){return /[A-Z]/i.test(String.fromCharCode(a))}
function Ib(a){return !!a&&!!a.hashCode?a.hashCode():st(a)}
function De(a){return Math.max(Math.min(a,tw),-2147483648)|0}
function zi(a){return oj(rw,typeof a)||a instanceof Number}
function Sv(){return Pv(Uv(new xq,fv(null),(ev(),ev(),cv)))}
function nn(a,b,c){return b==null?Bq(a.a,null,c):Rq(a.b,b,c)}
function Cs(){ys();return Hd(Ad(wg,1),ow,30,0,[us,vs,ws,xs])}
function Xb(a){Rb();$wnd.setTimeout(function(){throw a},0)}
function Fq(a){this.e=a;this.b=this.e.a.entries();this.a=[]}
function aq(a){ft(a.a<a.c.a.length);a.b=a.a++;return a.c.a[a.b]}
function Cn(a,b){if(we(b,31)){return Km(a.a,b)}return false}
function Gv(a){if(ln(Ev,a)){return kn(Ev,a)}return null}
function _c(a,b){if(b==null){throw Xg(new cj)}return ad(a,b)}
function Yr(a,b){var c;c=1-b;a.a[c]=Zr(a.a[c],c);return Zr(a,b)}
function Lb(a,b){var c=Kb[a.charCodeAt(0)];return c==null?a:c}
function ni(a,b){var c=a.a=a.a||[];return c[b]||(c[b]=a.D(b))}
function Dp(a,b,c){var d;kt(b,c,a.a.length);d=c-b;Ys(a.a,b,d)}
function jo(a,b,c){kt(b,c,a.size());this.c=a;this.a=b;this.b=c-b}
function Fb(a){Db();Bb.call(this,a);this.a='';this.b=a;this.a=''}
function gc(){gc=Dh;var a,b;b=!lc();a=new tc;fc=b?new mc:a}
function Lj(a,b,c){a.a=yj(a.a,0,b)+(''+c)+xj(a.a,b);return a}
function om(a,b,c,d,e,f,g){a+=e+g+(b^c^d);a=a<<f|a>>>-f;return a+b}
function Eh(a){function b(){}
;b.prototype=a||{};return new b}
function rh(a){var b;if(fh(a)){b=a;return b==-0.?0:b}return he(a)}
function Aq(a,b){var c;return yq(b,zq(a,b==null?0:(c=kb(b),c|0)))}
function Ml(a,b){Gl();return b<Fl.length?Ll(a,Fl[b]):Lk(a,Pl(b))}
function Hb(a,b){return !!a&&!!a.equals?a.equals(b):Ce(a)===Ce(b)}
function Vb(a,b,c){var d;d=Tb();try{return Sb(a,b,c)}finally{Wb(d)}}
function Wo(a,b){var c,d;c=b.S();d=a.W(c);return !!d&&dr(d.d,b.T())}
function ao(a){ft(a.a<a.c.size());return a.c.getAtIndex(a.b=a.a++)}
function bo(a){lt(a.b!=-1);a.c.removeAtIndex(a.b);a.a=a.b;a.b=-1}
function Fk(a){while(a.d>0&&a.a[--a.d]==0);a.a[a.d++]==0&&(a.e=0)}
function mv(a){if(a.e.c.d==0)throw Xg(new Ab(wx));return $t(a.e.c)}
function nv(a){if(a.e.c.d==0)throw Xg(new Ab(wx));return _t(a.e.c)}
function tb(b){if(!('stack' in b)){try{throw b}catch(a){}}return b}
function pi(a){if(a.J()){return null}var b=a.j;var c=Ah[b];return c}
function nb(a){if(a.j){a.backingJsObject!==yw&&a.t();a.g=null}return a}
function pn(a){var b;a.a=new Dq(a);a.b=new Tq(a);b=a[Zw]|0;a[Zw]=b+1}
function ys(){ys=Dh;us=new zs('All',0);vs=new Ds;ws=new Fs;xs=new Is}
function Zs(){Zs=Dh;new ct;new _s('ISO-LATIN-1');new _s('ISO-8859-1')}
function Wb(a){a&&bc((_b(),$b));--Ob;if(a){if(Qb!=-1){Yb(Qb);Qb=-1}}}
function Kd(a){var b,c,d;b=a&Hw;c=a>>22&Hw;d=a<0?Iw:0;return Md(b,c,d)}
function Ik(a,b){var c;for(c=a.d-1;c>=0&&a.a[c]===b[c];c--);return c<0}
function Bl(a,b,c,d){var e;e=Ed(He,ow,6,b,15,1);Cl(e,a,b,c,d);return e}
function pm(a,b,c,d,e,f,g){a+=e+g+(c^(b|~d));a=a<<f|a>>>-f;return a+b}
function nm(a,b,c,d,e,f,g){a+=e+g+(c^d&(b^c));a=a<<f|a>>>-f;return a+b}
function mm(a,b,c,d,e,f,g){a+=e+g+(d^b&(c^d));a=a<<f|a>>>-f;return a+b}
function Ep(a,b,c){var d;d=(gt(b,a.a.length),a.a[b]);a.a[b]=c;return d}
function Bp(a,b,c){for(;c>=0;--c){if(dr(b,a.a[c])){return c}}return -1}
function Gr(a,b){!a.a?(a.a=new Oj(a.d)):Kj(a.a,a.b);Ij(a.a,b);return a}
function on(a,b){return Be(b)?b==null?Cq(a.a,null):Sq(a.b,b):Cq(a.a,b)}
function Nk(a,b){if(b==0||a.e==0){return a}return b>0?fl(a,b):il(a,-b)}
function Pk(a,b){if(b==0||a.e==0){return a}return b>0?il(a,b):fl(a,-b)}
function mt(a,b,c){if(a<0||b>c||b<a){throw Xg(new Pj(Fw+a+Gw+b+Ew+c))}}
function vj(a,b,c){c=Cj(c);return a.replace(new $wnd.RegExp(b,'g'),c)}
function Ts(a,b,c,d){Array.prototype.splice.apply(a,[b,c].concat(d))}
function ov(a,b,c,d){this.g=new xq;this.c=a;this.d=b;this.b=c;this.a=d}
function Vq(a){this.d=a;this.b=this.d.a.entries();this.a=this.b.next()}
function Sk(a,b){Dk();this.e=a;this.d=1;this.a=Hd(Ad(He,1),ow,6,15,[b])}
function Hr(a,b){this.b=', ';this.d=a;this.e=b;this.c=this.d+(''+this.e)}
function rs(a,b){Qo.call(this,a,b);this.a=Ed(rg,ow,43,2,0,1);this.b=true}
function Cp(a,b){var c;c=(gt(b,a.a.length),a.a[b]);Ys(a.a,b,1);return c}
function wl(a,b,c,d){var e;e=Ed(He,ow,6,b+1,15,1);xl(e,a,b,c,d);return e}
function Vr(a,b){var c;c=new ss;c.c=true;c.d=b.T();return Wr(a,b.S(),c)}
function yc(d,a,b){if(b){var c=b.A();b=c(b)}else{b=undefined}d.a[a]=b}
function cd(d,a,b){if(b){var c=b.A();d.a[a]=c(b)}else{delete d.a[a]}}
function Ub(b){Rb();return function(){return Vb(b,this,arguments);var a}}
function Jb(){if(Date.now){return Date.now()}return (new Date).getTime()}
function Jp(){tp(this);dt(true,'Initial capacity must not be negative')}
function wk(a){if($g(a,0)==0&&5<ak.length){return ak[5]}return new lk(a,5)}
function kh(a){var b;if(fh(a)){b=0-a;if(!isNaN(b)){return b}}return _g(ae(a))}
function Zq(a){if(a.a.d!=a.c){return Qq(a.a,a.b.value[0])}return a.b.value[1]}
function jt(a,b){if(a<0||a>b){throw Xg(new Ph('Index: '+a+', Size: '+b))}}
function gt(a,b){if(a<0||a>=b){throw Xg(new Ph('Index: '+a+', Size: '+b))}}
function iw(a,b,c){return c==null?gw(a,b,(Pc(),Pc(),Oc)):gw(a,b,new td(c))}
function iq(a,b,c,d){var e;d=(oq(),!d?nq:d);e=a.slice(b,c);jq(e,a,b,c,-b,d)}
function Ed(a,b,c,d,e,f){var g;g=Fd(e,d);e!=10&&Hd(Ad(a,f),b,c,e,g);return g}
function Id(a,b){Bd(b)!=10&&Hd(ib(b),b.ab,b.__elementTypeId$,Bd(b),a);return a}
function Lk(a,b){if(b.e==0){return Ck}if(a.e==0){return Ck}return Gl(),Hl(a,b)}
function zp(a,b,c){for(;c<a.a.length;++c){if(dr(b,a.a[c])){return c}}return -1}
function Lr(a){var b,c;if(!a.c){return null}c=a.c;while(b=c.a[0]){c=b}return c}
function Mr(a){var b,c;if(!a.c){return null}c=a.c;while(b=c.a[1]){c=b}return c}
function Rv(a){var b=new xq;if(a){for(var c in a){b.put(c,String(a[c]))}}return b}
function ew(a){var b;dw.call(this);for(b=0;b<a.length;b++){cw(this,new Uc(a[b]))}}
function hw(a,b){return b==null?gw(a,Mx,(Pc(),Pc(),Oc)):gw(a,Mx,new Uc((ht(b),b)))}
function ze(a){return a!=null&&(typeof a===lw||typeof a==='function')&&!(a.bb===Hh)}
function Bd(a){return a.__elementTypeCategory$==null?10:a.__elementTypeCategory$}
function uj(a){return (new $wnd.RegExp('^(^[A-Z][a-z]?\\{.*\\}$)$')).test(a)}
function _l(){Zl();return Hd(Ad(Cf,1),ow,26,0,[Yl,Sl,Rl,Tl,Wl,Ul,Vl,Xl])}
function pe(){pe=Dh;le=Md(Hw,Hw,524287);me=Md(0,0,Jw);ne=Kd(1);Kd(2);oe=Kd(0)}
function lk(a,b){this.e=b;this.a=ok(a);this.a<54?(this.f=rh(a)):(this.c=dl(a))}
function ku(a,b,c,d,e){this.b=new xq;this.c=a;this.d=b;this.g=c;this.e=d;this.a=e}
function Gt(a,b,c,d){if(c>d)throw Xg(new gv(ex));this.i=a;this.b=b;this.d=c;this.c=d}
function Pv(a){if(yx in a.a.a){throw Xg(new Fb(_c(a.a,yx).B().a))}else{return a.a.a}}
function he(a){if(Zd(a,(pe(),oe))<0){return -Vd(ae(a))}return a.l+a.m*Kw+a.h*Lw}
function hk(a){if(a.a<54){return a.f<0?-1:a.f>0?1:0}return (!a.c&&(a.c=cl(a.f)),a.c).e}
function Wg(a){var b;if(we(a,9)){return a}b=a&&a[uw];if(!b){b=new Fb(a);hc(b)}return b}
function vi(a,b){var c;if(!a){return}b.j=a;var d=pi(b);if(!d){Ah[a]=[b];return}d._=b}
function Vi(a){var b,c;if(a==0){return 32}else{c=0;for(b=1;(b&a)==0;b<<=1){++c}return c}}
function bc(a){var b,c;if(a.b){c=null;do{b=a.b;a.b=null;c=ec(b,c)}while(a.b);a.b=c}}
function ac(a){var b,c;if(a.a){c=null;do{b=a.a;a.a=null;c=ec(b,c)}while(a.a);a.a=c}}
function fw(a){var b;dw.call(this);for(b=0;b<a.length;b++){cw(this,(new ew(a[b])).a)}}
function wh(){xh();var a=vh;for(var b=0;b<arguments.length;b++){a.push(arguments[b])}}
function wc(d,a){var b=d.a[a];var c=(md(),ld)[typeof b];return c?c(b):sd(typeof b)}
function $c(e,a){var b=e.a;var c=0;for(var d in b){b.hasOwnProperty(d)&&(a[c++]=d)}return a}
function lq(a){var b,c,d;d=0;for(c=a.K();c.O();){b=c.P();d=d+(b!=null?kb(b):0);d=d|0}return d}
function sm(a,b){var c,d,e;ht(b);c=false;for(e=b.K();e.O();){d=e.P();c=c|a.add(d)}return c}
function Zr(a,b){var c,d;c=1-b;d=a.a[c];a.a[c]=d.a[b];d.a[b]=a;a.b=true;d.b=false;return d}
function ii(a){var b;b=new gi;b.k='Class$'+(a?'S'+a:''+b.g);b.b=b.k;b.i=b.k;return b}
function _g(a){var b;b=a.h;if(b==0){return a.l+a.m*Kw}if(b==Iw){return a.l+a.m*Kw-Lw}return a}
function sv(a,b){if(a.d.f==0){return tv(a,b)}else if(a.d.f==hv){return uv(a,b)}return tv(a,b)}
function hn(a,b){var c,d;for(d=b.K();d.O();){c=d.P();if(wq(a,c.T())){return true}}return false}
function Jk(a){var b;if(a.b==-2){if(a.e==0){b=-1}else{for(b=0;a.a[b]==0;b++);}a.b=b}return a.b}
function mq(a){var b,c,d;d=1;for(c=a.K();c.O();){b=c.P();d=31*d+(b!=null?kb(b):0);d=d|0}return d}
function qh(a){var b,c,d,e;e=a;d=0;if(e<0){e+=Lw;d=Iw}c=De(e/Kw);b=De(e-c*Kw);return Md(b,c,d)}
function jc(a){var b=/function(?:\s+([\w$]+))?\s*\(/;var c=b.exec(a);return c&&c[1]||mw}
function hl(a,b,c){var d,e,f;d=0;for(e=0;e<c;e++){f=b[e];a[e]=f<<1|d;d=f>>>31}d!=0&&(a[c]=d)}
function zh(a,b){typeof window===lw&&typeof window['$gwt']===lw&&(window['$gwt'][a]=b)}
function Xk(a){ht(a);if(a.length==0){throw Xg(new gj('Zero length BigInteger'))}al(this,a)}
function Ct(a){if(a.d==a.c)return a.d;throw Xg(new Ab('Atoms.getCount(): undefined (min!=max)'))}
function dh(a){if(Nw<a&&a<Lw){return a<0?$wnd.Math.ceil(a):$wnd.Math.floor(a)}return _g($d(a))}
function Jn(a){if(a.a.O()){return true}if(a.a!=a.d){return false}a.a=new Fq(a.e.a);return a.a.O()}
function Nv(a){Lv();var b,c;b='61-'+a;if(ln(Kv,b))return kn(Kv,b);c=new Jv(a);nn(Kv,b,c);return c}
function Qv(a,b){var c;c=Rv(b);Rq(c.b,ux,a);return Pv(Vv(c,fv(c.b.a.get(zx)),(ev(),ev(),cv)))}
function Tv(a,b){var c;c=Rv(b);Rq(c.b,hx,''+a);return Pv(Yv(c,fv(c.b.a.get(zx)),(ev(),ev(),cv)))}
function Xd(a,b){var c,d,e;c=a.l+b.l;d=a.m+b.m+(c>>22);e=a.h+b.h+(d>>22);return Md(c&Hw,d&Hw,e&Iw)}
function ge(a,b){var c,d,e;c=a.l-b.l;d=a.m-b.m+(c>>22);e=a.h-b.h+(d>>22);return Md(c&Hw,d&Hw,e&Iw)}
function yq(a,b){var c,d,e;for(d=0,e=b.length;d<e;++d){c=b[d];if(wq(a,c.S())){return c}}return null}
function Sq(a,b){var c;c=a.a.get(b);if(c===undefined){++a.d}else{a.a[cx](b);--a.c;tq(a.b)}return c}
function Tr(a,b,c){var d,e;d=new rs(b,c);e=new ss;a.c=Rr(a,a.c,d,e);e.b||++a.d;a.c.b=false;return e.d}
function ls(a,b){var c;this.c=a;c=new Ip;Pr(a,c,b,a.c,null,false,null,false);this.a=new ho(c,0)}
function Ht(a){this.i=a.i;this.b=a.b;this.d=a.d;this.c=a.c;this.e=a.e;this.f=a.f;this.a=a.a}
function Bb(a){mb(this);nb(this);this.backingJsObject=a;a!=null&&qt(a,uw,this);this.f=a==null?ww:Gh(a)}
function Xh(a){if(oj(typeof a,sw)){return true}return a!=null&&a.$implements__java_lang_CharSequence}
function Cu(b){try{Bi(b);return true}catch(a){a=Wg(a);if(we(a,20)){return false}else throw Xg(a)}}
function Di(a,b){if(a<b){return -1}if(a>b){return 1}if(a==b){return 0}return isNaN(a)?isNaN(b)?0:1:-1}
function Bt(a,b){var c;if(we(b,37)){c=b;if(oj(a.i,c.i)&&a.a==c.a)return true}else{Sj()}return false}
function Rt(a,b){var c,d,e;c=(new ps(a)).b.V();while(_n(c.a)){d=c.b=ao(c.a);e=nt(d.T());e<b&&js(c)}}
function um(a,b){var c,d;ht(b);for(d=b.K();d.O();){c=d.P();if(!a.contains(c)){return false}}return true}
function _v(a,b){var c;c=Di($wnd.Math.abs(a.a),$wnd.Math.abs(b.a));if(c!=0)return c;return mj(a.b,b.b)}
function ae(a){var b,c,d;b=~a.l+1&Hw;c=~a.m+(b==0?1:0)&Hw;d=~a.h+(b==0&&c==0?1:0)&Iw;return Md(b,c,d)}
function Sd(a){var b,c,d;b=~a.l+1&Hw;c=~a.m+(b==0?1:0)&Hw;d=~a.h+(b==0&&c==0?1:0)&Iw;a.l=b;a.m=c;a.h=d}
function fq(a){var b,c,d,e;e=1;for(c=0,d=a.length;c<d;++c){b=a[c];e=31*e+(b!=null?kb(b):0);e=e|0}return e}
function xp(a,b){var c,d;c=b.toArray();d=c.length;if(d==0){return false}Xs(a.a,a.a.length,c);return true}
function Kr(a,b){var c,d,e;e=a.c;while(e){c=a.b.Y(b,e.c);if(c==0){return e}d=c<0?0:1;e=e.a[d]}return null}
function Td(a){var b,c;c=Ui(a.h);if(c==32){b=Ui(a.m);return b==32?Ui(a.l)+32:b+20-10}else{return c-12}}
function Dr(a){var b;b=a.a.a.length;if(b>0){return lr(b-1,a.a.a.length),Cp(a.a,b-1)}else{throw Xg(new vq)}}
function wb(a){var b;if(a!=null){b=a[uw];if(b){return b}}return Ae(a,$wnd.TypeError)?new dj(a):new Bb(a)}
function $g(a,b){var c;if(fh(a)&&fh(b)){c=a-b;if(!isNaN(c)){return c}}return Zd(fh(a)?qh(a):a,fh(b)?qh(b):b)}
function ok(a){var b;$g(a,0)<0&&(a=_g(be(fh(a)?qh(a):a)));return b=sh(nh(a,32)),64-(b!=0?Ui(b):Ui(sh(a))+32)}
function pb(a){var b,c,d,e;for(b=(a.g==null&&(a.g=(gc(),e=fc.v(a),ic(e))),a.g),c=0,d=b.length;c<d;++c);}
function Kn(a){var b;this.e=a;this.d=new Vq(this.e.b);this.a=this.d;this.b=Jn(this);b=a[Zw];this[Zw]=b}
function gi(){this.g=di++;this.k=null;this.i=null;this.f=null;this.d=null;this.b=null;this.j=null;this.a=null}
function zv(a,b,c){this.d=a;pv(this);this.a=c;rv(this,b);if(b.a!=0){Pt(this.c,-b.a*xx);Tt(this.c,1/$i(b.a))}}
function yl(a,b,c){var d;for(d=c-1;d>=0&&a[d]===b[d];d--);return d<0?0:gh(Zg(a[d],Uw),Zg(b[d],Uw))?-1:1}
function Pd(a,b,c,d,e){var f;f=ee(a,b);c&&Sd(f);if(e){a=Rd(a,b);d?(Jd=ae(a)):(Jd=Md(a.l,a.m,a.h))}return f}
function Hd(a,b,c,d,e){e._=a;e.ab=b;e.bb=Hh;e.__elementTypeId$=c;e.__elementTypeCategory$=d;return e}
function vm(a,b){var c,d,e;ht(b);c=false;for(d=a.K();d.O();){e=d.P();if(b.contains(e)){d.Q();c=true}}return c}
function Hk(a,b){var c;if(a===b){return true}if(we(b,5)){c=b;return a.e==c.e&&a.d==c.d&&Ik(a,c.a)}return false}
function cl(a){Dk();if(a<0){if(a!=-1){return new Rk(-1,-a)}return xk}else return a<=10?zk[De(a)]:new Rk(1,a)}
function sd(a){md();throw Xg(new Nc("Unexpected typeof result '"+a+"'; please report this bug to the GWT team"))}
function md(){md=Dh;ld={'boolean':nd,'number':od,'string':qd,'object':pd,'function':pd,'undefined':rd}}
function ib(a){return Be(a)?xf:ye(a)?ff:xe(a)?df:ve(a)?a._:Gd(a)?a._:a._||Array.isArray(a)&&Ad(Je,1)||Je}
function kb(a){return Be(a)?yt(a):ye(a)?De((ht(a),a)):xe(a)?(ht(a),a)?1231:1237:ve(a)?a.p():Gd(a)?st(a):Ib(a)}
function gb(a,b){return Be(a)?oj(a,b):ye(a)?(ht(a),a===b):xe(a)?(ht(a),a===b):ve(a)?a.n(b):Gd(a)?a===b:Hb(a,b)}
function Wh(a,b){Th();return Be(a)?mj(a,b):ye(a)?Di((ht(a),a),(ht(b),b)):xe(a)?Vh((ht(a),a),(ht(b),b)):a.C(b)}
function jh(a,b){var c;if(fh(a)&&fh(b)){c=a*b;if(Nw<c&&c<Lw){return c}}return _g(_d(fh(a)?qh(a):a,fh(b)?qh(b):b))}
function Yg(a,b){var c;if(fh(a)&&fh(b)){c=a+b;if(Nw<c&&c<Lw){return c}}return _g(Xd(fh(a)?qh(a):a,fh(b)?qh(b):b))}
function ph(a,b){var c;if(fh(a)&&fh(b)){c=a-b;if(Nw<c&&c<Lw){return c}}return _g(ge(fh(a)?qh(a):a,fh(b)?qh(b):b))}
function Zh(a){if(a>=48&&a<58){return a-48}if(a>=97&&a<97){return a-97+10}if(a>=65&&a<65){return a-65+10}return -1}
function Kk(a){var b;if(a.c!=0){return a.c}for(b=0;b<a.a.length;b++){a.c=a.c*33+(a.a[b]&-1)}a.c=a.c*a.e;return a.c}
function kv(a){var b,c,d;b=fx;for(d=new bq(a.d.d);d.a<d.c.a.length;){c=aq(d);c.f>b&&(b=c.f)}vv(a.e,b,a.b,a.a)}
function Xv(a){var b,c,d;d=dl(1);for(c=new bq(a.a);c.a<c.c.a.length;){b=aq(c);d=Lk(d,dl(b.a.c-b.a.d+1))}return d}
function wp(a,b,c){var d,e;jt(b,a.a.length);d=c.toArray();e=d.length;if(e==0){return false}Xs(a.a,b,d);return true}
function iv(a,b,c){var d,e,f;f=Mv(nv(a),b,c);e=new au;for(d=0;d<f.length;d++){Tr(e,f[d][0],f[d][1])}a.e.c=e;a.e.c.a=Rw}
function gq(a,b,c,d){var e,f,g;for(e=b+1;e<c;++e){for(f=e;f>b&&d.Y(a[f-1],a[f])>0;--f){g=a[f];a[f]=a[f-1];a[f-1]=g}}}
function hq(a,b,c,d,e,f,g,h){var i;i=c;while(f<g){i>=d||b<c&&h.Y(a[b],a[i])<=0?(e[f++]=a[b++]):(e[f++]=a[i++])}}
function lm(a,b){var c,d;for(c=0,d=0;d<16;d++){b[d]=a[c++]&255|(a[c++]&255)<<8|(a[c++]&255)<<16|(a[c++]&255)<<24}}
function Ut(a,b){var c,d,e,f;c=(new ps(a)).b.V();while(_n(c.a)){d=c.b=ao(c.a);e=d.S();f=d.T();Tr(a,e,(ht(f),f)*b)}}
function Ok(a){var b,c,d,e;return a.e==0?a:(b=a.d,c=b+1,d=Ed(He,ow,6,c,15,1),hl(d,a.a,b),e=new Tk(a.e,c,d),Fk(e),e)}
function Il(a,b,c,d,e){if(b==0||d==0){return}b==1?(e[d]=Kl(e,c,d,a[0])):d==1?(e[b]=Kl(e,a,b,c[0])):Jl(a,c,e,b,d)}
function zl(a,b,c){var d,e;d=Zg(c,Uw);for(e=0;$g(d,0)!=0&&e<b;e++){d=Yg(d,Zg(a[e],Uw));a[e]=sh(d);d=nh(d,32)}return sh(d)}
function Dj(a,b,c){var d,e,f,g;f=b+c;mt(b,f,a.length);g='';for(e=b;e<f;){d=e+Dw<f?e+Dw:f;g+=Aj(a.slice(e,d));e=d}return g}
function Rq(a,b,c){var d;d=a.a.get(b);a.a.set(b,c===undefined?null:c);if(d===undefined){++a.c;tq(a.b)}else{++a.d}return d}
function Xt(a){var b,c;b=new jk(a);c=ik(fk(b,(Zl(),Zl(),Wl)));if(c.indexOf('.')!=-1){return vj(c,'\\.?0+$','')}return c}
function Xi(a){var b,c;if(a>-129&&a<128){b=a+128;c=(Zi(),Yi)[b];!c&&(c=Yi[b]=new Pi(a));return c}return new Pi(a)}
function $k(a){var b,c,d;if(a<Bk.length){return Bk[a]}c=a>>5;b=a&31;d=Ed(He,ow,6,c+1,15,1);d[c]=1<<b;return new Tk(1,c+1,d)}
function Gh(a){if(Array.isArray(a)&&a.bb===Hh){return fi(ib(a))+'@'+(kb(a)>>>0).toString(16)}return a.toString()}
function Bh(){Ah={};!Array.isArray&&(Array.isArray=function(a){return Object.prototype.toString.call(a)==='[object Array]'})}
function bi(a){return String.fromCharCode(a).toLowerCase().charCodeAt(0)==a&&/[A-Z]/i.test(String.fromCharCode(a))}
function ci(a){return String.fromCharCode(a).toLocaleUpperCase().charCodeAt(0)==a&&/[A-Z]/i.test(String.fromCharCode(a))}
function jk(a){ck();if(!isNaN(a)&&!isFinite(a)||isNaN(a)){throw Xg(new gj('Infinite or NaN'))}ek(this,a.toPrecision(20))}
function ih(a,b){var c;if(fh(a)&&fh(b)){c=a%b;if(Nw<c&&c<Lw){return c}}return _g((Nd(fh(a)?qh(a):a,fh(b)?qh(b):b,true),Jd))}
function gk(a,b){var c;a.c=b;a.a=el(b);a.a<54&&(a.f=(c=b.d>1?lh(mh(b.a[1],32),Zg(b.a[0],Uw)):Zg(b.a[0],Uw),rh(jh(b.e,c))))}
function fl(a,b){var c,d,e,f;c=b>>5;b&=31;e=a.d+c+(b==0?0:1);d=Ed(He,ow,6,e,15,1);gl(d,a.a,c,b);f=new Tk(a.e,e,d);Fk(f);return f}
function Nr(a,b){var c,d,e;d=null;e=a.c;while(e){c=a.b.Y(b,e.c);if(c==0){return e}if(c>=0){e=e.a[1]}else{d=e;e=e.a[0]}}return d}
function Or(a,b){var c,d,e;d=null;e=a.c;while(e){c=a.b.Y(b,e.c);if(c==0){return e}if(c<=0){e=e.a[0]}else{d=e;e=e.a[1]}}return d}
function tm(a,b,c){var d,e;for(e=a.K();e.O();){d=e.P();if(Ce(b)===Ce(d)||b!=null&&gb(b,d)){c&&e.Q();return true}}return false}
function Yh(a,b,c){var d,e;d=lj(a,b++);if(d>=55296&&d<=56319&&b<c&&ai(e=a.charCodeAt(b))){return Bw+((d&1023)<<10)+(e&1023)}return d}
function el(a){var b,c,d;if(a.e==0){return 0}b=a.d<<5;c=a.a[a.d-1];if(a.e<0){d=Jk(a);if(d==a.d-1){--c;c=c|0}}b-=Ui(c);return b}
function yt(a){wt();var b,c,d;c=':'+a;d=vt[c];if(!(d===undefined)){return d}d=tt[c];b=d===undefined?xt(a):d;zt();vt[c]=b;return b}
function Od(a,b){if(a.h==Jw&&a.m==0&&a.l==0){b&&(Jd=Md(0,0,0));return Ld((pe(),ne))}b&&(Jd=Md(a.l,a.m,a.h));return Md(0,0,0)}
function hu(a){if(a.d==0)throw Xg(new Ab('Exact mass of '+a.g+' is unknown. Run calculateExactMass() first.'));return a.d}
function kt(a,b,c){if(a<0||b>c){throw Xg(new Ph(Fw+a+Gw+b+', size: '+c))}if(a>b){throw Xg(new Mi(Fw+a+' > toIndex: '+b))}}
function et(a,b){if(0>a){throw Xg(new Mi('fromIndex: 0 > toIndex: '+a))}if(a>b){throw Xg(new Rh('fromIndex: 0, toIndex: '+a+Ew+b))}}
function Jt(a,b,c){if(b>c)throw Xg(new gv(ex));this.d=b;this.c=c;this.e=Ou(a.a);this.f=Pu(a.a);this.a=0;this.i=a.b;this.b=Nu(a.a)}
function Vk(a){Dk();if(a.length==0){this.e=0;this.d=1;this.a=Hd(Ad(He,1),ow,6,15,[0])}else{this.e=1;this.d=a.length;this.a=a;Fk(this)}}
function dl(a){Dk();if($g(a,0)<0){if($g(a,-1)!=0){return new Uk(-1,kh(a))}return xk}else return $g(a,10)<=0?zk[sh(a)]:new Uk(1,a)}
function Ek(a,b){if(a.e>b.e){return 1}if(a.e<b.e){return -1}if(a.d>b.d){return a.e}if(a.d<b.d){return -b.e}return a.e*yl(a.a,b.a,a.d)}
function pj(a){ht(Aw);if(a==null){return false}if(oj(Aw,a)){return true}return Aw.length==a.length&&oj(Aw.toLowerCase(),a.toLowerCase())}
function xi(a){var b;b=typeof a;if(oj(b,qw)||oj(b,rw)||oj(b,sw)){return true}return a!=null&&a.$implements__java_lang_Comparable}
function lc(){if(Error.stackTraceLimit>0){$wnd.Error.stackTraceLimit=Error.stackTraceLimit=64;return true}return 'stack' in new Error}
function ui(a,b){var c=0;while(!b[c]||b[c]==''){c++}var d=b[c++];for(;c<b.length;c++){if(!b[c]||b[c]==''){continue}d+=a+b[c]}return d}
function Hp(a,b){var c,d,e;e=a.a.length;b.length<e&&(b=(d=new Array(e),Id(d,b)));for(c=0;c<e;++c){b[c]=a.a[c]}b.length>e&&(b[e]=null);return b}
function ad(f,a){var b=f.a;var c;a=String(a);b.hasOwnProperty(a)&&(c=b[a]);var d=(md(),ld)[typeof c];var e=d?d(c):sd(typeof c);return e}
function St(a){var b,c,d,e,f,g;b=fx;f=0;c=(new ps(a)).b.V();while(_n(c.a)){d=c.b=ao(c.a);e=d.S();g=nt(d.T());if(g>b){b=g;f=(ht(e),e)}}return f}
function Pt(a,b){var c,d,e,f,g;d=new au;c=(new ps(a)).b.V();while(_n(c.a)){e=c.b=ao(c.a);f=e.S();g=e.T();Tr(d,(ht(f),f)+b,g);js(c)}Ot(a,d)}
function Tt(a,b){var c,d,e,f,g;d=new au;c=(new ps(a)).b.V();while(_n(c.a)){e=c.b=ao(c.a);f=e.S();g=e.T();Tr(d,(ht(f),f)*b,g);js(c)}Ot(a,d)}
function Mu(a,b){var c,d,e,f;for(d=(f=(new jp(a.g)).a.N().b.V(),new pp(f));_n(d.a.a);){c=(e=is(d.a),e.S());if(oj(c.i,b))return c}return null}
function Kl(a,b,c,d){Gl();var e,f;e=0;for(f=0;f<c;f++){e=Yg(jh(Zg(b[f],Uw),Zg(d,Uw)),Zg(sh(e),Uw));a[f]=sh(e);e=oh(e,32)}return sh(e)}
function Tb(){var a;if(Ob!=0){a=Jb();if(a-Pb>2000){Pb=a;Qb=$wnd.setTimeout(Zb,10)}}if(Ob++==0){ac((_b(),$b));return true}return false}
function bj(a){var b;if($wnd.Math.abs(a)<4503599627370496){b=a%2;b==-1.5||b==0.5?(a=$wnd.Math.floor(a)):(a=$wnd.Math.round(a))}return a}
function su(a,b,c,d,e,f){a.d=_i(De($wnd.Math.floor((c-f-b-e)/a.a.e)),a.a.d);a.c=aj(De($wnd.Math.ceil((c+f-b-d)/a.a.e)),a.a.c);a.b=a.d-1}
function Rk(a,b){this.e=a;if(b<Vw){this.d=1;this.a=Hd(Ad(He,1),ow,6,15,[b|0])}else{this.d=2;this.a=Hd(Ad(He,1),ow,6,15,[b%Vw|0,b/Vw|0])}}
function te(a,b){if(Be(a)){return !!se[b]}else if(a.ab){return !!a.ab[b]}else if(ye(a)){return !!re[b]}else if(xe(a)){return !!qe[b]}return false}
function Hu(a,b,c,d){this.a=b;this.b=c;this.d=new Jp;Du(this,a,d);if(this.d.a.length==0)throw Xg(new gv('Cannot parse: empty formula: ->'+a+'<-'))}
function Pr(a,b,c,d,e,f,g,h){var i,j;if(!d){return}i=d.a[0];!!i&&Pr(a,b,c,i,e,f,g,h);Qr(a,c,d.c,e,f,g,h)&&b.add(d);j=d.a[1];!!j&&Pr(a,b,c,j,e,f,g,h)}
function wm(a,b){var c,d,e,f;f=a.size();b.length<f&&(b=(e=new Array(f),Id(e,b)));d=a.K();for(c=0;c<f;++c){b[c]=d.P()}b.length>f&&(b[f]=null);return b}
function zj(a){var b,c,d;c=a.length;d=0;while(d<c&&a.charCodeAt(d)<=32){++d}b=c;while(b>d&&a.charCodeAt(b-1)<=32){--b}return d>0||b<c?a.substr(d,b-d):a}
function ob(a,b,c){var d,e,f,g,h;pb(a);for(e=(a.i==null&&(a.i=Ed(yf,ow,9,0,0,1)),a.i),f=0,g=e.length;f<g;++f){d=e[f];ob(d,b,'\t'+c)}h=a.e;!!h&&ob(h,b,c)}
function Cj(a){var b;b=0;while(0<=(b=a.indexOf('\\',b))){a.charCodeAt(b+1)==36?(a=a.substr(0,b)+'$'+xj(a,++b)):(a=a.substr(0,b)+(''+xj(a,++b)))}return a}
function Rd(a,b){var c,d,e;if(b<=22){c=a.l&(1<<b)-1;d=e=0}else if(b<=44){c=a.l;d=a.m&(1<<b-22)-1;e=0}else{c=a.l;d=a.m;e=a.h&(1<<b-44)-1}return Md(c,d,e)}
function Qr(a,b,c,d,e,f,g){var h,i;if(b.Z()&&(i=a.b.Y(c,d),i<0||!e&&i==0)){return false}if(b.$()&&(h=a.b.Y(c,f),h>0||!g&&h==0)){return false}return true}
function Vs(a,b,c,d,e,f){var g,h,i;if(Ce(a)===Ce(c)){a=a.slice(b,b+e);b=0}for(h=b,i=b+e;h<i;){g=h+Dw<i?h+Dw:i;e=g-h;Ts(c,d,f?e:0,a.slice(h,g));h=g;d+=e}}
function wu(a){var b,c,d,e,f;c='';b=new km;d=em(b,bt((f=a,Zs(),f)));for(e=0;e<5;e++){e==0?(c+=ue($i(d[0]%26)+65&Cw)):(c+=ue($i(d[e]%26)+97&Cw))}return c}
function Ot(a,b){var c,d,e,f,g;e=(new ps(b)).b.V();while(_n(e.a)){c=e.b=ao(e.a);f=c.S();g=c.T();d=Um(Kr(a,f));d!=null&&(g=(ht(d),d)+(ht(g),g));Tr(a,f,g)}}
function Lu(a){var b,c,d,e,f,g;f=Nu(a);for(c=(e=(new jp(a.g)).a.N().b.V(),new pp(e));_n(c.a.a);){b=(d=is(c.a),d.S());b.g=(g=bj(b.b*Ct(b)*100/f*Rw),g/Rw)}}
function Pu(a){var b,c,d,e,f;if(a.e)throw Xg(new gv(rx));f=0;for(c=(e=(new jp(a.g)).a.N().b.V(),new pp(e));_n(c.a.a);){b=(d=is(c.a),d.S());f+=b.f*Ct(b)}return f}
function Au(a){var b,c,d;if(a.c)throw Xg(new gv(ox));if(a.e)throw Xg(new gv(px));d=0;for(c=new bq(a.d);c.a<c.c.a.length;){b=aq(c);d=De(d+Pu(b)*b.f)}return d}
function Fd(a,b){var c=new Array(b);var d;switch(a){case 14:case 15:d=0;break;case 16:d=false;break;default:return c;}for(var e=0;e<b;++e){c[e]=d}return c}
function Wd(a,b){var c,d,e;e=a.h-b.h;if(e<0){return false}c=a.l-b.l;d=a.m-b.m+(c>>22);e+=d>>22;if(e<0){return false}a.l=c&Hw;a.m=d&Hw;a.h=e&Iw;return true}
function ah(a,b){var c;if(fh(a)&&fh(b)){c=a/b;if(Nw<c&&c<Lw){return c<0?$wnd.Math.ceil(c):$wnd.Math.floor(c)}}return _g(Nd(fh(a)?qh(a):a,fh(b)?qh(b):b,false))}
function Lm(a,b,c){var d,e,f;for(e=a.N().K();e.O();){d=e.P();f=d.S();if(Ce(b)===Ce(f)||b!=null&&gb(b,f)){if(c){d=new Qo(d.S(),d.T());e.Q()}return d}}return null}
function Km(a,b){var c,d,e;c=b.S();e=b.T();d=a.get(c);if(!(Ce(e)===Ce(d)||e!=null&&gb(e,d))){return false}if(d==null&&!a.containsKey(c)){return false}return true}
function Uk(a,b){this.e=a;if(bh(Zg(b,-4294967296),0)){this.d=1;this.a=Hd(Ad(He,1),ow,6,15,[sh(b)])}else{this.d=2;this.a=Hd(Ad(He,1),ow,6,15,[sh(b),sh(nh(b,32))])}}
function Zd(a,b){var c,d,e,f,g,h,i,j;i=a.h>>19;j=b.h>>19;if(i!=j){return j-i}e=a.h;h=b.h;if(e!=h){return e-h}d=a.m;g=b.m;if(d!=g){return d-g}c=a.l;f=b.l;return c-f}
function nl(a){var b,c,d;if($g(a,0)>=0){c=ah(a,Mw);d=ih(a,Mw)}else{b=oh(a,1);c=ah(b,500000000);d=ih(b,500000000);d=Yg(mh(d,1),Zg(a,1))}return lh(mh(d,32),Zg(c,Uw))}
function em(a,b){var c,d;im(a,b,0,b.length);return c=rm(mh(a.b,3)),d=Ed(Ee,ow,6,16,15,1),a.c>8?im(a,fm,0,a.c-8):im(a,fm,0,64+(a.c-8)),im(a,c,0,8),qm(a.d,d),hm(a),d}
function qm(a,b){var c,d;for(c=0,d=0;c<4;c++){b[d++]=(a[c]&255)<<24>>24;b[d++]=(a[c]>>>8&255)<<24>>24;b[d++]=(a[c]>>>16&255)<<24>>24;b[d++]=(a[c]>>>24&255)<<24>>24}}
function fu(a){var b,c,d,e,f;if(qn(a.b)==0){return}e=0;for(d=(f=(new zo(a.b)).a.N().K(),new Eo(f));d.a.O();){c=(b=d.a.P(),b.T());e+=c.b*c.d/100}if(e==0)return;a.c=e}
function Ru(a){var b,c,d,e,f;if(a.g.d==0)return '';f=new Gj('');for(c=(e=(new jp(a.g)).a.N().b.V(),new pp(e));_n(c.a.a);){b=(d=is(c.a),d.S());Ej(f,Et(b))}return f.a}
function xu(a){var b,c,d,e;if(a.c)throw Xg(new gv(mx));if(a.e)throw Xg(new gv(nx));b=0;for(d=new bq(a.d);d.a<d.c.a.length;){c=aq(d);b+=c.a*c.f}return e=bj(b*Sw),e/Sw}
function zu(a){var b,c,d,e;if(a.c)throw Xg(new gv(ox));if(a.e)throw Xg(new gv(px));b=0;for(d=new bq(a.d);d.a<d.c.a.length;){c=aq(d);b+=Ou(c)*c.f}return e=bj(b*Sw),e/Sw}
function yh(b,c,d,e){xh();var f=vh;$moduleName=c;$moduleBase=d;Vg=e;function g(){for(var a=0;a<f.length;a++){f[a]()}}
if(b){try{kw(g)()}catch(a){b(c,a)}}else{kw(g)()}}
function Cl(a,b,c,d,e){var f,g;f=0;for(g=0;g<e;g++){f=Yg(f,ph(Zg(b[g],Uw),Zg(d[g],Uw)));a[g]=sh(f);f=nh(f,32)}for(;g<c;g++){f=Yg(f,Zg(b[g],Uw));a[g]=sh(f);f=nh(f,32)}}
function ic(a){var b,c,d,e;b='hc';c='vb';e=aj(a.length,5);for(d=e-1;d>=0;d--){if(oj(a[d].d,b)||oj(a[d].d,c)){a.length>=d+1&&(a.splice(0,d+1),undefined);break}}return a}
function Ai(a){yi==null&&(yi=/^\s*[+-]?(NaN|Infinity|((\d+\.?\d*)|(\.\d+))([eE][+-]?\d+)?[dDfF]?)\s*$/);if(!yi.test(a)){throw Xg(new gj(vw+a+'"'))}return parseFloat(a)}
function Tj(a,b,c,d,e){Sj();var f,g;it(a,'src');it(c,'dest');ib(a);ib(c);g=a.length;f=c.length;if(b<0||d<0||e<0||b+e>g||d+e>f){throw Xg(new Oh)}e>0&&Vs(a,b,c,d,e,true)}
function Ol(a,b){Gl();var c,d;d=(Dk(),yk);c=a;for(;b>1;b>>=1){(b&1)!=0&&(d=Lk(d,c));c.d==1?(c=Lk(c,c)):(c=new Vk(Ql(c.a,c.d,Ed(He,ow,6,c.d<<1,15,1))))}d=Lk(d,c);return d}
function Dd(a,b,c,d,e,f,g){var h,i,j,k,l;k=e[f];j=f==g-1;h=j?d:0;l=Fd(h,k);d!=10&&Hd(Ad(a,g-f),b[f],c[f],h,l);if(!j){++f;for(i=0;i<k;++i){l[i]=Dd(a,b,c,d,e,f,g)}}return l}
function hm(a){a.a=Ed(Ee,ow,6,64,15,1);a.d=Ed(He,ow,6,4,15,1);a.e=Ed(He,ow,6,16,15,1);a.d[0]=1732584193;a.d[1]=-271733879;a.d[2]=-1732584194;a.d[3]=271733878;a.b=0;a.c=64}
function xm(a){var b,c,d;d=new Hr('[',']');for(c=a.K();c.O();){b=c.P();Gr(d,b===a?'(this Collection)':b==null?ww:Gh(b))}return !d.a?d.c:d.e.length==0?d.a.a:d.a.a+(''+d.e)}
function Et(a){var b;a.a!=0?(b='<sup>'+a.a+'<\/sup>'+a.i):(b=a.i);if(a.c==1&&a.d==1)return b;if(a.c==a.d)return b+'<sub>'+a.c+'<\/sub>';return b+'<sub>'+a.d+'-'+a.c+'<\/sub>'}
function Bu(a,b){var c,d,e,f;if(a.c)throw Xg(new gv(mx));if(a.e)throw Xg(new gv(nx));f=0;for(d=new bq(a.d);d.a<d.c.a.length;){c=aq(d);f+=nt(Iv(c,b))*c.f}return e=bj(f*Sw),e/Sw}
function Ou(a){var b,c,d,e,f,g;if(a.e)throw Xg(new gv(rx));f=0;for(c=(e=(new jp(a.g)).a.N().b.V(),new pp(e));_n(c.a.a);){b=(d=is(c.a),d.S());f+=b.e*Ct(b)}return g=bj(f*Sw),g/Sw}
function gm(){gm=Dh;fm=Hd(Ad(Ee,1),ow,6,15,[-128,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0])}
function Hv(a,b){Fv();var c,d,e,f;f=2;for(d=new bq(a.a);d.a<d.c.a.length;){c=aq(d);e=Gv(c.a.i);if(!e){if(b==null){return null}else{f+=(ht(b),b)*c.b}}else{f+=e.a*c.b}}return f/2}
function Wv(a,b,c){var d,e;for(d=0;d<a.a.a.length;d++){for(e=d+1;e<a.a.a.length;e++){b[d]=b[d]+ru((lr(e,a.a.a.length),yp(a.a,e)));c[d]=c[d]+qu((lr(e,a.a.a.length),yp(a.a,e)))}}}
function Mq(){function b(){try{return (new Map).entries().next().done}catch(a){return false}}
if(typeof Map==='function'&&Map.prototype.entries&&b()){return Map}else{return Nq()}}
function Bj(a){var b,c;if(a>=Bw){b=55296+(a-Bw>>10&1023)&Cw;c=56320+(a-Bw&1023)&Cw;return String.fromCharCode(b)+(''+String.fromCharCode(c))}else{return String.fromCharCode(a&Cw)}}
function gl(a,b,c,d){var e,f,g;if(d==0){Tj(b,0,a,c,a.length-c)}else{g=32-d;a[a.length-1]=0;for(f=a.length-1;f>c;f--){a[f]|=b[f-c-1]>>>g;a[f-1]=b[f-c-1]<<d}}for(e=0;e<c;e++){a[e]=0}}
function im(a,b,c,d){while(true){if(d>=a.c){Tj(b,c,a.a,sh(Zg(a.b,63)),a.c);jm(a,a.a);a.b=Yg(a.b,a.c);c+=a.c;d-=a.c;a.c=64}else{Tj(b,c,a.a,sh(Zg(a.b,63)),d);a.b=Yg(a.b,d);a.c-=d;break}}}
function Xr(a,b,c,d){var e,f;f=b;e=f.c==null||a.b.Y(c.c,f.c)>0?1:0;while(f.a[e]!=c){f=f.a[e];e=a.b.Y(c.c,f.c)>0?1:0}f.a[e]=d;d.b=c.b;d.a[0]=c.a[0];d.a[1]=c.a[1];c.a[0]=null;c.a[1]=null}
function Av(a,b,c){var d,e;d=b.a!=0?Ct(b):$wnd.Math.pow(qn(kn(a.a.a,b.i).b)-1,Ct(b));e=c.a!=0?Ct(c):$wnd.Math.pow(qn(kn(a.a.a,c.i).b)-1,Ct(c));if(d==e)return Di(b.b,c.b);return -Di(d,e)}
function yv(a,b,c){var d,e,f,g,h;this.d=a;pv(this);this.a=c;e=qn(b.b);wv(this,a.b/(e*4));for(g=(h=(new zo(b.b)).a.N().K(),new Eo(h));g.a.O();){f=(d=g.a.P(),d.T());Tr(this.c,f.b,f.d/100)}}
function Qt(a,b){var c,d,e,f,g,h;e=new au;d=(new ps(a)).b.V();while(_n(d.a)){f=d.b=ao(d.a);g=nt(f.S());h=nt(f.T());js(d);g=bj(g/b)*b;c=Um(e.W(g));c!=null&&(h+=(ht(c),c));Tr(e,g,h)}Ot(a,e)}
function Ft(a,b){var c,d;c=a.i;!!b&&ln(b,a.i)&&uj(kn(b,a.i).e)&&(c=kn(b,a.i).e);d='';a.a!=0?(d+='['+a.a+c+']'):(d+=c);if(a.c==1&&a.d==1)return d;if(a.c==a.d)return d+a.c;return d+a.d+'-'+a.c}
function yu(a){var b,c,d,e;if(a.c)throw Xg(new gv(ox));if(a.e)throw Xg(new gv('The mass is not defined'));d=0;for(c=new bq(a.d);c.a<c.c.a.length;){b=aq(c);d+=Nu(b)*b.f}return e=bj(d*Rw),e/Rw}
function de(a,b){var c,d,e;b&=63;if(b<22){c=a.l<<b;d=a.m<<b|a.l>>22-b;e=a.h<<b|a.m>>22-b}else if(b<44){c=0;d=a.l<<b-22;e=a.m<<b-22|a.l>>44-b}else{c=0;d=0;e=a.l<<b-44}return Md(c&Hw,d&Hw,e&Iw)}
function fe(a,b){var c,d,e,f;b&=63;c=a.h&Iw;if(b<22){f=c>>>b;e=a.m>>b|c<<22-b;d=a.l>>b|a.m<<22-b}else if(b<44){f=0;e=c>>>b-22;d=a.m>>b-22|a.h<<44-b}else{f=0;e=0;d=c>>>b-44}return Md(d&Hw,e&Hw,f&Iw)}
function Zt(a){var b,c,d,e,f,g,h;e=a.d;e>(a.a/2|0)&&(e=a.a/2|0);f='';d=(new ps(a)).b.V();b=0;while(_n(d.a)&&b<e){++b;c=d.b=ao(d.a);g=nt(c.S());h=nt(c.T());h>-1.0E100&&(f+=g+', '+h+gx)}return f}
function $t(a){var b,c,d,e,f,g,h;e=a.d;e>(a.a/2|0)&&(e=a.a/2|0);f=new Fj;d=(new ps(a)).b.V();b=0;while(_n(d.a)&&b<e){++b;c=d.b=ao(d.a);g=nt(c.S());h=nt(c.T());Ej(f,Xt(g)+', '+Xt(h*100)+gx)}return f}
function Wt(a){var b,c,d,e,f,g,h;g=a.a/2|0;if(a.d<g)return;h=new Ms(new cu);sm(h,new ps(a));e=0;for(f=(d=(new jp(h.g)).a.N().b.V(),new pp(d));_n(f.a.a);){c=(b=is(f.a),b.S());e++>g&&Ur(a,c.S())}}
function Ku(a,b){var c;if(b.c<b.d)throw Xg(new gv('Syntax error: maxCount<minCount'));c=Mu(a,b.i);if(c)if(c.a==b.a){c.d+=b.d;c.c+=b.c;return}b.c==0&&b.d==0&&(a.e=true);Tr(a.g,b,(Th(),Sh))==null}
function rk(a,b,c){var d,e,f,g,h;f=(e=a/b,e>0?$wnd.Math.floor(e):$wnd.Math.ceil(e));g=a%b;h=Di(a*b,0);if(g!=0){d=Di($wnd.Math.abs(g)*2,$wnd.Math.abs(b));f+=uk(De(f)&1,h*(5+d),c)}return new kk(f)}
function jl(a,b,c,d,e){var f,g,h;f=true;for(g=0;g<d;g++){f=f&c[g]==0}if(e==0){Tj(c,d,a,0,b)}else{h=32-e;f=f&c[g]<<h==0;for(g=0;g<b-1;g++){a[g]=c[g+d]>>>e|c[g+d+1]<<h}a[g]=c[g+d]>>>e;++g}return f}
function Fh(a,b){var c=$wnd;if(a===''){return c}var d=a.split('.');!(d[0] in c)&&c.execScript&&c.execScript('var '+d[0]);for(var e;d.length&&(e=d.shift());){c=c[e]=c[e]||!d.length&&b||{}}return c}
function Zu(b){var c,d;d=new jw;iw(d,'name',b.c);iw(d,'symbol',b.b);iw(d,ux,Su(b.a));try{gw(d,'mass',new Uc(Nu(b.a)))}catch(a){a=Wg(a);if(we(a,4)){c=a;ob(c,(Sj(),Qj),'')}else throw Xg(a)}return d}
function Eb(a){var b;if(a.c==null){b=Ce(a.b)===Ce(Cb)?null:a.b;a.d=b==null?ww:ze(b)?b==null?null:b.name:Be(b)?'String':fi(ib(b));a.a=a.a+': '+(ze(b)?b==null?null:b.message:b+'');a.c='('+a.d+') '+a.a}}
function Zl(){Zl=Dh;Yl=new $l('UP',0);Sl=new $l('DOWN',1);Rl=new $l('CEILING',2);Tl=new $l('FLOOR',3);Wl=new $l('HALF_UP',4);Ul=new $l('HALF_DOWN',5);Vl=new $l('HALF_EVEN',6);Xl=new $l('UNNECESSARY',7)}
function Vt(a,b){var c,d,e,f,g;c=fx;d=(new ps(a)).b.V();while(_n(d.a)){e=d.b=ao(d.a);e.S();g=nt(e.T());g>c&&(c=g)}d=(new ps(a)).b.V();while(_n(d.a)){e=d.b=ao(d.a);f=e.S();g=e.T();Tr(a,f,(ht(g),g)/c*b)}}
function Fu(a){var b,c,d;c=new bq(a.d);d=new Gj('');c.a<c.c.a.length&&(d=new Gj(Gh(aq(c))));while(c.a<c.c.a.length){b=aq(c);b.f==1?Ej(d,'.'+Su(b)):b.f==0?Ej(d,'.n'+Su(b)):Ej(d,'.'+b.f+Su(b))}return d.a}
function Bq(a,b,c){var d,e,f,g,h;h=b==null?0:(g=kb(b),g|0);e=(d=a.a.get(h),d==null?[]:d);if(e.length==0){a.a.set(h,e)}else{f=yq(b,e);if(f){return f.U(c)}}e[e.length]=new Qo(b,c);++a.c;tq(a.b);return null}
function jq(a,b,c,d,e,f){var g,h,i,j;g=d-c;if(g<7){gq(b,c,d,f);return}i=c+e;h=d+e;j=i+(h-i>>1);jq(b,a,i,j,-e,f);jq(b,a,j,h,-e,f);if(f.Y(a[j-1],a[j])<=0){while(c<d){b[c++]=a[i++]}return}hq(a,i,j,h,b,c,d,f)}
function qv(a,b){var c;if(b<=0)throw Xg(new Ab('Error: power='+b));if(b==1)return a;if(b==2){a.c=sv(a,a);return a}--b;c=new xv(a.d,a.c);while(b!=0){(b&1)!=0&&(a.c=sv(a,c));b>>=1;b!=0&&(c.c=sv(c,c))}return a}
function xt(a){var b,c,d,e;b=0;d=a.length;e=d-4;c=0;while(c<e){b=a.charCodeAt(c+3)+31*(a.charCodeAt(c+2)+31*(a.charCodeAt(c+1)+31*(a.charCodeAt(c)+31*b)));b=b|0;c+=4}while(c<d){b=b*31+lj(a,c++)}b=b|0;return b}
function ec(b,c){var d,e,f,g;for(e=0,f=b.length;e<f;e++){g=b[e];try{g[1]?g[0].cb()&&(c=dc(c,g)):g[0].cb()}catch(a){a=Wg(a);if(we(a,9)){d=a;Rb();Xb(we(d,52)?Ce(d.b)===Ce(Cb)?null:d.b:d)}else throw Xg(a)}}return c}
function Qu(a){var b,c,d,e,f;if(a.e)throw Xg(new gv('Cannot get the number of atoms: this is a range formula'));f=0;for(c=(e=(new jp(a.g)).a.N().b.V(),new pp(e));_n(c.a.a);){b=(d=is(c.a),d.S());f+=Ct(b)}return f}
function Nu(a){var b,c,d,e,f,g;if(a.e)throw Xg(new gv('Cannot calculate mass of a range formula'));f=0;for(c=(e=(new jp(a.g)).a.N().b.V(),new pp(e));_n(c.a.a);){b=(d=is(c.a),d.S());f+=b.b*Ct(b)}return g=bj(f*Rw),g/Rw}
function pd(a){if(!a){return Pc(),Oc}var b=a.valueOf?a.valueOf():a;if(b!==a){var c=ld[typeof b];return c?c(b):sd(typeof b)}else if(a instanceof Array||a instanceof $wnd.Array){return new Ac(a)}else{return new ed(a)}}
function Mk(a,b){var c;if(b<0){throw Xg(new Nh('Negative exponent'))}if(b==0){return yk}else if(b==1||Hk(a,yk)||Hk(a,Ck)){return a}if(!Qk(a,0)){c=1;while(!Qk(a,c)){++c}return Lk($k(c*b),Mk(Pk(a,c),b))}return Ol(a,b)}
function nk(a){var b,c;if(a>-140737488355328&&a<140737488355328){if(a==0){return 0}b=a<0;b&&(a=-a);c=De($wnd.Math.floor($wnd.Math.log(a)/0.6931471805599453));(!b||a!=$wnd.Math.pow(2,c))&&++c;return c}return ok(dh(a))}
function Jv(a){var b,c,d;this.b=61;this.a=a;c=a/(2*$wnd.Math.sqrt(2*$wnd.Math.log(2)));this.c=Ed(Ge,Pw,6,61,15,1);for(b=0;b<61;b++){d=b-30;this.c[b]=1/(c*$wnd.Math.sqrt(6.283185307179586))*$wnd.Math.exp(-d*d/(2*c*c))}}
function Jl(a,b,c,d,e){var f,g,h,i;if(Ce(a)===Ce(b)&&d==e){Ql(a,d,c);return}for(h=0;h<d;h++){g=0;f=a[h];for(i=0;i<e;i++){g=Yg(Yg(jh(Zg(f,Uw),Zg(b[i],Uw)),Zg(c[h+i],Uw)),Zg(sh(g),Uw));c[h+i]=sh(g);g=oh(g,32)}c[h+e]=sh(g)}}
function Su(a){var b,c,d,e,f;if(a.g.d==0)return '';f=new Gj('');for(c=(e=(new jp(a.g)).a.N().b.V(),new pp(e));_n(c.a.a);){b=(d=is(c.a),d.S());Ej(f,Ft(b,a.c))}a.a!=0&&(a.a>0?Ej(f,'(+'+a.a+')'):Ej(f,'('+a.a+')'));return f.a}
function Iv(a,b){Fv();var c,d,e,f,g,h;h=2;for(d=(g=(new jp(a.g)).a.N().b.V(),new pp(g));_n(d.a.a);){c=(f=is(d.a),f.S());e=Gv(c.i);if(!e){if(b==null){return null}else{h+=(ht(b),b)*Ct(c)}}else{h+=e.a*Ct(c)}}return (h+a.a)/2}
function Ui(a){var b,c,d;if(a<0){return 0}else if(a==0){return 32}else{d=-(a>>16);b=d>>16&16;c=16-b;a=a>>b;d=a-256;b=d>>16&8;c+=b;a<<=b;d=a-4096;b=d>>16&4;c+=b;a<<=b;d=a-16384;b=d>>16&2;c+=b;a<<=b;d=a>>14;b=d&~(d>>1);return c+2-b}}
function Mb(b){var c=(!Kb&&(Kb=Nb()),Kb);var d=b.replace(/[\x00-\x1f\xad\u0600-\u0603\u06dd\u070f\u17b4\u17b5\u200b-\u200f\u2028-\u202e\u2060-\u2064\u206a-\u206f\ufeff\ufff9-\ufffb"\\]/g,function(a){return Lb(a,c)});return '"'+d+'"'}
function Cq(a,b){var c,d,e,f,g,h;g=b==null?0:(f=kb(b),f|0);d=(c=a.a.get(g),c==null?[]:c);for(h=0;h<d.length;h++){e=d[h];if(wq(b,e.S())){if(d.length==1){d.length=0;a.a[cx](g)}else{d.splice(h,1)}--a.c;tq(a.b);return e.T()}}return null}
function ee(a,b){var c,d,e,f,g;b&=63;c=a.h;d=(c&Jw)!=0;d&&(c|=-1048576);if(b<22){g=c>>b;f=a.m>>b|c<<22-b;e=a.l>>b|a.m<<22-b}else if(b<44){g=d?Iw:0;f=c>>b-22;e=a.m>>b-22|c<<44-b}else{g=d?Iw:0;f=d?Hw:0;e=c>>b-44}return Md(e&Hw,f&Hw,g&Iw)}
function Qk(a,b){var c,d,e;if(b==0){return (a.a[0]&1)!=0}if(b<0){throw Xg(new Nh('Negative bit address'))}e=b>>5;if(e>=a.d){return a.e<0}c=a.a[e];b=1<<(b&31);if(a.e<0){d=Jk(a);if(e<d){return false}else d==e?(c=-c):(c=~c)}return (c&b)!=0}
function ul(a,b,c,d,e){var f,g,h;f=0;g=0;for(h=0;h<d;h++){f=(Gl(),Yg(jh(Zg(c[h],Uw),Zg(e,Uw)),Zg(sh(f),Uw)));g=Yg(ph(Zg(a[b+h],Uw),Zg(f,Uw)),g);a[b+h]=sh(g);g=nh(g,32);f=oh(f,32)}g=Yg(ph(Zg(a[b+d],Uw),f),g);a[b+d]=sh(g);return sh(nh(g,32))}
function ri(a){if(a.I()){var b=a.c;b.J()?(a.k='['+b.j):!b.I()?(a.k='[L'+b.G()+';'):(a.k='['+b.G());a.b=b.F()+'[]';a.i=b.H()+'[]';return}var c=a.f;var d=a.d;d=d.split('/');a.k=ui('.',[c,ui('$',d)]);a.b=ui('.',[c,ui('.',d)]);a.i=d[d.length-1]}
function $v(b,c){var d,e,f,g,h;h=new gr;try{for(e=(g=(new jp(b.g)).a.N().b.V(),new pp(g));_n(e.a.a);){d=(f=is(e.a),f.S());d.c=aj(d.c,De(c/d.e));if(d.d>d.c)return null;fr(h,new tu(d))}Fp(h.a)}catch(a){a=Wg(a);if(!we(a,4))throw Xg(a)}return h}
function Eu(b){var c,d,e;e=wj(b,'/');if(e.length!=2)throw Xg(new gv(qx+b));try{c=Bi(e[1]);if(c==0)throw Xg(new gv('Syntax error: divide by zero: '+b));d=Bi(e[0]);return d/c}catch(a){a=Wg(a);if(we(a,20)){throw Xg(new gv(qx+b))}else throw Xg(a)}}
function _t(a){var b,c,d,e,f,g,h;e=a.d;e>(a.a/2|0)&&(e=a.a/2|0);f=Cd(Ge,[ow,Pw],[32,6],15,[e,2],2);b=0;for(h=(d=(new jp(a)).a.N().b.V(),new pp(d));_n(h.a.a);){g=(c=is(h.a),c.S());f[b][0]=(ht(g),g);f[b][1]=nt(Um(Kr(a,g)));++b;if(b==e)break}return f}
function fv(b){ev();var c,d,e,f,g;if(b==null)return dv;g=wj(b,' *, *');for(e=0;e<g.length;e++){f=g[e];d=vj(f,' *:.*','');c=vj(f,'.*: *','');if(!oj(d,'')&&!oj(c,'')){try{nn(dv,d,new $u(d,d,c,cv,dv))}catch(a){a=Wg(a);if(!we(a,4))throw Xg(a)}}}return dv}
function Ch(a,b,c){var d=Ah,h;var e=d[a];var f=e instanceof Array?e[0]:null;if(e&&!f){_=e}else{_=(h=b&&b.prototype,!h&&(h=Ah[b]),Eh(h));_.ab=c;_.constructor=_;!b&&(_.bb=Hh);d[a]=_}for(var g=3;g<arguments.length;++g){arguments[g].prototype=_}f&&(_._=f)}
function ju(a){var b,c,d,e,f;f='Element: '+a.a+jx+a.g+' - exact mass: '+a.d+kx+a.c+' - name: '+a.e+' - nb isotope: '+qn(a.b)+gx;for(d=(e=(new zo(a.b)).a.N().K(),new Eo(e));d.a.O();){c=(b=d.a.P(),b.T());f+='Number: '+c.c+kx+c.b+lx+c.d+jx+c.a+gx}return f}
function bt(a){var b,c,d,e,f,g,h;g=a.length;b=0;for(f=0;f<g;){d=Yh(a,f,a.length);f+=d>=Bw?2:1;d<128?++b:d<2048?(b+=2):d<Bw?(b+=3):d<2097152?(b+=4):d<67108864&&(b+=5)}c=Ed(Ee,ow,6,b,15,1);h=0;for(e=0;e<g;){d=Yh(a,e,a.length);e+=d>=Bw?2:1;h+=at(c,h,d)}return c}
function At(a,b){if(Bt(a,b))return 0;if(oj(a.i,'C')){if(oj(b.i,'C'))return a.a-b.a;return -1}if(oj(a.i,'H')){if(oj(b.i,'C'))return 1;if(oj(b.i,'H'))return a.a-b.a;return -1}if(oj(b.i,'H')||oj(b.i,'C')){return 1}if(oj(a.i,b.i))return a.a-b.a;return mj(a.i,b.i)}
function Hl(a,b){Gl();var c,d,e,f,g,h,i,j,k;if(b.d>a.d){h=a;a=b;b=h}if(b.d<63){return Nl(a,b)}g=(a.d&-2)<<4;j=Pk(a,g);k=Pk(b,g);d=Al(a,Nk(j,g));e=Al(b,Nk(k,g));i=Hl(j,k);c=Hl(d,e);f=Hl(Al(j,d),Al(e,k));f=vl(vl(f,i),c);f=Nk(f,g);i=Nk(i,g<<1);return vl(vl(i,f),c)}
function Ud(a){var b,c,d;c=a.l;if((c&c-1)!=0){return -1}d=a.m;if((d&d-1)!=0){return -1}b=a.h;if((b&b-1)!=0){return -1}if(b==0&&d==0&&c==0){return -1}if(b==0&&d==0&&c!=0){return Vi(c)}if(b==0&&d!=0&&c==0){return Vi(d)+22}if(b!=0&&d==0&&c==0){return Vi(b)+44}return -1}
function It(a,b,c,d){var e;if(c>d)throw Xg(new gv(ex));if(b==0){this.d=c;this.c=d;this.e=hu(a);this.f=a.f;this.a=0;this.i=a.g;this.b=a.c;return}e=jn(a.b,new Pi(b));if(!e)throw Xg(new gv('Isotope not found'));this.a=b;this.i=a.g;this.b=e.b;this.e=e.b;this.d=c;this.c=d}
function $d(a){var b,c,d,e,f;if(isNaN(a)){return pe(),oe}if(a<-9223372036854775808){return pe(),me}if(a>=9223372036854775807){return pe(),le}e=false;if(a<0){e=true;a=-a}d=0;if(a>=Lw){d=De(a/Lw);a-=d*Lw}c=0;if(a>=Kw){c=De(a/Kw);a-=c*Kw}b=De(a);f=Md(b,c,d);e&&Sd(f);return f}
function rm(a){var b;b=Ed(Ee,ow,6,8,15,1);b[0]=sh(a)<<24>>24;a=oh(a,8);b[1]=sh(a)<<24>>24;a=oh(a,8);b[2]=sh(a)<<24>>24;a=oh(a,8);b[3]=sh(a)<<24>>24;a=oh(a,8);b[4]=sh(a)<<24>>24;a=oh(a,8);b[5]=sh(a)<<24>>24;a=oh(a,8);b[6]=sh(a)<<24>>24;a=oh(a,8);b[7]=sh(a)<<24>>24;return b}
function $u(b,c,d,e,f){var g;this.b=b;this.c=c;try{this.a=new Tu(d,e,f)}catch(a){a=Wg(a);if(we(a,7)){g=a;Sj();"Group creation error: '"+b+"'='"+d+"': "+rb(g,g.s());this.a=new Tu('',e,f)}else throw Xg(a)}if(this.a.e)throw Xg(new gv('Range formulas not allowed for groups'))}
function fk(a,b){var c;ht(b);c=5-a.e;if(c==0){return a}if(c>0){if(c<$j.length&&a.a+_j[De(c)]<54){return new kk(a.f*$j[De(c)])}return new mk(Ml((!a.c&&(a.c=cl(a.f)),a.c),De(c)))}if(a.a<54&&-c<$j.length){return rk(a.f,$j[De(-c)],b)}return qk((!a.c&&(a.c=cl(a.f)),a.c),Pl(-c),b)}
function Ll(a,b){var c,d,e,f,g,h,i,j,k;j=a.e;if(j==0){return Dk(),Ck}d=a.d;c=a.a;if(d==1){e=jh(Zg(c[0],Uw),Zg(b,Uw));i=sh(e);g=sh(oh(e,32));return g==0?new Sk(j,i):new Tk(j,2,Hd(Ad(He,1),ow,6,15,[i,g]))}h=d+1;f=Ed(He,ow,6,h,15,1);f[d]=Kl(f,c,d,b);k=new Tk(j,h,f);Fk(k);return k}
function Nl(a,b){var c,d,e,f,g,h,i,j,k,l,m;d=a.d;f=b.d;h=d+f;i=a.e!=b.e?-1:1;if(h==2){k=jh(Zg(a.a[0],Uw),Zg(b.a[0],Uw));m=sh(k);l=sh(oh(k,32));return l==0?new Sk(i,m):new Tk(i,2,Hd(Ad(He,1),ow,6,15,[m,l]))}c=a.a;e=b.a;g=Ed(He,ow,6,h,15,1);Il(c,d,e,f,g);j=new Tk(i,h,g);Fk(j);return j}
function gu(a){var b,c,d,e,f,g,h;if(qn(a.b)==0){a.d=a.c;a.f=sh(dh($wnd.Math.round(a.c)));return}b=1.7976931348623157E308;h=fx;d=true;for(f=(g=(new zo(a.b)).a.N().K(),new Eo(g));f.a.O();){e=(c=f.a.P(),c.T());if(e.d>h||d){d=false;b=e.b;h=e.d}}a.d=b;a.f=sh(dh($wnd.Math.round(b)))}
function Gl(){Gl=Dh;var a,b;Dl=Ed(Bf,ow,5,32,0,1);El=Ed(Bf,ow,5,32,0,1);Fl=Hd(Ad(He,1),ow,6,15,[1,10,100,1000,Dw,Qw,Rw,10000000,100000000,Mw]);a=1;for(b=0;b<=18;b++){Dl[b]=dl(a);El[b]=dl(mh(a,b));a=jh(a,5)}for(;b<El.length;b++){Dl[b]=Lk(Dl[b-1],Dl[1]);El[b]=Lk(El[b-1],(Dk(),Ak))}}
function Dk(){Dk=Dh;var a;yk=new Sk(1,1);Ak=new Sk(1,10);Ck=new Sk(0,0);xk=new Sk(-1,1);zk=Hd(Ad(Bf,1),ow,5,0,[Ck,yk,new Sk(1,2),new Sk(1,3),new Sk(1,4),new Sk(1,5),new Sk(1,6),new Sk(1,7),new Sk(1,8),new Sk(1,9),Ak]);Bk=Ed(Bf,ow,5,32,0,1);for(a=0;a<Bk.length;a++){Bk[a]=dl(mh(1,a))}}
function il(a,b){var c,d,e,f,g;d=b>>5;b&=31;if(d>=a.d){return a.e<0?(Dk(),xk):(Dk(),Ck)}f=a.d-d;e=Ed(He,ow,6,f+1,15,1);jl(e,f,a.a,d,b);if(a.e<0){for(c=0;c<d&&a.a[c]==0;c++);if(c<d||b>0&&a.a[c]<<32-b!=0){for(c=0;c<f&&e[c]==-1;c++){e[c]=0}c==f&&++f;++e[c]}}g=new Tk(a.e,f,e);Fk(g);return g}
function Rr(a,b,c,d){var e,f;if(!b){return c}else{e=a.b.Y(c.c,b.c);if(e==0){d.d=Io(b,c.d);d.b=true;return b}f=e<0?0:1;b.a[f]=Rr(a,b.a[f],c,d);if(Sr(b.a[f])){if(Sr(b.a[1-f])){b.b=true;b.a[0].b=false;b.a[1].b=false}else{Sr(b.a[f].a[f])?(b=Zr(b,1-f)):Sr(b.a[f].a[1-f])&&(b=Yr(b,1-f))}}}return b}
function mu(a,b,c){var d,e,f,g,h,i,j,k,l;this.e=c;this.g=b;this.a=a.a;this.b=new xq;h=vj(c,'[^0-9,\\.]','');k=wj(h,',');e=0;for(g=(j=(new zo(a.b)).a.N().K(),new Eo(j));g.a.O();){f=(d=g.a.P(),d.T());l=0;k.length>e&&(l=Ai(k[e]));i=new _u(f.c,f.b,l,f.a);mn(this.b,Xi(f.c),i);++e}fu(this);gu(this)}
function tl(a,b){var c,d,e,f,g;d=Zg(b,Uw);if($g(a,0)>=0){f=ah(a,d);g=ih(a,d)}else{c=oh(a,1);e=b>>>1;f=ah(c,e);g=ih(c,e);g=Yg(mh(g,1),Zg(a,1));if((b&1)!=0){if($g(f,g)<=0){g=ph(g,f)}else{if(hh(ph(f,g),d)){g=Yg(g,ph(d,f));f=ph(f,1)}else{g=Yg(g,ph(mh(d,1),f));f=ph(f,2)}}}}return lh(mh(g,32),Zg(f,Uw))}
function Fv(){Fv=Dh;Ev=new xq;nn(Ev,'O',Xi(0));nn(Ev,'N',Xi(1));nn(Ev,'H',Xi(-1));nn(Ev,'C',Xi(2));nn(Ev,'F',Xi(-1));nn(Ev,'Cl',Xi(-1));nn(Ev,'Br',Xi(-1));nn(Ev,'I',Xi(-1));nn(Ev,'S',Xi(0));nn(Ev,'P',Xi(1));nn(Ev,'Li',Xi(-1));nn(Ev,'Na',Xi(-1));nn(Ev,'K',Xi(-1));nn(Ev,'Ca',Xi(0));nn(Ev,'Mg',Xi(0))}
function al(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p;m=b.length;i=m;if(b.charCodeAt(0)==45){k=-1;l=1;--m}else{k=1;l=0}f=(ml(),ll)[10];e=m/f|0;p=m%f;p!=0&&++e;h=Ed(He,ow,6,e,15,1);c=kl[8];g=0;n=l+(p==0?f:p);for(o=l;o<i;o=n,n=n+f){d=Bi(b.substr(o,n-o));j=(Gl(),Kl(h,h,g,c));j+=zl(h,g,d);h[g++]=j}a.e=k;a.d=g;a.a=h;Fk(a)}
function Bi(a){var b,c,d,e,f;if(a==null){throw Xg(new gj(ww))}d=a.length;e=d>0&&(a.charCodeAt(0)==45||a.charCodeAt(0)==43)?1:0;for(b=e;b<d;b++){if(Zh(a.charCodeAt(b))==-1){throw Xg(new gj(vw+a+'"'))}}f=parseInt(a,10);c=f<xw;if(isNaN(f)){throw Xg(new gj(vw+a+'"'))}else if(c||f>tw){throw Xg(new gj(vw+a+'"'))}return f}
function je(a){var b,c,d,e,f;if(a.l==0&&a.m==0&&a.h==0){return '0'}if(a.h==Jw&&a.m==0&&a.l==0){return '-9223372036854775808'}if(a.h>>19!=0){return '-'+je(ae(a))}c=a;d='';while(!(c.l==0&&c.m==0&&c.h==0)){e=Kd(Mw);c=Nd(c,e,true);b=''+ie(Jd);if(!(c.l==0&&c.m==0&&c.h==0)){f=9-b.length;for(;f>0;f--){b='0'+b}}d=b+d}return d}
function Zv(a,b){var c,d,e,f;f='';for(d=new bq(a.a);d.a<d.c.a.length;){c=aq(d);e=Dt(c.a);(e==null?!!Aq(b.a,null):Pq(b.b,e))&&(oj((e==null?Um(Aq(b.a,null)):Qq(b.b,e)).c.substr(0,'{'.length),'{')?(e=(e==null?Um(Aq(b.a,null)):Qq(b.b,e)).c):(e=(e==null?Um(Aq(b.a,null)):Qq(b.b,e)).b));c.b>1?(f+=e+c.b):c.b>0&&(f+=e)}return f}
function Lq(){if(!Object.create||!Object.getOwnPropertyNames){return false}var a='__proto__';var b=Object.create(null);if(b[a]!==undefined){return false}var c=Object.getOwnPropertyNames(b);if(c.length!=0){return false}b[a]=42;if(b[a]!==42){return false}if(Object.getOwnPropertyNames(b).length==0){return false}return true}
function jv(a){var b,c,d,e,f;c=true;for(e=new bq(a.d.d);e.a<e.c.a.length;){d=aq(e);if(c){a.e=new zv(a,d,a.c);Ut(a.e.c,d.f);b=a.e;c=false}else{b=new zv(a,d,a.c);Ut(b.c,d.f);Ot(a.e.c,b.c)}if(d.b!=''){f=St(b.c);fn(a.g,f)?mn(a.g,f,jn(a.g,f)+','+d.b):mn(a.g,f,d.b)}}if(a.e.c.d==0)throw Xg(new gv('Isotopic distribution: empty table'))}
function rl(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,o;m=a.a;n=a.d;o=a.e;if(n==1){d=Zg(m[0],Uw);e=Zg(b,Uw);f=ah(d,e);i=ih(d,e);o!=c&&(f=kh(f));o<0&&(i=kh(i));return Hd(Ad(Bf,1),ow,5,0,[dl(f),dl(i)])}h=o==c?1:-1;g=Ed(He,ow,6,n,15,1);j=Hd(Ad(He,1),ow,6,15,[sl(g,m,n,b)]);k=new Tk(h,n,g);l=new Tk(o,1,j);Fk(k);Fk(l);return Hd(Ad(Bf,1),ow,5,0,[k,l])}
function iu(a){var b,c,d,e,f,g,h,i;e=new jw;iw(e,'symbol',a.g);gw(e,hx,new Uc(a.d));gw(e,'mass',new Uc(a.c));iw(e,'name',a.e);gw(e,'atomicNumber',new Uc(a.a));g=new dw;gw(e,'isotopes',g.a);for(d=(h=(new zo(a.b)).a.N().K(),new Eo(h));d.a.O();){c=(b=d.a.P(),b.T());f=(i=new jw,gw(i,'mass',new Uc(c.b)),gw(i,ix,new Uc(c.d)),i);cw(g,f.a)}return e}
function Ql(a,b,c){var d,e,f,g,h;for(f=0;f<b;f++){d=0;for(h=f+1;h<b;h++){d=Yg(Yg(jh(Zg(a[f],Uw),Zg(a[h],Uw)),Zg(c[f+h],Uw)),Zg(sh(d),Uw));c[f+h]=sh(d);d=oh(d,32)}c[f+b]=sh(d)}hl(c,c,b<<1);d=0;for(e=0,g=0;e<b;++e,g++){d=Yg(Yg(jh(Zg(a[e],Uw),Zg(a[e],Uw)),Zg(c[g],Uw)),Zg(sh(d),Uw));c[g]=sh(d);d=oh(d,32);++g;d=Yg(d,Zg(c[g],Uw));c[g]=sh(d);d=oh(d,32)}return c}
function sl(a,b,c,d){var e,f,g,h,i,j,k;j=0;f=Zg(d,Uw);for(h=c-1;h>=0;h--){k=lh(mh(j,32),Zg(b[h],Uw));if($g(k,0)>=0){i=ah(k,f);j=ih(k,f)}else{e=oh(k,1);g=d>>>1;i=ah(e,g);j=ih(e,g);j=Yg(mh(j,1),Zg(k,1));if((d&1)!=0){if($g(i,j)<=0){j=ph(j,i)}else{if(hh(ph(i,j),f)){j=Yg(j,ph(f,i));i=ph(i,1)}else{j=Yg(j,ph(mh(f,1),i));i=ph(i,2)}}}}a[h]=sh(Zg(i,Uw))}return sh(j)}
function Gk(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o;f=b.e;if(f==0){throw Xg(new Nh('BigInteger divide by zero'))}e=b.d;d=b.a;if(e==1){return rl(a,d[0],f)}m=a.a;n=a.d;c=n!=e?n>e?1:-1:yl(m,d,n);if(c<0){return Hd(Ad(Bf,1),ow,5,0,[Ck,a])}o=a.e;h=n-e+1;i=o==f?1:-1;g=Ed(He,ow,6,h,15,1);j=ql(g,h,m,n,d,e);k=new Tk(i,h,g);l=new Tk(o,e,j);Fk(k);Fk(l);return Hd(Ad(Bf,1),ow,5,0,[k,l])}
function Qd(a,b,c,d,e,f){var g,h,i,j,k,l,m;j=Td(b)-Td(a);g=de(b,j);i=Md(0,0,0);while(j>=0){h=Wd(a,g);if(h){j<22?(i.l|=1<<j,undefined):j<44?(i.m|=1<<j-22,undefined):(i.h|=1<<j-44,undefined);if(a.l==0&&a.m==0&&a.h==0){break}}k=g.m;l=g.h;m=g.l;g.h=l>>>1;g.m=k>>>1|(l&1)<<21;g.l=m>>>1|(k&1)<<21;--j}c&&Sd(i);if(f){if(d){Jd=ae(a);e&&(Jd=ge(Jd,(pe(),ne)))}else{Jd=Md(a.l,a.m,a.h)}}return i}
function xl(a,b,c,d,e){var f,g;f=Yg(Zg(b[0],Uw),Zg(d[0],Uw));a[0]=sh(f);f=nh(f,32);if(c>=e){for(g=1;g<e;g++){f=Yg(f,Yg(Zg(b[g],Uw),Zg(d[g],Uw)));a[g]=sh(f);f=nh(f,32)}for(;g<c;g++){f=Yg(f,Zg(b[g],Uw));a[g]=sh(f);f=nh(f,32)}}else{for(g=1;g<c;g++){f=Yg(f,Yg(Zg(b[g],Uw),Zg(d[g],Uw)));a[g]=sh(f);f=nh(f,32)}for(;g<e;g++){f=Yg(f,Zg(d[g],Uw));a[g]=sh(f);f=nh(f,32)}}$g(f,0)!=0&&(a[g]=sh(f))}
function wj(a,b){var c,d,e,f,g,h,i;c=new $wnd.RegExp(b,'g');h=Ed(xf,ow,2,0,6,1);d=0;i=a;f=null;while(true){g=c.exec(i);if(g==null||i==''){h[d]=i;break}else{h[d]=yj(i,0,g.index);i=yj(i,g.index+g[0].length,i.length);c.lastIndex=0;if(f==i){h[d]=i.substr(0,1);i=i.substr(1,i.length-1)}f=i;++d}}if(a.length>0){e=h.length;while(e>0&&h[e-1]==''){--e}e<h.length&&(h.length=e,undefined)}return h}
function uk(a,b,c){var d;d=0;switch(c.b){case 7:if(b!=0){throw Xg(new Nh('Rounding necessary'))}break;case 0:d=b==0?0:b<0?-1:1;break;case 2:d=(b==0?0:b<0?-1:1)>0?b==0?0:b<0?-1:1:0;break;case 3:d=(b==0?0:b<0?-1:1)<0?b==0?0:b<0?-1:1:0;break;case 4:(b<0?-b:b)>=5&&(d=b==0?0:b<0?-1:1);break;case 5:(b<0?-b:b)>5&&(d=b==0?0:b<0?-1:1);break;case 6:(b<0?-b:b)+a>5&&(d=b==0?0:b<0?-1:1);}return d}
function Yu(a,b,c,d){var e,f,g,h,i,j,k,l,m;if(b.indexOf(',')==-1)throw Xg(new gv('Syntax error: combinatorial'));if(c!=d)throw Xg(new gv('Combinatorial range formulae are not allowed'));j=wj(b,',');i=0;h=j.length;m=new Gj('{');for(g=0;g<h-1;g++){l=zj(j[g]);f=new Tu(l,a.c,a.d);Ej(m,Ru(f)+',');i+=Nu(f)}k=zj(j[h-1]);e=new Tu(k,a.c,a.d);Ej(m,Ru(e)+'}');i+=Nu(e);i/=h;Ku(a,new Gt(m.a,i,c,d))}
function dk(a,b){var c,d,e,f,g,h;e=hk(a);h=hk(b);if(e==h){if(a.e==b.e&&a.a<54&&b.a<54){return a.f<b.f?-1:a.f>b.f?1:0}d=a.e-b.e;c=(a.d>0?a.d:$wnd.Math.floor((a.a-1)*Tw)+1)-(b.d>0?b.d:$wnd.Math.floor((b.a-1)*Tw)+1);if(c>d+1){return e}else if(c<d-1){return -e}else{f=(!a.c&&(a.c=cl(a.f)),a.c);g=(!b.c&&(b.c=cl(b.f)),b.c);d<0?(f=Lk(f,Pl(-d))):d>0&&(g=Lk(g,Pl(d)));return Ek(f,g)}}else return e<h?-1:1}
function Uv(b,c,d){var e,f,g,h,i,j,k,l,m,n;j=new jw;n=b.b.a.get(Ax);if(n!=null&&!oj(n,'')){try{d=(ev(),ev(),cv)}catch(a){a=Wg(a);if(!we(a,47))throw Xg(a)}}if(d){k=new dw;gw(j,'elements',k.a);for(f=(m=(new zo(d)).a.N().K(),new Eo(m));f.a.O();){e=(g=f.a.P(),g.T());cw(k,iu(e).a)}}if(c){l=new dw;gw(j,zx,l.a);for(i=(m=(new zo(c)).a.N().K(),new Eo(m));i.a.O();){h=(g=i.a.P(),g.T());cw(l,Zu(h).a)}}return j}
function Mv(a,b,c){Lv();var d,e,f,g,h,i,j,k,l,m,n,o;i=((b.b-1)/b.a|0)/2|0;h=a[0][0];g=a[a.length-1][0];k=sh(dh($wnd.Math.round((g-h)/c*b.a)))+2*b.a*i+1;o=Ed(Ge,Pw,6,k,15,1);for(m=0,n=a.length;m<n;++m){l=a[m];d=sh(dh($wnd.Math.round((l[0]-h)/c*b.a+b.a*i)));for(f=0;f<b.c.length;f++){o[d+f-b.a*i]+=b.c[f]*l[1]}}j=Cd(Ge,[ow,Pw],[32,6],15,[k,2],2);for(e=0;e<k;e++){j[e][0]=(e/b.a-i)*c+h;j[e][1]=o[e]}return j}
function Pl(a){Gl();var b,c,d,e;b=De(a);if(a<El.length){return El[b]}else if(a<=50){return Mk((Dk(),Ak),b)}else if(a<=1000){return Nk(Mk(Dl[1],b),b)}if(a>Rw){throw Xg(new Nh('power of ten too big'))}if(a<=tw){return Nk(Mk(Dl[1],b),b)}d=Mk(Dl[1],tw);e=d;c=dh(a-tw);b=De(a%tw);while($g(c,tw)>0){e=Lk(e,d);c=ph(c,tw)}e=Lk(e,Mk(Dl[1],b));e=Nk(e,tw);c=dh(a-tw);while($g(c,tw)>0){e=Nk(e,tw);c=ph(c,tw)}e=Nk(e,b);return e}
function Al(a,b){var c,d,e,f,g,h,i,j,k,l;g=a.e;i=b.e;if(i==0){return a}if(g==0){return b.e==0?b:new Tk(-b.e,b.d,b.a)}f=a.d;h=b.d;if(f+h==2){c=Zg(a.a[0],Uw);d=Zg(b.a[0],Uw);g<0&&(c=kh(c));i<0&&(d=kh(d));return dl(ph(c,d))}e=f!=h?f>h?1:-1:yl(a.a,b.a,f);if(e==-1){l=-i;k=g==i?Bl(b.a,h,a.a,f):wl(b.a,h,a.a,f)}else{l=g;if(g==i){if(e==0){return Dk(),Ck}k=Bl(a.a,f,b.a,h)}else{k=wl(a.a,f,b.a,h)}}j=new Tk(l,k.length,k);Fk(j);return j}
function lv(b){var c,d,e;if(b.e.c.d==0)throw Xg(new Ab(wx));Tr(b.e.c,nt(cp(Lr(b.e.c)))-2,0);Tr(b.e.c,nt(cp(Mr(b.e.c)))+2,0);d=new xq;nn(d,'FWHM',b.b+'');nn(d,'Threshold',b.a+'');try{if(b.d.d.a.length==1){e=yp(b.d.d,0);nn(d,'Monoisotopic mass',Ou(e)+'');nn(d,'Molecular weight',Nu(e)+'');Iv(e,null)!=null&&nn(d,'Unsaturation',Iv(e,null)+'')}}catch(a){a=Wg(a);if(we(a,7)){c=a;ob(c,(Sj(),Rj),'')}else throw Xg(a)}return Yt(b.e.c,b.d+' - fwhm: '+b.b,b.g,d)}
function ml(){ml=Dh;kl=Hd(Ad(He,1),ow,6,15,[xw,1162261467,Ww,1220703125,362797056,1977326743,Ww,387420489,Mw,214358881,429981696,815730721,1475789056,170859375,268435456,410338673,612220032,893871739,1280000000,1801088541,113379904,148035889,191102976,244140625,308915776,387420489,481890304,594823321,729000000,887503681,Ww,1291467969,1544804416,1838265625,60466176]);ll=Hd(Ad(He,1),ow,6,15,[-1,-1,31,19,15,13,11,11,10,9,9,8,8,8,8,7,7,7,7,7,7,7,6,6,6,6,6,6,6,6,6,6,6,6,6,6,5])}
function vl(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o;g=a.e;i=b.e;if(g==0){return b}if(i==0){return a}f=a.d;h=b.d;if(f+h==2){c=Zg(a.a[0],Uw);d=Zg(b.a[0],Uw);if(g==i){k=Yg(c,d);o=sh(k);n=sh(oh(k,32));return n==0?new Sk(g,o):new Tk(g,2,Hd(Ad(He,1),ow,6,15,[o,n]))}return dl(g<0?ph(d,c):ph(c,d))}else if(g==i){m=g;l=f>=h?wl(a.a,f,b.a,h):wl(b.a,h,a.a,f)}else{e=f!=h?f>h?1:-1:yl(a.a,b.a,f);if(e==0){return Dk(),Ck}if(e==1){m=g;l=Bl(a.a,f,b.a,h)}else{m=i;l=Bl(b.a,h,a.a,f)}}j=new Tk(m,l.length,l);Fk(j);return j}
function ik(a){var b,c,d,e,f;if(a.g!=null){return a.g}if(a.a<32){a.g=ol(dh(a.f),De(a.e));return a.g}e=pl((!a.c&&(a.c=cl(a.f)),a.c),0);if(a.e==0){return e}b=(!a.c&&(a.c=cl(a.f)),a.c).e<0?2:1;c=e.length;d=-a.e+c-b;f=new Mj;f.a+=''+e;if(a.e>0&&d>=-6){if(d>=0){Lj(f,c-De(a.e),String.fromCharCode(46))}else{f.a=yj(f.a,0,b-1)+'0.'+xj(f.a,b-1);Lj(f,b+1,Dj(Xj,0,-De(d)-1))}}else{if(c-b>=1){Lj(f,b,String.fromCharCode(46));++c}Lj(f,c,String.fromCharCode(69));d>0&&Lj(f,++c,String.fromCharCode(43));Lj(f,++c,''+th(dh(d)))}a.g=f.a;return a.g}
function _d(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,A,B,C,D,F,G;c=a.l&8191;d=a.l>>13|(a.m&15)<<9;e=a.m>>4&8191;f=a.m>>17|(a.h&255)<<5;g=(a.h&1048320)>>8;h=b.l&8191;i=b.l>>13|(b.m&15)<<9;j=b.m>>4&8191;k=b.m>>17|(b.h&255)<<5;l=(b.h&1048320)>>8;B=c*h;C=d*h;D=e*h;F=f*h;G=g*h;if(i!=0){C+=c*i;D+=d*i;F+=e*i;G+=f*i}if(j!=0){D+=c*j;F+=d*j;G+=e*j}if(k!=0){F+=c*k;G+=d*k}l!=0&&(G+=c*l);n=B&Hw;o=(C&511)<<13;m=n+o;q=B>>22;r=C>>9;s=(D&262143)<<4;t=(F&31)<<17;p=q+r+s+t;v=D>>18;w=F>>5;A=(G&4095)<<8;u=v+w+A;p+=m>>22;m&=Hw;u+=p>>22;p&=Hw;u&=Iw;return Md(m,p,u)}
function Nd(a,b,c){var d,e,f,g,h,i;if(b.l==0&&b.m==0&&b.h==0){throw Xg(new Nh('divide by zero'))}if(a.l==0&&a.m==0&&a.h==0){c&&(Jd=Md(0,0,0));return Md(0,0,0)}if(b.h==Jw&&b.m==0&&b.l==0){return Od(a,c)}i=false;if(b.h>>19!=0){b=ae(b);i=true}g=Ud(b);f=false;e=false;d=false;if(a.h==Jw&&a.m==0&&a.l==0){e=true;f=true;if(g==-1){a=Ld((pe(),le));d=true;i=!i}else{h=ee(a,g);i&&Sd(h);c&&(Jd=Md(0,0,0));return h}}else if(a.h>>19!=0){f=true;a=ae(a);d=true;i=!i}if(g!=-1){return Pd(a,g,i,f,c)}if(Zd(a,b)<0){c&&(f?(Jd=ae(a)):(Jd=Md(a.l,a.m,a.h)));return Md(0,0,0)}return Qd(d?a:Md(a.l,a.m,a.h),b,i,f,e,c)}
function at(a,b,c){if(c<128){a[b]=(c&127)<<24>>24;return 1}else if(c<2048){a[b++]=(c>>6&31|192)<<24>>24;a[b]=(c&63|128)<<24>>24;return 2}else if(c<Bw){a[b++]=(c>>12&15|224)<<24>>24;a[b++]=(c>>6&63|128)<<24>>24;a[b]=(c&63|128)<<24>>24;return 3}else if(c<2097152){a[b++]=(c>>18&7|240)<<24>>24;a[b++]=(c>>12&63|128)<<24>>24;a[b++]=(c>>6&63|128)<<24>>24;a[b]=(c&63|128)<<24>>24;return 4}else if(c<67108864){a[b++]=(c>>24&3|248)<<24>>24;a[b++]=(c>>18&63|128)<<24>>24;a[b++]=(c>>12&63|128)<<24>>24;a[b++]=(c>>6&63|128)<<24>>24;a[b]=(c&63|128)<<24>>24;return 5}throw Xg(new Mi('Character out of range: '+c))}
function Ju(b,c,d,e,f,g){var h,i,j,k,l,m,n,o;if(oj(c,'Zcharge')){b.a+=d;return}if(c.charCodeAt(0)==91){h=1;while($h(c.charCodeAt(h)))++h;if(f==0){try{f=Bi(c.substr(1,h-1))}catch(a){a=Wg(a);if(we(a,7)){throw Xg(new gv('Bad isotope syntax'))}else throw Xg(a)}}c=yj(c,h,c.length-1)}i=kn(b.c,c);if(!i){n=kn(b.d,c);if(!n)throw Xg(new gv('Unrecognized symbol: '+c));if(f!=0)throw Xg(new gv('Syntax error: cannot specify isotopes for groups'));if(g){m=(k=(new jp(n.a.g)).a.N().b.V(),new pp(k));while(_n(m.a.a)){l=(j=is(m.a),j.S());o=new Ht(l);o.d*=d;o.c*=e;Ku(b,o)}}else{Ku(b,new Jt(n,d,e))}}else{Ku(b,new It(i,f,d,e))}}
function pc(a,b){var c,d,e,f,g,h,i,j,k;if(b.length==0){return a.w(pw,mw,-1,-1)}k=zj(b);oj(k.substr(0,3),'at ')&&(k=k.substr(3,k.length-3));k=k.replace(/\[.*?\]/g,'');g=k.indexOf('(');if(g==-1){g=k.indexOf('@');if(g==-1){j=k;k=''}else{j=zj(k.substr(g+1,k.length-(g+1)));k=zj(k.substr(0,g))}}else{c=k.indexOf(')',g);j=k.substr(g+1,c-(g+1));k=zj(k.substr(0,g))}g=qj(k,Bj(46));g!=-1&&(k=k.substr(g+1,k.length-(g+1)));(k.length==0||oj(k,'Anonymous function'))&&(k=mw);h=sj(j,Bj(58));e=tj(j,Bj(58),h-1);i=-1;d=-1;f=pw;if(h!=-1&&e!=-1){f=j.substr(0,e);i=kc(j.substr(e+1,h-(e+1)));d=kc(j.substr(h+1,j.length-(h+1)))}return a.w(f,k,i,d)}
function qk(a,b,c){var d,e,f,g,h,i,j,k,l;f=Gk(a,b);g=f[0];i=f[1];if(i.e==0){return new mk(g)}j=a.e*b.e;if(el(b)<54){h=(l=i.d>1?lh(mh(i.a[1],32),Zg(i.a[0],Uw)):Zg(i.a[0],Uw),jh(i.e,l));e=(k=b.d>1?lh(mh(b.a[1],32),Zg(b.a[0],Uw)):Zg(b.a[0],Uw),jh(b.e,k));d=gh(mh($g(h,0)<0?kh(h):h,1),$g(e,0)<0?kh(e):e)?-1:eh(mh($g(h,0)<0?kh(h):h,1),$g(e,0)<0?kh(e):e)?1:0;d=uk(Qk(g,0)?1:0,j*(5+d),c)}else{d=Ek(Ok(i.e<0?new Tk(1,i.d,i.a):i),b.e<0?new Tk(1,b.d,b.a):b);d=uk(Qk(g,0)?1:0,j*(5+d),c)}if(d!=0){if(el(g)<54){return wk((k=g.d>1?lh(mh(g.a[1],32),Zg(g.a[0],Uw)):Zg(g.a[0],Uw),Yg(jh(g.e,k),d)))}g=vl(g,dl(d));return new mk(g)}return new mk(g)}
function rv(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p;p=new Vu(new Bv(a));sm(p,b);m=1;for(e=(k=(new jp(p.g)).a.N().b.V(),new pp(k));_n(e.a.a);){c=(i=is(e.a),i.S());h=kn(a.a,c.i);qn(h.b)>m&&(m=qn(h.b))}n=2*m*$wnd.Math.log(Qu(p)+1)/$wnd.Math.log(2);o=a.d.b/(n*4);wv(a,o);Tr(a.c,0,1);for(d=(j=(new jp(p.g)).a.N().b.V(),new pp(j));_n(d.a.a);){c=(i=is(d.a),i.S());h=kn(a.a,c.i);if(c.a!=0){f=new ku(c.b,c.b,h.g,h.e,h.a);h=f}if(qn(h.b)==0){l=new _u(De(h.c+0.5),h.c,1,h.g);mn(h.b,new Pi(l.c),l)}if(Ct(c)<0){throw Xg(new gv('Number of element under 0'))}else if(Ct(c)==0);else if(Ct(c)==1){a.c=sv(a,new yv(a.d,h,a.a))}else{g=new yv(a.d,h,a.a);wv(g,a.b);a.c=sv(a,qv(g,Ct(c)))}}}
function Wr(a,b,c){var d,e,f,g,h,i,j,k,l,m,n;if(!a.c){return false}g=null;m=null;i=new rs(null,null);e=1;i.a[1]=a.c;l=i;while(l.a[e]){j=e;h=m;m=l;l=l.a[e];d=a.b.Y(b,l.c);e=d<0?0:1;d==0&&(!c.c||dr(l.d,c.d))&&(g=l);if(!(!!l&&l.b)&&!Sr(l.a[e])){if(Sr(l.a[1-e])){m=m.a[j]=Zr(l,e)}else if(!Sr(l.a[1-e])){n=m.a[1-j];if(n){if(!Sr(n.a[1-j])&&!Sr(n.a[j])){m.b=false;n.b=true;l.b=true}else{f=h.a[1]==m?1:0;Sr(n.a[j])?(h.a[f]=Yr(m,j)):Sr(n.a[1-j])&&(h.a[f]=Zr(m,j));l.b=h.a[f].b=true;h.a[f].a[0].b=false;h.a[f].a[1].b=false}}}}}if(g){c.b=true;c.d=g.d;if(l!=g){k=new rs(l.c,l.d);Xr(a,i,g,k);m==g&&(m=k)}m.a[m.a[1]==l?1:0]=l.a[!l.a[0]?1:0];--a.d}a.c=i.a[1];!!a.c&&(a.c.b=false);return c.b}
function ql(a,b,c,d,e,f){var g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w;q=Ed(He,ow,6,d+1,15,1);r=Ed(He,ow,6,f+1,15,1);i=Ui(e[f-1]);if(i!=0){gl(r,e,0,i);gl(q,c,0,i)}else{Tj(c,0,q,0,d);Tj(e,0,r,0,f)}j=r[f-1];l=b-1;m=d;while(l>=0){if(q[m]==j){k=-1}else{s=Yg(mh(Zg(q[m],Uw),32),Zg(q[m-1],Uw));v=tl(s,j);k=sh(v);u=sh(nh(v,32));if(k!=0){t=false;++k;do{--k;if(t){break}o=jh(Zg(k,Uw),Zg(r[f-2],Uw));w=Yg(mh(u,32),Zg(q[m-2],Uw));p=Yg(Zg(u,Uw),Zg(j,Uw));Ui(sh(oh(p,32)))<32?(t=true):(u=sh(p))}while(eh(uh(o,Xw),uh(w,Xw)))}}if(k!=0){g=ul(q,m-f,r,f,k);if(g!=0){--k;h=0;for(n=0;n<f;n++){h=Yg(h,Yg(Zg(q[m-f+n],Uw),Zg(r[n],Uw)));q[m-f+n]=sh(h);h=oh(h,32)}}}a[l]=k;--m;--l}if(i!=0){jl(r,f,q,0,i);return r}Tj(q,0,r,0,f);return q}
function Uu(a,b,c,d,e){var f,g,h,i,j,k,l;Ls.call(this);this.c=b;this.d=c;this.f=d;h=a.indexOf('$');if(h>-1){this.b=a.substr(h+1,a.length-(h+1));a=a.substr(0,h)}g=new RegExp('(\\([0-9]+[+-]\\))');for(j=g.exec(a);j;j=g.exec(a)){f=j[0];l=Bi(vj(vj(vj(f,'[^0-9+-]',''),'^([0-9]+)([+-])$','$2$1'),'^[+]',''));a=a.replace(g,'(Zcharge'+l+')')}g=new RegExp('(\\([+-][0-9]+\\))');for(k=g.exec(a);k;k=g.exec(a)){f=k[0];l=Bi(vj(vj(vj(f,'[^0-9+-]',''),'^([0-9])([+-])$','$1$2'),'^[+]',''));a=a.replace(g,'(Zcharge'+l+')')}g=new RegExp('([+-])(?![0-9])');for(i=g.exec(a);i;i=g.exec(a)){f=i[0];oj(f,'+')?(a=a.replace(g,'Zcharge')):(a=a.replace(g,'(Zcharge-1)'))}(new $wnd.RegExp('^([a-zA-Z][0-9]+-[0-9])$')).test(a)&&(this.e=true);a.indexOf('}')!=-1;Xu(this,a,e)}
function ck(){ck=Dh;var a,b,c;new lk(1,0);new lk(10,0);new lk(0,0);Wj=Ed(Af,ow,16,11,0,1);Xj=Ed(Fe,ow,6,100,15,1);Yj=Hd(Ad(Ge,1),Pw,6,15,[1,5,25,125,625,3125,15625,78125,390625,1953125,9765625,48828125,244140625,1220703125,6103515625,30517578125,152587890625,762939453125,3814697265625,19073486328125,95367431640625,476837158203125,2384185791015625]);Zj=Ed(He,ow,6,Yj.length,15,1);$j=Hd(Ad(Ge,1),Pw,6,15,[1,10,100,1000,Dw,Qw,Rw,10000000,100000000,Mw,Sw,100000000000,1000000000000,10000000000000,100000000000000,1000000000000000,10000000000000000]);_j=Ed(He,ow,6,$j.length,15,1);ak=Ed(Af,ow,16,11,0,1);a=0;for(;a<ak.length;a++){Wj[a]=new lk(a,0);ak[a]=new lk(0,a);Xj[a]=48}for(;a<Xj.length;a++){Xj[a]=48}for(c=0;c<Zj.length;c++){Zj[c]=nk(Yj[c])}for(b=0;b<_j.length;b++){_j[b]=nk($j[b])}Gl()}
function tv(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p,q;f=b.c.a;a.c.d>f&&Wt(a.c);b.c.d>f&&Wt(b.c);k=new au;j=(new ps(b.c)).b.V();e=0;while(_n(j.a)){i=j.b=ao(j.a);h=i.S();g=i.T();q=(new ps(a.c)).b.V();while(_n(q.a)){p=q.b=ao(q.a);o=p.S();n=p.T();m=(ht(o),o)+(ht(h),h);l=(ht(n),n)*(ht(g),g);d=Tm(Or(k,m));c=Tm(Nr(k,m));if(d!=null&&(ht(d),d===m)){l+=nt(Um(Kr(k,c)))}else{d!=null&&$wnd.Math.abs((ht(d),d)-m)>a.b&&(d=null);c!=null&&$wnd.Math.abs((ht(c),c)-m)>a.b&&(c=null);c!=null&&d!=null&&($wnd.Math.abs((ht(c),c)-m)<$wnd.Math.abs((ht(d),d)-m)?(d=null):(c=null));if(c!=null){if(nt(Um(Kr(k,c)))>l){l+=nt(Um(Kr(k,c)));m=(ht(c),c)}else{l+=nt(Um(Kr(k,c)));Ur(k,c)}}else if(d!=null){if(nt(Um(Kr(k,d)))>l){l+=nt(Um(Kr(k,d)));m=(ht(d),d)}else{l+=nt(Um(Kr(k,d)));Ur(k,d)}}}l>a.d.a/Qw&&Tr(k,m,l);l>e&&(e=l)}k.d>f&&Wt(k)}Ut(k,1/e);return k}
function Nq(){function e(){this.obj=this.createObject()}
;e.prototype.createObject=function(a){return Object.create(null)};e.prototype.get=function(a){return this.obj[a]};e.prototype.set=function(a,b){this.obj[a]=b};e.prototype[cx]=function(a){delete this.obj[a]};e.prototype.keys=function(){return Object.getOwnPropertyNames(this.obj)};e.prototype.entries=function(){var b=this.keys();var c=this;var d=0;return {next:function(){if(d>=b.length)return {done:true};var a=b[d++];return {value:[a,c.get(a)],done:false}}}};if(!Lq()){e.prototype.createObject=function(){return {}};e.prototype.get=function(a){return this.obj[':'+a]};e.prototype.set=function(a,b){this.obj[':'+a]=b};e.prototype[cx]=function(a){delete this.obj[':'+a]};e.prototype.keys=function(){var a=[];for(var b in this.obj){b.charCodeAt(0)==58&&a.push(b.substring(1))}return a}}return e}
function uv(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p,q;f=b.c.a;a.c.d>f&&Wt(a.c);b.c.d>f&&Wt(b.c);k=new au;j=(new ps(b.c)).b.V();e=0;while(_n(j.a)){i=j.b=ao(j.a);h=i.S();g=i.T();q=(new ps(a.c)).b.V();while(_n(q.a)){p=q.b=ao(q.a);o=p.S();n=p.T();m=(ht(o),o)+(ht(h),h);l=(ht(n),n)*(ht(g),g);d=Tm(Or(k,m));c=Tm(Nr(k,m));if(d!=null&&(ht(d),d===m)){l+=nt(Um(Kr(k,c)))}else{d!=null&&$wnd.Math.abs((ht(d),d)-m)>a.b&&(d=null);c!=null&&$wnd.Math.abs((ht(c),c)-m)>a.b&&(c=null);if(c!=null&&d!=null){m=(m*l+(ht(c),c)*nt(Um(Kr(k,c)))+(ht(d),d)*nt(Um(Kr(k,d))))/(l+nt(Um(Kr(k,c)))+nt(Um(Kr(k,d))));l+=nt(Um(Kr(k,c)))+nt(Um(Kr(k,d)));Ur(k,c);Ur(k,d)}else if(c!=null){m=(m*l+(ht(c),c)*nt(Um(Kr(k,c))))/(l+nt(Um(Kr(k,c))));l+=nt(Um(Kr(k,c)));Ur(k,c)}else if(d!=null){m=(m*l+(ht(d),d)*nt(Um(Kr(k,d))))/(l+nt(Um(Kr(k,d))));l+=nt(Um(Kr(k,d)));Ur(k,d)}}l>a.d.a/Qw&&Tr(k,m,l);l>e&&(e=l)}k.d>f&&Wt(k)}Ut(k,1/e);return k}
function ol(a,b){ml();var c,d,e,f,g,h,i,j,k,l,m,n;h=$g(a,0)<0;h&&(a=kh(a));if($g(a,0)==0){switch(b){case 0:return '0';case 1:return '0.0';case 2:return '0.00';case 3:return '0.000';case 4:return '0.0000';case 5:return '0.00000';case 6:return '0.000000';default:l=new Mj;b<0?(l.a+='0E+',l):(l.a+='0E',l);l.a+=b==xw?'2147483648':''+-b;return l.a;}}j=Ed(Fe,ow,6,19,15,1);c=18;n=a;do{i=n;n=ah(n,10);j[--c]=sh(Yg(48,ph(i,jh(n,10))))&Cw}while($g(n,0)!=0);d=ph(ph(ph(18,c),b),1);if(b==0){h&&(j[--c]=45);return Dj(j,c,18-c)}if(b>0&&$g(d,-6)>=0){if($g(d,0)>=0){e=c+sh(d);for(g=17;g>=e;g--){j[g+1]=j[g]}j[++e]=46;h&&(j[--c]=45);return Dj(j,c,18-c+1)}for(f=2;gh(f,Yg(kh(d),1));f++){j[--c]=48}j[--c]=46;j[--c]=48;h&&(j[--c]=45);return Dj(j,c,18-c)}m=c+1;k=new Nj;h&&(k.a+='-',k);if(18-m>=1){Hj(k,j[c]);k.a+='.';k.a+=Dj(j,c+1,18-c-1)}else{k.a+=Dj(j,c,18-c)}k.a+='E';$g(d,0)>0&&(k.a+='+',k);k.a+=''+th(d);return k.a}
function ek(a,b){var c,d,e,f,g,h,i,j;c=0;g=0;f=b.length;j=new Nj;if(0<f&&b.charCodeAt(0)==43){++g;++c;if(g<f&&(b.charCodeAt(g)==43||b.charCodeAt(g)==45)){throw Xg(new gj(vw+b+'"'))}}while(g<f&&b.charCodeAt(g)!=46&&b.charCodeAt(g)!=101&&b.charCodeAt(g)!=69){++g}j.a+=''+yj(b==null?ww:(ht(b),b),c,g);if(g<f&&b.charCodeAt(g)==46){++g;c=g;while(g<f&&b.charCodeAt(g)!=101&&b.charCodeAt(g)!=69){++g}a.e=g-c;j.a+=''+yj(b==null?ww:(ht(b),b),c,g)}else{a.e=0}if(g<f&&(b.charCodeAt(g)==101||b.charCodeAt(g)==69)){++g;c=g;if(g<f&&b.charCodeAt(g)==43){++g;g<f&&b.charCodeAt(g)!=45&&++c}h=b.substr(c,f-c);a.e=a.e-Bi(h);if(a.e!=De(a.e)){throw Xg(new gj('Scale out of range.'))}}i=j.a;if(i.length<16){a.f=(bk==null&&(bk=/^[+-]?\d*$/i),bk.test(i)?parseInt(i,10):NaN);if(pt(a.f)){throw Xg(new gj(vw+b+'"'))}a.a=nk(a.f)}else{gk(a,new Wk(i))}a.d=j.a.length;for(e=0;e<j.a.length;++e){d=lj(j.a,e);if(d!=45&&d!=48){break}--a.d}a.d==0&&(a.d=1)}
function Jh(){var a,b,c;b=$doc.compatMode;a=Hd(Ad(xf,1),ow,2,6,[Ow]);for(c=0;c<a.length;c++){if(oj(a[c],b)){return}}a.length==1&&oj(Ow,a[0])&&oj('BackCompat',b)?"GWT no longer supports Quirks Mode (document.compatMode=' BackCompat').<br>Make sure your application's host HTML page has a Standards Mode (document.compatMode=' CSS1Compat') doctype,<br>e.g. by using &lt;!doctype html&gt; at the start of your application's HTML page.<br><br>To continue using this unsupported rendering mode and risk layout problems, suppress this message by adding<br>the following line to your*.gwt.xml module file:<br>&nbsp;&nbsp;&lt;extend-configuration-property name=\"document.compatMode\" value=\""+b+'"/&gt;':"Your *.gwt.xml module configuration prohibits the use of the current document rendering mode (document.compatMode=' "+b+"').<br>Modify your application's host HTML page doctype, or update your custom "+"'document.compatMode' configuration property settings."}
function Nb(){var a=['\\u0000','\\u0001','\\u0002','\\u0003','\\u0004','\\u0005','\\u0006','\\u0007','\\b','\\t','\\n','\\u000B','\\f','\\r','\\u000E','\\u000F','\\u0010','\\u0011','\\u0012','\\u0013','\\u0014','\\u0015','\\u0016','\\u0017','\\u0018','\\u0019','\\u001A','\\u001B','\\u001C','\\u001D','\\u001E','\\u001F'];a[34]='\\"';a[92]='\\\\';a[173]='\\u00ad';a[1536]='\\u0600';a[1537]='\\u0601';a[1538]='\\u0602';a[1539]='\\u0603';a[1757]='\\u06dd';a[1807]='\\u070f';a[6068]='\\u17b4';a[6069]='\\u17b5';a[8203]='\\u200b';a[8204]='\\u200c';a[8205]='\\u200d';a[8206]='\\u200e';a[8207]='\\u200f';a[8232]='\\u2028';a[8233]='\\u2029';a[8234]='\\u202a';a[8235]='\\u202b';a[8236]='\\u202c';a[8237]='\\u202d';a[8238]='\\u202e';a[8288]='\\u2060';a[8289]='\\u2061';a[8290]='\\u2062';a[8291]='\\u2063';a[8292]='\\u2064';a[8298]='\\u206a';a[8299]='\\u206b';a[8300]='\\u206c';a[8301]='\\u206d';a[8302]='\\u206e';a[8303]='\\u206f';a[65279]='\\ufeff';a[65529]='\\ufff9';a[65530]='\\ufffa';a[65531]='\\ufffb';return a}
function Du(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,A,B;b=vj(b,' ','');b=vj(b,'^([0-9]+[A-Z][a-z]?)$','[$1]');(new $wnd.RegExp('^(.*[a-zA-Z][0-9]+-[0-9].*)$')).test(b)&&(a.c=true);r=new RegExp('([A-Z][a-z]?\\{[0-9.,]*\\})');for(t=r.exec(b);t;t=r.exec(b)){h=t[1];p=(v=wu(h),w=vj(h,'\\{.*',''),gn(a.a,v)||nn(a.a,v,new mu(kn(a.a,w),v,h)),v);b=b.replace(r,p)}r=new RegExp('(\\{[A-Za-z0-9]*\\})');for(s=r.exec(b);s;s=r.exec(b)){h=s[1];q=(A=wu(h),B=vj(h,'[\\{\\}]',''),gn(a.b,A)||nn(a.b,A,new $u(A,h,B,a.a,a.b)),A);b=b.replace(r,q)}b.indexOf('}')!=-1;g=wj(b,'\\.');n=1;o=false;for(e=0,f=g.length;e<f;++e){d=g[e];if(Cu(d)){if(o)throw Xg(new gv("Syntax error: 'number.number.'"));n=Ai(d);o=true;continue}u=d.indexOf('/');if(u!=-1){if(o)throw Xg(new gv("Syntax error: 'number.number/number'"));k=u+1;l=d.length;while($h(lj(d,k++))){if(k>=l)break}k<l&&--k;n=Eu(d.substr(0,k));o=true;if(k>=l)continue;else d=d.substr(k,d.length-k)}j=0;for(;j<d.length;j++){if(!$h(d.charCodeAt(j)))break}if(j>0){m=Ai(d.substr(0,j));d=d.substr(j,d.length-j);o?(n+=m/$wnd.Math.pow(10,j)):(n=m)}i=new Uu(d,a.a,a.b,n,c);i.f==0&&(a.e=true);i.e&&(a.c=true);vp(a.d,i);n=1;o=false}}
function pl(a,b){ml();var c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,A,B,C,D,F,G;A=a.e;n=a.d;e=a.a;if(A==0){switch(b){case 0:return '0';case 1:return '0.0';case 2:return '0.00';case 3:return '0.000';case 4:return '0.0000';case 5:return '0.00000';case 6:return '0.000000';default:v=new Mj;b<0?(v.a+='0E+',v):(v.a+='0E',v);v.a+=-b;return v.a;}}s=n*10+1+7;t=Ed(Fe,ow,6,s+1,15,1);c=s;if(n==1){g=e[0];if(g<0){G=Zg(g,Uw);do{o=G;G=ah(G,10);t[--c]=48+sh(ph(o,jh(G,10)))&Cw}while($g(G,0)!=0)}else{G=g;do{o=G;G=G/10|0;t[--c]=48+(o-G*10)&Cw}while(G!=0)}}else{C=Ed(He,ow,6,n,15,1);F=n;Tj(e,0,C,0,n);H:while(true){w=0;for(i=F-1;i>=0;i--){D=Yg(mh(w,32),Zg(C[i],Uw));q=nl(D);C[i]=sh(q);w=sh(nh(q,32))}r=sh(w);p=c;do{t[--c]=48+r%10&Cw}while((r=r/10|0)!=0&&c!=0);d=9-p+c;for(h=0;h<d&&c>0;h++){t[--c]=48}k=F-1;for(;C[k]==0;k--){if(k==0){break H}}F=k+1}while(t[c]==48){++c}}m=A<0;f=s-c-b-1;if(b==0){m&&(t[--c]=45);return Dj(t,c,s-c)}if(b>0&&f>=-6){if(f>=0){j=c+f;for(l=s-1;l>=j;l--){t[l+1]=t[l]}t[++j]=46;m&&(t[--c]=45);return Dj(t,c,s-c+1)}for(k=2;k<-f+1;k++){t[--c]=48}t[--c]=46;t[--c]=48;m&&(t[--c]=45);return Dj(t,c,s-c)}B=c+1;u=new Nj;m&&(u.a+='-',u);if(s-B>=1){Hj(u,t[c]);u.a+='.';u.a+=Dj(t,c+1,s-c-1)}else{u.a+=Dj(t,c,s-c)}u.a+='E';f>0&&(u.a+='+',u);u.a+=''+f;return u.a}
function Yt(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,A;u=new Fj;t=a.d;t>(a.a/2|0)&&(t=a.a/2|0);u.a+='##TITLE= '+b+gx+'##JCAMP-DX= 5.00\r\n'+'##DATA TYPE= MASS SPECTRUM\r\n'+'##DATA CLASS= PEAK TABLE\r\n'+'##ORIGIN= Generated spectrum based on ChemCalc www.chemcalc.org\r\n'+'##SPECTROMETER/DATA SYSTEM= Based on ChemCalc isotopic distribution calculator\r\n'+'##XUNITS= M/Z\r\n'+'##YUNITS= RELATIVE ABUNDANCE\r\n'+'##NPOINTS=         \r\n';e=u.a.length;u.a+='##MAXY= 100\r\n##MINY= 0\r\n';for(n=(q=(new po(d)).a.N().K(),new vo(q));n.a.O();){m=(h=n.a.P(),h.S());Ej(u,'##$'+m+'='+(m==null?Um(Aq(d.a,null)):Qq(d.b,m))+gx)}u.a+='##PEAK TABLE= (XY..XY)\r\n';p=0;l=(new ps(a)).b.V();o=wm(new po(c),Ed(ff,{3:1,144:1},72,(new po(c)).a.size(),7,1));iq(o,0,o.length,null);g=0;r=fx;j=true;f=0;s=false;A='';while(_n(l.a)&&f<t){++f;h=l.b=ao(l.a);v=nt(h.S());w=nt(h.T());w<1.0E-9&&(w=0);if(w!=0&&A.length>0){u.a+=A;++p;A=''}i=true;for(k=g;k<o.length;k++){if(!_n(l.a)||$wnd.Math.abs(nt(o[k])-r)<$wnd.Math.abs(nt(o[k])-v)){if(i){u.a+='  $$ ';i=false}else{u.a+=','}Ej(u,jn(c,o[k]));++g}else{break}}r=v;if(j){j=false;Ej(u,Xt(v)+', '+Xt(w*100));++p}else{if(!s||w!=0){u.a+=gx;Ej(u,Xt(v)+', '+Xt(w*100));++p}else{A=gx+Xt(v)+', '+Xt(0)}w==0?(s=true):(s=false)}}u.a+='\r\n##END=\r\n';u.a=yj(u.a,0,e-10)+(p+'')+xj(u.a,e-2);return u}
function jm(a,b){var c,d,e,f;lm(b,a.e);c=a.d[0];d=a.d[1];e=a.d[2];f=a.d[3];c=mm(c,d,e,f,a.e[0],7,-680876936);f=mm(f,c,d,e,a.e[1],12,-389564586);e=mm(e,f,c,d,a.e[2],17,606105819);d=mm(d,e,f,c,a.e[3],22,-1044525330);c=mm(c,d,e,f,a.e[4],7,-176418897);f=mm(f,c,d,e,a.e[5],12,1200080426);e=mm(e,f,c,d,a.e[6],17,-1473231341);d=mm(d,e,f,c,a.e[7],22,-45705983);c=mm(c,d,e,f,a.e[8],7,1770035416);f=mm(f,c,d,e,a.e[9],12,-1958414417);e=mm(e,f,c,d,a.e[10],17,-42063);d=mm(d,e,f,c,a.e[11],22,-1990404162);c=mm(c,d,e,f,a.e[12],7,1804603682);f=mm(f,c,d,e,a.e[13],12,-40341101);e=mm(e,f,c,d,a.e[14],17,-1502002290);d=mm(d,e,f,c,a.e[15],22,1236535329);c=nm(c,d,e,f,a.e[1],5,-165796510);f=nm(f,c,d,e,a.e[6],9,-1069501632);e=nm(e,f,c,d,a.e[11],14,643717713);d=nm(d,e,f,c,a.e[0],20,-373897302);c=nm(c,d,e,f,a.e[5],5,-701558691);f=nm(f,c,d,e,a.e[10],9,38016083);e=nm(e,f,c,d,a.e[15],14,-660478335);d=nm(d,e,f,c,a.e[4],20,-405537848);c=nm(c,d,e,f,a.e[9],5,568446438);f=nm(f,c,d,e,a.e[14],9,-1019803690);e=nm(e,f,c,d,a.e[3],14,-187363961);d=nm(d,e,f,c,a.e[8],20,1163531501);c=nm(c,d,e,f,a.e[13],5,-1444681467);f=nm(f,c,d,e,a.e[2],9,-51403784);e=nm(e,f,c,d,a.e[7],14,1735328473);d=nm(d,e,f,c,a.e[12],20,-1926607734);c=om(c,d,e,f,a.e[5],4,-378558);f=om(f,c,d,e,a.e[8],11,-2022574463);e=om(e,f,c,d,a.e[11],16,1839030562);d=om(d,e,f,c,a.e[14],23,-35309556);c=om(c,d,e,f,a.e[1],4,-1530992060);f=om(f,c,d,e,a.e[4],11,1272893353);e=om(e,f,c,d,a.e[7],16,-155497632);d=om(d,e,f,c,a.e[10],23,-1094730640);c=om(c,d,e,f,a.e[13],4,681279174);f=om(f,c,d,e,a.e[0],11,-358537222);e=om(e,f,c,d,a.e[3],16,-722521979);d=om(d,e,f,c,a.e[6],23,76029189);c=om(c,d,e,f,a.e[9],4,-640364487);f=om(f,c,d,e,a.e[12],11,-421815835);e=om(e,f,c,d,a.e[15],16,530742520);d=om(d,e,f,c,a.e[2],23,-995338651);c=pm(c,d,e,f,a.e[0],6,-198630844);f=pm(f,c,d,e,a.e[7],10,1126891415);e=pm(e,f,c,d,a.e[14],15,-1416354905);d=pm(d,e,f,c,a.e[5],21,-57434055);c=pm(c,d,e,f,a.e[12],6,1700485571);f=pm(f,c,d,e,a.e[3],10,-1894986606);e=pm(e,f,c,d,a.e[10],15,-1051523);d=pm(d,e,f,c,a.e[1],21,-2054922799);c=pm(c,d,e,f,a.e[8],6,1873313359);f=pm(f,c,d,e,a.e[15],10,-30611744);e=pm(e,f,c,d,a.e[6],15,-1560198380);d=pm(d,e,f,c,a.e[13],21,1309151649);c=pm(c,d,e,f,a.e[4],6,-145523070);f=pm(f,c,d,e,a.e[11],10,-1120210379);e=pm(e,f,c,d,a.e[2],15,718787259);d=pm(d,e,f,c,a.e[9],21,-343485551);a.d[0]=a.d[0]+c|0;a.d[1]=a.d[1]+d|0;a.d[2]=a.d[2]+e|0;a.d[3]=a.d[3]+f|0}
function Xu(b,c,d){var e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w;c=zj(c);c=vj(c,'[=]','');if(c.indexOf('.')!=-1)throw Xg(new Ab('Error: the formula "'+c+'"contains dots (error in parsing)'));if(oj(c,'')){return}if($h(c.charCodeAt(0))){throw Xg(new Ab('Error: the formula starts with a number'))}c.charCodeAt(0)==120&&(c='X'+yj(c,1,c.length));g=new Fr;k=1;j=1;m=1;l=1;r=1;q=1;w=c.length-1;while(w>=0){if($h(c.charCodeAt(w))){f=w;while(w>0&&$h(c.charCodeAt(w)))--w;e=nt(c.substr(w+1,f+1-(w+1)));u=Bi(e);if(c.charCodeAt(w)==45){--w;if(w<0)throw Xg(new gv("Syntax error: the formula starts with '-': "+c));f=w;while(w>0&&$h(c.charCodeAt(w)))--w;w==0&&$h(c.charCodeAt(0))&&--w;o=nt(c.substr(w+1,f+1-(w+1)));if(o.length==0){u=Bi('-'+e);v=u}else{v=Bi(o)}}else v=u;if(c.charCodeAt(w)==41){--w;if(w<0)throw Xg(new gv(sx+c));Er(g,new Pi(r));Er(g,new Pi(q));r=m;q=l;l*=u;m*=v}else{k=v;j=u}}else{if(c.charCodeAt(w)==93){s=w;--w;if(w<=1)throw Xg(new gv(tx));if(!_h(c.charCodeAt(w)))throw Xg(new gv(tx));while(w>0&&bi(c.charCodeAt(w)))--w;if(!ci(c.charCodeAt(w)))throw Xg(new gv('Syntax error: bad symbol (must start with uppercase)'));t=c.substr(w,s-w);--w;if(w<0)throw Xg(new gv(tx));if(!$h(c.charCodeAt(w)))throw Xg(new gv(tx));f=w;while(w>0&&c.charCodeAt(w)!=91)--w;p=c.substr(w+1,f+1-(w+1));try{n=Bi(p)}catch(a){a=Wg(a);if(we(a,20)){throw Xg(new gv('Syntax error: bad isotope number '+p))}else throw Xg(a)}if(c.charCodeAt(w)!=91)throw Xg(new gv("Isotope syntax error: no opening '['"));Ju(b,t,k*m,j*l,n,d);j=1;k=1;if(w>0)--w;else return}else{if(_h(c.charCodeAt(w))){s=w;while(w>0&&bi(c.charCodeAt(w)))--w;if(s==0&&w==0&&c.charCodeAt(0)==110){b.f=0;return}if(!ci(c.charCodeAt(w)))throw Xg(new gv('Syntax error: the symbol must start with uppercase'));t=c.substr(w,s+1-w);if(oj(t,'X')&&w==0){b.f=0;return}--w;Ju(b,t,k*m,j*l,0,d);j=1;k=1}else{while(c.charCodeAt(w)==41){--w;if(w<0)throw Xg(new gv(sx+c));Er(g,new Pi(r));Er(g,new Pi(q));r=m;q=l}if(w<0)break;while(c.charCodeAt(w)==40){l=q;m=r;if(g.a.a.length==0){q=1;r=1}else{q=Dr(g).a;r=Dr(g).a}--w;if(w<0)break}if(w<0)break;if(c.charCodeAt(w)==125){i=w;while(w>0&&c.charCodeAt(w)!=123)--w;if(c.charCodeAt(w)!=123)throw Xg(new gv('Syntax error (combinatorial): no opening brace'));Yu(b,c.substr(w+1,i-(w+1)),k*m,j*l);--w}}}}if(w<0)break;h=c.charCodeAt(w);if(h==123)throw Xg(new gv('Syntax error (combinatorial): no closing brace'));if(h==91)throw Xg(new gv('Syntax error (isotope): no closing bracket'));if(!/[A-Z\d]/i.test(String.fromCharCode(h))&&h!=40&&h!=91&&h!=123&&h!=93&&h!=41&&h!=125)throw Xg(new gv("Syntax error: unrecognized character: '"+String.fromCharCode(h)+"'"))}}
function Vv(b,c,d){var e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,A,B,C,D,F,G,H,I,J,K,L,M,N,O,P;w=new jw;if(!b){gw(w,yx,new td(Bx));return w}L=b.b.a.get(Ax);if(L!=null&&!oj(L,'')){try{d=(ev(),ev(),cv)}catch(a){a=Wg(a);if(!we(a,47))throw Xg(a)}}F=b.b.a.get(ux);t=b.b.a.get(Cx);O=b.b.a.get(Dx)!=null&&nt((Th(),pj(b.b.a.get(Dx))?true:false));p=0.001;try{p=Ai(b.b.a.get(Ex))}catch(a){a=Wg(a);if(!we(a,7))throw Xg(a)}N=1.0E-5;try{N=Ai(b.b.a.get(Fx))}catch(a){a=Wg(a);if(!we(a,7))throw Xg(a)}r=0;try{r=De(Ai(b.b.a.get(Gx)))}catch(a){a=Wg(a);if(!we(a,7))throw Xg(a)}h=null;try{h=Ai(b.b.a.get(Hx))}catch(a){a=Wg(a);if(!we(a,7))throw Xg(a)}v=0;Pq(b.b,Ix)&&oj(b.b.a.get(Ix).toLowerCase(),'center')&&(v=hv);B=new jw;F==null?gw(B,ux,(Pc(),Pc(),Oc)):gw(B,ux,new td(F));N==null?gw(B,Fx,(Pc(),Pc(),Oc)):gw(B,Fx,new Uc((ht(N),N)));p==null?gw(B,Ex,(Pc(),Pc(),Oc)):gw(B,Ex,new Uc((ht(p),p)));gw(B,Dx,(Ic(),O?Hc:Gc));t==null?gw(B,Cx,(Pc(),Pc(),Oc)):gw(B,Cx,new td(t));r>0&&gw(B,Gx,new Uc(r));L==null?gw(B,Ax,(Pc(),Pc(),Oc)):gw(B,Ax,new td(L));gw(w,'options',B.a);m=null;if(F!=null){F=zj(F);oj(F,'')&&(F=null)}if(F!=null){try{m=new Gu(F,d,c);if(m.d.a.length>0){if(m.e){gw(w,yx,new td('mass not defined'))}else{if(O){G=new jw;gw(G,Jx,new td(ux));iw(G,Kx,Fu(m));gw(w,ux,G.a)}else{iw(w,ux,Fu(m))}gw(w,'mw',new Uc(yu(m)));gw(w,'em',new Uc(zu(m)));gw(w,'nominalMass',new Uc(Au(m)));gw(w,Lx,new Uc(xu(m)));try{gw(w,Mx,new Uc(Bu(m,h)))}catch(a){a=Wg(a);if(!we(a,7))throw Xg(a)}if(t!=null&&!oj(t,'')){M=new ov(d,m,(ht(p),p),(ht(N),N));M.f=v;jv(M);kv(M);if(r>0){q=Nv(r);iv(M,q,(ht(p),p))}gw(B,'numberLines',new Uc(M.e.c.d));if(t.indexOf(Nx)>-1){if(O){u=new jw;gw(u,Jx,new td(Nx));iw(u,Kx,lv(M).a);gw(w,Nx,u.a)}else{iw(w,Nx,lv(M).a)}}if(t.indexOf('xy')>-1){if(O){P=new jw;gw(P,Jx,new td('xy'));iw(P,Kx,mv(M).a);gw(w,'xy',P.a)}else{iw(w,'xy',mv(M).a)}}if(t.indexOf('array')>-1&&t.indexOf('arrayX')==-1){e=nv(M);A=new dw;C=new dw;D=new dw;for(s=0;s<e.length;s++){cw(C,new Uc(e[s][0]));cw(D,new Uc(e[s][1]))}cw(A,C.a);cw(A,D.a);gw(w,'spectrum',A.a)}if(t.indexOf('arrayXXYY')>-1){e=nv(M);A=new dw;C=new dw;D=new dw;for(s=0;s<e.length;s++){cw(C,new Uc(e[s][0]));cw(D,new Uc(e[s][1]))}cw(A,C.a);cw(A,D.a);gw(w,'arrayXXYY',A.a)}if(t.indexOf('arrayXYXY')>-1){e=nv(M);gw(w,'arrayXYXY',(new fw(e)).a)}}K=new dw;gw(w,'parts',K.a);for(o=new bq(m.d);o.a<o.c.a.length;){n=aq(o);J=new jw;cw(K,J.a);if(O){G=new jw;gw(G,Jx,new td(ux));iw(G,Kx,Su(n));gw(J,ux,G.a)}else{iw(J,ux,Su(n))}gw(J,'mw',new Uc(Nu(n)));gw(J,'em',new Uc(Ou(n)));gw(J,rw,new Uc(n.f));n.b.length>0&&iw(J,'comment',n.b);hw(J,Iv(n,h));I=Ou(n)-n.a*xx;if(n.a!=0){gw(J,Lx,new Uc(n.a));I=I/$i(n.a)}gw(J,'msem',new Uc(I));Lu(n);i=new dw;for(g=(l=(new jp(n.g)).a.N().b.V(),new pp(l));_n(g.a.a);){f=(k=is(g.a),k.S());j=new jw;iw(j,'element',f.i);gw(j,rw,new Uc(Ct(f)));gw(j,ix,new Uc(f.g));cw(i,j.a)}gw(J,'ea',i.a)}}}else{gw(w,yx,new td('there is no part in the molecule'))}}catch(a){a=Wg(a);if(we(a,4)){H=a;iw(w,yx,H.f)}else throw Xg(a)}}else{gw(w,yx,new td('parameter mf not specified'))}return w}
function Yv(b,c,d){var e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,A,B,C,D,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,$,ab,bb,cb,db;H=0.5;S=0;M=50;K=1000;u=false;db=false;T=false;A=b.b.a.get(Ox)!=null&&nt((Th(),pj(b.b.a.get(Ox))?true:false));w=b.b.a.get(Px)==null?'http://www.chemcalc.org/service/jcamp/':b.b.a.get(Px);P='C0-100H0-202N0-10O0-10F0-3Cl0-3Br0-1';$=fx;Z=new Ls;bb=b.b.a.get(Dx)!=null&&nt((Th(),pj(b.b.a.get(Dx))?true:false));s=0.001;try{s=Ai(b.b.a.get(Ex))}catch(a){a=Wg(a);if(!we(a,7))throw Xg(a)}t=0;try{t=De(Ai(b.b.a.get(Gx)))}catch(a){a=Wg(a);if(!we(a,7))throw Xg(a)}C=new jw;if(!b){gw(C,yx,new td(Bx));return C}W=b.b.a.get(Ax);if(W!=null&&!oj(W,'')){try{d=(ev(),ev(),cv)}catch(a){a=Wg(a);if(!we(a,47))throw Xg(a)}}l=null;try{l=Ai(b.b.a.get(Hx))}catch(a){a=Wg(a);if(!we(a,7))throw Xg(a)}try{S=Ai(b.b.a.get(Qx))}catch(a){a=Wg(a);if(!we(a,7))throw Xg(a)}try{M=Ai(b.b.a.get(Rx))}catch(a){a=Wg(a);if(!we(a,7))throw Xg(a)}if(Pq(b.b,Sx)){try{u=(Th(),pj(b.b.a.get(Sx)))}catch(a){a=Wg(a);if(!we(a,7))throw Xg(a)}}if(Pq(b.b,Tx)){try{db=(Th(),pj(b.b.a.get(Tx)))}catch(a){a=Wg(a);if(!we(a,7))throw Xg(a)}}if(Pq(b.b,Ux)){try{T=(Th(),pj(b.b.a.get(Ux)))}catch(a){a=Wg(a);if(!we(a,7))throw Xg(a)}}try{K=Ai(b.b.a.get('maxNumberRows'))}catch(a){a=Wg(a);if(!we(a,7))throw Xg(a)}try{$=Ai(b.b.a.get(hx))}catch(a){a=Wg(a);if(!we(a,7))throw Xg(a)}try{H=Ai(b.b.a.get('massRange'))}catch(a){a=Wg(a);if(!we(a,7))throw Xg(a)}R=$-H;J=$+H;try{J=Ai(b.b.a.get('maxMass'))}catch(a){a=Wg(a);if(!we(a,7))throw Xg(a)}Pq(b.b,Vx)&&b.b.a.get(Vx)!=null&&b.b.a.get(Vx).length>0&&(P=b.b.a.get(Vx));if($<0){gw(C,yx,new td('monoisotopicMass must be specified and larger than 0'));return C}D=new jw;gw(D,Qx,new Uc(S));gw(D,Rx,new Uc(M));gw(D,Sx,(Ic(),u?Hc:Gc));gw(D,Tx,db?Hc:Gc);gw(D,Ux,T?Hc:Gc);gw(D,'minMass',new Uc(rh(dh($wnd.Math.round(R*Sw)))/Sw));gw(D,'maxMass',new Uc(rh(dh($wnd.Math.round(J*Sw)))/Sw));gw(D,'massRange',new Uc(rh(dh($wnd.Math.round(H*Sw)))/Sw));P==null?gw(D,Vx,(Pc(),Pc(),Oc)):gw(D,Vx,new td(P));gw(D,hx,new Uc(rh(dh($wnd.Math.round($*Sw)))/Sw));W==null?gw(D,Ax,(Pc(),Pc(),Oc)):gw(D,Ax,new td(W));gw(D,Ox,A?Hc:Gc);w==null?gw(D,Px,(Pc(),Pc(),Oc)):gw(D,Px,new td(w));gw(D,Dx,bb?Hc:Gc);gw(C,'options',D.a);v=0;U=0;f=0;g=0;try{e=new Hu(P,d,c,false);if(e.d.a.length!=1){gw(C,yx,new td('Number of parts not equal to 1'));return C}f=yp(e.d,0).a;g=f<0?-f:f;if(f!=0){$=$*g+f*xx;R=R*g+f*xx;J=J*g+f*xx;H=H*g}V=$v(yp(e.d,0),$+H);if(V){j=Ed(Ge,Pw,6,V.a.a.length,15,1);Q=Ed(Ge,Pw,6,V.a.a.length,15,1);I=Ed(Ge,Pw,6,V.a.a.length,15,1);Wv(V,Q,I);gw(C,'bruteForceIteration',new Uc(Ai(pl(Xv(V),0))));ab=false;k=0;L=V.a.a.length;su((lr(0,V.a.a.length),yp(V.a,0)),0,$,Q[0],I[0],H);while(!ab){if($g(v,2000000000)>0){throw Xg(new gv('Iteration number is over the current maximum of: 2000000000'))}if(j[k]>=R&&j[k]<=J){cb=Hv(V,l);if(!db||cb==null||(ht(cb),cb)>=S&&(ht(cb),cb)<=M&&(!u||(ht(cb),cb)==De((ht(cb),cb)))){U=Yg(U,1);if(!T){if(Z.g.d>=K){if($wnd.Math.abs(cp(Mr(Z.g)).a)>$wnd.Math.abs(j[k]-$)){Tm(Zo(Z.g));Ks(Z,new aw(j[k]-$,j[k],cb,Zv(V,c)))}}else{Ks(Z,new aw(j[k]-$,j[k],cb,Zv(V,c)))}}}}while(k<L&&k>=0){v=Yg(v,1);i=(lr(k,V.a.a.length),yp(V.a,k));if(i.b<i.c){++i.b;k==0?(j[0]=i.a.e*i.b):(j[k]=j[k-1]+i.a.e*i.b);if(k<L-1){++k;su((lr(k,V.a.a.length),yp(V.a,k)),j[k-1],$,Q[k],I[k],H)}else{break}}else{--k}}k<0&&(ab=true)}}gw(C,'realIteration',new Uc(rh(ph(v,1))));gw(C,'numberResults',new Uc(rh(U)));gw(C,Lx,new Uc(f))}catch(a){a=Wg(a);if(we(a,4)){m=a;iw(C,yx,rb(m,m.f)+'\r'+(ei(Ug),Ug.k+'@'+(st(D)>>>0).toString(16)))}else throw Xg(a)}G=new dw;h='';f!=0&&(f>0?(h='(+'+f+')'):(h='('+f+')'));for(Y=(q=(new jp(Z.g)).a.N().b.V(),new pp(q));_n(Y.a.a);){X=(p=is(Y.a),p.S());F=new jw;if(f==0){r=rh(dh($wnd.Math.round(X.a*Sw)))/Sw;o=rh(dh($wnd.Math.round(X.c*Sw)))/Sw}else{r=rh(dh($wnd.Math.round(X.a/g*Sw)))/Sw;o=rh(dh($wnd.Math.round((X.c-f*xx)/g*Sw)))/Sw}gw(F,yx,new Uc(r));gw(F,'em',new Uc(o));gw(F,'ppm',new Uc(rh(dh($wnd.Math.round(r/o*Sw)))/Sw*Rw));iw(F,'info',X.b+h);try{B=w+(''+X.b)+'&fwhm='+s;t>0&&(B+='&gaussianWidth='+t);if(bb){N=new jw;gw(N,Jx,new td(ux));iw(N,Kx,Fu(new Gu(X.b+h,d,c)));gw(F,ux,N.a);if(A){O=new jw;gw(O,Jx,new td(Nx));gw(O,'url',new td(B));gw(F,Nx,O.a)}}else{iw(F,ux,Fu(new Gu(X.b+h,d,c)));A&&gw(F,'jcampURL',new td(B))}}catch(a){a=Wg(a);if(we(a,4)){n=a;iw(F,ux,rb(n,n.f))}else throw Xg(a)}try{gw(F,'unsat',new Uc(rh(dh($wnd.Math.round(nt(X.d)*Sw)))/Sw))}catch(a){a=Wg(a);if(!we(a,7))throw Xg(a)}cw(G,F.a)}gw(C,'results',G.a);return C}
function ev(){ev=Dh;var b,c,d,e,f,g,h,i,j,k,l,m,n,o;cv=new xq;e=new xq;l=wj('1\tH\tHydrogen\t1.0079407538967635\n2\tHe\tHelium\t4.002601932146926\n3\tLi\tLithium\t6.940037632200444\n4\tBe\tBeryllium\t9.01218224\n5\tB\tBoron\t10.8110281284\n6\tC\tCarbon\t12.010735896764565\n7\tN\tNitrogen\t14.006703211872013\n8\tO\tOxygen\t15.99940492727602\n9\tF\tFluorine\t18.998403227\n10\tNe\tNeon\t20.180046379828486\n11\tNa\tSodium\t22.989769280929\n12\tMg\tMagnesium\t24.305051612756515\n13\tAl\tAluminium\t26.9815386312\n14\tSi\tSilicon\t28.085498706539465\n15\tP\tPhosphorus\t30.973761632000002\n16\tS\tSulfur\t32.0647872364133\n17\tCl\tChlorine\t35.4529375824264\n18\tAr\tArgon\t39.947676713373\n19\tK\tPotassium\t39.0983011264695\n20\tCa\tCalcium\t40.078022655762524\n21\tSc\tScandium\t44.95591199\n22\tTi\tTitanium\t47.86674933516\n23\tV\tVanadium\t50.9414675085\n24\tCr\tChromium\t51.99613314762095\n25\tMn\tManganese\t54.93804517\n26\tFe\tIron\t55.8451456935552\n27\tCo\tCobalt\t58.93319506999999\n28\tNi\tNickel\t58.69335163208455\n29\tCu\tCopper\t63.546039795084994\n30\tZn\tZinc\t65.40872812701322\n31\tGa\tGallium\t69.72306563428617\n32\tGe\tGermanium\t72.63984326005341\n33\tAs\tArsenic\t74.92159652\n34\tSe\tSelenium\t78.9593882599375\n35\tBr\tBromine\t79.9035279923569\n36\tKr\tKrypton\t83.7980066431168\n37\tRb\tRubidium\t85.46766359470149\n38\tSr\tStrontium\t87.6166441185128\n39\tY\tYttrium\t88.905848327\n40\tZr\tZirconium\t91.22364763203382\n41\tNb\tNiobium\t92.90637812599999\n42\tMo\tMolybdenum\t95.93759212713759\n43\tTc\tTechnetium\t98.0\n44\tRu\tRuthenium\t101.0649455723334\n45\tRh\tRhodium\t102.90550430000002\n46\tPd\tPalladium\t106.41532914746399\n47\tAg\tSilver\t107.868151248228\n48\tCd\tCadmium\t112.41155226203729\n49\tIn\tIndium\t114.81808621342\n50\tSn\tTin\t118.71010849931781\n51\tSb\tAntimony\t121.75978615571421\n52\tTe\tTellurium\t127.60312786587177\n53\tI\tIodine\t126.9044734\n54\tXe\tXenon\t131.29276070673757\n55\tCs\tCaesium\t132.90545193324\n56\tBa\tBarium\t137.3268918829641\n57\tLa\tLanthanum\t138.90545400916656\n58\tCe\tCerium\t140.11572627079408\n59\tPr\tPraseodymium\t140.907652826\n60\tNd\tNeodymium\t144.236131428275\n61\tPm\tPromethium\t145.0\n62\tSm\tSamarium\t150.3663485610868\n63\tEu\tEuropium\t151.96437050019\n64\tGd\tGadolinium\t157.25212224243995\n65\tTb\tTerbium\t158.925346827\n66\tDy\tDysprosium\t162.49946572489424\n67\tHo\tHolmium\t164.930322127\n68\tEr\tErbium\t167.25907628559352\n69\tTm\tThulium\t168.934213327\n70\tYb\tYtterbium\t173.0376956147714\n71\tLu\tLutetium\t174.96672140854997\n72\tHf\tHafnium\t178.4849721651158\n73\tTa\tTantalum\t180.9478757552806\n74\tW\tTungsten\t183.8417781725967\n75\tRe\tRhenium\t186.206706624852\n76\tOs\tOsmium\t190.2248630659075\n77\tIr\tIridium\t192.2160564328\n78\tPt\tPlatinum\t195.077807984934\n79\tAu\tGold\t196.96656876\n80\tHg\tMercury\t200.599166666798\n81\tTl\tThallium\t204.38341252384\n82\tPb\tLead\t207.21690767600003\n83\tBi\tBismuth\t208.98039871599997\n84\tPo\tPolonium\t209.0\n85\tAt\tAstatine\t210.0\n86\tRn\tRadon\t222.0\n87\tFr\tFrancium\t223.0\n88\tRa\tRadium\t226.0\n89\tAc\tActinium\t227.0\n90\tTh\tThorium\t232.038055321\n91\tPa\tProtactinium\t231.035884024\n92\tU\tUranium\t238.02891028165737\n93\tNp\tNeptunium\t237.0\n94\tPu\tPlutonium\t244.0\n95\tAm\tAmericium\t0.0\n96\tCm\tCurium\t0.0\n97\tBk\tBerkelium\t0.0\n98\tCf\tCalifornium\t0.0\n99\tEs\tEinsteinium\t0.0\n100\tFm\tFermium\t0.0\n101\tMd\tMendelevium\t0.0\n102\tNo\tNobelium\t0.0\n103\tLr\tLawrencium\t0.0\n104\tRf\tRutherfordium\t0.0\n105\tDb\tDubnium\t0.0\n106\tSg\tSeaborgium\t0.0\n107\tBh\tBohrium\t0.0\n108\tHs\tHassium\t0.0\n109\tMt\tMeitnerium\t0.0\n110\tDs\tDarmstadtium\t0.0\n111\tRg\tRoentgenium\t0.0\n112\tCn\tCopernicium\t0.0\n113\tUut\tUnuntrium\t0.0\n114\tUuq\t\t0.0\n115\tUup\tUnunpentium\t0.0\n116\tUuh\t\t0.0\n117\tUus\tUnunseptium\t0.0',vx);for(h=0;h<l.length;h++){o=wj(l[h],'\t');c=new lu(Ai(o[3]),zj(o[1]),o[2],Bi(o[0]));nn(cv,c.g,c);nn(e,o[0],c)}l=wj('1\t1.007825032071\t99.9885\t1\n2\t2.01410177784\t0.0115\t1\n3\t3.016049277725\t0\t1\n4\t3.016029319126\t0.00013\t2\n5\t4.002603254156\t99.99987\t2\n6\t6.01512279516\t7.59\t3\n7\t7.016004558\t92.41\t3\n8\t9.01218224\t100\t4\n9\t10.01293704\t19.9\t5\n10\t11.00930544\t80.1\t5\n11\t12.0\t98.93\t6\n12\t13.00335483781\t1.07\t6\n13\t14.0032419894\t0\t6\n14\t14.00307400486\t99.636\t7\n15\t15.00010889827\t0.364\t7\n17\t16.9991317012\t0.038\t8\n16\t15.9949146195616\t99.757\t8\n18\t17.99916107\t0.205\t8\n19\t18.998403227\t100\t9\n21\t20.993846684\t0.27\t10\n20\t19.992440175419\t90.48\t10\n22\t21.99138511419\t9.25\t10\n23\t22.989769280929\t100\t11\n25\t24.985836923\t10\t12\n24\t23.98504170014\t78.99\t12\n26\t25.9825929293\t11.01\t12\n27\t26.9815386312\t100\t13\n29\t28.97649470022\t4.685\t14\n28\t27.976926532519\t92.223\t14\n30\t29.973770173\t3.092\t14\n31\t30.973761632\t100\t15\n34\t33.9678669012\t4.25\t16\n35\t35.967080762\t0.01\t16\n32\t31.9720710015\t94.99\t16\n33\t32.9714587615\t0.75\t16\n36\t34.968852684\t75.76\t17\n37\t36.965902595\t24.24\t17\n38\t35.96754510629\t0.3365\t18\n39\t37.96273244\t0.0632\t18\n40\t39.962383122529\t99.6003\t18\n42\t39.9639984821\t0.0117\t19\n43\t40.9618257621\t6.7302\t19\n41\t38.963706682\t93.2581\t19\n49\t47.9525344\t0.187\t20\n48\t45.953692624\t0.004\t20\n46\t42.95876663\t0.135\t20\n47\t43.95548184\t2.086\t20\n44\t39.9625909822\t96.941\t20\n45\t41.9586180127\t0.647\t20\n50\t44.95591199\t100\t21\n51\t45.95263169\t8.25\t22\n55\t49.94479129\t5.18\t22\n54\t48.94787009\t5.41\t22\n53\t47.94794639\t73.72\t22\n52\t46.95176319\t7.44\t22\n57\t50.943959511\t99.75\t23\n56\t49.947158511\t0.25\t23\n59\t51.94050758\t83.789\t24\n58\t49.946044211\t4.345\t24\n61\t53.93888048\t2.365\t24\n60\t52.94064948\t9.501\t24\n62\t54.93804517\t100\t25\n64\t55.93493757\t91.754\t26\n65\t56.93539407\t2.119\t26\n66\t57.93327568\t0.282\t26\n63\t53.93961057\t5.845\t26\n67\t58.93319507\t100\t27\n68\t57.93534297\t68.0769\t28\n69\t59.93078647\t26.2231\t28\n70\t60.93105607\t1.1399\t28\n71\t61.92834516\t3.6345\t28\n72\t63.92796607\t0.9256\t28\n73\t62.92959756\t69.15\t29\n74\t64.92778957\t30.85\t29\n76\t65.92603341\t27.975\t30\n77\t66.92712731\t4.102\t30\n78\t67.92484421\t19.024\t30\n79\t69.925319321\t0.631\t30\n75\t63.92914227\t48.268\t30\n81\t70.924701311\t39.892\t31\n80\t68.925573613\t60.108\t31\n85\t73.921177818\t36.72\t32\n84\t72.923458918\t7.76\t32\n86\t75.921402618\t7.83\t32\n83\t71.922075818\t27.31\t32\n82\t69.924247411\t20.38\t32\n87\t74.92159652\t100\t33\n93\t81.916699422\t8.73\t34\n92\t79.916521321\t49.61\t34\n89\t75.919213618\t9.37\t34\n88\t73.922476418\t0.89\t34\n91\t77.917309118\t23.77\t34\n90\t76.919914018\t7.63\t34\n95\t80.916290621\t49.31\t35\n94\t78.918337122\t50.69\t35\n100\t83.9115073\t56.987\t36\n101\t85.9106107311\t17.279\t36\n98\t81.913483619\t11.593\t36\n99\t82.9141363\t11.5\t36\n96\t77.920364812\t0.355\t36\n97\t79.916379016\t2.286\t36\n102\t84.91178973812\t72.17\t37\n103\t86.90918052713\t27.83\t37\n106\t86.908877112\t7\t38\n107\t87.905612112\t82.58\t38\n104\t83.9134253\t0.56\t38\n105\t85.909260212\t9.86\t38\n108\t88.905848327\t100\t39\n113\t95.90827343\t2.8\t40\n112\t93.906315226\t17.38\t40\n110\t90.905645825\t11.22\t40\n111\t91.905040825\t17.15\t40\n109\t89.904704425\t51.45\t40\n114\t92.906378126\t100\t41\n119\t96.906021521\t9.56\t42\n118\t95.904679521\t16.68\t42\n117\t94.905842121\t15.9\t42\n116\t93.905088321\t9.23\t42\n115\t91.9068114\t14.77\t42\n121\t99.9074776\t9.67\t42\n120\t97.905408221\t24.19\t42\n124\t98.906254721\t0\t43\n123\t97.9072164\t0\t43\n122\t96.9063655\t0\t43\n129\t100.905582122\t17.06\t44\n127\t98.905939322\t12.76\t44\n128\t99.904219522\t12.6\t44\n126\t97.9052877\t1.87\t44\n131\t103.9054333\t18.62\t44\n125\t95.9075988\t5.54\t44\n130\t101.904349322\t31.55\t44\n132\t102.9055043\t100\t45\n137\t107.9038924\t26.46\t46\n136\t105.9034864\t27.33\t46\n138\t109.90515312\t11.72\t46\n133\t101.9056093\t1.02\t46\n135\t104.9050854\t22.33\t46\n134\t103.9040364\t11.14\t46\n139\t106.9050975\t51.839\t47\n140\t108.9047523\t48.161\t47\n141\t105.9064596\t1.25\t48\n143\t109.903002129\t12.49\t48\n142\t107.9041846\t0.89\t48\n144\t110.904178129\t12.8\t48\n145\t111.902757829\t24.13\t48\n146\t112.904401729\t12.22\t48\n147\t113.903358529\t28.73\t48\n148\t115.9047563\t7.49\t48\n149\t112.9040583\t4.29\t49\n150\t114.9038785\t95.71\t49\n152\t113.9027793\t0.66\t50\n153\t114.9033423\t0.34\t50\n154\t115.9017413\t14.54\t50\n155\t116.9029523\t7.68\t50\n156\t117.9016033\t24.22\t50\n157\t118.9033083\t8.59\t50\n158\t119.902194727\t32.58\t50\n159\t121.903439029\t4.63\t50\n160\t123.905273915\t5.79\t50\n151\t111.9048185\t0.97\t50\n162\t122.904214022\t42.79\t51\n161\t120.903815724\t57.21\t51\n170\t129.906224421\t34.08\t52\n169\t127.904463119\t31.74\t52\n168\t125.903311716\t18.84\t52\n163\t119.9040201\t0.09\t52\n167\t124.904430716\t7.07\t52\n166\t123.902817916\t4.74\t52\n165\t122.904270016\t0.89\t52\n164\t121.903043916\t2.55\t52\n171\t126.9044734\t100\t53\n175\t128.90477948\t26.4006\t54\n174\t127.903531315\t1.9102\t54\n173\t125.9042747\t0.089\t54\n172\t123.90589302\t0.0952\t54\n178\t131.90415351\t26.9086\t54\n179\t133.90539459\t10.4357\t54\n176\t129.90350808\t4.071\t54\n177\t130.90508241\t21.2324\t54\n180\t135.9072198\t8.8573\t54\n181\t132.90545193324\t100\t55\n186\t135.90457594\t7.854\t56\n187\t136.90582745\t11.232\t56\n184\t133.90450844\t2.417\t56\n185\t134.90568864\t6.592\t56\n188\t137.90524725\t71.698\t56\n182\t129.90632083\t0.106\t56\n183\t131.905061311\t0.101\t56\n190\t138.906353326\t99.91\t57\n189\t137.9071124\t0.09\t57\n191\t135.90717214\t0.185\t58\n193\t139.905438726\t88.45\t58\n192\t137.90599111\t0.251\t58\n194\t141.9092443\t11.114\t58\n195\t140.907652826\t100\t59\n201\t147.9168933\t5.7\t60\n200\t145.913116925\t17.2\t60\n202\t149.9208913\t5.6\t60\n197\t142.909814325\t12.2\t60\n196\t141.907723325\t27.2\t60\n199\t144.912573625\t8.3\t60\n198\t143.910087325\t23.8\t60\n204\t146.915138526\t0\t61\n203\t144.9127493\t0\t61\n205\t143.9119993\t3.07\t62\n207\t147.914822726\t11.24\t62\n206\t146.914897926\t14.99\t62\n208\t148.917184726\t13.82\t62\n209\t149.917275526\t7.38\t62\n210\t151.919732427\t26.75\t62\n211\t153.922209327\t22.75\t62\n212\t150.919850226\t47.81\t63\n213\t152.921230326\t52.19\t63\n220\t159.927054127\t21.86\t64\n216\t154.922622027\t14.8\t64\n217\t155.922122727\t20.47\t64\n218\t156.923960127\t15.65\t64\n219\t157.924103927\t24.84\t64\n214\t151.919791027\t0.2\t64\n215\t153.920865627\t2.18\t64\n221\t158.925346827\t100\t65\n222\t155.9242837\t0.056\t66\n223\t157.9244094\t0.095\t66\n228\t163.929174827\t28.26\t66\n227\t162.928731227\t24.896\t66\n226\t161.926798427\t25.475\t66\n225\t160.926933427\t18.889\t66\n224\t159.925197527\t2.329\t66\n229\t164.930322127\t100\t67\n235\t169.93546433\t14.91\t68\n234\t167.932370227\t26.978\t68\n233\t166.932048227\t22.869\t68\n232\t165.930293127\t33.503\t68\n231\t163.9292003\t1.601\t68\n230\t161.9287784\t0.139\t68\n236\t168.934213327\t100\t69\n239\t170.936325826\t14.28\t70\n238\t169.934761826\t3.04\t70\n237\t167.9338975\t0.13\t70\n242\t173.938862126\t31.83\t70\n243\t175.942571728\t12.76\t70\n240\t171.936381526\t21.83\t70\n241\t172.938210826\t16.13\t70\n244\t174.940771823\t97.41\t71\n245\t175.942686323\t2.59\t71\n250\t178.945816123\t13.62\t72\n251\t179.946550023\t35.08\t72\n248\t176.943220723\t18.6\t72\n249\t177.943698823\t27.28\t72\n246\t173.9400463\t0.16\t72\n247\t175.941408624\t5.26\t72\n252\t179.947464824\t0.012\t73\n253\t180.947995819\t99.988\t73\n258\t185.954364119\t28.43\t74\n254\t179.9467044\t0.12\t74\n255\t181.94820429\t26.5\t74\n256\t182.95022309\t14.31\t74\n257\t183.95093129\t30.64\t74\n259\t184.952955013\t37.4\t75\n260\t186.955753115\t62.6\t75\n262\t185.953838215\t1.59\t76\n263\t186.955750515\t1.96\t76\n261\t183.952489114\t0.02\t76\n266\t189.958447016\t26.26\t76\n267\t191.961480727\t40.78\t76\n264\t187.955838215\t13.24\t76\n265\t188.958147516\t16.15\t76\n268\t190.960594018\t37.3\t77\n269\t192.962926418\t62.7\t77\n275\t197.9678933\t7.163\t78\n274\t195.96495159\t25.242\t78\n273\t194.96479119\t33.832\t78\n272\t193.96268039\t32.967\t78\n270\t189.9599326\t0.014\t78\n271\t191.961038027\t0.782\t78\n276\t196.96656876\t100\t79\n279\t198.96827994\t16.87\t80\n278\t197.96676904\t9.97\t80\n277\t195.9658333\t0.15\t80\n283\t203.97349394\t6.87\t80\n282\t201.97064306\t29.86\t80\n281\t200.97030236\t13.18\t80\n280\t199.96832604\t23.1\t80\n285\t204.974427514\t70.48\t81\n284\t202.972344214\t29.52\t81\n288\t206.975896913\t22.1\t82\n289\t207.976652113\t52.4\t82\n287\t205.974465313\t24.1\t82\n286\t203.973043613\t1.4\t82\n290\t208.980398716\t100\t83\n291\t208.98243042\t0\t84\n292\t209.982873713\t0\t84\n293\t209.9871488\t0\t85\n294\t210.98749633\t0\t85\n295\t210.9906017\t0\t86\n296\t220.011394024\t0\t86\n297\t222.017577725\t0\t86\n298\t223.019735926\t0\t87\n299\t223.018502227\t0\t88\n300\t224.020211824\t0\t88\n301\t226.025409825\t0\t88\n302\t228.031070326\t0\t88\n303\t227.027752126\t0\t89\n305\t232.038055321\t100\t90\n304\t230.033133819\t0\t90\n306\t231.035884024\t100\t91\n307\t233.039635229\t0\t92\n309\t235.04392992\t0.7204\t92\n308\t234.04095212\t0.0054\t92\n311\t238.05078822\t99.2742\t92\n310\t236.04556802\t0\t92\n313\t237.04817342\t0\t93\n312\t236.0465705\t0\t93\n315\t239.05216342\t0\t94\n314\t238.04955992\t0\t94\n317\t241.05685152\t0\t94\n316\t240.05381352\t0\t94\n319\t244.0642045\t0\t94\n318\t242.05874262\t0\t94\n320\t241.05682912\t0\t95\n321\t243.061381125\t0\t95\n326\t247.0703545\t0\t96\n327\t248.0723495\t0\t96\n324\t245.065491222\t0\t96\n325\t246.067223722\t0\t96\n322\t243.061389122\t0\t96\n323\t244.06275262\t0\t96\n328\t247.0703076\t0\t97\n329\t249.074986728\t0\t97\n332\t251.0795875\t0\t98\n333\t252.0816265\t0\t98\n330\t249.074853524\t0\t98\n331\t250.076406122\t0\t98\n334\t252.0829805\t0\t99\n335\t257.0951057\t0\t100\n337\t260.1036534\t0\t101\n336\t258.0984315\t0\t101\n338\t259.1010311\t0\t102\n339\t262.1096322\t0\t103\n340\t265.1167046\t0\t104\n341\t268.1254557\t0\t105\n342\t271.133477\t0\t106\n343\t272.1380365\t0\t107\n344\t270.1346531\t0\t108\n345\t276.1511673\t0\t109\n346\t281.1620678\t0\t110\n347\t280.164478\t0\t111\n348\t285.1741178\t0\t112\n349\t284.1780886\t0\t113\n350\t289.1872879\t0\t114\n351\t288.1924992\t0\t115\n352\t292.20755101\t0\t117',vx);for(i=0;i<l.length;i++){o=wj(l[i],'\t');c=kn(e,o[3]);j=Ai(o[1]);k=Ai(o[2]);b=new _u(De(j+0.5),j,k,c.g);mn(c.b,new Pi(b.c),b)}for(d=(m=(new zo(cv)).a.N().K(),new Eo(m));d.a.O();){c=(f=d.a.P(),f.T());gu(c);if(qn(c.b)==0){n=new _u(De(c.c+0.5),c.c,100,c.g);mn(c.b,new Pi(n.c),n)}}dv=new xq;l=wj("1\tAbu\t2-Aminobutyric acid diradical\tC4H7NO\r\n2\tAcet\tAcetyl\tC2H3O\r\n3\tAcm\tAcetamidomethyl\tC3H6NO\r\n4\tAdao\tAdamantyloxy\tC10H15O\r\n5\tAib\talpha-Aminoisobutyric acid diradical\tC4H7NO\r\n6\tAla\tAlainine diradical\tC3H5NO\r\n7\tArg\tArginine diradical\tC6H12N4O\r\n8\tArgp\tArginine triradical\tC6H11N4O\r\n9\tAsn\tAsparagine diradical\tC4H6N2O2\r\n10\tAsnp\tAsparagine triradical\tC4H5N2O2\r\n11\tAsp\tAspartic acid diradical\tC4H5NO3\r\n12\tAspp\tAspartic acid triradical\tC4H4NO3\r\n13\tAsu\talpha-Aminosuberic acid diradical\tC8H13NO3\r\n14\tAsup\talpha-Aminosuberic acid triradical\tC8H12NO3\r\n15\tBoc\tt-Butoxycarbonyl\tC5H9O2\r\n16\tBom\tBenzyloxymethyl\tC8H9O\r\n17\tBrz\t2-Bromobenzyloxycarbonyl\tC8H6BrO2\r\n18\tBu\tButyl\tC4H9\r\n19\tBum\tt-Butoxymethyl\tC5H11O\r\n20\tBz\tBenzoyl\tC7H5O\r\n21\tBzl\tBenzyl\tC7H7\r\n22\tBn\tBenzyl\tC7H7\r\n23\tBzlo\tBenzyloxy\tC7H7O\r\n24\tCha\tbeta-Cyclohexylalanine diradical\tC9H15NO\r\n25\tChxo\tCyclohexyloxy\tC6H11O\r\n26\tCit\tCitrulline diradical\tC6H11N3O2\r\n27\tCitp\tCitrulline triradical\tC6H10N3O2\r\n28\tClz\t2-Chlorobenzyloxycarbonyl\tC8H6ClO2\r\n29\tCp\tCyclopentadienyl\tC5H5\r\n30\tCys\tCysteine diradical\tC3H5NOS\r\n31\tCysp\tCysteine triradical\tC3H4NOS\r\n32\tD\tDeuterium\t[2H]\r\n33\tDde\tDde\tC10H13O2\r\n34\tDnp\t2,4-Dinitrophenyl\tC6H3N2O4\r\n35\tEt\tEthyl\tC2H5\r\n36\tFmoc\tFluorenylmethoxycarbonyl\tC15H11O2\r\n37\tFor\tFormyl\tCHO\r\n38\tGln\tGlutamine diradical\tC5H8N2O2\r\n39\tGlnp\tGlutamine triradical\tC5H7N2O2\r\n40\tGlp\tPyroglutamine\tC5H5NO2\r\n41\tGlu\tGlutamic acid diradical\tC5H7NO3\r\n42\tGlup\tGlutamic acid triradical\tC5H6NO3\r\n43\tGly\tGlycine diradical\tC2H3NO\r\n44\tHci\tHomocitrulline diradical\tC7H13N3O2\r\n45\tHcip\tHomocitrulline triradical\tC7H12N3O2\r\n46\tHis\tHistidine diradical\tC6H7N3O\r\n47\tHisp\tHistidine triradical\tC6H6N3O\r\n48\tHser\tHomoserine diradical\tC4H7NO2\r\n49\tHserp\tHomoserine triradical\tC4H6NO2\r\n50\tHyp\tHydroxyproline diradical\tC5H7NO2\r\n51\tHypp\tHydroxyproline triradical\tC5H6NO2\r\n52\tIle\tIsoleucine diradical\tC6H11NO\r\n53\tIvdde\t1-[4,4-dimethyl-2,6-dioxocyclohexylidene)3-methylb\tC14H21O2\r\n54\tLeu\tLeucine diradical\tC6H11NO\r\n55\tLys\tLysine diradical\tC6H12N2O\r\n56\tLysp\tLysine triradical\tC6H11N2O\r\n57\tMbh\t4,4'-Dimethoxybenzhydryl\tC15H15O2\r\n58\tMe\tMethyl\tCH3\r\n59\tMebzl\t4-Methylbenzyl\tC8H9\r\n60\tMeobzl\t4-Methoxybenzyl1-[4,4-dimethyl-2,6-dioxocyclohexyl\tC8H9O\r\n61\tMet\tMethionine diradical\tC5H9NOS\r\n62\tMmt\t4-Methoxytrityl\tC20H17O\r\n63\tMtc\t2,2,5,7,8-pentamethylchroman-6-sulphonyl\tC14H19O3S\r\n64\tMtr\t4-Methoxy-2,3,6-trimethylbenzenesulphonyl\tC10H13O3S\r\n65\tMts\tMesitylene-2-sulphonyl\tC9H11O2S\r\n66\tMtt\t4-Methyltrityl\tC20H17\r\n67\tNle\tNorleucine diradical\tC6H11NO\r\n68\tNpys\t3-Nitro-2-pyridinesulphenyl\tC5H3N2O2S\r\n69\tNva\tNorvaline diradical\tC5H9NO\r\n70\tOdmab\tOdmab\tC20H26NO3\r\n71\tOrn\tOrnithine diradical\tC5H10N2O\r\n72\tOrnp\tOrnithine triradical\tC5H9N2O\r\n73\tPbf\t2,2,4,6,7-pentamethyldihydrobenzofurane-5-sulfonyl\tC13H17O3S\r\n74\tPen\tPenicillamine diradical\tC5H9NOS\r\n75\tPenp\tPenicillamine triradical\tC5H8NOS\r\n76\tPh\tPhenyl\tC6H5\r\n77\tPhe\tPhenylalanine diradical\tC9H9NO\r\n78\tPhepcl\t4-Chlorophenylalanine diradical\tC9H8ClNO\r\n79\tPhg\tPhenylglycine\tC8H7NO\r\n80\tPmc\t2,2,5,7,8-Pentamethylchroman-6-sulphonyl\tC14H19O3S\r\n81\tPro\tProline diradical\tC5H7NO\r\n82\tPyr\tPyroglutamine\tC5H5NO2\r\n83\tSar\tSarcosine diradical\tC3H5NO\r\n84\tSer\tSerine diradical\tC3H5NO2\r\n85\tSerp\tSerine triradical\tC3H4NO2\r\n86\tSta\tStatine diradical\tC8H15NO2\r\n87\tStap\tStatine triradical\tC8H14NO2\r\n88\tTacm\tTrimethylacetamidomethyl\tC6H12NO\r\n89\tTbdms\tt-Butyldimethylsilyl\tC6H15Si\r\n90\tTbu\tt-Butyl\tC4H9\r\n91\tTbuo\tt-Butoxy\tC4H9O\r\n92\tTbuthio\tt-Butylthio\tC4H9S\r\n93\tTfa\tTrifluoroacetyl\tC2F3O\r\n94\tThi\tbeta-(2-thenyl)alanine\tC7H7NOS\r\n95\tThr\tThreonine diradical\tC4H7NO2\r\n96\tThrp\tThreonine triradical\tC4H6NO2\r\n97\tTips\tTriisopropylsilyl\tC9H21Si\r\n98\tTms\tTrimethylsilyl\tC3H9Si\r\n99\tTos\tTosyl\tC7H7O2S\r\n100\tTrp\tTryptophan diradical\tC11H10N2O\r\n101\tTrpp\tTryptophan triradical\tC11H9N2O\r\n102\tTrt\tTrityl\tC19H15\r\n103\tTyr\tTyrosine diradical\tC9H9NO2\r\n104\tTyrp\tTyrosine triradical\tC9H8NO2\r\n105\tVal\tValine\tC5H9NO\r\n106\tValoh\tbeta-Hydroxyvaline diradical\tC5H9NO2\r\n107\tValohp\tbeta-Hydroxyvaline triradical\tC5H8NO2\r\n108\tXan\tXanthyl\tC13H9O\r\n109\tZ\tBenzyloxycarbonyl\tC8H7O2\r\n110\tT\tTritium\t[3H]",vx);for(g=0;g<l.length;g++){o=wj(l[g],'\t');try{nn(dv,o[1],new $u(o[1],o[2],o[3],cv,dv))}catch(a){a=Wg(a);if(we(a,4)){Sj()}else throw Xg(a)}}}
var lw='object',mw='anonymous',nw='fnStack',ow={3:1},pw='Unknown',qw='boolean',rw='number',sw='string',tw=2147483647,uw='__java$exception',vw='For input string: "',ww='null',xw=-2147483648,yw='__noinit__',zw={3:1,7:1,9:1},Aw='true',Bw=65536,Cw=65535,Dw=10000,Ew=', length: ',Fw='fromIndex: ',Gw=', toIndex: ',Hw=4194303,Iw=1048575,Jw=524288,Kw=4194304,Lw=17592186044416,Mw=1000000000,Nw=-17592186044416,Ow='CSS1Compat',Pw={32:1,3:1},Qw=100000,Rw=1000000,Sw=10000000000,Tw=0.3010299956639812,Uw=4294967295,Vw=4294967296,Ww=1073741824,Xw={l:0,m:0,h:524288},Yw={12:1,40:1},Zw='_gwt_modCount',$w={39:1},_w={41:1,31:1},ax={3:1,63:1},bx={3:1,56:1},cx='delete',dx={3:1,12:1,34:1,30:1},ex='Error: minCount>maxCount',fx=4.9E-324,gx='\r\n',hx='monoisotopicMass',ix='percentage',jx=' - symbol: ',kx=' - mass: ',lx=' - percentage: ',mx='Cannot calculate unsaturation: this is a range formula',nx='The unsaturation is not clearly defined',ox='Cannot calculate mass: this is a range formula',px='The mass is not clearly defined',qx='Syntax error: bad fraction syntax: ',rx='Cannot calculate exact mass of a range formula',sx="Syntax error: the formula starts with ')': ",tx='Syntax error: bad isotope syntax',ux='mf',vx='[\r\n]+',wx='No isotopic distribution data',xx=5.4857990946E-4,yx='error',zx='groups',Ax='referenceVersion',Bx='options is null',Cx='isotopomers',Dx='typedResult',Ex='fwhm',Fx='threshold',Gx='gaussianWidth',Hx='defaultUnsaturationContribution',Ix='joiningAlgorithm',Jx='type',Kx='value',Lx='charge',Mx='unsaturation',Nx='jcamp',Ox='jcampLink',Px='jcampBaseURL',Qx='minUnsaturation',Rx='maxUnsaturation',Sx='integerUnsaturation',Tx='useUnsaturation',Ux='numberOfResultsOnly',Vx='mfRange',Wx='locale',Xx='default',Yx='user.agent';var _,Ah,vh,Vg=-1;Bh();Ch(1,null,{},eb);_.n=function fb(a){return this===a};_.o=function hb(){return this._};_.p=function jb(){return st(this)};_.q=function lb(){return fi(ib(this))+'@'+(kb(this)>>>0).toString(16)};_.equals=function(a){return this.n(a)};_.hashCode=function(){return this.p()};_.toString=function(){return this.q()};var fc;Ch(134,1,{});Ch(96,134,{},mc);_.u=function nc(a){var b={},j;var c=[];a[nw]=c;var d=arguments.callee.caller;while(d){var e=(gc(),d.name||(d.name=jc(d.toString())));c.push(e);var f=':'+e;var g=b[f];if(g){var h,i;for(h=0,i=g.length;h<i;h++){if(g[h]===d){return}}}(g||(b[f]=[])).push(d);d=d.caller}};_.v=function oc(a){var b,c,d,e;d=(gc(),a&&a[nw]?a[nw]:[]);c=d.length;e=Ed(tf,ow,33,c,0,1);for(b=0;b<c;b++){e[b]=new hj(d[b],null,-1)}return e};Ch(135,134,{});_.u=function qc(a){};_.w=function rc(a,b,c,d){return new hj(b,a+'@'+d,c<0?-1:c)};_.v=function sc(a){var b,c,d,e,f,g,h;e=(gc(),h=a.backingJsObject,h&&h.stack?h.stack.split('\n'):[]);f=Ed(tf,ow,33,0,0,1);b=0;d=e.length;if(d==0){return f}g=pc(this,e[0]);oj(g.d,mw)||(f[b++]=g);for(c=1;c<d;c++){f[b++]=pc(this,e[c])}return f};Ch(97,135,{},tc);_.w=function uc(a,b,c,d){return new hj(b,a,-1)};var qe,re,se;qe={3:1,90:1,12:1};var Sh;Ch(69,1,{},gi);_.D=function hi(a){var b;b=new gi;b.e=4;a>1?(b.c=ni(this,a-1)):(b.c=this);return b};_.F=function mi(){ei(this);return this.b};_.G=function oi(){return fi(this)};_.H=function qi(){ei(this);return this.i};_.I=function si(){return (this.e&4)!=0};_.J=function ti(){return (this.e&1)!=0};_.q=function wi(){return ((this.e&2)!=0?'interface ':(this.e&1)!=0?'':'class ')+(ei(this),this.k)};_.e=0;_.g=0;var di=1;Ch(49,1,{3:1,49:1});var yi;re={3:1,12:1,72:1,49:1};Ch(9,1,{3:1,9:1});
_.r=function sb(a){return new $wnd.Error(a)};_.s=function ub(){return this.f};_.t=function vb(){var a,b,c;c=this.f==null?null:this.f.replace(new $wnd.RegExp('\n','g'),' ');b=(a=fi(this._),c==null?a:a+': '+c);qb(this,tb(this.r(b)));hc(this)};_.q=function xb(){return rb(this,this.s())};_.backingJsObject=yw;_.j=true;Ch(7,9,zw);Ch(21,49,{3:1,12:1,21:1,49:1},Pi);_.C=function Ri(a){return Qi(this.a,a.a)};_.n=function Si(a){return we(a,21)&&a.a==this.a};_.p=function Ti(){return this.a};_.q=function Wi(){return ''+this.a};_.a=0;Ch(11,7,zw,Ab);Ch(46,11,zw,Bb);Ch(45,46,zw,cj,dj,ej);_.r=function fj(a){return new $wnd.TypeError(a)};se={3:1,70:1,12:1,2:1};var rt=0;var tt,ut=0,vt;var rf=ji(1);var Je=ji(0);var Qe=ji(134);var Ne=ji(96);var Pe=ji(135);var Oe=ji(97);var df=ji(90);var ef=ji(69);var qf=ji(49);var ff=ji(72);var yf=ji(9);var hf=ji(7);var mf=ji(21);var sf=ji(11);var nf=ji(46);var of=ji(45);var xf=ji(2);Ch(98,46,zw);var Le=ji(98);Ch(52,98,{52:1,3:1,7:1,9:1},Fb);_.s=function Gb(){Eb(this);return this.c};var Cb;var Ie=ji(52);var Kb;Ch(118,1,{});var Ke=ji(118);var Ob=0,Pb=0,Qb=-1;Ch(111,118,{},cc);var $b;var Me=ji(111);Ch(136,1,{});_.B=function vc(){return null};var Ye=ji(136);Ch(68,136,{68:1},zc,Ac);_.n=function Bc(a){if(!we(a,68)){return false}return Hb(this.a,a.a)};_.A=function Cc(){return Fc};_.p=function Dc(){return Ib(this.a)};_.q=function Ec(){var a,b,c;c=new Oj('[');for(b=0,a=this.a.length;b<a;b++){b>0&&(c.a+=',',c);Jj(c,wc(this,b))}c.a+=']';return c.a};var Re=ji(68);Ch(87,136,{},Jc);_.A=function Kc(){return Mc};_.q=function Lc(){return Th(),''+this.a};_.a=false;var Gc,Hc;var Se=ji(87);Ch(113,11,zw,Nc);var Te=ji(113);Ch(110,136,{},Qc);_.A=function Rc(){return Tc};_.q=function Sc(){return ww};var Oc;var Ue=ji(110);Ch(8,136,{8:1},Uc);_.n=function Vc(a){if(!we(a,8)){return false}return this.a==a.a};_.A=function Wc(){return Zc};_.p=function Xc(){return De(nt(this.a))};_.q=function Yc(){return this.a+''};_.a=0;var Ve=ji(8);Ch(59,136,{59:1},dd,ed);_.n=function fd(a){if(!we(a,59)){return false}return Hb(this.a,a.a)};_.A=function gd(){return kd};_.p=function hd(){return Ib(this.a)};_.q=function jd(){var a,b,c,d,e,f;f=new Oj('{');a=true;e=$c(this,Ed(xf,ow,2,0,6,1));for(c=0,d=e.length;c<d;++c){b=e[c];a?(a=false):(f.a+=', ',f);Kj(f,Mb(b));f.a+=':';Jj(f,_c(this,b))}f.a+='}';return f.a};var We=ji(59);var ld;Ch(10,136,{10:1},td);_.n=function ud(a){if(!we(a,10)){return false}return oj(this.a,a.a)};_.A=function vd(){return zd};_.p=function wd(){return yt(this.a)};_.B=function xd(){return this};_.q=function yd(){return Mb(this.a)};var Xe=ji(10);var Jd;var le,me,ne,oe;Ch(120,1,{});var $e=ji(120);Ch(119,120,{});var Ze=ji(119);Ch(71,119,{},Kh);var _e=ji(71);Ch(48,1,{70:1});_.q=function Mh(){return this.a};var af=ji(48);Ch(44,11,zw,Nh);var bf=ji(44);Ch(36,11,zw,Oh,Ph);var lf=ji(36);Ch(88,36,zw,Qh,Rh);var cf=ji(88);Ch(34,1,{3:1,12:1,34:1});_.C=function Gi(a){return this.b-a.b};_.compareTo=function Fi(a){return this.b-a.b};_.equals=function Hi(a){return this===a};_.n=function(a){return this.equals(a)};_.hashCode=function Ii(){return st(this)};_.p=function(){return this.hashCode()};_.name=function Ji(){return this.a!=null?this.a:''+this.b};_.ordinal=function Ki(){return this.b};_.toString=function Li(){return this.a!=null?this.a:''+this.b};_.q=function(){return this.toString()};_.b=0;var gf=ji(34);Ch(50,11,zw,Mi);var jf=ji(50);Ch(99,11,zw,Ni);var kf=ji(99);var Yi;Ch(20,50,{3:1,7:1,20:1,9:1},gj);var pf=ji(20);Ch(33,1,{3:1,33:1},hj);_.n=function ij(a){var b;if(we(a,33)){b=a;return this.c==b.c&&dr(this.d,b.d)&&dr(this.a,b.a)&&dr(this.b,b.b)}return false};_.p=function jj(){return fq(Hd(Ad(rf,1),ow,1,5,[Xi(this.c),this.a,this.d,this.b]))};_.q=function kj(){return this.a+'.'+this.d+'('+(this.b!=null?this.b:'Unknown Source')+(this.c>=0?':'+this.c:'')+')'};_.c=0;var tf=ji(33);Ch(35,48,{70:1},Fj,Gj);var uf=ji(35);Ch(28,48,{70:1},Mj,Nj,Oj);var vf=ji(28);Ch(100,36,zw,Pj);var wf=ji(100);Ch(160,1,{});var Qj,Rj;Ch(27,11,zw,Uj,Vj);var zf=ji(27);Ch(16,49,{3:1,12:1,49:1,16:1},jk,kk,lk,mk);_.C=function pk(a){return dk(this,a)};_.n=function sk(a){var b;if(this===a){return true}if(we(a,16)){b=a;return this.e==b.e&&dk(this,b)==0}return false};_.p=function tk(){var a;if(this.b!=0){return this.b}if(this.a<54){a=dh(this.f);this.b=sh(Zg(a,-1));this.b=33*this.b+sh(Zg(nh(a,32),-1));this.b=17*this.b+De(this.e);return this.b}this.b=17*Kk(this.c)+De(this.e);return this.b};_.q=function vk(){return ik(this)};_.a=0;_.b=0;_.d=0;_.e=0;_.f=0;var Wj,Xj,Yj,Zj,$j,_j,ak,bk;var Af=ji(16);Ch(5,49,{3:1,12:1,49:1,5:1},Rk,Sk,Tk,Uk,Vk,Wk);_.C=function Yk(a){return Ek(this,a)};_.n=function Zk(a){return Hk(this,a)};_.p=function _k(){return Kk(this)};_.q=function bl(){return pl(this,0)};_.b=-2;_.c=0;_.d=0;_.e=0;var xk,yk,zk,Ak,Bk,Ck;var Bf=ji(5);var kl,ll;var Dl,El,Fl;Ch(26,34,{3:1,12:1,34:1,26:1},$l);var Rl,Sl,Tl,Ul,Vl,Wl,Xl,Yl;var Cf=ki(26,_l);Ch(40,1,Yw);_.C=function am(a){return nj(this.a,a.a)};_.n=function bm(a){var b;if(a===this){return true}if(!we(a,40)){return false}b=a;return oj(this.a,b.a)};_.p=function cm(){return yt(this.a)};_.q=function dm(){return this.a};var Df=ji(40);Ch(140,1,{});var Ff=ji(140);Ch(141,140,{});var Gf=ji(141);Ch(114,141,{},km);_.b=0;_.c=0;var fm;var Ef=ji(114);Ch(132,1,{});_.add=function ym(a){throw Xg(new Vj('Add not supported on this collection'))};_.addAll=function zm(a){return sm(this,a)};_.clear=function Am(){var a;for(a=this.K();a.O();){a.P();a.Q()}};_.contains=function Bm(a){return tm(this,a,false)};_.containsAll=function Cm(a){return um(this,a)};_.isEmpty=function Dm(){return this.size()==0};_.remove=function Em(a){return tm(this,a,true)};_.removeAll=function Fm(a){return vm(this,a)};_.retainAll=function Gm(a){var b,c,d;ht(a);b=false;for(c=this.K();c.O();){d=c.P();if(!a.contains(d)){c.Q();b=true}}return b};_.toArray=function Hm(){return this.L(Ed(rf,ow,1,this.size(),5,1))};_.L=function Im(a){return wm(this,a)};_.q=function Jm(){return xm(this)};var Hf=ji(132);Ch(131,1,{56:1});_.getOrDefault=function Vm(a,b){var c;return c=this.get(a),c==null&&!this.containsKey(a)?b:c};_.putIfAbsent=function _m(a,b){var c;return c=this.get(a),c!=null?c:this.put(a,b)};_.replace=function bn(a,b){return this.containsKey(a)?this.put(a,b):null};_.clear=function Nm(){this.N().clear()};_.M=function Om(a){return Km(this,a)};_.containsKey=function Pm(a){return !!Lm(this,a,false)};_.containsValue=function Qm(a){var b,c,d;for(c=this.N().K();c.O();){b=c.P();d=b.T();if(Ce(a)===Ce(d)||a!=null&&gb(a,d)){return true}}return false};_.n=function Rm(a){var b,c,d;if(a===this){return true}if(!we(a,56)){return false}d=a;if(this.size()!=d.size()){return false}for(c=d.N().K();c.O();){b=c.P();if(!this.M(b)){return false}}return true};_.get=function Sm(a){return Um(Lm(this,a,false))};_.p=function Wm(){return lq(this.N())};_.isEmpty=function Xm(){return this.size()==0};_.keySet=function Ym(){return new po(this)};_.put=function Zm(a,b){throw Xg(new Vj('Put not supported on this map'))};_.putAll=function $m(a){var b,c;ht(a);for(c=a.N().K();c.O();){b=c.P();this.put(b.S(),b.T())}};_.remove=function an(a){return Um(Lm(this,a,true))};_.size=function cn(){return this.N().size()};_.q=function dn(){var a,b,c;c=new Hr('{','}');for(b=this.N().K();b.O();){a=b.P();Gr(c,Mm(this,a.S())+'='+Mm(this,a.T()))}return !c.a?c.c:c.e.length==0?c.a.a:c.a.a+(''+c.e)};_.values=function en(){return new zo(this)};var Xf=ji(131);Ch(91,131,{56:1});_.clear=function rn(){pn(this)};_.containsKey=function sn(a){return fn(this,a)};_.containsValue=function tn(a){return gn(this,a)};_.N=function un(){return new Dn(this)};_.get=function vn(a){return jn(this,a)};_.put=function wn(a,b){return mn(this,a,b)};_.remove=function xn(a){return on(this,a)};_.size=function yn(){return qn(this)};var Kf=ji(91);Ch(133,132,$w);_.n=function zn(a){var b;if(a===this){return true}if(!we(a,39)){return false}b=a;if(b.size()!=this.size()){return false}return um(this,b)};_.p=function An(){return lq(this)};_.removeAll=function Bn(a){var b,c,d,e;ht(a);e=this.size();if(e<a.size()){for(b=this.K();b.O();){c=b.P();a.contains(c)&&b.Q()}}else{for(d=a.K();d.O();){c=d.P();this.remove(c)}}return e!=this.size()};var ag=ji(133);Ch(92,133,$w,Dn);_.clear=function En(){pn(this.a)};_.contains=function Fn(a){return Cn(this,a)};_.K=function Gn(){return new Kn(this.a)};_.remove=function Hn(a){var b;if(Cn(this,a)){b=a.S();on(this.a,b);return true}return false};_.size=function In(){return qn(this.a)};var Jf=ji(92);Ch(93,1,{},Kn);_.P=function Mn(){var a;return sq(this.e,this),ft(this.b),this.c=this.a,a=this.a.P(),this.b=Jn(this),a};_.O=function Ln(){return this.b};_.Q=function Nn(){var a;lt(!!this.c);sq(this.e,this);this.c.Q();this.c=null;this.b=Jn(this);a=this.e[Zw];this[Zw]=a};_.b=false;var If=ji(93);Ch(139,132,{63:1});_.addAtIndex=function On(a,b){throw Xg(new Vj('Add not supported on this list'))};_.add=function Pn(a){this.addAtIndex(this.size(),a);return true};_.addAllAtIndex=function Qn(a,b){var c,d,e;ht(b);c=false;for(e=b.K();e.O();){d=e.P();this.addAtIndex(a++,d);c=true}return c};_.clear=function Rn(){this.R(0,this.size())};_.n=function Sn(a){var b,c,d,e,f;if(a===this){return true}if(!we(a,63)){return false}f=a;if(this.size()!=f.size()){return false}e=f.K();for(c=this.K();c.O();){b=c.P();d=e.P();if(!(Ce(b)===Ce(d)||b!=null&&gb(b,d))){return false}}return true};_.p=function Tn(){return mq(this)};_.indexOf=function Un(a){var b,c;for(b=0,c=this.size();b<c;++b){if(dr(a,this.getAtIndex(b))){return b}}return -1};_.K=function Vn(){return new co(this)};_.lastIndexOf=function Wn(a){var b;for(b=this.size()-1;b>-1;--b){if(dr(a,this.getAtIndex(b))){return b}}return -1};_.removeAtIndex=function Xn(a){throw Xg(new Vj('Remove not supported on this list'))};_.R=function Yn(a,b){var c,d;d=new ho(this,a);for(c=a;c<b;++c){ft(d.a<d.c.size());d.c.getAtIndex(d.b=d.a++);bo(d)}};_.setAtIndex=function Zn(a,b){throw Xg(new Vj('Set not supported on this list'))};_.subList=function $n(a,b){return new jo(this,a,b)};var Of=ji(139);Ch(81,1,{},co);_.O=function eo(){return _n(this)};_.P=function fo(){return ao(this)};_.Q=function go(){bo(this)};_.a=0;_.b=-1;var Lf=ji(81);Ch(82,81,{},ho);_.Q=function io(){bo(this)};var Mf=ji(82);Ch(83,139,{63:1},jo);_.addAtIndex=function ko(a,b){jt(a,this.b);this.c.addAtIndex(this.a+a,b);++this.b};_.getAtIndex=function lo(a){gt(a,this.b);return this.c.getAtIndex(this.a+a)};_.removeAtIndex=function mo(a){var b;gt(a,this.b);b=this.c.removeAtIndex(this.a+a);--this.b;return b};_.setAtIndex=function no(a,b){gt(a,this.b);return this.c.setAtIndex(this.a+a,b)};_.size=function oo(){return this.b};_.a=0;_.b=0;var Nf=ji(83);Ch(58,133,$w,po);_.clear=function qo(){this.a.clear()};_.contains=function ro(a){return this.a.containsKey(a)};_.K=function so(){var a;return a=this.a.N().K(),new vo(a)};_.remove=function to(a){if(this.a.containsKey(a)){this.a.remove(a);return true}return false};_.size=function uo(){return this.a.size()};var Qf=ji(58);Ch(73,1,{},vo);_.O=function wo(){return this.a.O()};_.P=function xo(){var a;return a=this.a.P(),a.S()};_.Q=function yo(){this.a.Q()};var Pf=ji(73);Ch(24,132,{},zo);_.clear=function Ao(){this.a.clear()};_.contains=function Bo(a){return this.a.containsValue(a)};_.K=function Co(){var a;return a=this.a.N().K(),new Eo(a)};_.size=function Do(){return this.a.size()};var Sf=ji(24);Ch(25,1,{},Eo);_.O=function Fo(){return this.a.O()};_.P=function Go(){var a;return a=this.a.P(),a.T()};_.Q=function Ho(){this.a.Q()};var Rf=ji(25);Ch(41,1,_w);_.n=function Ko(a){var b;if(!we(a,31)){return false}b=a;return dr(this.c,b.S())&&dr(this.d,b.T())};_.S=function Lo(){return this.c};_.T=function Mo(){return this.d};_.p=function No(){return er(this.c)^er(this.d)};_.U=function Oo(a){return Io(this,a)};_.q=function Po(){return this.c+'='+this.d};var Tf=ji(41);Ch(51,41,{41:1,51:1,31:1},Qo);var Uf=ji(51);Ch(94,41,_w,Ro);_.U=function So(a){throw Xg(new Uj)};var Vf=ji(94);Ch(137,1,{31:1});_.n=function To(a){var b;if(!we(a,31)){return false}b=a;return dr(this.b.value[0],b.S())&&dr(Zq(this),b.T())};_.p=function Uo(){return er(this.b.value[0])^er(Zq(this))};_.q=function Vo(){return this.b.value[0]+'='+Zq(this)};var Wf=ji(137);Ch(138,131,{56:1});_.M=function $o(a){return Wo(this,a)};_.containsKey=function _o(a){return Xo(this,a)};_.N=function ap(){return new ep(this)};_.get=function bp(a){return Um(this.W(a))};_.keySet=function dp(){return new jp(this)};var _f=ji(138);Ch(80,133,$w,ep);_.contains=function fp(a){return we(a,31)&&Wo(this.b,a)};_.K=function gp(){return this.b.V()};_.remove=function hp(a){var b;if(we(a,31)){b=a;return this.b.X(b)}return false};_.size=function ip(){return this.b.size()};var Yf=ji(80);Ch(13,133,$w,jp);_.clear=function kp(){this.a.clear()};_.contains=function lp(a){return Xo(this.a,a)};_.K=function mp(){var a;return a=this.a.N().b.V(),new pp(a)};_.remove=function np(a){if(Xo(this.a,a)){this.a.remove(a);return true}return false};_.size=function op(){return this.a.size()};var $f=ji(13);Ch(14,1,{},pp);_.O=function qp(){return _n(this.a.a)};_.P=function rp(){var a;return a=is(this.a),a.S()};_.Q=function sp(){js(this.a)};var Zf=ji(14);Ch(67,139,ax,Ip,Jp);_.addAtIndex=function Kp(a,b){up(this,a,b)};_.add=function Lp(a){return vp(this,a)};_.addAllAtIndex=function Mp(a,b){return wp(this,a,b)};_.addAll=function Np(a){return xp(this,a)};_.clear=function Op(){this.a=Ed(rf,ow,1,0,5,1)};_.contains=function Pp(a){return zp(this,a,0)!=-1};_.getAtIndex=function Qp(a){return yp(this,a)};_.indexOf=function Rp(a){return zp(this,a,0)};_.isEmpty=function Sp(){return this.a.length==0};_.K=function Tp(){return new bq(this)};_.lastIndexOf=function Up(a){return Ap(this,a)};_.removeAtIndex=function Vp(a){return Cp(this,a)};_.remove=function Wp(a){var b;b=zp(this,a,0);if(b==-1){return false}Cp(this,b);return true};_.R=function Xp(a,b){Dp(this,a,b)};_.setAtIndex=function Yp(a,b){return Ep(this,a,b)};_.size=function Zp(){return this.a.length};_.toArray=function $p(){return Gp(this)};_.L=function _p(a){return Hp(this,a)};var cg=ji(67);Ch(22,1,{},bq);_.O=function cq(){return this.a<this.c.a.length};_.P=function dq(){return aq(this)};_.Q=function eq(){lt(this.b!=-1);Cp(this.c,this.a=this.b);this.b=-1};_.a=0;_.b=-1;var bg=ji(22);var nq;Ch(112,1,ow,pq);_.Y=function qq(a,b){return ht(a),Wh(a,(ht(b),b))};_.n=function rq(a){return this===a};var dg=ji(112);Ch(117,11,zw,uq);var eg=ji(117);Ch(116,11,zw,vq);var fg=ji(116);Ch(23,91,bx,xq);var gg=ji(23);Ch(109,1,{},Dq);_.K=function Eq(){return new Fq(this)};_.c=0;var ig=ji(109);Ch(86,1,{},Fq);_.P=function Hq(){return this.d=this.a[this.c++],this.d};_.O=function Gq(){var a;if(this.c<this.a.length){return true}a=this.b.next();if(!a.done){this.a=a.value[1];this.c=0;return true}return false};_.Q=function Iq(){Cq(this.e,this.d.S());this.c!=0&&--this.c};_.c=0;_.d=null;var hg=ji(86);var Jq;Ch(101,1,{},Tq);_.K=function Uq(){return new Vq(this)};_.c=0;_.d=0;var lg=ji(101);Ch(77,1,{},Vq);_.P=function Xq(){return this.c=this.a,this.a=this.b.next(),new $q(this.d,this.c,this.d.d)};_.O=function Wq(){return !this.a.done};_.Q=function Yq(){Sq(this.d,this.c.value[0])};var jg=ji(77);Ch(102,137,{31:1},$q);_.S=function _q(){return this.b.value[0]};_.T=function ar(){return Zq(this)};_.U=function br(a){return Rq(this.a,this.b.value[0],a)};_.c=0;var kg=ji(102);Ch(89,11,zw,cr);var mg=ji(89);Ch(84,139,ax,gr);_.addAtIndex=function hr(a,b){lr(a,this.a.a.length+1);up(this.a,a,b)};_.add=function ir(a){return fr(this,a)};_.addAllAtIndex=function jr(a,b){lr(a,this.a.a.length+1);return wp(this.a,a,b)};_.addAll=function kr(a){return xp(this.a,a)};_.clear=function mr(){this.a.a=Ed(rf,ow,1,0,5,1)};_.contains=function nr(a){return zp(this.a,a,0)!=-1};_.containsAll=function or(a){return um(this.a,a)};_.getAtIndex=function pr(a){return lr(a,this.a.a.length),yp(this.a,a)};_.indexOf=function qr(a){return zp(this.a,a,0)};_.isEmpty=function rr(){return this.a.a.length==0};_.K=function sr(){return new bq(this.a)};_.lastIndexOf=function tr(a){return Ap(this.a,a)};_.removeAtIndex=function ur(a){return lr(a,this.a.a.length),Cp(this.a,a)};_.removeAll=function vr(a){return vm(this.a,a)};_.R=function wr(a,b){Dp(this.a,a,b)};_.setAtIndex=function xr(a,b){lr(a,this.a.a.length);return Ep(this.a,a,b)};_.size=function yr(){return this.a.a.length};_.subList=function zr(a,b){return new jo(this.a,a,b)};_.toArray=function Ar(){return Gp(this.a)};_.L=function Br(a){return Hp(this.a,a)};_.q=function Cr(){return xm(this.a)};var zg=ji(84);Ch(115,84,ax,Fr);var ng=ji(115);Ch(74,1,{},Hr);_.q=function Ir(){return !this.a?this.c:this.e.length==0?this.a.a:this.a.a+(''+this.e)};var og=ji(74);Ch(62,138,bx,$r,_r);_.clear=function as(){Jr(this)};_.V=function bs(){return new ks(this)};_.N=function cs(){return new ps(this)};_.W=function ds(a){return Kr(this,a)};_.put=function es(a,b){return Tr(this,a,b)};_.remove=function fs(a){return Ur(this,a)};_.X=function gs(a){return Vr(this,a)};_.size=function hs(){return this.d};_.d=0;var xg=ji(62);Ch(79,1,{},ks);_.P=function ns(){return is(this)};_.O=function ms(){return _n(this.a)};_.Q=function os(){js(this)};var pg=ji(79);Ch(15,80,$w,ps);_.clear=function qs(){Jr(this.a)};var qg=ji(15);Ch(43,51,{41:1,51:1,31:1,43:1},rs);_.b=false;var rg=ji(43);Ch(66,1,{},ss);_.q=function ts(){return 'State: mv='+this.c+' value='+this.d+' done='+this.a+' found='+this.b};_.a=false;_.b=false;_.c=false;var sg=ji(66);Ch(30,34,dx,zs);_.Z=function As(){return false};_.$=function Bs(){return false};var us,vs,ws,xs;var wg=ki(30,Cs);Ch(105,30,dx,Ds);_.$=function Es(){return true};var tg=ki(105,null);Ch(106,30,dx,Fs);_.Z=function Gs(){return true};_.$=function Hs(){return true};var ug=ki(106,null);Ch(107,30,dx,Is);_.Z=function Js(){return true};var vg=ki(107,null);Ch(61,133,{3:1,39:1},Ls,Ms);_.add=function Ns(a){return Ks(this,a)};_.clear=function Os(){Jr(this.g)};_.contains=function Ps(a){return Xo(this.g,a)};_.K=function Qs(){var a;return a=(new jp(this.g)).a.N().b.V(),new pp(a)};_.remove=function Rs(a){return Ur(this.g,a)!=null};_.size=function Ss(){return this.g.d};var yg=ji(61);Ch(75,40,Yw);var Cg=ji(75);Ch(76,75,Yw,_s);var Ag=ji(76);Ch(95,75,Yw,ct);var Bg=ji(95);Ch(37,1,{12:1,37:1},Gt,Ht,It,Jt);_.C=function Kt(a){if(!we(a,37))throw Xg(new Vj('Not comparable: Atoms and '+fi(ib(a))));return At(this,a)};_.n=function Lt(a){return Bt(this,a)};_.p=function Mt(){var a;a=this.a+this.i;return yt(a)};_.q=function Nt(){return Ft(this,null)};_.a=0;_.b=0;_.c=0;_.d=0;_.e=0;_.f=0;_.g=0;var Dg=ji(37);Ch(38,62,bx,au);_.q=function bu(){return Zt(this)};_.a=Dw;var Fg=ji(38);Ch(108,1,{},cu);_.n=function eu(a){return this===a};_.Y=function du(a,b){return -Wh(a.T(),b.T())};var Eg=ji(108);Ch(53,1,{12:1,53:1},ku,lu,mu);_.C=function nu(a){Sj();return mj(this.g,a.g)};_.n=function ou(a){var b;if(this===a)return true;if(Gg!=ib(a))return false;b=a;if(oj(this.g,b.g))return true;return false};_.q=function pu(){return ju(this)};_.a=0;_.c=0;_.d=0;_.f=0;var Gg=ji(53);Ch(85,1,{12:1,85:1},tu);_.C=function uu(a){return Oi(new Pi(this.a.c-this.a.d),Xi(a.a.c-a.a.d))};_.q=function vu(){return this.a.i+' - '+this.a.d+' to '+this.a.c+' - current: '+this.b};_.b=0;_.c=0;_.d=0;var Hg=ji(85);Ch(54,1,{},Gu,Hu);_.q=function Iu(){return Fu(this)};_.c=false;_.e=false;var Jg=ji(54);Ch(29,61,{3:1,39:1,29:1},Tu,Uu,Vu);_.q=function Wu(){return Su(this)};_.a=0;_.b='';_.e=false;_.f=0;var Ig=ji(29);Ch(60,1,{60:1},$u);var Kg=ji(60);Ch(42,1,{12:1,42:1},_u);_.C=function av(a){var b;if(we(a,42)){b=a;return this.c=b.c}else throw Xg(new Vj('Cannot compare Isotope to '+a))};_.q=function bv(){return 'Number: '+this.c+kx+this.b+lx+this.d+jx+this.a};_.b=0;_.c=0;_.d=0;var Lg=ji(42);var cv,dv;Ch(4,7,{3:1,7:1,9:1,4:1},gv);var Mg=ji(4);Ch(103,1,{},ov);_.a=0;_.b=0;_.e=null;_.f=0;var hv=1;var Pg=ji(103);Ch(55,1,{},xv,yv,zv);_.b=0;var Og=ji(55);Ch(104,1,{},Bv);_.Y=function Cv(a,b){return Av(this,a,b)};_.n=function Dv(a){return this===a};var Ng=ji(104);var Ev;Ch(78,1,{78:1},Jv);_.a=0;_.b=0;_.c=null;var Qg=ji(78);var Kv;Ch(130,1,{},Ov);var Rg=ji(130);Ch(65,1,{12:1,65:1},aw);_.C=function bw(a){return _v(this,a)};_.a=0;_.c=0;var Sg=ji(65);Ch(18,1,{},dw,ew,fw);var Tg=ji(18);Ch(17,1,{},jw);var Ug=ji(17);var Fe=li('C');var He=li('I');var Ee=li('B');var Ge=li('D');_=Fh('CI.Chemcalc',Ov);_.analyseMF=Qv;_.getInfo=Sv;_.mfFromMonoisotopicMass=Tv;Th();_=Fh('java.lang.Boolean');_.$isInstance=Uh;_=Fh('java.lang.CharSequence');_.$isInstance=Xh;_=Fh('java.lang.Comparable');_.$isInstance=xi;_=Fh('java.lang.Double');_.$isInstance=Ci;_=Fh('java.lang.Number');_.$isInstance=zi;_=Fh('java.lang.String');_.$isInstance=rj;_=Fh('java.lang.Throwable');_.of=wb;var kw=(Rb(),Ub);var gwtOnLoad=gwtOnLoad=yh;wh(Ih);zh('permProps',[[[Wx,Xx],[Yx,'gecko1_8']],[[Wx,Xx],[Yx,'ie10']],[[Wx,Xx],[Yx,'ie8']],[[Wx,Xx],[Yx,'ie9']],[[Wx,Xx],[Yx,'safari']]]);$sendStats('moduleStartup', 'moduleEvalEnd');gwtOnLoad(__gwtModuleFunction.__errFn, __gwtModuleFunction.__moduleName, __gwtModuleFunction.__moduleBase, __gwtModuleFunction.__softPermutationId,__gwtModuleFunction.__computePropValue);$sendStats('moduleStartup', 'end');$gwt && $gwt.permProps && __gwtModuleFunction.__moduleStartupDone($gwt.permProps);


        // End GWT code

        var toReturn = $wnd["CI"]["Chemcalc"];

        toReturn.version = '3.0.6';

        return toReturn;
    }

    var isBrowser, globalEnv, document;

    if (typeof window !== 'undefined') { // usual browser window
        isBrowser = true;
        globalEnv = window;
        document = window.document;
    } else if (typeof self !== 'undefined') { // Web Worker
        isBrowser = true;
        globalEnv = self;
        document = {};
    } else if (typeof global !== 'undefined') { // Node.js
        isBrowser = false;
        globalEnv = global;
        document = {};
    } else { // Other environment (example: CouchDB)
        isBrowser = false;
        globalEnv = root;
        document = {};
    }

    var fakeWindow;
    if (isBrowser && !true) {
        fakeWindow = globalEnv;
    } else {
        fakeWindow = {};
        fakeWindow.setTimeout = globalEnv.setTimeout ? globalEnv.setTimeout.bind(globalEnv) : noop;
        fakeWindow.clearTimeout = globalEnv.clearTimeout ? globalEnv.clearTimeout.bind(globalEnv) : noop;
        fakeWindow.setInterval = globalEnv.setInterval ? globalEnv.setInterval.bind(globalEnv) : noop;
        fakeWindow.clearInterval = globalEnv.clearInterval ? globalEnv.clearInterval.bind(globalEnv) : noop;
        // required since GWT 2.8.0
        fakeWindow.Error = globalEnv.Error;
        fakeWindow.Math = globalEnv.Math;
        fakeWindow.RegExp = globalEnv.RegExp;
        fakeWindow.TypeError = globalEnv.TypeError;
    }

    if (!fakeWindow.document) {
        fakeWindow.document = document;
    }

    var exportedApi = getExports(fakeWindow);

    if (typeof exports !== 'undefined') { // NodeJS
        fillExports(exportedApi, exports);
    } else if (typeof define === 'function' && define.amd) { // AMD
        define(function () {
            var exportsObj = {};
            fillExports(exportedApi, exportsObj);
            return exportsObj;
        });
    } else { // Global
        var path = ["CI","Chemcalc"];
        var l = path.length - 1;
        var obj = globalEnv;
        for (var i = 0; i < l; i++) {
            obj = obj[path[i]] || (obj[path[i]] = {});
        }
        obj[path[l]] = {};
        fillExports(exportedApi, obj[path[l]]);
    }

    function fillExports(obj, exports) {
        var keys = Object.keys(obj);
        for (var i = 0; i < keys.length; i++) {
            exports[keys[i]] = obj[keys[i]];
        }
    }

    function noop() {}

})(this);
