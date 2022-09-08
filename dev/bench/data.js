window.BENCHMARK_DATA = {
  "lastUpdate": 1662629589787,
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
          "id": "9c790503d2edfb4970f745482803423395cfd065",
          "message": "benchmark rm external json",
          "timestamp": "2022-09-07T16:24:27+02:00",
          "tree_id": "f70a711fd96b180c47980f839ffde3bbe401b6cb",
          "url": "https://github.com/julienCALISTO/Perceval/commit/9c790503d2edfb4970f745482803423395cfd065"
        },
        "date": 1662560752983,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmark/benchmark_stepper.py::test_stepper",
            "value": 0.31783041354161756,
            "unit": "iter/sec",
            "range": "stddev: 0.006306312564166812",
            "extra": "mean: 3.146331997800007 sec\nrounds: 5"
          },
          {
            "name": "benchmark/benchmark_stepper.py::test_stepper_comp_naive",
            "value": 245.00605950422982,
            "unit": "iter/sec",
            "range": "stddev: 0.00007236792077938723",
            "extra": "mean: 4.081531705883119 msec\nrounds: 204"
          },
          {
            "name": "benchmark/benchmark_stepper.py::test_stepper_comp_direct",
            "value": 77.76404959522725,
            "unit": "iter/sec",
            "range": "stddev: 0.00004622788674998619",
            "extra": "mean: 12.85941261039182 msec\nrounds: 77"
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
          "id": "2ffbe043c754f75c3ffe6dfe20c52eda898afd55",
          "message": "benchmark with correct path",
          "timestamp": "2022-09-07T17:58:35+02:00",
          "tree_id": "b4c355862ca8eab7accb25f674c936f4040e3a70",
          "url": "https://github.com/julienCALISTO/Perceval/commit/2ffbe043c754f75c3ffe6dfe20c52eda898afd55"
        },
        "date": 1662566415834,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmark/benchmark_stepper.py::test_stepper",
            "value": 0.26163278211423197,
            "unit": "iter/sec",
            "range": "stddev: 0.11078861348702114",
            "extra": "mean: 3.8221510007999995 sec\nrounds: 5"
          },
          {
            "name": "benchmark/benchmark_stepper.py::test_stepper_comp_naive",
            "value": 158.98486344588102,
            "unit": "iter/sec",
            "range": "stddev: 0.0006413702919389199",
            "extra": "mean: 6.289906965516899 msec\nrounds: 145"
          },
          {
            "name": "benchmark/benchmark_stepper.py::test_stepper_comp_direct",
            "value": 59.23885552517525,
            "unit": "iter/sec",
            "range": "stddev: 0.0012139706569549707",
            "extra": "mean: 16.88081228333355 msec\nrounds: 60"
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
          "id": "11af2b10b2dc338e1baa2a1167d3c031b2b8d4d6",
          "message": "benchmark if folder not exist",
          "timestamp": "2022-09-08T10:50:05+02:00",
          "tree_id": "04c2f3f068603a4b1cfc36913cb266d55bce4939",
          "url": "https://github.com/julienCALISTO/Perceval/commit/11af2b10b2dc338e1baa2a1167d3c031b2b8d4d6"
        },
        "date": 1662627114626,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmark/benchmark_stepper.py::test_stepper",
            "value": 0.3105968321788636,
            "unit": "iter/sec",
            "range": "stddev: 0.011489234212169257",
            "extra": "mean: 3.219607853000025 sec\nrounds: 5"
          },
          {
            "name": "benchmark/benchmark_stepper.py::test_stepper_comp_naive",
            "value": 227.74335313993453,
            "unit": "iter/sec",
            "range": "stddev: 0.00007120656735354604",
            "extra": "mean: 4.39090751151609 msec\nrounds: 217"
          },
          {
            "name": "benchmark/benchmark_stepper.py::test_stepper_comp_direct",
            "value": 75.28813560026701,
            "unit": "iter/sec",
            "range": "stddev: 0.00005573491454988233",
            "extra": "mean: 13.282305266654172 msec\nrounds: 75"
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
          "id": "afd20b98751a3290c6552948c0270006b581befb",
          "message": "benchmark try get tag.v3",
          "timestamp": "2022-09-08T11:04:27+02:00",
          "tree_id": "dcc6473c926f9c1c9f35fc3bf0294c6b8ecd720c",
          "url": "https://github.com/julienCALISTO/Perceval/commit/afd20b98751a3290c6552948c0270006b581befb"
        },
        "date": 1662627954015,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmark/benchmark_stepper.py::test_stepper",
            "value": 0.31444587681151676,
            "unit": "iter/sec",
            "range": "stddev: 0.019576989143373965",
            "extra": "mean: 3.1801975276000007 sec\nrounds: 5"
          },
          {
            "name": "benchmark/benchmark_stepper.py::test_stepper_comp_naive",
            "value": 242.4684828034265,
            "unit": "iter/sec",
            "range": "stddev: 0.00006998118432485507",
            "extra": "mean: 4.124247359648462 msec\nrounds: 228"
          },
          {
            "name": "benchmark/benchmark_stepper.py::test_stepper_comp_direct",
            "value": 77.31042327097686,
            "unit": "iter/sec",
            "range": "stddev: 0.000043961117565817434",
            "extra": "mean: 12.934866447373475 msec\nrounds: 76"
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
          "id": "c1fd559c827ae008feb9fc3cc163338da93a2c1d",
          "message": "benchmark try get tag.v5",
          "timestamp": "2022-09-08T11:31:42+02:00",
          "tree_id": "cd3c28344186047aa81e50ff42abaf12adcf68be",
          "url": "https://github.com/julienCALISTO/Perceval/commit/c1fd559c827ae008feb9fc3cc163338da93a2c1d"
        },
        "date": 1662629589394,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmark/benchmark_stepper.py::test_stepper",
            "value": 0.30834854782318494,
            "unit": "iter/sec",
            "range": "stddev: 0.004447503279722201",
            "extra": "mean: 3.2430832155999836 sec\nrounds: 5"
          },
          {
            "name": "benchmark/benchmark_stepper.py::test_stepper_comp_naive",
            "value": 227.55816496585828,
            "unit": "iter/sec",
            "range": "stddev: 0.00008218885347305377",
            "extra": "mean: 4.394480857894223 msec\nrounds: 190"
          },
          {
            "name": "benchmark/benchmark_stepper.py::test_stepper_comp_direct",
            "value": 77.74793272756054,
            "unit": "iter/sec",
            "range": "stddev: 0.000056674708010479495",
            "extra": "mean: 12.862078320514806 msec\nrounds: 78"
          }
        ]
      }
    ]
  }
}