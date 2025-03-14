---
title: "HTML. Часть 5"
description: "Инструкция по правильной разметке и созданию доступных HTML-форм на сайте."
course: "first-sem"
date: "2024-09-23"
---

# Шаг 5. Форма

_Автор: Мелихова Ева-София_

Формы — это один из ключевых элементов на веб-страницах, позволяющий пользователям вводить и отправлять данные. Основная структура формы:

```html
<form action="/submit" method="post">
    <!-- Здесь будут поля ввода и другие элементы -->
</form>
```

Тег `<form>` имеет два важных атрибута:

- **action** — это URL, куда отправляются данные формы.
- **method** — определяет способ отправки данных: GET или POST.

Возьмем пример формы с другого макета, чтобы разобрать больше полей:

![Пример структуры веб-страницы](/web-course-site/html/example11.png)

Основные атрибуты `<input>`

**type** определяет тип элемента ввода (т.е., какой вид поля будет показан пользователю) Примеры: text, password, email, checkbox, radio и др.

- **text** однострочное текстовое поле для ввода. Это самый часто используемый тип. Пример: имя.
- **password** — текстовое поле, в котором вводимые символы скрываются (обычно отображаются как точки или звёздочки)
- **email** — поле для ввода электронной почты. Браузер автоматически проверяет, чтобы введённые данные имели правильный формат e-mail.
- **tel** — поле для ввода телефонного номера. Хотя браузер не проверяет формат номера, оно полезно для ввода контактных данных.
- **checkbox** — флажок, который позволяет выбрать несколько вариантов. Вы его часто могли наблюдать в фильтрах каталогов, когда вы могли выбрать несколько цветов обуви или размера.
- **radio** — переключатель, который позволяет выбрать только один вариант из группы. Например, в форме нужно обозначить какого вы пола. С помощью как раз атрибута name он понимает, что они относятся к одной группе и не дает выбрать их два.
- **date** — поле для выбора даты. Браузер предоставляет календарь для удобного выбора.
- **reset** — кнопка для сброса всех полей формы к их значениям по умолчанию.

**name** — задаёт имя поля формы. Это имя используется для передачи данных на сервер.

**value** — устанавливает значение по умолчанию для элемента `<input>`. Это значение будет отправлено на сервер, если пользователь не изменит его.

**placeholder** — отображает текст внутри поля ввода до тех пор, пока пользователь не начнёт вводить данные. Это полезно для подсказок.

**required** — делает поле обязательным для заполнения. Если пользователь попытается отправить форму без заполнения этого поля, браузер покажет сообщение об ошибке.

Про другие атрибуты можете подробнее почитать на [Дока](https://doka.guide/html/) . Что же в итоге получилось:

### Пример формы:

```html
<form action="" method="post">
    <label for="email">Электронная почта:</label>
    <input
        type="email"
        id="email"
        name="email"
        placeholder="”Введите"
        почту”
        required
    />

    <label for="username">Имя: </label>
    <input
        type="text"
        id="username"
        name="username"
        placeholder="”Введите"
        имя”
        required
    />

    <label for="password">Пароль:</label>
    <input
        type="password"
        id="password"
        name="password"
        placeholder="”Введите"
        пароль”
        required
    />

    <label>
        Офис
        <select name="office">
            <option value="russia" selected>Москва</option>
            <option value="peterburgs">Санкт-Петербруг</option>
            <option value="samara">Самара</option>
        </select>
    </label>

    <fieldset>
        <legend>Выберите роль:</legend>
        <label>
            <input type="radio" name="role" value="user" />
            Пользователь
        </label>
        <label>
            <input type="radio" name="role" value="admin" />
            Администратор
        </label>
    </fieldset>

    <button type="submit">Отправить</button>
    <input type="reset" value="Сбросить" />
</form>
```

Вы заметили, что тут есть какой-то не понятный `<label>`?

`<label>` - это подпись к полю. Оборачивать элемент `<input>` в тег `<label>` — это важная практика в веб-разработке, так как она улучшает взаимодействие пользователя с формой и повышает доступность веб-страницы. Давайте разберём, почему это так важно и что даёт правильное использование `<label>`.
Правильное использование `<label>` важно для людей, использующих вспомогательные технологии, такие как скринридеры (программы, которые озвучивают содержимое экрана для слабовидящих пользователей). Скринридеры используют информацию из тега `<label>`, чтобы сообщить пользователю, что он должен ввести в это поле.

Когда `<label>` связано с полем ввода через атрибут for или оборачивает элемент `<input>`, скринридер может озвучить описание, что даёт пользователю более чёткое представление о том, что от него требуется. Есть два варианта оборачивания - это вложить `<input>` в `<label>` или соединить их с помощью id и for.
Два варианта оборачивания на примере:

```html
<label>
    Email
    <input type="email" name="email" placeholder="Введите ваш email" />
</label>
```

```html
<label for="email">Email</label>
<input type="email" id="email" name="email" placeholder="Введите ваш email" />
```

Даже если в макете или интерфейсе нет необходимости показывать текстовую подпись рядом с полем ввода (например, в случае иконок или минималистичных дизайнов), важно всё равно использовать <label>, но скрыть его с помощью CSS. В ваших макетах у большинства отсуствует подпись, ее как с заголовками нужно добавить.
У формы достаточно много тонкостей, поэтому рекомендую прочитать раздел в Доке на тему форм.

**Надеюсь**, после 5-х частей тебе стало понятнее, как верстать. Если у тебя остались вопросы - напиши своему наставнику.

![Mem](/web-course-site/html/mem2.png)
