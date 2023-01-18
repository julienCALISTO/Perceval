window.BENCHMARK_DATA = {
  "lastUpdate": 1674052418129,
  "repoUrl": "https://github.com/julienCALISTO/Perceval",
  "entries": {
    "Automated benchmarks report": [
      {
        "commit": {
          "author": {
            "name": "julien calisto",
            "username": "julienCALISTO",
            "email": "julien.calisto@quandela.com"
          },
          "committer": {
            "name": "julien calisto",
            "username": "julienCALISTO",
            "email": "julien.calisto@quandela.com"
          },
          "id": "fead0d21042e4f13fba691dfb6ea54b89c46fec9",
          "message": "test setup step to use var env",
          "timestamp": "2023-01-18T13:59:19Z",
          "url": "https://github.com/julienCALISTO/Perceval/commit/fead0d21042e4f13fba691dfb6ea54b89c46fec9"
        },
        "date": 1674052416486,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmark/benchmark_QML-DE-solver.py::test_QML_DE_solver",
            "value": 0.010574695098380342,
            "unit": "iter/sec",
            "range": "stddev: 0.18496450479919982",
            "extra": "mean: 94.5653742918 sec\nrounds: 5"
          },
          {
            "name": "benchmark/benchmark_bosonsampling.py::test_bosonsampling_clifford_6",
            "value": 73.49758942450488,
            "unit": "iter/sec",
            "range": "stddev: 0.00007038222680561886",
            "extra": "mean: 13.605888408451522 msec\nrounds: 71"
          },
          {
            "name": "benchmark/benchmark_bosonsampling.py::test_bosonsampling_slos_6",
            "value": 10.029538636129267,
            "unit": "iter/sec",
            "range": "stddev: 0.007282904021194433",
            "extra": "mean: 99.70548359998475 msec\nrounds: 10"
          },
          {
            "name": "benchmark/benchmark_bosonsampling.py::test_bosonsampling_naive_6",
            "value": 1.1075654456057753,
            "unit": "iter/sec",
            "range": "stddev: 0.03834535147505725",
            "extra": "mean: 902.8811832000201 msec\nrounds: 5"
          },
          {
            "name": "benchmark/benchmark_bosonsampling.py::test_bosonsampling_clifford_8",
            "value": 191.01508766996446,
            "unit": "iter/sec",
            "range": "stddev: 0.000025806632871197705",
            "extra": "mean: 5.2351885508007525 msec\nrounds: 187"
          },
          {
            "name": "benchmark/benchmark_bosonsampling.py::test_bosonsampling_slos_8",
            "value": 3.3733463758237923,
            "unit": "iter/sec",
            "range": "stddev: 0.04608327654205141",
            "extra": "mean: 296.44154160000653 msec\nrounds: 5"
          },
          {
            "name": "benchmark/benchmark_bosonsampling.py::test_bosonsampling_naive_8",
            "value": 0.21394836813984372,
            "unit": "iter/sec",
            "range": "stddev: 0.3624863321925006",
            "extra": "mean: 4.674024900000018 sec\nrounds: 5"
          },
          {
            "name": "benchmark/benchmark_pdisplay.py::test_pdisplay_mplot_6",
            "value": 0.3633263427642184,
            "unit": "iter/sec",
            "range": "stddev: 0.024719220073978712",
            "extra": "mean: 2.7523465334000092 sec\nrounds: 5"
          },
          {
            "name": "benchmark/benchmark_pdisplay.py::test_pdisplay_mplot_12",
            "value": 0.08363055493171814,
            "unit": "iter/sec",
            "range": "stddev: 0.02654300348245281",
            "extra": "mean: 11.957352199999992 sec\nrounds: 5"
          },
          {
            "name": "benchmark/benchmark_pdisplay.py::test_pdisplay_svg_6",
            "value": 0.38608176896916385,
            "unit": "iter/sec",
            "range": "stddev: 0.0014069165481742345",
            "extra": "mean: 2.5901248916000212 sec\nrounds: 5"
          },
          {
            "name": "benchmark/benchmark_pdisplay.py::test_pdisplay_svg_12",
            "value": 0.0874739825794651,
            "unit": "iter/sec",
            "range": "stddev: 0.08512048211368205",
            "extra": "mean: 11.431970633000015 sec\nrounds: 5"
          },
          {
            "name": "benchmark/benchmark_stepper.py::test_stepper",
            "value": 71.61335587458788,
            "unit": "iter/sec",
            "range": "stddev: 0.00007678328836147345",
            "extra": "mean: 13.96387570149958 msec\nrounds: 67"
          },
          {
            "name": "benchmark/benchmark_stepper.py::test_stepper_comp_naive",
            "value": 519.1397874564224,
            "unit": "iter/sec",
            "range": "stddev: 0.000035017914590705084",
            "extra": "mean: 1.9262634538177101 msec\nrounds: 498"
          },
          {
            "name": "benchmark/benchmark_stepper.py::test_stepper_comp_direct",
            "value": 152.03927615430217,
            "unit": "iter/sec",
            "range": "stddev: 0.000012260497545818349",
            "extra": "mean: 6.577247835520582 msec\nrounds: 152"
          }
        ]
      }
    ]
  }
}