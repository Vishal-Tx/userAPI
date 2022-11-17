const user = [
  {
    _id: "637514af647b9e44cc57d5f9",
    name: "Test User",
    email: "abc1@gmail.com",
    coin: 100,
    __v: 0,
  },
];

const amountTransferExample = {
  fromUser: {
    _id: "637637b117851ede0717de9c",
    name: "Test User",
    email: "abc@123@gmail.com",
    coin: 95,
    __v: 0,
  },
  toUser: {
    _id: "6376383e5bf74edd4d570a8f",
    name: "Test User1",
    email: "abc1@123@gmail.com",
    coin: 105,
    __v: 0,
  },
};

const listUser = {
  summary: "Get all users",
  tags: ["User"],
  description:
    "This request will return all the users that currently exists in database",
  responses: {
    200: {
      description: "OK",
      content: {
        "application/json": {
          schema: {
            type: "object",
            example: {
              user,
            },
          },
        },
      },
    },
    404: {
      description: "No user found.",
      content: {
        "application/json": {
          schema: {
            type: "object",
            example: {
              message: "No user found.",
            },
          },
        },
      },
    },
    500: {
      description: "Something went wrong",
    },
  },
};

const createUser = {
  summary: "Add a new user.",
  tags: ["User"],
  description: "This request will creates a user with 100 coins in database",
  requestBody: {
    content: {
      "application/json": {
        schema: {
          type: "object",
          properties: {
            name: {
              type: "String",
              description: "Name of the user",
              example: "Test User",
            },
            email: {
              type: "String",
              description: "Email of the user",
              example: "abc1@gmail.com",
            },
          },
        },
      },
    },
  },
  responses: {
    200: {
      description: "OK",
      content: {
        "application/json": {
          schema: {
            type: "object",
            example: {
              user,
            },
          },
        },
      },
    },
    403: {
      description: "No user found.",
      content: {
        "application/json": {
          schema: {
            type: "object",
            example: {
              message: "User already Exist.",
            },
          },
        },
      },
    },
    500: {
      description: "Something went wrong",
    },
  },
};

const checkBalance = {
  summary: "Check a User's Coin Balance.",
  tags: ["User"],
  description: "This request will return the Current coin amount of the user.",

  requestBody: {
    content: {
      "application/json": {
        schema: {
          type: "object",
          properties: {
            id: {
              type: "String",
              description: "User Id",
              example: "637514af647b9e44cc57d5f9",
            },
          },
        },
      },
    },
  },
  responses: {
    200: {
      description: "OK",
      content: {
        "application/json": {
          schema: {
            type: "object",
            example: {
              balance: 100,
            },
          },
        },
      },
    },
    400: {
      description: "No user found.",
      content: {
        "application/json": {
          schema: {
            type: "object",
            example: {
              message: "User doesn't exists.",
            },
          },
        },
      },
    },
    500: {
      description: "Something went wrong",
    },
  },
};

const transferAmount = {
  summary: "Transfer coin from one user to another.",
  tags: ["User"],
  description:
    "This request will transfer the requested amount from the sender to the receiver.",
  requestBody: {
    content: {
      "application/json": {
        schema: {
          type: "object",
          properties: {
            from: {
              type: "String",
              description: "Id of the Sender",
              example: "637637b117851ede0717de9c",
            },
            to: {
              type: "String",
              description: "Id of the receiver",
              example: "6376383e5bf74edd4d570a8f",
            },
            amount: {
              type: "Number",
              description: "Amount to be transfer",
              example: "5",
            },
          },
        },
      },
    },
  },
  responses: {
    200: {
      description: "OK",
      content: {
        "application/json": {
          schema: {
            type: "object",
            example: {
              amountTransferExample,
            },
          },
        },
      },
    },
    404: {
      description: "Account doesn't exist.",
      content: {
        "application/json": {
          schema: {
            example: {
              message: "The Receiver Account doesn't exist.",
            },
          },
        },
      },
    },
    400: {
      description: "Error in Coin Amount",
      content: {
        "application/json": {
          schema: {
            example: {
              message: "Amount can't be zero or negative.",
            },
          },
        },
      },
    },

    500: {
      description: "Something went wrong",
    },
  },
};

export const userDocs = {
  "/user": {
    get: listUser,
  },

  "/user/create": {
    post: createUser,
  },
  "/user/checkBalance": {
    post: checkBalance,
  },
  "/user/transferAmount": {
    post: transferAmount,
  },
};
