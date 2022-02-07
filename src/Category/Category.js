import React from 'react'

export default function Category() {
	return (
		<div>
			<a href="/cat">Назад</a>
				<ul>
					<li><a href="/cat/notebook">Ноутбуки</a></li>
					<li><a href="/cat/monitor">Мониторы</a></li>
					<li><a href="/cat/cellphone">Мобильные телефоны</a></li>
				</ul>
		</div>
	)
}
