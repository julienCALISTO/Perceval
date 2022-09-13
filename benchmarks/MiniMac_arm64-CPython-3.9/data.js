window.BENCHMARK_DATA = {
  "lastUpdate": 1663083005560,
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
          "id": "dfbff9421ece8ca2e03ba21194495aa62789e9a7",
          "message": "modif dl artefact",
          "timestamp": "2022-09-13T15:27:52Z",
          "url": "https://github.com/julienCALISTO/Perceval/commit/dfbff9421ece8ca2e03ba21194495aa62789e9a7"
        },
        "date": 1663083003957,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmark/benchmark_bosonsampling.py::test_bosonsampling_clifford_6",
            "value": 74.9226895243605,
            "unit": "iter/sec",
            "range": "stddev: 0.00011679495213163348",
            "extra": "mean: 13.3470916 msec\nrounds: 70"
          },
          {
            "name": "benchmark/benchmark_bosonsampling.py::test_bosonsampling_slos_6",
            "value": 11.52748225449294,
            "unit": "iter/sec",
            "range": "stddev: 0.0037896529828640854",
            "extra": "mean: 86.74921183333343 msec\nrounds: 12"
          },
          {
            "name": "benchmark/benchmark_bosonsampling.py::test_bosonsampling_naive_6",
            "value": 1.4118710780432793,
            "unit": "iter/sec",
            "range": "stddev: 0.031214816975589726",
            "extra": "mean: 708.2799666000002 msec\nrounds: 5"
          },
          {
            "name": "benchmark/benchmark_bosonsampling.py::test_bosonsampling_clifford_8",
            "value": 203.9488655572518,
            "unit": "iter/sec",
            "range": "stddev: 0.000020337707374310726",
            "extra": "mean: 4.9031898131312905 msec\nrounds: 198"
          },
          {
            "name": "benchmark/benchmark_bosonsampling.py::test_bosonsampling_slos_8",
            "value": 3.6434665173686795,
            "unit": "iter/sec",
            "range": "stddev: 0.01846947046730071",
            "extra": "mean: 274.46389179999994 msec\nrounds: 5"
          },
          {
            "name": "benchmark/benchmark_bosonsampling.py::test_bosonsampling_naive_8",
            "value": 0.2815472470359568,
            "unit": "iter/sec",
            "range": "stddev: 0.14331632078577594",
            "extra": "mean: 3.5518017332000005 sec\nrounds: 5"
          },
          {
            "name": "benchmark/benchmark_stepper.py::test_stepper",
            "value": 0.7690075992029786,
            "unit": "iter/sec",
            "range": "stddev: 0.0010304947024235176",
            "extra": "mean: 1.300377266800001 sec\nrounds: 5"
          },
          {
            "name": "benchmark/benchmark_stepper.py::test_stepper_comp_naive",
            "value": 582.5291223970864,
            "unit": "iter/sec",
            "range": "stddev: 0.00002995453456528498",
            "extra": "mean: 1.7166523724771663 msec\nrounds: 545"
          },
          {
            "name": "benchmark/benchmark_stepper.py::test_stepper_comp_direct",
            "value": 179.4453729028726,
            "unit": "iter/sec",
            "range": "stddev: 0.000016024375037980327",
            "extra": "mean: 5.572726584269544 msec\nrounds: 178"
          }
        ]
      }
    ]
  }
}