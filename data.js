var APP_DATA = {
  "scenes": [
    {
      "id": "0-waiting-area",
      "name": "Waiting Area",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": 0.09267291870682826,
        "pitch": -0.02862769146553923,
        "fov": 1.648654672613161
      },
      "linkHotspots": [
        {
          "yaw": 0.09267291870682826,
          "pitch": -0.02862769146553923,
          "rotation": 0,
          "target": "1-reception-area"
        },
        {
          "yaw": 2.703193210073577,
          "pitch": -0.035511495462710485,
          "rotation": 0,
          "target": "2-meeting-room"
        },
        {
          "yaw": -1.3205145631142265,
          "pitch": -0.009243555495466182,
          "rotation": 0,
          "target": "4-workstation-2"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.4926109286214455,
          "pitch": -0.11750762258215097,
          "title": "Company Milestone",
          "text": "Text"
        }
      ]
    },
    {
      "id": "1-reception-area",
      "name": "Reception Area",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.6600062687382557,
          "pitch": 0.031010103500133113,
          "rotation": 0,
          "target": "0-waiting-area"
        },
        {
          "yaw": 2.4687523968160203,
          "pitch": 0.020163545151447693,
          "rotation": 0,
          "target": "14-toilet"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-meeting-room",
      "name": "Meeting Room",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.955752976603268,
          "pitch": 0.07966450851083628,
          "rotation": 0,
          "target": "0-waiting-area"
        },
        {
          "yaw": -2.659181355796985,
          "pitch": 0.041156934237436715,
          "rotation": 0,
          "target": "3-workstation"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-workstation",
      "name": "Workstation",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": 0.9164309742100176,
        "pitch": 0,
        "fov": 1.648654672613161
      },
      "linkHotspots": [
        {
          "yaw": 1.8651475730497378,
          "pitch": 0.000005196830480613812,
          "rotation": 0,
          "target": "4-workstation-2"
        },
        {
          "yaw": -0.31665418243797205,
          "pitch": 0.003448249599998121,
          "rotation": 0,
          "target": "5-boss-room"
        },
        {
          "yaw": 0.3541918794828902,
          "pitch": 0.008705527092402576,
          "rotation": 0,
          "target": "15-walkway"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-workstation-2",
      "name": "Workstation 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.3143189343916486,
          "pitch": -0.001219283265374571,
          "rotation": 0,
          "target": "2-meeting-room"
        },
        {
          "yaw": -2.5594537348496615,
          "pitch": 0.08201701166122177,
          "rotation": 0,
          "target": "3-workstation"
        },
        {
          "yaw": 1.1173337375194858,
          "pitch": -0.015780794541800702,
          "rotation": 0,
          "target": "0-waiting-area"
        },
        {
          "yaw": -0.19292303229618035,
          "pitch": 0.024589000091364,
          "rotation": 0,
          "target": "6-brainstorm-area-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-boss-room",
      "name": "Boss room",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 3.087446718874096,
          "pitch": 0.008314213164938522,
          "rotation": 0,
          "target": "3-workstation"
        },
        {
          "yaw": 2.026092901774513,
          "pitch": -0.0074426546457875276,
          "rotation": 0,
          "target": "15-walkway"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-brainstorm-area-2",
      "name": "Brainstorm Area 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.038546624245111,
          "pitch": -0.015891985735132508,
          "rotation": 0,
          "target": "11-manager-room-3"
        },
        {
          "yaw": 0.38709188007587514,
          "pitch": 0.011800537389397903,
          "rotation": 0,
          "target": "7-brainstorm-area"
        },
        {
          "yaw": -2.5857215794029553,
          "pitch": -0.01602071318826148,
          "rotation": 0,
          "target": "10-manager-room-2"
        },
        {
          "yaw": -1.0305299188817028,
          "pitch": 0.04261129324030399,
          "rotation": 0,
          "target": "4-workstation-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-brainstorm-area",
      "name": "Brainstorm Area",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.4779768840641374,
          "pitch": 0.0037943994126177216,
          "rotation": 0,
          "target": "6-brainstorm-area-2"
        },
        {
          "yaw": 2.740677603352877,
          "pitch": 0.016963922804730913,
          "rotation": 0,
          "target": "9-finance-dpt"
        },
        {
          "yaw": -1.9789128649706011,
          "pitch": -0.03261770228498051,
          "rotation": 0,
          "target": "12-manager-room"
        },
        {
          "yaw": -1.2242359834333278,
          "pitch": 0.034943599216983756,
          "rotation": 0,
          "target": "13-pantry"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-discussion-room",
      "name": "Discussion Room",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [],
      "infoHotspots": []
    },
    {
      "id": "9-finance-dpt",
      "name": "Finance Dpt",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.0662680616856566,
          "pitch": 0.045180997515753774,
          "rotation": 0,
          "target": "15-walkway"
        },
        {
          "yaw": 2.2772734860404675,
          "pitch": 0.028850717948666116,
          "rotation": 0,
          "target": "7-brainstorm-area"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "10-manager-room-2",
      "name": "Manager Room 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.9109897317331423,
          "pitch": -0.038718126637594,
          "rotation": 0,
          "target": "6-brainstorm-area-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "11-manager-room-3",
      "name": "Manager Room 3",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.559601294222599,
          "pitch": -0.07674353196113515,
          "rotation": 0,
          "target": "6-brainstorm-area-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "12-manager-room",
      "name": "Manager Room",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.120242579212551,
          "pitch": 0.10385665881552342,
          "rotation": 0,
          "target": "7-brainstorm-area"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "13-pantry",
      "name": "Pantry",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -3.047940456156553,
          "pitch": 0.09257030665198229,
          "rotation": 0,
          "target": "7-brainstorm-area"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "14-toilet",
      "name": "Toilet",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.0568582144228102,
          "pitch": -0.006550073862115369,
          "rotation": 0,
          "target": "1-reception-area"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "15-walkway",
      "name": "Walkway",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.9926536801305907,
          "pitch": 0.04288012806494379,
          "rotation": 0,
          "target": "3-workstation"
        },
        {
          "yaw": 0.628512244821998,
          "pitch": 0.10004939456151796,
          "rotation": 0,
          "target": "5-boss-room"
        },
        {
          "yaw": 1.7095000455947318,
          "pitch": 0.009031449384544032,
          "rotation": 0,
          "target": "9-finance-dpt"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Landsco Office",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
