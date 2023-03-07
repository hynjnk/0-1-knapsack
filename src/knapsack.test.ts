import { knapsack } from "./knapsack";

test("1つの品が入る", () => {
  const weight = [5];
  const value = [10];
  const W = 6;

  expect(knapsack(weight, value, W)).toBe(10);
});

test("1つの品が入る(境界値)", () => {
  const weight = [1];
  const value = [1];
  const W = 1;

  expect(knapsack(weight, value, W)).toBe(1);
});

test("1つの品が入らない(境界値)", () => {
  const weight = [5];
  const value = [10];
  const W = 4;

  expect(knapsack(weight, value, W)).toBe(0);
});

test("最適な品1つを選択できる", () => {
  const weight = [5, 6, 7, 8];
  const value = [5, 6, 7, 8];
  const W = 7;

  expect(knapsack(weight, value, W)).toBe(7);
});

test("0, 2", () => {
  const weight = [2, 1, 3, 2];
  const value = [3, 2, 4, 2];
  const W = 5;

  expect(knapsack(weight, value, W)).toBe(7);
});

test("0, 1, 2, 3", () => {
  const weight = [1, 2, 3, 4, 5];
  const value = [3, 4, 5, 6, 7];
  const W = 10;

  expect(knapsack(weight, value, W)).toBe(18);
});

test("1, 2", () => {
  const weight = [5, 4, 4, 5];
  const value = [10, 40, 30, 20];
  const W = 10;

  expect(knapsack(weight, value, W)).toBe(70);
});

test("大規模1", () => {
  const weight = Array(1000).fill(1);
  const value = Array(1000).fill(1);
  const W = 10000;

  expect(knapsack(weight, value, W)).toBe(1000);
});

test("大規模2", () => {
  const weight = Array(1000).fill(10);
  const value = Array(1000).fill(100);
  const W = 10000;

  expect(knapsack(weight, value, W)).toBe(100 * 1000);
});

test("大規模3", () => {
  const weight = Array(1000).fill(100);
  const value = Array(1000).fill(100);
  const W = 10000;

  expect(knapsack(weight, value, W)).toBe(100 * 100);
});
