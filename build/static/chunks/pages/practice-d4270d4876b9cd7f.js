(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[991],{1342:function(n,i,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/practice",function(){return t(3253)}])},9090:function(n,i,t){"use strict";t.d(i,{Cb:function(){return a},KQ:function(){return r},Vs:function(){return l},c:function(){return e},gf:function(){return d},js:function(){return o}});let r=["all","c","js","java","python"],e=[{lang:"c",title:"gugudan",code:["#include <stdio.h>","int main() {","for (int i = 1; i <= 9; i++) {",'printf("%d단:\n", i);',"for (int j = 1; j <= 9; j++) {",'printf("%d x %d = %d\n", i, j, i * j);',"}",'printf("\n");',"}","return 0;","}"]},{lang:"c",title:"diamond",code:["#include <stdio.h>","void printDiamond(int n) {","for (int i = 1; i <= n; i++) {","for (int j = n; j > i; j--) {",'printf(" ");',"}","for (int k = 1; k <= (2 * i - 1); k++) {",'printf("*");',"}",'printf("\n");',"}","for (int i = n - 1; i > 0; i--) {","for (int j = n; j > i; j--) {",'printf(" ");',"}","for (int k = 1; k <= (2 * i - 1); k++) {",'printf("*");',"}",'printf("\n");',"}","}","int main() {","int n = 5;","printDiamond(n);","return 0;","}"]}],o=[{lang:"js",title:"gugudan",code:["const Gugudan() => {","for (let i = 2; i <= 9; i++) {","console.log(`--- ${i}단 ---`);","for (let j = 1; j <= 9; j++) {","console.log(`${i} x ${j} = ${i * j}`); ","}","console.log(' ');","}","}"]},{lang:"js",title:"diamond",code:["function printDiamond(n) {","for (let i = 1; i <= n; i++) {","let line = ' '.repeat(n - i) + '*'.repeat(2 * i - 1);","console.log(line);","}","for (let i = n - 1; i > 0; i--) {","let line = ' '.repeat(n - i) + '*'.repeat(2 * i - 1);","console.log(line);","}","}"]}],a=[{lang:"java",title:"gugudan",code:["public class Gugudan {","public static void main(String[] args) {","for (int i = 1; i <= 9; i++) {",'System.out.println(i + "단:");',"for (int j = 1; j <= 9; j++) {",'System.out.printf("%d x %d = %d%n", i, j, i * j);',"}","System.out.println();","}","}","}"]},{lang:"java",title:"diamond",code:["public class Diamond {","public static void printDiamond(int n) {","for (int i = 1; i <= n; i++) {","for (int j = n; j > i; j--) {",'System.out.print(" ");',"}","for (int k = 1; k <= (2 * i - 1); k++) {",'System.out.print("*");',"}","System.out.println();","}","for (int i = n - 1; i > 0; i--) {","for (int j = n; j > i; j--) {",'System.out.print(" ");',"}","for (int k = 1; k <= (2 * i - 1); k++) {",'System.out.print("*");',"}","System.out.println();","}","}","public static void main(String[] args) {","int n = 5;","printDiamond(n);","}","}"]}],l=[{lang:"python",title:"gugudan",code:["def print_gugudan():","for i in range(1, 10):",'print(f"{i}단:")',"for j in range(1, 10):",'print(f"{i} x {j} = {i * j}")',"print()","print_gugudan()"]},{lang:"python",title:"diamond",code:["def print_diamond(n):","for i in range(1, n + 1):","line = ' ' * (n - i) + '*' * (2 * i - 1)","print(line)","for i in range(n - 1, 0, -1):","line = ' ' * (n - i) + '*' * (2 * i - 1)","print(line)","n = 5","print_diamond(n)"]}],d=[...e,...o,...a,...l]},3253:function(n,i,t){"use strict";t.r(i),t.d(i,{default:function(){return b}});var r=t(5893),e=t(9090),o=t(7297),a=t(5480);function l(){let n=(0,o.Z)(["\n  display: grid;\n  grid-gap: 20px;\n  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));\n  padding: 20px;\n\n  .item {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    padding: 20px;\n    background-color: #ffffff;\n    border-radius: 8px;\n    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);\n    transition: transform 0.3s ease, box-shadow 0.3s ease;\n    cursor: pointer;\n\n    &:hover {\n      transform: translateY(-5px);\n      box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);\n    }\n\n    .lang {\n      font-size: 1.5rem;\n      font-weight: bold;\n      margin-bottom: 10px;\n      text-transform: uppercase;\n      color: #333;\n      border-bottom: 2px solid #007bff;\n      padding-bottom: 5px;\n    }\n\n    .title {\n      font-size: 1rem;\n      color: #555;\n    }\n  }\n"]);return l=function(){return n},n}let d=a.ZP.div(l());var c=t(1163);let s=n=>{let i=(0,c.useRouter)(),t=n=>{i.push({pathname:"/practice/typing/".concat(n.lang),query:{title:n.title}})},o="all"===n.select||0===n.select.length?e.gf:e.gf.filter(i=>i.lang===n.select);return(0,r.jsx)(d,{children:(0,r.jsx)(r.Fragment,{children:null==o?void 0:o.map((n,i)=>(0,r.jsxs)("div",{onClick:()=>{t(n)},className:"item",children:[(0,r.jsx)("div",{className:"lang",children:n.lang}),(0,r.jsx)("div",{className:"title",children:n.title})]},i+"data"))})})};function f(){let n=(0,o.Z)(["\n  max-width: 1200px;\n  margin: 0 auto;\n  padding-top: 60px;\n  padding-bottom: 40px;\n  height: 100vh;\n  background-color: #f5f5f5;\n\n  .categorys {\n    margin: 0 auto;\n    margin-bottom: 40px;\n    padding: 10px;\n    width: 90%;\n    max-width: 1000px;\n  }\n\n  .items {\n    width: 90%;\n    max-width: 1000px;\n    margin: 0 auto;\n  }\n"]);return f=function(){return n},n}let u=a.ZP.div(f());function p(){let n=(0,o.Z)(["\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n  width: 100%;\n  height: 60px;\n  padding: 0 10px;\n  background-color: #fff;\n  border-radius: 8px;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n  margin: 0 auto;\n\n  p {\n    width: 120px;\n    height: 40px;\n    line-height: 40px;\n    text-align: center;\n    border: 1px solid #007bff;\n    border-radius: 20px;\n    background-color: #e3f2fd;\n    color: #007bff;\n    cursor: pointer;\n    transition: background-color 0.3s ease, color 0.3s ease, border-color 0.3s ease;\n\n    &:hover {\n      background-color: #007bff;\n      color: #fff;\n      border-color: #007bff;\n    }\n\n    &:active {\n      background-color: #0056b3;\n      color: #fff;\n    }\n  }\n"]);return p=function(){return n},n}let g=a.ZP.div(p()),m=n=>(0,r.jsx)(g,{children:null===e.KQ||void 0===e.KQ?void 0:e.KQ.map((i,t)=>(0,r.jsx)("p",{onClick:()=>n.SelectLang(i),children:i},t+"category"))});var x=t(7294);let j=()=>{let[n,i]=(0,x.useState)(""),t=n=>{i(n)};return(0,r.jsxs)(u,{children:[(0,r.jsx)("div",{className:"categorys",children:(0,r.jsx)(m,{SelectLang:t})}),(0,r.jsx)("div",{className:"items",children:(0,r.jsx)(s,{select:n})})]})},h=()=>(0,r.jsx)(j,{});var b=h}},function(n){n.O(0,[774,888,179],function(){return n(n.s=1342)}),_N_E=n.O()}]);