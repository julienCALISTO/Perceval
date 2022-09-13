window.BENCHMARK_DATA = {
  "lastUpdate": 1663074765796,
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
          "id": "40f7501948bbbebf2aeec52066871643ecade9a3",
          "message": "Merge branch 'benchmark_test' of github.com:julienCALISTO/Perceval into benchmark_test",
          "timestamp": "2022-09-13T13:10:20Z",
          "url": "https://github.com/julienCALISTO/Perceval/commit/40f7501948bbbebf2aeec52066871643ecade9a3"
        },
        "date": 1663074764190,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmark/benchmark_bosonsampling.py::test_bosonsampling_clifford_6",
            "value": 74.8839369582004,
            "unit": "iter/sec",
            "range": "stddev: 0.00009396866759119621",
            "extra": "mean: 13.35399874285712 msec\nrounds: 70"
          },
          {
            "name": "benchmark/benchmark_bosonsampling.py::test_bosonsampling_slos_6",
            "value": 11.855440707444652,
            "unit": "iter/sec",
            "range": "stddev: 0.005381056780703668",
            "extra": "mean: 84.34945816666668 msec\nrounds: 12"
          },
          {
            "name": "benchmark/benchmark_bosonsampling.py::test_bosonsampling_naive_6",
            "value": 1.4593368017753015,
            "unit": "iter/sec",
            "range": "stddev: 0.051120778949528045",
            "extra": "mean: 685.2427752000001 msec\nrounds: 5"
          },
          {
            "name": "benchmark/benchmark_bosonsampling.py::test_bosonsampling_clifford_8",
            "value": 204.33555672563793,
            "unit": "iter/sec",
            "range": "stddev: 0.000025817732012356418",
            "extra": "mean: 4.893910859296523 msec\nrounds: 199"
          },
          {
            "name": "benchmark/benchmark_bosonsampling.py::test_bosonsampling_slos_8",
            "value": 4.146672648247492,
            "unit": "iter/sec",
            "range": "stddev: 0.037574257379902325",
            "extra": "mean: 241.15720839999994 msec\nrounds: 5"
          },
          {
            "name": "benchmark/benchmark_bosonsampling.py::test_bosonsampling_naive_8",
            "value": 0.2728990446645521,
            "unit": "iter/sec",
            "range": "stddev: 0.5151060702450144",
            "extra": "mean: 3.664358742 sec\nrounds: 5"
          },
          {
            "name": "benchmark/benchmark_stepper.py::test_stepper",
            "value": 0.7691301316295674,
            "unit": "iter/sec",
            "range": "stddev: 0.0009202411435189188",
            "extra": "mean: 1.3001700997999976 sec\nrounds: 5"
          },
          {
            "name": "benchmark/benchmark_stepper.py::test_stepper_comp_naive",
            "value": 596.3079127512449,
            "unit": "iter/sec",
            "range": "stddev: 0.000030290191075065756",
            "extra": "mean: 1.6769859641576799 msec\nrounds: 558"
          },
          {
            "name": "benchmark/benchmark_stepper.py::test_stepper_comp_direct",
            "value": 185.56748071578,
            "unit": "iter/sec",
            "range": "stddev: 0.000019898214616171075",
            "extra": "mean: 5.388875228260636 msec\nrounds: 184"
          }
        ]
      }
    ]
  }
}