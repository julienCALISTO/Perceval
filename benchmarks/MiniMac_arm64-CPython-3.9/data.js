window.BENCHMARK_DATA = {
  "lastUpdate": 1663766404791,
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
          "id": "cdc94cff9502565397e1157595a56a7ac60696ae",
          "message": "not push into branche",
          "timestamp": "2022-09-21T08:23:38Z",
          "url": "https://github.com/julienCALISTO/Perceval/commit/cdc94cff9502565397e1157595a56a7ac60696ae"
        },
        "date": 1663750869885,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmark/benchmark_bosonsampling.py::test_bosonsampling_clifford_6",
            "value": 74.75985060416409,
            "unit": "iter/sec",
            "range": "stddev: 0.00010663304625993899",
            "extra": "mean: 13.376163701754383 msec\nrounds: 57"
          },
          {
            "name": "benchmark/benchmark_bosonsampling.py::test_bosonsampling_slos_6",
            "value": 11.28619741329517,
            "unit": "iter/sec",
            "range": "stddev: 0.004939141623895429",
            "extra": "mean: 88.60380191666657 msec\nrounds: 12"
          },
          {
            "name": "benchmark/benchmark_bosonsampling.py::test_bosonsampling_naive_6",
            "value": 1.4174481893884228,
            "unit": "iter/sec",
            "range": "stddev: 0.011191394182087958",
            "extra": "mean: 705.4931584000002 msec\nrounds: 5"
          },
          {
            "name": "benchmark/benchmark_bosonsampling.py::test_bosonsampling_clifford_8",
            "value": 205.76625617448354,
            "unit": "iter/sec",
            "range": "stddev: 0.00001917355452372642",
            "extra": "mean: 4.859883338461629 msec\nrounds: 195"
          },
          {
            "name": "benchmark/benchmark_bosonsampling.py::test_bosonsampling_slos_8",
            "value": 4.364161804908962,
            "unit": "iter/sec",
            "range": "stddev: 0.025562520221625428",
            "extra": "mean: 229.13907519999947 msec\nrounds: 5"
          },
          {
            "name": "benchmark/benchmark_bosonsampling.py::test_bosonsampling_naive_8",
            "value": 0.2810909901103886,
            "unit": "iter/sec",
            "range": "stddev: 0.4228075469499848",
            "extra": "mean: 3.5575668918 sec\nrounds: 5"
          },
          {
            "name": "benchmark/benchmark_stepper.py::test_stepper",
            "value": 0.7668328045978969,
            "unit": "iter/sec",
            "range": "stddev: 0.0010481955449823815",
            "extra": "mean: 1.304065233 sec\nrounds: 5"
          },
          {
            "name": "benchmark/benchmark_stepper.py::test_stepper_comp_naive",
            "value": 580.5241382185953,
            "unit": "iter/sec",
            "range": "stddev: 0.000030287211330133656",
            "extra": "mean: 1.722581257462634 msec\nrounds: 536"
          },
          {
            "name": "benchmark/benchmark_stepper.py::test_stepper_comp_direct",
            "value": 181.27416157980957,
            "unit": "iter/sec",
            "range": "stddev: 0.00001627819230310546",
            "extra": "mean: 5.516506000000061 msec\nrounds: 180"
          }
        ]
      },
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
          "id": "0e3ab44e51a2ef3066d5690a3a6bfc033e439dcc",
          "message": "build quandelibc arm64 py 3.9.v2",
          "timestamp": "2022-09-21T13:16:05Z",
          "url": "https://github.com/julienCALISTO/Perceval/commit/0e3ab44e51a2ef3066d5690a3a6bfc033e439dcc"
        },
        "date": 1663766402759,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmark/benchmark_bosonsampling.py::test_bosonsampling_clifford_6",
            "value": 74.02764134692653,
            "unit": "iter/sec",
            "range": "stddev: 0.00011292188459648792",
            "extra": "mean: 13.508467672413797 msec\nrounds: 58"
          },
          {
            "name": "benchmark/benchmark_bosonsampling.py::test_bosonsampling_slos_6",
            "value": 3.2461138592848084,
            "unit": "iter/sec",
            "range": "stddev: 0.007458585325460917",
            "extra": "mean: 308.06066680000015 msec\nrounds: 5"
          },
          {
            "name": "benchmark/benchmark_bosonsampling.py::test_bosonsampling_naive_6",
            "value": 1.1624132964088167,
            "unit": "iter/sec",
            "range": "stddev: 0.0460429975738418",
            "extra": "mean: 860.2792165999997 msec\nrounds: 5"
          },
          {
            "name": "benchmark/benchmark_bosonsampling.py::test_bosonsampling_clifford_8",
            "value": 203.85485578745278,
            "unit": "iter/sec",
            "range": "stddev: 0.000020719428814365645",
            "extra": "mean: 4.905450969696989 msec\nrounds: 198"
          },
          {
            "name": "benchmark/benchmark_bosonsampling.py::test_bosonsampling_slos_8",
            "value": 0.9688713657745753,
            "unit": "iter/sec",
            "range": "stddev: 0.11850655055112302",
            "extra": "mean: 1.0321287586000012 sec\nrounds: 5"
          },
          {
            "name": "benchmark/benchmark_bosonsampling.py::test_bosonsampling_naive_8",
            "value": 0.2288446987895949,
            "unit": "iter/sec",
            "range": "stddev: 0.6805241938406758",
            "extra": "mean: 4.3697756831999985 sec\nrounds: 5"
          },
          {
            "name": "benchmark/benchmark_stepper.py::test_stepper",
            "value": 0.7672270672185278,
            "unit": "iter/sec",
            "range": "stddev: 0.001946020017814274",
            "extra": "mean: 1.3033951000000001 sec\nrounds: 5"
          },
          {
            "name": "benchmark/benchmark_stepper.py::test_stepper_comp_naive",
            "value": 327.3937347237848,
            "unit": "iter/sec",
            "range": "stddev: 0.00006568136002645824",
            "extra": "mean: 3.054426196773982 msec\nrounds: 310"
          },
          {
            "name": "benchmark/benchmark_stepper.py::test_stepper_comp_direct",
            "value": 174.6952870891225,
            "unit": "iter/sec",
            "range": "stddev: 0.00001857719928737278",
            "extra": "mean: 5.7242528786128055 msec\nrounds: 173"
          }
        ]
      }
    ]
  }
}