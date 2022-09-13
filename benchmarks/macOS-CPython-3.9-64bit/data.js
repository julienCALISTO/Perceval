window.BENCHMARK_DATA = {
  "lastUpdate": 1663075156802,
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
      },
      {
        "commit": {
          "author": {
            "name": "test",
            "username": "test",
            "email": "test@users.noreply.github.com"
          },
          "committer": {
            "name": "test",
            "username": "test",
            "email": "test@users.noreply.github.com"
          },
          "id": "0d27a0d393cd6316b44a2e0f343a0be3b985a9ca",
          "message": "Automated benchmark report",
          "timestamp": "2022-09-13T13:12:48Z",
          "url": "https://github.com/julienCALISTO/Perceval/commit/0d27a0d393cd6316b44a2e0f343a0be3b985a9ca"
        },
        "date": 1663075029773,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmark/benchmark_bosonsampling.py::test_bosonsampling_clifford_6",
            "value": 75.17295428043828,
            "unit": "iter/sec",
            "range": "stddev: 0.00009342133926211487",
            "extra": "mean: 13.302656647887295 msec\nrounds: 71"
          },
          {
            "name": "benchmark/benchmark_bosonsampling.py::test_bosonsampling_slos_6",
            "value": 11.356527294869288,
            "unit": "iter/sec",
            "range": "stddev: 0.004568053442943045",
            "extra": "mean: 88.05508709090897 msec\nrounds: 11"
          },
          {
            "name": "benchmark/benchmark_bosonsampling.py::test_bosonsampling_naive_6",
            "value": 1.452092879177132,
            "unit": "iter/sec",
            "range": "stddev: 0.027475009168100997",
            "extra": "mean: 688.6611830000002 msec\nrounds: 5"
          },
          {
            "name": "benchmark/benchmark_bosonsampling.py::test_bosonsampling_clifford_8",
            "value": 205.1753236159065,
            "unit": "iter/sec",
            "range": "stddev: 0.00002972213487095149",
            "extra": "mean: 4.873880456852724 msec\nrounds: 197"
          },
          {
            "name": "benchmark/benchmark_bosonsampling.py::test_bosonsampling_slos_8",
            "value": 3.861741540117169,
            "unit": "iter/sec",
            "range": "stddev: 0.02546071063493168",
            "extra": "mean: 258.9505252000006 msec\nrounds: 5"
          },
          {
            "name": "benchmark/benchmark_bosonsampling.py::test_bosonsampling_naive_8",
            "value": 0.27834036420833547,
            "unit": "iter/sec",
            "range": "stddev: 0.242864842354193",
            "extra": "mean: 3.5927236167999994 sec\nrounds: 5"
          },
          {
            "name": "benchmark/benchmark_stepper.py::test_stepper",
            "value": 0.7626821357681028,
            "unit": "iter/sec",
            "range": "stddev: 0.0009102446709588585",
            "extra": "mean: 1.311162216999999 sec\nrounds: 5"
          },
          {
            "name": "benchmark/benchmark_stepper.py::test_stepper_comp_naive",
            "value": 583.6237250447012,
            "unit": "iter/sec",
            "range": "stddev: 0.000029138761873668938",
            "extra": "mean: 1.7134327428574077 msec\nrounds: 560"
          },
          {
            "name": "benchmark/benchmark_stepper.py::test_stepper_comp_direct",
            "value": 179.465974476059,
            "unit": "iter/sec",
            "range": "stddev: 0.000019003403862673475",
            "extra": "mean: 5.5720868700568165 msec\nrounds: 177"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "test",
            "username": "test",
            "email": "test@users.noreply.github.com"
          },
          "committer": {
            "name": "test",
            "username": "test",
            "email": "test@users.noreply.github.com"
          },
          "id": "c79dae60c9604466515ddd00d15637532ad97e92",
          "message": "Automated benchmark report",
          "timestamp": "2022-09-13T13:17:13Z",
          "url": "https://github.com/julienCALISTO/Perceval/commit/c79dae60c9604466515ddd00d15637532ad97e92"
        },
        "date": 1663075155105,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmark/benchmark_bosonsampling.py::test_bosonsampling_clifford_6",
            "value": 74.94688683024721,
            "unit": "iter/sec",
            "range": "stddev: 0.00010330914387425357",
            "extra": "mean: 13.342782366197204 msec\nrounds: 71"
          },
          {
            "name": "benchmark/benchmark_bosonsampling.py::test_bosonsampling_slos_6",
            "value": 11.348800171745177,
            "unit": "iter/sec",
            "range": "stddev: 0.005989403307891322",
            "extra": "mean: 88.11504166666666 msec\nrounds: 12"
          },
          {
            "name": "benchmark/benchmark_bosonsampling.py::test_bosonsampling_naive_6",
            "value": 1.4784988385301971,
            "unit": "iter/sec",
            "range": "stddev: 0.02743748746193772",
            "extra": "mean: 676.3617082 msec\nrounds: 5"
          },
          {
            "name": "benchmark/benchmark_bosonsampling.py::test_bosonsampling_clifford_8",
            "value": 203.65940070057837,
            "unit": "iter/sec",
            "range": "stddev: 0.00003007755349304132",
            "extra": "mean: 4.9101588071066145 msec\nrounds: 197"
          },
          {
            "name": "benchmark/benchmark_bosonsampling.py::test_bosonsampling_slos_8",
            "value": 4.070702534299714,
            "unit": "iter/sec",
            "range": "stddev: 0.027314538045822897",
            "extra": "mean: 245.65784200000033 msec\nrounds: 5"
          },
          {
            "name": "benchmark/benchmark_bosonsampling.py::test_bosonsampling_naive_8",
            "value": 0.3120952815294552,
            "unit": "iter/sec",
            "range": "stddev: 0.4221985544748772",
            "extra": "mean: 3.2041496914 sec\nrounds: 5"
          },
          {
            "name": "benchmark/benchmark_stepper.py::test_stepper",
            "value": 0.7667439481233332,
            "unit": "iter/sec",
            "range": "stddev: 0.0026709466643609937",
            "extra": "mean: 1.3042163585999986 sec\nrounds: 5"
          },
          {
            "name": "benchmark/benchmark_stepper.py::test_stepper_comp_naive",
            "value": 585.4031762072312,
            "unit": "iter/sec",
            "range": "stddev: 0.000028984010862509354",
            "extra": "mean: 1.7082244180479171 msec\nrounds: 543"
          },
          {
            "name": "benchmark/benchmark_stepper.py::test_stepper_comp_direct",
            "value": 179.3573759034047,
            "unit": "iter/sec",
            "range": "stddev: 0.000017126928414510803",
            "extra": "mean: 5.5754606966293005 msec\nrounds: 178"
          }
        ]
      }
    ]
  }
}