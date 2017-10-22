Сборка сервера: `yarn build-server`
Сборка фронта: `yarn build`
Запуск сервера: `yarn server-dev`
Запуск клиента: `yarn start-dev`

Для миграций используется пакет migrate-mongo
https://www.npmjs.com/package/migrate-mongo
Конфиг и файлы миграции находятся в папке `mongo-migrations`

Заполнение БД тестовыми данными: `yarn init-data`

TODO:
1. Удалить не используемые пакеты
2. Добавить асинхронные экшены
3. Разделить сервисы сервера на домен и инфраструктуру
4. Postgresql
