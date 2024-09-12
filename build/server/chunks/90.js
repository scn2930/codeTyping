"use strict";
exports.id = 90;
exports.ids = [90];
exports.modules = {

/***/ 90:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Cb": () => (/* binding */ java),
/* harmony export */   "KQ": () => (/* binding */ lang),
/* harmony export */   "Vs": () => (/* binding */ python),
/* harmony export */   "c": () => (/* binding */ c),
/* harmony export */   "gf": () => (/* binding */ codeData),
/* harmony export */   "js": () => (/* binding */ js)
/* harmony export */ });
const lang = [
    "all",
    "c",
    "js",
    "java",
    "python"
];
const c = [
    {
        lang: "c",
        title: "gugudan",
        code: [
            "#include <stdio.h>",
            "int main() {",
            "for (int i = 1; i <= 9; i++) {",
            'printf("%d단:\n", i);',
            "for (int j = 1; j <= 9; j++) {",
            'printf("%d x %d = %d\n", i, j, i * j);',
            "}",
            'printf("\n");',
            "}",
            "return 0;",
            "}"
        ]
    },
    {
        lang: "c",
        title: "diamond",
        code: [
            "#include <stdio.h>",
            "void printDiamond(int n) {",
            "for (int i = 1; i <= n; i++) {",
            "for (int j = n; j > i; j--) {",
            'printf(" ");',
            "}",
            "for (int k = 1; k <= (2 * i - 1); k++) {",
            'printf("*");',
            "}",
            'printf("\n");',
            "}",
            "for (int i = n - 1; i > 0; i--) {",
            "for (int j = n; j > i; j--) {",
            'printf(" ");',
            "}",
            "for (int k = 1; k <= (2 * i - 1); k++) {",
            'printf("*");',
            "}",
            'printf("\n");',
            "}",
            "}",
            "int main() {",
            "int n = 5;",
            "printDiamond(n);",
            "return 0;",
            "}"
        ]
    }
];
const js = [
    {
        lang: "js",
        title: "gugudan",
        code: [
            "const Gugudan() => {",
            "for (let i = 2; i <= 9; i++) {",
            "console.log(`--- ${i}단 ---`);",
            "for (let j = 1; j <= 9; j++) {",
            "console.log(`${i} x ${j} = ${i * j}`); ",
            "}",
            `console.log(' ');`,
            "}",
            "}"
        ]
    },
    {
        lang: "js",
        title: "diamond",
        code: [
            "function printDiamond(n) {",
            "for (let i = 1; i <= n; i++) {",
            `let line = ' '.repeat(n - i) + '*'.repeat(2 * i - 1);`,
            "console.log(line);",
            "}",
            "for (let i = n - 1; i > 0; i--) {",
            `let line = ' '.repeat(n - i) + '*'.repeat(2 * i - 1);`,
            "console.log(line);",
            "}",
            "}"
        ]
    }
];
const java = [
    {
        lang: "java",
        title: "gugudan",
        code: [
            "public class Gugudan {",
            "public static void main(String[] args) {",
            "for (int i = 1; i <= 9; i++) {",
            'System.out.println(i + "단:");',
            "for (int j = 1; j <= 9; j++) {",
            'System.out.printf("%d x %d = %d%n", i, j, i * j);',
            "}",
            "System.out.println();",
            "}",
            "}",
            "}"
        ]
    },
    {
        lang: "java",
        title: "diamond",
        code: [
            "public class Diamond {",
            "public static void printDiamond(int n) {",
            "for (int i = 1; i <= n; i++) {",
            "for (int j = n; j > i; j--) {",
            'System.out.print(" ");',
            "}",
            "for (int k = 1; k <= (2 * i - 1); k++) {",
            'System.out.print("*");',
            "}",
            "System.out.println();",
            "}",
            "for (int i = n - 1; i > 0; i--) {",
            "for (int j = n; j > i; j--) {",
            'System.out.print(" ");',
            "}",
            "for (int k = 1; k <= (2 * i - 1); k++) {",
            'System.out.print("*");',
            "}",
            "System.out.println();",
            "}",
            "}",
            "public static void main(String[] args) {",
            "int n = 5;",
            "printDiamond(n);",
            "}",
            "}"
        ]
    }
];
const python = [
    {
        lang: "python",
        title: "gugudan",
        code: [
            "def print_gugudan():",
            "for i in range(1, 10):",
            'print(f"{i}단:")',
            "for j in range(1, 10):",
            'print(f"{i} x {j} = {i * j}")',
            "print()",
            "print_gugudan()"
        ]
    },
    {
        lang: "python",
        title: "diamond",
        code: [
            "def print_diamond(n):",
            "for i in range(1, n + 1):",
            `line = ' ' * (n - i) + '*' * (2 * i - 1)`,
            "print(line)",
            "for i in range(n - 1, 0, -1):",
            `line = ' ' * (n - i) + '*' * (2 * i - 1)`,
            "print(line)",
            "n = 5",
            "print_diamond(n)"
        ]
    }
];
const codeData = [
    ...c,
    ...js,
    ...java,
    ...python
];


/***/ })

};
;