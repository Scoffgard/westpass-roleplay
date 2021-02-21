# Users

### To send at creation
```json
{
    "socialid": "350867809",
    "ban": {}
}
```

### Full example
```json
{
    "id": "1",
    "socialid": "350867809",
    "date": "2020-12-19 13:16:23",
    "rank": 4,
    "ban": {
        "banDate": "2021-01-02 11:23:42",
        "by": 2,
        "banTime": "2", // In string, because this can be the time (in hours) or "perm"
        "reason": "NoPain + NoFear : Se fait tirer dessus et continue a courir plus saute du haut d'un pont et repart."
    }
}
```


# Charaters 

### To send at creation
```json
{
    "ownerID": "1",
    "name": "Téo CUMSI",
    "infos": {},
    "inventory": [],
    "properties": [],
    "vehicles": []
}
```

### Full example
```json
{
    "characterID": "1",
    "ownerID": "1",
    "name": "Téo CUMSI",
    "infos": {
        "pos": {
            "x": 100,
            "y": 50,
            "z": 1500,
        },
        "clothes": {
            "1": 215,
            "12": 24,
        }
    },
    "inventory": [
        {
            "name": "T-Shirt",
            "type": "clothe",
            "value": {
                "id": 1,
                "number": 215
            }
        },
        {
            "name": "AK-47",
            "type": "weapon",
            "value": {
                "id": "supercarabine"
            }
        }
    ],
    "properties": [24, 689],
    "vehicles": [
        {
            "name": "Gauntlet Hellfire",
            "id": "gauntlet4",
            "pos": {
                "x": 100,
                "y": 50,
                "z": 1500,
            },
            "trunk": [
                {
                    "name": "T-Shirt",
                    "type": "clothe",
                    "value": {
                        "id": 1,
                        "number": 215
                    }
                },
                {
                    "name": "AK-47",
                    "type": "weapon",
                    "value": {
                        "id": "supercarabine"
                    }
                }
            ]
        }
    ]
}
```

# Properties

### To send at creation
```json
{
    "ownerID": "1",
    "interior": {
        "name": "Villa moyenne",
        "pos": { // Position of the interior
            "x": 100,
            "y": 50,
            "z": 1500,
        }
    },
    "position": { // Position of the door
        "x": 100,
        "y": 50,
        "z": 1500,
    }
}
```

### Full example
Same as "To send at creation", but with a unique ID (type: Auto Increment)