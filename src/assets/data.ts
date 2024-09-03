export const lang: any = ['c', 'js', 'java', 'python'];

export const c: any = [
  {
    lang: 'c',
    title: 'gugudan',
    code: [
      '#include <stdio.h>',
      'int main() {',
      'for (int i = 1; i <= 9; i++) {',
      'printf("%d단:\n", i);',
      'for (int j = 1; j <= 9; j++) {',
      'printf("%d x %d = %d\n", i, j, i * j);',
      '}',
      'printf("\n");',
      '}',
      'return 0;',
      '}',
    ],
  },
  {
    lang: 'c',
    title: 'diamond',
    code: [
      '#include <stdio.h>',
      'void printDiamond(int n) {',
      'for (int i = 1; i <= n; i++) {',
      'for (int j = n; j > i; j--) {',
      'printf(" ");',
      '}',
      'for (int k = 1; k <= (2 * i - 1); k++) {',
      'printf("*");',
      '}',
      'printf("\n");',
      '}',
      'for (int i = n - 1; i > 0; i--) {',
      'for (int j = n; j > i; j--) {',
      'printf(" ");',
      '}',
      'for (int k = 1; k <= (2 * i - 1); k++) {',
      'printf("*");',
      '}',
      'printf("\n");',
      '}',
      '}',
      'int main() {',
      'int n = 5;',
      'printDiamond(n);',
      'return 0;',
      '}',
    ],
  },
];

export const js: any = [
  {
    lang: 'js',
    title: 'gugudan',
    code: [
      'const Gugudan() => {',
      'for (let i = 2; i <= 9; i++) {',
      'console.log(`--- ${i}단 ---`);',
      'for (let j = 1; j <= 9; j++) {',
      'console.log(`${i} x ${j} = ${i * j}`); ',
      '}',
      `console.log(' ');`,
      '}',
      '}',
    ],
  },
  {
    lang: 'js',
    title: 'diamond',
    code: ['function printDiamond(n) {', 'for (let i = 1; i <= n; i++) {', 'let line = ' '.repeat(n - i) + '*'.repeat(2 * i - 1);', ''],
  },
];

export const java: any = [
  {
    lang: 'java',
    title: 'gugudan',
    code: [
      'public class Gugudan {',
      'public static void main(String[] args) {',
      'for (int i = 1; i <= 9; i++) {',
      'System.out.println(i + "단:");',
      'for (int j = 1; j <= 9; j++) {',
      'System.out.printf("%d x %d = %d%n", i, j, i * j);',
      '}',
      'System.out.println();',
      '}',
      '}',
      '}',
    ],
  },
];

export const python: any = [
  {
    lang: 'python',
    title:'gugudan',
    code: [
      'def print_gugudan():',
      'for i in range(1, 10):',
      'print(f"{i}단:")',
      'for j in range(1, 10):',
      'print(f"{i} x {j} = {i * j}")',
      'print()',
      'print_gugudan()',
    ],
  },
];