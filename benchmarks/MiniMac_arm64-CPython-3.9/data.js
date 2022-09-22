window.BENCHMARK_DATA = {
  "lastUpdate": 1663855321986,
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
          "id": "79281f50a95e17dd312dd7c105074c95d579f925",
          "message": "test benchmark on release/0.7 before PCVL-180",
          "timestamp": "2022-09-22T13:44:06Z",
          "url": "https://github.com/julienCALISTO/Perceval/commit/79281f50a95e17dd312dd7c105074c95d579f925"
        },
        "date": 1663855320283,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmark/benchmark_QML-DE-solver.py::test_QML_DE_solver",
            "value": 0.011007926844195682,
            "unit": "iter/sec",
            "range": "stddev: 0.07919394164177315",
            "extra": "mean: 90.84362697480002 sec\nrounds: 5"
          },
          {
            "name": "benchmark/benchmark_bosonsampling.py::test_bosonsampling_clifford_6",
            "value": 76.14070923218812,
            "unit": "iter/sec",
            "range": "stddev: 0.00008077948150045986",
            "extra": "mean: 13.133578739732238 msec\nrounds: 73"
          },
          {
            "name": "benchmark/benchmark_bosonsampling.py::test_bosonsampling_slos_6",
            "value": 11.60233060578369,
            "unit": "iter/sec",
            "range": "stddev: 0.006233027805392987",
            "extra": "mean: 86.18957983334023 msec\nrounds: 12"
          },
          {
            "name": "benchmark/benchmark_bosonsampling.py::test_bosonsampling_naive_6",
            "value": 1.4515597639641327,
            "unit": "iter/sec",
            "range": "stddev: 0.03565160722515713",
            "extra": "mean: 688.9141079999717 msec\nrounds: 5"
          },
          {
            "name": "benchmark/benchmark_bosonsampling.py::test_bosonsampling_clifford_8",
            "value": 205.99236125325336,
            "unit": "iter/sec",
            "range": "stddev: 0.000023328500962320557",
            "extra": "mean: 4.854548944999806 msec\nrounds: 200"
          },
          {
            "name": "benchmark/benchmark_bosonsampling.py::test_bosonsampling_slos_8",
            "value": 4.0380331553282565,
            "unit": "iter/sec",
            "range": "stddev: 0.03335372950433012",
            "extra": "mean: 247.64531679995798 msec\nrounds: 5"
          },
          {
            "name": "benchmark/benchmark_bosonsampling.py::test_bosonsampling_naive_8",
            "value": 0.30320391788769935,
            "unit": "iter/sec",
            "range": "stddev: 0.31615043794951786",
            "extra": "mean: 3.298110416800023 sec\nrounds: 5"
          },
          {
            "name": "benchmark/benchmark_pdisplay.py::test_pdisplay_mplot_6",
            "value": 0.35804027445185793,
            "unit": "iter/sec",
            "range": "stddev: 0.02299583456246353",
            "extra": "mean: 2.7929818832000137 sec\nrounds: 5"
          },
          {
            "name": "benchmark/benchmark_pdisplay.py::test_pdisplay_mplot_12",
            "value": 0.08261686064059073,
            "unit": "iter/sec",
            "range": "stddev: 0.06277279390079225",
            "extra": "mean: 12.104066799999988 sec\nrounds: 5"
          },
          {
            "name": "benchmark/benchmark_pdisplay.py::test_pdisplay_svg_6",
            "value": 0.37757985446404485,
            "unit": "iter/sec",
            "range": "stddev: 0.0047055645768914",
            "extra": "mean: 2.6484463834000054 sec\nrounds: 5"
          },
          {
            "name": "benchmark/benchmark_pdisplay.py::test_pdisplay_svg_12",
            "value": 0.08583581150293838,
            "unit": "iter/sec",
            "range": "stddev: 0.004240422043403133",
            "extra": "mean: 11.65014907520001 sec\nrounds: 5"
          },
          {
            "name": "benchmark/benchmark_stepper.py::test_stepper",
            "value": 0.7528900485966714,
            "unit": "iter/sec",
            "range": "stddev: 0.0014862395564205649",
            "extra": "mean: 1.3282151914000224 sec\nrounds: 5"
          },
          {
            "name": "benchmark/benchmark_stepper.py::test_stepper_comp_naive",
            "value": 577.6109239040862,
            "unit": "iter/sec",
            "range": "stddev: 0.00003200127006132478",
            "extra": "mean: 1.7312691962973548 msec\nrounds: 540"
          },
          {
            "name": "benchmark/benchmark_stepper.py::test_stepper_comp_direct",
            "value": 178.7746466336101,
            "unit": "iter/sec",
            "range": "stddev: 0.00002829883901709762",
            "extra": "mean: 5.593634325841801 msec\nrounds: 178"
          }
        ]
      }
    ]
  }
}