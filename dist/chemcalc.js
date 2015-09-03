/**
 * chemcalc - Analyse molecular formula
 * @version v3.0.6
 * @date 2015-09-03T07:03:35.477Z
 * @link http://www.chemcalc.org
 * @license BSD
*/
(function () {
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
function Qg(){}
function Lg(){}
function db(){}
function dd(){}
function hc(){}
function qc(){}
function qp(){}
function Xp(){}
function cq(){}
function eq(){}
function Hr(){}
function Hs(){}
function il(a){}
function yc(){tc()}
function sb(){mb(this)}
function Xo(){Oo(this)}
function Xh(a){this.a=a}
function Pc(a){this.a=a}
function Yc(a){this.a=a}
function hd(a){this.a=a}
function ud(a){this.a=a}
function fi(a){this.a=a}
function Ri(a){this.a=a}
function fj(a){this.a=a}
function qn(a){this.a=a}
function Nn(a){this.a=a}
function Sn(a){this.a=a}
function Wn(a){this.a=a}
function _n(a){this.a=a}
function In(a){this.c=a}
function Bo(a){this.a=a}
function Go(a){this.a=a}
function Lo(a){this.a=a}
function bu(a){this.a=a}
function Oc(){this.a=[]}
function pu(){this.nb()}
function Oh(){return Kb}
function Od(a){return a.a}
function nd(a){return a.a}
function zd(a){return a.a}
function Uc(a){return a.a}
function _c(a){return a.a}
function gd(){return null}
function Gd(){return null}
function bn(a){++a.b;up(a)}
function cn(a){--a.b;up(a)}
function bh(a,b){a.h=b}
function dh(a,b){a.l=b}
function eh(a,b){a.m=b}
function $h(){sb.call(this)}
function dj(){sb.call(this)}
function Bj(){sb.call(this)}
function xk(){sb.call(this)}
function vp(){sb.call(this)}
function wp(){sb.call(this)}
function Oq(){sb.call(this)}
function Cq(){mq.call(this)}
function Lq(){mq.call(this)}
function dr(){Sq.call(this)}
function ai(){$h.call(this)}
function Pp(){Hp.call(this)}
function Fs(){tr.call(this)}
function Xb(){Tb();Ub(this)}
function vb(){vb=Lg;ub=new db}
function cd(){cd=Lg;bd=new dd}
function ec(){ec=Lg;dc=new hc}
function pp(){pp=Lg;op=new qp}
function ku(){ku=Lg;ju=new zp}
function Gu(){this.a=new Oc}
function Mu(){this.a=new td}
function Sq(){this.a=new Xo}
function $r(){this.g=new tr}
function Hp(){this.a=this.$()}
function ad(a){tb.call(this,a)}
function Zh(a){tb.call(this,a)}
function _h(a){tb.call(this,a)}
function bi(a){tb.call(this,a)}
function cj(a){tb.call(this,a)}
function Cj(a){tb.call(this,a)}
function tb(a){rb.call(this,a)}
function Dj(a){cj.call(this,a)}
function nk(a){Xh.call(this,a)}
function uk(a){Xh.call(this,a)}
function yk(a){tb.call(this,a)}
function mk(){Xh.call(this,'')}
function sk(){Xh.call(this,'')}
function tk(){Xh.call(this,'')}
function td(){ud.call(this,{})}
function Fr(a){Bo.call(this,a)}
function wt(a){_r.call(this,a)}
function It(a){rb.call(this,a)}
function Xi(a){return isNaN(a)}
function lr(a){return !!a&&a.b}
function sj(a){return a<0?-a:a}
function fe(a){return a<<24>>24}
function Dd(a){return new hd(a)}
function Fd(a){return new Id(a)}
function Rd(a,b){return Di(a,b)}
function Jj(a,b){return a===b}
function wj(a,b){return a>b?a:b}
function xj(a,b){return a<b?a:b}
function Bp(b,a){return b.a[a]}
function Qh(a){return a.tM===Qg}
function qh(a,b){return !ph(a,b)}
function rh(a,b){return !oh(a,b)}
function mc(a,b){lc();kc.o(a,b)}
function lq(c,a,b){c.a[a]=b}
function lk(a,b){a.a+=b;return a}
function pk(a,b){a.a+=b;return a}
function qk(a,b){a.a+=b;return a}
function ui(a){ti(a);return a.k}
function _r(a){this.g=new ur(a)}
function mq(){this.a=this.eb()}
function rb(a){this.f=a;mb(this)}
function Mh(){Kh==null&&(Kh=[])}
function _p(){_p=Lg;$p=bq()}
function hk(){hk=Lg;ek={};gk={}}
function Qb(){Eb!=0&&(Eb=0);Hb=-1}
function rj(a){return a<=0?0-a:a}
function zr(a){return a.b=Gn(a.a)}
function Us(a){return a.a.e*a.a.c}
function Vs(a){return a.a.e*a.a.d}
function Fn(a){return a.a<a.c.G()}
function Ch(a){return a.l|a.m<<22}
function Cd(a){return Xc(),a?Wc:Vc}
function vo(a){return uo(a,fr(a))}
function vj(a){return Math.log(a)}
function tj(a){return Math.ceil(a)}
function Aj(a){return Math.sqrt(a)}
function ce(a){return be(a)&&Qh(a)}
function so(a,b){return !!a.X(b)}
function to(a,b){return Xm(a.X(b))}
function Rq(a,b){return Qo(a.a,b)}
function Cp(b,a){return b.a[a]||[]}
function Wm(a){return !a?null:a.c}
function tr(){ur.call(this,null)}
function Or(a,b){Zi.call(this,a,b)}
function Gm(a,b){Zi.call(this,a,b)}
function lo(a,b){eo.call(this,a,b)}
function eo(a,b){this.c=a;this.d=b}
function Zi(a,b){this.a=a;this.b=b}
function yq(a,b){this.a=a;this.b=b}
function vq(a,b){this.b=a;this.c=b}
function tp(a,b){a._gwt_modCount=b}
function dp(a,b,c){a.splice(b,c)}
function ej(a,b){return gj(a.a,b.a)}
function $d(a){return !be(a)&&Qh(a)}
function uj(a){return Math.floor(a)}
function zj(a){return Math.round(a)}
function Xm(a){return !a?null:a.U()}
function ee(a){return a==null?null:a}
function Lj(b,a){return b.indexOf(a)}
function Pb(a){$wnd.clearTimeout(a)}
function Cl(a){hl();Dl.call(this,a)}
function mo(a){eo.call(this,a.c,a.d)}
function Sr(){Or.call(this,'Head',1)}
function Xr(){Or.call(this,'Tail',3)}
function Oo(a){a.b=Sd($e,Ru,1,0,3,1)}
function Rt(a){a.b=a.d.b;a.c=new Fs}
function Dc(a){if(!a){throw new Oq}}
function Ic(a){if(!a){throw new dj}}
function cr(a,b){Qo(a.a,b);return b}
function ok(a,b){a.a+=Zd(b);return a}
function ep(a,b,c,d){a.splice(b,c,d)}
function kh(a,b){return Vg(a,b,false)}
function Tg(a){return Ug(a.l,a.m,a.h)}
function Qq(a){return a!=null?jb(a):0}
function gj(a,b){return a<b?-1:a>b?1:0}
function gi(a,b){return a==b?0:a?1:-1}
function yj(a,b){return Math.pow(a,b)}
function be(a){return Array.isArray(a)}
function fh(a){return a.l+a.m*Vu+a.h*Wu}
function Nb(a){return a.$H||(a.$H=++Fb)}
function Vj(a){return Sd(ef,Ru,2,a,4,1)}
function Ij(b,a){return b.charCodeAt(a)}
function Wj(a,b,c){return a.substr(b,c)}
function Ug(a,b,c){return {l:a,m:b,h:c}}
function Ju(a,b,c){rd(a.a,b,c);return a}
function sh(a,b){Vg(a,b,true);return Rg}
function yp(a){var b;b=jb(a);return ~~b}
function Jg(a){var b=Ig;return Og(b[a])}
function Jq(a){this.a=a;Xo.call(this)}
function Vp(a){this.a=a;Xo.call(this)}
function Rk(a){this.e=5;Lk(this,Fc(a))}
function Br(a){Cr.call(this,a,(Nr(),Jr))}
function Ur(){Or.call(this,'Range',2)}
function Rh(){$wnd.setTimeout(Nu(Sh))}
function Vo(a){return Pd(a.b,a.b.length)}
function Rj(a,b){return Wj(a,b,a.length-b)}
function Sj(a,b,c){return a.substr(b,c-b)}
function Mj(b,a){return b.lastIndexOf(a)}
function an(a,b){return a.c.Z(b)||a.a.Z(b)}
function Qi(a,b){return _d(b,7)&&b.a==a.a}
function pi(a){return a>=56320&&a<=57343}
function de(a){return typeof a==='string'}
function nj(a,b){return (a>>>0).toString(b)}
function pc(a){lc();return parseInt(a)||-1}
function ti(a){if(a.k!=null){return}Hi(a)}
function Rn(a){var b;b=vn(a.a);return b.T()}
function $n(a){var b;b=vn(a.a);return b.U()}
function Ko(a){var b;b=zr(a.a);return b.T()}
function co(a,b){var c;c=a.d;a.d=b;return c}
function mb(a){a.g=null;mc(a,a.f);return a}
function Ar(a){Hn(a.a);or(a.c,a.b);a.b=null}
function Ac(a,b){if(!a){throw new bi(''+b)}}
function Bc(a,b){if(!a){throw new cj(''+b)}}
function Th(a,b){this.e=b;this.f=a;mb(this)}
function Zt(a,b){this.d=a;Rt(this);this.c=b}
function gt(a,b,c){ht.call(this,a,b,c,true)}
function Ps(a,b,c,d){Os.call(this,a,0,b,c,d)}
function Ib(a,b,c){return a.apply(b,c);var d}
function $j(a,b){return de(a)?Zj(a,b):a.t(b)}
function Nj(c,a,b){return c.lastIndexOf(a,b)}
function Zd(a){return String.fromCharCode(a)}
function ck(a){return String.fromCharCode(a)}
function Wi(a){return !isFinite(a)&&!isNaN(a)}
function ae(a){return a!=null&&!de(a)&&!Qh(a)}
function Ai(){var a;a=xi(null);a.e=2;return a}
function yi(a){var b;b=xi(a);Li(a,b);return b}
function Qo(a,b){a.b[a.b.length]=b;return true}
function Ro(a,b){Ec(b,a.b.length);return a.b[b]}
function Ao(a){if(!a){throw new Oq}return a.c}
function Fc(a){if(a==null){throw new Bj}return a}
function Gc(a,b){if(a==null){throw new Cj(''+b)}}
function Id(a){if(a==null){throw new Bj}this.a=a}
function Vq(a,b){if(a<0||a>=b){throw new ai}}
function Fu(a,b){Mc(a.a,a.a.a.length,b);return a}
function Bi(a){var b;b=xi(a);b.j=a;b.e=1;return b}
function Pk(a){this.f=a;this.e=5;this.a=Sk(a)}
function qj(){qj=Lg;pj=Sd(We,Ru,19,256,0,1)}
function tc(){tc=Lg;Error.stackTraceLimit=64}
function ut(a,b,c){vt.call(this,a,b,c,1,true)}
function Td(a,b,c,d,e,f){return Ud(a,b,c,d,e,0,f)}
function Po(a,b,c){Hc(b,a.b.length);ep(a.b,b,0,c)}
function _m(a,b){return de(b)?fn(a,b):!!Dp(a.a,b)}
function Rm(a,b){return b===a?'(this Map)':''+b}
function gs(a){return a.a!=0?'['+a.a+a.i+']':a.i}
function cb(a){return ui(hb(a))+'@'+nj(jb(a),16)}
function vn(a){return sp(a.c,a),Dc(un(a)),a.a.O()}
function Zr(a,b){return mr(a.g,b,(ei(),ci))==null}
function Mg(a){return a instanceof Array?a[0]:null}
function dn(a,b){return de(b)?en(a,b):Xm(Dp(a.a,b))}
function lh(a,b){return a.l==b.l&&a.m==b.m&&a.h==b.h}
function vh(a,b){return a.l!=b.l||a.m!=b.m||a.h!=b.h}
function Yt(a,b){b<1.0E-10&&(b=1.0E-10);a.b=b}
function Xt(a,b,c,d){us(a.c,d);ts(a.c,c);ys(a.c,b)}
function nr(a,b){var c;c=new Hr;pr(a,b,c);return c.d}
function Mc(a,b,c){var d;d=Lc(a,b);Nc(a,b,c);return d}
function rd(a,b,c){var d;d=pd(a,b);sd(a,b,c);return d}
function ic(a,b){!a&&(a=[]);a[a.length]=b;return a}
function Zj(a,b){if(a==b){return 0}return a<b?-1:1}
function Ap(c,a){var b=c.a;return b[a]||(b[a]=[])}
function up(a){var b;b=a._gwt_modCount|0;tp(a,b+1)}
function Ep(a){return Object.getOwnPropertyNames(a.a)}
function iq(a){return Object.getOwnPropertyNames(a.a)}
function hb(a){return de(a)?ef:$d(a)?a.cZ:ce(a)?a.cZ:me}
function gn(a,b,c){return de(b)?hn(a,b,c):Fp(a.a,b,c)}
function jh(a,b){return {l:a.l&b.l,m:a.m&b.m,h:a.h&b.h}}
function wh(a,b){return {l:a.l|b.l,m:a.m|b.m,h:a.h|b.h}}
function Eh(a,b){return {l:a.l^b.l,m:a.m^b.m,h:a.h^b.h}}
function xp(a,b){return ee(a)===ee(b)||a!=null&&fb(a,b)}
function Pq(a,b){return ee(a)===ee(b)||a!=null&&fb(a,b)}
function uo(a,b){!!b&&or(a,b);return !b?null:new mo(b)}
function Gn(a){Dc(a.a<a.c.G());return a.c.R(a.b=a.a++)}
function Hn(a){Ic(a.b!=-1);a.c.S(a.b);a.a=a.b;a.b=-1}
function Lk(a,b){a.c=b;a.a=Ml(b);a.a<54&&(a.f=Bh(ql(b)))}
function rk(a,b,c){a.a=Sj(a.a,0,b)+c+Rj(a.a,b);return a}
function fu(a){if(fn(du,a)){return en(du,a)}return null}
function pd(a,b){if(b==null){throw new Bj}return qd(a,b)}
function Cc(a,b){if(!a){throw new cj(Jc('%s > %s',b))}}
function kk(){if(fk==256){ek=gk;gk={};fk=0}++fk}
function ei(){ei=Lg;ci=new fi(false);di=new fi(true)}
function Xc(){Xc=Lg;Vc=new Yc(false);Wc=new Yc(true)}
function Fo(a){var b;b=(new Fr(a.a)).a.W();return new Lo(b)}
function zi(a,b){var c;c=xi(a);Li(a,c);c.e=b?8:0;return c}
function Ln(a){In.call(this,a);Hc(0,a.b.length);this.a=0}
function Ct(a,b,c,d){this.c=a;this.b=b;this.d=c;this.a=d}
function Du(a,b,c,d){this.a=a;this.c=b;this.b=d;this.d=c}
function zl(a,b,c){hl();il(this);this.e=a;this.d=b;this.a=c}
function ur(a){this.c=null;!a&&(a=(pp(),pp(),op));this.b=a}
function en(a,b){return b==null?Xm(Dp(a.a,null)):a.c.gb(b)}
function hn(a,b,c){return b==null?Fp(a.a,null,c):a.c.jb(b,c)}
function Oj(b,a){return (new RegExp('^('+a+')$')).test(b)}
function tu(){return qu(vu(new zp,(Ht(),Ht(),Gt),(null,Ft)))}
function ge(a){return ~~Math.max(Math.min(a,Ou),-2147483648)}
function ni(a){return null!=String.fromCharCode(a).match(/\d/)}
function vk(a){_h.call(this,'String index out of range: '+a)}
function Ob(a){$wnd.setTimeout(function(){throw a},0)}
function Sh(){var a;a=Vh();if(!Jj('safari',a)){throw new Uh(a)}}
function Mn(a){var b;b=new wn((new qn(a.a)).a);return new Sn(b)}
function Vn(a){var b;b=new wn((new qn(a.a)).a);return new _n(b)}
function rr(a,b){var c;c=1-b;a.a[c]=sr(a.a[c],c);return sr(a,b)}
function dk(a,b,c){var d;d=b+c;Uj(a.length,b,d);return Yj(a,b,d)}
function Bb(a,b){var c=Ab[a.charCodeAt(0)];return c==null?a:c}
function Di(a,b){var c=a.a=a.a||[];return c[b]||(c[b]=a.u(b))}
function _d(a,b){return a!=null&&(de(a)&&!!Yd[b]||a.cM&&!!a.cM[b])}
function jb(a){return de(a)?jk(a):$d(a)?a.hC():ce(a)?Nb(a):Nb(a)}
function oi(a){return null!=String.fromCharCode(a).match(/[A-Z]/i)}
function sm(a,b){mm();return b<lm.length?rm(a,lm[b]):rl(a,vm(b))}
function Pj(c,a,b){b=Xj(b);return c.replace(RegExp(a,'g'),b)}
function Rr(){Nr();return Vd(Rd(ig,1),Ru,26,0,[Jr,Kr,Lr,Mr])}
function Fi(a){if(a.C()){return null}var b=a.j;var c=Ig[b];return c}
function Og(a){function b(){}
;b.prototype=a||{};return new b}
function _b(a,b,c,d,e,f,g){a+=e+g+(b^c^d);a=a<<f|a>>>-f;return a+b}
function Wh(a,b,c,d){b==null&&(b='null');a.a+=b.substr(c,d-c)}
function Ej(a,b,c){this.a='Unknown';this.d=a;this.b=b;this.c=c}
function Mp(a){this.f=a;this.d=Ep(this.f);this.a=Sd($f,Ru,27,0,0,1)}
function kl(a){while(a.d>0&&a.a[--a.d]==0);a.a[a.d++]==0&&(a.e=0)}
function ob(a){var b,c;b=ui(a.cZ);c=a.n();return c!=null?b+': '+c:b}
function ro(a,b){var c,d;c=b.T();d=a.X(c);return !!d&&Pq(d.d,b.U())}
function Lb(a,b,c){var d;d=Jb();try{return Ib(a,b,c)}finally{Mb(d)}}
function Kb(b){return function(){return Lb(b,this,arguments);var a}}
function fb(a,b){return de(a)?Jj(a,b):$d(a)?a.eQ(b):ce(a)?a===b:a===b}
function sd(d,a,b){if(b){var c=b.r();d.a[a]=c(b)}else{delete d.a[a]}}
function Nc(d,a,b){if(b){var c=b.r();b=c(b)}else{b=undefined}d.a[a]=b}
function sp(a,b){if(b._gwt_modCount!=a._gwt_modCount){throw new vp}}
function Hc(a,b){if(a<0||a>b){throw new _h('Index: '+a+', Size: '+b)}}
function Ec(a,b){if(a<0||a>=b){throw new _h('Index: '+a+', Size: '+b)}}
function tl(a,b){if(b==0||a.e==0){return a}return b>0?Nl(a,b):Ql(a,-b)}
function vl(a,b){if(b==0||a.e==0){return a}return b>0?Ql(a,b):Nl(a,-b)}
function nl(a,b){var c;for(c=a.d-1;c>=0&&a.a[c]==b[c];c--);return c<0}
function Uo(a,b,c){var d;d=(Ec(b,a.b.length),a.b[b]);a.b[b]=c;return d}
function hm(a,b,c,d){var e;e=Sd(ke,Ru,0,b,7,1);im(e,a,b,c,d);return e}
function cm(a,b,c,d){var e;e=Sd(ke,Ru,0,b+1,7,1);dm(e,a,b,c,d);return e}
function Sd(a,b,c,d,e,f){var g;g=Wd(e,d);Vd(Rd(a,f),b,c,e,g);return g}
function ac(a,b,c,d,e,f,g){a+=e+g+(c^(b|~d));a=a<<f|a>>>-f;return a+b}
function $b(a,b,c,d,e,f,g){a+=e+g+(c^d&(b^c));a=a<<f|a>>>-f;return a+b}
function Zb(a,b,c,d,e,f,g){a+=e+g+(d^b&(c^d));a=a<<f|a>>>-f;return a+b}
function Sg(a){var b,c,d;b=a&Su;c=a>>22&Su;d=a<0?Tu:0;return Ug(b,c,d)}
function or(a,b){var c;c=new Hr;c.c=true;c.d=b.U();return pr(a,b.T(),c)}
function To(a,b){var c;c=(Ec(b,a.b.length),a.b[b]);dp(a.b,b,1);return c}
function Gr(a,b){lo.call(this,a,b);this.a=Sd(dg,Ru,40,2,0,1);this.b=true}
function Qt(a,b,c,d){this.g=new zp;this.c=a;this.d=b;this.b=c;this.a=d}
function xb(a){vb();this.e=null;this.f=null;this.a='';this.b=a;this.a=''}
function fn(a,b){return b==null?!!Dp(a.a,null):!(a.c.gb(b)===undefined)}
function Lu(a,b,c){return c==null?Ju(a,b,(cd(),cd(),bd)):Ju(a,b,new Id(c))}
function Hm(){Fm();return Vd(Rd(kf,1),Ru,24,0,[Em,ym,xm,zm,Cm,Am,Bm,Dm])}
function rl(a,b){if(b.e==0){return gl}if(a.e==0){return gl}return mm(),nm(a,b)}
function zb(){if(Date.now){return Date.now()}return (new Date).getTime()}
function Yo(){Oo(this);Bc(true,'Initial capacity must not be negative')}
function Mb(a){a&&gc((ec(),dc));--Eb;if(a){if(Hb!=-1){Pb(Hb);Hb=-1}}}
function Nr(){Nr=Lg;Jr=new Or('All',0);Kr=new Sr;Lr=new Ur;Mr=new Xr}
function Jh(){Jh=Lg;Fh=Ug(Su,Su,524287);Gh=Ug(0,0,Uu);Hh=nh(1);nh(2);Ih=nh(0)}
function Qk(a,b){this.e=b;this.a=Tk(a);this.a<54?(this.f=Bh(a)):(this.c=Ll(a))}
function Os(a,b,c,d,e){this.b=new zp;this.c=a;this.d=b;this.g=c;this.e=d;this.a=e}
function yl(a,b){hl();il(this);this.e=a;this.d=1;this.a=Vd(Rd(ke,1),Ru,0,7,[b])}
function Hu(a){var b;Gu.call(this);for(b=0;b<a.length;b++){Fu(this,new hd(a[b]))}}
function su(a){var b=new zp;if(a){for(var c in a){b.M(c,String(a[c]))}}return b}
function er(a){var b,c;if(!a.c){return null}c=a.c;while(b=c.a[0]){c=b}return c}
function fr(a){var b,c;if(!a.c){return null}c=a.c;while(b=c.a[1]){c=b}return c}
function fc(a){var b,c;if(a.a){c=null;do{b=a.a;a.a=null;c=jc(b,c)}while(a.a);a.a=c}}
function gc(a){var b,c;if(a.b){c=null;do{b=a.b;a.b=null;c=jc(b,c)}while(a.b);a.b=c}}
function Cu(a,b){var c;c=Si(rj(a.a),rj(b.a));if(c!=0)return c;return Zj(a.b,b.b)}
function So(a,b,c){for(;c<a.b.length;++c){if(Pq(b,a.b[c])){return c}}return -1}
function kq(a,b){var c;c=a.a[b];if(!(c===undefined)){delete a.a[b];cn(a.b)}return c}
function Lc(d,a){var b=d.a[a];var c=(Bd(),Ad)[typeof b];return c?c(b):Hd(typeof b)}
function Li(a,b){var c;if(!a){return}b.j=a;var d=Fi(b);if(!d){Ig[a]=[b];return}d.cZ=b}
function hq(d,a){var b=d.a;for(var c in b){if(d.fb(a,b[c])){return true}}return false}
function al(a){if(lh(a,{l:0,m:0,h:0})&&5<Fk.length){return Fk[5]}return new Qk(a,5)}
function Mk(a){if(a.a<54){return a.f<0?-1:a.f>0?1:0}return (!a.c&&(a.c=Kl(a.f)),a.c).e}
function Xs(a){this.a=a;if(a.d>a.c)throw new It('Error: minCount>maxCount')}
function Dl(a){Fc(a);if(!a.length){throw new Dj('Zero length BigInteger')}Il(this,a)}
function qi(a){return String.fromCharCode(a).toLowerCase().charCodeAt(0)==a&&oi(a)}
function ri(a){return String.fromCharCode(a).toUpperCase().charCodeAt(0)==a&&oi(a)}
function wn(a){this.c=a;this.b=this.c.c._();this.a=this.b;tp(this,a._gwt_modCount)}
function Iu(a){var b;Gu.call(this);for(b=0;b<a.length;b++){Fu(this,(new Hu(a[b])).a)}}
function Lh(){Mh();var a=Kh;for(var b=0;b<arguments.length;b++){a.push(arguments[b])}}
function od(e,a){var b=e.a;var c=0;for(var d in b){b.hasOwnProperty(d)&&(a[c++]=d)}return a}
function lj(a){var b,c;if(a==0){return 32}else{c=0;for(b=1;(b&a)==0;b<<=1){++c}return c}}
function xi(a){var b;b=new vi;b.k='Class$'+(a?'S'+a:''+b.g);b.b=b.k;b.i=b.k;return b}
function sr(a,b){var c,d;c=1-b;d=a.a[c];a.a[c]=d.a[b];d.a[b]=a;a.b=true;d.b=false;return d}
function es(a,b){var c;if(_d(b,32)){c=b;if(Jj(a.i,c.i)&&a.a==c.a)return true}return false}
function ru(a,b){var c;c=su(b);c.c.jb('mf',a);return qu(wu(c,(Ht(),Ht(),Gt),(null,Ft)))}
function np(a,b){var c,d;d=a.a.b.length;for(c=0;c<d;c++){Vq(c,a.a.b.length);Uo(a.a,c,b[c])}}
function Pl(a,b,c){var d,e,f;d=0;for(e=0;e<c;e++){f=b[e];a[e]=f<<1|d;d=f>>>31}d!=0&&(a[c]=d)}
function lp(a){var b,c,d;d=0;for(c=a.D();c.N();){b=c.O();d=d+(b!=null?jb(b):0);d=~~d}return d}
function Cr(a,b){var c;this.c=a;c=new Xo;ir(a,c,b,a.c,null,false,null,false);this.a=new Ln(c)}
function ks(a){this.i=a.i;this.b=a.b;this.d=a.d;this.c=a.c;this.e=a.e;this.f=a.f;this.a=a.a}
function fs(a){if(a.d==a.c)return a.d;throw new tb('Atoms.getCount(): undefined (min!=max)')}
function qu(a){if('error' in a.a.a){throw new xb(pd(a.a,'error').s().a)}else{return a.a.a}}
function Ot(a){if(a.e.c.d==0)throw new tb('No isotopic distribution data');return Ds(a.e.c)}
function Pt(a){if(a.e.c.d==0)throw new tb('No isotopic distribution data');return Es(a.e.c)}
function Ut(a,b){if(a.d.f==0){return Vt(a,b)}else if(a.d.f==Jt){return Wt(a,b)}return Vt(a,b)}
function un(a){if(a.a.N()){return true}if(a.a!=a.b){return false}a.a=a.c.a._();return a.a.N()}
function ol(a){var b;if(a.b==-2){if(a.e==0){b=-1}else{for(b=0;a.a[b]==0;b++);}a.b=b}return a.b}
function Km(a,b){var c,d;Fc(b);for(d=b.D();d.N();){c=d.O();if(!a.F(c)){return false}}return true}
function ct(b){try{Pi(b);return true}catch(a){a=Hg(a);if(_d(a,20)){return false}else throw Gg(a)}}
function Ku(a,b){return !b?Ju(a,'unsaturation',(cd(),cd(),bd)):Ju(a,'unsaturation',new hd(b.a))}
function Uj(a,b,c){if(b<0){throw new vk(b)}if(c<b){throw new vk(c-b)}if(c>a){throw new vk(c)}}
function Fg(b,c){if(b&&typeof b=='object'){try{b.__gwt$exception=c}catch(a){}}}
function Ph(a,b){typeof window==='object'&&typeof window['$gwt']==='object'&&(window['$gwt'][a]=b)}
function jq(a,b,c){var d;d=a.a[b];d===undefined&&bn(a.b);lq(a,b,c===undefined?null:c);return d}
function mu(a){ku();var b,c;b='61-'+a;if(fn(ju,b))return en(ju,b);c=new iu(a);hn(ju,b,c);return c}
function mt(a,b){var c,d;for(d=Fo(new Go(a.g));Fn(d.a.a);){c=Ko(d);if(Jj(c.i,b))return c}return null}
function lt(a){var b,c,d;d=nt(a);for(c=Fo(new Go(a.g));Fn(c.a.a);){b=Ko(c);b.g=rt(b.b*fs(b)*100/d)}}
function us(a,b){var c,d,e;c=(new Fr(a)).a.W();while(Fn(c.a)){d=c.b=Gn(c.a);e=d.U().a;e<b&&Ar(c)}}
function uh(a){var b,c,d;b=~a.l+1&Su;c=~a.m+(b==0?1:0)&Su;d=~a.h+(b==0&&c==0?1:0)&Tu;return Ug(b,c,d)}
function br(a){var b;b=a.a.b.length;if(b>0){return Vq(b-1,a.a.b.length),a.a.S(b-1)}else{throw new wp}}
function oc(a){var b=/function(?:\s+([\w$]+))?\s*\(/;var c=b.exec(a);return c&&c[1]||'anonymous'}
function Si(a,b){if(a<b){return -1}if(a>b){return 1}if(a==b){return 0}return isNaN(a)?isNaN(b)?0:1:-1}
function Bh(a){if(lh(a,(Jh(),Gh))){return Xu}if(!ph(a,Ih)){return -fh(uh(a))}return a.l+a.m*Vu+a.h*Wu}
function Ok(a){Hk();if(Wi(a)||isNaN(a)){throw new Dj('Infinite or NaN')}Jk(this,a.toPrecision(20))}
function zp(){_p();this.a=$p.cb();this.a.b=this;this.c=$p.db();this.c.b=this;this.b=0;up(this)}
function Bd(){Bd=Lg;Ad={'boolean':Cd,number:Dd,string:Fd,object:Ed,'function':Ed,undefined:Gd}}
function lc(){lc=Lg;var a,b;b=!(!!Error.stackTraceLimit||'stack' in new Error);a=new yc;kc=b?new qc:a}
function mr(a,b,c){var d,e;d=new Gr(b,c);e=new Hr;a.c=kr(a,a.c,d,e);e.b||++a.d;a.c.b=false;return e.d}
function _g(a){var b,c;c=kj(a.h);if(c==32){b=kj(a.m);return b==32?kj(a.l)+32:b+20-10}else{return c-12}}
function Qd(a,b){var c;c=Wd(0,b);Vd(hb(a),a.cM,a.__elementTypeId$,a.__elementTypeCategory$,c);return c}
function Pd(a,b){var c;c=a.slice(0,b);Vd(hb(a),a.cM,a.__elementTypeId$,a.__elementTypeCategory$,c);return c}
function Vd(a,b,c,d,e){e.cZ=a;e.cM=b;e.tM=Qg;e.__elementTypeId$=c;e.__elementTypeCategory$=d;return e}
function Xg(a,b,c,d,e){var f;f=yh(a,b);c&&$g(f);if(e){a=Zg(a,b);d?(Rg=uh(a)):(Rg=Ug(a.l,a.m,a.h))}return f}
function Im(a,b){var c,d,e;Fc(b);c=false;for(e=b.D();e.N();){d=e.O();c=c|mr(a.g,d,(ei(),ci))==null}return c}
function gp(a){var b,c,d,e;e=1;for(c=0,d=a.length;c<d;++c){b=a[c];e=31*e+(b!=null?jb(b):0);e=~~e}return e}
function Gg(a){var b;if(_d(a,38)){b=a;if(ee(b.b)!==ee((vb(),ub))){return ee(b.b)===ee(ub)?null:b.b}}return a}
function Hg(a){var b;if(_d(a,9)){return a}b=a&&a.__gwt$exception;if(!b){b=new xb(a);mc(b,a);Fg(a,b)}return b}
function rt(a){var b;b=isNaN(a*cv)?a*cv:Wi(a*cv)?a*cv:a*cv==0?a*cv:Bh(mh(Math.round(a*cv)));return b/cv}
function lb(a){return de(a)?a:$d(a)?a.tS():ce(a)?cb(a):a.toString?a.toString():'[JavaScriptObject]'}
function ih(a,b){var c,d,e;c=a.l+b.l;d=a.m+b.m+(c>>22);e=a.h+b.h+(d>>22);return {l:c&Su,m:d&Su,h:e&Tu}}
function Ah(a,b){var c,d,e;c=a.l-b.l;d=a.m-b.m+(c>>22);e=a.h-b.h+(d>>22);return {l:c&Su,m:d&Su,h:e&Tu}}
function $g(a){var b,c,d;b=~a.l+1&Su;c=~a.m+(b==0?1:0)&Su;d=~a.h+(b==0&&c==0?1:0)&Tu;dh(a,b);eh(a,c);bh(a,d)}
function uu(a,b){var c;c=su(b);c.c.jb('monoisotopicMass',''+a);return qu(zu(c,(Ht(),Ht(),Gt),(null,Ft)))}
function ml(a,b){var c;if(a===b){return true}if(_d(b,5)){c=b;return a.e==c.e&&a.d==c.d&&nl(a,c.a)}return false}
function Kl(a){hl();if(a<0){if(a!=-1){return new xl(-1,-a)}return bl}else return a<=10?dl[ge(a)]:new xl(1,a)}
function Hd(a){Bd();throw new ad("Unexpected typeof result '"+a+"'; please report this bug to the GWT team")}
function js(a,b,c,d){if(c>d)throw new It('Error: minCount>maxCount');this.i=a;this.b=b;this.d=c;this.c=d}
function vi(){this.g=si++;this.k=null;this.i=null;this.f=null;this.d=null;this.b=null;this.j=null;this.a=null}
function _t(a,b,c){this.d=a;Rt(this);this.a=c;Tt(this,b);if(b.a!=0){ss(this.c,-b.a*nv);ws(this.c,1/sj(b.a))}}
function Ws(a,b,c,d,e,f){a.d=wj(ge(uj((c-f-b-e)/a.a.e)),a.a.d);a.c=xj(ge(tj((c+f-b-d)/a.a.e)),a.a.c);a.b=a.d-1}
function pl(a){var b;if(a.c!=0){return a.c}for(b=0;b<a.a.length;b++){a.c=a.c*33+(a.a[b]&-1)}a.c=a.c*a.e;return a.c}
function mi(a){if(a>=48&&a<58){return a-48}if(a>=97&&a<97){return a-97+10}if(a>=65&&a<65){return a-65+10}return -1}
function Zk(a){var b=Gk;!b&&(b=Gk=/^[+-]?\d*$/i);if(b.test(a)){return parseInt(a,10)}else{return Number.NaN}}
function jk(a){hk();var b=':'+a;var c=gk[b];if(c!=null){return c}c=ek[b];c==null&&(c=ik(a));kk();return gk[b]=c}
function Jm(a,b){var c,d;for(d=a.D();d.N();){c=d.O();if(ee(b)===ee(c)||b!=null&&fb(b,c)){return true}}return false}
function oj(a){var b,c;if(a>-129&&a<128){b=a+128;c=(qj(),pj)[b];!c&&(c=pj[b]=new fj(a));return c}return new fj(a)}
function ul(a){var b,c,d,e;return a.e==0?a:(b=a.d,c=b+1,d=Sd(ke,Ru,0,c,7,1),Pl(d,a.a,b),e=new zl(a.e,c,d),kl(e),e)}
function om(a,b,c,d,e){if(b==0||d==0){return}b==1?(e[d]=qm(e,c,d,a[0])):d==1?(e[b]=qm(e,a,b,c[0])):pm(a,c,e,b,d)}
function ip(a,b,c,d,e,f,g,h){var i;i=c;while(f<g){i>=d||b<c&&h.Y(a[b],a[i])<=0?(e[f++]=a[b++]):(e[f++]=a[i++])}}
function hp(a,b,c,d){var e,f,g;for(e=b+1;e<c;++e){for(f=e;f>b&&d.Y(a[f-1],a[f])>0;--f){g=a[f];a[f]=a[f-1];a[f-1]=g}}}
function Yb(a,b){var c,d;for(c=0,d=0;d<16;d++){b[d]=a[c++]&255|(a[c++]&255)<<8|(a[c++]&255)<<16|(a[c++]&255)<<24}}
function xs(a,b){var c,d,e,f;c=(new Fr(a)).a.W();while(Fn(c.a)){d=c.b=Gn(c.a);e=d.T();f=d.U();mr(a,e,new Ri(f.a*b))}}
function Qm(a,b){var c,d,e;for(d=a.K().D();d.N();){c=d.O();e=c.T();if(ee(b)===ee(e)||b!=null&&fb(b,e)){return c}}return null}
function As(a){var b,c;b=new Ok(a);c=Nk(Kk(b,(Fm(),Fm(),Cm)));if(c.indexOf('.')!=-1){return Pj(c,'\\.?0+$','')}return c}
function Wo(a,b){var c,d;d=a.b.length;b.length<d&&(b=Qd(b,d));for(c=0;c<d;++c){b[c]=a.b[c]}b.length>d&&(b[d]=null);return b}
function st(a){var b,c,d;if(a.g.d==0)return '';d=new nk('');for(c=Fo(new Go(a.g));Fn(c.a.a);){b=Ko(c);lk(d,hs(b))}return d.a}
function Js(a){var b,c,d;if(a.b.b==0){return}d=0;for(c=Vn(new Wn(a.b));un(c.a);){b=$n(c);d+=b.b*b.d/100}if(d==0)return;a.c=d}
function Ml(a){var b,c,d;if(a.e==0){return 0}b=a.d<<5;c=a.a[a.d-1];if(a.e<0){d=ol(a);if(d==a.d-1){--c;c=~~c}}b-=kj(c);return b}
function Gl(a){var b,c,d;if(a<fl.length){return fl[a]}c=a>>5;b=a&31;d=Sd(ke,Ru,0,c+1,7,1);d[c]=1<<b;return new zl(1,c+1,d)}
function Lp(a){if(a.c<a.a.length){return true}if(a.b<a.d.length-1){a.a=Bp(a.f,a.d[++a.b]);a.c=0;return true}return false}
function Ls(a){if(a.d==0)throw new tb('Exact mass of '+a.g+' is unknown. Run calculateExactMass() first.');return a.d}
function Kj(b,a){if(a==null){return false}if(b==a){return true}return b.length==a.length&&b.toLowerCase()==a.toLowerCase()}
function Ng(){!Array.isArray&&(Array.isArray=function(a){return Object.prototype.toString.call(a)==='[object Array]'})}
function Wg(a,b){if(a.h==Uu&&a.m==0&&a.l==0){b&&(Rg=Ug(0,0,0));return Tg((Jh(),Hh))}b&&(Rg=Ug(a.l,a.m,a.h));return Ug(0,0,0)}
function Nl(a,b){var c,d,e,f;c=b>>5;b&=31;e=a.d+c+(b==0?0:1);d=Sd(ke,Ru,0,e,7,1);Ol(d,a.a,c,b);f=new zl(a.e,e,d);kl(f);return f}
function gr(a,b){var c,d,e;d=null;e=a.c;while(e){c=a.b.Y(b,e.c);if(c==0){return e}if(c>=0){e=e.a[1]}else{d=e;e=e.a[0]}}return d}
function hr(a,b){var c,d,e;d=null;e=a.c;while(e){c=a.b.Y(b,e.c);if(c==0){return e}if(c<=0){e=e.a[0]}else{d=e;e=e.a[1]}}return d}
function nc(a){var b,c,d;b='mc';d=xj(a.length,5);for(c=0;c<d;c++){if(Jj(a[c].d,b)){return a.length>=c+1&&a.splice(0,c+1),a}}return a}
function mp(a){var b,c,d;d=1;for(c=a.D();c.a<c.c.G();){b=(Dc(c.a<c.c.G()),c.c.R(c.b=c.a++));d=31*d+(b!=null?jb(b):0);d=~~d}return d}
function Mt(a){var b,c,d;b=mv;for(d=new In(a.d.d);d.a<d.c.G();){c=(Dc(d.a<d.c.G()),d.c.R(d.b=d.a++));c.f>b&&(b=c.f)}Xt(a.e,b,a.b,a.a)}
function vs(a){var b,c,d,e,f,g;b=mv;f=0;c=(new Fr(a)).a.W();while(Fn(c.a)){d=c.b=Gn(c.a);e=d.T();g=d.U().a;if(g>b){b=g;f=e.a}}return f}
function nb(a){var b,c,d,e,f;for(e=a;e;e=e.e){for(b=(e.g==null&&(e.g=(lc(),f=kc.p(e),nc(f))),e.g),c=0,d=b.length;c<d;++c);}}
function Dp(a,b){var c,d,e,f;for(d=Cp(a,b==null?'0':''+yp(b)),e=0,f=d.length;e<f;++e){c=d[e];if(xp(b,c.T())){return c}}return null}
function nh(a){var b,c;if(a>-129&&a<128){b=a+128;hh==null&&(hh=Sd(Fe,Ru,141,256,0,1));c=hh[b];!c&&(c=hh[b]=Sg(a));return c}return Sg(a)}
function Jb(){var a;if(Eb!=0){a=zb();if(a-Gb>2000){Gb=a;Hb=$wnd.setTimeout(Qb,10)}}if(Eb++==0){fc((ec(),dc));return true}return false}
function Tj(a){if(a.length==0||a[0]>' '&&a[a.length-1]>' '){return a}return a.replace(/^[\u0000-\u0020]*|[\u0000-\u0020]*$/g,'')}
function Tk(a){var b;qh(a,{l:0,m:0,h:0})&&(a={l:~a.l&Su,m:~a.m&Su,h:~a.h&Tu});return 64-(b=Ch(yh(a,32)),b!=0?kj(b):kj(Ch(a))+32)}
function li(a,b,c){var d,e;d=Ij(a,b++);if(d>=55296&&d<=56319&&b<c&&pi(e=a.charCodeAt(b))){return Zu+((d&1023)<<10)+(e&1023)}return d}
function Yj(a,b,c){var d='';for(var e=b;e<c;){var f=Math.min(e+10000,c);d+=String.fromCharCode.apply(null,a.slice(e,f));e=f}return d}
function Ki(a,b){var c=0;while(!b[c]||b[c]==''){c++}var d=b[c++];for(;c<b.length;c++){if(!b[c]||b[c]==''){continue}d+=a+b[c]}return d}
function Kt(a,b,c){var d,e,f;f=lu(Pt(a),b,c);e=new Fs;for(d=0;d<f.length;d++){mr(e,new Ri(f[d][0]),new Ri(f[d][1]))}a.e.c=e;a.e.c.a=cv}
function jl(a,b){if(a.e>b.e){return 1}if(a.e<b.e){return -1}if(a.d>b.d){return a.e}if(a.d<b.d){return -b.e}return a.e*em(a.a,b.a,a.d)}
function qd(f,a){var b=f.a;var c;a=String(a);b.hasOwnProperty(a)&&(c=b[a]);var d=(Bd(),Ad)[typeof c];var e=d?d(c):Hd(typeof c);return e}
function ql(a){var b;b=a.d>1?wh(xh(nh(a.a[1]),32),jh(nh(a.a[0]),{l:Su,m:1023,h:0})):jh(nh(a.a[0]),{l:Su,m:1023,h:0});return th(nh(a.e),b)}
function em(a,b,c){var d;for(d=c-1;d>=0&&a[d]==b[d];d--);return d<0?0:qh(jh(nh(a[d]),{l:Su,m:1023,h:0}),jh(nh(b[d]),{l:Su,m:1023,h:0}))?-1:1}
function xl(a,b){this.e=a;if(b<fv){this.d=1;this.a=Vd(Rd(ke,1),Ru,0,7,[~~b])}else{this.d=2;this.a=Vd(Rd(ke,1),Ru,0,7,[~~(b%fv),~~(b/fv)])}}
function Bl(a){hl();il(this);if(a.length==0){this.e=0;this.d=1;this.a=Vd(Rd(ke,1),Ru,0,7,[0])}else{this.e=1;this.d=a.length;this.a=a;kl(this)}}
function $s(a){var b,c,d,e;c='';b=new Xb;d=Rb(b,bk(a));for(e=0;e<5;e++){e==0?(c+=Zd(sj(d[0]%26)+65&_u)):(c+=Zd(sj(d[e]%26)+97&_u))}return c}
function ss(a,b){var c,d,e,f,g;d=new Fs;c=(new Fr(a)).a.W();while(Fn(c.a)){e=c.b=Gn(c.a);f=e.T();g=e.U();mr(d,new Ri(f.a+b),g);Ar(c)}rs(a,d)}
function ws(a,b){var c,d,e,f,g;d=new Fs;c=(new Fr(a)).a.W();while(Fn(c.a)){e=c.b=Gn(c.a);f=e.T();g=e.U();mr(d,new Ri(f.a*b),g);Ar(c)}rs(a,d)}
function rs(a,b){var c,d,e,f,g;e=(new Fr(b)).a.W();while(Fn(e.a)){c=e.b=Gn(e.a);f=c.T();g=c.U();d=to(a,f);!!d&&(g=new Ri(d.a+g.a));mr(a,f,g)}}
function bc(a,b){var c,d;for(c=0,d=0;c<4;c++){b[d++]=fe(a[c]&255);b[d++]=fe(a[c]>>>8&255);b[d++]=fe(a[c]>>>16&255);b[d++]=fe(a[c]>>>24&255)}}
function ak(a){var b,c;if(a>=Zu){b=55296+(a-Zu>>10&1023)&_u;c=56320+(a-Zu&1023)&_u;return ck(b)+ck(c)}else{return String.fromCharCode(a&_u)}}
function ht(a,b,c,d){this.a=b;this.b=c;this.d=new Yo;dt(this,a,d);if(this.d.b.length==0)throw new It('Cannot parse: empty formula: ->'+a+'<-')}
function ir(a,b,c,d,e,f,g,h){var i,j;if(!d){return}i=d.a[0];!!i&&ir(a,b,c,i,e,f,g,h);jr(a,c,d.c,e,f,g,h)&&b.Q(d);j=d.a[1];!!j&&ir(a,b,c,j,e,f,g,h)}
function Xj(a){var b;b=0;while(0<=(b=a.indexOf('\\',b))){a.charCodeAt(b+1)==36?(a=a.substr(0,b)+'$'+Rj(a,++b)):(a=a.substr(0,b)+Rj(a,++b))}return a}
function Pm(a,b){var c,d,e;c=b.T();e=b.U();d=a.L(c);if(!(ee(e)===ee(d)||e!=null&&fb(e,d))){return false}if(d==null&&!a.J(c)){return false}return true}
function jr(a,b,c,d,e,f,g){var h,i;if(b.lb()&&(h=a.b.Y(c,d),h<0||!e&&h==0)){return false}if(b.mb()&&(i=a.b.Y(c,f),i>0||!g&&i==0)){return false}return true}
function ms(a,b,c){if(b>c)throw new It('Error: minCount>maxCount');this.d=b;this.c=c;this.e=ot(a.a);this.f=pt(a.a);this.a=0;this.i=a.b;this.b=nt(a.a)}
function Zg(a,b){var c,d,e;if(b<=22){c=a.l&(1<<b)-1;d=e=0}else if(b<=44){c=a.l;d=a.m&(1<<b-22)-1;e=0}else{c=a.l;d=a.m;e=a.h&(1<<b-44)-1}return Ug(c,d,e)}
function yu(a){var b,c,d;d=Ll({l:1,m:0,h:0});for(c=new In(a.a);c.a<c.c.G();){b=(Dc(c.a<c.c.G()),c.c.R(c.b=c.a++));d=rl(d,Ll(nh(b.a.c-b.a.d+1)))}return d}
function zs(a){var b,c,d,e,f;e=~~(a.a/2);if(a.d<e)return;f=new _r(new Hs);Im(f,new Fr(a));c=0;for(d=Fo(new Go(f.g));Fn(d.a.a);){b=Ko(d);c++>e&&nr(a,b.T())}}
function nt(a){var b,c,d;if(a.e)throw new It('Cannot calculate mass of a range formula');d=0;for(c=Fo(new Go(a.g));Fn(c.a.a);){b=Ko(c);d+=b.b*fs(b)}return rt(d)}
function pt(a){var b,c,d;if(a.e)throw new It('Cannot calculate exact mass of a range formula');d=0;for(c=Fo(new Go(a.g));Fn(c.a.a);){b=Ko(c);d+=b.f*fs(b)}return d}
function qt(a){var b,c,d;if(a.e)throw new It('Cannot get the number of atoms: this is a range formula');d=0;for(c=Fo(new Go(a.g));Fn(c.a.a);){b=Ko(c);d+=fs(b)}return d}
function Lm(a){var b,c,d,e;e=new uk('[');b=false;for(d=a.D();d.N();){c=d.O();b?(e.a+=', ',e):(b=true);e.a+=c===a?'(this Collection)':''+c}e.a+=']';return e.a}
function Wk(a,b,c){var d,e,f,g,h;e=(h=a/b,h>0?uj(h):tj(h));f=a%b;g=Si(a*b,0);if(f!=0){d=Si((f<=0?0-f:f)*2,b<=0?0-b:b);e+=$k(ge(e)&1,g*(5+d),c)}return new Pk(e)}
function Ll(a){hl();if(qh(a,{l:0,m:0,h:0})){if(vh(a,{l:Su,m:Su,h:Tu})){return new Al(-1,uh(a))}return bl}else return rh(a,{l:10,m:0,h:0})?dl[Ch(a)]:new Al(1,a)}
function au(a,b,c){var d,e;d=b.a!=0?fs(b):yj(en(a.a.a,b.i).b.b-1,fs(b));e=c.a!=0?fs(c):yj(en(a.a.a,c.i).b.b-1,fs(c));if(d==e)return Si(b.b,c.b);return -Si(d,e)}
function gh(a,b){var c,d,e;e=a.h-b.h;if(e<0){return false}c=a.l-b.l;d=a.m-b.m+(c>>22);e+=d>>22;if(e<0){return false}dh(a,c&Su);eh(a,d&Su);bh(a,e&Tu);return true}
function Rb(a,b){var c,d;Vb(a,b,0,b.length);return c=cc(xh(a.b,3)),d=Sd(he,Ru,0,16,7,1),a.c>8?Vb(a,Sb,0,a.c-8):Vb(a,Sb,0,64+(a.c-8)),Vb(a,c,0,8),bc(a.d,d),Ub(a),d}
function $t(a,b,c){var d,e,f;this.d=a;Rt(this);this.a=c;d=b.b.b;Yt(this,a.b/(d*4));for(f=Vn(new Wn(b.b));un(f.a);){e=$n(f);mr(this.c,new Ri(e.b),new Ri(e.d/100))}}
function Ud(a,b,c,d,e,f,g){var h,i,j,k,l;k=e[f];j=f==g-1;h=j?d:0;l=Wd(h,k);Vd(Rd(a,g-f),b[f],c[f],h,l);if(!j){++f;for(i=0;i<k;++i){l[i]=Ud(a,b,c,d,e,f,g)}}return l}
function Nh(b,c,d,e){Mh();var f=Kh;$moduleName=c;$moduleBase=d;Eg=e;function g(){for(var a=0;a<f.length;a++){f[a]()}}
if(b){try{Nu(g)()}catch(a){b(c,a)}}else{Nu(g)()}}
function fm(a,b,c){var d,e;d=jh(nh(c),{l:Su,m:1023,h:0});for(e=0;vh(d,{l:0,m:0,h:0})&&e<b;e++){d=ih(d,jh(nh(a[e]),{l:Su,m:1023,h:0}));a[e]=Ch(d);d=yh(d,32)}return Ch(d)}
function um(a,b){mm();var c,d;d=(hl(),cl);c=a;for(;b>1;b>>=1){(b&1)!=0&&(d=rl(d,c));c.d==1?(c=rl(c,c)):(c=new Bl(wm(c.a,c.d,Sd(ke,Ru,0,c.d<<1,7,1))))}d=rl(d,c);return d}
function Fp(a,b,c){var d,e,f,g;d=Ap(a,b==null?'0':''+yp(b));for(f=0,g=d.length;f<g;++f){e=d[f];if(xp(b,e.T())){return e.V(c)}}d[d.length]=new lo(b,c);bn(a.b);return null}
function jp(a,b,c,d){var e,f,g,h;!d&&(d=(pp(),pp(),op));e=(f=(g=c-b,Cc(g>=0,Vd(Rd($e,1),Ru,1,3,[oj(b),oj(c)])),g),h=Qd(a,f),wk(a,b,h,0,xj(a.length-b,f)),h);kp(e,a,b,c,-b,d)}
function gu(a,b){eu();var c,d,e,f;f=2;for(d=Fo(new Go(a.g));Fn(d.a.a);){c=Ko(d);e=fu(c.i);if(!e){if(!b){return null}else{f+=b.a*fs(c)}}else{f+=e.a*fs(c)}}return new Ri(f/2)}
function Wd(a,b){var c=new Array(b);var d;switch(a){case 6:d={l:0,m:0,h:0};break;case 7:d=0;break;case 8:d=false;break;default:return c;}for(var e=0;e<b;++e){c[e]=d}return c}
function hs(a){var b;a.a!=0?(b='<sup>'+a.a+'<\/sup>'+a.i):(b=a.i);if(a.c==1&&a.d==1)return b;if(a.c==a.d)return b+'<sub>'+a.c+'<\/sub>';return b+'<sub>'+a.d+'-'+a.c+'<\/sub>'}
function Tb(){Tb=Lg;Sb=Vd(Rd(he,1),Ru,0,7,[-128,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0])}
function iu(a){var b,c,d;this.b=61;this.a=a;c=a/(2*Aj(2*vj(2)));this.c=Sd(je,av,0,61,7,1);for(b=0;b<61;b++){d=b-30;this.c[b]=1/(c*Aj(6.283185307179586))*Math.exp(-d*d/(2*c*c))}}
function xu(a,b,c){var d,e;for(d=0;d<a.a.b.length;d++){for(e=d+1;e<a.a.b.length;e++){b[d]=b[d]+Vs((Vq(e,a.a.b.length),Ro(a.a,e)));c[d]=c[d]+Us((Vq(e,a.a.b.length),Ro(a.a,e)))}}}
function Ub(a){a.a=Sd(he,Ru,0,64,7,1);a.d=Sd(ke,Ru,0,4,7,1);a.e=Sd(ke,Ru,0,16,7,1);a.d[0]=1732584193;a.d[1]=-271733879;a.d[2]=-1732584194;a.d[3]=271733878;a.b={l:0,m:0,h:0};a.c=64}
function Ol(a,b,c,d){var e,f,g;if(d==0){wk(b,0,a,c,a.length-c)}else{g=32-d;a[a.length-1]=0;for(f=a.length-1;f>c;f--){a[f]|=b[f-c-1]>>>g;a[f-1]=b[f-c-1]<<d}}for(e=0;e<c;e++){a[e]=0}}
function Sk(a){var b,c;if(a>-140737488355328&&a<140737488355328){if(a==0){return 0}b=a<0;b&&(a=-a);c=ge(uj(vj(a)/0.6931471805599453));(!b||a!=yj(2,c))&&++c;return c}return Tk(mh(a))}
function tt(a){var b,c,d;if(a.g.d==0)return '';d=new nk('');for(c=Fo(new Go(a.g));Fn(c.a.a);){b=Ko(c);lk(d,is(b,a.c))}a.a!=0&&(a.a>0?lk(d,'(+'+a.a+')'):lk(d,'('+a.a+')'));return d.a}
function Xd(a,b,c,d,e,f){if(a===c){a=a.slice(b,b+e);b=0}for(var g=b,h=b+e;g<h;){var i=Math.min(g+10000,h);e=i-g;Array.prototype.splice.apply(c,[d,f?e:0].concat(a.slice(g,i)));g=i;d+=e}}
function oh(a,b){var c,d;c=a.h>>19;d=b.h>>19;return c==0?d!=0||a.h>b.h||a.h==b.h&&a.m>b.m||a.h==b.h&&a.m==b.m&&a.l>b.l:!(d==0||a.h<b.h||a.h==b.h&&a.m<b.m||a.h==b.h&&a.m==b.m&&a.l<=b.l)}
function ph(a,b){var c,d;c=a.h>>19;d=b.h>>19;return c==0?d!=0||a.h>b.h||a.h==b.h&&a.m>b.m||a.h==b.h&&a.m==b.m&&a.l>=b.l:!(d==0||a.h<b.h||a.h==b.h&&a.m<b.m||a.h==b.h&&a.m==b.m&&a.l<b.l)}
function qr(a,b,c,d){var e,f;f=b;e=f.c==null||a.b.Y(c.c,f.c)>0?1:0;while(f.a[e]!=c){f=f.a[e];e=a.b.Y(c.c,f.c)>0?1:0}f.a[e]=d;d.b=c.b;d.a[0]=c.a[0];d.a[1]=c.a[1];c.a[0]=null;c.a[1]=null}
function At(b){var c,d;d=new Mu;Lu(d,'name',b.c);Lu(d,'symbol',b.b);Lu(d,'mf',tt(b.a));try{Ju(d,'mass',new hd(nt(b.a)))}catch(a){a=Hg(a);if(_d(a,4)){c=a;nb(c)}else throw Gg(a)}return d}
function bq(){var a;if(Object.create&&Object.getOwnPropertyNames&&aq()){return (a=Object.create(null),a['__proto__']=42,Object.getOwnPropertyNames(a).length==0)?new cq:new Xp}return new eq}
function kt(a,b){var c;if(b.c<b.d)throw new It('Syntax error: maxCount<minCount');c=mt(a,b.i);if(c)if(c.a==b.a){c.d+=b.d;c.c+=b.c;return}b.c==0&&b.d==0&&(a.e=true);mr(a.g,b,(ei(),ci))==null}
function Oi(a){var b;if(!(b=Ni,!b&&(b=Ni=/^\s*[+-]?(NaN|Infinity|((\d+\.?\d*)|(\.\d+))([eE][+-]?\d+)?[dDfF]?)\s*$/),b.test(a))){throw new Dj('For input string: "'+a+'"')}return parseFloat(a)}
function Al(a,b){il(this);this.e=a;if(lh(jh(b,{l:0,m:4193280,h:Tu}),{l:0,m:0,h:0})){this.d=1;this.a=Vd(Rd(ke,1),Ru,0,7,[Ch(b)])}else{this.d=2;this.a=Vd(Rd(ke,1),Ru,0,7,[Ch(b),Ch(yh(b,32))])}}
function Rl(a,b,c,d,e){var f,g,h;f=true;for(g=0;g<d;g++){f=f&c[g]==0}if(e==0){wk(c,d,a,0,b)}else{h=32-e;f=f&c[g]<<h==0;for(g=0;g<b-1;g++){a[g]=c[g+d]>>>e|c[g+d+1]<<h}a[g]=c[g+d]>>>e;++g}return f}
function Cs(a){var b,c,d,e,f,g,h;e=a.d;e>~~(a.a/2)&&(e=~~(a.a/2));f='';d=(new Fr(a)).a.W();b=0;while(Fn(d.a)&&b<e){++b;c=d.b=Gn(d.a);g=c.T().a;h=c.U().a;h>-1.0E100&&(f+=g+', '+h+'\r\n')}return f}
function Ds(a){var b,c,d,e,f,g,h;e=a.d;e>~~(a.a/2)&&(e=~~(a.a/2));f=new mk;d=(new Fr(a)).a.W();b=0;while(Fn(d.a)&&b<e){++b;c=d.b=Gn(d.a);g=c.T().a;h=c.U().a;lk(f,As(g)+', '+As(h*100)+'\r\n')}return f}
function xh(a,b){var c,d,e;b&=63;if(b<22){c=a.l<<b;d=a.m<<b|a.l>>22-b;e=a.h<<b|a.m>>22-b}else if(b<44){c=0;d=a.l<<b-22;e=a.m<<b-22|a.l>>44-b}else{c=0;d=0;e=a.l<<b-44}return {l:c&Su,m:d&Su,h:e&Tu}}
function zh(a,b){var c,d,e,f;b&=63;c=a.h&Tu;if(b<22){f=c>>>b;e=a.m>>b|c<<22-b;d=a.l>>b|a.m<<22-b}else if(b<44){f=0;e=c>>>b-22;d=a.m>>b-22|a.h<<44-b}else{f=0;e=0;d=c>>>b-44}return {l:d&Su,m:e&Su,h:f&Tu}}
function Es(a){var b,c,d,e,f;c=a.d;c>~~(a.a/2)&&(c=~~(a.a/2));d=Td(je,[Ru,av],[28,0],7,[c,2],2);b=0;for(f=Fo(new Go(a));Fn(f.a.a);){e=Ko(f);d[b][0]=e.a;d[b][1]=to(a,e).a;++b;if(b==c)break}return d}
function hu(a,b){eu();var c,d,e,f;f=2;for(d=new In(a.a);d.a<d.c.G();){c=(Dc(d.a<d.c.G()),d.c.R(d.b=d.a++));e=fu(c.a.i);if(!e){if(!b){return null}else{f+=b.a*c.b}}else{f+=e.a*c.b}}return new Ri(f/2)}
function Fm(){Fm=Lg;Em=new Gm('UP',0);ym=new Gm('DOWN',1);xm=new Gm('CEILING',2);zm=new Gm('FLOOR',3);Cm=new Gm('HALF_UP',4);Am=new Gm('HALF_DOWN',5);Bm=new Gm('HALF_EVEN',6);Dm=new Gm('UNNECESSARY',7)}
function ys(a,b){var c,d,e,f,g;c=mv;d=(new Fr(a)).a.W();while(Fn(d.a)){e=d.b=Gn(d.a);e.T();g=e.U().a;g>c&&(c=g)}d=(new Fr(a)).a.W();while(Fn(d.a)){e=d.b=Gn(d.a);f=e.T();g=e.U();mr(a,f,new Ri(g.a/c*b))}}
function qm(a,b,c,d){mm();var e,f;e={l:0,m:0,h:0};for(f=0;f<c;f++){e=ih(th(jh(nh(b[f]),{l:Su,m:1023,h:0}),jh(nh(d),{l:Su,m:1023,h:0})),jh(nh(Ch(e)),{l:Su,m:1023,h:0}));a[f]=Ch(e);e=zh(e,32)}return Ch(e)}
function St(a,b){var c;if(b<=0)throw new tb('Error: power='+b);if(b==1)return a;if(b==2){a.c=Ut(a,a);return a}--b;c=new Zt(a.d,a.c);while(b!=0){(b&1)!=0&&(a.c=Ut(a,c));b>>=1;b!=0&&(c.c=Ut(c,c))}return a}
function wb(a){var b;if(a.c==null){b=ee(a.b)===ee(ub)?null:a.b;a.d=b==null?'null':ae(b)?b==null?null:b.name:de(b)?'String':ui(hb(b));a.a=a.a+': '+(ae(b)?b==null?null:b.message:b+'');a.c='('+a.d+') '+a.a}}
function aq(){var a='__proto__';var b=Object.create(null);if(b[a]!==undefined){return false}var c=Object.getOwnPropertyNames(b);if(c.length!=0){return false}b[a]=42;if(b[a]!==42){return false}return true}
function kp(a,b,c,d,e,f){var g,h,i,j;g=d-c;if(g<7){hp(b,c,d,f);return}i=c+e;h=d+e;j=i+(h-i>>1);kp(b,a,i,j,-e,f);kp(b,a,j,h,-e,f);if(f.Y(a[j-1],a[j])<=0){while(c<d){b[c++]=a[i++]}return}ip(a,i,j,h,b,c,d,f)}
function jc(b,c){var d,e,f,g;for(e=0,f=b.length;e<f;e++){g=b[e];try{g[1]?g[0].ob()&&(c=ic(c,g)):g[0].ob()}catch(a){a=Hg(a);if(_d(a,9)){d=a;Ob(_d(d,38)?ee(d.b)===ee(ub)?null:d.b:d)}else throw Gg(a)}}return c}
function Gp(a,b){var c,d,e,f;e=b==null?'0':''+yp(b);c=Cp(a,e);for(f=0;f<c.length;f++){d=c[f];if(xp(b,d.T())){c.length==1?(delete a.a[e],undefined):(c.splice(f,1),undefined);cn(a.b);return d.U()}}return null}
function ik(a){var b,c,d,e;b=0;d=a.length;e=d-4;c=0;while(c<e){b=a.charCodeAt(c+3)+31*(a.charCodeAt(c+2)+31*(a.charCodeAt(c+1)+31*(a.charCodeAt(c)+31*b)));b=~~b;c+=4}while(c<d){b=b*31+Ij(a,c++)}b=~~b;return b}
function sl(a,b){var c;if(b<0){throw new Zh('Negative exponent')}if(b==0){return cl}else if(b==1||ml(a,cl)||ml(a,gl)){return a}if(!wl(a,0)){c=1;while(!wl(a,c)){++c}return rl(Gl(c*b),sl(vl(a,c),b))}return um(a,b)}
function Ks(a){var b,c,d,e,f;if(a.b.b==0){a.d=a.c;a.f=Ch(mh(zj(a.c)));return}b=1.7976931348623157E308;f=mv;c=true;for(e=Vn(new Wn(a.b));un(e.a);){d=$n(e);if(d.d>f||c){c=false;b=d.b;f=d.d}}a.d=b;a.f=Ch(mh(zj(b)))}
function Kg(a,b,c){var d=Ig;var e=Jg;var f=Mg;var g=d[a];var h=f(g);if(g&&!h){_=g}else{_=d[a]=!b?{}:e(b);_.cM=c;_.constructor=_;!b&&(_.tM=Qg)}for(var i=3;i<arguments.length;++i){arguments[i].prototype=_}h&&(_.cZ=h)}
function is(a,b){var c,d;c=a.i;!!b&&fn(b,a.i)&&Oj(en(b,a.i).e,'^[A-Z][a-z]?\\{.*\\}$')&&(c=en(b,a.i).e);d='';a.a!=0?(d+='['+a.a+c+']'):(d+=c);if(a.c==1&&a.d==1)return d;if(a.c==a.d)return d+a.c;return d+a.d+'-'+a.c}
function Ed(a){if(!a){return cd(),bd}var b=a.valueOf?a.valueOf():a;if(b!==a){var c=Ad[typeof b];return c?c(b):Hd(typeof b)}else if(a instanceof Array||a instanceof $wnd.Array){return new Pc(a)}else{return new ud(a)}}
function Vb(a,b,c,d){while(true){if(d>=a.c){wk(b,c,a.a,Ch(jh(a.b,{l:63,m:0,h:0})),a.c);Wb(a,a.a);a.b=ih(a.b,nh(a.c));c+=a.c;d-=a.c;a.c=64}else{wk(b,c,a.a,Ch(jh(a.b,{l:63,m:0,h:0})),d);a.b=ih(a.b,nh(d));a.c-=d;break}}}
function kj(a){var b,c,d;if(a<0){return 0}else if(a==0){return 32}else{d=-(a>>16);b=d>>16&16;c=16-b;a=a>>b;d=a-256;b=d>>16&8;c+=b;a<<=b;d=a-4096;b=d>>16&4;c+=b;a<<=b;d=a-16384;b=d>>16&2;c+=b;a<<=b;d=a>>14;b=d&~(d>>1);return c+2-b}}
function Cb(b){var c=(!Ab&&(Ab=Db()),Ab);var d=b.replace(/[\x00-\x1f\xad\u0600-\u0603\u06dd\u070f\u17b4\u17b5\u200b-\u200f\u2028-\u202e\u2060-\u2064\u206a-\u206f\ufeff\ufff9-\ufffb"\\]/g,function(a){return Bb(a,c)});return '"'+d+'"'}
function wl(a,b){var c,d,e;if(b==0){return (a.a[0]&1)!=0}if(b<0){throw new Zh('Negative bit address')}e=b>>5;if(e>=a.d){return a.e<0}c=a.a[e];b=1<<(b&31);if(a.e<0){d=ol(a);if(e<d){return false}else d==e?(c=-c):(c=~c)}return (c&b)!=0}
function Bu(b,c){var d,e,f,g;f=new Sq;try{for(e=Fo(new Go(b.g));Fn(e.a.a);){d=Ko(e);d.c=xj(d.c,ge(c/d.e));if(d.d>d.c)return null;Rq(f,new Xs(d))}g=Vo(f.a);jp(g,0,g.length,null);np(f,g)}catch(a){a=Hg(a);if(!_d(a,4))throw Gg(a)}return f}
function im(a,b,c,d,e){var f,g;f={l:0,m:0,h:0};for(g=0;g<e;g++){f=ih(f,Ah(jh(nh(b[g]),{l:Su,m:1023,h:0}),jh(nh(d[g]),{l:Su,m:1023,h:0})));a[g]=Ch(f);f=yh(f,32)}for(;g<c;g++){f=ih(f,jh(nh(b[g]),{l:Su,m:1023,h:0}));a[g]=Ch(f);f=yh(f,32)}}
function ot(a){var b,c,d,e;if(a.e)throw new It('Cannot calculate exact mass of a range formula');d=0;for(c=Fo(new Go(a.g));Fn(c.a.a);){b=Ko(c);d+=b.e*fs(b)}return e=isNaN(d*dv)?d*dv:Wi(d*dv)?d*dv:d*dv==0?d*dv:Bh(mh(Math.round(d*dv))),e/dv}
function cc(a){var b;b=Sd(he,Ru,0,8,7,1);b[0]=fe(Ch(a));a=zh(a,8);b[1]=fe(Ch(a));a=zh(a,8);b[2]=fe(Ch(a));a=zh(a,8);b[3]=fe(Ch(a));a=zh(a,8);b[4]=fe(Ch(a));a=zh(a,8);b[5]=fe(Ch(a));a=zh(a,8);b[6]=fe(Ch(a));a=zh(a,8);b[7]=fe(Ch(a));return b}
function yh(a,b){var c,d,e,f,g;b&=63;c=a.h;d=(c&Uu)!=0;d&&(c|=-1048576);if(b<22){g=c>>b;f=a.m>>b|c<<22-b;e=a.l>>b|a.m<<22-b}else if(b<44){g=d?Tu:0;f=c>>b-22;e=a.m>>b-22|c<<44-b}else{g=d?Tu:0;f=d?Su:0;e=c>>b-44}return {l:e&Su,m:f&Su,h:g&Tu}}
function Hi(a){if(a.B()){var b=a.c;b.C()?(a.k='['+b.j):!b.B()?(a.k='[L'+b.w()+';'):(a.k='['+b.w());a.b=b.v()+'[]';a.i=b.A()+'[]';return}var c=a.f;var d=a.d;d=d.split('/');a.k=Ki('.',[c,Ki('$',d)]);a.b=Ki('.',[c,Ki('.',d)]);a.i=d[d.length-1]}
function bt(a){var b,c,d;if(a.c)throw new It('Cannot calculate mass: this is a range formula');if(a.e)throw new It('The mass is not clearly defined');d=0;for(c=new In(a.d);c.a<c.c.G();){b=(Dc(c.a<c.c.G()),c.c.R(c.b=c.a++));d=ge(d+pt(b)*b.f)}return d}
function ft(a){var b,c,d;c=new In(a.d);d=new nk('');c.a<c.c.G()&&(d=new nk((Dc(c.a<c.c.G()),lb(c.c.R(c.b=c.a++)))));while(c.a<c.c.G()){b=(Dc(c.a<c.c.G()),c.c.R(c.b=c.a++));b.f==1?lk(d,'.'+tt(b)):b.f==0?lk(d,'.n'+tt(b)):lk(d,'.'+b.f+tt(b))}return d.a}
function ts(a,b){var c,d,e,f,g,h;e=new Fs;d=(new Fr(a)).a.W();while(Fn(d.a)){f=d.b=Gn(d.a);g=f.T().a;h=f.U().a;Ar(d);g=(isNaN(g/b)?g/b:Wi(g/b)?g/b:g/b==0?g/b:Bh(mh(Math.round(g/b))))*b;c=to(e,new Ri(g));!!c&&(h+=c.a);mr(e,new Ri(g),new Ri(h))}rs(a,e)}
function mh(a){var b,c,d,e,f;if(isNaN(a)){return Jh(),Ih}if(a<Xu){return Jh(),Gh}if(a>=9223372036854775807){return Jh(),Fh}e=false;if(a<0){e=true;a=-a}d=0;if(a>=Wu){d=ge(a/Wu);a-=d*Wu}c=0;if(a>=Vu){c=ge(a/Vu);a-=c*Vu}b=ge(a);f=Ug(b,c,d);e&&$g(f);return f}
function bk(a){var b,c,d,e,f,g,h;g=a.length;b=0;for(f=0;f<g;){d=li(a,f,a.length);f+=d>=Zu?2:1;d<128?++b:d<2048?(b+=2):d<Zu?(b+=3):d<2097152?(b+=4):d<67108864&&(b+=5)}c=Sd(he,Ru,0,b,7,1);h=0;for(e=0;e<g;){d=li(a,e,a.length);e+=d>=Zu?2:1;h+=_j(c,h,d)}return c}
function Qs(a,b,c){var d,e,f,g,h,i,j;this.e=c;this.g=b;this.a=a.a;this.b=new zp;g=Pj(c,'[^0-9,\\.]','');i=Qj(g,',',0);d=0;for(f=Vn(new Wn(a.b));un(f.a);){e=$n(f);j=0;i.length>d&&(j=Oi(i[d]));h=new Ct(e.c,e.b,j,e.a);gn(this.b,oj(e.c),h);++d}Js(this);Ks(this)}
function Bt(b,c,d,e,f){var g;this.b=b;this.c=c;try{this.a=new ut(d,e,f)}catch(a){a=Hg(a);if(_d(a,6)){g=a;"Group creation error: '"+b+"'='"+d+"': "+ob(g);this.a=new ut('',e,f)}else throw Gg(a)}if(this.a.e)throw new It('Range formulas not allowed for groups')}
function Vl(a){var b,c,d;if(ph(a,{l:0,m:0,h:0})){c=kh(a,{l:1755648,m:238,h:0});d=sh(a,{l:1755648,m:238,h:0})}else{b=zh(a,1);c=kh(b,{l:877824,m:119,h:0});d=sh(b,{l:877824,m:119,h:0});d=ih(xh(d,1),jh(a,{l:1,m:0,h:0}))}return wh(xh(d,32),jh(c,{l:Su,m:1023,h:0}))}
function ds(a,b){if(es(a,b))return 0;if(Jj(a.i,'C')){if(Jj(b.i,'C'))return a.a-b.a;return -1}if(Jj(a.i,'H')){if(Jj(b.i,'C'))return 1;if(Jj(b.i,'H'))return a.a-b.a;return -1}if(Jj(b.i,'H')||Jj(b.i,'C')){return 1}if(Jj(a.i,b.i))return a.a-b.a;return Zj(a.i,b.i)}
function nm(a,b){mm();var c,d,e,f,g,h,i,j,k;if(b.d>a.d){h=a;a=b;b=h}if(b.d<63){return tm(a,b)}g=(a.d&-2)<<4;j=vl(a,g);k=vl(b,g);d=gm(a,tl(j,g));e=gm(b,tl(k,g));i=nm(j,k);c=nm(d,e);f=nm(gm(j,d),gm(e,k));f=bm(bm(f,i),c);f=tl(f,g);i=tl(i,g<<1);return bm(bm(i,f),c)}
function ah(a){var b,c,d;c=a.l;if((c&c-1)!=0){return -1}d=a.m;if((d&d-1)!=0){return -1}b=a.h;if((b&b-1)!=0){return -1}if(b==0&&d==0&&c==0){return -1}if(b==0&&d==0&&c!=0){return lj(c)}if(b==0&&d!=0&&c==0){return lj(d)+22}if(b!=0&&d==0&&c==0){return lj(b)+44}return -1}
function Pg(a){var b=this;if(a=='$wnd'){return $wnd}else if(a===''){return b}if(a.substring(0,5)=='$wnd.'){b=$wnd;a=a.substring(5)}var c=a.split('.');!(c[0] in b)&&b.execScript&&b.execScript('var '+c[0]);for(var d;c.length&&(d=c.shift());){b[d]?(b=b[d]):(b=b[d]={})}return b}
function Kk(a,b){var c;Fc(b);c=5-a.e;if(c==0){return a}if(c>0){if(c<Dk.length&&a.a+Ek[ge(c)]<54){return new Pk(a.f*Dk[ge(c)])}return new Rk(sm((!a.c&&(a.c=Kl(a.f)),a.c),ge(c)))}if(a.a<54&&-c<Dk.length){return Wk(a.f,Dk[ge(-c)],b)}return Vk((!a.c&&(a.c=Kl(a.f)),a.c),vm(-c),b)}
function Ns(a){var b,c,d;d='Element: '+a.a+' - symbol: '+a.g+' - exact mass: '+a.d+' - mass: '+a.c+' - name: '+a.e+' - nb isotope: '+a.b.b+'\r\n';for(c=Vn(new Wn(a.b));un(c.a);){b=$n(c);d+='Number: '+b.c+' - mass: '+b.b+' - percentage: '+b.d+' - symbol: '+b.a+'\r\n'}return d}
function ls(a,b,c,d){var e;if(c>d)throw new It('Error: minCount>maxCount');if(b==0){this.d=c;this.c=d;this.e=Ls(a);this.f=a.f;this.a=0;this.i=a.g;this.b=a.c;return}e=dn(a.b,new fj(b));if(!e)throw new It('Isotope not found');this.a=b;this.i=a.g;this.b=e.b;this.e=e.b;this.d=c;this.c=d}
function Ql(a,b){var c,d,e,f,g;d=b>>5;b&=31;if(d>=a.d){return a.e<0?(hl(),bl):(hl(),gl)}f=a.d-d;e=Sd(ke,Ru,0,f+1,7,1);Rl(e,f,a.a,d,b);if(a.e<0){for(c=0;c<d&&a.a[c]==0;c++);if(c<d||b>0&&a.a[c]<<32-b!=0){for(c=0;c<f&&e[c]==-1;c++){e[c]=0}c==f&&++f;++e[c]}}g=new zl(a.e,f,e);kl(g);return g}
function kr(a,b,c,d){var e,f;if(!b){return c}else{e=a.b.Y(c.c,b.c);if(e==0){d.d=co(b,c.d);d.b=true;return b}f=e<0?0:1;b.a[f]=kr(a,b.a[f],c,d);if(lr(b.a[f])){if(lr(b.a[1-f])){b.b=true;b.a[0].b=false;b.a[1].b=false}else{lr(b.a[f].a[f])?(b=sr(b,1-f)):lr(b.a[f].a[1-f])&&(b=rr(b,1-f))}}}return b}
function Jc(a,b){var c,d,e,f;a=''+a;c=new tk(a.length+16*b.length);f=0;d=0;while(d<b.length){e=a.indexOf('%s',f);if(e==-1){break}qk(c,a.substr(f,e-f));pk(c,b[d++]);f=e+2}qk(c,Wj(a,f,a.length-f));if(d<b.length){c.a+=' [';pk(c,b[d++]);while(d<b.length){c.a+=', ';pk(c,b[d++])}c.a+=']'}return c.a}
function hl(){hl=Lg;var a;cl=new yl(1,1);el=new yl(1,10);gl=new yl(0,0);bl=new yl(-1,1);dl=Vd(Rd(jf,1),Ru,5,0,[gl,cl,new yl(1,2),new yl(1,3),new yl(1,4),new yl(1,5),new yl(1,6),new yl(1,7),new yl(1,8),new yl(1,9),el]);fl=Sd(jf,Ru,5,32,0,1);for(a=0;a<fl.length;a++){fl[a]=Ll(xh({l:1,m:0,h:0},a))}}
function eu(){eu=Lg;du=new zp;hn(du,'O',oj(0));hn(du,'N',oj(1));hn(du,'H',oj(-1));hn(du,'C',oj(2));hn(du,'F',oj(-1));hn(du,'Cl',oj(-1));hn(du,'Br',oj(-1));hn(du,'I',oj(-1));hn(du,'S',oj(0));hn(du,'P',oj(1));hn(du,'Li',oj(-1));hn(du,'Na',oj(-1));hn(du,'K',oj(-1));hn(du,'Ca',oj(0));hn(du,'Mg',oj(0))}
function vu(a,b,c){var d,e,f,g,h,i,j,k;h=new Mu;k=a.c.gb('referenceVersion');k!=null&&!Jj(k,'')&&(c=(Ht(),Ht(),Ft));if(c){i=new Gu;Ju(h,'elements',i.a);for(e=Vn(new Wn(c));un(e.a);){d=$n(e);Fu(i,Ms(d).a)}}if(b){j=new Gu;Ju(h,'groups',j.a);for(g=Vn(new Wn(b));un(g.a);){f=$n(g);Fu(j,At(f).a)}}return h}
function et(b){var c,d,e;e=Qj(b,'/',0);if(e.length!=2)throw new It('Syntax error: bad fraction syntax: '+b);try{c=Pi(e[1]);if(c==0)throw new It('Syntax error: divide by zero: '+b);d=Pi(e[0]);return d/c}catch(a){a=Hg(a);if(_d(a,20)){throw new It('Syntax error: bad fraction syntax: '+b)}else throw Gg(a)}}
function mm(){mm=Lg;var a,b;jm=Sd(jf,Ru,5,32,0,1);km=Sd(jf,Ru,5,32,0,1);lm=Vd(Rd(ke,1),Ru,0,7,[1,10,100,1000,10000,bv,cv,10000000,100000000,Yu]);a={l:1,m:0,h:0};for(b=0;b<=18;b++){jm[b]=Ll(a);km[b]=Ll(xh(a,b));a=th(a,{l:5,m:0,h:0})}for(;b<km.length;b++){jm[b]=rl(jm[b-1],jm[1]);km[b]=rl(km[b-1],(hl(),el))}}
function pm(a,b,c,d,e){var f,g,h,i;if(ee(a)===ee(b)&&d==e){wm(a,d,c);return}for(h=0;h<d;h++){g={l:0,m:0,h:0};f=a[h];for(i=0;i<e;i++){g=ih(ih(th(jh(nh(f),{l:Su,m:1023,h:0}),jh(nh(b[i]),{l:Su,m:1023,h:0})),jh(nh(c[h+i]),{l:Su,m:1023,h:0})),jh(nh(Ch(g)),{l:Su,m:1023,h:0}));c[h+i]=Ch(g);g=zh(g,32)}c[h+e]=Ch(g)}}
function _s(a){var b,c,d,e;if(a.c)throw new It('Cannot calculate mass: this is a range formula');if(a.e)throw new It('The mass is not defined');d=0;for(c=new In(a.d);c.a<c.c.G();){b=(Dc(c.a<c.c.G()),c.c.R(c.b=c.a++));d+=nt(b)*b.f}return e=isNaN(d*cv)?d*cv:Wi(d*cv)?d*cv:d*cv==0?d*cv:Bh(mh(Math.round(d*cv))),e/cv}
function at(a){var b,c,d,e;if(a.c)throw new It('Cannot calculate mass: this is a range formula');if(a.e)throw new It('The mass is not clearly defined');b=0;for(d=new In(a.d);d.a<d.c.G();){c=(Dc(d.a<d.c.G()),d.c.R(d.b=d.a++));b+=ot(c)*c.f}return e=isNaN(b*dv)?b*dv:Wi(b*dv)?b*dv:b*dv==0?b*dv:Bh(mh(Math.round(b*dv))),e/dv}
function rm(a,b){var c,d,e,f,g,h,i,j,k;j=a.e;if(j==0){return hl(),gl}d=a.d;c=a.a;if(d==1){e=th(jh(nh(c[0]),{l:Su,m:1023,h:0}),jh(nh(b),{l:Su,m:1023,h:0}));i=Ch(e);g=Ch(zh(e,32));return g==0?new yl(j,i):new zl(j,2,Vd(Rd(ke,1),Ru,0,7,[i,g]))}h=d+1;f=Sd(ke,Ru,0,h,7,1);f[d]=qm(f,c,d,b);k=new zl(j,h,f);kl(k);return k}
function tm(a,b){var c,d,e,f,g,h,i,j,k,l,m;d=a.d;f=b.d;h=d+f;i=a.e!=b.e?-1:1;if(h==2){k=th(jh(nh(a.a[0]),{l:Su,m:1023,h:0}),jh(nh(b.a[0]),{l:Su,m:1023,h:0}));m=Ch(k);l=Ch(zh(k,32));return l==0?new yl(i,m):new zl(i,2,Vd(Rd(ke,1),Ru,0,7,[m,l]))}c=a.a;e=b.a;g=Sd(ke,Ru,0,h,7,1);om(c,d,e,f,g);j=new zl(i,h,g);kl(j);return j}
function Il(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p;m=b.length;i=m;if(b.charCodeAt(0)==45){k=-1;l=1;--m}else{k=1;l=0}f=(Ul(),Tl)[10];e=~~(m/f);p=m%f;p!=0&&++e;h=Sd(ke,Ru,0,e,7,1);c=Sl[8];g=0;n=l+(p==0?f:p);for(o=l;o<i;o=n,n=n+f){d=Pi(b.substr(o,n-o));j=(mm(),qm(h,h,g,c));j+=fm(h,g,d);h[g++]=j}a.e=k;a.d=g;a.a=h;kl(a)}
function Dh(a){var b,c,d,e,f;if(a.l==0&&a.m==0&&a.h==0){return '0'}if(a.h==Uu&&a.m==0&&a.l==0){return '-9223372036854775808'}if(a.h>>19!=0){return '-'+Dh(uh(a))}c=a;d='';while(!(c.l==0&&c.m==0&&c.h==0)){e=nh(Yu);c=Vg(c,e,true);b=''+Ch(Rg);if(!(c.l==0&&c.m==0&&c.h==0)){f=9-b.length;for(;f>0;f--){b='0'+b}}d=b+d}return d}
function Ms(a){var b,c,d,e,f,g;d=new Mu;Lu(d,'symbol',a.g);Ju(d,'monoisotopicMass',new hd(a.d));Ju(d,'mass',new hd(a.c));Lu(d,'name',a.e);Ju(d,'atomicNumber',new hd(a.a));f=new Gu;Ju(d,'isotopes',f.a);for(c=Vn(new Wn(a.b));un(c.a);){b=$n(c);e=(g=new Mu,Ju(g,'mass',new hd(b.b)),Ju(g,'percentage',new hd(b.d)),g);Fu(f,e.a)}return d}
function Au(a,b){var c,d,e,f;f='';for(d=new In(a.a);d.a<d.c.G();){c=(Dc(d.a<d.c.G()),d.c.R(d.b=d.a++));e=gs(c.a);(e==null?!!Dp(b.a,null):!(b.c.gb(e)===undefined))&&(Jj((e==null?Xm(Dp(b.a,null)):b.c.gb(e)).c.substr(0,1),'{')?(e=(e==null?Xm(Dp(b.a,null)):b.c.gb(e)).c):(e=(e==null?Xm(Dp(b.a,null)):b.c.gb(e)).b));c.b>1?(f+=e+c.b):c.b>0&&(f+=e)}return f}
function Lt(a){var b,c,d,e,f;c=true;for(e=new In(a.d.d);e.a<e.c.G();){d=(Dc(e.a<e.c.G()),e.c.R(e.b=e.a++));if(c){a.e=new _t(a,d,a.c);xs(a.e.c,d.f);b=a.e;c=false}else{b=new _t(a,d,a.c);xs(b.c,d.f);rs(a.e.c,b.c)}if(d.b!=''){f=new Ri(vs(b.c));_m(a.g,f)?gn(a.g,f,dn(a.g,f)+','+d.b):gn(a.g,f,d.b)}}if(a.e.c.d==0)throw new It('Isotopic distribution: empty table')}
function Pi(a){var b,c,d,e,f;if(a==null){throw new Dj('null')}d=a.length;e=d>0&&(a.charCodeAt(0)==45||a.charCodeAt(0)==43)?1:0;for(b=e;b<d;b++){if(mi(a.charCodeAt(b))==-1){throw new Dj('For input string: "'+a+'"')}}f=parseInt(a,10);c=f<$u;if(isNaN(f)){throw new Dj('For input string: "'+a+'"')}else if(c||f>Ou){throw new Dj('For input string: "'+a+'"')}return f}
function ll(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o;f=b.e;if(f==0){throw new Zh('BigInteger divide by zero')}e=b.d;d=b.a;if(e==1){return Zl(a,d[0],f)}m=a.a;n=a.d;c=n!=e?n>e?1:-1:em(m,d,n);if(c<0){return Vd(Rd(jf,1),Ru,5,0,[gl,a])}o=a.e;h=n-e+1;i=o==f?1:-1;g=Sd(ke,Ru,0,h,7,1);j=Yl(g,h,m,n,d,e);k=new zl(i,h,g);l=new zl(o,e,j);kl(k);kl(l);return Vd(Rd(jf,1),Ru,5,0,[k,l])}
function Ik(a,b){var c,d,e,f,g,h;e=Mk(a);h=Mk(b);if(e==h){if(a.e==b.e&&a.a<54&&b.a<54){return a.f<b.f?-1:a.f>b.f?1:0}d=a.e-b.e;c=(a.d>0?a.d:uj((a.a-1)*ev)+1)-(b.d>0?b.d:uj((b.a-1)*ev)+1);if(c>d+1){return e}else if(c<d-1){return -e}else{f=(!a.c&&(a.c=Kl(a.f)),a.c);g=(!b.c&&(b.c=Kl(b.f)),b.c);d<0?(f=rl(f,vm(-d))):d>0&&(g=rl(g,vm(d)));return jl(f,g)}}else return e<h?-1:1}
function Zl(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,o;m=a.a;n=a.d;o=a.e;if(n==1){d=jh(nh(m[0]),{l:Su,m:1023,h:0});e=jh(nh(b),{l:Su,m:1023,h:0});f=kh(d,e);i=sh(d,e);o!=c&&(f=uh(f));o<0&&(i=uh(i));return Vd(Rd(jf,1),Ru,5,0,[Ll(f),Ll(i)])}h=o==c?1:-1;g=Sd(ke,Ru,0,n,7,1);j=Vd(Rd(ke,1),Ru,0,7,[$l(g,m,n,b)]);k=new zl(h,n,g);l=new zl(o,1,j);kl(k);kl(l);return Vd(Rd(jf,1),Ru,5,0,[k,l])}
function am(a,b,c,d,e){var f,g,h;f={l:0,m:0,h:0};g={l:0,m:0,h:0};for(h=0;h<d;h++){f=(mm(),ih(th(jh(nh(c[h]),{l:Su,m:1023,h:0}),jh(nh(e),{l:Su,m:1023,h:0})),jh(nh(Ch(f)),{l:Su,m:1023,h:0})));g=ih(Ah(jh(nh(a[b+h]),{l:Su,m:1023,h:0}),jh(f,{l:Su,m:1023,h:0})),g);a[b+h]=Ch(g);g=yh(g,32);f=zh(f,32)}g=ih(Ah(jh(nh(a[b+d]),{l:Su,m:1023,h:0}),f),g);a[b+d]=Ch(g);return Ch(yh(g,32))}
function _l(a,b){var c,d,e,f,g;d=jh(nh(b),{l:Su,m:1023,h:0});if(ph(a,{l:0,m:0,h:0})){f=kh(a,d);g=sh(a,d)}else{c=zh(a,1);e=nh(b>>>1);f=kh(c,e);g=sh(c,e);g=ih(xh(g,1),jh(a,{l:1,m:0,h:0}));if((b&1)!=0){if(rh(f,g)){g=Ah(g,f)}else{if(rh(Ah(f,g),d)){g=ih(g,Ah(d,f));f=Ah(f,{l:1,m:0,h:0})}else{g=ih(g,Ah(xh(d,1),f));f=Ah(f,{l:2,m:0,h:0})}}}}return wh(xh(g,32),jh(f,{l:Su,m:1023,h:0}))}
function lu(a,b,c){ku();var d,e,f,g,h,i,j,k,l,m,n,o;i=~~(~~((b.b-1)/b.a)/2);h=a[0][0];g=a[a.length-1][0];k=Ch(mh(zj((g-h)/c*b.a)))+2*b.a*i+1;o=Sd(je,av,0,k,7,1);for(m=0,n=a.length;m<n;++m){l=a[m];d=Ch(mh(zj((l[0]-h)/c*b.a+b.a*i)));for(f=0;f<b.c.length;f++){o[d+f-b.a*i]+=b.c[f]*l[1]}}j=Td(je,[Ru,av],[28,0],7,[k,2],2);for(e=0;e<k;e++){j[e][0]=(e/b.a-i)*c+h;j[e][1]=o[e]}return j}
function $k(a,b,c){var d;d=0;switch(c.b){case 7:if(b!=0){throw new Zh('Rounding necessary')}break;case 0:d=b==0?0:b<0?-1:1;break;case 2:d=(b==0?0:b<0?-1:1)>0?b==0?0:b<0?-1:1:0;break;case 3:d=(b==0?0:b<0?-1:1)<0?b==0?0:b<0?-1:1:0;break;case 4:(b<0?-b:b)>=5&&(d=b==0?0:b<0?-1:1);break;case 5:(b<0?-b:b)>5&&(d=b==0?0:b<0?-1:1);break;case 6:(b<0?-b:b)+a>5&&(d=b==0?0:b<0?-1:1);}return d}
function zt(a,b,c,d){var e,f,g,h,i,j,k,l,m;if(b.indexOf(',')==-1)throw new It('Syntax error: combinatorial');if(c!=d)throw new It('Combinatorial range formulae are not allowed');j=Qj(b,',',0);i=0;h=j.length;m=new nk('{');for(g=0;g<h-1;g++){l=Tj(j[g]);f=new ut(l,a.c,a.d);lk(m,st(f)+',');i+=nt(f)}k=Tj(j[h-1]);e=new ut(k,a.c,a.d);lk(m,st(e)+'}');i+=nt(e);i/=h;kt(a,new js(m.a,i,c,d))}
function Yg(a,b,c,d,e,f){var g,h,i,j,k,l,m;j=_g(b)-_g(a);g=xh(b,j);i=Ug(0,0,0);while(j>=0){h=gh(a,g);if(h){j<22?(i.l|=1<<j,undefined):j<44?(i.m|=1<<j-22,undefined):(i.h|=1<<j-44,undefined);if(a.l==0&&a.m==0&&a.h==0){break}}k=g.m;l=g.h;m=g.l;bh(g,l>>>1);g.m=k>>>1|(l&1)<<21;g.l=m>>>1|(k&1)<<21;--j}c&&$g(i);if(f){if(d){Rg=uh(a);e&&(Rg=Ah(Rg,(Jh(),Hh)))}else{Rg=Ug(a.l,a.m,a.h)}}return i}
function Vh(){var a=navigator.userAgent.toLowerCase();var b=$doc.documentMode;if(function(){return a.indexOf('webkit')!=-1}())return 'safari';if(function(){return a.indexOf('msie')!=-1&&b>=10&&b<11}())return 'ie10';if(function(){return a.indexOf('msie')!=-1&&b>=9&&b<11}())return 'ie9';if(function(){return a.indexOf('msie')!=-1&&b>=8&&b<11}())return 'ie8';if(function(){return a.indexOf('gecko')!=-1||b>=11}())return 'gecko1_8';return 'unknown'}
function vm(a){mm();var b,c,d,e;b=ge(a);if(a<km.length){return km[b]}else if(a<=50){return sl((hl(),el),b)}else if(a<=1000){return tl(sl(jm[1],b),b)}if(a>cv){throw new Zh('power of ten too big')}if(a<=Ou){return tl(sl(jm[1],b),b)}d=sl(jm[1],Ou);e=d;c=mh(a-Ou);b=ge(a%Ou);while(oh(c,{l:Su,m:511,h:0})){e=rl(e,d);c=Ah(c,{l:Su,m:511,h:0})}e=rl(e,sl(jm[1],b));e=tl(e,Ou);c=mh(a-Ou);while(oh(c,{l:Su,m:511,h:0})){e=tl(e,Ou);c=Ah(c,{l:Su,m:511,h:0})}e=tl(e,b);return e}
function Qj(l,a,b){var c=new RegExp(a,'g');var d=[];var e=0;var f=l;var g=null;while(true){var h=c.exec(f);if(h==null||f==''||e==b-1&&b>0){d[e]=f;break}else{d[e]=f.substring(0,h.index);f=f.substring(h.index+h[0].length,f.length);c.lastIndex=0;if(g==f){d[e]=f.substring(0,1);f=f.substring(1)}g=f;e++}}if(b==0&&l.length>0){var i=d.length;while(i>0&&d[i-1]==''){--i}i<d.length&&d.splice(i,d.length-i)}var j=Vj(d.length);for(var k=0;k<d.length;++k){j[k]=d[k]}return j}
function gm(a,b){var c,d,e,f,g,h,i,j,k,l;g=a.e;i=b.e;if(i==0){return a}if(g==0){return b.e==0?b:new zl(-b.e,b.d,b.a)}f=a.d;h=b.d;if(f+h==2){c=jh(nh(a.a[0]),{l:Su,m:1023,h:0});d=jh(nh(b.a[0]),{l:Su,m:1023,h:0});g<0&&(c=uh(c));i<0&&(d=uh(d));return Ll(Ah(c,d))}e=f!=h?f>h?1:-1:em(a.a,b.a,f);if(e==-1){l=-i;k=g==i?hm(b.a,h,a.a,f):cm(b.a,h,a.a,f)}else{l=g;if(g==i){if(e==0){return hl(),gl}k=hm(a.a,f,b.a,h)}else{k=cm(a.a,f,b.a,h)}}j=new zl(l,k.length,k);kl(j);return j}
function $l(a,b,c,d){var e,f,g,h,i,j,k;j={l:0,m:0,h:0};f=jh(nh(d),{l:Su,m:1023,h:0});for(h=c-1;h>=0;h--){k=wh(xh(j,32),jh(nh(b[h]),{l:Su,m:1023,h:0}));if(ph(k,{l:0,m:0,h:0})){i=kh(k,f);j=sh(k,f)}else{e=zh(k,1);g=nh(d>>>1);i=kh(e,g);j=sh(e,g);j=ih(xh(j,1),jh(k,{l:1,m:0,h:0}));if((d&1)!=0){if(rh(i,j)){j=Ah(j,i)}else{if(rh(Ah(i,j),f)){j=ih(j,Ah(f,i));i=Ah(i,{l:1,m:0,h:0})}else{j=ih(j,Ah(xh(f,1),i));i=Ah(i,{l:2,m:0,h:0})}}}}a[h]=Ch(jh(i,{l:Su,m:1023,h:0}))}return Ch(j)}
function wk(a,b,c,d,e){var f,g,h,i,j,k,l,m,n;Gc(a,'src');Gc(c,'dest');m=hb(a);i=hb(c);Ac((m.e&4)!=0,'srcType is not an array');Ac((i.e&4)!=0,'destType is not an array');l=m.c;g=i.c;Ac((l.e&1)!=0?l==g:(g.e&1)==0,"Array types don't match");n=a.length;j=c.length;if(b<0||d<0||e<0||b+e>n||d+e>j){throw new $h}if(((l.e&1)==0||(l.e&4)!=0)&&m!=i){k=a;f=c;if(ee(a)===ee(c)&&b<d){b+=e;for(h=d+e;h-->d;){f[h]=k[--b]}}else{for(h=d+e;d<h;){f[d++]=k[b++]}}}else e>0&&Xd(a,b,c,d,e,true)}
function Ul(){Ul=Lg;Sl=Vd(Rd(ke,1),Ru,0,7,[$u,1162261467,gv,1220703125,362797056,1977326743,gv,387420489,Yu,214358881,429981696,815730721,1475789056,170859375,268435456,410338673,612220032,893871739,1280000000,1801088541,113379904,148035889,191102976,244140625,308915776,387420489,481890304,594823321,729000000,887503681,gv,1291467969,1544804416,1838265625,60466176]);Tl=Vd(Rd(ke,1),Ru,0,7,[-1,-1,31,19,15,13,11,11,10,9,9,8,8,8,8,7,7,7,7,7,7,7,6,6,6,6,6,6,6,6,6,6,6,6,6,6,5])}
function Nk(a){var b,c,d,e,f;if(a.g!=null){return a.g}if(a.a<32){a.g=Wl(mh(a.f),ge(a.e));return a.g}e=Xl((!a.c&&(a.c=Kl(a.f)),a.c),0);if(a.e==0){return e}b=(!a.c&&(a.c=Kl(a.f)),a.c).e<0?2:1;c=e.length;d=-a.e+c-b;f=new sk;f.a+=e;if(a.e>0&&d>=-6){if(d>=0){rk(f,c-ge(a.e),'.')}else{f.a=Sj(f.a,0,b-1)+'0.'+Rj(f.a,b-1);rk(f,b+1,dk(Ak,0,-ge(d)-1))}}else{if(c-b>=1){f.a=Sj(f.a,0,b)+'.'+Rj(f.a,b);++c}f.a=Sj(f.a,0,c)+'E'+Rj(f.a,c);d>0&&rk(f,++c,'+');rk(f,++c,''+Dh(mh(d)))}a.g=f.a;return a.g}
function Nt(b){var c,d,e;if(b.e.c.d==0)throw new tb('No isotopic distribution data');mr(b.e.c,new Ri(Ao(er(b.e.c)).a-2),new Ri(0));mr(b.e.c,new Ri(Ao(fr(b.e.c)).a+2),new Ri(0));d=new zp;hn(d,'FWHM',b.b+'');hn(d,'Threshold',b.a+'');try{if(b.d.d.b.length==1){e=Ro(b.d.d,0);hn(d,'Monoisotopic mass',ot(e)+'');hn(d,'Molecular weight',nt(e)+'');!!gu(e,null)&&hn(d,'Unsaturation',gu(e,null)+'')}}catch(a){a=Hg(a);if(_d(a,6)){c=a;nb(c)}else throw Gg(a)}return Bs(b.e.c,b.d+' - fwhm: '+b.b,b.g,d)}
function Vk(a,b,c){var d,e,f,g,h,i,j;f=ll(a,b);g=f[0];i=f[1];if(i.e==0){return new Rk(g)}j=a.e*b.e;if(Ml(b)<54){h=ql(i);e=ql(b);d=qh(xh(qh(h,{l:0,m:0,h:0})?uh(h):h,1),qh(e,{l:0,m:0,h:0})?uh(e):e)?-1:oh(xh(qh(h,{l:0,m:0,h:0})?uh(h):h,1),qh(e,{l:0,m:0,h:0})?uh(e):e)?1:0;d=$k(wl(g,0)?1:0,j*(5+d),c)}else{d=jl(ul(i.e<0?new zl(1,i.d,i.a):i),b.e<0?new zl(1,b.d,b.a):b);d=$k(wl(g,0)?1:0,j*(5+d),c)}if(d!=0){if(Ml(g)<54){return al(ih(ql(g),nh(d)))}g=bm(g,Ll(nh(d)));return new Rk(g)}return new Rk(g)}
function _j(a,b,c){if(c<128){a[b]=fe(c&127);return 1}else if(c<2048){a[b++]=fe(c>>6&31|192);a[b]=fe(c&63|128);return 2}else if(c<Zu){a[b++]=fe(c>>12&15|224);a[b++]=fe(c>>6&63|128);a[b]=fe(c&63|128);return 3}else if(c<2097152){a[b++]=fe(c>>18&7|240);a[b++]=fe(c>>12&63|128);a[b++]=fe(c>>6&63|128);a[b]=fe(c&63|128);return 4}else if(c<67108864){a[b++]=fe(c>>24&3|248);a[b++]=fe(c>>18&63|128);a[b++]=fe(c>>12&63|128);a[b++]=fe(c>>6&63|128);a[b]=fe(c&63|128);return 5}throw new cj('Character out of range: '+c)}
function bm(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o;g=a.e;i=b.e;if(g==0){return b}if(i==0){return a}f=a.d;h=b.d;if(f+h==2){c=jh(nh(a.a[0]),{l:Su,m:1023,h:0});d=jh(nh(b.a[0]),{l:Su,m:1023,h:0});if(g==i){k=ih(c,d);o=Ch(k);n=Ch(zh(k,32));return n==0?new yl(g,o):new zl(g,2,Vd(Rd(ke,1),Ru,0,7,[o,n]))}return Ll(g<0?Ah(d,c):Ah(c,d))}else if(g==i){m=g;l=f>=h?cm(a.a,f,b.a,h):cm(b.a,h,a.a,f)}else{e=f!=h?f>h?1:-1:em(a.a,b.a,f);if(e==0){return hl(),gl}if(e==1){m=g;l=hm(a.a,f,b.a,h)}else{m=i;l=hm(b.a,h,a.a,f)}}j=new zl(m,l.length,l);kl(j);return j}
function dm(a,b,c,d,e){var f,g;f=ih(jh(nh(b[0]),{l:Su,m:1023,h:0}),jh(nh(d[0]),{l:Su,m:1023,h:0}));a[0]=Ch(f);f=yh(f,32);if(c>=e){for(g=1;g<e;g++){f=ih(f,ih(jh(nh(b[g]),{l:Su,m:1023,h:0}),jh(nh(d[g]),{l:Su,m:1023,h:0})));a[g]=Ch(f);f=yh(f,32)}for(;g<c;g++){f=ih(f,jh(nh(b[g]),{l:Su,m:1023,h:0}));a[g]=Ch(f);f=yh(f,32)}}else{for(g=1;g<c;g++){f=ih(f,ih(jh(nh(b[g]),{l:Su,m:1023,h:0}),jh(nh(d[g]),{l:Su,m:1023,h:0})));a[g]=Ch(f);f=yh(f,32)}for(;g<e;g++){f=ih(f,jh(nh(d[g]),{l:Su,m:1023,h:0}));a[g]=Ch(f);f=yh(f,32)}}vh(f,{l:0,m:0,h:0})&&(a[g]=Ch(f))}
function wm(a,b,c){var d,e,f,g,h;for(f=0;f<b;f++){d={l:0,m:0,h:0};for(h=f+1;h<b;h++){d=ih(ih(th(jh(nh(a[f]),{l:Su,m:1023,h:0}),jh(nh(a[h]),{l:Su,m:1023,h:0})),jh(nh(c[f+h]),{l:Su,m:1023,h:0})),jh(nh(Ch(d)),{l:Su,m:1023,h:0}));c[f+h]=Ch(d);d=zh(d,32)}c[f+b]=Ch(d)}Pl(c,c,b<<1);d={l:0,m:0,h:0};for(e=0,g=0;e<b;++e,g++){d=ih(ih(th(jh(nh(a[e]),{l:Su,m:1023,h:0}),jh(nh(a[e]),{l:Su,m:1023,h:0})),jh(nh(c[g]),{l:Su,m:1023,h:0})),jh(nh(Ch(d)),{l:Su,m:1023,h:0}));c[g]=Ch(d);d=zh(d,32);++g;d=ih(d,jh(nh(c[g]),{l:Su,m:1023,h:0}));c[g]=Ch(d);d=zh(d,32)}return c}
function th(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,A,B,C,D,F,G;c=a.l&8191;d=a.l>>13|(a.m&15)<<9;e=a.m>>4&8191;f=a.m>>17|(a.h&255)<<5;g=(a.h&1048320)>>8;h=b.l&8191;i=b.l>>13|(b.m&15)<<9;j=b.m>>4&8191;k=b.m>>17|(b.h&255)<<5;l=(b.h&1048320)>>8;B=c*h;C=d*h;D=e*h;F=f*h;G=g*h;if(i!=0){C+=c*i;D+=d*i;F+=e*i;G+=f*i}if(j!=0){D+=c*j;F+=d*j;G+=e*j}if(k!=0){F+=c*k;G+=d*k}l!=0&&(G+=c*l);n=B&Su;o=(C&511)<<13;m=n+o;q=B>>22;r=C>>9;s=(D&262143)<<4;t=(F&31)<<17;p=q+r+s+t;v=D>>18;w=F>>5;A=(G&4095)<<8;u=v+w+A;p+=m>>22;m&=Su;u+=p>>22;p&=Su;u&=Tu;return Ug(m,p,u)}
function jt(b,c,d,e,f,g){var h,i,j,k,l,m;if(Jj(c,'Zcharge')){b.a+=d;return}if(c.charCodeAt(0)==91){h=1;while(ni(c.charCodeAt(h)))++h;if(f==0){try{f=Pi(c.substr(1,h-1))}catch(a){a=Hg(a);if(_d(a,6)){throw new It('Bad isotope syntax')}else throw Gg(a)}}c=Sj(c,h,c.length-1)}i=en(b.c,c);if(!i){l=en(b.d,c);if(!l)throw new It('Unrecognized symbol: '+c);if(f!=0)throw new It('Syntax error: cannot specify isotopes for groups');if(g){k=Fo(new Go(l.a.g));while(Fn(k.a.a)){j=Ko(k);m=new ks(j);m.d*=d;m.c*=e;kt(b,m)}}else{kt(b,new ms(l,d,e))}}else{kt(b,new ls(i,f,d,e))}}
function Uh(a){Th.call(this,''+('Possible problem with your *.gwt.xml module file.\nThe compile time user.agent value (safari) does not match the runtime user.agent value ('+a+').\n'+'Expect more errors.'),_d('Possible problem with your *.gwt.xml module file.\nThe compile time user.agent value (safari) does not match the runtime user.agent value ('+a+').\n'+'Expect more errors.',9)?'Possible problem with your *.gwt.xml module file.\nThe compile time user.agent value (safari) does not match the runtime user.agent value ('+a+').\n'+'Expect more errors.':null)}
function Tt(a,b){var c,d,e,f,g,h,i,j,k,l,m;m=new wt(new bu(a));Im(m,b);j=1;for(e=Fo(new Go(m.g));Fn(e.a.a);){c=Ko(e);h=en(a.a,c.i);h.b.b>j&&(j=h.b.b)}k=2*j*vj(qt(m)+1)/vj(2);l=a.d.b/(k*4);Yt(a,l);mr(a.c,new Ri(0),new Ri(1));for(d=Fo(new Go(m.g));Fn(d.a.a);){c=Ko(d);h=en(a.a,c.i);if(c.a!=0){f=new Os(c.b,c.b,h.g,h.e,h.a);h=f}if(h.b.b==0){i=new Ct(ge(h.c+0.5),h.c,1,h.g);gn(h.b,new fj(i.c),i)}if(fs(c)<0){throw new It('Number of element under 0')}else if(fs(c)==0);else if(fs(c)==1){a.c=Ut(a,new $t(a.d,h,a.a))}else{g=new $t(a.d,h,a.a);Yt(g,a.b);a.c=Ut(a,St(g,fs(c)))}}}
function Vg(a,b,c){var d,e,f,g,h,i;if(b.l==0&&b.m==0&&b.h==0){throw new Zh('divide by zero')}if(a.l==0&&a.m==0&&a.h==0){c&&(Rg=Ug(0,0,0));return Ug(0,0,0)}if(b.h==Uu&&b.m==0&&b.l==0){return Wg(a,c)}i=false;if(b.h>>19!=0){b=uh(b);i=true}g=ah(b);f=false;e=false;d=false;if(a.h==Uu&&a.m==0&&a.l==0){e=true;f=true;if(g==-1){a=Tg((Jh(),Fh));d=true;i=!i}else{h=yh(a,g);i&&$g(h);c&&(Rg=Ug(0,0,0));return h}}else if(a.h>>19!=0){f=true;a=uh(a);d=true;i=!i}if(g!=-1){return Xg(a,g,i,f,c)}if(!ph(a,b)){c&&(f?(Rg=uh(a)):(Rg=Ug(a.l,a.m,a.h)));return Ug(0,0,0)}return Yg(d?a:Ug(a.l,a.m,a.h),b,i,f,e,c)}
function uc(a,b){var c,d,e,f,g,h,i,j,k;if(!b.length){return a.q('Unknown','anonymous',-1,-1)}k=Tj(b);Jj(k.substr(0,3),'at ')&&(k=Wj(k,3,k.length-3));k=k.replace(/\[.*?\]/g,'');g=k.indexOf('(');if(g==-1){g=k.indexOf('@');if(g==-1){j=k;k=''}else{j=Tj(Wj(k,g+1,k.length-(g+1)));k=Tj(k.substr(0,g))}}else{c=k.indexOf(')',g);j=k.substr(g+1,c-(g+1));k=Tj(k.substr(0,g))}g=Lj(k,ak(46));g!=-1&&(k=Wj(k,g+1,k.length-(g+1)));(!k.length||Jj(k,'Anonymous function'))&&(k='anonymous');h=Mj(j,ak(58));e=Nj(j,ak(58),h-1);i=-1;d=-1;f='Unknown';if(h!=-1&&e!=-1){f=j.substr(0,e);i=pc(j.substr(e+1,h-(e+1)));d=pc(Wj(j,h+1,j.length-(h+1)))}return a.q(f,k,i,d)}
function pr(a,b,c){var d,e,f,g,h,i,j,k,l,m,n;if(!a.c){return false}g=null;m=null;i=new Gr(null,null);e=1;i.a[1]=a.c;l=i;while(l.a[e]){j=e;h=m;m=l;l=l.a[e];d=a.b.Y(b,l.c);e=d<0?0:1;d==0&&(!c.c||Pq(l.d,c.d))&&(g=l);if(!(!!l&&l.b)&&!lr(l.a[e])){if(lr(l.a[1-e])){m=m.a[j]=sr(l,e)}else if(!lr(l.a[1-e])){n=m.a[1-j];if(n){if(!lr(n.a[1-j])&&!lr(n.a[j])){m.b=false;n.b=true;l.b=true}else{f=h.a[1]==m?1:0;lr(n.a[j])?(h.a[f]=rr(m,j)):lr(n.a[1-j])&&(h.a[f]=sr(m,j));l.b=h.a[f].b=true;h.a[f].a[0].b=false;h.a[f].a[1].b=false}}}}}if(g){c.b=true;c.d=g.d;if(l!=g){k=new Gr(l.c,l.d);qr(a,i,g,k);m==g&&(m=k)}m.a[m.a[1]==l?1:0]=l.a[!l.a[0]?1:0];--a.d}a.c=i.a[1];!!a.c&&(a.c.b=false);return c.b}
function Vt(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p,q;f=b.c.a;a.c.d>f&&zs(a.c);b.c.d>f&&zs(b.c);k=new Fs;j=(new Fr(b.c)).a.W();e=0;while(Fn(j.a)){i=j.b=Gn(j.a);h=i.T();g=i.U();q=(new Fr(a.c)).a.W();while(Fn(q.a)){p=q.b=Gn(q.a);o=p.T();n=p.U();m=o.a+h.a;l=n.a*g.a;d=Wm(hr(k,new Ri(m)));c=Wm(gr(k,new Ri(m)));if(!!d&&Qi(d,new Ri(m))){l+=to(k,c).a}else{!!d&&rj(d.a-m)>a.b&&(d=null);!!c&&rj(c.a-m)>a.b&&(c=null);!!c&&!!d&&(rj(c.a-m)<rj(d.a-m)?(d=null):(c=null));if(c){if(to(k,c).a>l){l+=to(k,c).a;m=c.a}else{l+=to(k,c).a;nr(k,c)}}else if(d){if(to(k,d).a>l){l+=to(k,d).a;m=d.a}else{l+=to(k,d).a;nr(k,d)}}}l>a.d.a/bv&&mr(k,new Ri(m),new Ri(l));l>e&&(e=l)}k.d>f&&zs(k)}xs(k,1/e);return k}
function vt(a,b,c,d,e){var f,g,h,i,j,k,l;$r.call(this);this.c=b;this.d=c;this.f=d;h=a.indexOf('$');if(h>-1){this.b=Wj(a,h+1,a.length-(h+1));a=a.substr(0,h)}g=new RegExp('(\\([0-9]+[+-]\\))');for(j=g.exec(a);j;j=g.exec(a)){f=j[0];l=Pi(Pj(Pj(Pj(f,'[^0-9+-]',''),'^([0-9]+)([+-])$','$2$1'),'^[+]',''));a=a.replace(g,'(Zcharge'+l+')')}g=new RegExp('(\\([+-][0-9]+\\))');for(k=g.exec(a);k;k=g.exec(a)){f=k[0];l=Pi(Pj(Pj(Pj(f,'[^0-9+-]',''),'^([0-9])([+-])$','$1$2'),'^[+]',''));a=a.replace(g,'(Zcharge'+l+')')}g=new RegExp('([+-])(?![0-9])');for(i=g.exec(a);i;i=g.exec(a)){f=i[0];Jj(f,'+')?(a=a.replace(g,'Zcharge')):(a=a.replace(g,'(Zcharge-1)'))}Oj(a,'[a-zA-Z][0-9]+-[0-9]')&&(this.e=true);a.indexOf('}')!=-1;yt(this,a,e)}
function Wt(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p,q;f=b.c.a;a.c.d>f&&zs(a.c);b.c.d>f&&zs(b.c);k=new Fs;j=(new Fr(b.c)).a.W();e=0;while(Fn(j.a)){i=j.b=Gn(j.a);h=i.T();g=i.U();q=(new Fr(a.c)).a.W();while(Fn(q.a)){p=q.b=Gn(q.a);o=p.T();n=p.U();m=o.a+h.a;l=n.a*g.a;d=Wm(hr(k,new Ri(m)));c=Wm(gr(k,new Ri(m)));if(!!d&&Qi(d,new Ri(m))){l+=to(k,c).a}else{!!d&&rj(d.a-m)>a.b&&(d=null);!!c&&rj(c.a-m)>a.b&&(c=null);if(!!c&&!!d){m=(m*l+c.a*to(k,c).a+d.a*to(k,d).a)/(l+to(k,c).a+to(k,d).a);l+=to(k,c).a+to(k,d).a;nr(k,c);nr(k,d)}else if(c){m=(m*l+c.a*to(k,c).a)/(l+to(k,c).a);l+=to(k,c).a;nr(k,c)}else if(d){m=(m*l+d.a*to(k,d).a)/(l+to(k,d).a);l+=to(k,d).a;nr(k,d)}}l>a.d.a/bv&&mr(k,new Ri(m),new Ri(l));l>e&&(e=l)}k.d>f&&zs(k)}xs(k,1/e);return k}
function Hk(){Hk=Lg;var a,b,c;new Qk({l:1,m:0,h:0},0);new Qk({l:10,m:0,h:0},0);new Qk({l:0,m:0,h:0},0);zk=Sd(hf,Ru,14,11,0,1);Ak=Sd(ie,Ru,0,100,7,1);Bk=Vd(Rd(je,1),av,0,7,[1,5,25,125,625,3125,15625,78125,390625,1953125,9765625,48828125,244140625,1220703125,6103515625,30517578125,152587890625,762939453125,3814697265625,19073486328125,95367431640625,476837158203125,2384185791015625]);Ck=Sd(ke,Ru,0,Bk.length,7,1);Dk=Vd(Rd(je,1),av,0,7,[1,10,100,1000,10000,bv,cv,10000000,100000000,Yu,dv,100000000000,1000000000000,10000000000000,100000000000000,1000000000000000,10000000000000000]);Ek=Sd(ke,Ru,0,Dk.length,7,1);Fk=Sd(hf,Ru,14,11,0,1);a=0;for(;a<Fk.length;a++){zk[a]=new Qk(nh(a),0);Fk[a]=new Qk({l:0,m:0,h:0},a);Ak[a]=48}for(;a<Ak.length;a++){Ak[a]=48}for(c=0;c<Ck.length;c++){Ck[c]=Sk(Bk[c])}for(b=0;b<Ek.length;b++){Ek[b]=Sk(Dk[b])}mm()}
function Jk(a,b){var c,d,e,f,g,h,i,j;c=0;g=0;f=b.length;j=new tk(b.length);if(0<f&&b.charCodeAt(0)==43){++g;++c;if(g<f&&(b.charCodeAt(g)==43||b.charCodeAt(g)==45)){throw new Dj('For input string: "'+b+'"')}}while(g<f&&b.charCodeAt(g)!=46&&b.charCodeAt(g)!=101&&b.charCodeAt(g)!=69){++g}Wh(j,b,c,g);if(g<f&&b.charCodeAt(g)==46){++g;c=g;while(g<f&&b.charCodeAt(g)!=101&&b.charCodeAt(g)!=69){++g}a.e=g-c;Wh(j,b,c,g)}else{a.e=0}if(g<f&&(b.charCodeAt(g)==101||b.charCodeAt(g)==69)){++g;c=g;if(g<f&&b.charCodeAt(g)==43){++g;g<f&&b.charCodeAt(g)!=45&&++c}h=b.substr(c,f-c);a.e=a.e-Pi(h);if(a.e!=ge(a.e)){throw new Dj('Scale out of range.')}}i=j.a;if(i.length<16){a.f=Zk(i);if(Xi(a.f)){throw new Dj('For input string: "'+b+'"')}a.a=Sk(a.f)}else{Lk(a,new Cl(i))}a.d=j.a.length;for(e=0;e<j.a.length;++e){d=Ij(j.a,e);if(d!=45&&d!=48){break}--a.d}a.d==0&&(a.d=1)}
function Yl(a,b,c,d,e,f){var g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w;q=Sd(ke,Ru,0,d+1,7,1);r=Sd(ke,Ru,0,f+1,7,1);i=kj(e[f-1]);if(i!=0){Ol(r,e,0,i);Ol(q,c,0,i)}else{wk(c,0,q,0,d);wk(e,0,r,0,f)}j=r[f-1];l=b-1;m=d;while(l>=0){if(q[m]==j){k=-1}else{s=ih(xh(jh(nh(q[m]),{l:Su,m:1023,h:0}),32),jh(nh(q[m-1]),{l:Su,m:1023,h:0}));v=_l(s,j);k=Ch(v);u=Ch(yh(v,32));if(k!=0){t=false;++k;do{--k;if(t){break}o=th(jh(nh(k),{l:Su,m:1023,h:0}),jh(nh(r[f-2]),{l:Su,m:1023,h:0}));w=ih(xh(nh(u),32),jh(nh(q[m-2]),{l:Su,m:1023,h:0}));p=ih(jh(nh(u),{l:Su,m:1023,h:0}),jh(nh(j),{l:Su,m:1023,h:0}));kj(Ch(zh(p,32)))<32?(t=true):(u=Ch(p))}while(oh(Eh(o,{l:0,m:0,h:Uu}),Eh(w,{l:0,m:0,h:Uu})))}}if(k!=0){g=am(q,m-f,r,f,k);if(g!=0){--k;h={l:0,m:0,h:0};for(n=0;n<f;n++){h=ih(h,ih(jh(nh(q[m-f+n]),{l:Su,m:1023,h:0}),jh(nh(r[n]),{l:Su,m:1023,h:0})));q[m-f+n]=Ch(h);h=zh(h,32)}}}a[l]=k;--m;--l}if(i!=0){Rl(r,f,q,0,i);return r}wk(q,0,r,0,f);return q}
function Db(){var a=['\\u0000','\\u0001','\\u0002','\\u0003','\\u0004','\\u0005','\\u0006','\\u0007','\\b','\\t','\\n','\\u000B','\\f','\\r','\\u000E','\\u000F','\\u0010','\\u0011','\\u0012','\\u0013','\\u0014','\\u0015','\\u0016','\\u0017','\\u0018','\\u0019','\\u001A','\\u001B','\\u001C','\\u001D','\\u001E','\\u001F'];a[34]='\\"';a[92]='\\\\';a[173]='\\u00ad';a[1536]='\\u0600';a[1537]='\\u0601';a[1538]='\\u0602';a[1539]='\\u0603';a[1757]='\\u06dd';a[1807]='\\u070f';a[6068]='\\u17b4';a[6069]='\\u17b5';a[8203]='\\u200b';a[8204]='\\u200c';a[8205]='\\u200d';a[8206]='\\u200e';a[8207]='\\u200f';a[8232]='\\u2028';a[8233]='\\u2029';a[8234]='\\u202a';a[8235]='\\u202b';a[8236]='\\u202c';a[8237]='\\u202d';a[8238]='\\u202e';a[8288]='\\u2060';a[8289]='\\u2061';a[8290]='\\u2062';a[8291]='\\u2063';a[8292]='\\u2064';a[8298]='\\u206a';a[8299]='\\u206b';a[8300]='\\u206c';a[8301]='\\u206d';a[8302]='\\u206e';a[8303]='\\u206f';a[65279]='\\ufeff';a[65529]='\\ufff9';a[65530]='\\ufffa';a[65531]='\\ufffb';return a}
function Wl(a,b){Ul();var c,d,e,f,g,h,i,j,k,l,m,n;h=qh(a,{l:0,m:0,h:0});h&&(a=uh(a));if(lh(a,{l:0,m:0,h:0})){switch(b){case 0:return '0';case 1:return '0.0';case 2:return '0.00';case 3:return '0.000';case 4:return '0.0000';case 5:return '0.00000';case 6:return '0.000000';default:l=new sk;b<0?(l.a+='0E+',l):(l.a+='0E',l);l.a+=b==$u?'2147483648':''+-b;return l.a;}}j=Sd(ie,Ru,0,19,7,1);c=18;n=a;do{i=n;n=kh(n,{l:10,m:0,h:0});j[--c]=Ch(ih({l:48,m:0,h:0},Ah(i,th(n,{l:10,m:0,h:0}))))&_u}while(vh(n,{l:0,m:0,h:0}));d=Ah(Ah(Ah({l:18,m:0,h:0},nh(c)),nh(b)),{l:1,m:0,h:0});if(b==0){h&&(j[--c]=45);return dk(j,c,18-c)}if(b>0&&ph(d,{l:4194298,m:Su,h:Tu})){if(ph(d,{l:0,m:0,h:0})){e=c+Ch(d);for(g=17;g>=e;g--){j[g+1]=j[g]}j[++e]=46;h&&(j[--c]=45);return dk(j,c,18-c+1)}for(f=2;qh(nh(f),ih(uh(d),{l:1,m:0,h:0}));f++){j[--c]=48}j[--c]=46;j[--c]=48;h&&(j[--c]=45);return dk(j,c,18-c)}m=c+1;k=new tk;h&&(k.a+='-',k);if(18-m>=1){ok(k,j[c]);k.a+='.';k.a+=dk(j,c+1,18-c-1)}else{k.a+=dk(j,c,18-c)}k.a+='E';oh(d,{l:0,m:0,h:0})&&(k.a+='+',k);k.a+=''+Dh(d);return k.a}
function dt(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,A,B;b=Pj(b,' ','');b=Pj(b,'^([0-9]+[A-Z][a-z]?)$','[$1]');Oj(b,'.*[a-zA-Z][0-9]+-[0-9].*')&&(a.c=true);r=new RegExp('([A-Z][a-z]?\\{[0-9.,]*\\})');for(t=r.exec(b);t;t=r.exec(b)){h=t[1];p=(v=$s(h),w=Pj(h,'\\{.*',''),an(a.a,v)||hn(a.a,v,new Qs(en(a.a,w),v,h)),v);b=b.replace(r,p)}r=new RegExp('(\\{[A-Za-z0-9]*\\})');for(s=r.exec(b);s;s=r.exec(b)){h=s[1];q=(A=$s(h),B=Pj(h,'[\\{\\}]',''),an(a.b,A)||hn(a.b,A,new Bt(A,h,B,a.a,a.b)),A);b=b.replace(r,q)}b.indexOf('}')!=-1;g=Qj(b,'\\.',0);n=1;o=false;for(e=0,f=g.length;e<f;++e){d=g[e];if(ct(d)){if(o)throw new It("Syntax error: 'number.number.'");n=Oi(d);o=true;continue}u=d.indexOf('/');if(u!=-1){if(o)throw new It("Syntax error: 'number.number/number'");k=u+1;l=d.length;while(ni(Ij(d,k++))){if(k>=l)break}k<l&&--k;n=et(d.substr(0,k));o=true;if(k>=l)continue;else d=Wj(d,k,d.length-k)}j=0;for(;j<d.length;j++){if(!ni(d.charCodeAt(j)))break}if(j>0){m=Oi(d.substr(0,j));d=Wj(d,j,d.length-j);o?(n+=m/yj(10,j)):(n=m)}i=new vt(d,a.a,a.b,n,c);i.f==0&&(a.e=true);i.e&&(a.c=true);Qo(a.d,i);n=1;o=false}}
function Bs(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w;t=new mk;s=a.d;s>~~(a.a/2)&&(s=~~(a.a/2));t.a+='##TITLE= '+b+'\r\n'+'##JCAMP-DX= 5.00\r\n'+'##DATA TYPE= MASS SPECTRUM\r\n'+'##DATA CLASS= PEAK TABLE\r\n'+'##ORIGIN= Generated spectrum based on ChemCalc www.chemcalc.org\r\n'+'##SPECTROMETER/DATA SYSTEM= Based on ChemCalc isotopic distribution calculator\r\n'+'##XUNITS= M/Z\r\n'+'##YUNITS= RELATIVE ABUNDANCE\r\n'+'##NPOINTS=         \r\n';e=t.a.length;t.a+='##MAXY= 100\r\n##MINY= 0\r\n';for(n=Mn(new Nn(d));un(n.a);){m=Rn(n);lk(t,'##$'+m+'='+(m==null?Xm(Dp(d.a,null)):d.c.gb(m))+'\r\n')}t.a+='##PEAK TABLE= (XY..XY)\r\n';p=0;l=(new Fr(a)).a.W();o=(new Nn(c)).H(Sd(Pe,Ru,7,(new Nn(c)).a.b,0,1));jp(o,0,o.length,(pp(),pp(),op));g=0;q=mv;j=true;f=0;r=false;w='';while(Fn(l.a)&&f<s){++f;h=l.b=Gn(l.a);u=h.T().a;v=h.U().a;v<1.0E-9&&(v=0);if(v!=0&&w.length>0){t.a+=w;++p;w=''}i=true;for(k=g;k<o.length;k++){if(!Fn(l.a)||rj(o[k].a-q)<rj(o[k].a-u)){if(i){t.a+='  $$ ';i=false}else{t.a+=','}lk(t,dn(c,o[k]));++g}else{break}}q=u;if(j){j=false;lk(t,As(u)+', '+As(v*100));++p}else{if(!r||v!=0){t.a+='\r\n';lk(t,As(u)+', '+As(v*100));++p}else{w='\r\n'+As(u)+', '+As(0)}v==0?(r=true):(r=false)}}t.a+='\r\n##END=\r\n';t.a=Sj(t.a,0,e-10)+(p+'')+Rj(t.a,e-2);return t}
function Xl(a,b){Ul();var c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,A,B,C,D,F,G;A=a.e;n=a.d;e=a.a;if(A==0){switch(b){case 0:return '0';case 1:return '0.0';case 2:return '0.00';case 3:return '0.000';case 4:return '0.0000';case 5:return '0.00000';case 6:return '0.000000';default:v=new sk;b<0?(v.a+='0E+',v):(v.a+='0E',v);v.a+=-b;return v.a;}}s=n*10+1+7;t=Sd(ie,Ru,0,s+1,7,1);c=s;if(n==1){g=e[0];if(g<0){G=jh(nh(g),{l:Su,m:1023,h:0});do{o=G;G=kh(G,{l:10,m:0,h:0});t[--c]=48+Ch(Ah(o,th(G,{l:10,m:0,h:0})))&_u}while(vh(G,{l:0,m:0,h:0}))}else{G=g;do{o=G;G=~~(G/10);t[--c]=48+(o-G*10)&_u}while(G!=0)}}else{C=Sd(ke,Ru,0,n,7,1);F=n;wk(e,0,C,0,n);H:while(true){w={l:0,m:0,h:0};for(i=F-1;i>=0;i--){D=ih(xh(w,32),jh(nh(C[i]),{l:Su,m:1023,h:0}));q=Vl(D);C[i]=Ch(q);w=nh(Ch(yh(q,32)))}r=Ch(w);p=c;do{t[--c]=48+r%10&_u}while((r=~~(r/10))!=0&&c!=0);d=9-p+c;for(h=0;h<d&&c>0;h++){t[--c]=48}k=F-1;for(;C[k]==0;k--){if(k==0){break H}}F=k+1}while(t[c]==48){++c}}m=A<0;f=s-c-b-1;if(b==0){m&&(t[--c]=45);return dk(t,c,s-c)}if(b>0&&f>=-6){if(f>=0){j=c+f;for(l=s-1;l>=j;l--){t[l+1]=t[l]}t[++j]=46;m&&(t[--c]=45);return dk(t,c,s-c+1)}for(k=2;k<-f+1;k++){t[--c]=48}t[--c]=46;t[--c]=48;m&&(t[--c]=45);return dk(t,c,s-c)}B=c+1;u=new tk;m&&(u.a+='-',u);if(s-B>=1){ok(u,t[c]);u.a+='.';u.a+=dk(t,c+1,s-c-1)}else{u.a+=dk(t,c,s-c)}u.a+='E';f>0&&(u.a+='+',u);u.a+=''+f;return u.a}
function Wb(a,b){var c,d,e,f;Yb(b,a.e);c=a.d[0];d=a.d[1];e=a.d[2];f=a.d[3];c=Zb(c,d,e,f,a.e[0],7,-680876936);f=Zb(f,c,d,e,a.e[1],12,-389564586);e=Zb(e,f,c,d,a.e[2],17,606105819);d=Zb(d,e,f,c,a.e[3],22,-1044525330);c=Zb(c,d,e,f,a.e[4],7,-176418897);f=Zb(f,c,d,e,a.e[5],12,1200080426);e=Zb(e,f,c,d,a.e[6],17,-1473231341);d=Zb(d,e,f,c,a.e[7],22,-45705983);c=Zb(c,d,e,f,a.e[8],7,1770035416);f=Zb(f,c,d,e,a.e[9],12,-1958414417);e=Zb(e,f,c,d,a.e[10],17,-42063);d=Zb(d,e,f,c,a.e[11],22,-1990404162);c=Zb(c,d,e,f,a.e[12],7,1804603682);f=Zb(f,c,d,e,a.e[13],12,-40341101);e=Zb(e,f,c,d,a.e[14],17,-1502002290);d=Zb(d,e,f,c,a.e[15],22,1236535329);c=$b(c,d,e,f,a.e[1],5,-165796510);f=$b(f,c,d,e,a.e[6],9,-1069501632);e=$b(e,f,c,d,a.e[11],14,643717713);d=$b(d,e,f,c,a.e[0],20,-373897302);c=$b(c,d,e,f,a.e[5],5,-701558691);f=$b(f,c,d,e,a.e[10],9,38016083);e=$b(e,f,c,d,a.e[15],14,-660478335);d=$b(d,e,f,c,a.e[4],20,-405537848);c=$b(c,d,e,f,a.e[9],5,568446438);f=$b(f,c,d,e,a.e[14],9,-1019803690);e=$b(e,f,c,d,a.e[3],14,-187363961);d=$b(d,e,f,c,a.e[8],20,1163531501);c=$b(c,d,e,f,a.e[13],5,-1444681467);f=$b(f,c,d,e,a.e[2],9,-51403784);e=$b(e,f,c,d,a.e[7],14,1735328473);d=$b(d,e,f,c,a.e[12],20,-1926607734);c=_b(c,d,e,f,a.e[5],4,-378558);f=_b(f,c,d,e,a.e[8],11,-2022574463);e=_b(e,f,c,d,a.e[11],16,1839030562);d=_b(d,e,f,c,a.e[14],23,-35309556);c=_b(c,d,e,f,a.e[1],4,-1530992060);f=_b(f,c,d,e,a.e[4],11,1272893353);e=_b(e,f,c,d,a.e[7],16,-155497632);d=_b(d,e,f,c,a.e[10],23,-1094730640);c=_b(c,d,e,f,a.e[13],4,681279174);f=_b(f,c,d,e,a.e[0],11,-358537222);e=_b(e,f,c,d,a.e[3],16,-722521979);d=_b(d,e,f,c,a.e[6],23,76029189);c=_b(c,d,e,f,a.e[9],4,-640364487);f=_b(f,c,d,e,a.e[12],11,-421815835);e=_b(e,f,c,d,a.e[15],16,530742520);d=_b(d,e,f,c,a.e[2],23,-995338651);c=ac(c,d,e,f,a.e[0],6,-198630844);f=ac(f,c,d,e,a.e[7],10,1126891415);e=ac(e,f,c,d,a.e[14],15,-1416354905);d=ac(d,e,f,c,a.e[5],21,-57434055);c=ac(c,d,e,f,a.e[12],6,1700485571);f=ac(f,c,d,e,a.e[3],10,-1894986606);e=ac(e,f,c,d,a.e[10],15,-1051523);d=ac(d,e,f,c,a.e[1],21,-2054922799);c=ac(c,d,e,f,a.e[8],6,1873313359);f=ac(f,c,d,e,a.e[15],10,-30611744);e=ac(e,f,c,d,a.e[6],15,-1560198380);d=ac(d,e,f,c,a.e[13],21,1309151649);c=ac(c,d,e,f,a.e[4],6,-145523070);f=ac(f,c,d,e,a.e[11],10,-1120210379);e=ac(e,f,c,d,a.e[2],15,718787259);d=ac(d,e,f,c,a.e[9],21,-343485551);a.d[0]=~~(a.d[0]+c);a.d[1]=~~(a.d[1]+d);a.d[2]=~~(a.d[2]+e);a.d[3]=~~(a.d[3]+f)}
function yt(b,c,d){var e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w;c=Tj(c);c=Pj(c,'[=]','');if(c.indexOf('.')!=-1)throw new tb('Error: the formula "'+c+'"contains dots (error in parsing)');if(Jj(c,'')){return}if(ni(c.charCodeAt(0))){throw new tb('Error: the formula starts with a number')}c.charCodeAt(0)==120&&(c='X'+Sj(c,1,c.length));g=new dr;k=1;j=1;m=1;l=1;r=1;q=1;w=c.length-1;while(w>=0){if(ni(c.charCodeAt(w))){f=w;while(w>0&&ni(c.charCodeAt(w)))--w;e=c.substr(w+1,f+1-(w+1));u=Pi(e);if(c.charCodeAt(w)==45){--w;if(w<0)throw new It("Syntax error: the formula starts with '-': "+c);f=w;while(w>0&&ni(c.charCodeAt(w)))--w;w==0&&ni(c.charCodeAt(0))&&--w;o=c.substr(w+1,f+1-(w+1));if(o.length==0){u=Pi('-'+e);v=u}else{v=Pi(o)}}else v=u;if(c.charCodeAt(w)==41){--w;if(w<0)throw new It("Syntax error: the formula starts with ')': "+c);cr(g,new fj(r));cr(g,new fj(q));r=m;q=l;l*=u;m*=v}else{k=v;j=u}}else{if(c.charCodeAt(w)==93){s=w;--w;if(w<=1)throw new It('Syntax error: bad isotope syntax');if(!oi(c.charCodeAt(w)))throw new It('Syntax error: bad isotope syntax');while(w>0&&qi(c.charCodeAt(w)))--w;if(!ri(c.charCodeAt(w)))throw new It('Syntax error: bad symbol (must start with uppercase)');t=c.substr(w,s-w);--w;if(w<0)throw new It('Syntax error: bad isotope syntax');if(!ni(c.charCodeAt(w)))throw new It('Syntax error: bad isotope syntax');f=w;while(w>0&&c.charCodeAt(w)!=91)--w;p=c.substr(w+1,f+1-(w+1));try{n=Pi(p)}catch(a){a=Hg(a);if(_d(a,20)){throw new It('Syntax error: bad isotope number '+p)}else throw Gg(a)}if(c.charCodeAt(w)!=91)throw new It("Isotope syntax error: no opening '['");jt(b,t,k*m,j*l,n,d);j=1;k=1;if(w>0)--w;else return}else{if(oi(c.charCodeAt(w))){s=w;while(w>0&&qi(c.charCodeAt(w)))--w;if(s==0&&w==0&&c.charCodeAt(0)==110){b.f=0;return}if(!ri(c.charCodeAt(w)))throw new It('Syntax error: the symbol must start with uppercase');t=c.substr(w,s+1-w);if(Jj(t,'X')&&w==0){b.f=0;return}--w;jt(b,t,k*m,j*l,0,d);j=1;k=1}else{while(c.charCodeAt(w)==41){--w;if(w<0)throw new It("Syntax error: the formula starts with ')': "+c);cr(g,new fj(r));cr(g,new fj(q));r=m;q=l}if(w<0)break;while(c.charCodeAt(w)==40){l=q;m=r;if(g.a.b.length==0){q=1;r=1}else{q=br(g).a;r=br(g).a}--w;if(w<0)break}if(w<0)break;if(c.charCodeAt(w)==125){i=w;while(w>0&&c.charCodeAt(w)!=123)--w;if(c.charCodeAt(w)!=123)throw new It('Syntax error (combinatorial): no opening brace');zt(b,c.substr(w+1,i-(w+1)),k*m,j*l);--w}}}}if(w<0)break;h=c.charCodeAt(w);if(h==123)throw new It('Syntax error (combinatorial): no closing brace');if(h==91)throw new It('Syntax error (isotope): no closing bracket');if(!(null!=String.fromCharCode(h).match(/[A-Z\d]/i))&&h!=40&&h!=91&&h!=123&&h!=93&&h!=41&&h!=125)throw new It("Syntax error: unrecognized character: '"+Zd(h)+"'")}}
function wu(b,c,d){var e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,A,B,C,D,F,G,H,I,J,K,L,M,N;u=new Mu;if(!b){Ju(u,'error',new Id('options is null'));return u}J=b.c.gb('referenceVersion');J!=null&&!Jj(J,'')&&(d=(Ht(),Ht(),Ft));C=b.c.gb('mf');r=b.c.gb('isotopomers');M=b.c.gb('typedResult')!=null&&(ei(),Kj('true',b.c.gb('typedResult'))?di:ci).a;n=new Ri(0.001);try{n=new Ri(Oi(b.c.gb('fwhm')))}catch(a){a=Hg(a);if(!_d(a,6))throw Gg(a)}L=new Ri(1.0E-5);try{L=new Ri(Oi(b.c.gb('threshold')))}catch(a){a=Hg(a);if(!_d(a,6))throw Gg(a)}p=0;try{p=ge(Oi(b.c.gb('gaussianWidth')))}catch(a){a=Hg(a);if(!_d(a,6))throw Gg(a)}h=null;try{h=new Ri(Oi(b.c.gb('defaultUnsaturationContribution')))}catch(a){a=Hg(a);if(!_d(a,6))throw Gg(a)}t=0;!(b.c.gb('joiningAlgorithm')===undefined)&&Jj(b.c.gb('joiningAlgorithm').toLowerCase(),'center')&&(t=Jt);w=new Mu;C==null?Ju(w,'mf',(cd(),cd(),bd)):Ju(w,'mf',new Id(C));Ju(w,'threshold',new hd(L.a));Ju(w,'fwhm',new hd(n.a));Ju(w,'typedResult',(Xc(),M?Wc:Vc));r==null?Ju(w,'isotopomers',(cd(),cd(),bd)):Ju(w,'isotopomers',new Id(r));p>0&&Ju(w,'gaussianWidth',new hd(p));J==null?Ju(w,'referenceVersion',(cd(),cd(),bd)):Ju(w,'referenceVersion',new Id(J));Ju(u,'options',w.a);if(C!=null){C=Tj(C);Jj(C,'')&&(C=null)}if(C!=null){try{k=new gt(C,d,c);if(k.d.b.length>0){if(k.e){Ju(u,'error',new Id('mass not defined'))}else{if(M){D=new Mu;Ju(D,'type',new Id('mf'));Lu(D,'value',ft(k));Ju(u,'mf',D.a)}else{Lu(u,'mf',ft(k))}Ju(u,'mw',new hd(_s(k)));Ju(u,'em',new hd(at(k)));Ju(u,'nominalMass',new hd(bt(k)));if(r!=null&&!Jj(r,'')){K=new Qt(d,k,n.a,L.a);K.f=t;Lt(K);Mt(K);if(p>0){o=mu(p);Kt(K,o,n.a)}Ju(w,'numberLines',new hd(K.e.c.d));if(r.indexOf('jcamp')>-1){if(M){s=new Mu;Ju(s,'type',new Id('jcamp'));Lu(s,'value',Nt(K).a);Ju(u,'jcamp',s.a)}else{Lu(u,'jcamp',Nt(K).a)}}if(r.indexOf('xy')>-1){if(M){N=new Mu;Ju(N,'type',new Id('xy'));Lu(N,'value',Ot(K).a);Ju(u,'xy',N.a)}else{Lu(u,'xy',Ot(K).a)}}if(r.indexOf('array')>-1&&r.indexOf('arrayX')==-1){e=Pt(K);v=new Gu;A=new Gu;B=new Gu;for(q=0;q<e.length;q++){Fu(A,new hd(e[q][0]));Fu(B,new hd(e[q][1]))}Fu(v,A.a);Fu(v,B.a);Ju(u,'spectrum',v.a)}if(r.indexOf('arrayXXYY')>-1){e=Pt(K);v=new Gu;A=new Gu;B=new Gu;for(q=0;q<e.length;q++){Fu(A,new hd(e[q][0]));Fu(B,new hd(e[q][1]))}Fu(v,A.a);Fu(v,B.a);Ju(u,'arrayXXYY',v.a)}if(r.indexOf('arrayXYXY')>-1){e=Pt(K);Ju(u,'arrayXYXY',(new Iu(e)).a)}}I=new Gu;Ju(u,'parts',I.a);for(m=new In(k.d);m.a<m.c.G();){l=(Dc(m.a<m.c.G()),m.c.R(m.b=m.a++));H=new Mu;Fu(I,H.a);if(M){D=new Mu;Ju(D,'type',new Id('mf'));Lu(D,'value',tt(l));Ju(H,'mf',D.a)}else{Lu(H,'mf',tt(l))}Ju(H,'mw',new hd(nt(l)));Ju(H,'em',new hd(ot(l)));l.b.length>0&&Lu(H,'comment',l.b);Ku(H,gu(l,h));G=ot(l)-l.a*nv;if(l.a!=0){Ju(H,'charge',new hd(l.a));G=G/sj(l.a)}Ju(H,'msem',new hd(G));lt(l);i=new Gu;for(g=Fo(new Go(l.g));Fn(g.a.a);){f=Ko(g);j=new Mu;Lu(j,'element',f.i);Ju(j,'number',new hd(fs(f)));Ju(j,'percentage',new hd(f.g));Fu(i,j.a)}Ju(H,'ea',i.a)}}}else{Ju(u,'error',new Id('there is no part in the molecule'))}}catch(a){a=Hg(a);if(_d(a,4)){F=a;Lu(u,'error',F.f)}else throw Gg(a)}}else{Ju(u,'error',new Id('parameter mf not specified'))}return u}
function zu(b,c,d){var e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,A,B,C,D,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,$,ab,bb;F=0.5;Q=0;K=50;I=1000;s=false;bb=false;R=false;v=b.c.gb('jcampLink')!=null&&(ei(),Kj('true',b.c.gb('jcampLink'))?di:ci).a;u=b.c.gb('jcampBaseURL')==null?'http://www.chemcalc.org/service/jcamp/':b.c.gb('jcampBaseURL');N='C0-100H0-202N0-10O0-10F0-3Cl0-3Br0-1';Y=mv;X=new $r;$=b.c.gb('typedResult')!=null&&(ei(),Kj('true',b.c.gb('typedResult'))?di:ci).a;q=new Ri(0.001);try{q=new Ri(Oi(b.c.gb('fwhm')))}catch(a){a=Hg(a);if(!_d(a,6))throw Gg(a)}r=0;try{r=ge(Oi(b.c.gb('gaussianWidth')))}catch(a){a=Hg(a);if(!_d(a,6))throw Gg(a)}A=new Mu;if(!b){Ju(A,'error',new Id('options is null'));return A}U=b.c.gb('referenceVersion');U!=null&&!Jj(U,'')&&(d=(Ht(),Ht(),Ft));l=null;try{l=new Ri(Oi(b.c.gb('defaultUnsaturationContribution')))}catch(a){a=Hg(a);if(!_d(a,6))throw Gg(a)}try{Q=Oi(b.c.gb('minUnsaturation'))}catch(a){a=Hg(a);if(!_d(a,6))throw Gg(a)}try{K=Oi(b.c.gb('maxUnsaturation'))}catch(a){a=Hg(a);if(!_d(a,6))throw Gg(a)}if(!(b.c.gb('integerUnsaturation')===undefined)){try{s=(ei(),Kj('true',b.c.gb('integerUnsaturation')))}catch(a){a=Hg(a);if(!_d(a,6))throw Gg(a)}}if(!(b.c.gb('useUnsaturation')===undefined)){try{bb=(ei(),Kj('true',b.c.gb('useUnsaturation')))}catch(a){a=Hg(a);if(!_d(a,6))throw Gg(a)}}if(!(b.c.gb('numberOfResultsOnly')===undefined)){try{R=(ei(),Kj('true',b.c.gb('numberOfResultsOnly')))}catch(a){a=Hg(a);if(!_d(a,6))throw Gg(a)}}try{I=Oi(b.c.gb('maxNumberRows'))}catch(a){a=Hg(a);if(!_d(a,6))throw Gg(a)}try{Y=Oi(b.c.gb('monoisotopicMass'))}catch(a){a=Hg(a);if(!_d(a,6))throw Gg(a)}try{F=Oi(b.c.gb('massRange'))}catch(a){a=Hg(a);if(!_d(a,6))throw Gg(a)}P=Y-F;H=Y+F;try{H=Oi(b.c.gb('maxMass'))}catch(a){a=Hg(a);if(!_d(a,6))throw Gg(a)}!(b.c.gb('mfRange')===undefined)&&b.c.gb('mfRange')!=null&&b.c.gb('mfRange').length>0&&(N=b.c.gb('mfRange'));if(Y<0){Ju(A,'error',new Id('monoisotopicMass must be specified and larger than 0'));return A}B=new Mu;Ju(B,'minUnsaturation',new hd(Q));Ju(B,'maxUnsaturation',new hd(K));Ju(B,'integerUnsaturation',(Xc(),s?Wc:Vc));Ju(B,'useUnsaturation',bb?Wc:Vc);Ju(B,'numberOfResultsOnly',R?Wc:Vc);Ju(B,'minMass',new hd(Bh(mh(Math.round(P*dv)))/dv));Ju(B,'maxMass',new hd(Bh(mh(Math.round(H*dv)))/dv));Ju(B,'massRange',new hd(Bh(mh(Math.round(F*dv)))/dv));N==null?Ju(B,'mfRange',(cd(),cd(),bd)):Ju(B,'mfRange',new Id(N));Ju(B,'monoisotopicMass',new hd(Bh(mh(Math.round(Y*dv)))/dv));U==null?Ju(B,'referenceVersion',(cd(),cd(),bd)):Ju(B,'referenceVersion',new Id(U));Ju(B,'jcampLink',v?Wc:Vc);u==null?Ju(B,'jcampBaseURL',(cd(),cd(),bd)):Ju(B,'jcampBaseURL',new Id(u));Ju(B,'typedResult',$?Wc:Vc);Ju(A,'options',B.a);t={l:0,m:0,h:0};S={l:0,m:0,h:0};f=0;g=0;try{e=new ht(N,d,c,false);if(e.d.b.length!=1){Ju(A,'error',new Id('Number of parts not equal to 1'));return A}f=Ro(e.d,0).a;g=f<0?-f:f;if(f!=0){Y=Y*g+f*nv;P=P*g+f*nv;H=H*g+f*nv;F=F*g}T=Bu(Ro(e.d,0),Y+F);if(T){j=Sd(je,av,0,T.a.b.length,7,1);O=Sd(je,av,0,T.a.b.length,7,1);G=Sd(je,av,0,T.a.b.length,7,1);xu(T,O,G);Ju(A,'bruteForceIteration',new hd(Oi(Xl(yu(T),0))));Z=false;k=0;J=T.a.b.length;Ws((Vq(0,T.a.b.length),Ro(T.a,0)),0,Y,O[0],G[0],F);while(!Z){if(oh(t,{l:3511296,m:476,h:0})){throw new It('Iteration number is over the current maximum of: 2000000000')}if(j[k]>=P&&j[k]<=H){ab=hu(T,l);if(!bb||!ab||ab.a>=Q&&ab.a<=K&&(!s||ab.a==ge(ab.a))){S=ih(S,{l:1,m:0,h:0});if(!R){if(X.g.d>=I){if(rj(Ao(fr(X.g)).a)>rj(j[k]-Y)){Wm(vo(X.g));Zr(X,new Du(j[k]-Y,j[k],ab,Au(T,c)))}}else{Zr(X,new Du(j[k]-Y,j[k],ab,Au(T,c)))}}}}while(k<J&&k>=0){t=ih(t,{l:1,m:0,h:0});i=(Vq(k,T.a.b.length),Ro(T.a,k));if(i.b<i.c){++i.b;k==0?(j[0]=i.a.e*i.b):(j[k]=j[k-1]+i.a.e*i.b);if(k<J-1){++k;Ws((Vq(k,T.a.b.length),Ro(T.a,k)),j[k-1],Y,O[k],G[k],F)}else{break}}else{--k}}k<0&&(Z=true)}}Ju(A,'realIteration',new hd(Bh(Ah(t,{l:1,m:0,h:0}))));Ju(A,'numberResults',new hd(Bh(S)));Ju(A,'charge',new hd(f))}catch(a){a=Hg(a);if(_d(a,4)){m=a;Lu(A,'error',ob(m)+'\r'+(ti(Dg),Dg.k+'@'+nj(Nb(B),16)))}else throw Gg(a)}D=new Gu;h='';f!=0&&(f>0?(h='(+'+f+')'):(h='('+f+')'));for(W=Fo(new Go(X.g));Fn(W.a.a);){V=Ko(W);C=new Mu;if(f==0){p=Bh(mh(zj(V.a*dv)))/dv;o=Bh(mh(zj(V.c*dv)))/dv}else{p=Bh(mh(zj(V.a/g*dv)))/dv;o=Bh(mh(zj((V.c-f*nv)/g*dv)))/dv}Ju(C,'error',new hd(p));Ju(C,'em',new hd(o));Ju(C,'ppm',new hd(Bh(mh(Math.round(p/o*dv)))/dv*cv));Lu(C,'info',V.b+h);try{w=u+V.b+'&fwhm='+q;r>0&&(w+='&gaussianWidth='+r);if($){L=new Mu;Ju(L,'type',new Id('mf'));Lu(L,'value',ft(new gt(V.b+h,d,c)));Ju(C,'mf',L.a);if(v){M=new Mu;Ju(M,'type',new Id('jcamp'));w==null?Ju(M,'url',(cd(),cd(),bd)):Ju(M,'url',new Id(w));Ju(C,'jcamp',M.a)}}else{Lu(C,'mf',ft(new gt(V.b+h,d,c)));v&&(w==null?Ju(C,'jcampURL',(cd(),cd(),bd)):Ju(C,'jcampURL',new Id(w)))}}catch(a){a=Hg(a);if(_d(a,4)){n=a;Lu(C,'mf',ob(n))}else throw Gg(a)}try{Ju(C,'unsat',new hd(Bh(mh(zj(V.d.a*dv)))/dv))}catch(a){a=Hg(a);if(!_d(a,6))throw Gg(a)}Fu(D,C.a)}Ju(A,'results',D.a);return A}
function Ht(){Ht=Lg;var b,c,d,e,f,g,h,i,j,k,l,m;Ft=new zp;e=new zp;k=Qj('1\tH\tHydrogen\t1.0079407538967635\n2\tHe\tHelium\t4.002601932146926\n3\tLi\tLithium\t6.940037632200444\n4\tBe\tBeryllium\t9.01218224\n5\tB\tBoron\t10.8110281284\n6\tC\tCarbon\t12.010735896764565\n7\tN\tNitrogen\t14.006703211872013\n8\tO\tOxygen\t15.99940492727602\n9\tF\tFluorine\t18.998403227\n10\tNe\tNeon\t20.180046379828486\n11\tNa\tSodium\t22.989769280929\n12\tMg\tMagnesium\t24.305051612756515\n13\tAl\tAluminium\t26.9815386312\n14\tSi\tSilicon\t28.085498706539465\n15\tP\tPhosphorus\t30.973761632000002\n16\tS\tSulfur\t32.0647872364133\n17\tCl\tChlorine\t35.4529375824264\n18\tAr\tArgon\t39.947676713373\n19\tK\tPotassium\t39.0983011264695\n20\tCa\tCalcium\t40.078022655762524\n21\tSc\tScandium\t44.95591199\n22\tTi\tTitanium\t47.86674933516\n23\tV\tVanadium\t50.9414675085\n24\tCr\tChromium\t51.99613314762095\n25\tMn\tManganese\t54.93804517\n26\tFe\tIron\t55.8451456935552\n27\tCo\tCobalt\t58.93319506999999\n28\tNi\tNickel\t58.69335163208455\n29\tCu\tCopper\t63.546039795084994\n30\tZn\tZinc\t65.40872812701322\n31\tGa\tGallium\t69.72306563428617\n32\tGe\tGermanium\t72.63984326005341\n33\tAs\tArsenic\t74.92159652\n34\tSe\tSelenium\t78.9593882599375\n35\tBr\tBromine\t79.9035279923569\n36\tKr\tKrypton\t83.7980066431168\n37\tRb\tRubidium\t85.46766359470149\n38\tSr\tStrontium\t87.6166441185128\n39\tY\tYttrium\t88.905848327\n40\tZr\tZirconium\t91.22364763203382\n41\tNb\tNiobium\t92.90637812599999\n42\tMo\tMolybdenum\t95.93759212713759\n43\tTc\tTechnetium\t98.0\n44\tRu\tRuthenium\t101.0649455723334\n45\tRh\tRhodium\t102.90550430000002\n46\tPd\tPalladium\t106.41532914746399\n47\tAg\tSilver\t107.868151248228\n48\tCd\tCadmium\t112.41155226203729\n49\tIn\tIndium\t114.81808621342\n50\tSn\tTin\t118.71010849931781\n51\tSb\tAntimony\t121.75978615571421\n52\tTe\tTellurium\t127.60312786587177\n53\tI\tIodine\t126.9044734\n54\tXe\tXenon\t131.29276070673757\n55\tCs\tCaesium\t132.90545193324\n56\tBa\tBarium\t137.3268918829641\n57\tLa\tLanthanum\t138.90545400916656\n58\tCe\tCerium\t140.11572627079408\n59\tPr\tPraseodymium\t140.907652826\n60\tNd\tNeodymium\t144.236131428275\n61\tPm\tPromethium\t145.0\n62\tSm\tSamarium\t150.3663485610868\n63\tEu\tEuropium\t151.96437050019\n64\tGd\tGadolinium\t157.25212224243995\n65\tTb\tTerbium\t158.925346827\n66\tDy\tDysprosium\t162.49946572489424\n67\tHo\tHolmium\t164.930322127\n68\tEr\tErbium\t167.25907628559352\n69\tTm\tThulium\t168.934213327\n70\tYb\tYtterbium\t173.0376956147714\n71\tLu\tLutetium\t174.96672140854997\n72\tHf\tHafnium\t178.4849721651158\n73\tTa\tTantalum\t180.9478757552806\n74\tW\tTungsten\t183.8417781725967\n75\tRe\tRhenium\t186.206706624852\n76\tOs\tOsmium\t190.2248630659075\n77\tIr\tIridium\t192.2160564328\n78\tPt\tPlatinum\t195.077807984934\n79\tAu\tGold\t196.96656876\n80\tHg\tMercury\t200.599166666798\n81\tTl\tThallium\t204.38341252384\n82\tPb\tLead\t207.21690767600003\n83\tBi\tBismuth\t208.98039871599997\n84\tPo\tPolonium\t209.0\n85\tAt\tAstatine\t210.0\n86\tRn\tRadon\t222.0\n87\tFr\tFrancium\t223.0\n88\tRa\tRadium\t226.0\n89\tAc\tActinium\t227.0\n90\tTh\tThorium\t232.038055321\n91\tPa\tProtactinium\t231.035884024\n92\tU\tUranium\t238.02891028165737\n93\tNp\tNeptunium\t237.0\n94\tPu\tPlutonium\t244.0\n95\tAm\tAmericium\t0.0\n96\tCm\tCurium\t0.0\n97\tBk\tBerkelium\t0.0\n98\tCf\tCalifornium\t0.0\n99\tEs\tEinsteinium\t0.0\n100\tFm\tFermium\t0.0\n101\tMd\tMendelevium\t0.0\n102\tNo\tNobelium\t0.0\n103\tLr\tLawrencium\t0.0\n104\tRf\tRutherfordium\t0.0\n105\tDb\tDubnium\t0.0\n106\tSg\tSeaborgium\t0.0\n107\tBh\tBohrium\t0.0\n108\tHs\tHassium\t0.0\n109\tMt\tMeitnerium\t0.0\n110\tDs\tDarmstadtium\t0.0\n111\tRg\tRoentgenium\t0.0\n112\tCn\tCopernicium\t0.0\n113\tUut\tUnuntrium\t0.0\n114\tUuq\t\t0.0\n115\tUup\tUnunpentium\t0.0\n116\tUuh\t\t0.0\n117\tUus\tUnunseptium\t0.0','[\r\n]+',0);for(g=0;g<k.length;g++){m=Qj(k[g],'\t',0);c=new Ps(Oi(m[3]),Tj(m[1]),m[2],Pi(m[0]));hn(Ft,c.g,c);hn(e,m[0],c)}k=Qj('1\t1.007825032071\t99.9885\t1\n2\t2.01410177784\t0.0115\t1\n3\t3.016049277725\t0\t1\n4\t3.016029319126\t0.00013\t2\n5\t4.002603254156\t99.99987\t2\n6\t6.01512279516\t7.59\t3\n7\t7.016004558\t92.41\t3\n8\t9.01218224\t100\t4\n9\t10.01293704\t19.9\t5\n10\t11.00930544\t80.1\t5\n11\t12.0\t98.93\t6\n12\t13.00335483781\t1.07\t6\n13\t14.0032419894\t0\t6\n14\t14.00307400486\t99.636\t7\n15\t15.00010889827\t0.364\t7\n17\t16.9991317012\t0.038\t8\n16\t15.9949146195616\t99.757\t8\n18\t17.99916107\t0.205\t8\n19\t18.998403227\t100\t9\n21\t20.993846684\t0.27\t10\n20\t19.992440175419\t90.48\t10\n22\t21.99138511419\t9.25\t10\n23\t22.989769280929\t100\t11\n25\t24.985836923\t10\t12\n24\t23.98504170014\t78.99\t12\n26\t25.9825929293\t11.01\t12\n27\t26.9815386312\t100\t13\n29\t28.97649470022\t4.685\t14\n28\t27.976926532519\t92.223\t14\n30\t29.973770173\t3.092\t14\n31\t30.973761632\t100\t15\n34\t33.9678669012\t4.25\t16\n35\t35.967080762\t0.01\t16\n32\t31.9720710015\t94.99\t16\n33\t32.9714587615\t0.75\t16\n36\t34.968852684\t75.76\t17\n37\t36.965902595\t24.24\t17\n38\t35.96754510629\t0.3365\t18\n39\t37.96273244\t0.0632\t18\n40\t39.962383122529\t99.6003\t18\n42\t39.9639984821\t0.0117\t19\n43\t40.9618257621\t6.7302\t19\n41\t38.963706682\t93.2581\t19\n49\t47.9525344\t0.187\t20\n48\t45.953692624\t0.004\t20\n46\t42.95876663\t0.135\t20\n47\t43.95548184\t2.086\t20\n44\t39.9625909822\t96.941\t20\n45\t41.9586180127\t0.647\t20\n50\t44.95591199\t100\t21\n51\t45.95263169\t8.25\t22\n55\t49.94479129\t5.18\t22\n54\t48.94787009\t5.41\t22\n53\t47.94794639\t73.72\t22\n52\t46.95176319\t7.44\t22\n57\t50.943959511\t99.75\t23\n56\t49.947158511\t0.25\t23\n59\t51.94050758\t83.789\t24\n58\t49.946044211\t4.345\t24\n61\t53.93888048\t2.365\t24\n60\t52.94064948\t9.501\t24\n62\t54.93804517\t100\t25\n64\t55.93493757\t91.754\t26\n65\t56.93539407\t2.119\t26\n66\t57.93327568\t0.282\t26\n63\t53.93961057\t5.845\t26\n67\t58.93319507\t100\t27\n68\t57.93534297\t68.0769\t28\n69\t59.93078647\t26.2231\t28\n70\t60.93105607\t1.1399\t28\n71\t61.92834516\t3.6345\t28\n72\t63.92796607\t0.9256\t28\n73\t62.92959756\t69.15\t29\n74\t64.92778957\t30.85\t29\n76\t65.92603341\t27.975\t30\n77\t66.92712731\t4.102\t30\n78\t67.92484421\t19.024\t30\n79\t69.925319321\t0.631\t30\n75\t63.92914227\t48.268\t30\n81\t70.924701311\t39.892\t31\n80\t68.925573613\t60.108\t31\n85\t73.921177818\t36.72\t32\n84\t72.923458918\t7.76\t32\n86\t75.921402618\t7.83\t32\n83\t71.922075818\t27.31\t32\n82\t69.924247411\t20.38\t32\n87\t74.92159652\t100\t33\n93\t81.916699422\t8.73\t34\n92\t79.916521321\t49.61\t34\n89\t75.919213618\t9.37\t34\n88\t73.922476418\t0.89\t34\n91\t77.917309118\t23.77\t34\n90\t76.919914018\t7.63\t34\n95\t80.916290621\t49.31\t35\n94\t78.918337122\t50.69\t35\n100\t83.9115073\t56.987\t36\n101\t85.9106107311\t17.279\t36\n98\t81.913483619\t11.593\t36\n99\t82.9141363\t11.5\t36\n96\t77.920364812\t0.355\t36\n97\t79.916379016\t2.286\t36\n102\t84.91178973812\t72.17\t37\n103\t86.90918052713\t27.83\t37\n106\t86.908877112\t7\t38\n107\t87.905612112\t82.58\t38\n104\t83.9134253\t0.56\t38\n105\t85.909260212\t9.86\t38\n108\t88.905848327\t100\t39\n113\t95.90827343\t2.8\t40\n112\t93.906315226\t17.38\t40\n110\t90.905645825\t11.22\t40\n111\t91.905040825\t17.15\t40\n109\t89.904704425\t51.45\t40\n114\t92.906378126\t100\t41\n119\t96.906021521\t9.56\t42\n118\t95.904679521\t16.68\t42\n117\t94.905842121\t15.9\t42\n116\t93.905088321\t9.23\t42\n115\t91.9068114\t14.77\t42\n121\t99.9074776\t9.67\t42\n120\t97.905408221\t24.19\t42\n124\t98.906254721\t0\t43\n123\t97.9072164\t0\t43\n122\t96.9063655\t0\t43\n129\t100.905582122\t17.06\t44\n127\t98.905939322\t12.76\t44\n128\t99.904219522\t12.6\t44\n126\t97.9052877\t1.87\t44\n131\t103.9054333\t18.62\t44\n125\t95.9075988\t5.54\t44\n130\t101.904349322\t31.55\t44\n132\t102.9055043\t100\t45\n137\t107.9038924\t26.46\t46\n136\t105.9034864\t27.33\t46\n138\t109.90515312\t11.72\t46\n133\t101.9056093\t1.02\t46\n135\t104.9050854\t22.33\t46\n134\t103.9040364\t11.14\t46\n139\t106.9050975\t51.839\t47\n140\t108.9047523\t48.161\t47\n141\t105.9064596\t1.25\t48\n143\t109.903002129\t12.49\t48\n142\t107.9041846\t0.89\t48\n144\t110.904178129\t12.8\t48\n145\t111.902757829\t24.13\t48\n146\t112.904401729\t12.22\t48\n147\t113.903358529\t28.73\t48\n148\t115.9047563\t7.49\t48\n149\t112.9040583\t4.29\t49\n150\t114.9038785\t95.71\t49\n152\t113.9027793\t0.66\t50\n153\t114.9033423\t0.34\t50\n154\t115.9017413\t14.54\t50\n155\t116.9029523\t7.68\t50\n156\t117.9016033\t24.22\t50\n157\t118.9033083\t8.59\t50\n158\t119.902194727\t32.58\t50\n159\t121.903439029\t4.63\t50\n160\t123.905273915\t5.79\t50\n151\t111.9048185\t0.97\t50\n162\t122.904214022\t42.79\t51\n161\t120.903815724\t57.21\t51\n170\t129.906224421\t34.08\t52\n169\t127.904463119\t31.74\t52\n168\t125.903311716\t18.84\t52\n163\t119.9040201\t0.09\t52\n167\t124.904430716\t7.07\t52\n166\t123.902817916\t4.74\t52\n165\t122.904270016\t0.89\t52\n164\t121.903043916\t2.55\t52\n171\t126.9044734\t100\t53\n175\t128.90477948\t26.4006\t54\n174\t127.903531315\t1.9102\t54\n173\t125.9042747\t0.089\t54\n172\t123.90589302\t0.0952\t54\n178\t131.90415351\t26.9086\t54\n179\t133.90539459\t10.4357\t54\n176\t129.90350808\t4.071\t54\n177\t130.90508241\t21.2324\t54\n180\t135.9072198\t8.8573\t54\n181\t132.90545193324\t100\t55\n186\t135.90457594\t7.854\t56\n187\t136.90582745\t11.232\t56\n184\t133.90450844\t2.417\t56\n185\t134.90568864\t6.592\t56\n188\t137.90524725\t71.698\t56\n182\t129.90632083\t0.106\t56\n183\t131.905061311\t0.101\t56\n190\t138.906353326\t99.91\t57\n189\t137.9071124\t0.09\t57\n191\t135.90717214\t0.185\t58\n193\t139.905438726\t88.45\t58\n192\t137.90599111\t0.251\t58\n194\t141.9092443\t11.114\t58\n195\t140.907652826\t100\t59\n201\t147.9168933\t5.7\t60\n200\t145.913116925\t17.2\t60\n202\t149.9208913\t5.6\t60\n197\t142.909814325\t12.2\t60\n196\t141.907723325\t27.2\t60\n199\t144.912573625\t8.3\t60\n198\t143.910087325\t23.8\t60\n204\t146.915138526\t0\t61\n203\t144.9127493\t0\t61\n205\t143.9119993\t3.07\t62\n207\t147.914822726\t11.24\t62\n206\t146.914897926\t14.99\t62\n208\t148.917184726\t13.82\t62\n209\t149.917275526\t7.38\t62\n210\t151.919732427\t26.75\t62\n211\t153.922209327\t22.75\t62\n212\t150.919850226\t47.81\t63\n213\t152.921230326\t52.19\t63\n220\t159.927054127\t21.86\t64\n216\t154.922622027\t14.8\t64\n217\t155.922122727\t20.47\t64\n218\t156.923960127\t15.65\t64\n219\t157.924103927\t24.84\t64\n214\t151.919791027\t0.2\t64\n215\t153.920865627\t2.18\t64\n221\t158.925346827\t100\t65\n222\t155.9242837\t0.056\t66\n223\t157.9244094\t0.095\t66\n228\t163.929174827\t28.26\t66\n227\t162.928731227\t24.896\t66\n226\t161.926798427\t25.475\t66\n225\t160.926933427\t18.889\t66\n224\t159.925197527\t2.329\t66\n229\t164.930322127\t100\t67\n235\t169.93546433\t14.91\t68\n234\t167.932370227\t26.978\t68\n233\t166.932048227\t22.869\t68\n232\t165.930293127\t33.503\t68\n231\t163.9292003\t1.601\t68\n230\t161.9287784\t0.139\t68\n236\t168.934213327\t100\t69\n239\t170.936325826\t14.28\t70\n238\t169.934761826\t3.04\t70\n237\t167.9338975\t0.13\t70\n242\t173.938862126\t31.83\t70\n243\t175.942571728\t12.76\t70\n240\t171.936381526\t21.83\t70\n241\t172.938210826\t16.13\t70\n244\t174.940771823\t97.41\t71\n245\t175.942686323\t2.59\t71\n250\t178.945816123\t13.62\t72\n251\t179.946550023\t35.08\t72\n248\t176.943220723\t18.6\t72\n249\t177.943698823\t27.28\t72\n246\t173.9400463\t0.16\t72\n247\t175.941408624\t5.26\t72\n252\t179.947464824\t0.012\t73\n253\t180.947995819\t99.988\t73\n258\t185.954364119\t28.43\t74\n254\t179.9467044\t0.12\t74\n255\t181.94820429\t26.5\t74\n256\t182.95022309\t14.31\t74\n257\t183.95093129\t30.64\t74\n259\t184.952955013\t37.4\t75\n260\t186.955753115\t62.6\t75\n262\t185.953838215\t1.59\t76\n263\t186.955750515\t1.96\t76\n261\t183.952489114\t0.02\t76\n266\t189.958447016\t26.26\t76\n267\t191.961480727\t40.78\t76\n264\t187.955838215\t13.24\t76\n265\t188.958147516\t16.15\t76\n268\t190.960594018\t37.3\t77\n269\t192.962926418\t62.7\t77\n275\t197.9678933\t7.163\t78\n274\t195.96495159\t25.242\t78\n273\t194.96479119\t33.832\t78\n272\t193.96268039\t32.967\t78\n270\t189.9599326\t0.014\t78\n271\t191.961038027\t0.782\t78\n276\t196.96656876\t100\t79\n279\t198.96827994\t16.87\t80\n278\t197.96676904\t9.97\t80\n277\t195.9658333\t0.15\t80\n283\t203.97349394\t6.87\t80\n282\t201.97064306\t29.86\t80\n281\t200.97030236\t13.18\t80\n280\t199.96832604\t23.1\t80\n285\t204.974427514\t70.48\t81\n284\t202.972344214\t29.52\t81\n288\t206.975896913\t22.1\t82\n289\t207.976652113\t52.4\t82\n287\t205.974465313\t24.1\t82\n286\t203.973043613\t1.4\t82\n290\t208.980398716\t100\t83\n291\t208.98243042\t0\t84\n292\t209.982873713\t0\t84\n293\t209.9871488\t0\t85\n294\t210.98749633\t0\t85\n295\t210.9906017\t0\t86\n296\t220.011394024\t0\t86\n297\t222.017577725\t0\t86\n298\t223.019735926\t0\t87\n299\t223.018502227\t0\t88\n300\t224.020211824\t0\t88\n301\t226.025409825\t0\t88\n302\t228.031070326\t0\t88\n303\t227.027752126\t0\t89\n305\t232.038055321\t100\t90\n304\t230.033133819\t0\t90\n306\t231.035884024\t100\t91\n307\t233.039635229\t0\t92\n309\t235.04392992\t0.7204\t92\n308\t234.04095212\t0.0054\t92\n311\t238.05078822\t99.2742\t92\n310\t236.04556802\t0\t92\n313\t237.04817342\t0\t93\n312\t236.0465705\t0\t93\n315\t239.05216342\t0\t94\n314\t238.04955992\t0\t94\n317\t241.05685152\t0\t94\n316\t240.05381352\t0\t94\n319\t244.0642045\t0\t94\n318\t242.05874262\t0\t94\n320\t241.05682912\t0\t95\n321\t243.061381125\t0\t95\n326\t247.0703545\t0\t96\n327\t248.0723495\t0\t96\n324\t245.065491222\t0\t96\n325\t246.067223722\t0\t96\n322\t243.061389122\t0\t96\n323\t244.06275262\t0\t96\n328\t247.0703076\t0\t97\n329\t249.074986728\t0\t97\n332\t251.0795875\t0\t98\n333\t252.0816265\t0\t98\n330\t249.074853524\t0\t98\n331\t250.076406122\t0\t98\n334\t252.0829805\t0\t99\n335\t257.0951057\t0\t100\n337\t260.1036534\t0\t101\n336\t258.0984315\t0\t101\n338\t259.1010311\t0\t102\n339\t262.1096322\t0\t103\n340\t265.1167046\t0\t104\n341\t268.1254557\t0\t105\n342\t271.133477\t0\t106\n343\t272.1380365\t0\t107\n344\t270.1346531\t0\t108\n345\t276.1511673\t0\t109\n346\t281.1620678\t0\t110\n347\t280.164478\t0\t111\n348\t285.1741178\t0\t112\n349\t284.1780886\t0\t113\n350\t289.1872879\t0\t114\n351\t288.1924992\t0\t115\n352\t292.20755101\t0\t117','[\r\n]+',0);for(h=0;h<k.length;h++){m=Qj(k[h],'\t',0);c=en(e,m[3]);i=Oi(m[1]);j=Oi(m[2]);b=new Ct(ge(i+0.5),i,j,c.g);gn(c.b,new fj(b.c),b)}for(d=Vn(new Wn(Ft));un(d.a);){c=$n(d);Ks(c);if(c.b.b==0){l=new Ct(ge(c.c+0.5),c.c,100,c.g);gn(c.b,new fj(l.c),l)}}Gt=new zp;k=Qj("1\tAbu\t2-Aminobutyric acid diradical\tC4H7NO\r\n2\tAcet\tAcetyl\tC2H3O\r\n3\tAcm\tAcetamidomethyl\tC3H6NO\r\n4\tAdao\tAdamantyloxy\tC10H15O\r\n5\tAib\talpha-Aminoisobutyric acid diradical\tC4H7NO\r\n6\tAla\tAlainine diradical\tC3H5NO\r\n7\tArg\tArginine diradical\tC6H12N4O\r\n8\tArgp\tArginine triradical\tC6H11N4O\r\n9\tAsn\tAsparagine diradical\tC4H6N2O2\r\n10\tAsnp\tAsparagine triradical\tC4H5N2O2\r\n11\tAsp\tAspartic acid diradical\tC4H5NO3\r\n12\tAspp\tAspartic acid triradical\tC4H4NO3\r\n13\tAsu\talpha-Aminosuberic acid diradical\tC8H13NO3\r\n14\tAsup\talpha-Aminosuberic acid triradical\tC8H12NO3\r\n15\tBoc\tt-Butoxycarbonyl\tC5H9O2\r\n16\tBom\tBenzyloxymethyl\tC8H9O\r\n17\tBrz\t2-Bromobenzyloxycarbonyl\tC8H6BrO2\r\n18\tBu\tButyl\tC4H9\r\n19\tBum\tt-Butoxymethyl\tC5H11O\r\n20\tBz\tBenzoyl\tC7H5O\r\n21\tBzl\tBenzyl\tC7H7\r\n22\tBn\tBenzyl\tC7H7\r\n23\tBzlo\tBenzyloxy\tC7H7O\r\n24\tCha\tbeta-Cyclohexylalanine diradical\tC9H15NO\r\n25\tChxo\tCyclohexyloxy\tC6H11O\r\n26\tCit\tCitrulline diradical\tC6H11N3O2\r\n27\tCitp\tCitrulline triradical\tC6H10N3O2\r\n28\tClz\t2-Chlorobenzyloxycarbonyl\tC8H6ClO2\r\n29\tCp\tCyclopentadienyl\tC5H5\r\n30\tCys\tCysteine diradical\tC3H5NOS\r\n31\tCysp\tCysteine triradical\tC3H4NOS\r\n32\tD\tDeuterium\t[2H]\r\n33\tDde\tDde\tC10H13O2\r\n34\tDnp\t2,4-Dinitrophenyl\tC6H3N2O4\r\n35\tEt\tEthyl\tC2H5\r\n36\tFmoc\tFluorenylmethoxycarbonyl\tC15H11O2\r\n37\tFor\tFormyl\tCHO\r\n38\tGln\tGlutamine diradical\tC5H8N2O2\r\n39\tGlnp\tGlutamine triradical\tC5H7N2O2\r\n40\tGlp\tPyroglutamine\tC5H5NO2\r\n41\tGlu\tGlutamic acid diradical\tC5H7NO3\r\n42\tGlup\tGlutamic acid triradical\tC5H6NO3\r\n43\tGly\tGlycine diradical\tC2H3NO\r\n44\tHci\tHomocitrulline diradical\tC7H13N3O2\r\n45\tHcip\tHomocitrulline triradical\tC7H12N3O2\r\n46\tHis\tHistidine diradical\tC6H7N3O\r\n47\tHisp\tHistidine triradical\tC6H6N3O\r\n48\tHser\tHomoserine diradical\tC4H7NO2\r\n49\tHserp\tHomoserine triradical\tC4H6NO2\r\n50\tHyp\tHydroxyproline diradical\tC5H7NO2\r\n51\tHypp\tHydroxyproline triradical\tC5H6NO2\r\n52\tIle\tIsoleucine diradical\tC6H11NO\r\n53\tIvdde\t1-[4,4-dimethyl-2,6-dioxocyclohexylidene)3-methylb\tC14H21O2\r\n54\tLeu\tLeucine diradical\tC6H11NO\r\n55\tLys\tLysine diradical\tC6H12N2O\r\n56\tLysp\tLysine triradical\tC6H11N2O\r\n57\tMbh\t4,4'-Dimethoxybenzhydryl\tC15H15O2\r\n58\tMe\tMethyl\tCH3\r\n59\tMebzl\t4-Methylbenzyl\tC8H9\r\n60\tMeobzl\t4-Methoxybenzyl1-[4,4-dimethyl-2,6-dioxocyclohexyl\tC8H9O\r\n61\tMet\tMethionine diradical\tC5H9NOS\r\n62\tMmt\t4-Methoxytrityl\tC20H17O\r\n63\tMtc\t2,2,5,7,8-pentamethylchroman-6-sulphonyl\tC14H19O3S\r\n64\tMtr\t4-Methoxy-2,3,6-trimethylbenzenesulphonyl\tC10H13O3S\r\n65\tMts\tMesitylene-2-sulphonyl\tC9H11O2S\r\n66\tMtt\t4-Methyltrityl\tC20H17\r\n67\tNle\tNorleucine diradical\tC6H11NO\r\n68\tNpys\t3-Nitro-2-pyridinesulphenyl\tC5H3N2O2S\r\n69\tNva\tNorvaline diradical\tC5H9NO\r\n70\tOdmab\tOdmab\tC20H26NO3\r\n71\tOrn\tOrnithine diradical\tC5H10N2O\r\n72\tOrnp\tOrnithine triradical\tC5H9N2O\r\n73\tPbf\t2,2,4,6,7-pentamethyldihydrobenzofurane-5-sulfonyl\tC13H17O3S\r\n74\tPen\tPenicillamine diradical\tC5H9NOS\r\n75\tPenp\tPenicillamine triradical\tC5H8NOS\r\n76\tPh\tPhenyl\tC6H5\r\n77\tPhe\tPhenylalanine diradical\tC9H9NO\r\n78\tPhepcl\t4-Chlorophenylalanine diradical\tC9H8ClNO\r\n79\tPhg\tPhenylglycine\tC8H7NO\r\n80\tPmc\t2,2,5,7,8-Pentamethylchroman-6-sulphonyl\tC14H19O3S\r\n81\tPro\tProline diradical\tC5H7NO\r\n82\tPyr\tPyroglutamine\tC5H5NO2\r\n83\tSar\tSarcosine diradical\tC3H5NO\r\n84\tSer\tSerine diradical\tC3H5NO2\r\n85\tSerp\tSerine triradical\tC3H4NO2\r\n86\tSta\tStatine diradical\tC8H15NO2\r\n87\tStap\tStatine triradical\tC8H14NO2\r\n88\tTacm\tTrimethylacetamidomethyl\tC6H12NO\r\n89\tTbdms\tt-Butyldimethylsilyl\tC6H15Si\r\n90\tTbu\tt-Butyl\tC4H9\r\n91\tTbuo\tt-Butoxy\tC4H9O\r\n92\tTbuthio\tt-Butylthio\tC4H9S\r\n93\tTfa\tTrifluoroacetyl\tC2F3O\r\n94\tThi\tbeta-(2-thenyl)alanine\tC7H7NOS\r\n95\tThr\tThreonine diradical\tC4H7NO2\r\n96\tThrp\tThreonine triradical\tC4H6NO2\r\n97\tTips\tTriisopropylsilyl\tC9H21Si\r\n98\tTms\tTrimethylsilyl\tC3H9Si\r\n99\tTos\tTosyl\tC7H7O2S\r\n100\tTrp\tTryptophan diradical\tC11H10N2O\r\n101\tTrpp\tTryptophan triradical\tC11H9N2O\r\n102\tTrt\tTrityl\tC19H15\r\n103\tTyr\tTyrosine diradical\tC9H9NO2\r\n104\tTyrp\tTyrosine triradical\tC9H8NO2\r\n105\tVal\tValine\tC5H9NO\r\n106\tValoh\tbeta-Hydroxyvaline diradical\tC5H9NO2\r\n107\tValohp\tbeta-Hydroxyvaline triradical\tC5H8NO2\r\n108\tXan\tXanthyl\tC13H9O\r\n109\tZ\tBenzyloxycarbonyl\tC8H7O2\r\n110\tT\tTritium\t[3H]",'[\r\n]+',0);for(f=0;f<k.length;f++){m=Qj(k[f],'\t',0);try{hn(Gt,m[1],new Bt(m[1],m[2],m[3],Ft,Gt))}catch(a){a=Hg(a);if(!_d(a,4))throw Gg(a)}}}
var Ou=2147483647,Pu={3:1,9:1},Qu={3:1,6:1,9:1},Ru={3:1},Su=4194303,Tu=1048575,Uu=524288,Vu=4194304,Wu=17592186044416,Xu=-9223372036854775808,Yu=1000000000,Zu=65536,$u=-2147483648,_u=65535,av={28:1,3:1},bv=100000,cv=1000000,dv=10000000000,ev=0.3010299956639812,fv=4294967296,gv=1073741824,hv={35:1},iv={37:1,27:1},jv={3:1,51:1},kv={3:1,50:1},lv={3:1,18:1,29:1,26:1},mv=4.9E-324,nv=5.4857990946E-4;var _,Kh,Ig={},Eg=-1;Kg(1,null,{},db);_.eQ=function eb(a){return this===a};_.gC=function gb(){return this.cZ};_.hC=function ib(){return Nb(this)};_.tS=function kb(){return cb(this)};_.toString=function(){return this.tS()};Yd={3:1,116:1,18:1,2:1};Ng();var Yd;Kg(68,1,{},vi);_.u=function wi(a){var b;b=new vi;b.e=4;a>1?(b.c=Di(this,a-1)):(b.c=this);return b};_.v=function Ci(){ti(this);return this.b};_.w=function Ei(){return ui(this)};_.A=function Gi(){ti(this);return this.i};_.B=function Ii(){return (this.e&4)!=0};_.C=function Ji(){return (this.e&1)!=0};_.tS=function Mi(){return ((this.e&2)!=0?'interface ':(this.e&1)!=0?'':'class ')+(ti(this),this.k)};_.e=0;_.g=0;var si=1;var $e=yi(1),me=yi(0),Oe=yi(68);Kg(9,1,Pu);_.n=function pb(){return this.f};_.tS=function qb(){return ob(this)};var ff=yi(9);Kg(6,9,Qu);var Se=yi(6);Kg(10,6,Qu,tb);var _e=yi(10);Kg(83,10,Qu);var oe=yi(83);Kg(38,83,{38:1,3:1,6:1,9:1},xb);_.n=function yb(){wb(this);return this.c};var ub;var le=yi(38);var Ab;Kg(117,1,{});var ne=yi(117);var Eb=0,Fb=0,Gb=0,Hb=-1;Kg(138,1,{});var lf=yi(138);Kg(139,138,{});var mf=yi(139);Kg(112,139,{},Xb);_.b={l:0,m:0,h:0};_.c=0;var Sb;var pe=yi(112);Kg(107,117,{},hc);var dc;var qe=yi(107);var kc;Kg(133,1,{});var ue=yi(133);Kg(84,133,{},qc);_.o=function rc(a,b){var c={},j;a.fnStack=[];var d=arguments.callee.caller;while(d){var e=(lc(),d.name||(d.name=oc(d.toString())));a.fnStack.push(e);var f=':'+e;var g=c[f];if(g){var h,i;for(h=0,i=g.length;h<i;h++){if(g[h]===d){return}}}(g||(c[f]=[])).push(d);d=d.caller}};_.p=function sc(a){var b,c,d,e;d=(lc(),a&&a.fnStack&&a.fnStack instanceof Array?a.fnStack:[]);c=d.length;e=Sd(af,Ru,31,c,0,1);for(b=0;b<c;b++){e[b]=new Ej(d[b],null,-1)}return e};var re=yi(84);Kg(134,133,{});_.o=function vc(c,d){function e(b){if(!('stack' in b)){try{throw b}catch(a){}}return b}
var f;typeof d=='string'?(f=e(new Error(d))):d instanceof Object&&'stack' in d?(f=d):(f=e(new Error));c.__gwt$backingJsError=f};_.q=function wc(a,b,c,d){return new Ej(b,a+'@'+d,c<0?-1:c)};_.p=function xc(a){var b,c,d,e,f,g,h;e=(lc(),h=a.__gwt$backingJsError,h&&h.stack?h.stack.split('\n'):[]);f=Sd(af,Ru,31,0,0,1);b=0;d=e.length;if(d==0){return f}g=uc(this,e[0]);Jj(g.d,'anonymous')||(f[b++]=g);for(c=1;c<d;c++){f[b++]=uc(this,e[c])}return f};var te=yi(134);Kg(85,134,{},yc);_.q=function zc(a,b,c,d){return new Ej(b,a,-1)};var se=yi(85);Kg(132,1,{});_.s=function Kc(){return null};var Ce=yi(132);Kg(66,132,{66:1},Oc,Pc);_.eQ=function Qc(a){if(!_d(a,66)){return false}return this.a==a.a};_.r=function Rc(){return Uc};_.hC=function Sc(){return Nb(this.a)};_.tS=function Tc(){var a,b,c;c=new uk('[');for(b=0,a=this.a.length;b<a;b++){b>0&&(c.a+=',',c);pk(c,Lc(this,b))}c.a+=']';return c.a};var ve=yi(66);Kg(76,132,{},Yc);_.r=function Zc(){return _c};_.tS=function $c(){return ei(),''+this.a};_.a=false;var Vc,Wc;var we=yi(76);Kg(110,10,Qu,ad);var xe=yi(110);Kg(106,132,{},dd);_.r=function ed(){return gd};_.tS=function fd(){return 'null'};var bd;var ye=yi(106);Kg(8,132,{8:1},hd);_.eQ=function jd(a){if(!_d(a,8)){return false}return this.a==a.a};_.r=function kd(){return nd};_.hC=function ld(){return ge((new Ri(this.a)).a)};_.tS=function md(){return this.a+''};_.a=0;var ze=yi(8);Kg(54,132,{54:1},td,ud);_.eQ=function vd(a){if(!_d(a,54)){return false}return this.a==a.a};_.r=function wd(){return zd};_.hC=function xd(){return Nb(this.a)};_.tS=function yd(){var a,b,c,d,e,f;f=new uk('{');a=true;e=od(this,Sd(ef,Ru,2,0,4,1));for(c=0,d=e.length;c<d;++c){b=e[c];a?(a=false):(f.a+=', ',f);qk(f,Cb(b));f.a+=':';pk(f,pd(this,b))}f.a+='}';return f.a};var Ae=yi(54);var Ad;Kg(11,132,{11:1},Id);_.eQ=function Jd(a){if(!_d(a,11)){return false}return Jj(this.a,a.a)};_.r=function Kd(){return Od};_.hC=function Ld(){return jk(this.a)};_.s=function Md(){return this};_.tS=function Nd(){return Cb(this.a)};var Be=yi(11);var Rg;var hh;var Fh,Gh,Hh,Ih;Kg(60,9,Pu);var Re=yi(60);Kg(17,60,Pu);var Me=yi(17);Kg(78,17,Pu,Uh);var He=yi(78);Kg(45,1,{});_.tS=function Yh(){return this.a};var Ie=yi(45);Kg(41,10,Qu,Zh);var Je=yi(41);Kg(49,10,Qu,$h,_h);var Ve=yi(49);Kg(109,49,Qu,ai);var Ke=yi(109);Kg(43,10,Qu,bi);var Le=yi(43);Kg(52,1,{3:1,52:1,18:1},fi);_.t=function hi(a){return gi(this.a,a.a)};_.eQ=function ii(a){return _d(a,52)&&a.a==this.a};_.hC=function ji(){return this.a?1231:1237};_.tS=function ki(){return ''+this.a};_.a=false;var ci,di;var Ne=yi(52);Kg(44,1,{3:1,44:1});var Ni;var Ze=yi(44);Kg(7,44,{3:1,18:1,7:1,44:1},Ri);_.t=function Ti(a){return Si(this.a,a.a)};_.eQ=function Ui(a){return Qi(this,a)};_.hC=function Vi(){return ge(this.a)};_.tS=function Yi(){return ''+this.a};_.a=0;var Pe=yi(7);Kg(29,1,{3:1,18:1,29:1});_.t=function $i(a){return this.b-a.b};_.eQ=function _i(a){return this===a};_.hC=function aj(){return Nb(this)};_.tS=function bj(){return this.a!=null?this.a:''+this.b};_.b=0;var Qe=yi(29);Kg(56,10,Qu,cj);var Te=yi(56);Kg(111,10,Qu,dj);var Ue=yi(111);Kg(19,44,{3:1,18:1,19:1,44:1},fj);_.t=function hj(a){return ej(this,a)};_.eQ=function ij(a){return _d(a,19)&&a.a==this.a};_.hC=function jj(){return this.a};_.tS=function mj(){return ''+this.a};_.a=0;var We=yi(19);var pj;Kg(59,10,Qu,Bj,Cj);var Xe=yi(59);Kg(20,56,{3:1,6:1,20:1,9:1},Dj);var Ye=yi(20);Kg(31,1,{3:1,31:1},Ej);_.eQ=function Fj(a){var b;if(_d(a,31)){b=a;return this.c==b.c&&Pq(this.d,b.d)&&Pq(this.a,b.a)&&Pq(this.b,b.b)}return false};_.hC=function Gj(){return gp(Vd(Rd($e,1),Ru,1,3,[oj(this.c),this.a,this.d,this.b]))};_.tS=function Hj(){return this.a+'.'+this.d+'('+(this.b!=null?this.b:'Unknown Source')+(this.c>=0?':'+this.c:'')+')'};_.c=0;var af=yi(31);var ef=yi(2);var ek,fk=0,gk;Kg(34,45,{116:1},mk,nk);var bf=yi(34);
Kg(23,45,{116:1},sk,tk,uk);var cf=yi(23);Kg(67,49,Qu,vk);var df=yi(67);Kg(42,10,Qu,xk,yk);var gf=yi(42);Kg(14,44,{3:1,18:1,44:1,14:1},Ok,Pk,Qk,Rk);_.t=function Uk(a){return Ik(this,a)};_.eQ=function Xk(a){var b;if(this===a){return true}if(_d(a,14)){b=a;return b.e==this.e&&(this.a<54?b.f==this.f:ml(this.c,b.c))}return false};_.hC=function Yk(){var a;if(this.b!=0){return this.b}if(this.a<54){a=mh(this.f);this.b=Ch(jh(a,{l:Su,m:Su,h:Tu}));this.b=33*this.b+Ch(jh(yh(a,32),{l:Su,m:Su,h:Tu}));this.b=17*this.b+ge(this.e);return this.b}this.b=17*pl(this.c)+ge(this.e);return this.b};_.tS=function _k(){return Nk(this)};_.a=0;_.b=0;_.d=0;_.e=0;_.f=0;var zk,Ak,Bk,Ck,Dk,Ek,Fk,Gk;var hf=yi(14);Kg(5,44,{3:1,18:1,44:1,5:1},xl,yl,zl,Al,Bl,Cl);_.t=function El(a){return jl(this,a)};_.eQ=function Fl(a){return ml(this,a)};_.hC=function Hl(){return pl(this)};_.tS=function Jl(){return Xl(this,0)};_.b=-2;_.c=0;_.d=0;_.e=0;var bl,cl,dl,el,fl,gl;var jf=yi(5);var Sl,Tl;var jm,km,lm;Kg(24,29,{3:1,18:1,29:1,24:1},Gm);var xm,ym,zm,Am,Bm,Cm,Dm,Em;var kf=zi(24,Hm);Kg(130,1,{});_.F=function Mm(a){return Jm(this,a)};_.H=function Nm(a){var b,c,d;d=this.G();a.length<d&&(a=Qd(a,d));c=this.D();for(b=0;b<d;++b){a[b]=c.O()}a.length>d&&(a[d]=null);return a};_.tS=function Om(){return Lm(this)};var nf=yi(130);Kg(129,1,{50:1});_.I=function Sm(a){return Pm(this,a)};_.J=function Tm(a){return !!Qm(this,a)};_.eQ=function Um(a){var b,c,d;if(a===this){return true}if(!_d(a,50)){return false}d=a;if(this.G()!=d.G()){return false}for(c=d.K().D();c.N();){b=c.O();if(!this.I(b)){return false}}return true};_.L=function Vm(a){return Xm(Qm(this,a))};_.hC=function Ym(){return lp(this.K())};_.G=function Zm(){return this.K().G()};_.tS=function $m(){var a,b,c,d;d=new uk('{');a=false;for(c=this.K().D();c.N();){b=c.O();a?(d.a+=', ',d):(a=true);qk(d,Rm(this,b.T()));d.a+='=';qk(d,Rm(this,b.U()))}d.a+='}';return d.a};var Cf=yi(129);Kg(79,129,{50:1});_.J=function jn(a){return _m(this,a)};_.K=function kn(){return new qn(this)};_.L=function ln(a){return dn(this,a)};_.M=function mn(a,b){return gn(this,a,b)};_.G=function nn(){return this.b};_.b=0;var qf=yi(79);Kg(131,130,hv);_.eQ=function on(a){var b;if(a===this){return true}if(!_d(a,35)){return false}b=a;if(b.G()!=this.G()){return false}return Km(this,b)};_.hC=function pn(){return lp(this)};var Hf=yi(131);Kg(61,131,hv,qn);_.F=function rn(a){if(_d(a,27)){return Pm(this.a,a)}return false};_.D=function sn(){return new wn(this.a)};_.G=function tn(){return this.a.b};var pf=yi(61);Kg(62,1,{},wn);_.N=function xn(){return un(this)};_.O=function yn(){return vn(this)};var of=yi(62);Kg(135,130,{51:1});_.P=function zn(a,b){throw new yk('Add not supported on this list')};_.Q=function An(a){this.P(this.G(),a);return true};_.eQ=function Bn(a){var b,c,d,e,f;if(a===this){return true}if(!_d(a,51)){return false}f=a;if(this.G()!=f.G()){return false}e=f.D();for(c=this.D();c.a<c.c.G();){b=(Dc(c.a<c.c.G()),c.c.R(c.b=c.a++));d=(Dc(e.a<e.c.G()),e.c.R(e.b=e.a++));if(!(ee(b)===ee(d)||b!=null&&fb(b,d))){return false}}return true};_.hC=function Cn(){return mp(this)};_.D=function Dn(){return new In(this)};_.S=function En(a){throw new yk('Remove not supported on this list')};var tf=yi(135);Kg(21,1,{},In);_.N=function Jn(){return Fn(this)};_.O=function Kn(){return Gn(this)};_.a=0;_.b=-1;var rf=yi(21);Kg(90,21,{},Ln);var sf=yi(90);Kg(63,131,hv,Nn);_.F=function On(a){return _m(this.a,a)};_.D=function Pn(){return Mn(this)};_.G=function Qn(){return this.a.b};var vf=yi(63);Kg(81,1,{},Sn);_.N=function Tn(){return un(this.a)};_.O=function Un(){return Rn(this)};var uf=yi(81);Kg(25,130,{},Wn);_.F=function Xn(a){return an(this.a,a)};_.D=function Yn(){return Vn(this)};_.G=function Zn(){return this.a.b};var xf=yi(25);Kg(82,1,{},_n);_.N=function ao(){return un(this.a)};_.O=function bo(){return $n(this)};var wf=yi(82);Kg(37,1,iv);_.eQ=function fo(a){var b;if(!_d(a,27)){return false}b=a;return Pq(this.c,b.T())&&Pq(this.d,b.U())};_.T=function go(){return this.c};_.U=function ho(){return this.d};_.hC=function io(){return Qq(this.c)^Qq(this.d)};_.V=function jo(a){return co(this,a)};_.tS=function ko(){return this.c+'='+this.d};var yf=yi(37);Kg(53,37,{37:1,53:1,27:1},lo);var zf=yi(53);Kg(80,37,iv,mo);_.V=function no(a){throw new xk};var Af=yi(80);Kg(136,1,{27:1});_.eQ=function oo(a){var b;if(!_d(a,27)){return false}b=a;return Pq(this.T(),b.T())&&Pq(this.U(),b.U())};_.hC=function po(){return Qq(this.T())^Qq(this.U())};_.tS=function qo(){return this.T()+'='+this.U()};var Bf=yi(136);Kg(137,129,{50:1});_.I=function wo(a){return ro(this,a)};_.J=function xo(a){return so(this,a)};_.K=function yo(){return new Bo(this)};_.L=function zo(a){return to(this,a)};var Gf=yi(137);Kg(73,131,hv,Bo);_.F=function Co(a){return _d(a,27)&&ro(this.a,a)};_.D=function Do(){return this.a.W()};_.G=function Eo(){return this.a.G()};var Df=yi(73);Kg(13,131,hv,Go);_.F=function Ho(a){return so(this.a,a)};_.D=function Io(){return Fo(this)};_.G=function Jo(){return this.a.d};var Ff=yi(13);Kg(97,1,{},Lo);_.N=function Mo(){return Fn(this.a.a)};_.O=function No(){return Ko(this)};var Ef=yi(97);Kg(46,135,jv,Xo,Yo);_.P=function Zo(a,b){Po(this,a,b)};_.Q=function $o(a){return Qo(this,a)};_.F=function _o(a){return So(this,a,0)!=-1};_.R=function ap(a){return Ro(this,a)};_.S=function bp(a){return To(this,a)};_.G=function cp(){return this.b.length};_.H=function fp(a){return Wo(this,a)};var If=yi(46);var op;Kg(108,1,{},qp);_.Y=function rp(a,b){Fc(a);Fc(b);return $j(a,b)};var Jf=yi(108);Kg(115,10,Qu,vp);var Kf=yi(115);Kg(114,10,Qu,wp);var Lf=yi(114);Kg(22,79,kv,zp);var Mf=yi(22);Kg(75,1,{},Hp);_.Z=function Ip(a){var b,c,d,e,f,g,h,i;for(g=Ep(this),h=0,i=g.length;h<i;++h){f=g[h];for(c=this.a[f],d=0,e=c.length;d<e;++d){b=c[d];if(xp(a,b.U())){return true}}}return false};_.$=function Jp(){return Object.create(null)};_._=function Kp(){return new Mp(this)};var Qf=yi(75);Kg(102,1,{},Mp);_.N=function Np(){return Lp(this)};_.O=function Op(){return Dc(Lp(this)),this.e=this.a[this.c++],this.e};_.b=-1;_.c=0;_.e=null;var Nf=yi(102);Kg(100,75,{},Pp);_.Z=function Qp(a){var b=this.a;for(var c in b){if(c==parseInt(c,10)){var d=b[c];for(var e=0,f=d.length;e<f;++e){var g=d[e];var h=g.U();if(this.ab(a,h)){return true}}}}return false};_.$=function Rp(){return {}};_._=function Sp(){var a=this.bb();var b=this.a;for(var c in b){if(c==parseInt(c,10)){var d=b[c];for(var e=0,f=d.length;e<f;++e){a.Q(d[e])}}}return a.D()};_.ab=function Tp(a,b){return ee(a)===ee(b)||a!=null&&fb(a,b)};_.bb=function Up(){return new Vp(this)};var Pf=yi(100);Kg(101,46,jv,Vp);_.S=function Wp(a){var b;return b=To(this,a),Gp(this.a,b.T()),b};var Of=yi(101);Kg(103,1,{},Xp);_.cb=function Yp(){return new Hp};_.db=function Zp(){return new mq};var Tf=yi(103);var $p;Kg(105,103,{},cq);_.db=function dq(){return new Lq};var Rf=yi(105);Kg(104,103,{},eq);_.cb=function fq(){return new Pp};_.db=function gq(){return new Cq};var Sf=yi(104);Kg(64,1,{},mq);_.Z=function nq(a){return hq(this,a)};_.eb=function oq(){return Object.create(null)};_._=function pq(){var a;a=this.hb();return new vq(this,a)};_.fb=function qq(a,b){return ee(a)===ee(b)||a!=null&&fb(a,b)};_.gb=function rq(a){return this.a[a]};_.hb=function sq(){return iq(this)};_.ib=function tq(a){return new yq(this,a)};_.jb=function uq(a,b){return jq(this,a,b)};var Zf=yi(64);Kg(89,1,{},vq);_.N=function wq(){return this.a<this.c.length};_.O=function xq(){return Dc(this.a<this.c.length),new yq(this.b,this.c[this.a++])};_.a=0;var Uf=yi(89);Kg(71,136,{27:1},yq);_.T=function zq(){return this.b};_.U=function Aq(){return this.a.gb(this.b)};_.V=function Bq(a){return this.a.jb(this.b,a)};var Vf=yi(71);Kg(86,64,{},Cq);_.Z=function Dq(a){var b=this.a;for(var c in b){if(c.charCodeAt(0)==58){var d=b[c];if(this.fb(a,d)){return true}}}return false};_.eb=function Eq(){return {}};_._=function Fq(){var a=this.kb();for(var b in this.a){if(b.charCodeAt(0)==58){var c=this.ib(b.substring(1));a.Q(c)}}return a.D()};_.gb=function Gq(a){return this.a[':'+a]};_.kb=function Hq(){return new Jq(this)};_.jb=function Iq(a,b){return jq(this,':'+a,b)};var Xf=yi(86);Kg(88,46,jv,Jq);_.S=function Kq(a){var b;return b=To(this,a),kq(this.a,':'+b.T()),b};var Wf=yi(88);Kg(87,64,{},Lq);_.Z=function Mq(a){var b;b=this.a['__proto__'];if(!(b===undefined)&&(ee(a)===ee(b)||a!=null&&fb(a,b))){return true}return hq(this,a)};_.hb=function Nq(){var a;a=iq(this);!(this.a['__proto__']===undefined)&&(a[a.length]='__proto__');return a};var Yf=yi(87);var $f=Ai();Kg(77,10,Qu,Oq);var _f=yi(77);Kg(74,135,jv,Sq);_.P=function Tq(a,b){Vq(a,this.a.b.length+1);Po(this.a,a,b)};_.Q=function Uq(a){return Rq(this,a)};_.F=function Wq(a){return So(this.a,a,0)!=-1};_.R=function Xq(a){return Vq(a,this.a.b.length),Ro(this.a,a)};_.D=function Yq(){return new In(this.a)};_.S=function Zq(a){return Vq(a,this.a.b.length),this.a.S(a)};_.G=function $q(){return this.a.b.length};_.H=function _q(a){return Wo(this.a,a)};_.tS=function ar(){return Lm(this.a)};var lg=yi(74);Kg(113,74,jv,dr);var ag=yi(113);Kg(58,137,kv,tr,ur);_.W=function vr(){return new Br(this)};_.K=function wr(){return new Fr(this)};_.X=function xr(a){var b,c,d;d=this.c;while(d){b=this.b.Y(a,d.c);if(b==0){return d}c=b<0?0:1;d=d.a[c]}return null};_.G=function yr(){return this.d};_.d=0;var jg=yi(58);Kg(72,1,{},Br);_.N=function Dr(){return Fn(this.a)};_.O=function Er(){return zr(this)};var bg=yi(72);Kg(12,73,hv,Fr);var cg=yi(12);Kg(40,53,{37:1,53:1,27:1,40:1},Gr);_.b=false;var dg=yi(40);Kg(65,1,{},Hr);_.tS=function Ir(){return 'State: mv='+this.c+' value='+this.d+' done='+this.a+' found='+this.b};_.a=false;_.b=false;_.c=false;var eg=yi(65);Kg(26,29,lv,Or);_.lb=function Pr(){return false};_.mb=function Qr(){return false};var Jr,Kr,Lr,Mr;var ig=zi(26,Rr);Kg(94,26,lv,Sr);_.mb=function Tr(){return true};var fg=zi(94,null);Kg(95,26,lv,Ur);_.lb=function Vr(){return true};_.mb=function Wr(){return true};var gg=zi(95,null);Kg(96,26,lv,Xr);_.lb=function Yr(){return true};var hg=zi(96,null);Kg(57,131,{3:1,35:1},$r,_r);_.F=function as(a){return so(this.g,a)};_.D=function bs(){return Fo(new Go(this.g))};_.G=function cs(){return this.g.d};var kg=yi(57);Kg(32,1,{18:1,32:1},js,ks,ls,ms);_.t=function ns(a){if(!_d(a,32))throw new yk('Not comparable: Atoms and '+ui(hb(a)));return ds(this,a)};_.eQ=function os(a){return es(this,a)};_.hC=function ps(){var a;a=this.a+this.i;return jk(a)};_.tS=function qs(){return is(this,null)};_.a=0;_.b=0;_.c=0;_.d=0;_.e=0;_.f=0;_.g=0;var mg=yi(32);Kg(33,58,kv,Fs);_.tS=function Gs(){return Cs(this)};_.a=10000;var og=yi(33);Kg(98,1,{},Hs);_.Y=function Is(a,b){return -$j(a.U(),b.U())};var ng=yi(98);Kg(55,1,{18:1},Os,Ps,Qs);_.t=function Rs(a){this.g+'-'+a.g;return Zj(this.g,a.g)};_.eQ=function Ss(a){var b;if(this===a)return true;if(pg!=hb(a))return false;b=a;if(Jj(this.g,b.g))return true;return false};_.tS=function Ts(){return Ns(this)};_.a=0;_.c=0;_.d=0;_.f=0;var pg=yi(55);Kg(99,1,{18:1},Xs);_.t=function Ys(a){return ej(new fj(this.a.c-this.a.d),oj(a.a.c-a.a.d))};_.tS=function Zs(){return this.a.i+' - '+this.a.d+' to '+this.a.c+' - current: '+this.b};_.b=0;_.c=0;_.d=0;var qg=yi(99);Kg(47,1,{},gt,ht);_.tS=function it(){return ft(this)};_.c=false;_.e=false;var sg=yi(47);Kg(30,57,{3:1,35:1},ut,vt,wt);_.tS=function xt(){return tt(this)};_.a=0;_.b='';_.e=false;_.f=0;var rg=yi(30);Kg(70,1,{},Bt);var tg=yi(70);Kg(39,1,{18:1,39:1},Ct);_.t=function Dt(a){var b;if(_d(a,39)){b=a;return this.c=b.c}else throw new yk('Cannot compare Isotope to '+a)};_.tS=function Et(){return 'Number: '+this.c+' - mass: '+this.b+' - percentage: '+this.d+' - symbol: '+this.a};_.b=0;_.c=0;_.d=0;var ug=yi(39);var Ft,Gt;Kg(4,6,{3:1,6:1,9:1,4:1},It);var vg=yi(4);Kg(91,1,{},Qt);_.a=0;_.b=0;_.e=null;_.f=0;var Jt=1;var yg=yi(91);Kg(48,1,{},Zt,$t,_t);_.b=0;var xg=yi(48);Kg(92,1,{},bu);_.Y=function cu(a,b){return au(this,a,b)};var wg=yi(92);var du;Kg(93,1,{},iu);_.a=0;_.b=0;_.c=null;var zg=yi(93);var ju;Kg(128,1,{},pu);_.nb=function ou(){};var nu=null;var Ag=yi(128);Kg(69,1,{18:1},Du);_.t=function Eu(a){return Cu(this,a)};_.a=0;_.c=0;var Bg=yi(69);Kg(16,1,{},Gu,Hu,Iu);var Cg=yi(16);Kg(15,1,{},Mu);var Dg=yi(15);var ke=Bi('I'),De=yi(119),Ee=yi(121),Fe=yi(null),Ge=yi(124),he=Bi('B'),je=Bi('D'),$f=Ai(),ie=Bi('C');_=Pg('$wnd.CI.Chemcalc');_.analyseMF=ru;_.getInfo=tu;_.mfFromMonoisotopicMass=uu;_.aa=nu;var Nu=Oh();var gwtOnLoad=gwtOnLoad=Nh;Lh(Rh);Ph('permProps',[[['user.agent','safari']]]);$sendStats('moduleStartup', 'moduleEvalEnd');gwtOnLoad(__gwtModuleFunction.__errFn, __gwtModuleFunction.__moduleName, __gwtModuleFunction.__moduleBase, __gwtModuleFunction.__softPermutationId,__gwtModuleFunction.__computePropValue);$sendStats('moduleStartup', 'end');$gwt && $gwt.permProps && __gwtModuleFunction.__moduleStartupDone($gwt.permProps);
//# sourceURL=chemcalc-0.js

        // End GWT code

        var toReturn = $wnd["CI"]["Chemcalc"];

        toReturn.version = '3.0.6';

        return toReturn;
    }

    var isBrowser, globalEnv;

    if (typeof window !== 'undefined') { // usual browser window
        isBrowser = true;
        globalEnv = window;
    } else if (typeof self !== 'undefined') { // Web Worker
        isBrowser = true;
        globalEnv = self;
    } else { // Node.js
        isBrowser = false;
        globalEnv = global;
    }

    var fakeWindow;
    if (isBrowser && !true) {
        fakeWindow = globalEnv;
    } else {
        fakeWindow = {};
        fakeWindow.setTimeout = globalEnv.setTimeout.bind(globalEnv);
        fakeWindow.clearTimeout = globalEnv.clearTimeout.bind(globalEnv);
        fakeWindow.setInterval = globalEnv.setInterval.bind(globalEnv);
        fakeWindow.clearInterval = globalEnv.clearInterval.bind(globalEnv);
    }

    fakeWindow.document = isBrowser ? (globalEnv.document || {}) : {};

    if (typeof module !== 'undefined' && module.exports) { // NodeJS
        module.exports = getExports(fakeWindow);
    } else if (typeof define === 'function' && define.amd) { // AMD
        define(function () {
            return getExports(fakeWindow);
        });
    } else { // Global
        var path = ["CI","Chemcalc"];
        var l = path.length - 1;
        var obj = globalEnv;
        for (var i = 0; i < l; i++) {
            obj = obj[path[i]] || (obj[path[i]] = {});
        }
        obj[path[l]] = getExports(fakeWindow);
    }

})();
