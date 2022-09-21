window.BENCHMARK_DATA = {
  "lastUpdate": 1663771060225,
  "repoUrl": "https://github.com/julienCALISTO/Perceval",
  "entries": {
    "Python Benchmark with pytest-benchmark": [
      {
        "commit": {
          "author": {
            "name": "Julien Calisto",
            "username": "julienCALISTO",
            "email": "julien.calisto@quandela.com"
          },
          "committer": {
            "name": "Julien Calisto",
            "username": "julienCALISTO",
            "email": "julien.calisto@quandela.com"
          },
          "id": "a8c1eac2f16b80f197769bfa169338616af7957f",
          "message": "test benchmark on PCVL-180",
          "timestamp": "2022-09-21T14:32:24Z",
          "url": "https://github.com/julienCALISTO/Perceval/commit/a8c1eac2f16b80f197769bfa169338616af7957f"
        },
        "date": 1663771058672,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmark/benchmark_bosonsampling.py::test_bosonsampling_clifford_6",
            "value": 74.80874078603284,
            "unit": "iter/sec",
            "range": "stddev: 0.00010727522571550304",
            "extra": "mean: 13.367421901408411 msec\nrounds: 71"
          },
          {
            "name": "benchmark/benchmark_bosonsampling.py::test_bosonsampling_slos_6",
            "value": 3.149786689232394,
            "unit": "iter/sec",
            "range": "stddev: 0.02049995464322917",
            "extra": "mean: 317.48181659999995 msec\nrounds: 5"
          },
          {
            "name": "benchmark/benchmark_bosonsampling.py::test_bosonsampling_naive_6",
            "value": 1.1221966582307266,
            "unit": "iter/sec",
            "range": "stddev: 0.06191661217795048",
            "extra": "mean: 891.1094081999996 msec\nrounds: 5"
          },
          {
            "name": "benchmark/benchmark_bosonsampling.py::test_bosonsampling_clifford_8",
            "value": 205.1694181418423,
            "unit": "iter/sec",
            "range": "stddev: 0.000019226900084281754",
            "extra": "mean: 4.874020743718529 msec\nrounds: 199"
          },
          {
            "name": "benchmark/benchmark_bosonsampling.py::test_bosonsampling_slos_8",
            "value": 1.0550744928751472,
            "unit": "iter/sec",
            "range": "stddev: 0.1327074831618745",
            "extra": "mean: 947.8003750000006 msec\nrounds: 5"
          },
          {
            "name": "benchmark/benchmark_bosonsampling.py::test_bosonsampling_naive_8",
            "value": 0.24402389002394884,
            "unit": "iter/sec",
            "range": "stddev: 0.44214893268147176",
            "extra": "mean: 4.097959424800001 sec\nrounds: 5"
          },
          {
            "name": "benchmark/benchmark_stepper.py::test_stepper",
            "value": 0.7599003570139863,
            "unit": "iter/sec",
            "range": "stddev: 0.001110662883622553",
            "extra": "mean: 1.3159620083999968 sec\nrounds: 5"
          },
          {
            "name": "benchmark/benchmark_stepper.py::test_stepper_comp_naive",
            "value": 325.6164533384267,
            "unit": "iter/sec",
            "range": "stddev: 0.00006279743355174011",
            "extra": "mean: 3.0710978814103673 msec\nrounds: 312"
          },
          {
            "name": "benchmark/benchmark_stepper.py::test_stepper_comp_direct",
            "value": 174.11341138925306,
            "unit": "iter/sec",
            "range": "stddev: 0.00002081638997011223",
            "extra": "mean: 5.743382959537624 msec\nrounds: 173"
          }
        ]
      }
    ]
  }
}