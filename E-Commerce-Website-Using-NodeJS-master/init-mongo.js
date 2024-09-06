db.createUser({
  user: "admin",
  pwd: "pass",
  roles: [
    {
      role: "readWrite",
      db: "shopping-cart"
    }
  ]
});
