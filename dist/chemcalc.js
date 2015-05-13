/**
 * chemcalc - Analyse molecular formula
 * @version v2.1.6
 * @date 2015-05-13T15:57:48.495Z
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
function Sg(){}
function Ng(){}
function fb(){}
function fd(){}
function jc(){}
function sc(){}
function sp(){}
function Zp(){}
function eq(){}
function gq(){}
function Jr(){}
function Js(){}
function kl(a){}
function Ac(){vc()}
function ub(){ob(this)}
function Zo(){Qo(this)}
function Zh(a){this.d=a}
function Rc(a){this.d=a}
function $c(a){this.d=a}
function kd(a){this.d=a}
function wd(a){this.d=a}
function hi(a){this.d=a}
function Ti(a){this.d=a}
function hj(a){this.d=a}
function sn(a){this.d=a}
function Pn(a){this.d=a}
function Un(a){this.d=a}
function Yn(a){this.d=a}
function Kn(a){this.f=a}
function bo(a){this.d=a}
function Do(a){this.d=a}
function Io(a){this.d=a}
function No(a){this.d=a}
function du(a){this.d=a}
function Qc(){this.d=[]}
function ru(){this.rb()}
function Qh(){return Mb}
function Qd(a){return a.d}
function bd(a){return a.d}
function pd(a){return a.d}
function Bd(a){return a.d}
function Wc(a){return a.d}
function jd(){return null}
function Id(){return null}
function dn(a){++a.e;wp(a)}
function en(a){--a.e;wp(a)}
function eh(a,b){a.h=b}
function fh(a,b){a.l=b}
function gh(a,b){a.m=b}
function Zb(){Vb();Wb(this)}
function ai(){ub.call(this)}
function fj(){ub.call(this)}
function Dj(){ub.call(this)}
function zk(){ub.call(this)}
function xp(){ub.call(this)}
function yp(){ub.call(this)}
function Qq(){ub.call(this)}
function Eq(){oq.call(this)}
function Nq(){oq.call(this)}
function fr(){Uq.call(this)}
function ci(){ai.call(this)}
function Rp(){Jp.call(this)}
function Hs(){vr.call(this)}
function bq(){bq=Ng;aq=dq()}
function xb(){xb=Ng;wb=new fb}
function ed(){ed=Ng;dd=new fd}
function gc(){gc=Ng;fc=new jc}
function rp(){rp=Ng;qp=new sp}
function mu(){mu=Ng;lu=new Bp}
function Nu(){this.d=new Qc}
function Tu(){this.d=new vd}
function Uq(){this.d=new Zo}
function as(){this.n=new vr}
function nq(c,a,b){c.d[a]=b}
function Lj(a,b){return a===b}
function uj(a){return a<0?-a:a}
function Zi(a){return isNaN(a)}
function bi(a){vb.call(this,a)}
function di(a){vb.call(this,a)}
function cd(a){vb.call(this,a)}
function _h(a){vb.call(this,a)}
function ej(a){vb.call(this,a)}
function Ej(a){vb.call(this,a)}
function Ak(a){vb.call(this,a)}
function vb(a){tb.call(this,a)}
function Fj(a){ej.call(this,a)}
function pk(a){Zh.call(this,a)}
function wk(a){Zh.call(this,a)}
function ok(){Zh.call(this,'')}
function uk(){Zh.call(this,'')}
function vk(){Zh.call(this,'')}
function vd(){wd.call(this,{})}
function Hr(a){Do.call(this,a)}
function yt(a){bs.call(this,a)}
function Kt(a){tb.call(this,a)}
function Jp(){this.d=this.cb()}
function oq(){this.d=this.ib()}
function Oh(){Mh==null&&(Mh=[])}
function Sh(a){return a.tM===Sg}
function he(a){return a<<24>>24}
function nr(a){return !!a&&a.e}
function Dp(b,a){return b.d[a]}
function yj(a,b){return a>b?a:b}
function zj(a,b){return a<b?a:b}
function Td(a,b){return Fi(a,b)}
function sh(a,b){return !rh(a,b)}
function th(a,b){return !qh(a,b)}
function oc(a,b){nc();mc.s(a,b)}
function wi(a){vi(a);return a.q}
function nk(a,b){a.d+=b;return a}
function rk(a,b){a.d+=b;return a}
function sk(a,b){a.d+=b;return a}
function uo(a,b){return !!a._(b)}
function Fd(a){return new kd(a)}
function Hd(a){return new Kd(a)}
function bs(a){this.n=new wr(a)}
function tb(a){this.k=a;ob(this)}
function tj(a){return a<=0?0-a:a}
function xj(a){return Math.log(a)}
function xo(a){return wo(a,hr(a))}
function Tq(a,b){return So(a.d,b)}
function Hn(a){return a.d<a.f.K()}
function Eh(a){return a.l|a.m<<22}
function Br(a){return a.e=In(a.d)}
function Ws(a){return a.d.j*a.d.f}
function Xs(a){return a.d.j*a.d.g}
function Ym(a){return !a?null:a.f}
function vj(a){return Math.ceil(a)}
function Cj(a){return Math.sqrt(a)}
function ee(a){return de(a)&&Sh(a)}
function Ed(a){return Zc(),a?Yc:Xc}
function vo(a,b){return Zm(a._(b))}
function Ep(b,a){return b.d[a]||[]}
function vp(a,b){a._gwt_modCount=b}
function _i(a,b){this.d=a;this.e=b}
function Aq(a,b){this.d=a;this.e=b}
function xq(a,b){this.e=a;this.f=b}
function go(a,b){this.f=a;this.g=b}
function Im(a,b){_i.call(this,a,b)}
function Qr(a,b){_i.call(this,a,b)}
function no(a,b){go.call(this,a,b)}
function vr(){wr.call(this,null)}
function Rb(a){$wnd.clearTimeout(a)}
function wj(a){return Math.floor(a)}
function Bj(a){return Math.round(a)}
function ae(a){return !de(a)&&Sh(a)}
function Zm(a){return !a?null:a.Y()}
function ge(a){return a==null?null:a}
function gj(a,b){return ij(a.d,b.d)}
function Nj(b,a){return b.indexOf(a)}
function fp(a,b,c){a.splice(b,c)}
function El(a){jl();Fl.call(this,a)}
function oo(a){go.call(this,a.f,a.g)}
function Ur(){Qr.call(this,'Head',1)}
function Zr(){Qr.call(this,'Tail',3)}
function Qo(a){a.e=Ud(af,Yu,1,0,3,1)}
function Tt(a){a.e=a.g.e;a.f=new Hs}
function Fc(a){if(!a){throw new Qq}}
function Kc(a){if(!a){throw new fj}}
function jk(){jk=Ng;gk={};ik={}}
function Sb(){Gb!=0&&(Gb=0);Jb=-1}
function ii(a,b){return a==b?0:a?1:-1}
function mh(a,b){return Xg(a,b,false)}
function Vg(a){return Wg(a.l,a.m,a.h)}
function Sq(a){return a!=null?lb(a):0}
function ij(a,b){return a<b?-1:a>b?1:0}
function Aj(a,b){return Math.pow(a,b)}
function de(a){return Array.isArray(a)}
function Pb(a){return a.$H||(a.$H=++Hb)}
function Wg(a,b,c){return {l:a,m:b,h:c}}
function hh(a){return a.l+a.m*av+a.h*bv}
function Xp(a){this.d=a;Zo.call(this)}
function Lq(a){this.d=a;Zo.call(this)}
function Tk(a){this.j=5;Nk(this,Hc(a))}
function Th(){$wnd.setTimeout(Uu(Uh))}
function Wr(){Qr.call(this,'Range',2)}
function gp(a,b,c,d){a.splice(b,c,d)}
function Yj(a,b,c){return a.substr(b,c)}
function Kj(b,a){return b.charCodeAt(a)}
function Oj(b,a){return b.lastIndexOf(a)}
function Xj(a){return Ud(gf,Yu,2,a,4,1)}
function Xo(a){return Rd(a.e,a.e.length)}
function ri(a){return a>=56320&&a<=57343}
function Si(a,b){return be(b,6)&&b.d==a.d}
function Uj(a,b,c){return a.substr(b,c-b)}
function Qu(a,b,c){td(a.d,b,c);return a}
function er(a,b){So(a.d,b);return b}
function qk(a,b){a.d+=_d(b);return a}
function uh(a,b){Xg(a,b,true);return Tg}
function Ap(a){var b;b=lb(a);return ~~b}
function Lg(a){var b=Kg;return Qg(b[a])}
function vi(a){if(a.q!=null){return}Ji(a)}
function ob(a){a.n=null;oc(a,a.k);return a}
function Tn(a){var b;b=xn(a.d);return b.X()}
function ao(a){var b;b=xn(a.d);return b.Y()}
function fo(a,b){var c;c=a.g;a.g=b;return c}
function Mo(a){var b;b=Br(a.d);return b.X()}
function Cr(a){Jn(a.d);qr(a.f,a.e);a.e=null}
function Dr(a){Er.call(this,a,(Pr(),Lr))}
function it(a,b,c){jt.call(this,a,b,c,true)}
function Tj(a,b){return Yj(a,b,a.length-b)}
function pj(a,b){return (a>>>0).toString(b)}
function fe(a){return typeof a==='string'}
function _d(a){return String.fromCharCode(a)}
function ak(a,b){return fe(a)?_j(a,b):a.A(b)}
function Kb(a,b,c){return a.apply(b,c);var d}
function Pj(c,a,b){return c.lastIndexOf(a,b)}
function cn(a,b){return a.f.bb(b)||a.d.bb(b)}
function ek(a){return String.fromCharCode(a)}
function ce(a){return a!=null&&!fe(a)&&!Sh(a)}
function rc(a){nc();return parseInt(a)||-1}
function Dc(a,b){if(!a){throw new ej(''+b)}}
function Cc(a,b){if(!a){throw new di(''+b)}}
function Xq(a,b){if(a<0||a>=b){throw new ci}}
function Co(a){if(!a){throw new Qq}return a.f}
function Ci(){var a;a=zi(null);a.j=2;return a}
function Ai(a){var b;b=zi(a);Ni(a,b);return b}
function So(a,b){a.e[a.e.length]=b;return true}
function wt(a,b,c){xt.call(this,a,b,c,1,true)}
function Rs(a,b,c,d){Qs.call(this,a,0,b,c,d)}
function Vh(a,b){this.j=b;this.k=a;ob(this)}
function _t(a,b){this.g=a;Tt(this);this.f=b}
function Rk(a){this.k=a;this.j=5;this.d=Uk(a)}
function Yi(a){return !isFinite(a)&&!isNaN(a)}
function eb(a){return wi(jb(a))+'@'+pj(lb(a),16)}
function is(a){return a.d!=0?'['+a.d+a.o+']':a.o}
function Tm(a,b){return b===a?'(this Map)':''+b}
function Ic(a,b){if(a==null){throw new Ej(''+b)}}
function Hc(a){if(a==null){throw new Dj}return a}
function Kd(a){if(a==null){throw new Dj}this.d=a}
function mk(){if(hk==256){gk=ik;ik={};hk=0}++hk}
function vc(){vc=Ng;Error.stackTraceLimit=64}
function sj(){sj=Ng;rj=Ud(Ye,Yu,19,256,0,1)}
function Vd(a,b,c,d,e,f){return Wd(a,b,c,d,e,0,f)}
function Ro(a,b,c){Jc(b,a.e.length);gp(a.e,b,0,c)}
function To(a,b){Gc(b,a.e.length);return a.e[b]}
function Mu(a,b){Oc(a.d,a.d.d.length,b);return a}
function kc(a,b){!a&&(a=[]);a[a.length]=b;return a}
function Di(a){var b;b=zi(a);b.p=a;b.j=1;return b}
function wp(a){var b;b=a._gwt_modCount|0;vp(a,b+1)}
function Cp(c,a){var b=c.d;return b[a]||(b[a]=[])}
function _j(a,b){if(a==b){return 0}return a<b?-1:1}
function $t(a,b){b<1.0E-10&&(b=1.0E-10);a.e=b}
function bn(a,b){return fe(b)?hn(a,b):!!Fp(a.d,b)}
function fn(a,b){return fe(b)?gn(a,b):Zm(Fp(a.d,b))}
function xn(a){return up(a.f,a),Fc(wn(a)),a.d.S()}
function _r(a,b){return or(a.n,b,(gi(),ei))==null}
function Og(a){return a instanceof Array?a[0]:null}
function nh(a,b){return a.l==b.l&&a.m==b.m&&a.h==b.h}
function xh(a,b){return a.l!=b.l||a.m!=b.m||a.h!=b.h}
function jn(a,b,c){return fe(b)?kn(a,b,c):Hp(a.d,b,c)}
function Zt(a,b,c,d){ws(a.f,d);vs(a.f,c);As(a.f,b)}
function Oc(a,b,c){var d;d=Nc(a,b);Pc(a,b,c);return d}
function td(a,b,c){var d;d=rd(a,b);ud(a,b,c);return d}
function pr(a,b){var c;c=new Jr;rr(a,b,c);return c.g}
function Zc(){Zc=Ng;Xc=new $c(false);Yc=new $c(true)}
function gi(){gi=Ng;ei=new hi(false);fi=new hi(true)}
function Jn(a){Kc(a.e!=-1);a.f.W(a.e);a.d=a.e;a.e=-1}
function In(a){Fc(a.d<a.f.K());return a.f.V(a.e=a.d++)}
function wo(a,b){!!b&&qr(a,b);return !b?null:new oo(b)}
function zp(a,b){return ge(a)===ge(b)||a!=null&&hb(a,b)}
function Rq(a,b){return ge(a)===ge(b)||a!=null&&hb(a,b)}
function kq(a){return Object.getOwnPropertyNames(a.d)}
function Gp(a){return Object.getOwnPropertyNames(a.d)}
function jb(a){return fe(a)?gf:ae(a)?a.cZ:ee(a)?a.cZ:oe}
function lh(a,b){return {l:a.l&b.l,m:a.m&b.m,h:a.h&b.h}}
function yh(a,b){return {l:a.l|b.l,m:a.m|b.m,h:a.h|b.h}}
function Gh(a,b){return {l:a.l^b.l,m:a.m^b.m,h:a.h^b.h}}
function Ec(a,b){if(!a){throw new ej(Lc('%s > %s',b))}}
function rd(a,b){if(b==null){throw new Dj}return sd(a,b)}
function hu(a){if(hn(fu,a)){return gn(fu,a)}return null}
function tk(a,b,c){a.d=Uj(a.d,0,b)+c+Tj(a.d,b);return a}
function Bi(a,b){var c;c=zi(a);Ni(a,c);c.j=b?8:0;return c}
function Ho(a){var b;b=(new Hr(a.d)).d.$();return new No(b)}
function Qb(a){$wnd.setTimeout(function(){throw a},0)}
function Nn(a){Kn.call(this,a);Jc(0,a.e.length);this.d=0}
function Bl(a,b,c){jl();kl(this);this.j=a;this.g=b;this.d=c}
function Et(a,b,c,d){this.f=a;this.e=b;this.g=c;this.d=d}
function Ku(a,b,c,d){this.d=a;this.f=b;this.e=d;this.g=c}
function wr(a){this.f=null;!a&&(a=(rp(),rp(),qp));this.e=a}
function Qj(b,a){return (new RegExp('^('+a+')$')).test(b)}
function gn(a,b){return b==null?Zm(Fp(a.d,null)):a.f.kb(b)}
function kn(a,b,c){return b==null?Hp(a.d,null,c):a.f.nb(b,c)}
function Yh(a,b,c,d){b==null&&(b='null');a.d+=b.substr(c,d-c)}
function Nk(a,b){a.f=b;a.d=Ol(b);a.d<54&&(a.k=Dh(sl(b)))}
function Fi(a,b){var c=a.d=a.d||[];return c[b]||(c[b]=a.B(b))}
function Db(a,b){var c=Cb[a.charCodeAt(0)];return c==null?a:c}
function On(a){var b;b=new yn((new sn(a.d)).d);return new Un(b)}
function Xn(a){var b;b=new yn((new sn(a.d)).d);return new bo(b)}
function tr(a,b){var c;c=1-b;a.d[c]=ur(a.d[c],c);return ur(a,b)}
function Qg(a){function b(){}
;b.prototype=a||{};return new b}
function ie(a){return ~~Math.max(Math.min(a,Vu),-2147483648)}
function Au(){return su(Cu(new Bp,(Jt(),Jt(),It),(null,Ht)))}
function Tr(){Pr();return Xd(Td(kg,1),Yu,26,0,[Lr,Mr,Nr,Or])}
function um(a,b){om();return b<nm.length?tm(a,nm[b]):tl(a,xm(b))}
function Rj(c,a,b){b=Zj(b);return c.replace(RegExp(a,'g'),b)}
function fk(a,b,c){var d;d=b+c;Wj(a.length,b,d);return $j(a,b,d)}
function bc(a,b,c,d,e,f,g){a+=e+g+(b^c^d);a=a<<f|a>>>-f;return a+b}
function Gj(a,b,c){this.d='Unknown';this.g=a;this.e=b;this.f=c}
function xk(a){bi.call(this,'String index out of range: '+a)}
function pi(a){return null!=String.fromCharCode(a).match(/\d/)}
function qi(a){return null!=String.fromCharCode(a).match(/[A-Z]/i)}
function lb(a){return fe(a)?lk(a):ae(a)?a.hC():ee(a)?Pb(a):Pb(a)}
function be(a,b){return a!=null&&(fe(a)&&!!$d[b]||a.cM&&!!a.cM[b])}
function Mb(b){return function(){return Nb(b,this,arguments);var a}}
function Nb(a,b,c){var d;d=Lb();try{return Kb(a,b,c)}finally{Ob(d)}}
function to(a,b){var c,d;c=b.X();d=a._(c);return !!d&&Rq(d.g,b.Y())}
function qb(a){var b,c;b=wi(a.cZ);c=a.r();return c!=null?b+': '+c:b}
function Uh(){var a;a=Xh();if(!Lj('safari',a)){throw new Wh(a)}}
function up(a,b){if(b._gwt_modCount!=a._gwt_modCount){throw new xp}}
function ud(d,a,b){if(b){var c=b.v();d.d[a]=c(b)}else{delete d.d[a]}}
function Pc(d,a,b){if(b){var c=b.v();b=c(b)}else{b=undefined}d.d[a]=b}
function hb(a,b){return fe(a)?Lj(a,b):ae(a)?a.eQ(b):ee(a)?a===b:a===b}
function ml(a){while(a.g>0&&a.d[--a.g]==0);a.d[a.g++]==0&&(a.j=0)}
function Op(a){this.k=a;this.g=Gp(this.k);this.d=Ud(ag,Yu,27,0,0,1)}
function Ob(a){a&&ic((gc(),fc));--Gb;if(a){if(Jb!=-1){Rb(Jb);Jb=-1}}}
function Hi(a){if(a.H()){return null}var b=a.p;var c=Kg[b];return c}
function pl(a,b){var c;for(c=a.g-1;c>=0&&a.d[c]==b[c];c--);return c<0}
function jm(a,b,c,d){var e;e=Ud(me,Yu,0,b,7,1);km(e,a,b,c,d);return e}
function Ud(a,b,c,d,e,f){var g;g=Yd(e,d);Xd(Td(a,f),b,c,e,g);return g}
function cc(a,b,c,d,e,f,g){a+=e+g+(c^(b|~d));a=a<<f|a>>>-f;return a+b}
function ac(a,b,c,d,e,f,g){a+=e+g+(c^d&(b^c));a=a<<f|a>>>-f;return a+b}
function _b(a,b,c,d,e,f,g){a+=e+g+(d^b&(c^d));a=a<<f|a>>>-f;return a+b}
function em(a,b,c,d){var e;e=Ud(me,Yu,0,b+1,7,1);fm(e,a,b,c,d);return e}
function Wo(a,b,c){var d;d=(Gc(b,a.e.length),a.e[b]);a.e[b]=c;return d}
function Vo(a,b){var c;c=(Gc(b,a.e.length),a.e[b]);fp(a.e,b,1);return c}
function qr(a,b){var c;c=new Jr;c.f=true;c.g=b.Y();return rr(a,b.X(),c)}
function Ug(a){var b,c,d;b=a&Zu;c=a>>22&Zu;d=a<0?$u:0;return Wg(b,c,d)}
function $o(){Qo(this);Dc(true,'Initial capacity must not be negative')}
function Bb(){if(Date.now){return Date.now()}return (new Date).getTime()}
function vl(a,b){if(b==0||a.j==0){return a}return b>0?Pl(a,b):Sl(a,-b)}
function xl(a,b){if(b==0||a.j==0){return a}return b>0?Sl(a,b):Pl(a,-b)}
function Gc(a,b){if(a<0||a>=b){throw new bi('Index: '+a+', Size: '+b)}}
function Jc(a,b){if(a<0||a>b){throw new bi('Index: '+a+', Size: '+b)}}
function Zs(a){this.d=a;if(a.g>a.f)throw new Kt('Error: minCount>maxCount')}
function Sk(a,b){this.j=b;this.d=Vk(a);this.d<54?(this.k=Dh(a)):(this.f=Nl(a))}
function zb(a){xb();this.j=null;this.k=null;this.d='';this.e=a;this.d=''}
function St(a,b,c,d){this.n=new Bp;this.f=a;this.g=b;this.e=c;this.d=d}
function Ir(a,b){no.call(this,a,b);this.d=Ud(fg,Yu,40,2,0,1);this.e=true}
function hn(a,b){return b==null?!!Fp(a.d,null):!(a.f.kb(b)===undefined)}
function Su(a,b,c){return c==null?Qu(a,b,(ed(),ed(),dd)):Qu(a,b,new Kd(c))}
function Jm(){Hm();return Xd(Td(mf,1),Yu,24,0,[Gm,Am,zm,Bm,Em,Cm,Dm,Fm])}
function tl(a,b){if(b.j==0){return il}if(a.j==0){return il}return om(),pm(a,b)}
function Ju(a,b){var c;c=Ui(tj(a.d),tj(b.d));if(c!=0)return c;return _j(a.e,b.e)}
function Uo(a,b,c){for(;c<a.e.length;++c){if(Rq(b,a.e[c])){return c}}return -1}
function wu(a){var b='';for(var c=0;c<a.length;c++){b+=tu(a.charAt(c))}return b}
function yu(a){var b=new Bp;if(a){for(var c in a){b.Q(c,String(a[c]))}}return b}
function gr(a){var b,c;if(!a.f){return null}c=a.f;while(b=c.d[0]){c=b}return c}
function hr(a){var b,c;if(!a.f){return null}c=a.f;while(b=c.d[1]){c=b}return c}
function hc(a){var b,c;if(a.d){c=null;do{b=a.d;a.d=null;c=lc(b,c)}while(a.d);a.d=c}}
function ic(a){var b,c;if(a.e){c=null;do{b=a.e;a.e=null;c=lc(b,c)}while(a.e);a.e=c}}
function Ou(a){var b;Nu.call(this);for(b=0;b<a.length;b++){Mu(this,new kd(a[b]))}}
function Al(a,b){jl();kl(this);this.j=a;this.g=1;this.d=Xd(Td(me,1),Yu,0,7,[b])}
function Qs(a,b,c,d,e){this.e=new Bp;this.f=a;this.g=b;this.n=c;this.j=d;this.d=e}
function yn(a){this.f=a;this.e=this.f.f.db();this.d=this.e;vp(this,a._gwt_modCount)}
function Lh(){Lh=Ng;Hh=Wg(Zu,Zu,524287);Ih=Wg(0,0,_u);Jh=ph(1);ph(2);Kh=ph(0)}
function Pr(){Pr=Ng;Lr=new Qr('All',0);Mr=new Ur;Nr=new Wr;Or=new Zr}
function Nc(d,a){var b=d.d[a];var c=(Dd(),Cd)[typeof b];return c?c(b):Jd(typeof b)}
function jq(d,a){var b=d.d;for(var c in b){if(d.jb(a,b[c])){return true}}return false}
function mq(a,b){var c;c=a.d[b];if(!(c===undefined)){delete a.d[b];en(a.e)}return c}
function zi(a){var b;b=new xi;b.q='Class$'+(a?'S'+a:''+b.n);b.e=b.q;b.o=b.q;return b}
function Ni(a,b){var c;if(!a){return}b.p=a;var d=Hi(b);if(!d){Kg[a]=[b];return}d.cZ=b}
function nj(a){var b,c;if(a==0){return 32}else{c=0;for(b=1;(b&a)==0;b<<=1){++c}return c}}
function gs(a,b){var c;if(be(b,32)){c=b;if(Lj(a.o,c.o)&&a.d==c.d)return true}return false}
function ur(a,b){var c,d;c=1-b;d=a.d[c];a.d[c]=d.d[b];d.d[b]=a;a.e=true;d.e=false;return d}
function uu(a,b){var c;c=yu(b);c.f.nb('mf',a);return su(Du(c,(Jt(),Jt(),It),(null,Ht)))}
function Pu(a){var b;Nu.call(this);for(b=0;b<a.length;b++){Mu(this,(new Ou(a[b])).d)}}
function Nh(){Oh();var a=Mh;for(var b=0;b<arguments.length;b++){a.push(arguments[b])}}
function Fl(a){Hc(a);if(!a.length){throw new Fj('Zero length BigInteger')}Kl(this,a)}
function Qt(a){if(a.j.f.g==0)throw new vb('No isotopic distribution data');return Fs(a.j.f)}
function Rt(a){if(a.j.f.g==0)throw new vb('No isotopic distribution data');return Gs(a.j.f)}
function su(a){if('error' in a.d.d){throw new zb(rd(a.d,'error').w().d)}else{return a.d.d}}
function hs(a){if(a.g==a.f)return a.g;throw new vb('Atoms.getCount(): undefined (min!=max)')}
function Ok(a){if(a.d<54){return a.k<0?-1:a.k>0?1:0}return (!a.f&&(a.f=Ml(a.k)),a.f).j}
function cl(a){if(nh(a,{l:0,m:0,h:0})&&5<Hk.length){return Hk[5]}return new Sk(a,5)}
function Hg(b,c){if(b&&typeof b=='object'){try{b.__gwt$exception=c}catch(a){}}}
function Wj(a,b,c){if(b<0){throw new xk(b)}if(c<b){throw new xk(c-b)}if(c>a){throw new xk(c)}}
function Er(a,b){var c;this.f=a;c=new Zo;kr(a,c,b,a.f,null,false,null,false);this.d=new Nn(c)}
function pp(a,b){var c,d;d=a.d.e.length;for(c=0;c<d;c++){Xq(c,a.d.e.length);Wo(a.d,c,b[c])}}
function Rl(a,b,c){var d,e,f;d=0;for(e=0;e<c;e++){f=b[e];a[e]=f<<1|d;d=f>>>31}d!=0&&(a[c]=d)}
function np(a){var b,c,d;d=0;for(c=a.I();c.R();){b=c.S();d=d+(b!=null?lb(b):0);d=~~d}return d}
function qd(e,a){var b=e.d;var c=0;for(var d in b){b.hasOwnProperty(d)&&(a[c++]=d)}return a}
function ql(a){var b;if(a.e==-2){if(a.j==0){b=-1}else{for(b=0;a.d[b]==0;b++);}a.e=b}return a.e}
function Wt(a,b){if(a.g.k==0){return Xt(a,b)}else if(a.g.k==Lt){return Yt(a,b)}return Xt(a,b)}
function wn(a){if(a.d.R()){return true}if(a.d!=a.e){return false}a.d=a.f.d.db();return a.d.R()}
function si(a){return String.fromCharCode(a).toLowerCase().charCodeAt(0)==a&&qi(a)}
function ti(a){return String.fromCharCode(a).toUpperCase().charCodeAt(0)==a&&qi(a)}
function vu(a){return a.replace(/^H([^+])/,'H+H$1').replace(/(Arg|His|Lys)(?!\()/g,'$1(H+)')}
function Ru(a,b){return !b?Qu(a,'unsaturation',(ed(),ed(),dd)):Qu(a,'unsaturation',new kd(b.d))}
function et(b){try{Ri(b);return true}catch(a){a=Jg(a);if(be(a,20)){return false}else throw Ig(a)}}
function Mm(a,b){var c,d;Hc(b);for(d=b.I();d.R();){c=d.S();if(!a.J(c)){return false}}return true}
function lq(a,b,c){var d;d=a.d[b];d===undefined&&dn(a.e);nq(a,b,c===undefined?null:c);return d}
function ou(a){mu();var b,c;b='61-'+a;if(hn(lu,b))return gn(lu,b);c=new ku(a);kn(lu,b,c);return c}
function ot(a,b){var c,d;for(d=Ho(new Io(a.n));Hn(d.d.d);){c=Mo(d);if(Lj(c.o,b))return c}return null}
function nt(a){var b,c,d;d=pt(a);for(c=Ho(new Io(a.n));Hn(c.d.d);){b=Mo(c);b.n=tt(b.e*hs(b)*100/d)}}
function ws(a,b){var c,d,e;c=(new Hr(a)).d.$();while(Hn(c.d)){d=c.e=In(c.d);e=d.Y().d;e<b&&Cr(c)}}
function ms(a){this.o=a.o;this.e=a.e;this.g=a.g;this.f=a.f;this.j=a.j;this.k=a.k;this.d=a.d}
function Bp(){bq();this.d=aq.gb();this.d.e=this;this.f=aq.hb();this.f.e=this;this.e=0;wp(this)}
function Qk(a){Jk();if(Yi(a)||isNaN(a)){throw new Fj('Infinite or NaN')}Lk(this,a.toPrecision(20))}
function nb(a){return fe(a)?a:ae(a)?a.tS():ee(a)?eb(a):a.toString?a.toString():'[JavaScriptObject]'}
function qc(a){var b=/function(?:\s+([\w$]+))?\s*\(/;var c=b.exec(a);return c&&c[1]||'anonymous'}
function dr(a){var b;b=a.d.e.length;if(b>0){return Xq(b-1,a.d.e.length),a.d.W(b-1)}else{throw new yp}}
function bh(a){var b,c;c=mj(a.h);if(c==32){b=mj(a.m);return b==32?mj(a.l)+32:b+20-10}else{return c-12}}
function wh(a){var b,c,d;b=~a.l+1&Zu;c=~a.m+(b==0?1:0)&Zu;d=~a.h+(b==0&&c==0?1:0)&$u;return Wg(b,c,d)}
function kh(a,b){var c,d,e;c=a.l+b.l;d=a.m+b.m+(c>>22);e=a.h+b.h+(d>>22);return {l:c&Zu,m:d&Zu,h:e&$u}}
function Ch(a,b){var c,d,e;c=a.l-b.l;d=a.m-b.m+(c>>22);e=a.h-b.h+(d>>22);return {l:c&Zu,m:d&Zu,h:e&$u}}
function or(a,b,c){var d,e;d=new Ir(b,c);e=new Jr;a.f=mr(a,a.f,d,e);e.e||++a.g;a.f.e=false;return e.g}
function Sd(a,b){var c;c=Yd(0,b);Xd(jb(a),a.cM,a.__elementTypeId$,a.__elementTypeCategory$,c);return c}
function Xd(a,b,c,d,e){e.cZ=a;e.cM=b;e.tM=Sg;e.__elementTypeId$=c;e.__elementTypeCategory$=d;return e}
function Zg(a,b,c,d,e){var f;f=Ah(a,b);c&&ah(f);if(e){a=_g(a,b);d?(Tg=wh(a)):(Tg=Wg(a.l,a.m,a.h))}return f}
function Rd(a,b){var c;c=a.slice(0,b);Xd(jb(a),a.cM,a.__elementTypeId$,a.__elementTypeCategory$,c);return c}
function Km(a,b){var c,d,e;Hc(b);c=false;for(e=b.I();e.R();){d=e.S();c=c|or(a.n,d,(gi(),ei))==null}return c}
function ip(a){var b,c,d,e;e=1;for(c=0,d=a.length;c<d;++c){b=a[c];e=31*e+(b!=null?lb(b):0);e=~~e}return e}
function Ig(a){var b;if(be(a,38)){b=a;if(ge(b.e)!==ge((xb(),wb))){return ge(b.e)===ge(wb)?null:b.e}}return a}
function Jg(a){var b;if(be(a,9)){return a}b=a&&a.__gwt$exception;if(!b){b=new zb(a);oc(b,a);Hg(a,b)}return b}
function Dh(a){if(nh(a,(Lh(),Ih))){return cv}if(!rh(a,Kh)){return -hh(wh(a))}return a.l+a.m*av+a.h*bv}
function Ui(a,b){if(a<b){return -1}if(a>b){return 1}if(a==b){return 0}return isNaN(a)?isNaN(b)?0:1:-1}
function Ml(a){jl();if(a<0){if(a!=-1){return new zl(-1,-a)}return dl}else return a<=10?fl[ie(a)]:new zl(1,a)}
function Jd(a){Dd();throw new cd("Unexpected typeof result '"+a+"'; please report this bug to the GWT team")}
function Rh(a,b){typeof window==='object'&&typeof window['$gwt']==='object'&&(window['$gwt'][a]=b)}
function Dd(){Dd=Ng;Cd={'boolean':Ed,number:Fd,string:Hd,object:Gd,'function':Gd,undefined:Id}}
function nc(){nc=Ng;var a,b;b=!(!!Error.stackTraceLimit||'stack' in new Error);a=new Ac;mc=b?new sc:a}
function tt(a){var b;b=isNaN(a*jv)?a*jv:Yi(a*jv)?a*jv:a*jv==0?a*jv:Dh(oh(Math.round(a*jv)));return b/jv}
function ol(a,b){var c;if(a===b){return true}if(be(b,5)){c=b;return a.j==c.j&&a.g==c.g&&pl(a,c.d)}return false}
function Bu(a,b){var c;c=yu(b);c.f.nb('monoisotopicMass',''+a);return su(Gu(c,(Jt(),Jt(),It),(null,Ht)))}
function _k(a){var b=Ik;!b&&(b=Ik=/^[+-]?\d*$/i);if(b.test(a)){return parseInt(a,10)}else{return Number.NaN}}
function lk(a){jk();var b=':'+a;var c=ik[b];if(c!=null){return c}c=gk[b];c==null&&(c=kk(a));mk();return ik[b]=c}
function qj(a){var b,c;if(a>-129&&a<128){b=a+128;c=(sj(),rj)[b];!c&&(c=rj[b]=new hj(a));return c}return new hj(a)}
function ah(a){var b,c,d;b=~a.l+1&Zu;c=~a.m+(b==0?1:0)&Zu;d=~a.h+(b==0&&c==0?1:0)&$u;fh(a,b);gh(a,c);eh(a,d)}
function wl(a){var b,c,d,e;return a.j==0?a:(b=a.g,c=b+1,d=Ud(me,Yu,0,c,7,1),Rl(d,a.d,b),e=new Bl(a.j,c,d),ml(e),e)}
function rl(a){var b;if(a.f!=0){return a.f}for(b=0;b<a.d.length;b++){a.f=a.f*33+(a.d[b]&-1)}a.f=a.f*a.j;return a.f}
function oi(a){if(a>=48&&a<58){return a-48}if(a>=97&&a<97){return a-97+10}if(a>=65&&a<65){return a-65+10}return -1}
function Lm(a,b){var c,d;for(d=a.I();d.R();){c=d.S();if(ge(b)===ge(c)||b!=null&&hb(b,c)){return true}}return false}
function $b(a,b){var c,d;for(c=0,d=0;d<16;d++){b[d]=a[c++]&255|(a[c++]&255)<<8|(a[c++]&255)<<16|(a[c++]&255)<<24}}
function jp(a,b,c,d){var e,f,g;for(e=b+1;e<c;++e){for(f=e;f>b&&d.ab(a[f-1],a[f])>0;--f){g=a[f];a[f]=a[f-1];a[f-1]=g}}}
function kp(a,b,c,d,e,f,g,h){var i;i=c;while(f<g){i>=d||b<c&&h.ab(a[b],a[i])<=0?(e[f++]=a[b++]):(e[f++]=a[i++])}}
function Ys(a,b,c,d,e,f){a.g=yj(ie(wj((c-f-b-e)/a.d.j)),a.d.g);a.f=zj(ie(vj((c+f-b-d)/a.d.j)),a.d.f);a.e=a.g-1}
function bu(a,b,c){this.g=a;Tt(this);this.d=c;Vt(this,b);if(b.d!=0){us(this.f,-b.d*uv);ys(this.f,1/uj(b.d))}}
function xi(){this.n=ui++;this.q=null;this.o=null;this.k=null;this.g=null;this.e=null;this.p=null;this.d=null}
function ls(a,b,c,d){if(c>d)throw new Kt('Error: minCount>maxCount');this.o=a;this.e=b;this.g=c;this.f=d}
function Ns(a){if(a.g==0)throw new vb('Exact mass of '+a.n+' is unknown. Run calculateExactMass() first.');return a.g}
function Np(a){if(a.f<a.d.length){return true}if(a.e<a.g.length-1){a.d=Dp(a.k,a.g[++a.e]);a.f=0;return true}return false}
function Il(a){var b,c,d;if(a<hl.length){return hl[a]}c=a>>5;b=a&31;d=Ud(me,Yu,0,c+1,7,1);d[c]=1<<b;return new Bl(1,c+1,d)}
function qm(a,b,c,d,e){if(b==0||d==0){return}b==1?(e[d]=sm(e,c,d,a[0])):d==1?(e[b]=sm(e,a,b,c[0])):rm(a,c,e,b,d)}
function Ls(a){var b,c,d;if(a.e.e==0){return}d=0;for(c=Xn(new Yn(a.e));wn(c.d);){b=ao(c);d+=b.e*b.g/100}if(d==0)return;a.f=d}
function ut(a){var b,c,d;if(a.n.g==0)return '';d=new pk('');for(c=Ho(new Io(a.n));Hn(c.d.d);){b=Mo(c);nk(d,js(b))}return d.d}
function Ol(a){var b,c,d;if(a.j==0){return 0}b=a.g<<5;c=a.d[a.g-1];if(a.j<0){d=ql(a);if(d==a.g-1){--c;c=~~c}}b-=mj(c);return b}
function Yo(a,b){var c,d;d=a.e.length;b.length<d&&(b=Sd(b,d));for(c=0;c<d;++c){b[c]=a.e[c]}b.length>d&&(b[d]=null);return b}
function Pl(a,b){var c,d,e,f;c=b>>5;b&=31;e=a.g+c+(b==0?0:1);d=Ud(me,Yu,0,e,7,1);Ql(d,a.d,c,b);f=new Bl(a.j,e,d);ml(f);return f}
function zs(a,b){var c,d,e,f;c=(new Hr(a)).d.$();while(Hn(c.d)){d=c.e=In(c.d);e=d.X();f=d.Y();or(a,e,new Ti(f.d*b))}}
function pb(a){var b,c,d,e,f;for(e=a;e;e=e.j){for(b=(e.n==null&&(e.n=(nc(),f=mc.t(e),pc(f))),e.n),c=0,d=b.length;c<d;++c);}}
function Sm(a,b){var c,d,e;for(d=a.O().I();d.R();){c=d.S();e=c.X();if(ge(b)===ge(e)||b!=null&&hb(b,e)){return c}}return null}
function Fp(a,b){var c,d,e,f;for(d=Ep(a,b==null?'0':''+Ap(b)),e=0,f=d.length;e<f;++e){c=d[e];if(zp(b,c.X())){return c}}return null}
function ir(a,b){var c,d,e;d=null;e=a.f;while(e){c=a.e.ab(b,e.f);if(c==0){return e}if(c>=0){e=e.d[1]}else{d=e;e=e.d[0]}}return d}
function jr(a,b){var c,d,e;d=null;e=a.f;while(e){c=a.e.ab(b,e.f);if(c==0){return e}if(c<=0){e=e.d[0]}else{d=e;e=e.d[1]}}return d}
function Cs(a){var b,c;b=new Qk(a);c=Pk(Mk(b,(Hm(),Hm(),Em)));if(c.indexOf('.')!=-1){return Rj(c,'\\.?0+$','')}return c}
function op(a){var b,c,d;d=1;for(c=a.I();c.d<c.f.K();){b=(Fc(c.d<c.f.K()),c.f.V(c.e=c.d++));d=31*d+(b!=null?lb(b):0);d=~~d}return d}
function pc(a){var b,c,d;b='oc';d=zj(a.length,5);for(c=0;c<d;c++){if(Lj(a[c].g,b)){return a.length>=c+1&&a.splice(0,c+1),a}}return a}
function $j(a,b,c){var d='';for(var e=b;e<c;){var f=Math.min(e+10000,c);d+=String.fromCharCode.apply(null,a.slice(e,f));e=f}return d}
function ni(a,b,c){var d,e;d=Kj(a,b++);if(d>=55296&&d<=56319&&b<c&&ri(e=a.charCodeAt(b))){return ev+((d&1023)<<10)+(e&1023)}return d}
function Mi(a,b){var c=0;while(!b[c]||b[c]==''){c++}var d=b[c++];for(;c<b.length;c++){if(!b[c]||b[c]==''){continue}d+=a+b[c]}return d}
function Mt(a,b,c){var d,e,f;f=nu(Rt(a),b,c);e=new Hs;for(d=0;d<f.length;d++){or(e,new Ti(f[d][0]),new Ti(f[d][1]))}a.j.f=e;a.j.f.d=jv}
function Pg(){!Array.isArray&&(Array.isArray=function(a){return Object.prototype.toString.call(a)==='[object Array]'})}
function Mj(b,a){if(a==null){return false}if(b==a){return true}return b.length==a.length&&b.toLowerCase()==a.toLowerCase()}
function ll(a,b){if(a.j>b.j){return 1}if(a.j<b.j){return -1}if(a.g>b.g){return a.j}if(a.g<b.g){return -b.j}return a.j*gm(a.d,b.d,a.g)}
function Yg(a,b){if(a.h==_u&&a.m==0&&a.l==0){b&&(Tg=Wg(0,0,0));return Vg((Lh(),Jh))}b&&(Tg=Wg(a.l,a.m,a.h));return Wg(0,0,0)}
function Vj(a){if(a.length==0||a[0]>' '&&a[a.length-1]>' '){return a}return a.replace(/^[\u0000-\u0020]*|[\u0000-\u0020]*$/g,'')}
function Vk(a){var b;sh(a,{l:0,m:0,h:0})&&(a={l:~a.l&Zu,m:~a.m&Zu,h:~a.h&$u});return 64-(b=Eh(Ah(a,32)),b!=0?mj(b):mj(Eh(a))+32)}
function Lb(){var a;if(Gb!=0){a=Bb();if(a-Ib>2000){Ib=a;Jb=$wnd.setTimeout(Sb,10)}}if(Gb++==0){hc((gc(),fc));return true}return false}
function ph(a){var b,c;if(a>-129&&a<128){b=a+128;jh==null&&(jh=Ud(He,Yu,141,256,0,1));c=jh[b];!c&&(c=jh[b]=Ug(a));return c}return Ug(a)}
function Ot(a){var b,c,d;b=tv;for(d=new Kn(a.g.g);d.d<d.f.K();){c=(Fc(d.d<d.f.K()),d.f.V(d.e=d.d++));c.k>b&&(b=c.k)}Zt(a.j,b,a.e,a.d)}
function xs(a){var b,c,d,e,f,g;b=tv;f=0;c=(new Hr(a)).d.$();while(Hn(c.d)){d=c.e=In(c.d);e=d.X();g=d.Y().d;if(g>b){b=g;f=e.d}}return f}
function us(a,b){var c,d,e,f,g;d=new Hs;c=(new Hr(a)).d.$();while(Hn(c.d)){e=c.e=In(c.d);f=e.X();g=e.Y();or(d,new Ti(f.d+b),g);Cr(c)}ts(a,d)}
function ys(a,b){var c,d,e,f,g;d=new Hs;c=(new Hr(a)).d.$();while(Hn(c.d)){e=c.e=In(c.d);f=e.X();g=e.Y();or(d,new Ti(f.d*b),g);Cr(c)}ts(a,d)}
function ts(a,b){var c,d,e,f,g;e=(new Hr(b)).d.$();while(Hn(e.d)){c=e.e=In(e.d);f=c.X();g=c.Y();d=vo(a,f);!!d&&(g=new Ti(d.d+g.d));or(a,f,g)}}
function sd(f,a){var b=f.d;var c;a=String(a);b.hasOwnProperty(a)&&(c=b[a]);var d=(Dd(),Cd)[typeof c];var e=d?d(c):Jd(typeof c);return e}
function sl(a){var b;b=a.g>1?yh(zh(ph(a.d[1]),32),lh(ph(a.d[0]),{l:Zu,m:1023,h:0})):lh(ph(a.d[0]),{l:Zu,m:1023,h:0});return vh(ph(a.j),b)}
function gm(a,b,c){var d;for(d=c-1;d>=0&&a[d]==b[d];d--);return d<0?0:sh(lh(ph(a[d]),{l:Zu,m:1023,h:0}),lh(ph(b[d]),{l:Zu,m:1023,h:0}))?-1:1}
function zl(a,b){this.j=a;if(b<mv){this.g=1;this.d=Xd(Td(me,1),Yu,0,7,[~~b])}else{this.g=2;this.d=Xd(Td(me,1),Yu,0,7,[~~(b%mv),~~(b/mv)])}}
function Dl(a){jl();kl(this);if(a.length==0){this.j=0;this.g=1;this.d=Xd(Td(me,1),Yu,0,7,[0])}else{this.j=1;this.g=a.length;this.d=a;ml(this)}}
function os(a,b,c){if(b>c)throw new Kt('Error: minCount>maxCount');this.g=b;this.f=c;this.j=qt(a.d);this.k=rt(a.d);this.d=0;this.o=a.e;this.e=pt(a.d)}
function at(a){var b,c,d,e;c='';b=new Zb;d=Tb(b,dk(a));for(e=0;e<5;e++){e==0?(c+=_d(uj(d[0]%26)+65&gv)):(c+=_d(uj(d[e]%26)+97&gv))}return c}
function dc(a,b){var c,d;for(c=0,d=0;c<4;c++){b[d++]=he(a[c]&255);b[d++]=he(a[c]>>>8&255);b[d++]=he(a[c]>>>16&255);b[d++]=he(a[c]>>>24&255)}}
function ck(a){var b,c;if(a>=ev){b=55296+(a-ev>>10&1023)&gv;c=56320+(a-ev&1023)&gv;return ek(b)+ek(c)}else{return String.fromCharCode(a&gv)}}
function jt(a,b,c,d){this.d=b;this.e=c;this.g=new $o;ft(this,a,d);if(this.g.e.length==0)throw new Kt('Cannot parse: empty formula: ->'+a+'<-')}
function kr(a,b,c,d,e,f,g,h){var i,j;if(!d){return}i=d.d[0];!!i&&kr(a,b,c,i,e,f,g,h);lr(a,c,d.f,e,f,g,h)&&b.U(d);j=d.d[1];!!j&&kr(a,b,c,j,e,f,g,h)}
function Zj(a){var b;b=0;while(0<=(b=a.indexOf('\\',b))){a.charCodeAt(b+1)==36?(a=a.substr(0,b)+'$'+Tj(a,++b)):(a=a.substr(0,b)+Tj(a,++b))}return a}
function Rm(a,b){var c,d,e;c=b.X();e=b.Y();d=a.P(c);if(!(ge(e)===ge(d)||e!=null&&hb(e,d))){return false}if(d==null&&!a.N(c)){return false}return true}
function lr(a,b,c,d,e,f,g){var h,i;if(b.pb()&&(h=a.e.ab(c,d),h<0||!e&&h==0)){return false}if(b.qb()&&(i=a.e.ab(c,f),i>0||!g&&i==0)){return false}return true}
function _g(a,b){var c,d,e;if(b<=22){c=a.l&(1<<b)-1;d=e=0}else if(b<=44){c=a.l;d=a.m&(1<<b-22)-1;e=0}else{c=a.l;d=a.m;e=a.h&(1<<b-44)-1}return Wg(c,d,e)}
function Fu(a){var b,c,d;d=Nl({l:1,m:0,h:0});for(c=new Kn(a.d);c.d<c.f.K();){b=(Fc(c.d<c.f.K()),c.f.V(c.e=c.d++));d=tl(d,Nl(ph(b.d.f-b.d.g+1)))}return d}
function Bs(a){var b,c,d,e,f;e=~~(a.d/2);if(a.g<e)return;f=new bs(new Js);Km(f,new Hr(a));c=0;for(d=Ho(new Io(f.n));Hn(d.d.d);){b=Mo(d);c++>e&&pr(a,b.X())}}
function pt(a){var b,c,d;if(a.j)throw new Kt('Cannot calculate mass of a range formula');d=0;for(c=Ho(new Io(a.n));Hn(c.d.d);){b=Mo(c);d+=b.e*hs(b)}return tt(d)}
function rt(a){var b,c,d;if(a.j)throw new Kt('Cannot calculate exact mass of a range formula');d=0;for(c=Ho(new Io(a.n));Hn(c.d.d);){b=Mo(c);d+=b.k*hs(b)}return d}
function st(a){var b,c,d;if(a.j)throw new Kt('Cannot get the number of atoms: this is a range formula');d=0;for(c=Ho(new Io(a.n));Hn(c.d.d);){b=Mo(c);d+=hs(b)}return d}
function Nm(a){var b,c,d,e;e=new wk('[');b=false;for(d=a.I();d.R();){c=d.S();b?(e.d+=', ',e):(b=true);e.d+=c===a?'(this Collection)':''+c}e.d+=']';return e.d}
function Yk(a,b,c){var d,e,f,g,h;e=(h=a/b,h>0?wj(h):vj(h));f=a%b;g=Ui(a*b,0);if(f!=0){d=Ui((f<=0?0-f:f)*2,b<=0?0-b:b);e+=al(ie(e)&1,g*(5+d),c)}return new Rk(e)}
function Nl(a){jl();if(sh(a,{l:0,m:0,h:0})){if(xh(a,{l:Zu,m:Zu,h:$u})){return new Cl(-1,wh(a))}return dl}else return th(a,{l:10,m:0,h:0})?fl[Eh(a)]:new Cl(1,a)}
function cu(a,b,c){var d,e;d=b.d!=0?hs(b):Aj(gn(a.d.d,b.o).e.e-1,hs(b));e=c.d!=0?hs(c):Aj(gn(a.d.d,c.o).e.e-1,hs(c));if(d==e)return Ui(b.e,c.e);return -Ui(d,e)}
function ih(a,b){var c,d,e;e=a.h-b.h;if(e<0){return false}c=a.l-b.l;d=a.m-b.m+(c>>22);e+=d>>22;if(e<0){return false}fh(a,c&Zu);gh(a,d&Zu);eh(a,e&$u);return true}
function Tb(a,b){var c,d;Xb(a,b,0,b.length);return c=ec(zh(a.e,3)),d=Ud(je,Yu,0,16,7,1),a.f>8?Xb(a,Ub,0,a.f-8):Xb(a,Ub,0,64+(a.f-8)),Xb(a,c,0,8),dc(a.g,d),Wb(a),d}
function au(a,b,c){var d,e,f;this.g=a;Tt(this);this.d=c;d=b.e.e;$t(this,a.e/(d*4));for(f=Xn(new Yn(b.e));wn(f.d);){e=ao(f);or(this.f,new Ti(e.e),new Ti(e.g/100))}}
function Wd(a,b,c,d,e,f,g){var h,i,j,k,l;k=e[f];j=f==g-1;h=j?d:0;l=Yd(h,k);Xd(Td(a,g-f),b[f],c[f],h,l);if(!j){++f;for(i=0;i<k;++i){l[i]=Wd(a,b,c,d,e,f,g)}}return l}
function Ph(b,c,d,e){Oh();var f=Mh;$moduleName=c;$moduleBase=d;Gg=e;function g(){for(var a=0;a<f.length;a++){f[a]()}}
if(b){try{Uu(g)()}catch(a){b(c,a)}}else{Uu(g)()}}
function hm(a,b,c){var d,e;d=lh(ph(c),{l:Zu,m:1023,h:0});for(e=0;xh(d,{l:0,m:0,h:0})&&e<b;e++){d=kh(d,lh(ph(a[e]),{l:Zu,m:1023,h:0}));a[e]=Eh(d);d=Ah(d,32)}return Eh(d)}
function wm(a,b){om();var c,d;d=(jl(),el);c=a;for(;b>1;b>>=1){(b&1)!=0&&(d=tl(d,c));c.g==1?(c=tl(c,c)):(c=new Dl(ym(c.d,c.g,Ud(me,Yu,0,c.g<<1,7,1))))}d=tl(d,c);return d}
function Hp(a,b,c){var d,e,f,g;d=Cp(a,b==null?'0':''+Ap(b));for(f=0,g=d.length;f<g;++f){e=d[f];if(zp(b,e.X())){return e.Z(c)}}d[d.length]=new no(b,c);dn(a.e);return null}
function lp(a,b,c,d){var e,f,g,h;!d&&(d=(rp(),rp(),qp));e=(f=(g=c-b,Ec(g>=0,Xd(Td(af,1),Yu,1,3,[qj(b),qj(c)])),g),h=Sd(a,f),yk(a,b,h,0,zj(a.length-b,f)),h);mp(e,a,b,c,-b,d)}
function iu(a,b){gu();var c,d,e,f;f=2;for(d=Ho(new Io(a.n));Hn(d.d.d);){c=Mo(d);e=hu(c.o);if(!e){if(!b){return null}else{f+=b.d*hs(c)}}else{f+=e.d*hs(c)}}return new Ti(f/2)}
function Yd(a,b){var c=new Array(b);var d;switch(a){case 6:d={l:0,m:0,h:0};break;case 7:d=0;break;case 8:d=false;break;default:return c;}for(var e=0;e<b;++e){c[e]=d}return c}
function js(a){var b;a.d!=0?(b='<sup>'+a.d+'<\/sup>'+a.o):(b=a.o);if(a.f==1&&a.g==1)return b;if(a.f==a.g)return b+'<sub>'+a.f+'<\/sub>';return b+'<sub>'+a.g+'-'+a.f+'<\/sub>'}
function Vb(){Vb=Ng;Ub=Xd(Td(je,1),Yu,0,7,[-128,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0])}
function ku(a){var b,c,d;this.e=61;this.d=a;c=a/(2*Cj(2*xj(2)));this.f=Ud(le,hv,0,61,7,1);for(b=0;b<61;b++){d=b-30;this.f[b]=1/(c*Cj(6.283185307179586))*Math.exp(-d*d/(2*c*c))}}
function Eu(a,b,c){var d,e;for(d=0;d<a.d.e.length;d++){for(e=d+1;e<a.d.e.length;e++){b[d]=b[d]+Xs((Xq(e,a.d.e.length),To(a.d,e)));c[d]=c[d]+Ws((Xq(e,a.d.e.length),To(a.d,e)))}}}
function Wb(a){a.d=Ud(je,Yu,0,64,7,1);a.g=Ud(me,Yu,0,4,7,1);a.j=Ud(me,Yu,0,16,7,1);a.g[0]=1732584193;a.g[1]=-271733879;a.g[2]=-1732584194;a.g[3]=271733878;a.e={l:0,m:0,h:0};a.f=64}
function Ql(a,b,c,d){var e,f,g;if(d==0){yk(b,0,a,c,a.length-c)}else{g=32-d;a[a.length-1]=0;for(f=a.length-1;f>c;f--){a[f]|=b[f-c-1]>>>g;a[f-1]=b[f-c-1]<<d}}for(e=0;e<c;e++){a[e]=0}}
function Uk(a){var b,c;if(a>-140737488355328&&a<140737488355328){if(a==0){return 0}b=a<0;b&&(a=-a);c=ie(wj(xj(a)/0.6931471805599453));(!b||a!=Aj(2,c))&&++c;return c}return Vk(oh(a))}
function vt(a){var b,c,d;if(a.n.g==0)return '';d=new pk('');for(c=Ho(new Io(a.n));Hn(c.d.d);){b=Mo(c);nk(d,ks(b,a.f))}a.d!=0&&(a.d>0?nk(d,'(+'+a.d+')'):nk(d,'('+a.d+')'));return d.d}
function Zd(a,b,c,d,e,f){if(a===c){a=a.slice(b,b+e);b=0}for(var g=b,h=b+e;g<h;){var i=Math.min(g+10000,h);e=i-g;Array.prototype.splice.apply(c,[d,f?e:0].concat(a.slice(g,i)));g=i;d+=e}}
function qh(a,b){var c,d;c=a.h>>19;d=b.h>>19;return c==0?d!=0||a.h>b.h||a.h==b.h&&a.m>b.m||a.h==b.h&&a.m==b.m&&a.l>b.l:!(d==0||a.h<b.h||a.h==b.h&&a.m<b.m||a.h==b.h&&a.m==b.m&&a.l<=b.l)}
function rh(a,b){var c,d;c=a.h>>19;d=b.h>>19;return c==0?d!=0||a.h>b.h||a.h==b.h&&a.m>b.m||a.h==b.h&&a.m==b.m&&a.l>=b.l:!(d==0||a.h<b.h||a.h==b.h&&a.m<b.m||a.h==b.h&&a.m==b.m&&a.l<b.l)}
function Ct(b){var c,d;d=new Tu;Su(d,'name',b.f);Su(d,'symbol',b.e);Su(d,'mf',vt(b.d));try{Qu(d,'mass',new kd(pt(b.d)))}catch(a){a=Jg(a);if(be(a,4)){c=a;pb(c)}else throw Ig(a)}return d}
function sr(a,b,c,d){var e,f;f=b;e=f.f==null||a.e.ab(c.f,f.f)>0?1:0;while(f.d[e]!=c){f=f.d[e];e=a.e.ab(c.f,f.f)>0?1:0}f.d[e]=d;d.e=c.e;d.d[0]=c.d[0];d.d[1]=c.d[1];c.d[0]=null;c.d[1]=null}
function dq(){var a;if(Object.create&&Object.getOwnPropertyNames&&cq()){return (a=Object.create(null),a['__proto__']=42,Object.getOwnPropertyNames(a).length==0)?new eq:new Zp}return new gq}
function mt(a,b){var c;if(b.f<b.g)throw new Kt('Syntax error: maxCount<minCount');c=ot(a,b.o);if(c)if(c.d==b.d){c.g+=b.g;c.f+=b.f;return}b.f==0&&b.g==0&&(a.j=true);or(a.n,b,(gi(),ei))==null}
function Qi(a){var b;if(!(b=Pi,!b&&(b=Pi=/^\s*[+-]?(NaN|Infinity|((\d+\.?\d*)|(\.\d+))([eE][+-]?\d+)?[dDfF]?)\s*$/),b.test(a))){throw new Fj('For input string: "'+a+'"')}return parseFloat(a)}
function Cl(a,b){kl(this);this.j=a;if(nh(lh(b,{l:0,m:4193280,h:$u}),{l:0,m:0,h:0})){this.g=1;this.d=Xd(Td(me,1),Yu,0,7,[Eh(b)])}else{this.g=2;this.d=Xd(Td(me,1),Yu,0,7,[Eh(b),Eh(Ah(b,32))])}}
function Tl(a,b,c,d,e){var f,g,h;f=true;for(g=0;g<d;g++){f=f&c[g]==0}if(e==0){yk(c,d,a,0,b)}else{h=32-e;f=f&c[g]<<h==0;for(g=0;g<b-1;g++){a[g]=c[g+d]>>>e|c[g+d+1]<<h}a[g]=c[g+d]>>>e;++g}return f}
function Es(a){var b,c,d,e,f,g,h;e=a.g;e>~~(a.d/2)&&(e=~~(a.d/2));f='';d=(new Hr(a)).d.$();b=0;while(Hn(d.d)&&b<e){++b;c=d.e=In(d.d);g=c.X().d;h=c.Y().d;h>-1.0E100&&(f+=g+', '+h+'\r\n')}return f}
function Fs(a){var b,c,d,e,f,g,h;e=a.g;e>~~(a.d/2)&&(e=~~(a.d/2));f=new ok;d=(new Hr(a)).d.$();b=0;while(Hn(d.d)&&b<e){++b;c=d.e=In(d.d);g=c.X().d;h=c.Y().d;nk(f,Cs(g)+', '+Cs(h*100)+'\r\n')}return f}
function zh(a,b){var c,d,e;b&=63;if(b<22){c=a.l<<b;d=a.m<<b|a.l>>22-b;e=a.h<<b|a.m>>22-b}else if(b<44){c=0;d=a.l<<b-22;e=a.m<<b-22|a.l>>44-b}else{c=0;d=0;e=a.l<<b-44}return {l:c&Zu,m:d&Zu,h:e&$u}}
function Bh(a,b){var c,d,e,f;b&=63;c=a.h&$u;if(b<22){f=c>>>b;e=a.m>>b|c<<22-b;d=a.l>>b|a.m<<22-b}else if(b<44){f=0;e=c>>>b-22;d=a.m>>b-22|a.h<<44-b}else{f=0;e=0;d=c>>>b-44}return {l:d&Zu,m:e&Zu,h:f&$u}}
function Gs(a){var b,c,d,e,f;c=a.g;c>~~(a.d/2)&&(c=~~(a.d/2));d=Vd(le,[Yu,hv],[28,0],7,[c,2],2);b=0;for(f=Ho(new Io(a));Hn(f.d.d);){e=Mo(f);d[b][0]=e.d;d[b][1]=vo(a,e).d;++b;if(b==c)break}return d}
function ju(a,b){gu();var c,d,e,f;f=2;for(d=new Kn(a.d);d.d<d.f.K();){c=(Fc(d.d<d.f.K()),d.f.V(d.e=d.d++));e=hu(c.d.o);if(!e){if(!b){return null}else{f+=b.d*c.e}}else{f+=e.d*c.e}}return new Ti(f/2)}
function Hm(){Hm=Ng;Gm=new Im('UP',0);Am=new Im('DOWN',1);zm=new Im('CEILING',2);Bm=new Im('FLOOR',3);Em=new Im('HALF_UP',4);Cm=new Im('HALF_DOWN',5);Dm=new Im('HALF_EVEN',6);Fm=new Im('UNNECESSARY',7)}
function As(a,b){var c,d,e,f,g;c=tv;d=(new Hr(a)).d.$();while(Hn(d.d)){e=d.e=In(d.d);e.X();g=e.Y().d;g>c&&(c=g)}d=(new Hr(a)).d.$();while(Hn(d.d)){e=d.e=In(d.d);f=e.X();g=e.Y();or(a,f,new Ti(g.d/c*b))}}
function sm(a,b,c,d){om();var e,f;e={l:0,m:0,h:0};for(f=0;f<c;f++){e=kh(vh(lh(ph(b[f]),{l:Zu,m:1023,h:0}),lh(ph(d),{l:Zu,m:1023,h:0})),lh(ph(Eh(e)),{l:Zu,m:1023,h:0}));a[f]=Eh(e);e=Bh(e,32)}return Eh(e)}
function Ut(a,b){var c;if(b<=0)throw new vb('Error: power='+b);if(b==1)return a;if(b==2){a.f=Wt(a,a);return a}--b;c=new _t(a.g,a.f);while(b!=0){(b&1)!=0&&(a.f=Wt(a,c));b>>=1;b!=0&&(c.f=Wt(c,c))}return a}
function yb(a){var b;if(a.f==null){b=ge(a.e)===ge(wb)?null:a.e;a.g=b==null?'null':ce(b)?b==null?null:b.name:fe(b)?'String':wi(jb(b));a.d=a.d+': '+(ce(b)?b==null?null:b.message:b+'');a.f='('+a.g+') '+a.d}}
function cq(){var a='__proto__';var b=Object.create(null);if(b[a]!==undefined){return false}var c=Object.getOwnPropertyNames(b);if(c.length!=0){return false}b[a]=42;if(b[a]!==42){return false}return true}
function mp(a,b,c,d,e,f){var g,h,i,j;g=d-c;if(g<7){jp(b,c,d,f);return}i=c+e;h=d+e;j=i+(h-i>>1);mp(b,a,i,j,-e,f);mp(b,a,j,h,-e,f);if(f.ab(a[j-1],a[j])<=0){while(c<d){b[c++]=a[i++]}return}kp(a,i,j,h,b,c,d,f)}
function lc(b,c){var d,e,f,g;for(e=0,f=b.length;e<f;e++){g=b[e];try{g[1]?g[0].sb()&&(c=kc(c,g)):g[0].sb()}catch(a){a=Jg(a);if(be(a,9)){d=a;Qb(be(d,38)?ge(d.e)===ge(wb)?null:d.e:d)}else throw Ig(a)}}return c}
function Ip(a,b){var c,d,e,f;e=b==null?'0':''+Ap(b);c=Ep(a,e);for(f=0;f<c.length;f++){d=c[f];if(zp(b,d.X())){c.length==1?(delete a.d[e],undefined):(c.splice(f,1),undefined);en(a.e);return d.Y()}}return null}
function kk(a){var b,c,d,e;b=0;d=a.length;e=d-4;c=0;while(c<e){b=a.charCodeAt(c+3)+31*(a.charCodeAt(c+2)+31*(a.charCodeAt(c+1)+31*(a.charCodeAt(c)+31*b)));b=~~b;c+=4}while(c<d){b=b*31+Kj(a,c++)}b=~~b;return b}
function ul(a,b){var c;if(b<0){throw new _h('Negative exponent')}if(b==0){return el}else if(b==1||ol(a,el)||ol(a,il)){return a}if(!yl(a,0)){c=1;while(!yl(a,c)){++c}return tl(Il(c*b),ul(xl(a,c),b))}return wm(a,b)}
function Ms(a){var b,c,d,e,f;if(a.e.e==0){a.g=a.f;a.k=Eh(oh(Bj(a.f)));return}b=1.7976931348623157E308;f=tv;c=true;for(e=Xn(new Yn(a.e));wn(e.d);){d=ao(e);if(d.g>f||c){c=false;b=d.e;f=d.g}}a.g=b;a.k=Eh(oh(Bj(b)))}
function Mg(a,b,c){var d=Kg;var e=Lg;var f=Og;var g=d[a];var h=f(g);if(g&&!h){_=g}else{_=d[a]=!b?{}:e(b);_.cM=c;_.constructor=_;!b&&(_.tM=Sg)}for(var i=3;i<arguments.length;++i){arguments[i].prototype=_}h&&(_.cZ=h)}
function ks(a,b){var c,d;c=a.o;!!b&&hn(b,a.o)&&Qj(gn(b,a.o).j,'^[A-Z][a-z]?\\{.*\\}$')&&(c=gn(b,a.o).j);d='';a.d!=0?(d+='['+a.d+c+']'):(d+=c);if(a.f==1&&a.g==1)return d;if(a.f==a.g)return d+a.f;return d+a.g+'-'+a.f}
function Gd(a){if(!a){return ed(),dd}var b=a.valueOf?a.valueOf():a;if(b!==a){var c=Cd[typeof b];return c?c(b):Jd(typeof b)}else if(a instanceof Array||a instanceof $wnd.Array){return new Rc(a)}else{return new wd(a)}}
function Xb(a,b,c,d){while(true){if(d>=a.f){yk(b,c,a.d,Eh(lh(a.e,{l:63,m:0,h:0})),a.f);Yb(a,a.d);a.e=kh(a.e,ph(a.f));c+=a.f;d-=a.f;a.f=64}else{yk(b,c,a.d,Eh(lh(a.e,{l:63,m:0,h:0})),d);a.e=kh(a.e,ph(d));a.f-=d;break}}}
function mj(a){var b,c,d;if(a<0){return 0}else if(a==0){return 32}else{d=-(a>>16);b=d>>16&16;c=16-b;a=a>>b;d=a-256;b=d>>16&8;c+=b;a<<=b;d=a-4096;b=d>>16&4;c+=b;a<<=b;d=a-16384;b=d>>16&2;c+=b;a<<=b;d=a>>14;b=d&~(d>>1);return c+2-b}}
function Eb(b){var c=(!Cb&&(Cb=Fb()),Cb);var d=b.replace(/[\x00-\x1f\xad\u0600-\u0603\u06dd\u070f\u17b4\u17b5\u200b-\u200f\u2028-\u202e\u2060-\u2064\u206a-\u206f\ufeff\ufff9-\ufffb"\\]/g,function(a){return Db(a,c)});return '"'+d+'"'}
function yl(a,b){var c,d,e;if(b==0){return (a.d[0]&1)!=0}if(b<0){throw new _h('Negative bit address')}e=b>>5;if(e>=a.g){return a.j<0}c=a.d[e];b=1<<(b&31);if(a.j<0){d=ql(a);if(e<d){return false}else d==e?(c=-c):(c=~c)}return (c&b)!=0}
function Iu(b,c){var d,e,f,g;f=new Uq;try{for(e=Ho(new Io(b.n));Hn(e.d.d);){d=Mo(e);d.f=zj(d.f,ie(c/d.j));if(d.g>d.f)return null;Tq(f,new Zs(d))}g=Xo(f.d);lp(g,0,g.length,null);pp(f,g)}catch(a){a=Jg(a);if(!be(a,4))throw Ig(a)}return f}
function km(a,b,c,d,e){var f,g;f={l:0,m:0,h:0};for(g=0;g<e;g++){f=kh(f,Ch(lh(ph(b[g]),{l:Zu,m:1023,h:0}),lh(ph(d[g]),{l:Zu,m:1023,h:0})));a[g]=Eh(f);f=Ah(f,32)}for(;g<c;g++){f=kh(f,lh(ph(b[g]),{l:Zu,m:1023,h:0}));a[g]=Eh(f);f=Ah(f,32)}}
function qt(a){var b,c,d,e;if(a.j)throw new Kt('Cannot calculate exact mass of a range formula');d=0;for(c=Ho(new Io(a.n));Hn(c.d.d);){b=Mo(c);d+=b.j*hs(b)}return e=isNaN(d*kv)?d*kv:Yi(d*kv)?d*kv:d*kv==0?d*kv:Dh(oh(Math.round(d*kv))),e/kv}
function ec(a){var b;b=Ud(je,Yu,0,8,7,1);b[0]=he(Eh(a));a=Bh(a,8);b[1]=he(Eh(a));a=Bh(a,8);b[2]=he(Eh(a));a=Bh(a,8);b[3]=he(Eh(a));a=Bh(a,8);b[4]=he(Eh(a));a=Bh(a,8);b[5]=he(Eh(a));a=Bh(a,8);b[6]=he(Eh(a));a=Bh(a,8);b[7]=he(Eh(a));return b}
function Ah(a,b){var c,d,e,f,g;b&=63;c=a.h;d=(c&_u)!=0;d&&(c|=-1048576);if(b<22){g=c>>b;f=a.m>>b|c<<22-b;e=a.l>>b|a.m<<22-b}else if(b<44){g=d?$u:0;f=c>>b-22;e=a.m>>b-22|c<<44-b}else{g=d?$u:0;f=d?Zu:0;e=c>>b-44}return {l:e&Zu,m:f&Zu,h:g&$u}}
function Ji(a){if(a.G()){var b=a.f;b.H()?(a.q='['+b.p):!b.G()?(a.q='[L'+b.D()+';'):(a.q='['+b.D());a.e=b.C()+'[]';a.o=b.F()+'[]';return}var c=a.k;var d=a.g;d=d.split('/');a.q=Mi('.',[c,Mi('$',d)]);a.e=Mi('.',[c,Mi('.',d)]);a.o=d[d.length-1]}
function dt(a){var b,c,d;if(a.f)throw new Kt('Cannot calculate mass: this is a range formula');if(a.j)throw new Kt('The mass is not clearly defined');d=0;for(c=new Kn(a.g);c.d<c.f.K();){b=(Fc(c.d<c.f.K()),c.f.V(c.e=c.d++));d=ie(d+rt(b)*b.k)}return d}
function ht(a){var b,c,d;c=new Kn(a.g);d=new pk('');c.d<c.f.K()&&(d=new pk((Fc(c.d<c.f.K()),nb(c.f.V(c.e=c.d++)))));while(c.d<c.f.K()){b=(Fc(c.d<c.f.K()),c.f.V(c.e=c.d++));b.k==1?nk(d,'.'+vt(b)):b.k==0?nk(d,'.n'+vt(b)):nk(d,'.'+b.k+vt(b))}return d.d}
function vs(a,b){var c,d,e,f,g,h;e=new Hs;d=(new Hr(a)).d.$();while(Hn(d.d)){f=d.e=In(d.d);g=f.X().d;h=f.Y().d;Cr(d);g=(isNaN(g/b)?g/b:Yi(g/b)?g/b:g/b==0?g/b:Dh(oh(Math.round(g/b))))*b;c=vo(e,new Ti(g));!!c&&(h+=c.d);or(e,new Ti(g),new Ti(h))}ts(a,e)}
function oh(a){var b,c,d,e,f;if(isNaN(a)){return Lh(),Kh}if(a<cv){return Lh(),Ih}if(a>=9223372036854775807){return Lh(),Hh}e=false;if(a<0){e=true;a=-a}d=0;if(a>=bv){d=ie(a/bv);a-=d*bv}c=0;if(a>=av){c=ie(a/av);a-=c*av}b=ie(a);f=Wg(b,c,d);e&&ah(f);return f}
function dk(a){var b,c,d,e,f,g,h;g=a.length;b=0;for(f=0;f<g;){d=ni(a,f,a.length);f+=d>=ev?2:1;d<128?++b:d<2048?(b+=2):d<ev?(b+=3):d<2097152?(b+=4):d<67108864&&(b+=5)}c=Ud(je,Yu,0,b,7,1);h=0;for(e=0;e<g;){d=ni(a,e,a.length);e+=d>=ev?2:1;h+=bk(c,h,d)}return c}
function Ss(a,b,c){var d,e,f,g,h,i,j;this.j=c;this.n=b;this.d=a.d;this.e=new Bp;g=Rj(c,'[^0-9,\\.]','');i=Sj(g,',',0);d=0;for(f=Xn(new Yn(a.e));wn(f.d);){e=ao(f);j=0;i.length>d&&(j=Qi(i[d]));h=new Et(e.f,e.e,j,e.d);jn(this.e,qj(e.f),h);++d}Ls(this);Ms(this)}
function Dt(b,c,d,e,f){var g;this.e=b;this.f=c;try{this.d=new wt(d,e,f)}catch(a){a=Jg(a);if(be(a,7)){g=a;"Group creation error: '"+b+"'='"+d+"': "+qb(g);this.d=new wt('',e,f)}else throw Ig(a)}if(this.d.j)throw new Kt('Range formulas not allowed for groups')}
function Xl(a){var b,c,d;if(rh(a,{l:0,m:0,h:0})){c=mh(a,{l:1755648,m:238,h:0});d=uh(a,{l:1755648,m:238,h:0})}else{b=Bh(a,1);c=mh(b,{l:877824,m:119,h:0});d=uh(b,{l:877824,m:119,h:0});d=kh(zh(d,1),lh(a,{l:1,m:0,h:0}))}return yh(zh(d,32),lh(c,{l:Zu,m:1023,h:0}))}
function fs(a,b){if(gs(a,b))return 0;if(Lj(a.o,'C')){if(Lj(b.o,'C'))return a.d-b.d;return -1}if(Lj(a.o,'H')){if(Lj(b.o,'C'))return 1;if(Lj(b.o,'H'))return a.d-b.d;return -1}if(Lj(b.o,'H')||Lj(b.o,'C')){return 1}if(Lj(a.o,b.o))return a.d-b.d;return _j(a.o,b.o)}
function pm(a,b){om();var c,d,e,f,g,h,i,j,k;if(b.g>a.g){h=a;a=b;b=h}if(b.g<63){return vm(a,b)}g=(a.g&-2)<<4;j=xl(a,g);k=xl(b,g);d=im(a,vl(j,g));e=im(b,vl(k,g));i=pm(j,k);c=pm(d,e);f=pm(im(j,d),im(e,k));f=dm(dm(f,i),c);f=vl(f,g);i=vl(i,g<<1);return dm(dm(i,f),c)}
function dh(a){var b,c,d;c=a.l;if((c&c-1)!=0){return -1}d=a.m;if((d&d-1)!=0){return -1}b=a.h;if((b&b-1)!=0){return -1}if(b==0&&d==0&&c==0){return -1}if(b==0&&d==0&&c!=0){return nj(c)}if(b==0&&d!=0&&c==0){return nj(d)+22}if(b!=0&&d==0&&c==0){return nj(b)+44}return -1}
function Rg(a){var b=this;if(a=='$wnd'){return $wnd}else if(a===''){return b}if(a.substring(0,5)=='$wnd.'){b=$wnd;a=a.substring(5)}var c=a.split('.');!(c[0] in b)&&b.execScript&&b.execScript('var '+c[0]);for(var d;c.length&&(d=c.shift());){b[d]?(b=b[d]):(b=b[d]={})}return b}
function Mk(a,b){var c;Hc(b);c=5-a.j;if(c==0){return a}if(c>0){if(c<Fk.length&&a.d+Gk[ie(c)]<54){return new Rk(a.k*Fk[ie(c)])}return new Tk(um((!a.f&&(a.f=Ml(a.k)),a.f),ie(c)))}if(a.d<54&&-c<Fk.length){return Yk(a.k,Fk[ie(-c)],b)}return Xk((!a.f&&(a.f=Ml(a.k)),a.f),xm(-c),b)}
function Ps(a){var b,c,d;d='Element: '+a.d+' - symbol: '+a.n+' - exact mass: '+a.g+' - mass: '+a.f+' - name: '+a.j+' - nb isotope: '+a.e.e+'\r\n';for(c=Xn(new Yn(a.e));wn(c.d);){b=ao(c);d+='Number: '+b.f+' - mass: '+b.e+' - percentage: '+b.g+' - symbol: '+b.d+'\r\n'}return d}
function ns(a,b,c,d){var e;if(c>d)throw new Kt('Error: minCount>maxCount');if(b==0){this.g=c;this.f=d;this.j=Ns(a);this.k=a.k;this.d=0;this.o=a.n;this.e=a.f;return}e=fn(a.e,new hj(b));if(!e)throw new Kt('Isotope not found');this.d=b;this.o=a.n;this.e=e.e;this.j=e.e;this.g=c;this.f=d}
function Sl(a,b){var c,d,e,f,g;d=b>>5;b&=31;if(d>=a.g){return a.j<0?(jl(),dl):(jl(),il)}f=a.g-d;e=Ud(me,Yu,0,f+1,7,1);Tl(e,f,a.d,d,b);if(a.j<0){for(c=0;c<d&&a.d[c]==0;c++);if(c<d||b>0&&a.d[c]<<32-b!=0){for(c=0;c<f&&e[c]==-1;c++){e[c]=0}c==f&&++f;++e[c]}}g=new Bl(a.j,f,e);ml(g);return g}
function mr(a,b,c,d){var e,f;if(!b){return c}else{e=a.e.ab(c.f,b.f);if(e==0){d.g=fo(b,c.g);d.e=true;return b}f=e<0?0:1;b.d[f]=mr(a,b.d[f],c,d);if(nr(b.d[f])){if(nr(b.d[1-f])){b.e=true;b.d[0].e=false;b.d[1].e=false}else{nr(b.d[f].d[f])?(b=ur(b,1-f)):nr(b.d[f].d[1-f])&&(b=tr(b,1-f))}}}return b}
function Lc(a,b){var c,d,e,f;a=''+a;c=new vk(a.length+16*b.length);f=0;d=0;while(d<b.length){e=a.indexOf('%s',f);if(e==-1){break}sk(c,a.substr(f,e-f));rk(c,b[d++]);f=e+2}sk(c,Yj(a,f,a.length-f));if(d<b.length){c.d+=' [';rk(c,b[d++]);while(d<b.length){c.d+=', ';rk(c,b[d++])}c.d+=']'}return c.d}
function jl(){jl=Ng;var a;el=new Al(1,1);gl=new Al(1,10);il=new Al(0,0);dl=new Al(-1,1);fl=Xd(Td(lf,1),Yu,5,0,[il,el,new Al(1,2),new Al(1,3),new Al(1,4),new Al(1,5),new Al(1,6),new Al(1,7),new Al(1,8),new Al(1,9),gl]);hl=Ud(lf,Yu,5,32,0,1);for(a=0;a<hl.length;a++){hl[a]=Nl(zh({l:1,m:0,h:0},a))}}
function gu(){gu=Ng;fu=new Bp;kn(fu,'O',qj(0));kn(fu,'N',qj(1));kn(fu,'H',qj(-1));kn(fu,'C',qj(2));kn(fu,'F',qj(-1));kn(fu,'Cl',qj(-1));kn(fu,'Br',qj(-1));kn(fu,'I',qj(-1));kn(fu,'S',qj(0));kn(fu,'P',qj(1));kn(fu,'Li',qj(-1));kn(fu,'Na',qj(-1));kn(fu,'K',qj(-1));kn(fu,'Ca',qj(0));kn(fu,'Mg',qj(0))}
function Cu(a,b,c){var d,e,f,g,h,i,j,k;h=new Tu;k=a.f.kb('referenceVersion');k!=null&&!Lj(k,'')&&(c=(Jt(),Jt(),Ht));if(c){i=new Nu;Qu(h,'elements',i.d);for(e=Xn(new Yn(c));wn(e.d);){d=ao(e);Mu(i,Os(d).d)}}if(b){j=new Nu;Qu(h,'groups',j.d);for(g=Xn(new Yn(b));wn(g.d);){f=ao(g);Mu(j,Ct(f).d)}}return h}
function gt(b){var c,d,e;e=Sj(b,'/',0);if(e.length!=2)throw new Kt('Syntax error: bad fraction syntax: '+b);try{c=Ri(e[1]);if(c==0)throw new Kt('Syntax error: divide by zero: '+b);d=Ri(e[0]);return d/c}catch(a){a=Jg(a);if(be(a,20)){throw new Kt('Syntax error: bad fraction syntax: '+b)}else throw Ig(a)}}
function om(){om=Ng;var a,b;lm=Ud(lf,Yu,5,32,0,1);mm=Ud(lf,Yu,5,32,0,1);nm=Xd(Td(me,1),Yu,0,7,[1,10,100,1000,10000,iv,jv,10000000,100000000,dv]);a={l:1,m:0,h:0};for(b=0;b<=18;b++){lm[b]=Nl(a);mm[b]=Nl(zh(a,b));a=vh(a,{l:5,m:0,h:0})}for(;b<mm.length;b++){lm[b]=tl(lm[b-1],lm[1]);mm[b]=tl(mm[b-1],(jl(),gl))}}
function rm(a,b,c,d,e){var f,g,h,i;if(ge(a)===ge(b)&&d==e){ym(a,d,c);return}for(h=0;h<d;h++){g={l:0,m:0,h:0};f=a[h];for(i=0;i<e;i++){g=kh(kh(vh(lh(ph(f),{l:Zu,m:1023,h:0}),lh(ph(b[i]),{l:Zu,m:1023,h:0})),lh(ph(c[h+i]),{l:Zu,m:1023,h:0})),lh(ph(Eh(g)),{l:Zu,m:1023,h:0}));c[h+i]=Eh(g);g=Bh(g,32)}c[h+e]=Eh(g)}}
function bt(a){var b,c,d,e;if(a.f)throw new Kt('Cannot calculate mass: this is a range formula');if(a.j)throw new Kt('The mass is not defined');d=0;for(c=new Kn(a.g);c.d<c.f.K();){b=(Fc(c.d<c.f.K()),c.f.V(c.e=c.d++));d+=pt(b)*b.k}return e=isNaN(d*jv)?d*jv:Yi(d*jv)?d*jv:d*jv==0?d*jv:Dh(oh(Math.round(d*jv))),e/jv}
function ct(a){var b,c,d,e;if(a.f)throw new Kt('Cannot calculate mass: this is a range formula');if(a.j)throw new Kt('The mass is not clearly defined');b=0;for(d=new Kn(a.g);d.d<d.f.K();){c=(Fc(d.d<d.f.K()),d.f.V(d.e=d.d++));b+=qt(c)*c.k}return e=isNaN(b*kv)?b*kv:Yi(b*kv)?b*kv:b*kv==0?b*kv:Dh(oh(Math.round(b*kv))),e/kv}
function tm(a,b){var c,d,e,f,g,h,i,j,k;j=a.j;if(j==0){return jl(),il}d=a.g;c=a.d;if(d==1){e=vh(lh(ph(c[0]),{l:Zu,m:1023,h:0}),lh(ph(b),{l:Zu,m:1023,h:0}));i=Eh(e);g=Eh(Bh(e,32));return g==0?new Al(j,i):new Bl(j,2,Xd(Td(me,1),Yu,0,7,[i,g]))}h=d+1;f=Ud(me,Yu,0,h,7,1);f[d]=sm(f,c,d,b);k=new Bl(j,h,f);ml(k);return k}
function vm(a,b){var c,d,e,f,g,h,i,j,k,l,m;d=a.g;f=b.g;h=d+f;i=a.j!=b.j?-1:1;if(h==2){k=vh(lh(ph(a.d[0]),{l:Zu,m:1023,h:0}),lh(ph(b.d[0]),{l:Zu,m:1023,h:0}));m=Eh(k);l=Eh(Bh(k,32));return l==0?new Al(i,m):new Bl(i,2,Xd(Td(me,1),Yu,0,7,[m,l]))}c=a.d;e=b.d;g=Ud(me,Yu,0,h,7,1);qm(c,d,e,f,g);j=new Bl(i,h,g);ml(j);return j}
function Kl(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p;m=b.length;i=m;if(b.charCodeAt(0)==45){k=-1;l=1;--m}else{k=1;l=0}f=(Wl(),Vl)[10];e=~~(m/f);p=m%f;p!=0&&++e;h=Ud(me,Yu,0,e,7,1);c=Ul[8];g=0;n=l+(p==0?f:p);for(o=l;o<i;o=n,n=n+f){d=Ri(b.substr(o,n-o));j=(om(),sm(h,h,g,c));j+=hm(h,g,d);h[g++]=j}a.j=k;a.g=g;a.d=h;ml(a)}
function Fh(a){var b,c,d,e,f;if(a.l==0&&a.m==0&&a.h==0){return '0'}if(a.h==_u&&a.m==0&&a.l==0){return '-9223372036854775808'}if(a.h>>19!=0){return '-'+Fh(wh(a))}c=a;d='';while(!(c.l==0&&c.m==0&&c.h==0)){e=ph(dv);c=Xg(c,e,true);b=''+Eh(Tg);if(!(c.l==0&&c.m==0&&c.h==0)){f=9-b.length;for(;f>0;f--){b='0'+b}}d=b+d}return d}
function Os(a){var b,c,d,e,f,g;d=new Tu;Su(d,'symbol',a.n);Qu(d,'monoisotopicMass',new kd(a.g));Qu(d,'mass',new kd(a.f));Su(d,'name',a.j);Qu(d,'atomicNumber',new kd(a.d));f=new Nu;Qu(d,'isotopes',f.d);for(c=Xn(new Yn(a.e));wn(c.d);){b=ao(c);e=(g=new Tu,Qu(g,'mass',new kd(b.e)),Qu(g,'percentage',new kd(b.g)),g);Mu(f,e.d)}return d}
function Hu(a,b){var c,d,e,f;f='';for(d=new Kn(a.d);d.d<d.f.K();){c=(Fc(d.d<d.f.K()),d.f.V(d.e=d.d++));e=is(c.d);(e==null?!!Fp(b.d,null):!(b.f.kb(e)===undefined))&&(Lj((e==null?Zm(Fp(b.d,null)):b.f.kb(e)).f.substr(0,1),'{')?(e=(e==null?Zm(Fp(b.d,null)):b.f.kb(e)).f):(e=(e==null?Zm(Fp(b.d,null)):b.f.kb(e)).e));c.e>1?(f+=e+c.e):c.e>0&&(f+=e)}return f}
function Nt(a){var b,c,d,e,f;c=true;for(e=new Kn(a.g.g);e.d<e.f.K();){d=(Fc(e.d<e.f.K()),e.f.V(e.e=e.d++));if(c){a.j=new bu(a,d,a.f);zs(a.j.f,d.k);b=a.j;c=false}else{b=new bu(a,d,a.f);zs(b.f,d.k);ts(a.j.f,b.f)}if(d.e!=''){f=new Ti(xs(b.f));bn(a.n,f)?jn(a.n,f,fn(a.n,f)+','+d.e):jn(a.n,f,d.e)}}if(a.j.f.g==0)throw new Kt('Isotopic distribution: empty table')}
function Ri(a){var b,c,d,e,f;if(a==null){throw new Fj('null')}d=a.length;e=d>0&&(a.charCodeAt(0)==45||a.charCodeAt(0)==43)?1:0;for(b=e;b<d;b++){if(oi(a.charCodeAt(b))==-1){throw new Fj('For input string: "'+a+'"')}}f=parseInt(a,10);c=f<fv;if(isNaN(f)){throw new Fj('For input string: "'+a+'"')}else if(c||f>Vu){throw new Fj('For input string: "'+a+'"')}return f}
function nl(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o;f=b.j;if(f==0){throw new _h('BigInteger divide by zero')}e=b.g;d=b.d;if(e==1){return _l(a,d[0],f)}m=a.d;n=a.g;c=n!=e?n>e?1:-1:gm(m,d,n);if(c<0){return Xd(Td(lf,1),Yu,5,0,[il,a])}o=a.j;h=n-e+1;i=o==f?1:-1;g=Ud(me,Yu,0,h,7,1);j=$l(g,h,m,n,d,e);k=new Bl(i,h,g);l=new Bl(o,e,j);ml(k);ml(l);return Xd(Td(lf,1),Yu,5,0,[k,l])}
function Kk(a,b){var c,d,e,f,g,h;e=Ok(a);h=Ok(b);if(e==h){if(a.j==b.j&&a.d<54&&b.d<54){return a.k<b.k?-1:a.k>b.k?1:0}d=a.j-b.j;c=(a.g>0?a.g:wj((a.d-1)*lv)+1)-(b.g>0?b.g:wj((b.d-1)*lv)+1);if(c>d+1){return e}else if(c<d-1){return -e}else{f=(!a.f&&(a.f=Ml(a.k)),a.f);g=(!b.f&&(b.f=Ml(b.k)),b.f);d<0?(f=tl(f,xm(-d))):d>0&&(g=tl(g,xm(d)));return ll(f,g)}}else return e<h?-1:1}
function _l(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,o;m=a.d;n=a.g;o=a.j;if(n==1){d=lh(ph(m[0]),{l:Zu,m:1023,h:0});e=lh(ph(b),{l:Zu,m:1023,h:0});f=mh(d,e);i=uh(d,e);o!=c&&(f=wh(f));o<0&&(i=wh(i));return Xd(Td(lf,1),Yu,5,0,[Nl(f),Nl(i)])}h=o==c?1:-1;g=Ud(me,Yu,0,n,7,1);j=Xd(Td(me,1),Yu,0,7,[am(g,m,n,b)]);k=new Bl(h,n,g);l=new Bl(o,1,j);ml(k);ml(l);return Xd(Td(lf,1),Yu,5,0,[k,l])}
function cm(a,b,c,d,e){var f,g,h;f={l:0,m:0,h:0};g={l:0,m:0,h:0};for(h=0;h<d;h++){f=(om(),kh(vh(lh(ph(c[h]),{l:Zu,m:1023,h:0}),lh(ph(e),{l:Zu,m:1023,h:0})),lh(ph(Eh(f)),{l:Zu,m:1023,h:0})));g=kh(Ch(lh(ph(a[b+h]),{l:Zu,m:1023,h:0}),lh(f,{l:Zu,m:1023,h:0})),g);a[b+h]=Eh(g);g=Ah(g,32);f=Bh(f,32)}g=kh(Ch(lh(ph(a[b+d]),{l:Zu,m:1023,h:0}),f),g);a[b+d]=Eh(g);return Eh(Ah(g,32))}
function bm(a,b){var c,d,e,f,g;d=lh(ph(b),{l:Zu,m:1023,h:0});if(rh(a,{l:0,m:0,h:0})){f=mh(a,d);g=uh(a,d)}else{c=Bh(a,1);e=ph(b>>>1);f=mh(c,e);g=uh(c,e);g=kh(zh(g,1),lh(a,{l:1,m:0,h:0}));if((b&1)!=0){if(th(f,g)){g=Ch(g,f)}else{if(th(Ch(f,g),d)){g=kh(g,Ch(d,f));f=Ch(f,{l:1,m:0,h:0})}else{g=kh(g,Ch(zh(d,1),f));f=Ch(f,{l:2,m:0,h:0})}}}}return yh(zh(g,32),lh(f,{l:Zu,m:1023,h:0}))}
function nu(a,b,c){mu();var d,e,f,g,h,i,j,k,l,m,n,o;i=~~(~~((b.e-1)/b.d)/2);h=a[0][0];g=a[a.length-1][0];k=Eh(oh(Bj((g-h)/c*b.d)))+2*b.d*i+1;o=Ud(le,hv,0,k,7,1);for(m=0,n=a.length;m<n;++m){l=a[m];d=Eh(oh(Bj((l[0]-h)/c*b.d+b.d*i)));for(f=0;f<b.f.length;f++){o[d+f-b.d*i]+=b.f[f]*l[1]}}j=Vd(le,[Yu,hv],[28,0],7,[k,2],2);for(e=0;e<k;e++){j[e][0]=(e/b.d-i)*c+h;j[e][1]=o[e]}return j}
function al(a,b,c){var d;d=0;switch(c.e){case 7:if(b!=0){throw new _h('Rounding necessary')}break;case 0:d=b==0?0:b<0?-1:1;break;case 2:d=(b==0?0:b<0?-1:1)>0?b==0?0:b<0?-1:1:0;break;case 3:d=(b==0?0:b<0?-1:1)<0?b==0?0:b<0?-1:1:0;break;case 4:(b<0?-b:b)>=5&&(d=b==0?0:b<0?-1:1);break;case 5:(b<0?-b:b)>5&&(d=b==0?0:b<0?-1:1);break;case 6:(b<0?-b:b)+a>5&&(d=b==0?0:b<0?-1:1);}return d}
function Bt(a,b,c,d){var e,f,g,h,i,j,k,l,m;if(b.indexOf(',')==-1)throw new Kt('Syntax error: combinatorial');if(c!=d)throw new Kt('Combinatorial range formulae are not allowed');j=Sj(b,',',0);i=0;h=j.length;m=new pk('{');for(g=0;g<h-1;g++){l=Vj(j[g]);f=new wt(l,a.f,a.g);nk(m,ut(f)+',');i+=pt(f)}k=Vj(j[h-1]);e=new wt(k,a.f,a.g);nk(m,ut(e)+'}');i+=pt(e);i/=h;mt(a,new ls(m.d,i,c,d))}
function xu(a){var b=a;if(a.search(/[A-Z]{3} [A-Z]{3} [A-Z]{3}/)>-1){var c=a.replace(/[\r\n]+/g,' ');c=c.replace(/(SEQRES|[0-9]+| [A-Z] | [0-9A-Z]{4-50})/g,'');var d=c.split(' ');b='H';for(var e=0;e<d.length;e++){b+=d[e].substr(0,1)+d[e].substr(1).toLowerCase()}b+='OH'}else a.search(/[A-Z]{3}/)>-1&&a.search(/[a-zA-Z][a-z0-9]/)==-1&&(b='H'+wu(b.replace(/[^A-Z]/g,''))+'OH');return b}
function $g(a,b,c,d,e,f){var g,h,i,j,k,l,m;j=bh(b)-bh(a);g=zh(b,j);i=Wg(0,0,0);while(j>=0){h=ih(a,g);if(h){j<22?(i.l|=1<<j,undefined):j<44?(i.m|=1<<j-22,undefined):(i.h|=1<<j-44,undefined);if(a.l==0&&a.m==0&&a.h==0){break}}k=g.m;l=g.h;m=g.l;eh(g,l>>>1);g.m=k>>>1|(l&1)<<21;g.l=m>>>1|(k&1)<<21;--j}c&&ah(i);if(f){if(d){Tg=wh(a);e&&(Tg=Ch(Tg,(Lh(),Jh)))}else{Tg=Wg(a.l,a.m,a.h)}}return i}
function Xh(){var a=navigator.userAgent.toLowerCase();var b=$doc.documentMode;if(function(){return a.indexOf('webkit')!=-1}())return 'safari';if(function(){return a.indexOf('msie')!=-1&&b>=10&&b<11}())return 'ie10';if(function(){return a.indexOf('msie')!=-1&&b>=9&&b<11}())return 'ie9';if(function(){return a.indexOf('msie')!=-1&&b>=8&&b<11}())return 'ie8';if(function(){return a.indexOf('gecko')!=-1||b>=11}())return 'gecko1_8';return 'unknown'}
function xm(a){om();var b,c,d,e;b=ie(a);if(a<mm.length){return mm[b]}else if(a<=50){return ul((jl(),gl),b)}else if(a<=1000){return vl(ul(lm[1],b),b)}if(a>jv){throw new _h('power of ten too big')}if(a<=Vu){return vl(ul(lm[1],b),b)}d=ul(lm[1],Vu);e=d;c=oh(a-Vu);b=ie(a%Vu);while(qh(c,{l:Zu,m:511,h:0})){e=tl(e,d);c=Ch(c,{l:Zu,m:511,h:0})}e=tl(e,ul(lm[1],b));e=vl(e,Vu);c=oh(a-Vu);while(qh(c,{l:Zu,m:511,h:0})){e=vl(e,Vu);c=Ch(c,{l:Zu,m:511,h:0})}e=vl(e,b);return e}
function Sj(l,a,b){var c=new RegExp(a,'g');var d=[];var e=0;var f=l;var g=null;while(true){var h=c.exec(f);if(h==null||f==''||e==b-1&&b>0){d[e]=f;break}else{d[e]=f.substring(0,h.index);f=f.substring(h.index+h[0].length,f.length);c.lastIndex=0;if(g==f){d[e]=f.substring(0,1);f=f.substring(1)}g=f;e++}}if(b==0&&l.length>0){var i=d.length;while(i>0&&d[i-1]==''){--i}i<d.length&&d.splice(i,d.length-i)}var j=Xj(d.length);for(var k=0;k<d.length;++k){j[k]=d[k]}return j}
function im(a,b){var c,d,e,f,g,h,i,j,k,l;g=a.j;i=b.j;if(i==0){return a}if(g==0){return b.j==0?b:new Bl(-b.j,b.g,b.d)}f=a.g;h=b.g;if(f+h==2){c=lh(ph(a.d[0]),{l:Zu,m:1023,h:0});d=lh(ph(b.d[0]),{l:Zu,m:1023,h:0});g<0&&(c=wh(c));i<0&&(d=wh(d));return Nl(Ch(c,d))}e=f!=h?f>h?1:-1:gm(a.d,b.d,f);if(e==-1){l=-i;k=g==i?jm(b.d,h,a.d,f):em(b.d,h,a.d,f)}else{l=g;if(g==i){if(e==0){return jl(),il}k=jm(a.d,f,b.d,h)}else{k=em(a.d,f,b.d,h)}}j=new Bl(l,k.length,k);ml(j);return j}
function am(a,b,c,d){var e,f,g,h,i,j,k;j={l:0,m:0,h:0};f=lh(ph(d),{l:Zu,m:1023,h:0});for(h=c-1;h>=0;h--){k=yh(zh(j,32),lh(ph(b[h]),{l:Zu,m:1023,h:0}));if(rh(k,{l:0,m:0,h:0})){i=mh(k,f);j=uh(k,f)}else{e=Bh(k,1);g=ph(d>>>1);i=mh(e,g);j=uh(e,g);j=kh(zh(j,1),lh(k,{l:1,m:0,h:0}));if((d&1)!=0){if(th(i,j)){j=Ch(j,i)}else{if(th(Ch(i,j),f)){j=kh(j,Ch(f,i));i=Ch(i,{l:1,m:0,h:0})}else{j=kh(j,Ch(zh(f,1),i));i=Ch(i,{l:2,m:0,h:0})}}}}a[h]=Eh(lh(i,{l:Zu,m:1023,h:0}))}return Eh(j)}
function yk(a,b,c,d,e){var f,g,h,i,j,k,l,m,n;Ic(a,'src');Ic(c,'dest');m=jb(a);i=jb(c);Cc((m.j&4)!=0,'srcType is not an array');Cc((i.j&4)!=0,'destType is not an array');l=m.f;g=i.f;Cc((l.j&1)!=0?l==g:(g.j&1)==0,"Array types don't match");n=a.length;j=c.length;if(b<0||d<0||e<0||b+e>n||d+e>j){throw new ai}if(((l.j&1)==0||(l.j&4)!=0)&&m!=i){k=a;f=c;if(ge(a)===ge(c)&&b<d){b+=e;for(h=d+e;h-->d;){f[h]=k[--b]}}else{for(h=d+e;d<h;){f[d++]=k[b++]}}}else e>0&&Zd(a,b,c,d,e,true)}
function Wl(){Wl=Ng;Ul=Xd(Td(me,1),Yu,0,7,[fv,1162261467,nv,1220703125,362797056,1977326743,nv,387420489,dv,214358881,429981696,815730721,1475789056,170859375,268435456,410338673,612220032,893871739,1280000000,1801088541,113379904,148035889,191102976,244140625,308915776,387420489,481890304,594823321,729000000,887503681,nv,1291467969,1544804416,1838265625,60466176]);Vl=Xd(Td(me,1),Yu,0,7,[-1,-1,31,19,15,13,11,11,10,9,9,8,8,8,8,7,7,7,7,7,7,7,6,6,6,6,6,6,6,6,6,6,6,6,6,6,5])}
function Pk(a){var b,c,d,e,f;if(a.n!=null){return a.n}if(a.d<32){a.n=Yl(oh(a.k),ie(a.j));return a.n}e=Zl((!a.f&&(a.f=Ml(a.k)),a.f),0);if(a.j==0){return e}b=(!a.f&&(a.f=Ml(a.k)),a.f).j<0?2:1;c=e.length;d=-a.j+c-b;f=new uk;f.d+=e;if(a.j>0&&d>=-6){if(d>=0){tk(f,c-ie(a.j),'.')}else{f.d=Uj(f.d,0,b-1)+'0.'+Tj(f.d,b-1);tk(f,b+1,fk(Ck,0,-ie(d)-1))}}else{if(c-b>=1){f.d=Uj(f.d,0,b)+'.'+Tj(f.d,b);++c}f.d=Uj(f.d,0,c)+'E'+Tj(f.d,c);d>0&&tk(f,++c,'+');tk(f,++c,''+Fh(oh(d)))}a.n=f.d;return a.n}
function Xk(a,b,c){var d,e,f,g,h,i,j;f=nl(a,b);g=f[0];i=f[1];if(i.j==0){return new Tk(g)}j=a.j*b.j;if(Ol(b)<54){h=sl(i);e=sl(b);d=sh(zh(sh(h,{l:0,m:0,h:0})?wh(h):h,1),sh(e,{l:0,m:0,h:0})?wh(e):e)?-1:qh(zh(sh(h,{l:0,m:0,h:0})?wh(h):h,1),sh(e,{l:0,m:0,h:0})?wh(e):e)?1:0;d=al(yl(g,0)?1:0,j*(5+d),c)}else{d=ll(wl(i.j<0?new Bl(1,i.g,i.d):i),b.j<0?new Bl(1,b.g,b.d):b);d=al(yl(g,0)?1:0,j*(5+d),c)}if(d!=0){if(Ol(g)<54){return cl(kh(sl(g),ph(d)))}g=dm(g,Nl(ph(d)));return new Tk(g)}return new Tk(g)}
function Pt(b){var c,d,e;if(b.j.f.g==0)throw new vb('No isotopic distribution data');or(b.j.f,new Ti(Co(gr(b.j.f)).d-2),new Ti(0));or(b.j.f,new Ti(Co(hr(b.j.f)).d+2),new Ti(0));d=new Bp;kn(d,'Resolution',b.e+'');kn(d,'Threshold',b.d+'');try{if(b.g.g.e.length==1){e=To(b.g.g,0);kn(d,'Monoisotopic mass',qt(e)+'');kn(d,'Molecular weight',pt(e)+'');!!iu(e,null)&&kn(d,'Unsaturation',iu(e,null)+'')}}catch(a){a=Jg(a);if(be(a,7)){c=a;pb(c)}else throw Ig(a)}return Ds(b.j.f,b.g+' - resolution: '+b.e,b.n,d)}
function bk(a,b,c){if(c<128){a[b]=he(c&127);return 1}else if(c<2048){a[b++]=he(c>>6&31|192);a[b]=he(c&63|128);return 2}else if(c<ev){a[b++]=he(c>>12&15|224);a[b++]=he(c>>6&63|128);a[b]=he(c&63|128);return 3}else if(c<2097152){a[b++]=he(c>>18&7|240);a[b++]=he(c>>12&63|128);a[b++]=he(c>>6&63|128);a[b]=he(c&63|128);return 4}else if(c<67108864){a[b++]=he(c>>24&3|248);a[b++]=he(c>>18&63|128);a[b++]=he(c>>12&63|128);a[b++]=he(c>>6&63|128);a[b]=he(c&63|128);return 5}throw new ej('Character out of range: '+c)}
function dm(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o;g=a.j;i=b.j;if(g==0){return b}if(i==0){return a}f=a.g;h=b.g;if(f+h==2){c=lh(ph(a.d[0]),{l:Zu,m:1023,h:0});d=lh(ph(b.d[0]),{l:Zu,m:1023,h:0});if(g==i){k=kh(c,d);o=Eh(k);n=Eh(Bh(k,32));return n==0?new Al(g,o):new Bl(g,2,Xd(Td(me,1),Yu,0,7,[o,n]))}return Nl(g<0?Ch(d,c):Ch(c,d))}else if(g==i){m=g;l=f>=h?em(a.d,f,b.d,h):em(b.d,h,a.d,f)}else{e=f!=h?f>h?1:-1:gm(a.d,b.d,f);if(e==0){return jl(),il}if(e==1){m=g;l=jm(a.d,f,b.d,h)}else{m=i;l=jm(b.d,h,a.d,f)}}j=new Bl(m,l.length,l);ml(j);return j}
function fm(a,b,c,d,e){var f,g;f=kh(lh(ph(b[0]),{l:Zu,m:1023,h:0}),lh(ph(d[0]),{l:Zu,m:1023,h:0}));a[0]=Eh(f);f=Ah(f,32);if(c>=e){for(g=1;g<e;g++){f=kh(f,kh(lh(ph(b[g]),{l:Zu,m:1023,h:0}),lh(ph(d[g]),{l:Zu,m:1023,h:0})));a[g]=Eh(f);f=Ah(f,32)}for(;g<c;g++){f=kh(f,lh(ph(b[g]),{l:Zu,m:1023,h:0}));a[g]=Eh(f);f=Ah(f,32)}}else{for(g=1;g<c;g++){f=kh(f,kh(lh(ph(b[g]),{l:Zu,m:1023,h:0}),lh(ph(d[g]),{l:Zu,m:1023,h:0})));a[g]=Eh(f);f=Ah(f,32)}for(;g<e;g++){f=kh(f,lh(ph(d[g]),{l:Zu,m:1023,h:0}));a[g]=Eh(f);f=Ah(f,32)}}xh(f,{l:0,m:0,h:0})&&(a[g]=Eh(f))}
function ym(a,b,c){var d,e,f,g,h;for(f=0;f<b;f++){d={l:0,m:0,h:0};for(h=f+1;h<b;h++){d=kh(kh(vh(lh(ph(a[f]),{l:Zu,m:1023,h:0}),lh(ph(a[h]),{l:Zu,m:1023,h:0})),lh(ph(c[f+h]),{l:Zu,m:1023,h:0})),lh(ph(Eh(d)),{l:Zu,m:1023,h:0}));c[f+h]=Eh(d);d=Bh(d,32)}c[f+b]=Eh(d)}Rl(c,c,b<<1);d={l:0,m:0,h:0};for(e=0,g=0;e<b;++e,g++){d=kh(kh(vh(lh(ph(a[e]),{l:Zu,m:1023,h:0}),lh(ph(a[e]),{l:Zu,m:1023,h:0})),lh(ph(c[g]),{l:Zu,m:1023,h:0})),lh(ph(Eh(d)),{l:Zu,m:1023,h:0}));c[g]=Eh(d);d=Bh(d,32);++g;d=kh(d,lh(ph(c[g]),{l:Zu,m:1023,h:0}));c[g]=Eh(d);d=Bh(d,32)}return c}
function vh(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,A,B,C,D,F,G;c=a.l&8191;d=a.l>>13|(a.m&15)<<9;e=a.m>>4&8191;f=a.m>>17|(a.h&255)<<5;g=(a.h&1048320)>>8;h=b.l&8191;i=b.l>>13|(b.m&15)<<9;j=b.m>>4&8191;k=b.m>>17|(b.h&255)<<5;l=(b.h&1048320)>>8;B=c*h;C=d*h;D=e*h;F=f*h;G=g*h;if(i!=0){C+=c*i;D+=d*i;F+=e*i;G+=f*i}if(j!=0){D+=c*j;F+=d*j;G+=e*j}if(k!=0){F+=c*k;G+=d*k}l!=0&&(G+=c*l);n=B&Zu;o=(C&511)<<13;m=n+o;q=B>>22;r=C>>9;s=(D&262143)<<4;t=(F&31)<<17;p=q+r+s+t;v=D>>18;w=F>>5;A=(G&4095)<<8;u=v+w+A;p+=m>>22;m&=Zu;u+=p>>22;p&=Zu;u&=$u;return Wg(m,p,u)}
function lt(b,c,d,e,f,g){var h,i,j,k,l,m;if(Lj(c,'Zcharge')){b.d+=d;return}if(c.charCodeAt(0)==91){h=1;while(pi(c.charCodeAt(h)))++h;if(f==0){try{f=Ri(c.substr(1,h-1))}catch(a){a=Jg(a);if(be(a,7)){throw new Kt('Bad isotope syntax')}else throw Ig(a)}}c=Uj(c,h,c.length-1)}i=gn(b.f,c);if(!i){l=gn(b.g,c);if(!l)throw new Kt('Unrecognized symbol: '+c);if(f!=0)throw new Kt('Syntax error: cannot specify isotopes for groups');if(g){k=Ho(new Io(l.d.n));while(Hn(k.d.d)){j=Mo(k);m=new ms(j);m.g*=d;m.f*=e;mt(b,m)}}else{mt(b,new os(l,d,e))}}else{mt(b,new ns(i,f,d,e))}}
function Wh(a){Vh.call(this,''+('Possible problem with your *.gwt.xml module file.\nThe compile time user.agent value (safari) does not match the runtime user.agent value ('+a+').\n'+'Expect more errors.'),be('Possible problem with your *.gwt.xml module file.\nThe compile time user.agent value (safari) does not match the runtime user.agent value ('+a+').\n'+'Expect more errors.',9)?'Possible problem with your *.gwt.xml module file.\nThe compile time user.agent value (safari) does not match the runtime user.agent value ('+a+').\n'+'Expect more errors.':null)}
function Vt(a,b){var c,d,e,f,g,h,i,j,k,l,m;m=new yt(new du(a));Km(m,b);j=1;for(e=Ho(new Io(m.n));Hn(e.d.d);){c=Mo(e);h=gn(a.d,c.o);h.e.e>j&&(j=h.e.e)}k=2*j*xj(st(m)+1)/xj(2);l=a.g.e/(k*4);$t(a,l);or(a.f,new Ti(0),new Ti(1));for(d=Ho(new Io(m.n));Hn(d.d.d);){c=Mo(d);h=gn(a.d,c.o);if(c.d!=0){f=new Qs(c.e,c.e,h.n,h.j,h.d);h=f}if(h.e.e==0){i=new Et(ie(h.f+0.5),h.f,1,h.n);jn(h.e,new hj(i.f),i)}if(hs(c)<0){throw new Kt('Number of element under 0')}else if(hs(c)==0);else if(hs(c)==1){a.f=Wt(a,new au(a.g,h,a.d))}else{g=new au(a.g,h,a.d);$t(g,a.e);a.f=Wt(a,Ut(g,hs(c)))}}}
function Xg(a,b,c){var d,e,f,g,h,i;if(b.l==0&&b.m==0&&b.h==0){throw new _h('divide by zero')}if(a.l==0&&a.m==0&&a.h==0){c&&(Tg=Wg(0,0,0));return Wg(0,0,0)}if(b.h==_u&&b.m==0&&b.l==0){return Yg(a,c)}i=false;if(b.h>>19!=0){b=wh(b);i=true}g=dh(b);f=false;e=false;d=false;if(a.h==_u&&a.m==0&&a.l==0){e=true;f=true;if(g==-1){a=Vg((Lh(),Hh));d=true;i=!i}else{h=Ah(a,g);i&&ah(h);c&&(Tg=Wg(0,0,0));return h}}else if(a.h>>19!=0){f=true;a=wh(a);d=true;i=!i}if(g!=-1){return Zg(a,g,i,f,c)}if(!rh(a,b)){c&&(f?(Tg=wh(a)):(Tg=Wg(a.l,a.m,a.h)));return Wg(0,0,0)}return $g(d?a:Wg(a.l,a.m,a.h),b,i,f,e,c)}
function wc(a,b){var c,d,e,f,g,h,i,j,k;if(!b.length){return a.u('Unknown','anonymous',-1,-1)}k=Vj(b);Lj(k.substr(0,3),'at ')&&(k=Yj(k,3,k.length-3));k=k.replace(/\[.*?\]/g,'');g=k.indexOf('(');if(g==-1){g=k.indexOf('@');if(g==-1){j=k;k=''}else{j=Vj(Yj(k,g+1,k.length-(g+1)));k=Vj(k.substr(0,g))}}else{c=k.indexOf(')',g);j=k.substr(g+1,c-(g+1));k=Vj(k.substr(0,g))}g=Nj(k,ck(46));g!=-1&&(k=Yj(k,g+1,k.length-(g+1)));(!k.length||Lj(k,'Anonymous function'))&&(k='anonymous');h=Oj(j,ck(58));e=Pj(j,ck(58),h-1);i=-1;d=-1;f='Unknown';if(h!=-1&&e!=-1){f=j.substr(0,e);i=rc(j.substr(e+1,h-(e+1)));d=rc(Yj(j,h+1,j.length-(h+1)))}return a.u(f,k,i,d)}
function rr(a,b,c){var d,e,f,g,h,i,j,k,l,m,n;if(!a.f){return false}g=null;m=null;i=new Ir(null,null);e=1;i.d[1]=a.f;l=i;while(l.d[e]){j=e;h=m;m=l;l=l.d[e];d=a.e.ab(b,l.f);e=d<0?0:1;d==0&&(!c.f||Rq(l.g,c.g))&&(g=l);if(!(!!l&&l.e)&&!nr(l.d[e])){if(nr(l.d[1-e])){m=m.d[j]=ur(l,e)}else if(!nr(l.d[1-e])){n=m.d[1-j];if(n){if(!nr(n.d[1-j])&&!nr(n.d[j])){m.e=false;n.e=true;l.e=true}else{f=h.d[1]==m?1:0;nr(n.d[j])?(h.d[f]=tr(m,j)):nr(n.d[1-j])&&(h.d[f]=ur(m,j));l.e=h.d[f].e=true;h.d[f].d[0].e=false;h.d[f].d[1].e=false}}}}}if(g){c.e=true;c.g=g.g;if(l!=g){k=new Ir(l.f,l.g);sr(a,i,g,k);m==g&&(m=k)}m.d[m.d[1]==l?1:0]=l.d[!l.d[0]?1:0];--a.g}a.f=i.d[1];!!a.f&&(a.f.e=false);return c.e}
function Xt(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p,q;f=b.f.d;a.f.g>f&&Bs(a.f);b.f.g>f&&Bs(b.f);k=new Hs;j=(new Hr(b.f)).d.$();e=0;while(Hn(j.d)){i=j.e=In(j.d);h=i.X();g=i.Y();q=(new Hr(a.f)).d.$();while(Hn(q.d)){p=q.e=In(q.d);o=p.X();n=p.Y();m=o.d+h.d;l=n.d*g.d;d=Ym(jr(k,new Ti(m)));c=Ym(ir(k,new Ti(m)));if(!!d&&Si(d,new Ti(m))){l+=vo(k,c).d}else{!!d&&tj(d.d-m)>a.e&&(d=null);!!c&&tj(c.d-m)>a.e&&(c=null);!!c&&!!d&&(tj(c.d-m)<tj(d.d-m)?(d=null):(c=null));if(c){if(vo(k,c).d>l){l+=vo(k,c).d;m=c.d}else{l+=vo(k,c).d;pr(k,c)}}else if(d){if(vo(k,d).d>l){l+=vo(k,d).d;m=d.d}else{l+=vo(k,d).d;pr(k,d)}}}l>a.g.d/iv&&or(k,new Ti(m),new Ti(l));l>e&&(e=l)}k.g>f&&Bs(k)}zs(k,1/e);return k}
function xt(a,b,c,d,e){var f,g,h,i,j,k,l;as.call(this);this.f=b;this.g=c;this.k=d;h=a.indexOf('$');if(h>-1){this.e=Yj(a,h+1,a.length-(h+1));a=a.substr(0,h)}g=new RegExp('(\\([0-9]+[+-]\\))');for(j=g.exec(a);j;j=g.exec(a)){f=j[0];l=Ri(Rj(Rj(Rj(f,'[^0-9+-]',''),'^([0-9])([+-])$','$2$1'),'^[+]',''));a=a.replace(g,'(Zcharge'+l+')')}g=new RegExp('(\\([+-][0-9]+\\))');for(k=g.exec(a);k;k=g.exec(a)){f=k[0];l=Ri(Rj(Rj(Rj(f,'[^0-9+-]',''),'^([0-9])([+-])$','$1$2'),'^[+]',''));a=a.replace(g,'(Zcharge'+l+')')}g=new RegExp('([+-])(?![0-9])');for(i=g.exec(a);i;i=g.exec(a)){f=i[0];Lj(f,'+')?(a=a.replace(g,'Zcharge')):(a=a.replace(g,'(Zcharge-1)'))}Qj(a,'[a-zA-Z][0-9]+-[0-9]')&&(this.j=true);a.indexOf('}')!=-1;At(this,a,e)}
function Yt(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p,q;f=b.f.d;a.f.g>f&&Bs(a.f);b.f.g>f&&Bs(b.f);k=new Hs;j=(new Hr(b.f)).d.$();e=0;while(Hn(j.d)){i=j.e=In(j.d);h=i.X();g=i.Y();q=(new Hr(a.f)).d.$();while(Hn(q.d)){p=q.e=In(q.d);o=p.X();n=p.Y();m=o.d+h.d;l=n.d*g.d;d=Ym(jr(k,new Ti(m)));c=Ym(ir(k,new Ti(m)));if(!!d&&Si(d,new Ti(m))){l+=vo(k,c).d}else{!!d&&tj(d.d-m)>a.e&&(d=null);!!c&&tj(c.d-m)>a.e&&(c=null);if(!!c&&!!d){m=(m*l+c.d*vo(k,c).d+d.d*vo(k,d).d)/(l+vo(k,c).d+vo(k,d).d);l+=vo(k,c).d+vo(k,d).d;pr(k,c);pr(k,d)}else if(c){m=(m*l+c.d*vo(k,c).d)/(l+vo(k,c).d);l+=vo(k,c).d;pr(k,c)}else if(d){m=(m*l+d.d*vo(k,d).d)/(l+vo(k,d).d);l+=vo(k,d).d;pr(k,d)}}l>a.g.d/iv&&or(k,new Ti(m),new Ti(l));l>e&&(e=l)}k.g>f&&Bs(k)}zs(k,1/e);return k}
function Jk(){Jk=Ng;var a,b,c;new Sk({l:1,m:0,h:0},0);new Sk({l:10,m:0,h:0},0);new Sk({l:0,m:0,h:0},0);Bk=Ud(kf,Yu,14,11,0,1);Ck=Ud(ke,Yu,0,100,7,1);Dk=Xd(Td(le,1),hv,0,7,[1,5,25,125,625,3125,15625,78125,390625,1953125,9765625,48828125,244140625,1220703125,6103515625,30517578125,152587890625,762939453125,3814697265625,19073486328125,95367431640625,476837158203125,2384185791015625]);Ek=Ud(me,Yu,0,Dk.length,7,1);Fk=Xd(Td(le,1),hv,0,7,[1,10,100,1000,10000,iv,jv,10000000,100000000,dv,kv,100000000000,1000000000000,10000000000000,100000000000000,1000000000000000,10000000000000000]);Gk=Ud(me,Yu,0,Fk.length,7,1);Hk=Ud(kf,Yu,14,11,0,1);a=0;for(;a<Hk.length;a++){Bk[a]=new Sk(ph(a),0);Hk[a]=new Sk({l:0,m:0,h:0},a);Ck[a]=48}for(;a<Ck.length;a++){Ck[a]=48}for(c=0;c<Ek.length;c++){Ek[c]=Uk(Dk[c])}for(b=0;b<Gk.length;b++){Gk[b]=Uk(Fk[b])}om()}
function Lk(a,b){var c,d,e,f,g,h,i,j;c=0;g=0;f=b.length;j=new vk(b.length);if(0<f&&b.charCodeAt(0)==43){++g;++c;if(g<f&&(b.charCodeAt(g)==43||b.charCodeAt(g)==45)){throw new Fj('For input string: "'+b+'"')}}while(g<f&&b.charCodeAt(g)!=46&&b.charCodeAt(g)!=101&&b.charCodeAt(g)!=69){++g}Yh(j,b,c,g);if(g<f&&b.charCodeAt(g)==46){++g;c=g;while(g<f&&b.charCodeAt(g)!=101&&b.charCodeAt(g)!=69){++g}a.j=g-c;Yh(j,b,c,g)}else{a.j=0}if(g<f&&(b.charCodeAt(g)==101||b.charCodeAt(g)==69)){++g;c=g;if(g<f&&b.charCodeAt(g)==43){++g;g<f&&b.charCodeAt(g)!=45&&++c}h=b.substr(c,f-c);a.j=a.j-Ri(h);if(a.j!=ie(a.j)){throw new Fj('Scale out of range.')}}i=j.d;if(i.length<16){a.k=_k(i);if(Zi(a.k)){throw new Fj('For input string: "'+b+'"')}a.d=Uk(a.k)}else{Nk(a,new El(i))}a.g=j.d.length;for(e=0;e<j.d.length;++e){d=Kj(j.d,e);if(d!=45&&d!=48){break}--a.g}a.g==0&&(a.g=1)}
function zu(a,b){!b&&(b={a:false,b:true,c:false,x:false,y:true,z:false});var c=[];var d=a.replace(/([a-z\)])([A-Z])/g,'$1 $2').split(/ /);if(b.a){var e='';for(var f=0;f<d.length-1;f++){e+=d[f];c.push(e+'C-1O-1(+1)$a'+(f+1))}}if(b.b){var g='';for(var f=0;f<d.length-1;f++){g+=d[f];c.push(g+'(+1)$b'+(f+1))}}if(b.c){var h='';for(var f=0;f<d.length-1;f++){h+=d[f];c.push(h+'NH3(+1)$c'+(f+1))}}if(b.x){var i='';for(var f=d.length-1;f>=0;f--){i=d[f]+i;f<d.length-1&&c.push('CO(+1)'+i+'$x'+(d.length-f-1))}}if(b.y){var j='';for(var f=d.length-1;f>=0;f--){j=d[f]+j;f<d.length-1&&c.push('H2(+1)'+j+'$y'+(d.length-f-1))}}if(b.z){var k='';for(var f=d.length-1;f>=0;f--){k=d[f]+k;f<d.length-1&&c.push('N-1H-1(+1)'+k+'$z'+(d.length-f-1))}}if(b.i){for(var f=d.length-1;f>0;f--){d[f].match(/^[A-Z][a-z][a-z].*$/)&&c.push(d[f]+'HC-1O-1(+1)$i:'+d[f])}}c.length==0&&(c=c.concat([a]));return c}
function $l(a,b,c,d,e,f){var g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w;q=Ud(me,Yu,0,d+1,7,1);r=Ud(me,Yu,0,f+1,7,1);i=mj(e[f-1]);if(i!=0){Ql(r,e,0,i);Ql(q,c,0,i)}else{yk(c,0,q,0,d);yk(e,0,r,0,f)}j=r[f-1];l=b-1;m=d;while(l>=0){if(q[m]==j){k=-1}else{s=kh(zh(lh(ph(q[m]),{l:Zu,m:1023,h:0}),32),lh(ph(q[m-1]),{l:Zu,m:1023,h:0}));v=bm(s,j);k=Eh(v);u=Eh(Ah(v,32));if(k!=0){t=false;++k;do{--k;if(t){break}o=vh(lh(ph(k),{l:Zu,m:1023,h:0}),lh(ph(r[f-2]),{l:Zu,m:1023,h:0}));w=kh(zh(ph(u),32),lh(ph(q[m-2]),{l:Zu,m:1023,h:0}));p=kh(lh(ph(u),{l:Zu,m:1023,h:0}),lh(ph(j),{l:Zu,m:1023,h:0}));mj(Eh(Bh(p,32)))<32?(t=true):(u=Eh(p))}while(qh(Gh(o,{l:0,m:0,h:_u}),Gh(w,{l:0,m:0,h:_u})))}}if(k!=0){g=cm(q,m-f,r,f,k);if(g!=0){--k;h={l:0,m:0,h:0};for(n=0;n<f;n++){h=kh(h,kh(lh(ph(q[m-f+n]),{l:Zu,m:1023,h:0}),lh(ph(r[n]),{l:Zu,m:1023,h:0})));q[m-f+n]=Eh(h);h=Bh(h,32)}}}a[l]=k;--m;--l}if(i!=0){Tl(r,f,q,0,i);return r}yk(q,0,r,0,f);return q}
function Fb(){var a=['\\u0000','\\u0001','\\u0002','\\u0003','\\u0004','\\u0005','\\u0006','\\u0007','\\b','\\t','\\n','\\u000B','\\f','\\r','\\u000E','\\u000F','\\u0010','\\u0011','\\u0012','\\u0013','\\u0014','\\u0015','\\u0016','\\u0017','\\u0018','\\u0019','\\u001A','\\u001B','\\u001C','\\u001D','\\u001E','\\u001F'];a[34]='\\"';a[92]='\\\\';a[173]='\\u00ad';a[1536]='\\u0600';a[1537]='\\u0601';a[1538]='\\u0602';a[1539]='\\u0603';a[1757]='\\u06dd';a[1807]='\\u070f';a[6068]='\\u17b4';a[6069]='\\u17b5';a[8203]='\\u200b';a[8204]='\\u200c';a[8205]='\\u200d';a[8206]='\\u200e';a[8207]='\\u200f';a[8232]='\\u2028';a[8233]='\\u2029';a[8234]='\\u202a';a[8235]='\\u202b';a[8236]='\\u202c';a[8237]='\\u202d';a[8238]='\\u202e';a[8288]='\\u2060';a[8289]='\\u2061';a[8290]='\\u2062';a[8291]='\\u2063';a[8292]='\\u2064';a[8298]='\\u206a';a[8299]='\\u206b';a[8300]='\\u206c';a[8301]='\\u206d';a[8302]='\\u206e';a[8303]='\\u206f';a[65279]='\\ufeff';a[65529]='\\ufff9';a[65530]='\\ufffa';a[65531]='\\ufffb';return a}
function Yl(a,b){Wl();var c,d,e,f,g,h,i,j,k,l,m,n;h=sh(a,{l:0,m:0,h:0});h&&(a=wh(a));if(nh(a,{l:0,m:0,h:0})){switch(b){case 0:return '0';case 1:return '0.0';case 2:return '0.00';case 3:return '0.000';case 4:return '0.0000';case 5:return '0.00000';case 6:return '0.000000';default:l=new uk;b<0?(l.d+='0E+',l):(l.d+='0E',l);l.d+=b==fv?'2147483648':''+-b;return l.d;}}j=Ud(ke,Yu,0,19,7,1);c=18;n=a;do{i=n;n=mh(n,{l:10,m:0,h:0});j[--c]=Eh(kh({l:48,m:0,h:0},Ch(i,vh(n,{l:10,m:0,h:0}))))&gv}while(xh(n,{l:0,m:0,h:0}));d=Ch(Ch(Ch({l:18,m:0,h:0},ph(c)),ph(b)),{l:1,m:0,h:0});if(b==0){h&&(j[--c]=45);return fk(j,c,18-c)}if(b>0&&rh(d,{l:4194298,m:Zu,h:$u})){if(rh(d,{l:0,m:0,h:0})){e=c+Eh(d);for(g=17;g>=e;g--){j[g+1]=j[g]}j[++e]=46;h&&(j[--c]=45);return fk(j,c,18-c+1)}for(f=2;sh(ph(f),kh(wh(d),{l:1,m:0,h:0}));f++){j[--c]=48}j[--c]=46;j[--c]=48;h&&(j[--c]=45);return fk(j,c,18-c)}m=c+1;k=new vk;h&&(k.d+='-',k);if(18-m>=1){qk(k,j[c]);k.d+='.';k.d+=fk(j,c+1,18-c-1)}else{k.d+=fk(j,c,18-c)}k.d+='E';qh(d,{l:0,m:0,h:0})&&(k.d+='+',k);k.d+=''+Fh(d);return k.d}
function tu(a){var b=(pu==null&&(pu=[{id:1,name:'alanine',aa3:'Ala',aa1:'A'},{id:2,name:'arginine',aa3:'Arg',aa1:'R'},{id:3,name:'asparagine',aa3:'Asn',aa1:'N'},{id:4,name:'aspartic acid',aa3:'Asp',aa1:'D'},{id:5,name:'asparagine or aspartic acid',aa3:'Asx',aa1:'B'},{id:6,name:'cysteine',aa3:'Cys',aa1:'C'},{id:7,name:'glutamic acid',aa3:'Glu',aa1:'E'},{id:8,name:'glutamine',aa3:'Gln',aa1:'Q'},{id:9,name:'glutamine or glutamic acid',aa3:'Glx',aa1:'Z'},{id:10,name:'glycine',aa3:'Gly',aa1:'G'},{id:11,name:'histidine',aa3:'His',aa1:'H'},{id:12,name:'isoleucine',aa3:'Ile',aa1:'I'},{id:13,name:'leucine',aa3:'Leu',aa1:'L'},{id:14,name:'lysine',aa3:'Lys',aa1:'K'},{id:15,name:'methionine',aa3:'Met',aa1:'M'},{id:16,name:'phenylalanine',aa3:'Phe',aa1:'F'},{id:17,name:'proline',aa3:'Pro',aa1:'P'},{id:18,name:'serine',aa3:'Ser',aa1:'S'},{id:19,name:'threonine',aa3:'Thr',aa1:'T'},{id:20,name:'tryptophan',aa3:'Trp',aa1:'W'},{id:21,name:'tyrosine',aa3:'Tyr',aa1:'Y'},{id:22,name:'valine',aa3:'Val',aa1:'V'}]),pu);for(var c=0;c<b.length;c++){if(b[c].aa1==a){return b[c].aa3}}return a}
function ft(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,A,B;b=Rj(b,' ','');b=Rj(b,'^([0-9]+[A-Z][a-z]?)$','[$1]');Qj(b,'.*[a-zA-Z][0-9]+-[0-9].*')&&(a.f=true);r=new RegExp('([A-Z][a-z]?\\{[0-9.,]*\\})');for(t=r.exec(b);t;t=r.exec(b)){h=t[1];p=(v=at(h),w=Rj(h,'\\{.*',''),cn(a.d,v)||kn(a.d,v,new Ss(gn(a.d,w),v,h)),v);b=b.replace(r,p)}r=new RegExp('(\\{[A-Za-z0-9]*\\})');for(s=r.exec(b);s;s=r.exec(b)){h=s[1];q=(A=at(h),B=Rj(h,'[\\{\\}]',''),cn(a.e,A)||kn(a.e,A,new Dt(A,h,B,a.d,a.e)),A);b=b.replace(r,q)}b.indexOf('}')!=-1;g=Sj(b,'\\.',0);n=1;o=false;for(e=0,f=g.length;e<f;++e){d=g[e];if(et(d)){if(o)throw new Kt("Syntax error: 'number.number.'");n=Qi(d);o=true;continue}u=d.indexOf('/');if(u!=-1){if(o)throw new Kt("Syntax error: 'number.number/number'");k=u+1;l=d.length;while(pi(Kj(d,k++))){if(k>=l)break}k<l&&--k;n=gt(d.substr(0,k));o=true;if(k>=l)continue;else d=Yj(d,k,d.length-k)}j=0;for(;j<d.length;j++){if(!pi(d.charCodeAt(j)))break}if(j>0){m=Qi(d.substr(0,j));d=Yj(d,j,d.length-j);o?(n+=m/Aj(10,j)):(n=m)}i=new xt(d,a.d,a.e,n,c);i.k==0&&(a.j=true);i.j&&(a.f=true);So(a.g,i);n=1;o=false}}
function Ds(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w;t=new ok;s=a.g;s>~~(a.d/2)&&(s=~~(a.d/2));t.d+='##TITLE= '+b+'\r\n'+'##JCAMP-DX= 5.00\r\n'+'##DATA TYPE= MASS SPECTRUM\r\n'+'##DATA CLASS= PEAK TABLE\r\n'+'##ORIGIN= Generated spectrum based on ChemCalc www.chemcalc.org\r\n'+'##SPECTROMETER/DATA SYSTEM= Based on ChemCalc isotopic distribution calculator\r\n'+'##XUNITS= M/Z\r\n'+'##YUNITS= RELATIVE ABUNDANCE\r\n'+'##NPOINTS=         \r\n';e=t.d.length;t.d+='##MAXY= 100\r\n##MINY= 0\r\n';for(n=On(new Pn(d));wn(n.d);){m=Tn(n);nk(t,'##$'+m+'='+(m==null?Zm(Fp(d.d,null)):d.f.kb(m))+'\r\n')}t.d+='##PEAK TABLE= (XY..XY)\r\n';p=0;l=(new Hr(a)).d.$();o=(new Pn(c)).L(Ud(Re,Yu,6,(new Pn(c)).d.e,0,1));lp(o,0,o.length,(rp(),rp(),qp));g=0;q=tv;j=true;f=0;r=false;w='';while(Hn(l.d)&&f<s){++f;h=l.e=In(l.d);u=h.X().d;v=h.Y().d;v<1.0E-9&&(v=0);if(v!=0&&w.length>0){t.d+=w;++p;w=''}i=true;for(k=g;k<o.length;k++){if(!Hn(l.d)||tj(o[k].d-q)<tj(o[k].d-u)){if(i){t.d+='  $$ ';i=false}else{t.d+=','}nk(t,fn(c,o[k]));++g}else{break}}q=u;if(j){j=false;nk(t,Cs(u)+', '+Cs(v*100));++p}else{if(!r||v!=0){t.d+='\r\n';nk(t,Cs(u)+', '+Cs(v*100));++p}else{w='\r\n'+Cs(u)+', '+Cs(0)}v==0?(r=true):(r=false)}}t.d+='\r\n##END=\r\n';t.d=Uj(t.d,0,e-10)+(p+'')+Tj(t.d,e-2);return t}
function Zl(a,b){Wl();var c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,A,B,C,D,F,G;A=a.j;n=a.g;e=a.d;if(A==0){switch(b){case 0:return '0';case 1:return '0.0';case 2:return '0.00';case 3:return '0.000';case 4:return '0.0000';case 5:return '0.00000';case 6:return '0.000000';default:v=new uk;b<0?(v.d+='0E+',v):(v.d+='0E',v);v.d+=-b;return v.d;}}s=n*10+1+7;t=Ud(ke,Yu,0,s+1,7,1);c=s;if(n==1){g=e[0];if(g<0){G=lh(ph(g),{l:Zu,m:1023,h:0});do{o=G;G=mh(G,{l:10,m:0,h:0});t[--c]=48+Eh(Ch(o,vh(G,{l:10,m:0,h:0})))&gv}while(xh(G,{l:0,m:0,h:0}))}else{G=g;do{o=G;G=~~(G/10);t[--c]=48+(o-G*10)&gv}while(G!=0)}}else{C=Ud(me,Yu,0,n,7,1);F=n;yk(e,0,C,0,n);H:while(true){w={l:0,m:0,h:0};for(i=F-1;i>=0;i--){D=kh(zh(w,32),lh(ph(C[i]),{l:Zu,m:1023,h:0}));q=Xl(D);C[i]=Eh(q);w=ph(Eh(Ah(q,32)))}r=Eh(w);p=c;do{t[--c]=48+r%10&gv}while((r=~~(r/10))!=0&&c!=0);d=9-p+c;for(h=0;h<d&&c>0;h++){t[--c]=48}k=F-1;for(;C[k]==0;k--){if(k==0){break H}}F=k+1}while(t[c]==48){++c}}m=A<0;f=s-c-b-1;if(b==0){m&&(t[--c]=45);return fk(t,c,s-c)}if(b>0&&f>=-6){if(f>=0){j=c+f;for(l=s-1;l>=j;l--){t[l+1]=t[l]}t[++j]=46;m&&(t[--c]=45);return fk(t,c,s-c+1)}for(k=2;k<-f+1;k++){t[--c]=48}t[--c]=46;t[--c]=48;m&&(t[--c]=45);return fk(t,c,s-c)}B=c+1;u=new vk;m&&(u.d+='-',u);if(s-B>=1){qk(u,t[c]);u.d+='.';u.d+=fk(t,c+1,s-c-1)}else{u.d+=fk(t,c,s-c)}u.d+='E';f>0&&(u.d+='+',u);u.d+=''+f;return u.d}
function Yb(a,b){var c,d,e,f;$b(b,a.j);c=a.g[0];d=a.g[1];e=a.g[2];f=a.g[3];c=_b(c,d,e,f,a.j[0],7,-680876936);f=_b(f,c,d,e,a.j[1],12,-389564586);e=_b(e,f,c,d,a.j[2],17,606105819);d=_b(d,e,f,c,a.j[3],22,-1044525330);c=_b(c,d,e,f,a.j[4],7,-176418897);f=_b(f,c,d,e,a.j[5],12,1200080426);e=_b(e,f,c,d,a.j[6],17,-1473231341);d=_b(d,e,f,c,a.j[7],22,-45705983);c=_b(c,d,e,f,a.j[8],7,1770035416);f=_b(f,c,d,e,a.j[9],12,-1958414417);e=_b(e,f,c,d,a.j[10],17,-42063);d=_b(d,e,f,c,a.j[11],22,-1990404162);c=_b(c,d,e,f,a.j[12],7,1804603682);f=_b(f,c,d,e,a.j[13],12,-40341101);e=_b(e,f,c,d,a.j[14],17,-1502002290);d=_b(d,e,f,c,a.j[15],22,1236535329);c=ac(c,d,e,f,a.j[1],5,-165796510);f=ac(f,c,d,e,a.j[6],9,-1069501632);e=ac(e,f,c,d,a.j[11],14,643717713);d=ac(d,e,f,c,a.j[0],20,-373897302);c=ac(c,d,e,f,a.j[5],5,-701558691);f=ac(f,c,d,e,a.j[10],9,38016083);e=ac(e,f,c,d,a.j[15],14,-660478335);d=ac(d,e,f,c,a.j[4],20,-405537848);c=ac(c,d,e,f,a.j[9],5,568446438);f=ac(f,c,d,e,a.j[14],9,-1019803690);e=ac(e,f,c,d,a.j[3],14,-187363961);d=ac(d,e,f,c,a.j[8],20,1163531501);c=ac(c,d,e,f,a.j[13],5,-1444681467);f=ac(f,c,d,e,a.j[2],9,-51403784);e=ac(e,f,c,d,a.j[7],14,1735328473);d=ac(d,e,f,c,a.j[12],20,-1926607734);c=bc(c,d,e,f,a.j[5],4,-378558);f=bc(f,c,d,e,a.j[8],11,-2022574463);e=bc(e,f,c,d,a.j[11],16,1839030562);d=bc(d,e,f,c,a.j[14],23,-35309556);c=bc(c,d,e,f,a.j[1],4,-1530992060);f=bc(f,c,d,e,a.j[4],11,1272893353);e=bc(e,f,c,d,a.j[7],16,-155497632);d=bc(d,e,f,c,a.j[10],23,-1094730640);c=bc(c,d,e,f,a.j[13],4,681279174);f=bc(f,c,d,e,a.j[0],11,-358537222);e=bc(e,f,c,d,a.j[3],16,-722521979);d=bc(d,e,f,c,a.j[6],23,76029189);c=bc(c,d,e,f,a.j[9],4,-640364487);f=bc(f,c,d,e,a.j[12],11,-421815835);e=bc(e,f,c,d,a.j[15],16,530742520);d=bc(d,e,f,c,a.j[2],23,-995338651);c=cc(c,d,e,f,a.j[0],6,-198630844);f=cc(f,c,d,e,a.j[7],10,1126891415);e=cc(e,f,c,d,a.j[14],15,-1416354905);d=cc(d,e,f,c,a.j[5],21,-57434055);c=cc(c,d,e,f,a.j[12],6,1700485571);f=cc(f,c,d,e,a.j[3],10,-1894986606);e=cc(e,f,c,d,a.j[10],15,-1051523);d=cc(d,e,f,c,a.j[1],21,-2054922799);c=cc(c,d,e,f,a.j[8],6,1873313359);f=cc(f,c,d,e,a.j[15],10,-30611744);e=cc(e,f,c,d,a.j[6],15,-1560198380);d=cc(d,e,f,c,a.j[13],21,1309151649);c=cc(c,d,e,f,a.j[4],6,-145523070);f=cc(f,c,d,e,a.j[11],10,-1120210379);e=cc(e,f,c,d,a.j[2],15,718787259);d=cc(d,e,f,c,a.j[9],21,-343485551);a.g[0]=~~(a.g[0]+c);a.g[1]=~~(a.g[1]+d);a.g[2]=~~(a.g[2]+e);a.g[3]=~~(a.g[3]+f)}
function At(b,c,d){var e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w;c=Vj(c);c=Rj(c,'[=]','');if(c.indexOf('.')!=-1)throw new vb('Error: the formula "'+c+'"contains dots (error in parsing)');if(Lj(c,'')){return}if(pi(c.charCodeAt(0))){throw new vb('Error: the formula starts with a number')}c.charCodeAt(0)==120&&(c='X'+Uj(c,1,c.length));g=new fr;k=1;j=1;m=1;l=1;r=1;q=1;w=c.length-1;while(w>=0){if(pi(c.charCodeAt(w))){f=w;while(w>0&&pi(c.charCodeAt(w)))--w;e=c.substr(w+1,f+1-(w+1));u=Ri(e);if(c.charCodeAt(w)==45){--w;if(w<0)throw new Kt("Syntax error: the formula starts with '-': "+c);f=w;while(w>0&&pi(c.charCodeAt(w)))--w;w==0&&pi(c.charCodeAt(0))&&--w;o=c.substr(w+1,f+1-(w+1));if(o.length==0){u=Ri('-'+e);v=u}else{v=Ri(o)}}else v=u;if(c.charCodeAt(w)==41){--w;if(w<0)throw new Kt("Syntax error: the formula starts with ')': "+c);er(g,new hj(r));er(g,new hj(q));r=m;q=l;l*=u;m*=v}else{k=v;j=u}}else{if(c.charCodeAt(w)==93){s=w;--w;if(w<=1)throw new Kt('Syntax error: bad isotope syntax');if(!qi(c.charCodeAt(w)))throw new Kt('Syntax error: bad isotope syntax');while(w>0&&si(c.charCodeAt(w)))--w;if(!ti(c.charCodeAt(w)))throw new Kt('Syntax error: bad symbol (must start with uppercase)');t=c.substr(w,s-w);--w;if(w<0)throw new Kt('Syntax error: bad isotope syntax');if(!pi(c.charCodeAt(w)))throw new Kt('Syntax error: bad isotope syntax');f=w;while(w>0&&c.charCodeAt(w)!=91)--w;p=c.substr(w+1,f+1-(w+1));try{n=Ri(p)}catch(a){a=Jg(a);if(be(a,20)){throw new Kt('Syntax error: bad isotope number '+p)}else throw Ig(a)}if(c.charCodeAt(w)!=91)throw new Kt("Isotope syntax error: no opening '['");lt(b,t,k*m,j*l,n,d);j=1;k=1;if(w>0)--w;else return}else{if(qi(c.charCodeAt(w))){s=w;while(w>0&&si(c.charCodeAt(w)))--w;if(s==0&&w==0&&c.charCodeAt(0)==110){b.k=0;return}if(!ti(c.charCodeAt(w)))throw new Kt('Syntax error: the symbol must start with uppercase');t=c.substr(w,s+1-w);if(Lj(t,'X')&&w==0){b.k=0;return}--w;lt(b,t,k*m,j*l,0,d);j=1;k=1}else{while(c.charCodeAt(w)==41){--w;if(w<0)throw new Kt("Syntax error: the formula starts with ')': "+c);er(g,new hj(r));er(g,new hj(q));r=m;q=l}if(w<0)break;while(c.charCodeAt(w)==40){l=q;m=r;if(g.d.e.length==0){q=1;r=1}else{q=dr(g).d;r=dr(g).d}--w;if(w<0)break}if(w<0)break;if(c.charCodeAt(w)==125){i=w;while(w>0&&c.charCodeAt(w)!=123)--w;if(c.charCodeAt(w)!=123)throw new Kt('Syntax error (combinatorial): no opening brace');Bt(b,c.substr(w+1,i-(w+1)),k*m,j*l);--w}}}}if(w<0)break;h=c.charCodeAt(w);if(h==123)throw new Kt('Syntax error (combinatorial): no closing brace');if(h==91)throw new Kt('Syntax error (isotope): no closing bracket');if(!(null!=String.fromCharCode(h).match(/[A-Z\d]/i))&&h!=40&&h!=91&&h!=123&&h!=93&&h!=41&&h!=125)throw new Kt("Syntax error: unrecognized character: '"+_d(h)+"'")}}
function Du(b,c,d){var e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,A,B,C,D,F,G,H,I,J,K,L,M,N,O,P;v=new Tu;if(!b){Qu(v,'error',new Kd('options is null'));return v}K=b.f.kb('referenceVersion');K!=null&&!Lj(K,'')&&(d=(Jt(),Jt(),Ht));D=b.f.kb('mf');s=b.f.kb('isotopomers');O=b.f.kb('typedResult')!=null&&(gi(),Mj('true',b.f.kb('typedResult'))?fi:ei).d;L=new Ti(0.001);try{L=new Ti(Qi(b.f.kb('resolution')))}catch(a){a=Jg(a);if(!be(a,7))throw Ig(a)}N=new Ti(1.0E-5);try{N=new Ti(Qi(b.f.kb('threshold')))}catch(a){a=Jg(a);if(!be(a,7))throw Ig(a)}e=false;q=10;try{q=ie(Qi(b.f.kb('gaussianWidth')));e=true}catch(a){a=Jg(a);if(!be(a,7))throw Ig(a)}p=new Ti(L.d*q);try{p=new Ti(Qi(b.f.kb('gaussianResolution')));e=true}catch(a){a=Jg(a);if(!be(a,7))throw Ig(a)}i=null;try{i=new Ti(Qi(b.f.kb('defaultUnsaturationContribution')))}catch(a){a=Jg(a);if(!be(a,7))throw Ig(a)}u=0;!(b.f.kb('joiningAlgorithm')===undefined)&&Lj(b.f.kb('joiningAlgorithm').toLowerCase(),'center')&&(u=Lt);A=new Tu;D==null?Qu(A,'mf',(ed(),ed(),dd)):Qu(A,'mf',new Kd(D));Qu(A,'threshold',new kd(N.d));Qu(A,'resolution',new kd(L.d));Qu(A,'typedResult',(Zc(),O?Yc:Xc));s==null?Qu(A,'isotopomers',(ed(),ed(),dd)):Qu(A,'isotopomers',new Kd(s));if(e){Qu(A,'gaussianWidth',new kd(q));Qu(A,'gaussianResolution',new kd(p.d))}K==null?Qu(A,'referenceVersion',(ed(),ed(),dd)):Qu(A,'referenceVersion',new Kd(K));Qu(v,'options',A.d);if(D!=null){D=Vj(D);Lj(D,'')&&(D=null)}if(D!=null){try{l=new it(D,d,c);if(l.g.e.length>0){if(l.j){Qu(v,'error',new Kd('mass not defined'))}else{if(O){F=new Tu;Qu(F,'type',new Kd('mf'));Su(F,'value',ht(l));Qu(v,'mf',F.d)}else{Su(v,'mf',ht(l))}Qu(v,'mw',new kd(bt(l)));Qu(v,'em',new kd(ct(l)));Qu(v,'nominalMass',new kd(dt(l)));if(s!=null&&!Lj(s,'')){M=new St(d,l,L.d,N.d);M.k=u;Nt(M);Ot(M);if(e){o=ou(q);Mt(M,o,p.d)}Qu(A,'numberLines',new kd(M.j.f.g));if(s.indexOf('jcamp')>-1){if(O){t=new Tu;Qu(t,'type',new Kd('jcamp'));Su(t,'value',Pt(M).d);Qu(v,'jcamp',t.d)}else{Su(v,'jcamp',Pt(M).d)}}if(s.indexOf('xy')>-1){if(O){P=new Tu;Qu(P,'type',new Kd('xy'));Su(P,'value',Qt(M).d);Qu(v,'xy',P.d)}else{Su(v,'xy',Qt(M).d)}}if(s.indexOf('array')>-1&&s.indexOf('arrayX')==-1){f=Rt(M);w=new Nu;B=new Nu;C=new Nu;for(r=0;r<f.length;r++){Mu(B,new kd(f[r][0]));Mu(C,new kd(f[r][1]))}Mu(w,B.d);Mu(w,C.d);Qu(v,'spectrum',w.d)}if(s.indexOf('arrayXXYY')>-1){f=Rt(M);w=new Nu;B=new Nu;C=new Nu;for(r=0;r<f.length;r++){Mu(B,new kd(f[r][0]));Mu(C,new kd(f[r][1]))}Mu(w,B.d);Mu(w,C.d);Qu(v,'arrayXXYY',w.d)}if(s.indexOf('arrayXYXY')>-1){f=Rt(M);Qu(v,'arrayXYXY',(new Pu(f)).d)}}J=new Nu;Qu(v,'parts',J.d);for(n=new Kn(l.g);n.d<n.f.K();){m=(Fc(n.d<n.f.K()),n.f.V(n.e=n.d++));I=new Tu;Mu(J,I.d);if(O){F=new Tu;Qu(F,'type',new Kd('mf'));Su(F,'value',vt(m));Qu(I,'mf',F.d)}else{Su(I,'mf',vt(m))}Qu(I,'mw',new kd(pt(m)));Qu(I,'em',new kd(qt(m)));m.e.length>0&&Su(I,'comment',m.e);Ru(I,iu(m,i));H=qt(m)-m.d*uv;if(m.d!=0){Qu(I,'charge',new kd(m.d));H=H/uj(m.d)}Qu(I,'msem',new kd(H));nt(m);j=new Nu;for(h=Ho(new Io(m.n));Hn(h.d.d);){g=Mo(h);k=new Tu;Su(k,'element',g.o);Qu(k,'number',new kd(hs(g)));Qu(k,'percentage',new kd(g.n));Mu(j,k.d)}Qu(I,'ea',j.d)}}}else{Qu(v,'error',new Kd('there is no part in the molecule'))}}catch(a){a=Jg(a);if(be(a,4)){G=a;Su(v,'error',G.k)}else throw Ig(a)}}else{Qu(v,'error',new Kd('parameter mf not specified'))}return v}
function Gu(b,c,d){var e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,A,B,C,D,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,$,ab,bb,cb,db;G=0.5;R=0;L=50;J=1000;t=true;db=true;S=false;w=b.f.kb('jcampLink')!=null&&(gi(),Mj('true',b.f.kb('jcampLink'))?fi:ei).d;v=b.f.kb('jcampBaseURL')==null?'http://www.chemcalc.org/service/jcamp/':b.f.kb('jcampBaseURL');O='C0-100H0-202N0-10O0-10F0-3Cl0-3Br0-1';$=tv;Z=new as;bb=b.f.kb('typedResult')!=null&&(gi(),Mj('true',b.f.kb('typedResult'))?fi:ei).d;W=new Ti(0.001);try{W=new Ti(Qi(b.f.kb('resolution')))}catch(a){a=Jg(a);if(!be(a,7))throw Ig(a)}f=false;s=10;try{s=ie(Qi(b.f.kb('gaussianWidth')));f=true}catch(a){a=Jg(a);if(!be(a,7))throw Ig(a)}r=new Ti(W.d*s);try{r=new Ti(Qi(b.f.kb('gaussianResolution')));f=true}catch(a){a=Jg(a);if(!be(a,7))throw Ig(a)}B=new Tu;if(!b){Qu(B,'error',new Kd('options is null'));return B}V=b.f.kb('referenceVersion');V!=null&&!Lj(V,'')&&(d=(Jt(),Jt(),Ht));m=null;try{m=new Ti(Qi(b.f.kb('defaultUnsaturationContribution')))}catch(a){a=Jg(a);if(!be(a,7))throw Ig(a)}try{R=Qi(b.f.kb('minUnsaturation'))}catch(a){a=Jg(a);if(!be(a,7))throw Ig(a)}try{L=Qi(b.f.kb('maxUnsaturation'))}catch(a){a=Jg(a);if(!be(a,7))throw Ig(a)}if(!(b.f.kb('integerUnsaturation')===undefined)){try{t=(gi(),Mj('true',b.f.kb('integerUnsaturation')))}catch(a){a=Jg(a);if(!be(a,7))throw Ig(a)}}if(!(b.f.kb('useUnsaturation')===undefined)){try{db=(gi(),Mj('true',b.f.kb('useUnsaturation')))}catch(a){a=Jg(a);if(!be(a,7))throw Ig(a)}}if(!(b.f.kb('numberOfResultsOnly')===undefined)){try{S=(gi(),Mj('true',b.f.kb('numberOfResultsOnly')))}catch(a){a=Jg(a);if(!be(a,7))throw Ig(a)}}try{J=Qi(b.f.kb('maxNumberRows'))}catch(a){a=Jg(a);if(!be(a,7))throw Ig(a)}try{$=Qi(b.f.kb('monoisotopicMass'))}catch(a){a=Jg(a);if(!be(a,7))throw Ig(a)}try{G=Qi(b.f.kb('massRange'))}catch(a){a=Jg(a);if(!be(a,7))throw Ig(a)}Q=$-G;I=$+G;try{I=Qi(b.f.kb('maxMass'))}catch(a){a=Jg(a);if(!be(a,7))throw Ig(a)}!(b.f.kb('mfRange')===undefined)&&b.f.kb('mfRange')!=null&&b.f.kb('mfRange').length>0&&(O=b.f.kb('mfRange'));if($<0){Qu(B,'error',new Kd('monoisotopicMass must be specified and larger than 0'));return B}C=new Tu;Qu(C,'minUnsaturation',new kd(R));Qu(C,'maxUnsaturation',new kd(L));Qu(C,'integerUnsaturation',(Zc(),t?Yc:Xc));Qu(C,'useUnsaturation',db?Yc:Xc);Qu(C,'numberOfResultsOnly',S?Yc:Xc);Qu(C,'minMass',new kd(Dh(oh(Math.round(Q*kv)))/kv));Qu(C,'maxMass',new kd(Dh(oh(Math.round(I*kv)))/kv));Qu(C,'massRange',new kd(Dh(oh(Math.round(G*kv)))/kv));O==null?Qu(C,'mfRange',(ed(),ed(),dd)):Qu(C,'mfRange',new Kd(O));Qu(C,'monoisotopicMass',new kd(Dh(oh(Math.round($*kv)))/kv));V==null?Qu(C,'referenceVersion',(ed(),ed(),dd)):Qu(C,'referenceVersion',new Kd(V));Qu(C,'jcampLink',w?Yc:Xc);v==null?Qu(C,'jcampBaseURL',(ed(),ed(),dd)):Qu(C,'jcampBaseURL',new Kd(v));Qu(C,'typedResult',bb?Yc:Xc);Qu(B,'options',C.d);u={l:0,m:0,h:0};T={l:0,m:0,h:0};g=0;h=0;try{e=new jt(O,d,c,false);if(e.g.e.length!=1){Qu(B,'error',new Kd('Number of parts not equal to 1'));return B}g=To(e.g,0).d;h=g<0?-g:g;if(g!=0){$=$*h+g*uv;Q=Q*h+g*uv;I=I*h+g*uv;G=G*h}U=Iu(To(e.g,0),$+G);if(U){k=Ud(le,hv,0,U.d.e.length,7,1);P=Ud(le,hv,0,U.d.e.length,7,1);H=Ud(le,hv,0,U.d.e.length,7,1);Eu(U,P,H);Qu(B,'bruteForceIteration',new kd(Qi(Zl(Fu(U),0))));ab=false;l=0;K=U.d.e.length;Ys((Xq(0,U.d.e.length),To(U.d,0)),0,$,P[0],H[0],G);while(!ab){if(qh(u,{l:3511296,m:476,h:0})){throw new Kt('Iteration number is over the current maximum of: 2000000000')}if(k[l]>=Q&&k[l]<=I){cb=ju(U,m);if(!db||!cb||cb.d>=R&&cb.d<=L&&(!t||cb.d==ie(cb.d))){T=kh(T,{l:1,m:0,h:0});if(!S){if(Z.n.g>=J){if(tj(Co(hr(Z.n)).d)>tj(k[l]-$)){Ym(xo(Z.n));_r(Z,new Ku(k[l]-$,k[l],cb,Hu(U,c)))}}else{_r(Z,new Ku(k[l]-$,k[l],cb,Hu(U,c)))}}}}while(l<K&&l>=0){u=kh(u,{l:1,m:0,h:0});j=(Xq(l,U.d.e.length),To(U.d,l));if(j.e<j.f){++j.e;l==0?(k[0]=j.d.j*j.e):(k[l]=k[l-1]+j.d.j*j.e);if(l<K-1){++l;Ys((Xq(l,U.d.e.length),To(U.d,l)),k[l-1],$,P[l],H[l],G)}else{break}}else{--l}}l<0&&(ab=true)}}Qu(B,'realIteration',new kd(Dh(Ch(u,{l:1,m:0,h:0}))));Qu(B,'numberResults',new kd(Dh(T)));Qu(B,'charge',new kd(g))}catch(a){a=Jg(a);if(be(a,4)){n=a;Su(B,'error',qb(n)+'\r'+(vi(Fg),Fg.q+'@'+pj(Pb(C),16)))}else throw Ig(a)}F=new Nu;i='';g!=0&&(g>0?(i='(+'+g+')'):(i='('+g+')'));for(Y=Ho(new Io(Z.n));Hn(Y.d.d);){X=Mo(Y);D=new Tu;if(g==0){q=Dh(oh(Bj(X.d*kv)))/kv;p=Dh(oh(Bj(X.f*kv)))/kv}else{q=Dh(oh(Bj(X.d/h*kv)))/kv;p=Dh(oh(Bj((X.f-g*uv)/h*kv)))/kv}Qu(D,'error',new kd(q));Qu(D,'em',new kd(p));Qu(D,'ppm',new kd(Dh(oh(Math.round(q/p*kv)))/kv*jv));Su(D,'info',X.e+i);try{A=v+X.e+'&resolution='+W;if(f){A+='&gaussianWidth='+s;A+='&gaussianResolution='+r}if(bb){M=new Tu;Qu(M,'type',new Kd('mf'));Su(M,'value',ht(new it(X.e+i,d,c)));Qu(D,'mf',M.d);if(w){N=new Tu;Qu(N,'type',new Kd('jcamp'));A==null?Qu(N,'url',(ed(),ed(),dd)):Qu(N,'url',new Kd(A));Qu(D,'jcamp',N.d)}}else{Su(D,'mf',ht(new it(X.e+i,d,c)));w&&(A==null?Qu(D,'jcampURL',(ed(),ed(),dd)):Qu(D,'jcampURL',new Kd(A)))}}catch(a){a=Jg(a);if(be(a,4)){o=a;Su(D,'mf',qb(o))}else throw Ig(a)}try{Qu(D,'unsat',new kd(Dh(oh(Bj(X.g.d*kv)))/kv))}catch(a){a=Jg(a);if(!be(a,7))throw Ig(a)}Mu(F,D.d)}Qu(B,'results',F.d);return B}
function Jt(){Jt=Ng;var b,c,d,e,f,g,h,i,j,k,l,m;Ht=new Bp;e=new Bp;k=Sj('1\tH\tHydrogen\t1.0079407538967635\n2\tHe\tHelium\t4.002601932146926\n3\tLi\tLithium\t6.940037632200444\n4\tBe\tBeryllium\t9.01218224\n5\tB\tBoron\t10.8110281284\n6\tC\tCarbon\t12.010735896764565\n7\tN\tNitrogen\t14.006703211872013\n8\tO\tOxygen\t15.99940492727602\n9\tF\tFluorine\t18.998403227\n10\tNe\tNeon\t20.180046379828486\n11\tNa\tSodium\t22.989769280929\n12\tMg\tMagnesium\t24.305051612756515\n13\tAl\tAluminium\t26.9815386312\n14\tSi\tSilicon\t28.085498706539465\n15\tP\tPhosphorus\t30.973761632000002\n16\tS\tSulfur\t32.0647872364133\n17\tCl\tChlorine\t35.4529375824264\n18\tAr\tArgon\t39.947676713373\n19\tK\tPotassium\t39.0983011264695\n20\tCa\tCalcium\t40.078022655762524\n21\tSc\tScandium\t44.95591199\n22\tTi\tTitanium\t47.86674933516\n23\tV\tVanadium\t50.9414675085\n24\tCr\tChromium\t51.99613314762095\n25\tMn\tManganese\t54.93804517\n26\tFe\tIron\t55.8451456935552\n27\tCo\tCobalt\t58.93319506999999\n28\tNi\tNickel\t58.69335163208455\n29\tCu\tCopper\t63.546039795084994\n30\tZn\tZinc\t65.40872812701322\n31\tGa\tGallium\t69.72306563428617\n32\tGe\tGermanium\t72.63984326005341\n33\tAs\tArsenic\t74.92159652\n34\tSe\tSelenium\t78.9593882599375\n35\tBr\tBromine\t79.9035279923569\n36\tKr\tKrypton\t83.7980066431168\n37\tRb\tRubidium\t85.46766359470149\n38\tSr\tStrontium\t87.6166441185128\n39\tY\tYttrium\t88.905848327\n40\tZr\tZirconium\t91.22364763203382\n41\tNb\tNiobium\t92.90637812599999\n42\tMo\tMolybdenum\t95.93759212713759\n43\tTc\tTechnetium\t98.0\n44\tRu\tRuthenium\t101.0649455723334\n45\tRh\tRhodium\t102.90550430000002\n46\tPd\tPalladium\t106.41532914746399\n47\tAg\tSilver\t107.868151248228\n48\tCd\tCadmium\t112.41155226203729\n49\tIn\tIndium\t114.81808621342\n50\tSn\tTin\t118.71010849931781\n51\tSb\tAntimony\t121.75978615571421\n52\tTe\tTellurium\t127.60312786587177\n53\tI\tIodine\t126.9044734\n54\tXe\tXenon\t131.29276070673757\n55\tCs\tCaesium\t132.90545193324\n56\tBa\tBarium\t137.3268918829641\n57\tLa\tLanthanum\t138.90545400916656\n58\tCe\tCerium\t140.11572627079408\n59\tPr\tPraseodymium\t140.907652826\n60\tNd\tNeodymium\t144.236131428275\n61\tPm\tPromethium\t145.0\n62\tSm\tSamarium\t150.3663485610868\n63\tEu\tEuropium\t151.96437050019\n64\tGd\tGadolinium\t157.25212224243995\n65\tTb\tTerbium\t158.925346827\n66\tDy\tDysprosium\t162.49946572489424\n67\tHo\tHolmium\t164.930322127\n68\tEr\tErbium\t167.25907628559352\n69\tTm\tThulium\t168.934213327\n70\tYb\tYtterbium\t173.0376956147714\n71\tLu\tLutetium\t174.96672140854997\n72\tHf\tHafnium\t178.4849721651158\n73\tTa\tTantalum\t180.9478757552806\n74\tW\tTungsten\t183.8417781725967\n75\tRe\tRhenium\t186.206706624852\n76\tOs\tOsmium\t190.2248630659075\n77\tIr\tIridium\t192.2160564328\n78\tPt\tPlatinum\t195.077807984934\n79\tAu\tGold\t196.96656876\n80\tHg\tMercury\t200.599166666798\n81\tTl\tThallium\t204.38341252384\n82\tPb\tLead\t207.21690767600003\n83\tBi\tBismuth\t208.98039871599997\n84\tPo\tPolonium\t209.0\n85\tAt\tAstatine\t210.0\n86\tRn\tRadon\t222.0\n87\tFr\tFrancium\t223.0\n88\tRa\tRadium\t226.0\n89\tAc\tActinium\t227.0\n90\tTh\tThorium\t232.038055321\n91\tPa\tProtactinium\t231.035884024\n92\tU\tUranium\t238.02891028165737\n93\tNp\tNeptunium\t237.0\n94\tPu\tPlutonium\t244.0\n95\tAm\tAmericium\t0.0\n96\tCm\tCurium\t0.0\n97\tBk\tBerkelium\t0.0\n98\tCf\tCalifornium\t0.0\n99\tEs\tEinsteinium\t0.0\n100\tFm\tFermium\t0.0\n101\tMd\tMendelevium\t0.0\n102\tNo\tNobelium\t0.0\n103\tLr\tLawrencium\t0.0\n104\tRf\tRutherfordium\t0.0\n105\tDb\tDubnium\t0.0\n106\tSg\tSeaborgium\t0.0\n107\tBh\tBohrium\t0.0\n108\tHs\tHassium\t0.0\n109\tMt\tMeitnerium\t0.0\n110\tDs\tDarmstadtium\t0.0\n111\tRg\tRoentgenium\t0.0\n112\tCn\tCopernicium\t0.0\n113\tUut\tUnuntrium\t0.0\n114\tUuq\t\t0.0\n115\tUup\tUnunpentium\t0.0\n116\tUuh\t\t0.0\n117\tUus\tUnunseptium\t0.0','[\r\n]+',0);for(g=0;g<k.length;g++){m=Sj(k[g],'\t',0);c=new Rs(Qi(m[3]),Vj(m[1]),m[2],Ri(m[0]));kn(Ht,c.n,c);kn(e,m[0],c)}k=Sj('1\t1.007825032071\t99.9885\t1\n2\t2.01410177784\t0.0115\t1\n3\t3.016049277725\t0\t1\n4\t3.016029319126\t0.00013\t2\n5\t4.002603254156\t99.99987\t2\n6\t6.01512279516\t7.59\t3\n7\t7.016004558\t92.41\t3\n8\t9.01218224\t100\t4\n9\t10.01293704\t19.9\t5\n10\t11.00930544\t80.1\t5\n11\t12.0\t98.93\t6\n12\t13.00335483781\t1.07\t6\n13\t14.0032419894\t0\t6\n14\t14.00307400486\t99.636\t7\n15\t15.00010889827\t0.364\t7\n17\t16.9991317012\t0.038\t8\n16\t15.9949146195616\t99.757\t8\n18\t17.99916107\t0.205\t8\n19\t18.998403227\t100\t9\n21\t20.993846684\t0.27\t10\n20\t19.992440175419\t90.48\t10\n22\t21.99138511419\t9.25\t10\n23\t22.989769280929\t100\t11\n25\t24.985836923\t10\t12\n24\t23.98504170014\t78.99\t12\n26\t25.9825929293\t11.01\t12\n27\t26.9815386312\t100\t13\n29\t28.97649470022\t4.685\t14\n28\t27.976926532519\t92.223\t14\n30\t29.973770173\t3.092\t14\n31\t30.973761632\t100\t15\n34\t33.9678669012\t4.25\t16\n35\t35.967080762\t0.01\t16\n32\t31.9720710015\t94.99\t16\n33\t32.9714587615\t0.75\t16\n36\t34.968852684\t75.76\t17\n37\t36.965902595\t24.24\t17\n38\t35.96754510629\t0.3365\t18\n39\t37.96273244\t0.0632\t18\n40\t39.962383122529\t99.6003\t18\n42\t39.9639984821\t0.0117\t19\n43\t40.9618257621\t6.7302\t19\n41\t38.963706682\t93.2581\t19\n49\t47.9525344\t0.187\t20\n48\t45.953692624\t0.004\t20\n46\t42.95876663\t0.135\t20\n47\t43.95548184\t2.086\t20\n44\t39.9625909822\t96.941\t20\n45\t41.9586180127\t0.647\t20\n50\t44.95591199\t100\t21\n51\t45.95263169\t8.25\t22\n55\t49.94479129\t5.18\t22\n54\t48.94787009\t5.41\t22\n53\t47.94794639\t73.72\t22\n52\t46.95176319\t7.44\t22\n57\t50.943959511\t99.75\t23\n56\t49.947158511\t0.25\t23\n59\t51.94050758\t83.789\t24\n58\t49.946044211\t4.345\t24\n61\t53.93888048\t2.365\t24\n60\t52.94064948\t9.501\t24\n62\t54.93804517\t100\t25\n64\t55.93493757\t91.754\t26\n65\t56.93539407\t2.119\t26\n66\t57.93327568\t0.282\t26\n63\t53.93961057\t5.845\t26\n67\t58.93319507\t100\t27\n68\t57.93534297\t68.0769\t28\n69\t59.93078647\t26.2231\t28\n70\t60.93105607\t1.1399\t28\n71\t61.92834516\t3.6345\t28\n72\t63.92796607\t0.9256\t28\n73\t62.92959756\t69.15\t29\n74\t64.92778957\t30.85\t29\n76\t65.92603341\t27.975\t30\n77\t66.92712731\t4.102\t30\n78\t67.92484421\t19.024\t30\n79\t69.925319321\t0.631\t30\n75\t63.92914227\t48.268\t30\n81\t70.924701311\t39.892\t31\n80\t68.925573613\t60.108\t31\n85\t73.921177818\t36.72\t32\n84\t72.923458918\t7.76\t32\n86\t75.921402618\t7.83\t32\n83\t71.922075818\t27.31\t32\n82\t69.924247411\t20.38\t32\n87\t74.92159652\t100\t33\n93\t81.916699422\t8.73\t34\n92\t79.916521321\t49.61\t34\n89\t75.919213618\t9.37\t34\n88\t73.922476418\t0.89\t34\n91\t77.917309118\t23.77\t34\n90\t76.919914018\t7.63\t34\n95\t80.916290621\t49.31\t35\n94\t78.918337122\t50.69\t35\n100\t83.9115073\t56.987\t36\n101\t85.9106107311\t17.279\t36\n98\t81.913483619\t11.593\t36\n99\t82.9141363\t11.5\t36\n96\t77.920364812\t0.355\t36\n97\t79.916379016\t2.286\t36\n102\t84.91178973812\t72.17\t37\n103\t86.90918052713\t27.83\t37\n106\t86.908877112\t7\t38\n107\t87.905612112\t82.58\t38\n104\t83.9134253\t0.56\t38\n105\t85.909260212\t9.86\t38\n108\t88.905848327\t100\t39\n113\t95.90827343\t2.8\t40\n112\t93.906315226\t17.38\t40\n110\t90.905645825\t11.22\t40\n111\t91.905040825\t17.15\t40\n109\t89.904704425\t51.45\t40\n114\t92.906378126\t100\t41\n119\t96.906021521\t9.56\t42\n118\t95.904679521\t16.68\t42\n117\t94.905842121\t15.9\t42\n116\t93.905088321\t9.23\t42\n115\t91.9068114\t14.77\t42\n121\t99.9074776\t9.67\t42\n120\t97.905408221\t24.19\t42\n124\t98.906254721\t0\t43\n123\t97.9072164\t0\t43\n122\t96.9063655\t0\t43\n129\t100.905582122\t17.06\t44\n127\t98.905939322\t12.76\t44\n128\t99.904219522\t12.6\t44\n126\t97.9052877\t1.87\t44\n131\t103.9054333\t18.62\t44\n125\t95.9075988\t5.54\t44\n130\t101.904349322\t31.55\t44\n132\t102.9055043\t100\t45\n137\t107.9038924\t26.46\t46\n136\t105.9034864\t27.33\t46\n138\t109.90515312\t11.72\t46\n133\t101.9056093\t1.02\t46\n135\t104.9050854\t22.33\t46\n134\t103.9040364\t11.14\t46\n139\t106.9050975\t51.839\t47\n140\t108.9047523\t48.161\t47\n141\t105.9064596\t1.25\t48\n143\t109.903002129\t12.49\t48\n142\t107.9041846\t0.89\t48\n144\t110.904178129\t12.8\t48\n145\t111.902757829\t24.13\t48\n146\t112.904401729\t12.22\t48\n147\t113.903358529\t28.73\t48\n148\t115.9047563\t7.49\t48\n149\t112.9040583\t4.29\t49\n150\t114.9038785\t95.71\t49\n152\t113.9027793\t0.66\t50\n153\t114.9033423\t0.34\t50\n154\t115.9017413\t14.54\t50\n155\t116.9029523\t7.68\t50\n156\t117.9016033\t24.22\t50\n157\t118.9033083\t8.59\t50\n158\t119.902194727\t32.58\t50\n159\t121.903439029\t4.63\t50\n160\t123.905273915\t5.79\t50\n151\t111.9048185\t0.97\t50\n162\t122.904214022\t42.79\t51\n161\t120.903815724\t57.21\t51\n170\t129.906224421\t34.08\t52\n169\t127.904463119\t31.74\t52\n168\t125.903311716\t18.84\t52\n163\t119.9040201\t0.09\t52\n167\t124.904430716\t7.07\t52\n166\t123.902817916\t4.74\t52\n165\t122.904270016\t0.89\t52\n164\t121.903043916\t2.55\t52\n171\t126.9044734\t100\t53\n175\t128.90477948\t26.4006\t54\n174\t127.903531315\t1.9102\t54\n173\t125.9042747\t0.089\t54\n172\t123.90589302\t0.0952\t54\n178\t131.90415351\t26.9086\t54\n179\t133.90539459\t10.4357\t54\n176\t129.90350808\t4.071\t54\n177\t130.90508241\t21.2324\t54\n180\t135.9072198\t8.8573\t54\n181\t132.90545193324\t100\t55\n186\t135.90457594\t7.854\t56\n187\t136.90582745\t11.232\t56\n184\t133.90450844\t2.417\t56\n185\t134.90568864\t6.592\t56\n188\t137.90524725\t71.698\t56\n182\t129.90632083\t0.106\t56\n183\t131.905061311\t0.101\t56\n190\t138.906353326\t99.91\t57\n189\t137.9071124\t0.09\t57\n191\t135.90717214\t0.185\t58\n193\t139.905438726\t88.45\t58\n192\t137.90599111\t0.251\t58\n194\t141.9092443\t11.114\t58\n195\t140.907652826\t100\t59\n201\t147.9168933\t5.7\t60\n200\t145.913116925\t17.2\t60\n202\t149.9208913\t5.6\t60\n197\t142.909814325\t12.2\t60\n196\t141.907723325\t27.2\t60\n199\t144.912573625\t8.3\t60\n198\t143.910087325\t23.8\t60\n204\t146.915138526\t0\t61\n203\t144.9127493\t0\t61\n205\t143.9119993\t3.07\t62\n207\t147.914822726\t11.24\t62\n206\t146.914897926\t14.99\t62\n208\t148.917184726\t13.82\t62\n209\t149.917275526\t7.38\t62\n210\t151.919732427\t26.75\t62\n211\t153.922209327\t22.75\t62\n212\t150.919850226\t47.81\t63\n213\t152.921230326\t52.19\t63\n220\t159.927054127\t21.86\t64\n216\t154.922622027\t14.8\t64\n217\t155.922122727\t20.47\t64\n218\t156.923960127\t15.65\t64\n219\t157.924103927\t24.84\t64\n214\t151.919791027\t0.2\t64\n215\t153.920865627\t2.18\t64\n221\t158.925346827\t100\t65\n222\t155.9242837\t0.056\t66\n223\t157.9244094\t0.095\t66\n228\t163.929174827\t28.26\t66\n227\t162.928731227\t24.896\t66\n226\t161.926798427\t25.475\t66\n225\t160.926933427\t18.889\t66\n224\t159.925197527\t2.329\t66\n229\t164.930322127\t100\t67\n235\t169.93546433\t14.91\t68\n234\t167.932370227\t26.978\t68\n233\t166.932048227\t22.869\t68\n232\t165.930293127\t33.503\t68\n231\t163.9292003\t1.601\t68\n230\t161.9287784\t0.139\t68\n236\t168.934213327\t100\t69\n239\t170.936325826\t14.28\t70\n238\t169.934761826\t3.04\t70\n237\t167.9338975\t0.13\t70\n242\t173.938862126\t31.83\t70\n243\t175.942571728\t12.76\t70\n240\t171.936381526\t21.83\t70\n241\t172.938210826\t16.13\t70\n244\t174.940771823\t97.41\t71\n245\t175.942686323\t2.59\t71\n250\t178.945816123\t13.62\t72\n251\t179.946550023\t35.08\t72\n248\t176.943220723\t18.6\t72\n249\t177.943698823\t27.28\t72\n246\t173.9400463\t0.16\t72\n247\t175.941408624\t5.26\t72\n252\t179.947464824\t0.012\t73\n253\t180.947995819\t99.988\t73\n258\t185.954364119\t28.43\t74\n254\t179.9467044\t0.12\t74\n255\t181.94820429\t26.5\t74\n256\t182.95022309\t14.31\t74\n257\t183.95093129\t30.64\t74\n259\t184.952955013\t37.4\t75\n260\t186.955753115\t62.6\t75\n262\t185.953838215\t1.59\t76\n263\t186.955750515\t1.96\t76\n261\t183.952489114\t0.02\t76\n266\t189.958447016\t26.26\t76\n267\t191.961480727\t40.78\t76\n264\t187.955838215\t13.24\t76\n265\t188.958147516\t16.15\t76\n268\t190.960594018\t37.3\t77\n269\t192.962926418\t62.7\t77\n275\t197.9678933\t7.163\t78\n274\t195.96495159\t25.242\t78\n273\t194.96479119\t33.832\t78\n272\t193.96268039\t32.967\t78\n270\t189.9599326\t0.014\t78\n271\t191.961038027\t0.782\t78\n276\t196.96656876\t100\t79\n279\t198.96827994\t16.87\t80\n278\t197.96676904\t9.97\t80\n277\t195.9658333\t0.15\t80\n283\t203.97349394\t6.87\t80\n282\t201.97064306\t29.86\t80\n281\t200.97030236\t13.18\t80\n280\t199.96832604\t23.1\t80\n285\t204.974427514\t70.48\t81\n284\t202.972344214\t29.52\t81\n288\t206.975896913\t22.1\t82\n289\t207.976652113\t52.4\t82\n287\t205.974465313\t24.1\t82\n286\t203.973043613\t1.4\t82\n290\t208.980398716\t100\t83\n291\t208.98243042\t0\t84\n292\t209.982873713\t0\t84\n293\t209.9871488\t0\t85\n294\t210.98749633\t0\t85\n295\t210.9906017\t0\t86\n296\t220.011394024\t0\t86\n297\t222.017577725\t0\t86\n298\t223.019735926\t0\t87\n299\t223.018502227\t0\t88\n300\t224.020211824\t0\t88\n301\t226.025409825\t0\t88\n302\t228.031070326\t0\t88\n303\t227.027752126\t0\t89\n305\t232.038055321\t100\t90\n304\t230.033133819\t0\t90\n306\t231.035884024\t100\t91\n307\t233.039635229\t0\t92\n309\t235.04392992\t0.7204\t92\n308\t234.04095212\t0.0054\t92\n311\t238.05078822\t99.2742\t92\n310\t236.04556802\t0\t92\n313\t237.04817342\t0\t93\n312\t236.0465705\t0\t93\n315\t239.05216342\t0\t94\n314\t238.04955992\t0\t94\n317\t241.05685152\t0\t94\n316\t240.05381352\t0\t94\n319\t244.0642045\t0\t94\n318\t242.05874262\t0\t94\n320\t241.05682912\t0\t95\n321\t243.061381125\t0\t95\n326\t247.0703545\t0\t96\n327\t248.0723495\t0\t96\n324\t245.065491222\t0\t96\n325\t246.067223722\t0\t96\n322\t243.061389122\t0\t96\n323\t244.06275262\t0\t96\n328\t247.0703076\t0\t97\n329\t249.074986728\t0\t97\n332\t251.0795875\t0\t98\n333\t252.0816265\t0\t98\n330\t249.074853524\t0\t98\n331\t250.076406122\t0\t98\n334\t252.0829805\t0\t99\n335\t257.0951057\t0\t100\n337\t260.1036534\t0\t101\n336\t258.0984315\t0\t101\n338\t259.1010311\t0\t102\n339\t262.1096322\t0\t103\n340\t265.1167046\t0\t104\n341\t268.1254557\t0\t105\n342\t271.133477\t0\t106\n343\t272.1380365\t0\t107\n344\t270.1346531\t0\t108\n345\t276.1511673\t0\t109\n346\t281.1620678\t0\t110\n347\t280.164478\t0\t111\n348\t285.1741178\t0\t112\n349\t284.1780886\t0\t113\n350\t289.1872879\t0\t114\n351\t288.1924992\t0\t115\n352\t292.20755101\t0\t117','[\r\n]+',0);for(h=0;h<k.length;h++){m=Sj(k[h],'\t',0);c=gn(e,m[3]);i=Qi(m[1]);j=Qi(m[2]);b=new Et(ie(i+0.5),i,j,c.n);jn(c.e,new hj(b.f),b)}for(d=Xn(new Yn(Ht));wn(d.d);){c=ao(d);Ms(c);if(c.e.e==0){l=new Et(ie(c.f+0.5),c.f,100,c.n);jn(c.e,new hj(l.f),l)}}It=new Bp;k=Sj("1\tAbu\t2-Aminobutyric acid diradical\tC4H7NO\r\n2\tAcet\tAcetyl\tC2H3O\r\n3\tAcm\tAcetamidomethyl\tC3H6NO\r\n4\tAdao\tAdamantyloxy\tC10H15O\r\n5\tAib\talpha-Aminoisobutyric acid diradical\tC4H7NO\r\n6\tAla\tAlainine diradical\tC3H5NO\r\n7\tArg\tArginine diradical\tC6H12N4O\r\n8\tArgp\tArginine triradical\tC6H11N4O\r\n9\tAsn\tAsparagine diradical\tC4H6N2O2\r\n10\tAsnp\tAsparagine triradical\tC4H5N2O2\r\n11\tAsp\tAspartic acid diradical\tC4H5NO3\r\n12\tAspp\tAspartic acid triradical\tC4H4NO3\r\n13\tAsu\talpha-Aminosuberic acid diradical\tC8H13NO3\r\n14\tAsup\talpha-Aminosuberic acid triradical\tC8H12NO3\r\n15\tBoc\tt-Butoxycarbonyl\tC5H9O2\r\n16\tBom\tBenzyloxymethyl\tC8H9O\r\n17\tBrz\t2-Bromobenzyloxycarbonyl\tC8H6BrO2\r\n18\tBu\tButyl\tC4H9\r\n19\tBum\tt-Butoxymethyl\tC5H11O\r\n20\tBz\tBenzoyl\tC7H5O\r\n21\tBzl\tBenzyl\tC7H7\r\n22\tBn\tBenzyl\tC7H7\r\n23\tBzlo\tBenzyloxy\tC7H7O\r\n24\tCha\tbeta-Cyclohexylalanine diradical\tC9H15NO\r\n25\tChxo\tCyclohexyloxy\tC6H11O\r\n26\tCit\tCitrulline diradical\tC6H11N3O2\r\n27\tCitp\tCitrulline triradical\tC6H10N3O2\r\n28\tClz\t2-Chlorobenzyloxycarbonyl\tC8H6ClO2\r\n29\tCp\tCyclopentadienyl\tC5H5\r\n30\tCys\tCysteine diradical\tC3H5NOS\r\n31\tCysp\tCysteine triradical\tC3H4NOS\r\n32\tD\tDeuterium\t[2H]\r\n33\tDde\tDde\tC10H13O2\r\n34\tDnp\t2,4-Dinitrophenyl\tC6H3N2O4\r\n35\tEt\tEthyl\tC2H5\r\n36\tFmoc\tFluorenylmethoxycarbonyl\tC15H11O2\r\n37\tFor\tFormyl\tCHO\r\n38\tGln\tGlutamine diradical\tC5H8N2O2\r\n39\tGlnp\tGlutamine triradical\tC5H7N2O2\r\n40\tGlp\tPyroglutamine\tC5H5NO2\r\n41\tGlu\tGlutamic acid diradical\tC5H7NO3\r\n42\tGlup\tGlutamic acid triradical\tC5H6NO3\r\n43\tGly\tGlycine diradical\tC2H3NO\r\n44\tHci\tHomocitrulline diradical\tC7H13N3O2\r\n45\tHcip\tHomocitrulline triradical\tC7H12N3O2\r\n46\tHis\tHistidine diradical\tC6H7N3O\r\n47\tHisp\tHistidine triradical\tC6H6N3O\r\n48\tHser\tHomoserine diradical\tC4H7NO2\r\n49\tHserp\tHomoserine triradical\tC4H6NO2\r\n50\tHyp\tHydroxyproline diradical\tC5H7NO2\r\n51\tHypp\tHydroxyproline triradical\tC5H6NO2\r\n52\tIle\tIsoleucine diradical\tC6H11NO\r\n53\tIvdde\t1-[4,4-dimethyl-2,6-dioxocyclohexylidene)3-methylb\tC14H21O2\r\n54\tLeu\tLeucine diradical\tC6H11NO\r\n55\tLys\tLysine diradical\tC6H12N2O\r\n56\tLysp\tLysine triradical\tC6H11N2O\r\n57\tMbh\t4,4'-Dimethoxybenzhydryl\tC15H15O2\r\n58\tMe\tMethyl\tCH3\r\n59\tMebzl\t4-Methylbenzyl\tC8H9\r\n60\tMeobzl\t4-Methoxybenzyl1-[4,4-dimethyl-2,6-dioxocyclohexyl\tC8H9O\r\n61\tMet\tMethionine diradical\tC5H9NOS\r\n62\tMmt\t4-Methoxytrityl\tC20H17O\r\n63\tMtc\t2,2,5,7,8-pentamethylchroman-6-sulphonyl\tC14H19O3S\r\n64\tMtr\t4-Methoxy-2,3,6-trimethylbenzenesulphonyl\tC10H13O3S\r\n65\tMts\tMesitylene-2-sulphonyl\tC9H11O2S\r\n66\tMtt\t4-Methyltrityl\tC20H17\r\n67\tNle\tNorleucine diradical\tC6H11NO\r\n68\tNpys\t3-Nitro-2-pyridinesulphenyl\tC5H3N2O2S\r\n69\tNva\tNorvaline diradical\tC5H9NO\r\n70\tOdmab\tOdmab\tC20H26NO3\r\n71\tOrn\tOrnithine diradical\tC5H10N2O\r\n72\tOrnp\tOrnithine triradical\tC5H9N2O\r\n73\tPbf\t2,2,4,6,7-pentamethyldihydrobenzofurane-5-sulfonyl\tC13H17O3S\r\n74\tPen\tPenicillamine diradical\tC5H9NOS\r\n75\tPenp\tPenicillamine triradical\tC5H8NOS\r\n76\tPh\tPhenyl\tC6H5\r\n77\tPhe\tPhenylalanine diradical\tC9H9NO\r\n78\tPhepcl\t4-Chlorophenylalanine diradical\tC9H8ClNO\r\n79\tPhg\tPhenylglycine\tC8H7NO\r\n80\tPmc\t2,2,5,7,8-Pentamethylchroman-6-sulphonyl\tC14H19O3S\r\n81\tPro\tProline diradical\tC5H7NO\r\n82\tPyr\tPyroglutamine\tC5H5NO2\r\n83\tSar\tSarcosine diradical\tC3H5NO\r\n84\tSer\tSerine diradical\tC3H5NO2\r\n85\tSerp\tSerine triradical\tC3H4NO2\r\n86\tSta\tStatine diradical\tC8H15NO2\r\n87\tStap\tStatine triradical\tC8H14NO2\r\n88\tTacm\tTrimethylacetamidomethyl\tC6H12NO\r\n89\tTbdms\tt-Butyldimethylsilyl\tC6H15Si\r\n90\tTbu\tt-Butyl\tC4H9\r\n91\tTbuo\tt-Butoxy\tC4H9O\r\n92\tTbuthio\tt-Butylthio\tC4H9S\r\n93\tTfa\tTrifluoroacetyl\tC2F3O\r\n94\tThi\tbeta-(2-thenyl)alanine\tC7H7NOS\r\n95\tThr\tThreonine diradical\tC4H7NO2\r\n96\tThrp\tThreonine triradical\tC4H6NO2\r\n97\tTips\tTriisopropylsilyl\tC9H21Si\r\n98\tTms\tTrimethylsilyl\tC3H9Si\r\n99\tTos\tTosyl\tC7H7O2S\r\n100\tTrp\tTryptophan diradical\tC11H10N2O\r\n101\tTrpp\tTryptophan triradical\tC11H9N2O\r\n102\tTrt\tTrityl\tC19H15\r\n103\tTyr\tTyrosine diradical\tC9H9NO2\r\n104\tTyrp\tTyrosine triradical\tC9H8NO2\r\n105\tVal\tValine\tC5H9NO\r\n106\tValoh\tbeta-Hydroxyvaline diradical\tC5H9NO2\r\n107\tValohp\tbeta-Hydroxyvaline triradical\tC5H8NO2\r\n108\tXan\tXanthyl\tC13H9O\r\n109\tZ\tBenzyloxycarbonyl\tC8H7O2\r\n110\tT\tTritium\t[3H]",'[\r\n]+',0);for(f=0;f<k.length;f++){m=Sj(k[f],'\t',0);try{kn(It,m[1],new Dt(m[1],m[2],m[3],Ht,It))}catch(a){a=Jg(a);if(!be(a,4))throw Ig(a)}}}
var Vu=2147483647,Wu={3:1,9:1},Xu={3:1,7:1,9:1},Yu={3:1},Zu=4194303,$u=1048575,_u=524288,av=4194304,bv=17592186044416,cv=-9223372036854775808,dv=1000000000,ev=65536,fv=-2147483648,gv=65535,hv={28:1,3:1},iv=100000,jv=1000000,kv=10000000000,lv=0.3010299956639812,mv=4294967296,nv=1073741824,ov={35:1},pv={37:1,27:1},qv={3:1,51:1},rv={3:1,50:1},sv={3:1,18:1,29:1,26:1},tv=4.9E-324,uv=5.4857990946E-4;var _,Mh,Kg={},Gg=-1;Mg(1,null,{},fb);_.eQ=function gb(a){return this===a};_.gC=function ib(){return this.cZ};_.hC=function kb(){return Pb(this)};_.tS=function mb(){return eb(this)};_.toString=function(){return this.tS()};$d={3:1,116:1,18:1,2:1};Pg();var $d;Mg(68,1,{},xi);_.B=function yi(a){var b;b=new xi;b.j=4;a>1?(b.f=Fi(this,a-1)):(b.f=this);return b};_.C=function Ei(){vi(this);return this.e};_.D=function Gi(){return wi(this)};_.F=function Ii(){vi(this);return this.o};_.G=function Ki(){return (this.j&4)!=0};_.H=function Li(){return (this.j&1)!=0};_.tS=function Oi(){return ((this.j&2)!=0?'interface ':(this.j&1)!=0?'':'class ')+(vi(this),this.q)};_.j=0;_.n=0;var ui=1;var af=Ai(1),oe=Ai(0),Qe=Ai(68);Mg(9,1,Wu);_.r=function rb(){return this.k};_.tS=function sb(){return qb(this)};var hf=Ai(9);Mg(7,9,Xu);var Ue=Ai(7);Mg(10,7,Xu,vb);var bf=Ai(10);Mg(83,10,Xu);var qe=Ai(83);Mg(38,83,{38:1,3:1,7:1,9:1},zb);_.r=function Ab(){yb(this);return this.f};var wb;var ne=Ai(38);var Cb;Mg(117,1,{});var pe=Ai(117);var Gb=0,Hb=0,Ib=0,Jb=-1;Mg(138,1,{});var nf=Ai(138);Mg(139,138,{});var of=Ai(139);Mg(112,139,{},Zb);_.e={l:0,m:0,h:0};_.f=0;var Ub;var re=Ai(112);Mg(107,117,{},jc);var fc;var se=Ai(107);var mc;Mg(133,1,{});var we=Ai(133);Mg(84,133,{},sc);_.s=function tc(a,b){var c={},j;a.fnStack=[];var d=arguments.callee.caller;while(d){var e=(nc(),d.name||(d.name=qc(d.toString())));a.fnStack.push(e);var f=':'+e;var g=c[f];if(g){var h,i;for(h=0,i=g.length;h<i;h++){if(g[h]===d){return}}}(g||(c[f]=[])).push(d);d=d.caller}};_.t=function uc(a){var b,c,d,e;d=(nc(),a&&a.fnStack&&a.fnStack instanceof Array?a.fnStack:[]);c=d.length;e=Ud(cf,Yu,31,c,0,1);for(b=0;b<c;b++){e[b]=new Gj(d[b],null,-1)}return e};var te=Ai(84);Mg(134,133,{});_.s=function xc(c,d){function e(b){if(!('stack' in b)){try{throw b}catch(a){}}return b}
var f;typeof d=='string'?(f=e(new Error(d))):d instanceof Object&&'stack' in d?(f=d):(f=e(new Error));c.__gwt$backingJsError=f};_.u=function yc(a,b,c,d){return new Gj(b,a+'@'+d,c<0?-1:c)};
_.t=function zc(a){var b,c,d,e,f,g,h;e=(nc(),h=a.__gwt$backingJsError,h&&h.stack?h.stack.split('\n'):[]);f=Ud(cf,Yu,31,0,0,1);b=0;d=e.length;if(d==0){return f}g=wc(this,e[0]);Lj(g.g,'anonymous')||(f[b++]=g);for(c=1;c<d;c++){f[b++]=wc(this,e[c])}return f};var ve=Ai(134);Mg(85,134,{},Ac);_.u=function Bc(a,b,c,d){return new Gj(b,a,-1)};var ue=Ai(85);Mg(132,1,{});_.w=function Mc(){return null};var Ee=Ai(132);Mg(66,132,{66:1},Qc,Rc);_.eQ=function Sc(a){if(!be(a,66)){return false}return this.d==a.d};_.v=function Tc(){return Wc};_.hC=function Uc(){return Pb(this.d)};_.tS=function Vc(){var a,b,c;c=new wk('[');for(b=0,a=this.d.length;b<a;b++){b>0&&(c.d+=',',c);rk(c,Nc(this,b))}c.d+=']';return c.d};var xe=Ai(66);Mg(76,132,{},$c);_.v=function _c(){return bd};_.tS=function ad(){return gi(),''+this.d};_.d=false;var Xc,Yc;var ye=Ai(76);Mg(110,10,Xu,cd);var ze=Ai(110);Mg(106,132,{},fd);_.v=function gd(){return jd};_.tS=function hd(){return 'null'};var dd;var Ae=Ai(106);Mg(8,132,{8:1},kd);_.eQ=function ld(a){if(!be(a,8)){return false}return this.d==a.d};_.v=function md(){return pd};_.hC=function nd(){return ie((new Ti(this.d)).d)};_.tS=function od(){return this.d+''};_.d=0;var Be=Ai(8);Mg(54,132,{54:1},vd,wd);_.eQ=function xd(a){if(!be(a,54)){return false}return this.d==a.d};_.v=function yd(){return Bd};_.hC=function zd(){return Pb(this.d)};_.tS=function Ad(){var a,b,c,d,e,f;f=new wk('{');a=true;e=qd(this,Ud(gf,Yu,2,0,4,1));for(c=0,d=e.length;c<d;++c){b=e[c];a?(a=false):(f.d+=', ',f);sk(f,Eb(b));f.d+=':';rk(f,rd(this,b))}f.d+='}';return f.d};var Ce=Ai(54);var Cd;Mg(11,132,{11:1},Kd);_.eQ=function Ld(a){if(!be(a,11)){return false}return Lj(this.d,a.d)};_.v=function Md(){return Qd};_.hC=function Nd(){return lk(this.d)};_.w=function Od(){return this};_.tS=function Pd(){return Eb(this.d)};var De=Ai(11);var Tg;var jh;var Hh,Ih,Jh,Kh;Mg(60,9,Wu);var Te=Ai(60);Mg(17,60,Wu);var Oe=Ai(17);Mg(78,17,Wu,Wh);var Je=Ai(78);Mg(45,1,{});_.tS=function $h(){return this.d};var Ke=Ai(45);Mg(41,10,Xu,_h);var Le=Ai(41);Mg(49,10,Xu,ai,bi);var Xe=Ai(49);Mg(109,49,Xu,ci);var Me=Ai(109);Mg(43,10,Xu,di);var Ne=Ai(43);Mg(52,1,{3:1,52:1,18:1},hi);_.A=function ji(a){return ii(this.d,a.d)};_.eQ=function ki(a){return be(a,52)&&a.d==this.d};_.hC=function li(){return this.d?1231:1237};_.tS=function mi(){return ''+this.d};_.d=false;var ei,fi;var Pe=Ai(52);Mg(44,1,{3:1,44:1});var Pi;var _e=Ai(44);Mg(6,44,{3:1,18:1,6:1,44:1},Ti);_.A=function Vi(a){return Ui(this.d,a.d)};_.eQ=function Wi(a){return Si(this,a)};_.hC=function Xi(){return ie(this.d)};_.tS=function $i(){return ''+this.d};_.d=0;var Re=Ai(6);Mg(29,1,{3:1,18:1,29:1});_.A=function aj(a){return this.e-a.e};_.eQ=function bj(a){return this===a};_.hC=function cj(){return Pb(this)};_.tS=function dj(){return this.d!=null?this.d:''+this.e};_.e=0;var Se=Ai(29);Mg(56,10,Xu,ej);var Ve=Ai(56);Mg(111,10,Xu,fj);var We=Ai(111);Mg(19,44,{3:1,18:1,19:1,44:1},hj);_.A=function jj(a){return gj(this,a)};_.eQ=function kj(a){return be(a,19)&&a.d==this.d};_.hC=function lj(){return this.d};_.tS=function oj(){return ''+this.d};_.d=0;var Ye=Ai(19);var rj;Mg(59,10,Xu,Dj,Ej);var Ze=Ai(59);Mg(20,56,{3:1,7:1,20:1,9:1},Fj);var $e=Ai(20);Mg(31,1,{3:1,31:1},Gj);_.eQ=function Hj(a){var b;if(be(a,31)){b=a;return this.f==b.f&&Rq(this.g,b.g)&&Rq(this.d,b.d)&&Rq(this.e,b.e)}return false};_.hC=function Ij(){return ip(Xd(Td(af,1),Yu,1,3,[qj(this.f),this.d,this.g,this.e]))};_.tS=function Jj(){return this.d+'.'+this.g+'('+(this.e!=null?this.e:'Unknown Source')+(this.f>=0?':'+this.f:'')+')'};_.f=0;var cf=Ai(31);var gf=Ai(2);var gk,hk=0,ik;Mg(34,45,{116:1},ok,pk);var df=Ai(34);Mg(23,45,{116:1},uk,vk,wk);var ef=Ai(23);Mg(67,49,Xu,xk);var ff=Ai(67);Mg(42,10,Xu,zk,Ak);var jf=Ai(42);Mg(14,44,{3:1,18:1,44:1,14:1},Qk,Rk,Sk,Tk);_.A=function Wk(a){return Kk(this,a)};_.eQ=function Zk(a){var b;if(this===a){return true}if(be(a,14)){b=a;return b.j==this.j&&(this.d<54?b.k==this.k:ol(this.f,b.f))}return false};_.hC=function $k(){var a;if(this.e!=0){return this.e}if(this.d<54){a=oh(this.k);this.e=Eh(lh(a,{l:Zu,m:Zu,h:$u}));this.e=33*this.e+Eh(lh(Ah(a,32),{l:Zu,m:Zu,h:$u}));this.e=17*this.e+ie(this.j);return this.e}this.e=17*rl(this.f)+ie(this.j);return this.e};_.tS=function bl(){return Pk(this)};_.d=0;_.e=0;_.g=0;_.j=0;_.k=0;var Bk,Ck,Dk,Ek,Fk,Gk,Hk,Ik;var kf=Ai(14);Mg(5,44,{3:1,18:1,44:1,5:1},zl,Al,Bl,Cl,Dl,El);_.A=function Gl(a){return ll(this,a)};_.eQ=function Hl(a){return ol(this,a)};_.hC=function Jl(){return rl(this)};_.tS=function Ll(){return Zl(this,0)};_.e=-2;_.f=0;_.g=0;_.j=0;var dl,el,fl,gl,hl,il;var lf=Ai(5);var Ul,Vl;var lm,mm,nm;Mg(24,29,{3:1,18:1,29:1,24:1},Im);var zm,Am,Bm,Cm,Dm,Em,Fm,Gm;var mf=Bi(24,Jm);Mg(130,1,{});_.J=function Om(a){return Lm(this,a)};_.L=function Pm(a){var b,c,d;d=this.K();a.length<d&&(a=Sd(a,d));c=this.I();for(b=0;b<d;++b){a[b]=c.S()}a.length>d&&(a[d]=null);return a};_.tS=function Qm(){return Nm(this)};var pf=Ai(130);Mg(129,1,{50:1});_.M=function Um(a){return Rm(this,a)};_.N=function Vm(a){return !!Sm(this,a)};_.eQ=function Wm(a){var b,c,d;if(a===this){return true}if(!be(a,50)){return false}d=a;if(this.K()!=d.K()){return false}for(c=d.O().I();c.R();){b=c.S();if(!this.M(b)){return false}}return true};_.P=function Xm(a){return Zm(Sm(this,a))};_.hC=function $m(){return np(this.O())};_.K=function _m(){return this.O().K()};_.tS=function an(){var a,b,c,d;d=new wk('{');a=false;for(c=this.O().I();c.R();){b=c.S();a?(d.d+=', ',d):(a=true);sk(d,Tm(this,b.X()));d.d+='=';sk(d,Tm(this,b.Y()))}d.d+='}';return d.d};var Ef=Ai(129);Mg(79,129,{50:1});_.N=function ln(a){return bn(this,a)};_.O=function mn(){return new sn(this)};_.P=function nn(a){return fn(this,a)};_.Q=function on(a,b){return jn(this,a,b)};_.K=function pn(){return this.e};_.e=0;var sf=Ai(79);Mg(131,130,ov);_.eQ=function qn(a){var b;if(a===this){return true}if(!be(a,35)){return false}b=a;if(b.K()!=this.K()){return false}return Mm(this,b)};_.hC=function rn(){return np(this)};var Jf=Ai(131);Mg(61,131,ov,sn);_.J=function tn(a){if(be(a,27)){return Rm(this.d,a)}return false};_.I=function un(){return new yn(this.d)};_.K=function vn(){return this.d.e};var rf=Ai(61);Mg(62,1,{},yn);_.R=function zn(){return wn(this)};_.S=function An(){return xn(this)};var qf=Ai(62);Mg(135,130,{51:1});_.T=function Bn(a,b){throw new Ak('Add not supported on this list')};_.U=function Cn(a){this.T(this.K(),a);return true};_.eQ=function Dn(a){var b,c,d,e,f;if(a===this){return true}if(!be(a,51)){return false}f=a;if(this.K()!=f.K()){return false}e=f.I();for(c=this.I();c.d<c.f.K();){b=(Fc(c.d<c.f.K()),c.f.V(c.e=c.d++));d=(Fc(e.d<e.f.K()),e.f.V(e.e=e.d++));if(!(ge(b)===ge(d)||b!=null&&hb(b,d))){return false}}return true};_.hC=function En(){return op(this)};_.I=function Fn(){return new Kn(this)};_.W=function Gn(a){throw new Ak('Remove not supported on this list')};var vf=Ai(135);Mg(21,1,{},Kn);_.R=function Ln(){return Hn(this)};_.S=function Mn(){return In(this)};_.d=0;_.e=-1;var tf=Ai(21);Mg(90,21,{},Nn);var uf=Ai(90);Mg(63,131,ov,Pn);_.J=function Qn(a){return bn(this.d,a)};_.I=function Rn(){return On(this)};_.K=function Sn(){return this.d.e};var xf=Ai(63);Mg(81,1,{},Un);_.R=function Vn(){return wn(this.d)};_.S=function Wn(){return Tn(this)};var wf=Ai(81);Mg(25,130,{},Yn);_.J=function Zn(a){return cn(this.d,a)};_.I=function $n(){return Xn(this)};_.K=function _n(){return this.d.e};var zf=Ai(25);Mg(82,1,{},bo);_.R=function co(){return wn(this.d)};_.S=function eo(){return ao(this)};var yf=Ai(82);Mg(37,1,pv);_.eQ=function ho(a){var b;if(!be(a,27)){return false}b=a;return Rq(this.f,b.X())&&Rq(this.g,b.Y())};_.X=function io(){return this.f};_.Y=function jo(){return this.g};_.hC=function ko(){return Sq(this.f)^Sq(this.g)};_.Z=function lo(a){return fo(this,a)};_.tS=function mo(){return this.f+'='+this.g};var Af=Ai(37);Mg(53,37,{37:1,53:1,27:1},no);var Bf=Ai(53);Mg(80,37,pv,oo);_.Z=function po(a){throw new zk};var Cf=Ai(80);Mg(136,1,{27:1});_.eQ=function qo(a){var b;if(!be(a,27)){return false}b=a;return Rq(this.X(),b.X())&&Rq(this.Y(),b.Y())};_.hC=function ro(){return Sq(this.X())^Sq(this.Y())};_.tS=function so(){return this.X()+'='+this.Y()};var Df=Ai(136);Mg(137,129,{50:1});_.M=function yo(a){return to(this,a)};_.N=function zo(a){return uo(this,a)};_.O=function Ao(){return new Do(this)};_.P=function Bo(a){return vo(this,a)};var If=Ai(137);Mg(73,131,ov,Do);_.J=function Eo(a){return be(a,27)&&to(this.d,a)};_.I=function Fo(){return this.d.$()};_.K=function Go(){return this.d.K()};var Ff=Ai(73);Mg(13,131,ov,Io);_.J=function Jo(a){return uo(this.d,a)};_.I=function Ko(){return Ho(this)};_.K=function Lo(){return this.d.g};var Hf=Ai(13);Mg(97,1,{},No);_.R=function Oo(){return Hn(this.d.d)};_.S=function Po(){return Mo(this)};var Gf=Ai(97);Mg(46,135,qv,Zo,$o);_.T=function _o(a,b){Ro(this,a,b)};_.U=function ap(a){return So(this,a)};_.J=function bp(a){return Uo(this,a,0)!=-1};_.V=function cp(a){return To(this,a)};_.W=function dp(a){return Vo(this,a)};_.K=function ep(){return this.e.length};_.L=function hp(a){return Yo(this,a)};var Kf=Ai(46);var qp;Mg(108,1,{},sp);_.ab=function tp(a,b){Hc(a);Hc(b);return ak(a,b)};var Lf=Ai(108);Mg(115,10,Xu,xp);var Mf=Ai(115);Mg(114,10,Xu,yp);var Nf=Ai(114);Mg(22,79,rv,Bp);var Of=Ai(22);Mg(75,1,{},Jp);_.bb=function Kp(a){var b,c,d,e,f,g,h,i;for(g=Gp(this),h=0,i=g.length;h<i;++h){f=g[h];for(c=this.d[f],d=0,e=c.length;d<e;++d){b=c[d];if(zp(a,b.Y())){return true}}}return false};_.cb=function Lp(){return Object.create(null)};_.db=function Mp(){return new Op(this)};var Sf=Ai(75);Mg(102,1,{},Op);_.R=function Pp(){return Np(this)};_.S=function Qp(){return Fc(Np(this)),this.j=this.d[this.f++],this.j};_.e=-1;_.f=0;_.j=null;var Pf=Ai(102);Mg(100,75,{},Rp);_.bb=function Sp(a){var b=this.d;for(var c in b){if(c==parseInt(c,10)){var d=b[c];for(var e=0,f=d.length;e<f;++e){var g=d[e];var h=g.Y();if(this.eb(a,h)){return true}}}}return false};_.cb=function Tp(){return {}};_.db=function Up(){var a=this.fb();var b=this.d;for(var c in b){if(c==parseInt(c,10)){var d=b[c];for(var e=0,f=d.length;e<f;++e){a.U(d[e])}}}return a.I()};_.eb=function Vp(a,b){return ge(a)===ge(b)||a!=null&&hb(a,b)};_.fb=function Wp(){return new Xp(this)};var Rf=Ai(100);Mg(101,46,qv,Xp);_.W=function Yp(a){var b;return b=Vo(this,a),Ip(this.d,b.X()),b};var Qf=Ai(101);Mg(103,1,{},Zp);_.gb=function $p(){return new Jp};_.hb=function _p(){return new oq};var Vf=Ai(103);var aq;Mg(105,103,{},eq);_.hb=function fq(){return new Nq};var Tf=Ai(105);Mg(104,103,{},gq);_.gb=function hq(){return new Rp};_.hb=function iq(){return new Eq};var Uf=Ai(104);Mg(64,1,{},oq);_.bb=function pq(a){return jq(this,a)};_.ib=function qq(){return Object.create(null)};_.db=function rq(){var a;a=this.lb();return new xq(this,a)};_.jb=function sq(a,b){return ge(a)===ge(b)||a!=null&&hb(a,b)};_.kb=function tq(a){return this.d[a]};_.lb=function uq(){return kq(this)};_.mb=function vq(a){return new Aq(this,a)};_.nb=function wq(a,b){return lq(this,a,b)};var _f=Ai(64);Mg(89,1,{},xq);_.R=function yq(){return this.d<this.f.length};_.S=function zq(){return Fc(this.d<this.f.length),new Aq(this.e,this.f[this.d++])};_.d=0;var Wf=Ai(89);Mg(71,136,{27:1},Aq);_.X=function Bq(){return this.e};_.Y=function Cq(){return this.d.kb(this.e)};_.Z=function Dq(a){return this.d.nb(this.e,a)};var Xf=Ai(71);Mg(86,64,{},Eq);_.bb=function Fq(a){var b=this.d;for(var c in b){if(c.charCodeAt(0)==58){var d=b[c];if(this.jb(a,d)){return true}}}return false};_.ib=function Gq(){return {}};_.db=function Hq(){var a=this.ob();for(var b in this.d){if(b.charCodeAt(0)==58){var c=this.mb(b.substring(1));a.U(c)}}return a.I()};_.kb=function Iq(a){return this.d[':'+a]};_.ob=function Jq(){return new Lq(this)};_.nb=function Kq(a,b){return lq(this,':'+a,b)};var Zf=Ai(86);Mg(88,46,qv,Lq);_.W=function Mq(a){var b;return b=Vo(this,a),mq(this.d,':'+b.X()),b};var Yf=Ai(88);Mg(87,64,{},Nq);_.bb=function Oq(a){var b;b=this.d['__proto__'];if(!(b===undefined)&&(ge(a)===ge(b)||a!=null&&hb(a,b))){return true}return jq(this,a)};_.lb=function Pq(){var a;a=kq(this);!(this.d['__proto__']===undefined)&&(a[a.length]='__proto__');return a};var $f=Ai(87);var ag=Ci();Mg(77,10,Xu,Qq);var bg=Ai(77);Mg(74,135,qv,Uq);_.T=function Vq(a,b){Xq(a,this.d.e.length+1);Ro(this.d,a,b)};_.U=function Wq(a){return Tq(this,a)};_.J=function Yq(a){return Uo(this.d,a,0)!=-1};_.V=function Zq(a){return Xq(a,this.d.e.length),To(this.d,a)};_.I=function $q(){return new Kn(this.d)};_.W=function _q(a){return Xq(a,this.d.e.length),this.d.W(a)};_.K=function ar(){return this.d.e.length};_.L=function br(a){return Yo(this.d,a)};_.tS=function cr(){return Nm(this.d)};var ng=Ai(74);Mg(113,74,qv,fr);var cg=Ai(113);Mg(58,137,rv,vr,wr);_.$=function xr(){return new Dr(this)};_.O=function yr(){return new Hr(this)};_._=function zr(a){var b,c,d;d=this.f;while(d){b=this.e.ab(a,d.f);if(b==0){return d}c=b<0?0:1;d=d.d[c]}return null};_.K=function Ar(){return this.g};_.g=0;var lg=Ai(58);Mg(72,1,{},Dr);_.R=function Fr(){return Hn(this.d)};_.S=function Gr(){return Br(this)};var dg=Ai(72);Mg(12,73,ov,Hr);var eg=Ai(12);Mg(40,53,{37:1,53:1,27:1,40:1},Ir);_.e=false;var fg=Ai(40);Mg(65,1,{},Jr);_.tS=function Kr(){return 'State: mv='+this.f+' value='+this.g+' done='+this.d+' found='+this.e};_.d=false;_.e=false;_.f=false;var gg=Ai(65);Mg(26,29,sv,Qr);_.pb=function Rr(){return false};_.qb=function Sr(){return false};var Lr,Mr,Nr,Or;var kg=Bi(26,Tr);Mg(94,26,sv,Ur);_.qb=function Vr(){return true};var hg=Bi(94,null);Mg(95,26,sv,Wr);_.pb=function Xr(){return true};_.qb=function Yr(){return true};var ig=Bi(95,null);Mg(96,26,sv,Zr);_.pb=function $r(){return true};var jg=Bi(96,null);Mg(57,131,{3:1,35:1},as,bs);_.J=function cs(a){return uo(this.n,a)};_.I=function ds(){return Ho(new Io(this.n))};_.K=function es(){return this.n.g};var mg=Ai(57);Mg(32,1,{18:1,32:1},ls,ms,ns,os);_.A=function ps(a){if(!be(a,32))throw new Ak('Not comparable: Atoms and '+wi(jb(a)));return fs(this,a)};_.eQ=function qs(a){return gs(this,a)};_.hC=function rs(){var a;a=this.d+this.o;return lk(a)};_.tS=function ss(){return ks(this,null)};_.d=0;_.e=0;_.f=0;_.g=0;_.j=0;_.k=0;_.n=0;var og=Ai(32);Mg(33,58,rv,Hs);_.tS=function Is(){return Es(this)};_.d=10000;var qg=Ai(33);Mg(98,1,{},Js);_.ab=function Ks(a,b){return -ak(a.Y(),b.Y())};var pg=Ai(98);Mg(55,1,{18:1},Qs,Rs,Ss);_.A=function Ts(a){this.n+'-'+a.n;return _j(this.n,a.n)};_.eQ=function Us(a){var b;if(this===a)return true;if(rg!=jb(a))return false;b=a;if(Lj(this.n,b.n))return true;return false};_.tS=function Vs(){return Ps(this)};_.d=0;_.f=0;_.g=0;_.k=0;var rg=Ai(55);Mg(99,1,{18:1},Zs);_.A=function $s(a){return gj(new hj(this.d.f-this.d.g),qj(a.d.f-a.d.g))};_.tS=function _s(){return this.d.o+' - '+this.d.g+' to '+this.d.f+' - current: '+this.e};_.e=0;_.f=0;_.g=0;var sg=Ai(99);Mg(47,1,{},it,jt);_.tS=function kt(){return ht(this)};_.f=false;_.j=false;var ug=Ai(47);Mg(30,57,{3:1,35:1},wt,xt,yt);_.tS=function zt(){return vt(this)};_.d=0;_.e='';_.j=false;_.k=0;var tg=Ai(30);Mg(70,1,{},Dt);var vg=Ai(70);Mg(39,1,{18:1,39:1},Et);_.A=function Ft(a){var b;if(be(a,39)){b=a;return this.f=b.f}else throw new Ak('Cannot compare Isotope to '+a)};_.tS=function Gt(){return 'Number: '+this.f+' - mass: '+this.e+' - percentage: '+this.g+' - symbol: '+this.d};_.e=0;_.f=0;_.g=0;var wg=Ai(39);var Ht,It;Mg(4,7,{3:1,7:1,9:1,4:1},Kt);var xg=Ai(4);Mg(91,1,{},St);_.d=0;_.e=0;_.j=null;_.k=0;var Lt=1;var Ag=Ai(91);Mg(48,1,{},_t,au,bu);_.e=0;var zg=Ai(48);Mg(92,1,{},du);_.ab=function eu(a,b){return cu(this,a,b)};var yg=Ai(92);var fu;Mg(93,1,{},ku);_.d=0;_.e=0;_.f=null;var Bg=Ai(93);var lu;Mg(128,1,{},ru);_.rb=function qu(){};var pu=null;var Cg=Ai(128);Mg(69,1,{18:1},Ku);_.A=function Lu(a){return Ju(this,a)};_.d=0;_.f=0;var Dg=Ai(69);Mg(16,1,{},Nu,Ou,Pu);var Eg=Ai(16);Mg(15,1,{},Tu);var Fg=Ai(15);var me=Di('I'),Fe=Ai(119),Ge=Ai(121),He=Ai(null),Ie=Ai(124),je=Di('B'),le=Di('D'),ag=Ci(),ke=Di('C');_=Rg('$wnd.CI.Chemcalc');_.analyseMF=uu;_.chargePeptide=vu;_.convertAASequence=xu;_.generatePeptideFragments=zu;_.getInfo=Au;_.mfFromMonoisotopicMass=Bu;_.aa=pu;var Uu=Qh();var gwtOnLoad=gwtOnLoad=Ph;Nh(Th);Rh('permProps',[[['user.agent','safari']]]);$sendStats('moduleStartup', 'moduleEvalEnd');gwtOnLoad(__gwtModuleFunction.__errFn, __gwtModuleFunction.__moduleName, __gwtModuleFunction.__moduleBase, __gwtModuleFunction.__softPermutationId,__gwtModuleFunction.__computePropValue);$sendStats('moduleStartup', 'end');$gwt && $gwt.permProps && __gwtModuleFunction.__moduleStartupDone($gwt.permProps);
//# sourceURL=chemcalc-0.js

        // End GWT code

        var toReturn = $wnd["CI"]["Chemcalc"];

        toReturn.version = '2.1.6';

        return toReturn;
    }

    var fakeWindow = {};

    if (typeof module !== 'undefined' && module.exports) { // NodeJS
        var timers = require('timers');
        fakeWindow.setTimeout = timers.setTimeout;
        fakeWindow.clearTimeout = timers.clearTimeout;
        fakeWindow.setInterval = timers.setInterval;
        fakeWindow.clearInterval = timers.clearInterval;
        fakeWindow.document = {};
        module.exports = getExports(fakeWindow);
    } else { // Browser
        if (true) {
            // Timer proxies
            fakeWindow.setTimeout = window.setTimeout.bind(window);
            fakeWindow.clearTimeout = window.clearTimeout.bind(window);
            fakeWindow.setInterval = window.setInterval.bind(window);
            fakeWindow.clearInterval = window.clearInterval.bind(window);
            fakeWindow.document = window.document;
        } else {
            fakeWindow = window;
        }

        if (typeof define === 'function' && define.amd) { // AMD
            define(function () {
                return getExports(fakeWindow);
            });
        } else { // Global
            var path = ["CI","Chemcalc"];
            var l = path.length - 1;
            var obj = window;
            for (var i = 0; i < l; i++) {
                obj = obj[path[i]] || (obj[path[i]] = {});
            }
            obj[path[l]] = getExports(fakeWindow);
        }
    }

})();
