#!/usr/bin/env bash
echo "Creating mongo users..."

mongo admin -u root -p 123456 << EOF
db.createUser({user: 'admin', pwd: '123456', roles: [{role: 'userAdminAnyDatabase', db: 'admin'}]});
db.grantRolesToUser(
   "admin",
   [ "clusterAdmin" ]
);
EOF

mongo admin -u admin -p 123456 << EOF
use tugboat
db.createUser({user: 'tugboatAdmin', pwd: '123456', roles:[{role:'readWrite',db:'tugboat'}]})
EOF
echo "Mongo users created for yourdb."