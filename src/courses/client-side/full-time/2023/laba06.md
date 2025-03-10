---
number: "6"
title: "Продвинутая работа с типами"
type: "labs"
---

# Обобщенные типы и операции с типами

Цель: освоиться с более сложной работой с типами, используя различные операторы.

## Порядок выполнения лабораторной работы:

Решите предложенные задачи на операции с типами в новой ветке от начального коммита или в ветке с задачами из предыдущих лабораторных работ.

### Задачи

#### Если

Реализуйте обобщенный тип `If<C, T, F>`, который принимает условие C, истинное значение T и ложное значение F. Ожидается, что C будет либо истинным, либо ложным, в то время как T и F могут быть любого типа.

Пригодится условный тип.

```ts
If<true, 'a', 'b'> ---> 'a'
If<false, 'a', 'b'> ---> 'b'
```

#### Первый в массиве

Реализуйте обобщенный тип `First<T>`, который принимает массив T и возвращает тип его первого элемента.

Пригодятся условные типы, оператор индексированного доступа и то что у массивов есть свойство длины.

```ts
First<[3, 2, 1]> ---> 3
First<[() => 123, { a: string }]> ---> () => 123
First<[]> ---> never
First<[undefined]> ---> undefined
```

#### Ожидаемый тип

Реализуйте обобщенный тип `MyAwaited<T>`, чтобы получить тип, который находится внутри обернутого типа, например в Promise.

Пригодятся условные типы и infer.

```ts
MyAwaited<Promise<string>> ---> string
MyAwaited<Promise<{ field: number }>> ---> { field: number }
MyAwaited<Promise<string | number>> ---> string | number
```

#### Кортеж в объединение

Реализуйте обобщенный тип `TupleToUnion<T>`, который создает объединенный тип из его значений.

Пригодятся условные типы и infer.

```ts
TupleToUnion<['1', '2', '3']> ---> '1' | '2' | '3'
TupleToUnion<[1, 2, 3]> ---> 1 | 2 | 3
```

#### Кортеж в объект

Реализуйте обобщенный тип `TupleToObject<T>`, который получив кортеж, преобразует его в объектный тип, где ключ и значение совпадают и являются элементами массива.

Пригодятся сопоставленные типы (in), оператор индексированного доступа.

```ts
const tuple1 = [1, 2, 3] as const
TupleToObject<typeof tuple1> ---> {1:1,2:2,3:3}

const tuple2 = ['a', 'b', 'c'] as const
TupleToObject<typeof tuple> ---> {'a': 'a', 'b': 'b', 'c': 'c'}
```

## Github

Зафиксируйте результаты работы с помощью системы контроля версий git в репозиторий на github. Отправьте коммиты на ваш репозиторий в Classroom.

## Требования

- Реализованы обобщенные типы.

## Результат выполнения

Код удовлетворяющий требованиям, сохраненный в коммите на удаленном репозитории.

## Источники для занятия

- [Creating Types from Types](https://www.typescriptlang.org/docs/handbook/2/types-from-types.html)
- [TypeScript: infer и conditional types. Продвинутый TS на примерах](https://habr.com/ru/articles/778190/)
- [Карманная книга по TypeScript. Часть 6. Манипуляции с типами](https://habr.com/ru/companies/macloud/articles/562786/)

## Основные источники по TS

- [The TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/intro.html)
- [Типизация - лекция от яндекса](https://youtube.com/live/M-58whTqjgU)
- [Типизация продвинутый - лекция от яндекса](https://youtube.com/live/YOly5_M040w)
- [Справочник Typescript (не последняя версия)](https://scriptdev.ru/)
- [Серия статей Изучение TypeScript](https://habr.com/ru/articles/663964/)
- [Курс TypeScript](https://code-basics.com/ru/languages/typescript)

## Вопросы для защиты

1. Условные типы (Conditional Types) и infer
1. Оператор индексированного доступа (Indexed Access Types)
1. Сопоставленные типы (Mapped Types)
1. Keyof и Typeof
1. ES модули
1. Словами объяснить как работают `Record<Keys, Type>` / `Omit<Type, Keys>` / `Readonly<Type>`
