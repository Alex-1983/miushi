# Проект «cat energy»

---

Описание

Именование классов по БЭМ.

Диспетчер подключения стилей source/sass/style.scss генерируется автоматически, содержит импорты стилевых файлов использованных в разметке блоков.

Используется относительно жёсткий кодгайд.

Перед созданием коммита происходит проверка индексированных файлов. При ошибках коммит не происходит, ошибки выводятся в терминал.



---


Команды


npm start          # сборка c запуском сервера разработки.

npm run build      # сборка без запуска сервера разработки.

npm test       # проверка всех html, scss- и js-файлов на соответствие правилам.



---


Структура


build/             # Папка сборки

source/            # Исходники

  fonts/           # Шрифты

  img/             # Доп. изображения

  js/              # js файлы

  libs_js/         # Сторонние js файлы

  sass/            # Стилевые файлы

  templates/       # html файлы
  
