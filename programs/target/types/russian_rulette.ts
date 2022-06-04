export type RussianRulette = {
  "version": "0.1.0",
  "name": "russian_rulette",
  "instructions": [
    {
      "name": "createGame",
      "accounts": [
        {
          "name": "russianRulette",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "owner",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "ticketPrice",
          "type": "u64"
        },
        {
          "name": "randomOracle",
          "type": "publicKey"
        }
      ]
    },
    {
      "name": "buyTicket",
      "accounts": [
        {
          "name": "ticket",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "player",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "russianRulette",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    }
  ],
  "accounts": [
    {
      "name": "russianRulette",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "authority",
            "type": "publicKey"
          },
          {
            "name": "winner",
            "type": "publicKey"
          },
          {
            "name": "randomOracle",
            "type": "publicKey"
          },
          {
            "name": "players",
            "type": "u8"
          },
          {
            "name": "ticketPrice",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "ticket",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "player",
            "type": "publicKey"
          },
          {
            "name": "playerIndex",
            "type": "u8"
          }
        ]
      }
    },
    {
      "name": "winner",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "player",
            "type": "publicKey"
          },
          {
            "name": "playerIndex",
            "type": "u8"
          }
        ]
      }
    }
  ]
};

export const IDL: RussianRulette = {
  "version": "0.1.0",
  "name": "russian_rulette",
  "instructions": [
    {
      "name": "createGame",
      "accounts": [
        {
          "name": "russianRulette",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "owner",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "ticketPrice",
          "type": "u64"
        },
        {
          "name": "randomOracle",
          "type": "publicKey"
        }
      ]
    },
    {
      "name": "buyTicket",
      "accounts": [
        {
          "name": "ticket",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "player",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "russianRulette",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    }
  ],
  "accounts": [
    {
      "name": "russianRulette",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "authority",
            "type": "publicKey"
          },
          {
            "name": "winner",
            "type": "publicKey"
          },
          {
            "name": "randomOracle",
            "type": "publicKey"
          },
          {
            "name": "players",
            "type": "u8"
          },
          {
            "name": "ticketPrice",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "ticket",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "player",
            "type": "publicKey"
          },
          {
            "name": "playerIndex",
            "type": "u8"
          }
        ]
      }
    },
    {
      "name": "winner",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "player",
            "type": "publicKey"
          },
          {
            "name": "playerIndex",
            "type": "u8"
          }
        ]
      }
    }
  ]
};