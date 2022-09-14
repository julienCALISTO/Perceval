window.BENCHMARK_DATA = {
  "lastUpdate": 1663156109115,
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
          "id": "3a85c32b3e7cb60ed998ba25ba73be7d8310e3ea",
          "message": "ubuntu modif.v3",
          "timestamp": "2022-09-14T09:50:09Z",
          "url": "https://github.com/julienCALISTO/Perceval/commit/3a85c32b3e7cb60ed998ba25ba73be7d8310e3ea"
        },
        "date": 1663149227472,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmark/benchmark_bosonsampling.py::test_bosonsampling_clifford_6",
            "value": 75.90605843970233,
            "unit": "iter/sec",
            "range": "stddev: 0.00007656483859009912",
            "extra": "mean: 13.174178985915495 msec\nrounds: 71"
          },
          {
            "name": "benchmark/benchmark_bosonsampling.py::test_bosonsampling_slos_6",
            "value": 11.24022934282945,
            "unit": "iter/sec",
            "range": "stddev: 0.004154924437258122",
            "extra": "mean: 88.96615625000004 msec\nrounds: 12"
          },
          {
            "name": "benchmark/benchmark_bosonsampling.py::test_bosonsampling_naive_6",
            "value": 1.5049257539747483,
            "unit": "iter/sec",
            "range": "stddev: 0.04610554839114419",
            "extra": "mean: 664.4846081999999 msec\nrounds: 5"
          },
          {
            "name": "benchmark/benchmark_bosonsampling.py::test_bosonsampling_clifford_8",
            "value": 206.89262278744107,
            "unit": "iter/sec",
            "range": "stddev: 0.00002448778300712516",
            "extra": "mean: 4.833425119403062 msec\nrounds: 201"
          },
          {
            "name": "benchmark/benchmark_bosonsampling.py::test_bosonsampling_slos_8",
            "value": 3.5275771141797296,
            "unit": "iter/sec",
            "range": "stddev: 0.04231319549047623",
            "extra": "mean: 283.48069159999943 msec\nrounds: 5"
          },
          {
            "name": "benchmark/benchmark_bosonsampling.py::test_bosonsampling_naive_8",
            "value": 0.28631186013887766,
            "unit": "iter/sec",
            "range": "stddev: 0.24499662693869817",
            "extra": "mean: 3.4926949917999996 sec\nrounds: 5"
          },
          {
            "name": "benchmark/benchmark_stepper.py::test_stepper",
            "value": 0.77154654636688,
            "unit": "iter/sec",
            "range": "stddev: 0.0005156072949635017",
            "extra": "mean: 1.2960980833999969 sec\nrounds: 5"
          },
          {
            "name": "benchmark/benchmark_stepper.py::test_stepper_comp_naive",
            "value": 586.4827967295088,
            "unit": "iter/sec",
            "range": "stddev: 0.000028489418630071676",
            "extra": "mean: 1.7050798515769752 msec\nrounds: 539"
          },
          {
            "name": "benchmark/benchmark_stepper.py::test_stepper_comp_direct",
            "value": 179.57111912065233,
            "unit": "iter/sec",
            "range": "stddev: 0.000019667435187269383",
            "extra": "mean: 5.568824234637132 msec\nrounds: 179"
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
          "id": "9400ac672bdd2f7b1d7f7c62a1611c22d5853fba",
          "message": "Merge branch 'benchmark_test' of github.com:julienCALISTO/Perceval into benchmark_test",
          "timestamp": "2022-09-14T10:15:37Z",
          "url": "https://github.com/julienCALISTO/Perceval/commit/9400ac672bdd2f7b1d7f7c62a1611c22d5853fba"
        },
        "date": 1663150716412,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmark/benchmark_bosonsampling.py::test_bosonsampling_clifford_6",
            "value": 75.40028774042389,
            "unit": "iter/sec",
            "range": "stddev: 0.00008807390520376559",
            "extra": "mean: 13.26254885714284 msec\nrounds: 70"
          },
          {
            "name": "benchmark/benchmark_bosonsampling.py::test_bosonsampling_slos_6",
            "value": 11.568390885762081,
            "unit": "iter/sec",
            "range": "stddev: 0.0052531426845712145",
            "extra": "mean: 86.44244561538464 msec\nrounds: 13"
          },
          {
            "name": "benchmark/benchmark_bosonsampling.py::test_bosonsampling_naive_6",
            "value": 1.4925121969029558,
            "unit": "iter/sec",
            "range": "stddev: 0.03966367114857392",
            "extra": "mean: 670.0112749999997 msec\nrounds: 5"
          },
          {
            "name": "benchmark/benchmark_bosonsampling.py::test_bosonsampling_clifford_8",
            "value": 197.5886971895139,
            "unit": "iter/sec",
            "range": "stddev: 0.0002402225638178778",
            "extra": "mean: 5.061018237500026 msec\nrounds: 160"
          },
          {
            "name": "benchmark/benchmark_bosonsampling.py::test_bosonsampling_slos_8",
            "value": 4.285090800105627,
            "unit": "iter/sec",
            "range": "stddev: 0.03425017896157143",
            "extra": "mean: 233.3672835999998 msec\nrounds: 5"
          },
          {
            "name": "benchmark/benchmark_bosonsampling.py::test_bosonsampling_naive_8",
            "value": 0.2914923207348212,
            "unit": "iter/sec",
            "range": "stddev: 0.4751650938219579",
            "extra": "mean: 3.4306221086000006 sec\nrounds: 5"
          },
          {
            "name": "benchmark/benchmark_stepper.py::test_stepper",
            "value": 0.7688518731134539,
            "unit": "iter/sec",
            "range": "stddev: 0.001983419058494664",
            "extra": "mean: 1.3006406499999996 sec\nrounds: 5"
          },
          {
            "name": "benchmark/benchmark_stepper.py::test_stepper_comp_naive",
            "value": 584.0106090538585,
            "unit": "iter/sec",
            "range": "stddev: 0.000028572943850755088",
            "extra": "mean: 1.7122976612018674 msec\nrounds: 549"
          },
          {
            "name": "benchmark/benchmark_stepper.py::test_stepper_comp_direct",
            "value": 179.94446409992753,
            "unit": "iter/sec",
            "range": "stddev: 0.000022073223591403425",
            "extra": "mean: 5.557270155555748 msec\nrounds: 180"
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
          "id": "215256c90e38581be22eb9d477e38891c47707bb",
          "message": "test git pull",
          "timestamp": "2022-09-14T10:25:40Z",
          "url": "https://github.com/julienCALISTO/Perceval/commit/215256c90e38581be22eb9d477e38891c47707bb"
        },
        "date": 1663151241346,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmark/benchmark_bosonsampling.py::test_bosonsampling_clifford_6",
            "value": 74.99841622094539,
            "unit": "iter/sec",
            "range": "stddev: 0.00006518282237868478",
            "extra": "mean: 13.333614900000011 msec\nrounds: 70"
          },
          {
            "name": "benchmark/benchmark_bosonsampling.py::test_bosonsampling_slos_6",
            "value": 11.553053745190155,
            "unit": "iter/sec",
            "range": "stddev: 0.00505867753853058",
            "extra": "mean: 86.55720141666671 msec\nrounds: 12"
          },
          {
            "name": "benchmark/benchmark_bosonsampling.py::test_bosonsampling_naive_6",
            "value": 1.491452708543534,
            "unit": "iter/sec",
            "range": "stddev: 0.02707558911818648",
            "extra": "mean: 670.4872331999999 msec\nrounds: 5"
          },
          {
            "name": "benchmark/benchmark_bosonsampling.py::test_bosonsampling_clifford_8",
            "value": 204.38402958965222,
            "unit": "iter/sec",
            "range": "stddev: 0.000025435917965601085",
            "extra": "mean: 4.892750191919247 msec\nrounds: 198"
          },
          {
            "name": "benchmark/benchmark_bosonsampling.py::test_bosonsampling_slos_8",
            "value": 3.8609279572472053,
            "unit": "iter/sec",
            "range": "stddev: 0.043467583056407445",
            "extra": "mean: 259.0050918000003 msec\nrounds: 5"
          },
          {
            "name": "benchmark/benchmark_bosonsampling.py::test_bosonsampling_naive_8",
            "value": 0.28225437463883296,
            "unit": "iter/sec",
            "range": "stddev: 0.46415083586262174",
            "extra": "mean: 3.5429034582000014 sec\nrounds: 5"
          },
          {
            "name": "benchmark/benchmark_stepper.py::test_stepper",
            "value": 0.7667666760442242,
            "unit": "iter/sec",
            "range": "stddev: 0.0014057330255974408",
            "extra": "mean: 1.304177699999998 sec\nrounds: 5"
          },
          {
            "name": "benchmark/benchmark_stepper.py::test_stepper_comp_naive",
            "value": 581.4237256770627,
            "unit": "iter/sec",
            "range": "stddev: 0.00003171902728289186",
            "extra": "mean: 1.7199160540542253 msec\nrounds: 555"
          },
          {
            "name": "benchmark/benchmark_stepper.py::test_stepper_comp_direct",
            "value": 178.68272056729361,
            "unit": "iter/sec",
            "range": "stddev: 0.00002380439571084676",
            "extra": "mean: 5.5965120568185585 msec\nrounds: 176"
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
          "id": "06afdaf00a88d308d629182613254a32ef2c5001",
          "message": "remov test.v4",
          "timestamp": "2022-09-14T11:46:49Z",
          "url": "https://github.com/julienCALISTO/Perceval/commit/06afdaf00a88d308d629182613254a32ef2c5001"
        },
        "date": 1663156107730,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmark/benchmark_bosonsampling.py::test_bosonsampling_clifford_6",
            "value": 74.86503241049499,
            "unit": "iter/sec",
            "range": "stddev: 0.00009754238888617418",
            "extra": "mean: 13.357370828571424 msec\nrounds: 70"
          },
          {
            "name": "benchmark/benchmark_bosonsampling.py::test_bosonsampling_slos_6",
            "value": 11.32540143400174,
            "unit": "iter/sec",
            "range": "stddev: 0.004286631565375657",
            "extra": "mean: 88.2970909090909 msec\nrounds: 11"
          },
          {
            "name": "benchmark/benchmark_bosonsampling.py::test_bosonsampling_naive_6",
            "value": 1.410534171668971,
            "unit": "iter/sec",
            "range": "stddev: 0.06303467352059285",
            "extra": "mean: 708.9512754000002 msec\nrounds: 5"
          },
          {
            "name": "benchmark/benchmark_bosonsampling.py::test_bosonsampling_clifford_8",
            "value": 205.13364046924536,
            "unit": "iter/sec",
            "range": "stddev: 0.000021356151594309168",
            "extra": "mean: 4.874870829145768 msec\nrounds: 199"
          },
          {
            "name": "benchmark/benchmark_bosonsampling.py::test_bosonsampling_slos_8",
            "value": 3.894744000713073,
            "unit": "iter/sec",
            "range": "stddev: 0.029179450717126045",
            "extra": "mean: 256.75628483333287 msec\nrounds: 6"
          },
          {
            "name": "benchmark/benchmark_bosonsampling.py::test_bosonsampling_naive_8",
            "value": 0.3026402647142051,
            "unit": "iter/sec",
            "range": "stddev: 0.30507458131706183",
            "extra": "mean: 3.3042529913999994 sec\nrounds: 5"
          },
          {
            "name": "benchmark/benchmark_stepper.py::test_stepper",
            "value": 0.7701092123125,
            "unit": "iter/sec",
            "range": "stddev: 0.000653670486730704",
            "extra": "mean: 1.2985171246000022 sec\nrounds: 5"
          },
          {
            "name": "benchmark/benchmark_stepper.py::test_stepper_comp_naive",
            "value": 577.2075742673705,
            "unit": "iter/sec",
            "range": "stddev: 0.000031734820785735444",
            "extra": "mean: 1.7324789981650277 msec\nrounds: 545"
          },
          {
            "name": "benchmark/benchmark_stepper.py::test_stepper_comp_direct",
            "value": 177.86820197463473,
            "unit": "iter/sec",
            "range": "stddev: 0.00002361430623963694",
            "extra": "mean: 5.622140376404137 msec\nrounds: 178"
          }
        ]
      }
    ]
  }
}