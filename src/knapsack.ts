/**
 * 0/1 Knapsack
 *
 * n個の品物があり、i番目の品物のそれぞれ重さと価値が weight[i],value[i]となっている (i=0,1,...,n−1)。
 * これらの品物から重さの総和がWを超えないように選んだときの、価値の総和の最大値を求める
 *
 * 以下の制約を想定
 * ・1 < n <= 100
 * ・weight[i],value[i]は整数
 * ・1 <= weight[i],value[i] <= 1000
 * ・1 <= W <= 10000
 *
 * @param weight 品物の重さのarray
 * @param value 品物の価値のarray
 * @param W 重さの上限
 * @returns 価値の総和の最大値
 */
export const knapsack = (
  weight: number[],
  value: number[],
  W: number
): number => {
  const dp = Array<number>(W + 1).fill(0);

  weight.forEach((w, i) => {
    for (let j = W; j >= w; j--) {
      dp[j] = Math.max(dp[j], dp[j - w] + value[i]);
    }
  });

  return dp[W];
};
