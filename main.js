const wrraperrDate = document.querySelector('.wrapperr')

wrraperrDate.foreach(wrapperr => {
    const date = dayjs(wrapperr.dataset.date)
    const dateElement = wrapperr.querySelector('.date')
    dateElement.innerText = date
})