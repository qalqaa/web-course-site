---
title: "HTML. Часть 3"
description: "Правильная разметка заголовков для семантики и SEO."
course: "first-sem"
date: "2024-09-23"
---

# Шаг 3. Заголовки

_Автор: Мелихова Ева-София_

После того, как крупные смысловые блоки страницы выделены, следующий важный шаг — это правильная разметка заголовков.

На первый взгляд заголовки кажутся простыми, но главная сложность заключается в том, что не всё, что выглядит как заголовок, на самом деле им является. Часто крупный текст на макете воспринимается как заголовок, хотя его назначение может быть другим. Здесь важнее не визуальный аспект, а смысловая нагрузка.

## Как отличить заголовок?

Заголовок выполняет резюмирующую функцию — он кратко передает суть текста, который следует за ним. Если прочитав заголовок, вы получаете представление о содержании следующего блока текста, значит, это заголовок.

При верстке стоит включать заголовки в разметку даже тогда, когда на макете они не указаны явно, но логически требуются. Это улучшает структуру документа, делая его более понятным для пользователей и поисковых систем. Если же нужно скрыть заголовок визуально, но сохранить его для SEO и скринридеров, можно воспользоваться CSS, чтобы сделать его «невидимым», но доступным для технологий. О способах скрытия можно прочитать в заметке [Визуальное скрытие элементов](/web-course-site/useful/hide-element).

![Пример структуры веб-страницы](/web-course-site/html/example4.png)

Для поисковых систем заголовок первого уровня — это основной индикатор того, на что сфокусировано содержимое страницы. Хорошо подобранный **`<h1>`** помогает улучшить позиции страницы в результатах поиска, поскольку он сообщает поисковым роботам, что является центральной темой контента.

Тег **`<h1>`** не должен использоваться внутри **`<section>`**, но в случае с баннером страницы, использование **`<h1>`** внутри тега **`<section>`** может быть оправдано, если этот баннер представляет основную тему страницы. На странице должен быть только один **`<h1>`**. Если по дизайну **`<h1>`** нет, то мы прописываем его сами и скрываем с помощью стилей.

![Пример структуры веб-страницы](/web-course-site/html/example5.png)

Следующим шагом в структуре идёт раздел «Услуги», который характеризует, о чем блок. Значит, берем тег **`<h2>`**.

Но бывает, что в макете нет явного заголовка. В таких случаях мы придаем блоку логическую структуру, добавляя скрытый заголовок второго уровня (**`<h2>`**). Этот элемент не будет виден пользователям, но обеспечит правильную семантическую разметку для поисковых систем и вспомогательных технологий.

Далее следуют названия самих услуг, таких как «работа с информацией», «розыск», «слежка и наблюдение», «бизнес-разведка». Эти элементы важны, поскольку они описывают основные направления работы агентства. Поскольку это ключевые услуги, их нужно обозначить заголовками третьего уровня (**`<h3>`**), так как они являются детализацией общего блока «Услуги».

![Пример структуры веб-страницы](/web-course-site/html/example6.png)

## Получаем такую разметку:

```html
<main>
    <section>
        <h1>Детективное информационное агентство</h1>
        …
    </section>
    <section>
        <h2>Услуги</h2>
        …
        <h3>Работа с информацией</h3>
        …
        <h3>Розыск</h3>
        …
    </section>
    <section>
        <h2>Как мы работаем</h2>
        …
    </section>
    <section>
        <h2>Наши клиенты</h2>
        …
    </section>
    <section>
        <h2>Связаться с нами</h2>
        …
    </section>
</main>
```
