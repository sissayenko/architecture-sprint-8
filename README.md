Для запуска проекта в докере необходима установленная локальная proxy: [proxyman.io](https://proxyman.io/windows)

Что бы применились правильные настройки reports-realms необходимо удалить из keycloak существующий realm и заново запустить docker compose
```
docker compose -f .\docker-compose.yaml  up
```

Клиентское приложение доступно по адресу http://localhost.proxyman.io:3000/

Проверка работоспособности:
* user1 должен получать "Failed to call /reports. Error code: 403" при нажатии кнопки Download Report
* prothetic1 должен получать "Response: 200 /reports: prothetic1" при нажатии кнопки Download Report
* user1/prothetic1 должны получать "Response: 200 /data: <username>" при нажатии кнопки Get Data
* wget http://localhost.proxyman.io:8000/data должен возвращать 401 Unauthorized
* wget http://localhost.proxyman.io:8000/info должен работать без какой либо авторизации