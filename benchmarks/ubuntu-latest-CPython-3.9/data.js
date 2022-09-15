window.BENCHMARK_DATA = {
  "lastUpdate": 1663229807462,
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
          "id": "f871c450726604faa37943b62a3f69734b3ae66d",
          "message": "alert modif.v4",
          "timestamp": "2022-09-15T08:13:25Z",
          "url": "https://github.com/julienCALISTO/Perceval/commit/f871c450726604faa37943b62a3f69734b3ae66d"
        },
        "date": 1663229807072,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmark/benchmark_bosonsampling.py::test_bosonsampling_clifford_6",
            "value": 10.601222495777806,
            "unit": "iter/sec",
            "range": "stddev: 0.007066502908443219",
            "extra": "mean: 94.32874372727053 msec\nrounds: 11"
          },
          {
            "name": "benchmark/benchmark_bosonsampling.py::test_bosonsampling_slos_6",
            "value": 3.3217468522195763,
            "unit": "iter/sec",
            "range": "stddev: 0.013349160934979077",
            "extra": "mean: 301.0464205999938 msec\nrounds: 5"
          },
          {
            "name": "benchmark/benchmark_bosonsampling.py::test_bosonsampling_naive_6",
            "value": 0.42905710617410386,
            "unit": "iter/sec",
            "range": "stddev: 0.15119777680078467",
            "extra": "mean: 2.3306920817999868 sec\nrounds: 5"
          },
          {
            "name": "benchmark/benchmark_bosonsampling.py::test_bosonsampling_clifford_8",
            "value": 33.07533744815764,
            "unit": "iter/sec",
            "range": "stddev: 0.0027220724980159426",
            "extra": "mean: 30.234007485710535 msec\nrounds: 35"
          },
          {
            "name": "benchmark/benchmark_bosonsampling.py::test_bosonsampling_slos_8",
            "value": 1.2252387116286225,
            "unit": "iter/sec",
            "range": "stddev: 0.12191177555362581",
            "extra": "mean: 816.1674867999977 msec\nrounds: 5"
          },
          {
            "name": "benchmark/benchmark_bosonsampling.py::test_bosonsampling_naive_8",
            "value": 0.09969264116906372,
            "unit": "iter/sec",
            "range": "stddev: 1.7067400260198593",
            "extra": "mean: 10.030830643799982 sec\nrounds: 5"
          },
          {
            "name": "benchmark/benchmark_stepper.py::test_stepper",
            "value": 0.18661856753237696,
            "unit": "iter/sec",
            "range": "stddev: 0.06916226556814621",
            "extra": "mean: 5.3585236089999855 sec\nrounds: 5"
          },
          {
            "name": "benchmark/benchmark_stepper.py::test_stepper_comp_naive",
            "value": 135.23072685319235,
            "unit": "iter/sec",
            "range": "stddev: 0.0014915633166494252",
            "extra": "mean: 7.394769097748093 msec\nrounds: 133"
          },
          {
            "name": "benchmark/benchmark_stepper.py::test_stepper_comp_direct",
            "value": 53.08167641380572,
            "unit": "iter/sec",
            "range": "stddev: 0.0016251512926504833",
            "extra": "mean: 18.838892581393974 msec\nrounds: 43"
          }
        ]
      }
    ]
  }
}