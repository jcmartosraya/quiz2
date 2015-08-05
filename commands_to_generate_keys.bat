mkdir cert
cd cert
C:\OpenSSL-Win64\bin\openssl.exe genrsa -out quiz-2015-key.pem 2048
C:\OpenSSL-Win64\bin\openssl.exe req -new -sha256 -key quiz-2015-key.pem -out quiz-2015-csr.pem -config C:\OpenSSL-Win64\bin\openssl.cfg
C:\OpenSSL-Win64\bin\openssl.exe x509 -req -in quiz-2015-csr.pem -signkey quiz-2015-key.pem -out quiz-2015-cert.pem
