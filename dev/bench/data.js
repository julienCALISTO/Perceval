window.BENCHMARK_DATA = {
  "lastUpdate": 1662559561838,
  "repoUrl": "https://github.com/julienCALISTO/Perceval",
  "entries": {
    "Python Benchmark with pytest-benchmark": [
      {
        "commit": {
          "author": {
            "email": "julien.calisto@quandela.com",
            "name": "Julien Calisto",
            "username": "julienCALISTO"
          },
          "committer": {
            "email": "julien.calisto@quandela.com",
            "name": "Julien Calisto",
            "username": "julienCALISTO"
          },
          "distinct": true,
          "id": "d04f976d20aee79c7bcefc5886879785caf1ec7f",
          "message": "benchmark add comment alert",
          "timestamp": "2022-09-07T15:56:39+02:00",
          "tree_id": "6eb667fb047fb54969cbbe6bb1b0b3a3654ec157",
          "url": "https://github.com/julienCALISTO/Perceval/commit/d04f976d20aee79c7bcefc5886879785caf1ec7f"
        },
        "date": 1662559089053,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmark/benchmark_stepper.py::test_stepper",
            "value": 0.3164155398262662,
            "unit": "iter/sec",
            "range": "stddev: 0.007373011940852373",
            "extra": "mean: 3.160401036400009 sec\nrounds: 5"
          },
          {
            "name": "benchmark/benchmark_stepper.py::test_stepper_comp_naive",
            "value": 242.9106323205445,
            "unit": "iter/sec",
            "range": "stddev: 0.00007591175251036718",
            "extra": "mean: 4.11674034375079 msec\nrounds: 224"
          },
          {
            "name": "benchmark/benchmark_stepper.py::test_stepper_comp_direct",
            "value": 77.34769077179584,
            "unit": "iter/sec",
            "range": "stddev: 0.00004710415004077277",
            "extra": "mean: 12.928634197372071 msec\nrounds: 76"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "julien.calisto@quandela.com",
            "name": "Julien Calisto",
            "username": "julienCALISTO"
          },
          "committer": {
            "email": "julien.calisto@quandela.com",
            "name": "Julien Calisto",
            "username": "julienCALISTO"
          },
          "distinct": true,
          "id": "f932cf33965814e2346cc203f08855950a14e3f3",
          "message": "benchmark run workflow",
          "timestamp": "2022-09-07T16:04:09+02:00",
          "tree_id": "eacd4a6a97edd84732c28be05052045a330a6319",
          "url": "https://github.com/julienCALISTO/Perceval/commit/f932cf33965814e2346cc203f08855950a14e3f3"
        },
        "date": 1662559559872,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmark/benchmark_stepper.py::test_stepper",
            "value": 0.2352645570042153,
            "unit": "iter/sec",
            "range": "stddev: 0.019914834139528558",
            "extra": "mean: 4.250534006200018 sec\nrounds: 5"
          },
          {
            "name": "benchmark/benchmark_stepper.py::test_stepper_comp_naive",
            "value": 170.8167831673847,
            "unit": "iter/sec",
            "range": "stddev: 0.00036995831345323124",
            "extra": "mean: 5.8542256882339965 msec\nrounds: 170"
          },
          {
            "name": "benchmark/benchmark_stepper.py::test_stepper_comp_direct",
            "value": 62.94754538812245,
            "unit": "iter/sec",
            "range": "stddev: 0.0005314691479814208",
            "extra": "mean: 15.886242963632537 msec\nrounds: 55"
          }
        ]
      }
    ]
  }
}