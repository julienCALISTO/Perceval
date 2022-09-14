window.BENCHMARK_DATA = {
  "lastUpdate": 1663145202955,
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
          "id": "e0aa41250b1b2789f749bccc3339c85d615b5b70",
          "message": "Merge branch 'benchmark_test' of github.com:julienCALISTO/Perceval into benchmark_test",
          "timestamp": "2022-09-13T15:40:28Z",
          "url": "https://github.com/julienCALISTO/Perceval/commit/e0aa41250b1b2789f749bccc3339c85d615b5b70"
        },
        "date": 1663083800040,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmark/benchmark_bosonsampling.py::test_bosonsampling_clifford_6",
            "value": 74.68268516661207,
            "unit": "iter/sec",
            "range": "stddev: 0.00010232407650671088",
            "extra": "mean: 13.389984542857114 msec\nrounds: 70"
          },
          {
            "name": "benchmark/benchmark_bosonsampling.py::test_bosonsampling_slos_6",
            "value": 11.248106063368926,
            "unit": "iter/sec",
            "range": "stddev: 0.005981822457807155",
            "extra": "mean: 88.90385584615385 msec\nrounds: 13"
          },
          {
            "name": "benchmark/benchmark_bosonsampling.py::test_bosonsampling_naive_6",
            "value": 1.4745542075667915,
            "unit": "iter/sec",
            "range": "stddev: 0.015270576196030396",
            "extra": "mean: 678.1710668000003 msec\nrounds: 5"
          },
          {
            "name": "benchmark/benchmark_bosonsampling.py::test_bosonsampling_clifford_8",
            "value": 204.5127608143762,
            "unit": "iter/sec",
            "range": "stddev: 0.000019327756363900646",
            "extra": "mean: 4.889670434343406 msec\nrounds: 198"
          },
          {
            "name": "benchmark/benchmark_bosonsampling.py::test_bosonsampling_slos_8",
            "value": 3.3570065676637646,
            "unit": "iter/sec",
            "range": "stddev: 0.03309673490128964",
            "extra": "mean: 297.88443359999985 msec\nrounds: 5"
          },
          {
            "name": "benchmark/benchmark_bosonsampling.py::test_bosonsampling_naive_8",
            "value": 0.2673732903096562,
            "unit": "iter/sec",
            "range": "stddev: 0.6619988648127445",
            "extra": "mean: 3.7400893666000004 sec\nrounds: 5"
          },
          {
            "name": "benchmark/benchmark_stepper.py::test_stepper",
            "value": 0.7648181069211021,
            "unit": "iter/sec",
            "range": "stddev: 0.0006230545723700673",
            "extra": "mean: 1.3075004252 sec\nrounds: 5"
          },
          {
            "name": "benchmark/benchmark_stepper.py::test_stepper_comp_naive",
            "value": 583.6866954466373,
            "unit": "iter/sec",
            "range": "stddev: 0.000030250886159752742",
            "extra": "mean: 1.7132478910364741 msec\nrounds: 569"
          },
          {
            "name": "benchmark/benchmark_stepper.py::test_stepper_comp_direct",
            "value": 180.18273272329765,
            "unit": "iter/sec",
            "range": "stddev: 0.000019576296458131607",
            "extra": "mean: 5.549921376404455 msec\nrounds: 178"
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
          "id": "8a9c6aa7b47f4d25bac5d98808d105d4e908f11d",
          "message": "modif name artefact",
          "timestamp": "2022-09-14T08:42:37Z",
          "url": "https://github.com/julienCALISTO/Perceval/commit/8a9c6aa7b47f4d25bac5d98808d105d4e908f11d"
        },
        "date": 1663145201639,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmark/benchmark_bosonsampling.py::test_bosonsampling_clifford_6",
            "value": 75.29229593287572,
            "unit": "iter/sec",
            "range": "stddev: 0.00008497044630227184",
            "extra": "mean: 13.281571342857124 msec\nrounds: 70"
          },
          {
            "name": "benchmark/benchmark_bosonsampling.py::test_bosonsampling_slos_6",
            "value": 11.219314302380118,
            "unit": "iter/sec",
            "range": "stddev: 0.005762490649177159",
            "extra": "mean: 89.1320069166665 msec\nrounds: 12"
          },
          {
            "name": "benchmark/benchmark_bosonsampling.py::test_bosonsampling_naive_6",
            "value": 1.445871486635884,
            "unit": "iter/sec",
            "range": "stddev: 0.03058400922441853",
            "extra": "mean: 691.6244004 msec\nrounds: 5"
          },
          {
            "name": "benchmark/benchmark_bosonsampling.py::test_bosonsampling_clifford_8",
            "value": 204.7285273493337,
            "unit": "iter/sec",
            "range": "stddev: 0.00002927846322860923",
            "extra": "mean: 4.884517135678281 msec\nrounds: 199"
          },
          {
            "name": "benchmark/benchmark_bosonsampling.py::test_bosonsampling_slos_8",
            "value": 3.689575022757764,
            "unit": "iter/sec",
            "range": "stddev: 0.02166159306706001",
            "extra": "mean: 271.03392499999967 msec\nrounds: 5"
          },
          {
            "name": "benchmark/benchmark_bosonsampling.py::test_bosonsampling_naive_8",
            "value": 0.2854938939228885,
            "unit": "iter/sec",
            "range": "stddev: 0.27142032907047003",
            "extra": "mean: 3.5027018835999995 sec\nrounds: 5"
          },
          {
            "name": "benchmark/benchmark_stepper.py::test_stepper",
            "value": 0.7698996441834421,
            "unit": "iter/sec",
            "range": "stddev: 0.0022830860496519186",
            "extra": "mean: 1.2988705834 sec\nrounds: 5"
          },
          {
            "name": "benchmark/benchmark_stepper.py::test_stepper_comp_naive",
            "value": 583.3776200417889,
            "unit": "iter/sec",
            "range": "stddev: 0.00003238302308722813",
            "extra": "mean: 1.7141555754716256 msec\nrounds: 530"
          },
          {
            "name": "benchmark/benchmark_stepper.py::test_stepper_comp_direct",
            "value": 180.2565322348975,
            "unit": "iter/sec",
            "range": "stddev: 0.000020433805662762455",
            "extra": "mean: 5.547649162011345 msec\nrounds: 179"
          }
        ]
      }
    ]
  }
}