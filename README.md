# Creative Hub front-end

## Основные ссылки

| название | ссылка |
| :-- | :-- |
| Макет | https://www.figma.com/file/s0lRZOJEYbVcmLXi0lKkE4/Creative-Hub?type=design&node-id=2-4011&mode=design&t=w6nnvjK274CTEUSE-0 |

## Основные используемые библиотеки

| Библиотека     | Описание                                   |
| :------------- | :----------------------------------------- |
| Next.js        | React фрэймворк                            |
| Redux Toolkit        | Стейт менеджер                       |
| [Material UI](https://mui.com/material-ui/getting-started/)        | Библиотека интерфейсных компонентов                       |
| [emotion](https://emotion.sh/docs/introduction)        | CSS                       |

## Запуск проекта

### Клонирование проекта:

```bash
    git clone https://gitlab.com/auditor2/projects/creativehub/creativehub_front.git
```

### Переход в директорию проекта:

```bash
    cd creativehub_front
```

### Локальный запуск проекта или запуск для разработки

#### Необходимое  ПО:

- Node.js версия 20.0.0

### Установка зависимостей:

Необходимо убедиться, что версия node.js >= 18.17

```bash
    npm ci
```

### Запуск проекта для разработки:

```bash
    npm run dev
```

### Запуск продакшн сборки проекта локально:

```bash
    npm run build && npm run start
```

## Прочие скрипты

### Линтинг:

```bash
    npm run lint
```

## Правила работы с git

### Сообщение при коммите

Сообщение должно быть типа: `<type>(<optional scope>): <description>`

Пример: `feat(package)!: add commit message linting`

`!` Ставится после типа и скоупа перед двоеточием и обозначает, что в этом коммите какие-то критические изменения, например новые зависимости и тд.

Type коммита может быть:

- chore (уборка/чистка)
- feat/feature(какое-то нововведение)
- fix(фикс)
- improve(улучшение)
- revert(отмена изменений)

Scope(необязательно) - место в котором вносили изменения, например - checklist

Description: краткое описание того, что делали

Более подробно можно посмотреть здесь: [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/#summary) (есть русский)

Для ленивых может помочь😊: [commitizen](https://github.com/commitizen-tools/commitizen?ysclid=latvteq5y3833041544)

### Именование веток

Название ветки должно быть типа: `:type/:number-:name`

Пример: `feature/123-lint` или `feature/_-commit-lint`

Если по какой-то причине у задачи нет номера из битрикса вместо номера ставится `_`.

Типы у веток:

- chore (уборка/чистка)
- feat/feature(какое-то нововведение)
- fix(фикс)
- improve(улучшение)

name ветки должен быть **kebab-case** и состоять из 1-3 слов
