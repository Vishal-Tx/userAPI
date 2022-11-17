export const swaggerDocument = {
  openapi: "3.0.0",
  info: {
    title: "User API",
    description:
      "This API let you create a user with initial amount of 100 coin. You can chek your balance and even transfer your coins to another user.",
    version: "0.0.1",
  },
  servers: [
    {
      url: "http://localhost:3000/user",
      description: "Base url",
    },
  ],
  tags: [{ name: "User", description: "All User routes" }],

  paths: {
    "/create": {
      post: {
        summary: "Add a new user.",
        tags: ["User"],
      },
    },
  },
};
