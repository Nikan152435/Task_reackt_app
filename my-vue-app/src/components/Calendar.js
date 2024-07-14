// src/Calendar.js
import React from 'react';
import './App.css';

const daysOfWeek = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
const months = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];
const monthsGenitive = ['Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня', 'Июля', 'Августа', 'Сентября', 'Октября', 'Ноября', 'Декабря'];

const Calendar = ({ date }) => {
  const day = date.getDate();
  const dayOfWeek = date.getDay();
  const month = date.getMonth();
  const year = date.getFullYear();

  const startOfMonth = new Date(year, month, 1);
  const endOfMonth = new Date(year, month + 1, 0);

  const daysInMonth = endOfMonth.getDate();
  const startDayOfWeek = startOfMonth.getDay();

  const calendarDays = [];
  let dayCounter = 1;

  // Previous month's days
  if (startDayOfWeek !== 0) {
    const prevMonthEnd = new Date(year, month, 0);
    const prevMonthDays = prevMonthEnd.getDate();
    for (let i = startDayOfWeek; i > 0; i--) {
      calendarDays.push({
        day: prevMonthDays - i + 1,
        isCurrentMonth: false
      });
    }
  }

  // Current month's days
  for (let i = 1; i <= daysInMonth; i++) {
    calendarDays.push({
      day: i,
      isCurrentMonth: true,
      isToday: i === day
    });
  }

  // Next month's days
  let nextMonthDayCounter = 1;
  while (calendarDays.length % 7 !== 0) {
    calendarDays.push({
      day: nextMonthDayCounter++,
      isCurrentMonth: false
    });
  }

  const renderCalendarRows = () => {
    const rows = [];
    for (let i = 0; i < calendarDays.length; i += 7) {
      const week = calendarDays.slice(i, i + 7);
      rows.push(
        <tr key={i}>
          {week.map((day, index) => (
            <td
              key={index}
              className={
                day.isCurrentMonth
                  ? day.isToday ? 'ui-datepicker-today' : ''
                  : 'ui-datepicker-other-month'
              }
            >
              {day.day}
            </td>
          ))}
        </tr>
      );
    }
    return rows;
  };

  return (
    <div className="ui-datepicker">
      <div className="ui-datepicker-material-header">
        <div className="ui-datepicker-material-day">{daysOfWeek[dayOfWeek]}</div>
        <div className="ui-datepicker-material-date">
          <div className="ui-datepicker-material-day-num">{day}</div>
          <div className="ui-datepicker-material-month">{monthsGenitive[month]}</div>
          <div className="ui-datepicker-material-year">{year}</div>
        </div>
      </div>
      <div className="ui-datepicker-header">
        <div className="ui-datepicker-title">
          <span className="ui-datepicker-month">{months[month]}</span>&nbsp;<span className="ui-datepicker-year">{year}</span>
        </div>
      </div>
      <table className="ui-datepicker-calendar">
        <colgroup>
          <col />
          <col />
          <col />
          <col />
          <col />
          <col className="ui-datepicker-week-end" />
          <col className="ui-datepicker-week-end" />
        </colgroup>
        <thead>
          <tr>
            <th scope="col" title="Понедельник">Пн</th>
            <th scope="col" title="Вторник">Вт</th>
            <th scope="col" title="Среда">Ср</th>
            <th scope="col" title="Четверг">Чт</th>
            <th scope="col" title="Пятница">Пт</th>
            <th scope="col" title="Суббота">Сб</th>
            <th scope="col" title="Воскресенье">Вс</th>
          </tr>
        </thead>
        <tbody>
          {renderCalendarRows()}
        </tbody>
      </table>
    </div>
  );
};

export default Calendar;