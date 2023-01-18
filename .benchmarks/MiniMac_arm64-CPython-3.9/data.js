window.BENCHMARK_DATA = {
  "lastUpdate": 1674056308331,
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
          "id": "50c0f5e8a284eb335a0f0c401bee184c2a01c599",
          "message": "test setup step to use var env",
          "timestamp": "2023-01-18T14:57:44Z",
          "url": "https://github.com/julienCALISTO/Perceval/commit/50c0f5e8a284eb335a0f0c401bee184c2a01c599"
        },
        "date": 1674056306753,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmark/benchmark_bosonsampling.py::test_bosonsampling_clifford_6",
            "value": 73.49038511232483,
            "unit": "iter/sec",
            "range": "stddev: 0.0000775860764583668",
            "extra": "mean: 13.607222202898665 msec\nrounds: 69"
          },
          {
            "name": "benchmark/benchmark_bosonsampling.py::test_bosonsampling_slos_6",
            "value": 9.602922736345239,
            "unit": "iter/sec",
            "range": "stddev: 0.006007182040836065",
            "extra": "mean: 104.13496259999988 msec\nrounds: 10"
          },
          {
            "name": "benchmark/benchmark_bosonsampling.py::test_bosonsampling_naive_6",
            "value": 1.107453111041609,
            "unit": "iter/sec",
            "range": "stddev: 0.0455949271922486",
            "extra": "mean: 902.972767 msec\nrounds: 5"
          },
          {
            "name": "benchmark/benchmark_bosonsampling.py::test_bosonsampling_clifford_8",
            "value": 189.97202730697853,
            "unit": "iter/sec",
            "range": "stddev: 0.000020397241673270163",
            "extra": "mean: 5.263932875675878 msec\nrounds: 185"
          },
          {
            "name": "benchmark/benchmark_bosonsampling.py::test_bosonsampling_slos_8",
            "value": 3.209675416072157,
            "unit": "iter/sec",
            "range": "stddev: 0.039359878326494076",
            "extra": "mean: 311.5579834000009 msec\nrounds: 5"
          },
          {
            "name": "benchmark/benchmark_bosonsampling.py::test_bosonsampling_naive_8",
            "value": 0.2263885402487132,
            "unit": "iter/sec",
            "range": "stddev: 0.5918621351613169",
            "extra": "mean: 4.4171847166000004 sec\nrounds: 5"
          },
          {
            "name": "benchmark/benchmark_pdisplay.py::test_pdisplay_mplot_6",
            "value": 0.3659889952773165,
            "unit": "iter/sec",
            "range": "stddev: 0.02530901279238693",
            "extra": "mean: 2.7323225914000004 sec\nrounds: 5"
          },
          {
            "name": "benchmark/benchmark_pdisplay.py::test_pdisplay_mplot_12",
            "value": 0.08431698701406358,
            "unit": "iter/sec",
            "range": "stddev: 0.02875231806608532",
            "extra": "mean: 11.860006333400005 sec\nrounds: 5"
          },
          {
            "name": "benchmark/benchmark_pdisplay.py::test_pdisplay_svg_6",
            "value": 0.38960197773938654,
            "unit": "iter/sec",
            "range": "stddev: 0.0006054351420899405",
            "extra": "mean: 2.5667220834000033 sec\nrounds: 5"
          },
          {
            "name": "benchmark/benchmark_pdisplay.py::test_pdisplay_svg_12",
            "value": 0.0883279228299157,
            "unit": "iter/sec",
            "range": "stddev: 0.08472970187887159",
            "extra": "mean: 11.32144816679999 sec\nrounds: 5"
          },
          {
            "name": "benchmark/benchmark_stepper.py::test_stepper",
            "value": 71.619068760027,
            "unit": "iter/sec",
            "range": "stddev: 0.0000750783112211197",
            "extra": "mean: 13.962761835827353 msec\nrounds: 67"
          },
          {
            "name": "benchmark/benchmark_stepper.py::test_stepper_comp_naive",
            "value": 519.8242747801379,
            "unit": "iter/sec",
            "range": "stddev: 0.00003461543800340162",
            "extra": "mean: 1.9237270141394505 msec\nrounds: 495"
          },
          {
            "name": "benchmark/benchmark_stepper.py::test_stepper_comp_direct",
            "value": 152.49537405034383,
            "unit": "iter/sec",
            "range": "stddev: 0.00002264183038016557",
            "extra": "mean: 6.557575967319943 msec\nrounds: 153"
          }
        ]
      }
    ]
  }
}