sudo groupadd webserv

touch ./configs/.login

echo "test" >> .login

chgrp webserv .login
chmod 740 .login