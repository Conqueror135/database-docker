db.createUser(
    {
        user: "thang",
        pwd: "thang",
        roles: [
            {
                role: "readWrite",
                db: "traceability"
            }
        ]
    }
);