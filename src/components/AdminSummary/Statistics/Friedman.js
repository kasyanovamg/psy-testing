import React, {useMemo, useState} from 'react';
import max from 'lodash-es/max';
import sum from 'lodash-es/sum';

const sortByCol = (a, b) => {
  a = a[0];
  b = b[0];
  return (a === b) ? 0 : (a < b) ? -1 : 1
};

const gammaln = function gammaln(x) {
  var j = 0;
  var cof = [
    76.18009172947146, -86.50532032941677, 24.01409824083091,
    -1.231739572450155, 0.1208650973866179e-2, -0.5395239384953e-5
  ];
  var ser = 1.000000000190015;
  var xx, y, tmp;
  tmp = (y = xx = x) + 5.5;
  tmp -= (xx + 0.5) * Math.log(tmp);
  for (; j < 6; j++)
    ser += cof[j] / ++y;
  return Math.log(2.5066282746310005 * ser / xx) - tmp;
};
const gammapinv = function gammapinv(p, a) {
  var j = 0;
  var a1 = a - 1;
  var EPS = 1e-8;
  var gln = gammaln(a);
  var x, err, t, u, pp, lna1, afac;

  if (p >= 1)
    return Math.max(100, a + 100 * Math.sqrt(a));
  if (p <= 0)
    return 0;
  if (a > 1) {
    lna1 = Math.log(a1);
    afac = Math.exp(a1 * (lna1 - 1) - gln);
    pp = (p < 0.5) ? p : 1 - p;
    t = Math.sqrt(-2 * Math.log(pp));
    x = (2.30753 + t * 0.27061) / (1 + t * (0.99229 + t * 0.04481)) - t;
    if (p < 0.5)
      x = -x;
    x = Math.max(1e-3,
      a * Math.pow(1 - 1 / (9 * a) - x / (3 * Math.sqrt(a)), 3));
  } else {
    t = 1 - a * (0.253 + a * 0.12);
    if (p < t)
      x = Math.pow(p / t, 1 / a);
    else
      x = 1 - Math.log(1 - (p - t) / (1 - t));
  }

  for (; j < 12; j++) {
    if (x <= 0)
      return 0;
    err = lowRegGamma(a, x) - p;
    if (a > 1)
      t = afac * Math.exp(-(x - a1) + a1 * (Math.log(x) - lna1));
    else
      t = Math.exp(-x + a1 * Math.log(x) - gln);
    u = err / t;
    x -= (t = u / (1 - 0.5 * Math.min(1, u * ((a - 1) / x - 1))));
    if (x <= 0)
      x = 0.5 * (x + t);
    if (Math.abs(t) < EPS * x)
      break;
  }

  return x;
};

function isNumber(arg) {
  return typeof arg === 'number' && arg === arg;
}

function isFunction(arg) {
  return toString.call(arg) === '[object Function]';
}

function retZero() {
  return 0;
}

const create = function create(rows, cols, func) {
  var res = new Array(rows);
  var i, j;

  if (isFunction(cols)) {
    func = cols;
    cols = rows;
  }

  for (var i = 0; i < rows; i++) {
    res[i] = new Array(cols);
    for (j = 0; j < cols; j++)
      res[i][j] = func(i, j);
  }

  return res;
};

const zeros = function zeros(rows, cols) {
  if (!isNumber(cols))
    cols = rows;
  return create(rows, cols, retZero);
};

const randn = function randn(n, m) {
  var u, v, x, y, q, mat;
  if (!m)
    m = n;
  if (n)
    return create(n, m, function () {
      return randn();
    });
  do {
    u = Math.random();
    v = 1.7156 * (Math.random() - 0.5);
    x = u - 0.449871;
    y = Math.abs(v) + 0.386595;
    q = x * x + y * (0.19600 * y - 0.25472 * x);
  } while (q > 0.27597 && (q > 0.27846 || v * v > -4 * Math.log(u) * u * u));
  return v / u;
};
const randg = function randg(shape, n, m) {
  var oalph = shape;
  var a1, a2, u, v, x, mat;
  if (!m)
    m = n;
  if (!shape)
    shape = 1;
  if (n) {
    mat = zeros(n, m);
    mat.alter(function () {
      return randg(shape);
    });
    return mat;
  }
  if (shape < 1)
    shape += 1;
  a1 = shape - 1 / 3;
  a2 = 1 / Math.sqrt(9 * a1);
  do {
    do {
      x = randn();
      v = 1 + a2 * x;
    } while (v <= 0);
    v = v * v * v;
    u = Math.random();
  } while (u > 1 - 0.331 * Math.pow(x, 4) &&
  Math.log(u) > 0.5 * x * x + a1 * (1 - v + Math.log(v)));
  // alpha > 1
  if (shape == oalph)
    return a1 * v;
  // alpha < 1
  do {
    u = Math.random();
  } while (u === 0);
  return Math.pow(u, 1 / oalph) * a1 * v;
};

// The lower regularized incomplete gamma function, usually written P(a,x)
const lowRegGamma = function lowRegGamma(a, x) {
  var aln = gammaln(a);
  var ap = a;
  var sum = 1 / a;
  var del = sum;
  var b = x + 1 - a;
  var c = 1 / 1.0e-30;
  var d = 1 / b;
  var h = d;
  var i = 1;
  // calculate maximum number of itterations required for a
  var ITMAX = -~(Math.log((a >= 1) ? a : 1 / a) * 8.5 + a * 0.4 + 17);
  var an, endval;

  if (x < 0 || a <= 0) {
    return NaN;
  } else if (x < a + 1) {
    for (; i <= ITMAX; i++) {
      sum += del *= x / ++ap;
    }
    return (sum * Math.exp(-x + a * Math.log(x) - (aln)));
  }

  for (; i <= ITMAX; i++) {
    an = -i * (i - a);
    b += 2;
    d = an * d + b;
    c = b + an / c;
    d = 1 / d;
    h *= d * c;
  }

  return (1 - h * Math.exp(-x + a * Math.log(x) - (aln)));
};


// Returns the error function erf(x)
const erf = function erf(x) {
  var cof = [-1.3026537197817094, 6.4196979235649026e-1, 1.9476473204185836e-2,
    -9.561514786808631e-3, -9.46595344482036e-4, 3.66839497852761e-4,
    4.2523324806907e-5, -2.0278578112534e-5, -1.624290004647e-6,
    1.303655835580e-6, 1.5626441722e-8, -8.5238095915e-8,
    6.529054439e-9, 5.059343495e-9, -9.91364156e-10,
    -2.27365122e-10, 9.6467911e-11, 2.394038e-12,
    -6.886027e-12, 8.94487e-13, 3.13092e-13,
    -1.12708e-13, 3.81e-16, 7.106e-15,
    -1.523e-15, -9.4e-17, 1.21e-16,
    -2.8e-17];
  var j = cof.length - 1;
  var isneg = false;
  var d = 0;
  var dd = 0;
  var t, ty, tmp, res;

  if (x < 0) {
    x = -x;
    isneg = true;
  }

  t = 2 / (2 + x);
  ty = 4 * t - 2;

  for (; j > 0; j--) {
    tmp = d;
    d = ty * d - dd + cof[j];
    dd = tmp;
  }

  res = t * Math.exp(-x * x + 0.5 * (cof[0] + ty * d) - dd);
  return isneg ? res - 1 : 1 - res;
};

const erfc = function erfc(x) {
  return 1 - erf(x);
};

const erfcinv = function erfcinv(p) {
  var j = 0;
  var x, err, t, pp;
  if (p >= 2)
    return -100;
  if (p <= 0)
    return 100;
  pp = (p < 1) ? p : 2 - p;
  t = Math.sqrt(-2 * Math.log(pp / 2));
  x = -0.70711 * ((2.30753 + t * 0.27061) /
    (1 + t * (0.99229 + t * 0.04481)) - t);
  for (; j < 2; j++) {
    err = erfc(x) - pp;
    x += err / (1.12837916709551257 * Math.exp(-x * x) - x * err);
  }
  return (p < 1) ? x : -x;
};

const chisquare = {
  pdf: function pdf(x, dof) {
    if (x < 0)
      return 0;
    return (x === 0 && dof === 2) ? 0.5 :
      Math.exp((dof / 2 - 1) * Math.log(x) - x / 2 - (dof / 2) *
        Math.log(2) - gammaln(dof / 2));
  },

  cdf: function cdf(x, dof) {
    if (x < 0)
      return 0;
    return lowRegGamma(dof / 2, x / 2);
  },

  inv: function (p, dof) {
    return 2 * gammapinv(p, 0.5 * dof);
  },

  mean: function (dof) {
    return dof;
  },

  // TODO: this is an approximation (is there a better way?)
  median: function median(dof) {
    return dof * Math.pow(1 - (2 / (9 * dof)), 3);
  },

  mode: function mode(dof) {
    return (dof - 2 > 0) ? dof - 2 : 0;
  },

  sample: function sample(dof) {
    return randg(dof / 2) * 2;
  },

  variance: function variance(dof) {
    return 2 * dof;
  }
};


const normal = {
  pdf: function pdf(x, mean, std) {
    return Math.exp(-0.5 * Math.log(2 * Math.PI) -
      Math.log(std) - Math.pow(x - mean, 2) / (2 * std * std));
  },

  cdf: function cdf(x, mean, std) {
    return 0.5 * (1 + erf((x - mean) / Math.sqrt(2 * std * std)));
  },

  inv: function (p, mean, std) {
    return -1.41421356237309505 * std * erfcinv(2 * p) + mean;
  },

  mean: function (mean, std) {
    return mean;
  },

  median: function median(mean, std) {
    return mean;
  },

  mode: function (mean, std) {
    return mean;
  },

  sample: function sample(mean, std) {
    return randn() * std + mean;
  },

  variance: function (mean, std) {
    return std * std;
  }
};

/**
 Creates the ranks table used for dependendent tests.
 */
function createRanksTableDep(v1, v2) {
  // Check if input params is valid
  if (!Array.isArray(v1)) {
    // Array of sample arrays
    throw new Error("Parameter is not a valid array");
  }
  if (!Array.isArray(v2)) {
    // Array of sample arrays
    throw new Error("Parameter is not a valid array");
  }

  // Fill ranks table with all samples
  let ranks = [];
  for (let i = 0; i < v1.length; i++) {
    let val1 = v1[i];
    let val2 = v2[i];
    let D = val1 - val2;
    let absD = Math.abs(val1 - val2);

    ranks.push([absD, D, val1, val2, 0, 0]);
  }

  // Sort by value
  ranks.sort(sortByCol);

  // Set ranks
  let r_cnt = 1;
  for (let i = 0; i < ranks.length; i++) {
    let re = ranks[i];
    if (re[0] > 0) {
      re[4] = r_cnt;
      r_cnt += 1;
    }
  }
  // Fix rank duplicates
  for (let s = 0; s < ranks.length - 1; s++) {
    // Get first entry
    let re1 = ranks[s];
    let absD1 = re1[0];
    let r_sum = re1[4];
    let cnt = 1;
    // Check if following entries have same value
    for (let e = s + 1; e < ranks.length; e++) {
      let re2 = ranks[e];
      let absD2 = re2[0];
      if (absD1 === absD2) {
        r_sum += re2[4];
        cnt += 1;
      }
    }
    // If several entries have same value, update ranks to mean rank
    if (cnt > 1) {
      let r_mean = r_sum / cnt;
      for (let i = s; i < s + cnt; i++) {
        let re = ranks[i];
        re[4] = r_mean;
      }
    }
  }
  // Set signed ranks
  for (let i = 0; i < ranks.length; i++) {
    let re = ranks[i];
    re[5] = re[4];
    if (re[1] < 0) {
      re[5] = -re[4];
    }
  }

  return ranks;
}

function wilcoxon_sr_posttest(arrs, alpha = 0.05, correction = "none") {
  // Check if input params is valid
  if (!Array.isArray(arrs)) {
    // Array of sample arrays
    throw new Error("Parameter is not a valid array");
  }
  // Number of samples
  let k = arrs.length;
  for (let i = 0; i < k; i++) {
    // Check each sample array
    if (!Array.isArray(arrs[i])) {
      throw new Error("Array " + i + " is not a valid array");
    }
  }
  if (alpha < 0 || alpha > 1) {
    throw new Error("Alpha must be between 0 and 1");
  }
  if (k < 3) {
    throw new Error("Requires three or more samples");
  }

  // Correction
  if (correction === "bonferroni") {
    let m = k * (k - 1) / 2;
    alpha = alpha / m;
  }

  // Pair-wise comparison
  let P_vals = [];
  for (let i1 = 0; i1 < k; i1++) {
    for (let i2 = i1 + 1; i2 < k; i2++) {
      // Samples
      let v1 = arrs[i1];
      let v2 = arrs[i2];

      // Create ranks table
      let ranks = createRanksTableDep(v1, v2);

      // Calculate sum of ranks and actual sample size
      let SR_pos = 0;
      let SR_neg = 0;
      let n = 0;
      for (let i = 0; i < ranks.length; i++) {
        let re = ranks[i];
        if (re[5] > 0) {
          SR_pos += re[5];
        } else {
          SR_neg += re[5];
        }
        // Actual sample size
        if (re[4] > 0) {
          n += 1;
        }
      }

      // Calculate W-score
      let W = Math.min(SR_pos, Math.abs(SR_neg));

      // Calculate approximate P-value using normal approximation (only exact for n > 25 )
      let r_mean = n * (n + 1) / 4;
      let r_SD = Math.sqrt(n * (n + 1) * (2 * n + 1) / 24);
      let Z = (W - r_mean) / r_SD;

      // Find critical Z
      let Zc = normal.inv(1 - alpha / 2, 0, 1) * -1;

      // Get P-value
      let P = normal.cdf(Z, 0, 1) * 2;

      // Result
      let res = [i1 + 1, i2 + 1, P, alpha, Z, Zc, "Z"];
      P_vals.push(res);
    }
  }
  return P_vals;
}

/**
 Performs a Friedman test.

 Params:
 arr: Array of sample arrays (3 or more samples)
 alpha: Significance level
 */
const friedman = (arrs, alpha = 0.05) => {
  // Create ranks table
  let k = arrs.length;
  let n = arrs[0].length;

  // Fill ranks table with all samples
  let ranks = [];
  for (let i = 0; i < n; i++) {
    let row = [];
    for (let s = 0; s < k; s++) {
      let v = arrs[s];
      row.push([v[i], 0, s]);
    }

    row.sort(sortByCol);

    ranks.push(row);
  }

  //Fill in ranks
  for (let i = 0; i < n; i++) {
    let row = ranks[i];
    for (let s = 0; s < k; s++) {
      let e = row[s];
      e[1] = s + 1;
    }

    //Fix rank duplicates
    for (let s = 0; s < k - 1; s++) {
      let e = row[s];
      let cVal = e[0];

      //Check next ranks
      let rankSum = e[1];
      let cnt = 1;
      //Calculate mean ranks
      for (let p = s + 1; p < k; p++) {
        let en = row[p];
        let nVal = en[0];
        if (nVal == cVal) {
          rankSum += en[1];
          cnt++;
        }
      }
      let meanRank = rankSum / cnt;
      //Update ranks for duplicates
      if (cnt > 1) {
        for (let p = s; p < k; p++) {
          let en = row[p];
          let nVal = en[0];
          if (nVal == cVal) {
            en[1] = meanRank;
          }
        }
      }
    }
  }
  //Rankings table done!

  // Number of samples
  let totalN = ranks.length;

  // Calculate R-scores
  let R = new Array(k).fill(0);
  for (let i = 0; i < n; i++) {
    let row = ranks[i];
    for (let s = 0; s < k; s++) {
      let e = row[s];
      // Sum ranks for each sample
      R[e[2]] += e[1];
    }
  }

  let R_sum = 0;
  for (let s = 0; s < k; s++) {
    R_sum += Math.pow(R[s], 2);
  }

  //Calculate Q-score
  let Q = 12 / (n * k * (k + 1)) * R_sum - 3 * n * (k + 1);

  // Find critical Q-value
  let DF = k - 1;
  let Qc = chisquare.inv(1 - alpha, DF);
  // P-value
  let P = 1 - chisquare.cdf(Q, DF);

  return [P, Q, Qc];
};

const getArrays = (no, res) => {
  const final = {};
  for (let i = 0; i < no; i++) {
    final[i] = res.filter(res => res.attempt === i + 1).map(r => r.result)
  }
  return Object.values(final);
};

const fill_descriptive_stats = (arrs) => {
  const meanf = function mean(arr) {
    return sum(arr) / arr.length;
  };
  const sumsqerr = function sumsqerr(arr) {
    const mean = meanf(arr);
    let sum = 0;
    let i = arr.length;
    let tmp;
    while (--i >= 0) {
      tmp = arr[i] - mean;
      sum += tmp * tmp;
    }
    return sum;
  };
  const variance = function variance(arr, flag) {
    return sumsqerr(arr) / (arr.length - (flag ? 1 : 0));
  };
  const stdev = function stdev(arr, flag) {
    return Math.sqrt(variance(arr, flag));
  };
  return arrs.map(ar =>
    ({
      len: ar.length,
      mean: sum(ar) / ar.length,
      stdev: stdev(ar, true)
    })
  )
};

export const Friedman = ({results}) => {
  //console.log(results);
  const [descriptiveStats, fillDescriptiveStats] = useState([]);
  const [result, setRes] = useState([]);
  const [ptest, setPtest] = useState([]);

  const run_friedman = () => {
    // Returns the number of samples
    const no = max(Object.values(results).map(arr => arr.attempt));

    // Get sample arrays
    const arrs = getArrays(no, results);

    // Fill in descriptice statistics
    const stats = fill_descriptive_stats(arrs);
    useMemo(() => fillDescriptiveStats(stats), [results]);

    // Significance level, alpha, CHANGE MANUALLY!
    const alpha = 0.05;

    // Run Kruskal-Wallis
    let res = !!arrs.length && friedman(arrs, alpha);
    if (!!arrs.length) res.unshift(alpha);
    useMemo(() => setRes(res), [results]);
    let P_vals = [];

    // Run post-test if significant differences
    if (result[1] <= alpha) {
      P_vals = wilcoxon_sr_posttest(arrs, alpha, "none");
    }
    useMemo(() => setPtest(P_vals), [results, result]);
  };

  run_friedman();

  return <div>
    <h3>Friedman</h3>
    <table>
      <thead>
      <tr>
        <th colSpan={4}>Data Summary</th>
      </tr>
      <tr>
        <th width="70">Попытка</th>
        <th width="40">N</th>
        <th width="100">Mean</th>
        <th width="100">Stdev</th>
      </tr>
      </thead>
      <tbody id="summary">
      {
        descriptiveStats.map((stat, i) =>
          <tr key={i}>
            <th>{i + 1}</th>
            <td id="n1">{stat.len}</td>
            <td id="mean1">{stat.mean.toFixed(2)}</td>
            <td id="stdev1">{stat.stdev.toFixed(2)}</td>
          </tr>
        )
      }
      </tbody>
    </table>

    <table>
      <thead>
      <tr>
        <th colSpan="2">Result</th>
      </tr>
      </thead>
      <tbody>
      <tr>
        <td className="dark" width="150"><b>Significance level α:</b></td>
        <td className="border" width="720" id="sign_level">{result[0]}</td>
      </tr>
      <tr>
        <td className="dark"><b>P-value:</b></td>
        <td className="border" id="p">{result[1]}</td>
      </tr>
      <tr>
        <td className="dark"><b>Q-score:</b></td>
        <td className="border" id="q">{result[2]} - Reject H<sub>0</sub> (accept H<sub>1</sub>) if Q > {result[3]}
        </td>
      </tr>
      <tr>
        <td className="dark"><b>Result:</b></td>
        <td className="border"
            id="res">{result[1] <= result[0] ? "Есть существенная разница" : "Нет существенной разницы"}</td>
      </tr>
      </tbody>
    </table>

    <h3>Post test</h3>
    The post-test shows which pairs of samples that have different means (if any).
    <h4>Wilcoxon signed-ranks pair-wise post-test</h4>
    <table>
      <thead>
      <tr>
        <th width='70'>Pair</th>
        <th width='350'>Score</th>
        <th width='80'>P-value</th>
        <th width='80'>Alpha</th>
        <th width='150'>Result</th>
      </tr>
      </thead>
      <tbody>
      {ptest.map(
        (res, i) =>
          <tr key={i}>
            <th className='dark'>{res[0] + " - " + res[1]}</th>
            <td>{res[6] + "-score: " + res[4]+ ", difference if " + res[6] +
              " < " + res[5]}</td>
            <td className='border'>{res[2]}</td>
            <td className='border'>{res[3]}</td>
            <td>{res[2] <= res[3] ? "Есть существенная разница" : "Нет существенной разницы" }</td>
          </tr>
      )}
      </tbody>
    </table>
  </div>
}